function passwordChecker(password) {
    if (password.length < 8) {
      return false;
    }

    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharPattern.test(password)) {
    return false;
    }

    const numberPattern = /\d/;
    if (!numberPattern.test(password)) {
        return false;
    }
  
    return true;
  }
  
  module.exports = passwordChecker;
  