import { createRoot } from "react-dom/client";
import React from "react";
import App from "./app";

const rootElem = document.getElementById("root");

createRoot(rootElem).render(<App />);
