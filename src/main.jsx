
import ReactDOM from "react-dom/client";
import "./index.css";
import SotreContextProvider from "./Context/StoreContext";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <SotreContextProvider>
      <App></App>
    </SotreContextProvider>
  </BrowserRouter>
);
