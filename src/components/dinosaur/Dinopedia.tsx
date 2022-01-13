import React from "react";
import ViewDinosaur from "./ViewDinosaur";
import { Dinosaur } from "../../models/Dinosaur";

function Dinopedia() {
  const dinos: Dinosaur[] = [
    {
      name: "Triceratops",
      horns: 3,
    },
    {
      name: "T rex",
      horns: 0,
    },
  ];

  return (
    <section>
      <h3>Dinosaur List</h3>
      <ul>
        {dinos.map((dino) => (
          <li key={dino.name}>
            <ViewDinosaur dino={dino} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Dinopedia;
