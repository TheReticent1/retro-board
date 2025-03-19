import { characters, members } from "../data.constant";
import { CharacterDto, MemberDto } from "../shared.interface";
import { db } from "./firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const getOrSaveCharacters = async () => {
  const docRef = doc(db, "harryPotter", "characters");
  try {
      await setDoc(docRef, { list: characters });
      return characters;
    } catch (error) {
        console.error("Error fetching/saving characters:", error);
    }
};

export const getOrSaveTeamMembers = async () => {
    const docRef = doc(db, "teamMembers", "members");
    try {
        await setDoc(docRef, {list:members});
        return members;
    } catch (error) {
        console.error("Error fetching/saving characters:", error);
    }
}

export const updateCharacterSelection = async (id:number, val:boolean) => {
    const docRef = doc(db, "harryPotter", "characters");
    try {
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            const characters = docSnap.data().list;
            const updatedCharacters = characters.map((char:CharacterDto) =>
              char.id === id ? { ...char, selected: val } : char
            );
            await updateDoc(docRef, {list:updatedCharacters});
            return id;
        }
    } catch (error) {
        console.error("Error updating character:", error);
    }
}

export const giveVote = async (id:number, member:MemberDto) => {
    const docRef = doc(db, "teamMembers", "members");
    try {
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            const members = docSnap.data().list;
            const cleanedMembers = members.map((memb: MemberDto) => ({
                ...memb,
                likes: memb.likes.filter((voteId) => voteId !== id), // Remove the voteId if present
            }));
            const updatedVotes = cleanedMembers.map((memb: MemberDto) => {
                if (memb.name === member.name) {
                return {
                    ...memb,
                    likes: [...memb.likes, id],
                };
                }
                return memb;
            });
            await updateDoc(docRef, {list:updatedVotes});
        }
    } catch (error) {
        console.error("Error updating members:", error);
    }
}