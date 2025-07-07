import { db } from "./firebase.config.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function addMessage(messageData) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      ...messageData,
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding message: ", error);
    throw error;
  }
}
