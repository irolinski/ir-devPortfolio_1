// Validates names: letters (any language), dashes, spaces — must contain at least one letter
export const validateNameInput = (name: string): boolean => {
  const regex = /^(?=.*\p{L})[\p{L}\-\s]+$/u;
  return regex.test(name.trim());
};

export const validateEmailInput = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email.trim());
};

// Validates phone numbers: digits, optional `+`, spaces, dashes, parentheses
export const validatePhoneInput = (phone: string): boolean => {
  const regex = /^\+?[0-9\s\-().]{7,20}$/;
  return regex.test(phone.trim());
};

// Validates messages: letters, numbers, common punctuation — must include non-whitespace
export const validateMessageInput = (message: string): boolean => {
  const regex = /^[\p{L}0-9 @\-_\.!?;:,%*'"\(\)+=\/<>\s]+$/u;
  return regex.test(message.trim()) && message.trim().length > 0;
};

// Validates that a string falls within the desired length range
export const validateStringLength = (
  str: string,
  min: number,
  max: number,
): boolean => {
  return str.length >= min && str.length <= max;
};
