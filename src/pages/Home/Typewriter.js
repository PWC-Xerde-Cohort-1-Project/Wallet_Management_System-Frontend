import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
const Typewriter = () => {
  return (
    <div>
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "white",
          fontWeight: "1000",
          fontSize: "2.5em",
          marginTop: "20px",
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          "My name is Jessica Obianuju Ojadi",
          "I'm a Full Stack Developer at PWC",
          "I write in four different programming language",
          "ReactJs, C#, Python and Ruby on Rails.",
          "Thank you for taking out time to view my Portfolio",
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
    </div>
  );
};

export default Typewriter;
