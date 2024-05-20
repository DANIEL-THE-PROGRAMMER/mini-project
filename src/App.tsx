import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/loginpage";
import { store } from "./store";
import { Provider } from "react-redux";
import PrivateRoutes from "./utils/PrivateRoutes";
import Home from "./routes/home";
import Layout from "./layout";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}></Route>
            <Route element={<LoginPage />} path="/login" />
            <Route element={<Layout />}>
              <Route element={<Home />} path="/" />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
