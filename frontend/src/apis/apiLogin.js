const setAdminLogin = (accesstoken, checked, refreshtoken) => {
  console.log('setAdminLogin함수내부 token,checked : ', accesstoken, checked);
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
  console.log('setUserLogin함수내부 token,checked : ', accesstoken, checked);
  if (checked) {
    localStorage.setItem('accesstoken', accesstoken);
    localStorage.setItem('refreshtoken', refreshtoken);
  } else {
    sessionStorage.setItem('accesstoken', accesstoken);
  }
};

export { setAdminLogin, setUserLogin };
