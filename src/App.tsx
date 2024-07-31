import Header from "./components/header";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/app.routes";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition="Bounce"
      />
    </>
  );
}

export default App;
