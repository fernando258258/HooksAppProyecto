import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomhook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <HooksApp /> */}
    <FormWithCustomHook />
  </StrictMode>
);
