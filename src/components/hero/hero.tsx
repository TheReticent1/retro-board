import { useEffect, useState } from "react";
import { startMainFireworkShow } from "../../animations/fireworks/fireworks";
import "./hero.css";
import { CharacterDto, MemberDto } from "../../shared.interface";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import {
  getOrSaveCharacters,
  getOrSaveTeamMembers,
  giveVote,
  updateCharacterSelection,
} from "../../firebase/hero_firebase";
import Loader from "../loader/loader";

const Hero = () => {
  const [characters, setCharacters] = useState<CharacterDto[]>([]);
  const [members, setMembers] = useState<MemberDto[]>([]);
  const [disableBtn, setDisableBtn] = useState(false);
  const [currentRole, setCurrentRole] = useState<{
    id: number;
    actor: string;
  }>();

  useEffect(() => {
    if (localStorage.getItem("selectedRole")) {
      const currentRole = localStorage.getItem("selectedRole");
      if (currentRole) {
        setCurrentRole(JSON.parse(currentRole));
      }
      setDisableBtn(true);
    }
    const docRefMembers = doc(db, "teamMembers", "members");
    const docRefCharacters = doc(db, "harryPotter", "characters");

    const memberUnsubscribe = onSnapshot(docRefMembers, (docSnap) => {
      if (docSnap.exists()) {
        setMembers(docSnap.data().list);
      } else {
        getOrSaveTeamMembers();
      }
    });

    const characterUnsubscribe = onSnapshot(docRefCharacters, (docSnap) => {
      if (docSnap.exists()) {
        setCharacters(docSnap.data().list);
      } else {
        getOrSaveCharacters();
      }
    });

    return () => {
      memberUnsubscribe();
      characterUnsubscribe();
    };
  }, []);

  const chooseCharacter = async (character: CharacterDto) => {
    setDisableBtn(true);
    const data = await updateCharacterSelection(character.id, true);
    if (data === character.id) {
      localStorage.setItem(
        "selectedRole",
        JSON.stringify({ id: data, actor: character.actor })
      );
      setCurrentRole({ id: data, actor: character.actor });
    } else {
      setDisableBtn(false);
    }
  };

  const voteHero = async (member: MemberDto) => {
    if (currentRole && !member.likes.includes(currentRole?.id)) {
      member.likes.push(currentRole.id);
      try {
        await giveVote(currentRole.id, member);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <div className="retro-container">
        <h1 className="harry-potter-title">📚 Hermione of Sprint-15 🏆</h1>
        {members.length ? (
          <div className="card-container">
            {members.map((member, index) => (
              <div className="h-card" key={`card${index}`}>
                <h2>{member.name}</h2>
                {/* <p>{member.position}</p> */}
                <p className="votes">Votes: {member.likes.length}</p>
                {localStorage.getItem("selectedRole") ? (
                  <button className="like-btn" onClick={() => voteHero(member)}>
                    👍
                  </button>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          <Loader />
        )}
        <div id="fireworks-container"></div>
      </div>

      <div className="add-card">
        <button onClick={() => startMainFireworkShow()} className="emoji-btn">
          🪄
        </button>
        {characters.map((character, index) => (
          <button
            title={character.role}
            key={`character${character.id}`}
            className="h-button"
            disabled={character.selected || disableBtn}
            onClick={() => chooseCharacter(character)}
          >
            {character.actor}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
