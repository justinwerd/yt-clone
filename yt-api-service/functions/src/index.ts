// import * as functions from "firebase-functions/v2";
import {beforeUserCreated} from "firebase-functions/v2/identity";
import {initializeApp} from "firebase-admin/app";
import {Firestore} from "firebase-admin/firestore";

initializeApp();
const firestore = new Firestore();

export const onUserCreate = beforeUserCreated(async (event) => {
    const user = event.data;
    const userInfo = {
        uid: user.uid,
        email: user.email,
        photoUrl: user.photoURL,
      };

    console.log(`User Created: ${JSON.stringify(user)}`);

    // Example: you can write extra info, send welcome email, etc.
    await firestore.collection("users").doc(user.uid).set(userInfo);
  });
