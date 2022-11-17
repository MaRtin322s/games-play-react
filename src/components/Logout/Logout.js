import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import * as authService from '../../services/authService';

const Logout = () => {
    const { user, userLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    authService.logout(user.accessToken)
        .then(() => {
            userLogout();
            localStorage.clear();
            navigate('/', { replace: true });
        });
}

export default Logout;