import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import StreamVideoProvider from "./providers/StreamClientProvider";

const VITE_CLERK_PUBLISHABLE_KEY =
  "pk_test_cmVsZXZhbnQtYnVnLTE3LmNsZXJrLmFjY291bnRzLmRldiQ";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log(PUBLISHABLE_KEY, "PUBLISHABLE_KEY");

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <StreamVideoProvider>
        <App />
      </StreamVideoProvider>
    </ClerkProvider>
  </React.StrictMode>
);
