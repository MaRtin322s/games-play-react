import { Routes, Route } from 'react-router-dom';
import AuthContext from './context/AuthContext';
import { GameContext } from './context/GameContext';
import Catalog from './components/Catalog/Catalog';
import Header from './components/common/Header';
import Create from './components/Create/Create';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import { useLocalStorage } from './components/hooks/useLocalStorage';
import Logout from './components/Logout/Logout';
import Delete from './components/Delete/Delete';

function App() {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const userLogin = (userData) => setAuth(userData);
    const userLogout = () => setAuth({});

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            <div id="box">
                <Header />
                <main id="main-content">
                    <GameContext.Provider value={{ auth }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/create" element={<Create />} />
                            <Route path="/games" element={<Catalog />} />
                            <Route path="/details/:gameId" element={<Details />} />
                            <Route path="/details/:gameId/edit" element={<Edit />} />
                            <Route path="/details/:gameId/delete" element={<Delete />} />
                        </Routes>
                    </GameContext.Provider>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
