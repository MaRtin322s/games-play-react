import { Routes, Route } from 'react-router-dom';
import Catalog from './components/Catalog/Catalog';
import Header from './components/common/Header';
import Create from './components/Create/Create';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/games" element={<Catalog />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
