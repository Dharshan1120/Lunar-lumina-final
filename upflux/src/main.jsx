import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./App.jsx";
import "./index.css";
import "./styles/theme.css";

// Suppress deprecation warnings from dependencies
const originalWarn = console.warn;
console.warn = (...args) => {
  if (args[0]?.includes?.('Default export is deprecated') || args[0]?.includes?.('zustand')) return;
  originalWarn(...args);
};

const originalError = console.error;
console.error = (...args) => {
  if (args[0]?.includes?.('DialogContent') || args[0]?.includes?.('aria-describedby')) return;
  originalError(...args);
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider> {/* Added ThemeProvider */}
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider> {/* Closed ThemeProvider */}
    </BrowserRouter>
  </StrictMode>
);