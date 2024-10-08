import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  }

  let playerName = <span className={"player-name"}>{name}</span>

  if(isEditing) {
    playerName = <input type="text" required/>
  }

  return (
      <li>
        <span className={"player"}>
          {playerName}
          <span className={"player-symbol"}>{symbol}</span>
        </span>
        
        <button onClick={() => handleEditClick()}>{isEditing ? "Save" : "Edit"}</button>
      </li>

)
}

export default Player;