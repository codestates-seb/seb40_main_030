const PRICE_REGEX = /\B(?=(\d{3})+(?!\d))/g;
const EMAIL_REGEX =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
const NICK_REGEX = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
const PASSWORD_REGEX =
  /^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
const PHONE_REGEX = /^\d{3}\d{3,4}\d{4}$/;

export { PRICE_REGEX, EMAIL_REGEX, NICK_REGEX, PASSWORD_REGEX, PHONE_REGEX };
