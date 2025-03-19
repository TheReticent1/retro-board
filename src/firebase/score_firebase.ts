import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { initialStateScore } from "../data.constant";

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