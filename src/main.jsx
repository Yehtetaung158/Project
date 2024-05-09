import ReactDom from "react-dom/client";
import "../src/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from "sonner";

ReactDom.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    <Toaster/>
  </Provider>
  </BrowserRouter>
);
