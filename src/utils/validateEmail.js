export const validateEmail = (email) => {
  const regexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
  return regexp.test(email);
};
