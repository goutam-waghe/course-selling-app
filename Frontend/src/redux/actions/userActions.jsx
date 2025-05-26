import axios from "axios";
import { server } from "../store";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      
      dispatch({ type: "loginRequest" });

      
      const { data } = await axios.post(
        `${server}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // to send cookies (e.g. for sessions)
        }
      );

      console.log("Login response:", data);

      // Dispatch success
      dispatch({ type: "loginSuccess", payload: data });
    } catch (error) {
      // Dispatch failure with error message
      console.log(error)
      dispatch({
        type: "loginFail",
        payload: error.response?.data?.Message
      });
    }
  };
};
//register 
export const register = ( formData ) => {
  return async (dispatch) => {
    try {
      
      dispatch({ type: "registerRequest" });

      
      const { data } = await axios.post(
        `${server}/register`,
        formData, 
        {
          withCredentials: true, 
        }
      );

      console.log(data)

      // Dispatch success
      dispatch({ type: "registerSuccess", payload: data });
    } catch (error) {
      // Dispatch failure with error message
      console.log(error)
      dispatch({
        type: "registerFail",
        payload: error.response?.data?.Message
      });
    }
  };
};
export const LoadUser = () => {
  return async (dispatch) => {
    try {
      
      dispatch({ type: "loadUserRequest" });

      
      const { data } = await axios.get(
        `${server}/me`,
        {
          withCredentials: true, 
        }
      );
      // Dispatch success
      dispatch({ type: "loadUserSuccess", payload: data.user });
    } catch (error) {
      
      console.log(error)
      dispatch({
        type: "loadUserFail",
        payload: error.response?.data?.Message
      });
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    try {
      
      dispatch({ type: "logoutRequest" });

      
      const { data } = await axios.get(
        `${server}/logout`,
        {
          withCredentials: true, 
        }
      );

      console.log(data)
      // Dispatch success
      dispatch({ type: "logoutSuccess", payload: data.user });
    } catch (error) {
      
      console.log(error)
      dispatch({
        type: "logoutFail",
        payload: error.response?.data?.Message
      });
    }
  };
};
