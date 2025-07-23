import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { FocusScreen } from "./04-useRef/focusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
import { Memorize } from "./06-memos/Memorize";
// import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomhook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHook /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    <Memorize />
  </StrictMode>
);
