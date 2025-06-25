export const validateNameInput = (name: string): boolean => {
  const regex = /^[\p{L}\-\s]+$/u;
  return regex.test(name.trim()) || !name;
};

export const validateEmailInput = (email: string): boolean => {
  const regex = /^[A-Za-z0-9.@\- ]+$/;
  return regex.test(email.trim()) || !email;
};

export const validateEmailStructure = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
};

export const validatePhoneInput = (phone: string): boolean => {
  const regex = /^[\d+\-\s()]+$/;
  return regex.test(phone.trim()) || !phone;
};

export const validateMessageInput = (message: string): boolean => {
  const regex = /^[\p{L}0-9 @\-_\.!?;:,%*'"\(\)+=\/<>\s]+$/u;
  return regex.test(message.trim()) || !message;
};

export const validateStringLength = (
  string: string,
  lengthMin: number,
  lengthMax: number,
) => {
  if (string.length > lengthMax || string.length < lengthMin) {
    return false;
  } else {
    return true;
  }
};
