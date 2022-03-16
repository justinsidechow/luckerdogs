/*
MIT License

Copyright (c) 2020 SaaSitive

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// import needed actions
import {
  CREATE_USER_ERROR,
  CREATE_USER_SUBMITTED,
  CREATE_USER_SUCCESS,
} from "./SignupTypes";

// define the initial state of the signup store
const initialState = {
  usernameError: "",
  passwordError: "",
  isSubimtted: false,
};

// define how action will change the state of the store
export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUBMITTED:
      return {
        usernameError: "",
        passwordError: "",
        isSubimtted: true,
      };
    case CREATE_USER_ERROR:
      const errorState = {
        usernameError: "",
        passwordError: "",
        isSubimtted: false,
      };
      if (action.errorData.hasOwnProperty("username")) {
        errorState.usernameError = action.errorData["username"];
      }
      if (action.errorData.hasOwnProperty("password")) {
        errorState.passwordError = action.errorData["password"];
      }
      return errorState;
    case CREATE_USER_SUCCESS:
      return {
        usernameError: "",
        passwordError: "",
        isSubimtted: false,
      };
    default:
      return state;
  }
};
