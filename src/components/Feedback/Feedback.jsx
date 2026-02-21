import { useState } from "react";
import "./styles.css";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  console.log("Likes in Component:", likes, dislikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="likes_container">
      <div className="likes_row">
        <button onClick={handleLike}>Like</button>
        <span>{likes}</span>
      </div>

      <div className="likes_row">
        <button onClick={handleDislike}>Dislike</button>
        <span>{dislikes}</span>
      </div>

      <button className="reset_btn" onClick={handleReset}>
        Reset Results
      </button>
    </div>
  );
}

export default Feedback;