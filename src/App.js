import { BrowserRouter, Routes, Route } from "react-router-dom";
import reset from "./assets/css/reset.css";
import styles from "./assets/css/styles.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Seats from "./components/Seats";
import Sessions from "./components/Sessions";
import Success from "./components/Success";

export default function App() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessoes/:idFilme" element={<Sessions />} />
                <Route path="/assentos/:idSessao" element={<Seats />} />
                <Route path="/sucesso" element={<Success />} />
            </Routes>
        </BrowserRouter>
    );
}