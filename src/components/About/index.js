import React from "react";
import coverImage from "../../assets/coverImage/simsleeps.jpg";

function About() {
  return (
    <section className="my-5">
      {/* <h1 id="about"></h1> */}
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
This is some stuff about me.  I'm so this.  I'm EXTREMELY that.  I love lovable things and people.  I like to have fun whenever it's a good time for it.  Will i see you there?
        </p>
      </div>
    </section>
  );
}

export default About;
