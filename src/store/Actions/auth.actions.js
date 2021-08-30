import auth from "firebase";
import firestore from "firebase";

export const signup = (user) => {
  return async (dispatch) => {
    const db = firestore();

    auth()
      .createUserWithEmailAndPassowrd(user.email, user.password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
