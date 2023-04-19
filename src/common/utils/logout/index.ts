import Cookies from 'js-cookie';

export const handleLogOut = () => {
    alert('Successfully logged out! Cookies cleared!')
    Cookies.remove('loginInfo');
    window.location.href = '/';
}