const programmingQuestions = [

/* ===================================================
   DATA STRUCTURES (30)
=================================================== */

// EASY (10)
{ topic: "Data Structures", difficulty: "easy", question: "Which data structure follows FIFO?", options: ["Stack", "Queue", "Tree", "Graph"], correctAnswer: "Queue" },
{ topic: "Data Structures", difficulty: "easy", question: "Which data structure follows LIFO?", options: ["Queue", "Stack", "Array", "Tree"], correctAnswer: "Stack" },
{ topic: "Data Structures", difficulty: "easy", question: "Binary search requires?", options: ["Sorted array", "Unsorted array", "Graph", "Stack"], correctAnswer: "Sorted array" },
{ topic: "Data Structures", difficulty: "easy", question: "Array access complexity?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correctAnswer: "O(1)" },
{ topic: "Data Structures", difficulty: "easy", question: "DFS uses?", options: ["Stack", "Queue", "Heap", "Tree"], correctAnswer: "Stack" },
{ topic: "Data Structures", difficulty: "easy", question: "BFS uses?", options: ["Queue", "Stack", "Array", "Tree"], correctAnswer: "Queue" },
{ topic: "Data Structures", difficulty: "easy", question: "Which is non-linear?", options: ["Array", "Stack", "Tree", "Queue"], correctAnswer: "Tree" },
{ topic: "Data Structures", difficulty: "easy", question: "Linked list uses?", options: ["Pointers", "Index", "Sorting", "Heap"], correctAnswer: "Pointers" },
{ topic: "Data Structures", difficulty: "easy", question: "Preorder traversal visits?", options: ["Root first", "Left first", "Right first", "Leaf first"], correctAnswer: "Root first" },
{ topic: "Data Structures", difficulty: "easy", question: "Which supports recursion?", options: ["Stack", "Queue", "Graph", "Array"], correctAnswer: "Stack" },

// MEDIUM (10)
{ topic: "Data Structures", difficulty: "medium", question: "Time complexity of binary search?", options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], correctAnswer: "O(log n)" },
{ topic: "Data Structures", difficulty: "medium", question: "Worst case of quicksort?", options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"], correctAnswer: "O(n²)" },
{ topic: "Data Structures", difficulty: "medium", question: "Heap is used in?", options: ["Priority Queue", "Stack", "Graph", "Linked List"], correctAnswer: "Priority Queue" },
{ topic: "Data Structures", difficulty: "medium", question: "Merge sort complexity?", options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"], correctAnswer: "O(n log n)" },
{ topic: "Data Structures", difficulty: "medium", question: "Hash table average complexity?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correctAnswer: "O(1)" },
{ topic: "Data Structures", difficulty: "medium", question: "AVL tree is?", options: ["Balanced BST", "Heap", "Queue", "Graph"], correctAnswer: "Balanced BST" },
{ topic: "Data Structures", difficulty: "medium", question: "Dijkstra finds?", options: ["Shortest path", "MST", "Cycle", "Sort"], correctAnswer: "Shortest path" },
{ topic: "Data Structures", difficulty: "medium", question: "Stack overflow means?", options: ["Memory full", "Queue full", "Heap full", "Graph cycle"], correctAnswer: "Memory full" },
{ topic: "Data Structures", difficulty: "medium", question: "Binary tree max nodes at level L?", options: ["2^L", "L²", "2L", "log L"], correctAnswer: "2^L" },
{ topic: "Data Structures", difficulty: "medium", question: "Cycle detection uses?", options: ["DFS", "Queue", "Heap", "Sort"], correctAnswer: "DFS" },

// HARD (10)
{ topic: "Data Structures", difficulty: "hard", question: "Red-Black tree height?", options: ["O(log n)", "O(n)", "O(1)", "O(n²)"], correctAnswer: "O(log n)" },
{ topic: "Data Structures", difficulty: "hard", question: "Bellman-Ford handles?", options: ["Negative weights", "Sorting", "Traversal", "Heap"], correctAnswer: "Negative weights" },
{ topic: "Data Structures", difficulty: "hard", question: "Kruskal algorithm finds?", options: ["MST", "Shortest path", "Cycle", "Traversal"], correctAnswer: "MST" },
{ topic: "Data Structures", difficulty: "hard", question: "Space complexity of merge sort?", options: ["O(n)", "O(1)", "O(log n)", "O(n²)"], correctAnswer: "O(n)" },
{ topic: "Data Structures", difficulty: "hard", question: "Topological sort applies to?", options: ["DAG", "Tree", "Heap", "Queue"], correctAnswer: "DAG" },
{ topic: "Data Structures", difficulty: "hard", question: "Trie is used for?", options: ["Prefix search", "Sorting", "Heap", "Cycle"], correctAnswer: "Prefix search" },
{ topic: "Data Structures", difficulty: "hard", question: "Amortized analysis applies to?", options: ["Dynamic array", "Queue only", "Graph", "Stack"], correctAnswer: "Dynamic array" },
{ topic: "Data Structures", difficulty: "hard", question: "Heap sort complexity?", options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"], correctAnswer: "O(n log n)" },
{ topic: "Data Structures", difficulty: "hard", question: "Sparse matrix storage best using?", options: ["Linked list", "Array", "Stack", "Queue"], correctAnswer: "Linked list" },
{ topic: "Data Structures", difficulty: "hard", question: "Floyd’s algorithm detects?", options: ["Cycle", "Sort", "Tree", "Heap"], correctAnswer: "Cycle" },
/* ===================================================
   OOPS (30)
=================================================== */

// EASY (10)
{ topic: "OOPS", difficulty: "easy", question: "Encapsulation means?", options: ["Data hiding", "Inheritance", "Compilation", "Sorting"], correctAnswer: "Data hiding" },
{ topic: "OOPS", difficulty: "easy", question: "Polymorphism allows?", options: ["Many forms", "Single form", "Looping", "Execution"], correctAnswer: "Many forms" },
{ topic: "OOPS", difficulty: "easy", question: "Inheritance provides?", options: ["Code reuse", "Deletion", "Compilation", "Iteration"], correctAnswer: "Code reuse" },
{ topic: "OOPS", difficulty: "easy", question: "Abstraction hides?", options: ["Implementation details", "Variables", "Loops", "Objects"], correctAnswer: "Implementation details" },
{ topic: "OOPS", difficulty: "easy", question: "Object is instance of?", options: ["Class", "Function", "Compiler", "Loop"], correctAnswer: "Class" },
{ topic: "OOPS", difficulty: "easy", question: "Constructor is used to?", options: ["Initialize object", "Destroy object", "Compile class", "Delete method"], correctAnswer: "Initialize object" },
{ topic: "OOPS", difficulty: "easy", question: "Destructor is used to?", options: ["Release resources", "Initialize", "Compile", "Override"], correctAnswer: "Release resources" },
{ topic: "OOPS", difficulty: "easy", question: "Method overriding occurs in?", options: ["Inheritance", "Encapsulation", "Compilation", "Sorting"], correctAnswer: "Inheritance" },
{ topic: "OOPS", difficulty: "easy", question: "Which supports runtime polymorphism?", options: ["Method overriding", "Method overloading", "Constructor", "Destructor"], correctAnswer: "Method overriding" },
{ topic: "OOPS", difficulty: "easy", question: "Private members are accessed via?", options: ["Getter/Setter", "Direct access", "Global variable", "Pointer"], correctAnswer: "Getter/Setter" },

// MEDIUM (10)
{ topic: "OOPS", difficulty: "medium", question: "Method overloading is example of?", options: ["Compile-time polymorphism", "Runtime polymorphism", "Abstraction", "Encapsulation"], correctAnswer: "Compile-time polymorphism" },
{ topic: "OOPS", difficulty: "medium", question: "Virtual function supports?", options: ["Dynamic binding", "Static binding", "Compilation", "Looping"], correctAnswer: "Dynamic binding" },
{ topic: "OOPS", difficulty: "medium", question: "Diamond problem occurs in?", options: ["Multiple inheritance", "Single inheritance", "Encapsulation", "Composition"], correctAnswer: "Multiple inheritance" },
{ topic: "OOPS", difficulty: "medium", question: "Interface contains?", options: ["Abstract methods", "Concrete methods only", "Variables only", "Loops"], correctAnswer: "Abstract methods" },
{ topic: "OOPS", difficulty: "medium", question: "Access specifier for subclass access?", options: ["Protected", "Private", "Public only", "Static"], correctAnswer: "Protected" },
{ topic: "OOPS", difficulty: "medium", question: "Static members belong to?", options: ["Class", "Object", "Function", "Compiler"], correctAnswer: "Class" },
{ topic: "OOPS", difficulty: "medium", question: "Composition represents?", options: ["Has-a relationship", "Is-a relationship", "Looping", "Inheritance"], correctAnswer: "Has-a relationship" },
{ topic: "OOPS", difficulty: "medium", question: "Aggregation is weaker form of?", options: ["Composition", "Inheritance", "Encapsulation", "Polymorphism"], correctAnswer: "Composition" },
{ topic: "OOPS", difficulty: "medium", question: "Final method cannot be?", options: ["Overridden", "Called", "Declared", "Compiled"], correctAnswer: "Overridden" },
{ topic: "OOPS", difficulty: "medium", question: "Encapsulation improves?", options: ["Security", "Sorting", "Speed only", "Memory leak"], correctAnswer: "Security" },

// HARD (10)
{ topic: "OOPS", difficulty: "hard", question: "Liskov Substitution Principle ensures?", options: ["Subclass substitutability", "Encapsulation", "Compilation", "Sorting"], correctAnswer: "Subclass substitutability" },
{ topic: "OOPS", difficulty: "hard", question: "Open-Closed Principle means?", options: ["Open for extension", "Closed for modification", "Both A and B", "None"], correctAnswer: "Both A and B" },
{ topic: "OOPS", difficulty: "hard", question: "Dependency Injection promotes?", options: ["Loose coupling", "Tight coupling", "Sorting", "Compilation"], correctAnswer: "Loose coupling" },
{ topic: "OOPS", difficulty: "hard", question: "Cohesion refers to?", options: ["Relatedness within module", "Coupling", "Sorting", "Inheritance"], correctAnswer: "Relatedness within module" },
{ topic: "OOPS", difficulty: "hard", question: "Coupling should be?", options: ["Low", "High", "Medium", "None"], correctAnswer: "Low" },
{ topic: "OOPS", difficulty: "hard", question: "Abstract class can contain?", options: ["Abstract and concrete methods", "Only abstract", "Only concrete", "No methods"], correctAnswer: "Abstract and concrete methods" },
{ topic: "OOPS", difficulty: "hard", question: "SOLID principles improve?", options: ["Maintainability", "Sorting", "Speed only", "Memory usage"], correctAnswer: "Maintainability" },
{ topic: "OOPS", difficulty: "hard", question: "Factory pattern creates?", options: ["Objects", "Loops", "Variables", "Compilers"], correctAnswer: "Objects" },
{ topic: "OOPS", difficulty: "hard", question: "Singleton ensures?", options: ["Single instance", "Multiple instances", "Inheritance", "Encapsulation"], correctAnswer: "Single instance" },
{ topic: "OOPS", difficulty: "hard", question: "Observer pattern is used in?", options: ["Event systems", "Sorting", "Compilation", "Memory management"], correctAnswer: "Event systems" },
/* ===================================================
   PYTHON (30)
=================================================== */

// EASY (10)
{ topic: "Python", difficulty: "easy", question: "Which keyword defines a function in Python?", options: ["func", "define", "def", "function"], correctAnswer: "def" },
{ topic: "Python", difficulty: "easy", question: "Which data type is immutable?", options: ["List", "Dictionary", "Tuple", "Set"], correctAnswer: "Tuple" },
{ topic: "Python", difficulty: "easy", question: "Python is a?", options: ["Compiled language", "Interpreted language", "Assembly language", "Machine language"], correctAnswer: "Interpreted language" },
{ topic: "Python", difficulty: "easy", question: "Which symbol is used for comments?", options: ["//", "#", "/* */", "--"], correctAnswer: "#" },
{ topic: "Python", difficulty: "easy", question: "Which function prints output?", options: ["echo()", "print()", "printf()", "output()"], correctAnswer: "print()" },
{ topic: "Python", difficulty: "easy", question: "Which operator is exponent?", options: ["^", "*", "**", "//"], correctAnswer: "**" },
{ topic: "Python", difficulty: "easy", question: "List is?", options: ["Mutable", "Immutable", "Static", "Constant"], correctAnswer: "Mutable" },
{ topic: "Python", difficulty: "easy", question: "Dictionary stores data in?", options: ["Key-value pairs", "Index only", "Stack form", "Queue form"], correctAnswer: "Key-value pairs" },
{ topic: "Python", difficulty: "easy", question: "Which keyword creates class?", options: ["define", "class", "struct", "object"], correctAnswer: "class" },
{ topic: "Python", difficulty: "easy", question: "Which loop iterates sequence?", options: ["for", "while", "do-while", "repeat"], correctAnswer: "for" },

// MEDIUM (10)
{ topic: "Python", difficulty: "medium", question: "What is output of len([1,2,3])?", options: ["2", "3", "1", "Error"], correctAnswer: "3" },
{ topic: "Python", difficulty: "medium", question: "Lambda function is?", options: ["Anonymous function", "Named function", "Recursive function", "Generator"], correctAnswer: "Anonymous function" },
{ topic: "Python", difficulty: "medium", question: "List comprehension returns?", options: ["List", "Tuple", "Set", "Dict"], correctAnswer: "List" },
{ topic: "Python", difficulty: "medium", question: "Which handles exceptions?", options: ["try-except", "if-else", "loop", "class"], correctAnswer: "try-except" },
{ topic: "Python", difficulty: "medium", question: "Which module handles math?", options: ["random", "math", "sys", "os"], correctAnswer: "math" },
{ topic: "Python", difficulty: "medium", question: "Which function reads file?", options: ["read()", "open()", "file()", "scan()"], correctAnswer: "open()" },
{ topic: "Python", difficulty: "medium", question: "Generator uses?", options: ["yield", "return", "break", "continue"], correctAnswer: "yield" },
{ topic: "Python", difficulty: "medium", question: "Which converts string to int?", options: ["str()", "int()", "float()", "convert()"], correctAnswer: "int()" },
{ topic: "Python", difficulty: "medium", question: "Which creates virtual environment?", options: ["venv", "pip", "numpy", "flask"], correctAnswer: "venv" },
{ topic: "Python", difficulty: "medium", question: "Which is correct slicing?", options: ["a[1:3]", "a(1:3)", "a{1:3}", "a<1:3>"], correctAnswer: "a[1:3]" },

// HARD (10)
{ topic: "Python", difficulty: "hard", question: "Time complexity of dictionary lookup?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correctAnswer: "O(1)" },
{ topic: "Python", difficulty: "hard", question: "MRO stands for?", options: ["Method Resolution Order", "Module Run Order", "Memory Read Operation", "Main Runtime Object"], correctAnswer: "Method Resolution Order" },
{ topic: "Python", difficulty: "hard", question: "GIL stands for?", options: ["Global Interpreter Lock", "Global Index Lock", "Graph Interface Layer", "General Internal Loop"], correctAnswer: "Global Interpreter Lock" },
{ topic: "Python", difficulty: "hard", question: "Decorators modify?", options: ["Functions", "Loops", "Variables", "Compiler"], correctAnswer: "Functions" },
{ topic: "Python", difficulty: "hard", question: "Which supports concurrency?", options: ["asyncio", "loop", "sort", "compile"], correctAnswer: "asyncio" },
{ topic: "Python", difficulty: "hard", question: "__init__ is?", options: ["Constructor", "Destructor", "Loop", "Compiler"], correctAnswer: "Constructor" },
{ topic: "Python", difficulty: "hard", question: "__str__ returns?", options: ["String representation", "Integer", "Boolean", "Memory address"], correctAnswer: "String representation" },
{ topic: "Python", difficulty: "hard", question: "Metaclass defines?", options: ["Class behavior", "Object only", "Loop", "Exception"], correctAnswer: "Class behavior" },
{ topic: "Python", difficulty: "hard", question: "Which library used for ML?", options: ["scikit-learn", "flask", "django", "tkinter"], correctAnswer: "scikit-learn" },
{ topic: "Python", difficulty: "hard", question: "Which creates deep copy?", options: ["copy.deepcopy()", "copy()", "clone()", "assign()"], correctAnswer: "copy.deepcopy()" },
/* ===================================================
   MACHINE LEARNING (30)
=================================================== */

// EASY (10)
{ topic: "Machine Learning", difficulty: "easy", question: "Supervised learning requires?", options: ["Labeled data", "Unlabeled data", "Random data", "Sorted data"], correctAnswer: "Labeled data" },
{ topic: "Machine Learning", difficulty: "easy", question: "Which is classification?", options: ["Logistic Regression", "K-Means", "PCA", "Clustering"], correctAnswer: "Logistic Regression" },
{ topic: "Machine Learning", difficulty: "easy", question: "Which is unsupervised?", options: ["K-Means", "Linear Regression", "Decision Tree", "SVM"], correctAnswer: "K-Means" },
{ topic: "Machine Learning", difficulty: "easy", question: "Overfitting means?", options: ["Model too complex", "Model too simple", "No data", "No training"], correctAnswer: "Model too complex" },
{ topic: "Machine Learning", difficulty: "easy", question: "Training data is used to?", options: ["Train model", "Test model", "Deploy model", "Delete model"], correctAnswer: "Train model" },
{ topic: "Machine Learning", difficulty: "easy", question: "Accuracy measures?", options: ["Correct predictions", "Loss only", "Speed", "Memory"], correctAnswer: "Correct predictions" },
{ topic: "Machine Learning", difficulty: "easy", question: "Which is regression?", options: ["Linear Regression", "K-Means", "Clustering", "PCA"], correctAnswer: "Linear Regression" },
{ topic: "Machine Learning", difficulty: "easy", question: "Dataset split includes?", options: ["Train & Test", "Compile & Run", "Sort & Merge", "Stack & Queue"], correctAnswer: "Train & Test" },
{ topic: "Machine Learning", difficulty: "easy", question: "Feature means?", options: ["Input variable", "Output only", "Algorithm", "Loss"], correctAnswer: "Input variable" },
{ topic: "Machine Learning", difficulty: "easy", question: "Model predicts?", options: ["Output", "Compiler", "Loop", "Pointer"], correctAnswer: "Output" },

// MEDIUM (10)
{ topic: "Machine Learning", difficulty: "medium", question: "Bias-variance tradeoff refers to?", options: ["Model complexity balance", "Sorting method", "Memory allocation", "Compilation"], correctAnswer: "Model complexity balance" },
{ topic: "Machine Learning", difficulty: "medium", question: "Gradient descent minimizes?", options: ["Loss function", "Accuracy", "Data", "Compiler"], correctAnswer: "Loss function" },
{ topic: "Machine Learning", difficulty: "medium", question: "Confusion matrix used for?", options: ["Classification evaluation", "Regression only", "Sorting", "Traversal"], correctAnswer: "Classification evaluation" },
{ topic: "Machine Learning", difficulty: "medium", question: "Precision measures?", options: ["True positives accuracy", "Total data", "Memory", "Speed"], correctAnswer: "True positives accuracy" },
{ topic: "Machine Learning", difficulty: "medium", question: "Recall measures?", options: ["True positive rate", "False positive rate", "Loss", "Variance"], correctAnswer: "True positive rate" },
{ topic: "Machine Learning", difficulty: "medium", question: "Regularization prevents?", options: ["Overfitting", "Underfitting", "Sorting", "Compilation"], correctAnswer: "Overfitting" },
{ topic: "Machine Learning", difficulty: "medium", question: "Cross-validation improves?", options: ["Model reliability", "Sorting speed", "Compilation", "Memory"], correctAnswer: "Model reliability" },
{ topic: "Machine Learning", difficulty: "medium", question: "SVM stands for?", options: ["Support Vector Machine", "Simple Vector Method", "Sorted Variable Model", "Standard Value Model"], correctAnswer: "Support Vector Machine" },
{ topic: "Machine Learning", difficulty: "medium", question: "Entropy measures?", options: ["Impurity", "Sorting", "Traversal", "Memory"], correctAnswer: "Impurity" },
{ topic: "Machine Learning", difficulty: "medium", question: "K in KNN represents?", options: ["Neighbors count", "Clusters", "Features", "Iterations"], correctAnswer: "Neighbors count" },

// HARD (10)
{ topic: "Machine Learning", difficulty: "hard", question: "Backpropagation is used in?", options: ["Neural Networks", "KNN", "Linear Regression", "Sorting"], correctAnswer: "Neural Networks" },
{ topic: "Machine Learning", difficulty: "hard", question: "Gradient vanishing problem occurs in?", options: ["Deep networks", "Shallow networks", "Sorting", "Trees"], correctAnswer: "Deep networks" },
{ topic: "Machine Learning", difficulty: "hard", question: "Dropout is used for?", options: ["Regularization", "Sorting", "Compilation", "Traversal"], correctAnswer: "Regularization" },
{ topic: "Machine Learning", difficulty: "hard", question: "ROC curve plots?", options: ["TPR vs FPR", "Loss vs Accuracy", "Data vs Time", "Precision vs Recall"], correctAnswer: "TPR vs FPR" },
{ topic: "Machine Learning", difficulty: "hard", question: "CNN used for?", options: ["Image processing", "Sorting", "Memory", "Compilation"], correctAnswer: "Image processing" },
{ topic: "Machine Learning", difficulty: "hard", question: "RNN suitable for?", options: ["Sequential data", "Sorting", "Graphs", "Compilation"], correctAnswer: "Sequential data" },
{ topic: "Machine Learning", difficulty: "hard", question: "Hyperparameter tuning improves?", options: ["Model performance", "Sorting", "Traversal", "Compilation"], correctAnswer: "Model performance" },
{ topic: "Machine Learning", difficulty: "hard", question: "L1 regularization is?", options: ["Lasso", "Ridge", "Entropy", "Boosting"], correctAnswer: "Lasso" },
{ topic: "Machine Learning", difficulty: "hard", question: "L2 regularization is?", options: ["Ridge", "Lasso", "Entropy", "Clustering"], correctAnswer: "Ridge" },
{ topic: "Machine Learning", difficulty: "hard", question: "Ensemble learning combines?", options: ["Multiple models", "Single model", "Sorting", "Compilation"], correctAnswer: "Multiple models" },
/* ===================================================
   DBMS (30)
=================================================== */

// EASY (10)
{ topic: "DBMS", difficulty: "easy", question: "DBMS stands for?", options: ["Database Management System", "Data Binary Management System", "Digital Base Management System", "Data Backup Management System"], correctAnswer: "Database Management System" },
{ topic: "DBMS", difficulty: "easy", question: "Primary key must be?", options: ["Unique", "Duplicate", "Null", "Optional"], correctAnswer: "Unique" },
{ topic: "DBMS", difficulty: "easy", question: "SQL is used to?", options: ["Query database", "Compile program", "Design UI", "Sort array"], correctAnswer: "Query database" },
{ topic: "DBMS", difficulty: "easy", question: "Which is a relational database?", options: ["MySQL", "HTML", "CSS", "Python"], correctAnswer: "MySQL" },
{ topic: "DBMS", difficulty: "easy", question: "Foreign key links?", options: ["Two tables", "Two loops", "Two classes", "Two arrays"], correctAnswer: "Two tables" },
{ topic: "DBMS", difficulty: "easy", question: "SELECT is used to?", options: ["Retrieve data", "Delete data", "Update data", "Drop table"], correctAnswer: "Retrieve data" },
{ topic: "DBMS", difficulty: "easy", question: "DELETE removes?", options: ["Rows", "Columns", "Database", "Compiler"], correctAnswer: "Rows" },
{ topic: "DBMS", difficulty: "easy", question: "CREATE TABLE is used to?", options: ["Create table", "Delete table", "Sort table", "Join table"], correctAnswer: "Create table" },
{ topic: "DBMS", difficulty: "easy", question: "WHERE clause filters?", options: ["Rows", "Columns", "Database", "Keys"], correctAnswer: "Rows" },
{ topic: "DBMS", difficulty: "easy", question: "Normalization reduces?", options: ["Redundancy", "Speed", "Keys", "Indexes"], correctAnswer: "Redundancy" },

// MEDIUM (10)
{ topic: "DBMS", difficulty: "medium", question: "2NF removes?", options: ["Partial dependency", "Transitive dependency", "Redundancy", "Primary key"], correctAnswer: "Partial dependency" },
{ topic: "DBMS", difficulty: "medium", question: "3NF removes?", options: ["Transitive dependency", "Partial dependency", "Primary key", "Index"], correctAnswer: "Transitive dependency" },
{ topic: "DBMS", difficulty: "medium", question: "JOIN combines?", options: ["Tables", "Loops", "Classes", "Arrays"], correctAnswer: "Tables" },
{ topic: "DBMS", difficulty: "medium", question: "GROUP BY is used with?", options: ["Aggregate functions", "Primary key", "Index", "Compiler"], correctAnswer: "Aggregate functions" },
{ topic: "DBMS", difficulty: "medium", question: "Index improves?", options: ["Query speed", "Memory", "Compilation", "Redundancy"], correctAnswer: "Query speed" },
{ topic: "DBMS", difficulty: "medium", question: "ACID stands for?", options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Index, Data", "Automatic, Consistent, Internal, Dynamic", "Array, Class, Interface, Data"], correctAnswer: "Atomicity, Consistency, Isolation, Durability" },
{ topic: "DBMS", difficulty: "medium", question: "Transaction ensures?", options: ["Data integrity", "Sorting", "Compilation", "Memory"], correctAnswer: "Data integrity" },
{ topic: "DBMS", difficulty: "medium", question: "Deadlock occurs when?", options: ["Resources wait circularly", "Sorting fails", "Memory leaks", "Index missing"], correctAnswer: "Resources wait circularly" },
{ topic: "DBMS", difficulty: "medium", question: "Subquery is?", options: ["Query inside query", "Join table", "Index", "Compiler"], correctAnswer: "Query inside query" },
{ topic: "DBMS", difficulty: "medium", question: "HAVING filters?", options: ["Groups", "Rows before grouping", "Tables", "Indexes"], correctAnswer: "Groups" },

// HARD (10)
{ topic: "DBMS", difficulty: "hard", question: "BCNF is stronger than?", options: ["3NF", "2NF", "1NF", "4NF"], correctAnswer: "3NF" },
{ topic: "DBMS", difficulty: "hard", question: "CAP theorem applies to?", options: ["Distributed systems", "Single DB", "Compiler", "Sorting"], correctAnswer: "Distributed systems" },
{ topic: "DBMS", difficulty: "hard", question: "Isolation level prevents?", options: ["Dirty reads", "Sorting", "Compilation", "Indexing"], correctAnswer: "Dirty reads" },
{ topic: "DBMS", difficulty: "hard", question: "Phantom read occurs in?", options: ["Concurrent transactions", "Single transaction", "Sorting", "Memory"], correctAnswer: "Concurrent transactions" },
{ topic: "DBMS", difficulty: "hard", question: "Clustered index determines?", options: ["Physical order", "Logical order", "Sorting", "Compiler"], correctAnswer: "Physical order" },
{ topic: "DBMS", difficulty: "hard", question: "Sharding distributes?", options: ["Data across servers", "Loops", "Classes", "Compiler"], correctAnswer: "Data across servers" },
{ topic: "DBMS", difficulty: "hard", question: "Replication improves?", options: ["Availability", "Sorting", "Compilation", "Redundancy only"], correctAnswer: "Availability" },
{ topic: "DBMS", difficulty: "hard", question: "Write-ahead logging ensures?", options: ["Durability", "Speed", "Sorting", "Compilation"], correctAnswer: "Durability" },
{ topic: "DBMS", difficulty: "hard", question: "Materialized view stores?", options: ["Physical result", "Query only", "Index only", "Compiler"], correctAnswer: "Physical result" },
{ topic: "DBMS", difficulty: "hard", question: "Two-phase commit ensures?", options: ["Distributed consistency", "Sorting", "Compilation", "Looping"], correctAnswer: "Distributed consistency" },
/* ===================================================
   OPERATING SYSTEMS (30)
=================================================== */

// EASY (10)
{ topic: "Operating Systems", difficulty: "easy", question: "OS stands for?", options: ["Operating System", "Open System", "Output System", "Operational Software"], correctAnswer: "Operating System" },
{ topic: "Operating Systems", difficulty: "easy", question: "CPU scheduling decides?", options: ["Which process runs", "Memory size", "Disk format", "Network speed"], correctAnswer: "Which process runs" },
{ topic: "Operating Systems", difficulty: "easy", question: "RAM is?", options: ["Volatile memory", "Permanent memory", "Disk memory", "Cache only"], correctAnswer: "Volatile memory" },
{ topic: "Operating Systems", difficulty: "easy", question: "Process is?", options: ["Program in execution", "Compiler", "Loop", "File"], correctAnswer: "Program in execution" },
{ topic: "Operating Systems", difficulty: "easy", question: "Thread is?", options: ["Lightweight process", "Heavy process", "Compiler", "Loop"], correctAnswer: "Lightweight process" },
{ topic: "Operating Systems", difficulty: "easy", question: "Deadlock means?", options: ["Processes waiting forever", "Sorting", "Compilation", "Fast execution"], correctAnswer: "Processes waiting forever" },
{ topic: "Operating Systems", difficulty: "easy", question: "Paging avoids?", options: ["External fragmentation", "Internal fragmentation", "Deadlock", "Sorting"], correctAnswer: "External fragmentation" },
{ topic: "Operating Systems", difficulty: "easy", question: "Round Robin uses?", options: ["Time quantum", "Priority only", "Sorting", "Stack"], correctAnswer: "Time quantum" },
{ topic: "Operating Systems", difficulty: "easy", question: "Kernel is?", options: ["Core of OS", "Application", "Compiler", "Driver only"], correctAnswer: "Core of OS" },
{ topic: "Operating Systems", difficulty: "easy", question: "File system manages?", options: ["Files", "CPU", "Compiler", "Loop"], correctAnswer: "Files" },

// MEDIUM (10)
{ topic: "Operating Systems", difficulty: "medium", question: "FCFS scheduling is?", options: ["First Come First Serve", "Fastest CPU First Serve", "File Control First Serve", "Fixed CPU First Serve"], correctAnswer: "First Come First Serve" },
{ topic: "Operating Systems", difficulty: "medium", question: "Priority scheduling may cause?", options: ["Starvation", "Deadlock", "Sorting", "Compilation"], correctAnswer: "Starvation" },
{ topic: "Operating Systems", difficulty: "medium", question: "Context switch occurs when?", options: ["CPU changes process", "Sorting", "Compilation", "Disk access"], correctAnswer: "CPU changes process" },
{ topic: "Operating Systems", difficulty: "medium", question: "Semaphore used for?", options: ["Synchronization", "Sorting", "Compilation", "Indexing"], correctAnswer: "Synchronization" },
{ topic: "Operating Systems", difficulty: "medium", question: "Virtual memory allows?", options: ["Large address space", "Sorting", "Compilation", "Indexing"], correctAnswer: "Large address space" },
{ topic: "Operating Systems", difficulty: "medium", question: "Thrashing occurs when?", options: ["Excessive paging", "Sorting", "Compilation", "Memory empty"], correctAnswer: "Excessive paging" },
{ topic: "Operating Systems", difficulty: "medium", question: "Banker’s algorithm avoids?", options: ["Deadlock", "Sorting", "Compilation", "Paging"], correctAnswer: "Deadlock" },
{ topic: "Operating Systems", difficulty: "medium", question: "Multitasking means?", options: ["Multiple tasks simultaneously", "Single task", "Sorting", "Compilation"], correctAnswer: "Multiple tasks simultaneously" },
{ topic: "Operating Systems", difficulty: "medium", question: "Internal fragmentation occurs in?", options: ["Fixed partitioning", "Paging only", "Sorting", "Compilation"], correctAnswer: "Fixed partitioning" },
{ topic: "Operating Systems", difficulty: "medium", question: "Page replacement algorithm example?", options: ["LRU", "Sorting", "Compilation", "Heap"], correctAnswer: "LRU" },

// HARD (10)
{ topic: "Operating Systems", difficulty: "hard", question: "Dining philosophers problem relates to?", options: ["Deadlock", "Sorting", "Compilation", "Paging"], correctAnswer: "Deadlock" },
{ topic: "Operating Systems", difficulty: "hard", question: "Belady’s anomaly affects?", options: ["FIFO page replacement", "LRU", "Optimal", "Priority"], correctAnswer: "FIFO page replacement" },
{ topic: "Operating Systems", difficulty: "hard", question: "Preemptive scheduling allows?", options: ["Interrupting process", "Sorting", "Compilation", "Memory leak"], correctAnswer: "Interrupting process" },
{ topic: "Operating Systems", difficulty: "hard", question: "Monolithic kernel means?", options: ["All services in kernel space", "Separate services", "Sorting", "Compilation"], correctAnswer: "All services in kernel space" },
{ topic: "Operating Systems", difficulty: "hard", question: "Microkernel keeps minimal?", options: ["Core functions only", "All drivers", "Sorting", "Compilation"], correctAnswer: "Core functions only" },
{ topic: "Operating Systems", difficulty: "hard", question: "Race condition occurs when?", options: ["Multiple processes access shared data", "Sorting", "Compilation", "Paging"], correctAnswer: "Multiple processes access shared data" },
{ topic: "Operating Systems", difficulty: "hard", question: "Spinlock used in?", options: ["Multiprocessing", "Sorting", "Compilation", "Indexing"], correctAnswer: "Multiprocessing" },
{ topic: "Operating Systems", difficulty: "hard", question: "TLB improves?", options: ["Memory access speed", "Sorting", "Compilation", "Paging size"], correctAnswer: "Memory access speed" },
{ topic: "Operating Systems", difficulty: "hard", question: "Segmentation divides memory into?", options: ["Logical segments", "Pages only", "Blocks", "Indexes"], correctAnswer: "Logical segments" },
{ topic: "Operating Systems", difficulty: "hard", question: "System call switches to?", options: ["Kernel mode", "User mode", "Sorting mode", "Compilation mode"], correctAnswer: "Kernel mode" },
];
export default programmingQuestions;