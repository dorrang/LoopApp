import React, { useEffect, useState } from "react";
export default function OpenHihat() {
  const [isAnimate, setAnimate] = useState(false);
  const y = new Audio("sounds/hi-hat-open.wav");

  function animate() {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 120);
  }
  function handleCLick() {
    y.play();
    y.currentTime = 0;
    animate();
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  function handleKeyDown(event) {
    if (event.key === "J") {
      y.play();
      y.currentTime = 0;
      animate();
    }
  }
  return (
    <div className="inline">
      <p className="pad-letter">J</p>

      <button
        onClick={handleCLick}
        className={isAnimate ? "drumpad pressed" : "drumpad"}
      >
        <img
          id="openhihat"
          className="drumpad-img"
          src="images/openhihat.jpg"
          alt="openhihat-img"
        />
      </button>
      <h3>openhihat</h3>
    </div>
  );
}
