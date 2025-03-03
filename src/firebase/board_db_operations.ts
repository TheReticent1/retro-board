import { Dispatch, SetStateAction } from "react";
import { db } from "./firebase";
import { doc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { ColumnType, initialColumns } from "../components/dashboard/dashboard";

export const saveBoard = async (value: { [key: string]: string[] }) => {
  try {
    await setDoc(doc(db, "boards", "retroBoard"), {
      columns: value,
    });
    console.log("Board saved successfully!");
  } catch (error) {
    console.error("Error saving board:", error);
  }
};

export const fetchBoardRealtime = (
  setColumns: Dispatch<SetStateAction<ColumnType | undefined>>
) => {
  const docRef = doc(db, "boards", "retroBoard");

  const unsubscribe = onSnapshot(
    docRef,
    (docSnap) => {
      if (docSnap.exists()) {
        setColumns(docSnap.data().columns); // Update state with new data
      } else {
        console.log("No board found!");
        saveBoard(initialColumns);
      }
    },
    (error) => {
      console.error("Error fetching board:", error);
    }
  );

  return unsubscribe; // Call this function to stop listening when needed
};

export const updateBoard = async (column: string, value: string[]) => {
  try {
    const docRef = doc(db, "boards", "retroBoard");
    await updateDoc(docRef, {
      [`columns.${column}`]: value,
    });
    console.log("Board updated successfully!");
  } catch (error) {
    console.error("Error updating board:", error);
  }
};
