import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "./firebase";

function toMillis(value) {
  if (!value) return 0;
  if (typeof value.toMillis === "function") return value.toMillis();
  if (value instanceof Date) return value.getTime();
  return 0;
}

function sortAttemptsByCreatedAt(docs, direction = "asc") {
  const sorted = [...docs].sort((a, b) => {
    const diff = toMillis(a.data().createdAt) - toMillis(b.data().createdAt);
    return direction === "desc" ? -diff : diff;
  });

  return sorted;
}

export async function fetchUserQuizAttemptDocs(userId, direction = "asc") {
  const attemptsRef = collection(db, "quizAttempts");

  try {
    const snapshot = await getDocs(
      query(attemptsRef, where("userId", "==", userId), orderBy("createdAt", direction))
    );
    return snapshot.docs;
  } catch (error) {
    const fallbackSnapshot = await getDocs(query(attemptsRef, where("userId", "==", userId)));
    return sortAttemptsByCreatedAt(fallbackSnapshot.docs, direction);
  }
}

export async function fetchUserQuizAttempts(userId, direction = "asc") {
  const docs = await fetchUserQuizAttemptDocs(userId, direction);
  return docs.map((snapshotDoc) => ({
    id: snapshotDoc.id,
    ...snapshotDoc.data(),
  }));
}
