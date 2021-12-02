import React, { useEffect, useState } from "react";
import Drumpad2 from "./Drumpad2";
import drumsetdata from "../drumsetdata";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Drumset() {
  const [pads, setPads] = useState(drumsetdata.map(d => { return { ...d, audioObj: new Audio(d.soundURL) } }));
  const [idToChange, setIdToChange] = useState('');
  const [activePads, setActivePads] = useState([]);
  const [padsActive, setPadsActive] = useState(false);


  useEffect(() => {
    const index = pads.findIndex(pad => pad.id === idToChange);
    if (index !== -1) {
      let temp = [...pads];
      temp[index].isActive = !temp[index].isActive;
      setPads(temp);
      setIdToChange('');
    }
  }, [idToChange]);


  useEffect(() => {
    pads.some(pad => pad.isActive) ? setPadsActive(true) : setPadsActive(false);
    setActivePads(pads.filter(pad => pad.isActive && pad));
  }, [pads]);


  useEffect(() => {
    pads.forEach(pad => (!pad.isActive) && stopPad(pad.audioObj));

    if (padsActive) {

      playPad(activePads[0].audioObj)
      activePads[0].audioObj.addEventListener('ended', () => {
        console.log("ended");
        pads.forEach(pad => {
          if (pad.isActive) {
            playPad(pad.audioObj);
          }
        })
      }, false);

    } else {
      stopAll();
    }

  }, [activePads])


  const playActive = () => {
    activePads.forEach(pad => {
      if (pad.isActive) {
        pad.audioObj.loop = true;
        pad.audioObj.play();
      }
    })
  }

  const stopAll = () => {
    pads.forEach(pad => {
      pad.audioObj.pause();
      pad.audioObj.currentTime = 0;
    })
  }

  const stopPad = (objAud) => {
    objAud.pause();
    objAud.currentTime = 0;

  }

  const playPad = (objAud) => {
    objAud.play();
  }

  return (
    <div>
      <div className="drums">
        {pads.map((d, i) => (
          <Drumpad2
            i={i}
            pads={[...pads]}
            pad={d}
            key={d.key}
            toggleActive={padId => setIdToChange(padId)}
          />
        ))}
      </div>
      <div className="controller">
        <div className="ctrlBtn" onClick={playActive} >
          <FontAwesomeIcon className="icon" icon={faPlay} />
          Play
        </div>
        <div className="ctrlBtn" onClick={stopAll}>
          <FontAwesomeIcon className="icon" icon={faStop} />
          Stop
        </div>


      </div>
    </div>
  );
}
