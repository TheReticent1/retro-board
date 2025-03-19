import { collection, doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { initialStateScore } from "../data.constant";
import { Dispatch, SetStateAction } from "react";

export const saveOrUpdateScore = async (id: string, updatedScore: Partial<typeof initialStateScore>) => {
  const docRef = doc(db, "scores", id); 
  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(docRef, updatedScore);
      console.log(`Score updated for ID: ${id}`);
    } else {
      await setDoc(docRef, { ...initialStateScore, ...updatedScore });
      console.log(`New score added for ID: ${id}`);
    }
  } catch (error) {
    console.error("Error saving/updating score:", error);
  }
};

export const getScore = async(id:string) => {
    const docRef = doc(db, "scores", id);
    try {
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            return docSnap.data();
        } else {
            return initialStateScore;
        }
    } catch (error) { 
        console.error(error)
    }
}

export const getAllRecordsScores = (setRecords:Dispatch<SetStateAction<{ [key: string]: string }[] | undefined>>) => {
  const collectionRef = collection(db, "scores");

  return onSnapshot(collectionRef, (querySnapshot) => {
    const records = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setRecords(records); // Update state with real-time data
  }, 
  (error) => {
    console.error("Error fetching real-time records:", error);
  });
};