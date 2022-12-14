const useLogin = () => {
  const setAdminLogin = (accesstoken, checked, refreshtoken) => {
    if (checked) {
      localStorage.setItem('accesstoken', accesstoken);
      localStorage.setItem('refreshtoken', refreshtoken);
      localStorage.setItem('userType', 'admin');
    } else {
      sessionStorage.setItem('accesstoken', accesstoken);
      sessionStorage.setItem('userType', 'admin');
    }
  };

  const setUserLogin = (accesstoken, checked, refreshtoken) => {
    if (checked) {
      localStorage.setItem('accesstoken', accesstoken);
      localStorage.setItem('refreshtoken', refreshtoken);
    } else {
      sessionStorage.setItem('accesstoken', accesstoken);
    }
  };

  return { setAdminLogin, setUserLogin };
};

export default useLogin;
