import ReactDom from "react-dom/client";
import "../src/index.css"
import App from "./App";

ReactDom.createRoot(document.querySelector("#root")).render(
    <App/>
)