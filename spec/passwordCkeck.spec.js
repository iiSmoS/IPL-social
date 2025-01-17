// passwordChecker.test.js
const passwordChecker = require('../src/passwordCkecker');

describe('passwordChecker', () => {

  it('should return false if the password is less than 8 characters', () => {
    expect(passwordChecker('short1!')).toBe(false);
  });

});
