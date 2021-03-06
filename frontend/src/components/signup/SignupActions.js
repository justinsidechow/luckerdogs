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

import axios from "axios";
import { toast } from "react-toastify";
import { isEmpty } from "../utils/Utils";
import {
  CREATE_USER_ERROR,
  CREATE_USER_SUBMITTED,
  CREATE_USER_SUCCESS,
} from "./SignupTypes";
import { Navigate } from "react-router-dom";
import { push } from "connected-react-router";

export const signupNewUser = (userData) => (dispatch) => {
  dispatch({ type: CREATE_USER_SUBMITTED }); // set submitted state
  axios
    .post("/api/v1/users/", userData)
    .then((response) => {
      toast.success(
        "Account for " +
          userData.username +
          " created successfully. Please check your email to activate your account and then login."
      );
      dispatch({ type: CREATE_USER_SUCCESS });
      dispatch(push("/login"));
    })
    .catch((error) => {
      if (error.resposne) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        toast.error(JSON.stringify(error.response.data));
        dispatch({
          type: CREATE_USER_ERROR,
          errorData: error.response.data,
        });
      } else if (error.message) {
        const keys = Object.keys(error.response.data);
        const values = Object.values(error.response.data);
        const result = Object.assign(
          ...keys.map((k, i) => ({ [k]: values[i] }))
        );
        for (let key in result) {
          //Cleaning up the array message by removing ',' from API so it looks cleaner
          let message = String(result[key]).replace(",", " ");
          toast.error(key + " - " + message);
        }
        dispatch({
          type: CREATE_USER_ERROR,
          errorData: error.response.data,
        });
      } else {
        // strange error, just show it
        toast.error(JSON.stringify(error));
        dispatch({
          type: CREATE_USER_ERROR,
          errorData: error.response.data,
        });
      }
    });
};
