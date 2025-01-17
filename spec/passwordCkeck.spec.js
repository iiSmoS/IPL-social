// passwordChecker.test.js
const passwordChecker = require('../src/passwordCkecker');

describe('passwordChecker', () => {

  it('should return false if the password is less than 8 characters', () => {
    expect(passwordChecker('short1!')).toBe(false);
  });

  it('should return false if the password does not contain a special character', () => {
    expect(passwordChecker('password123')).toBe(false);
    expect(passwordChecker('123456789')).toBe(false);
  });

  it('should return false if the password does not contain a number', () => {
    expect(passwordChecker('password!')).toBe(false);
    expect(passwordChecker('TestPassword!')).toBe(false);
    expect(passwordChecker('|@#Test!')).toBe(false);
  });
  

});
