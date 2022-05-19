import { BrowserRouter, Routes, Route } from "react-router-dom";
import reset from "./assets/css/reset.css";
import styles from "./assets/css/styles.css";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}