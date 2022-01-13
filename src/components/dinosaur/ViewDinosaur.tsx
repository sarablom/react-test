import React from "react";
import { Dinosaur } from "../../models/Dinosaur";

interface Props {
  dino: Dinosaur;
}

function ViewDinosaur({ dino }: Props) {
  return (
    <div>
      <h3>{dino.name}</h3>
      <p>I have {dino.horns} horns!</p>
    </div>
  );
}

export default ViewDinosaur;
