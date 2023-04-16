const emailValidator = (value: string) => {
  if (value.includes('@') && value.includes('.')) {
    return true;
  }
};

export default emailValidator;
