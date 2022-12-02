const moveToUrl = (pageUrl) => {
  window.location.assign(pageUrl);
};

const getAuthCode = () => {
  const url = new URL(window.location.href);
  const authorizationCode = url.searchParams.get('code');
  return authorizationCode;
};

export { getAuthCode, moveToUrl };
