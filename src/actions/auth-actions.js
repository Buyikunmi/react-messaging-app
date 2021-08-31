import auth from "firebase";
import firestore from "firebase";

export const signup = (user) => { 
  return async (dispatch) => {
    // eslint-disable-next-line no-unused-vars
    const db = firestore();
    auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
