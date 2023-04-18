import Cookies from 'js-cookie';

export const handleLogOut = () => {
    Cookies.remove('loginInfo');
    window.location.href = '/';
}