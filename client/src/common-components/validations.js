export const emailPattern = {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i,
  message: "Invalid email address.",
};

export const phonePattern = {
  value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
  message: "Invalid phone number.",
};

export const passwordPattern = {
  value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
  message:
    "Password must include lowercase, uppercase, number and special character.",
};

export const namePattern = {
  value:
    /^(?!\d+$)(?:[a-zA-Z0-9][a-zA-Z0-9 !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]*)?$/gu,
  message: "Invalid name.",
};