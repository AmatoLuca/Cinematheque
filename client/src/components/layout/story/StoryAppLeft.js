import React from "react";
import boyPop from "../../../images/pexels-cottonbro.jpg";


const StoryAppLeft = () => {
  return (
    <section className="story story-side-left">
      <div className="story-chunk">
        <h1 className="story-title">Cinematheque</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sequi
        nihil numquam tempora sapiente, laborum adipisci consectetur aliquid
        impedit eum quae eveniet atque exercitationem iure. Dolores quod id
        ipsam minima.
        <br /> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sequi
        nihil numquam tempora sapiente, laborum adipisci consectetur aliquid
        impedit eum quae eveniet atque exercitationem iure. Dolores quod id
        ipsam minima.
        <br /> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sequi
        nihil numquam tempora sapiente, laborum adipisci consectetur aliquid
        impedit eum quae eveniet atque exercitationem iure. Dolores quod id
        ipsam minima.
      </div>
      <div className="story-picture">
        <img src={boyPop} alt="" />
      </div>
    </section>
  );
};

export default StoryAppLeft;
