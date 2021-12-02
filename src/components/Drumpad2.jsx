import React, { useEffect, useState } from "react";

export default function Drumpad(props) {




  const [audio] = useState(new Audio(props.pad.soundURL))


  // useEffect(() => {
  //   console.log(props.pad);
  //   if (props.pad.isActive) {
  //     props.toggleActive(props.pad.id)
  //     audio.muted = false;
  //     audio.loop = true;
  //     console.log(audio.currentTime)

  /// FINDING THE ACTIVE PADS, MAPPING TO AN ARRAY
  // let activePads = props.pads.filter((pad) => {
  //   console.log(pad)
  //   if (pad.isActive) {
  //     console.log(pad.id)
  //     return true
  //   }
  // }).map((pad) => pad.id);

  // console.log('active pads ', activePads);
  // let cache = setInterval(() => { audio.play() }
  //   , 2000 - audio.currentTime)

  // audio.play()
  //   } else {
  //     audio.muted = true;
  //     props.toggleActive(props.pad.id);
  //     // audio.pause()
  //     audio.currentTime = 0;
  //   }
  // }, [props.pad.isActive])






  return (
    <div className="inline">

      <button
        onClick={() => props.toggleActive(props.pad.id)}
        className={props.pads[props.i].isActive ? "drumpad pressed" : "drumpad"}
      >
        <img
          id={props.pad.name}
          className="drumpad-img"
          src={props.pad.imgURL}
          alt={props.pad.alt}
        />
      </button>
      {/* <h3>{props.pad.name}</h3> */}
    </div>
  );
}
