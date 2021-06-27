import React from "react";
import { Resizable } from "re-resizable";

import "./news.css";

const NewsComponent = () => {
  return (
    <Resizable
      defaultSize={{
        width: "90vw",
        height: "60vh",
      }}
      className="news"
    >
      <div>
        <h2>About Me </h2>
        <p>I am Praveen Rawat, 25 currently Living in Dwarka,Delhi.</p>
        <p>
          I graduated in 2018 and after one year break I enrolled myself into part time PG at GGSIPU. The one year break after graduation was taken because I wanted to pursue my higher Education so I was preparing for that but since I couldnt take the enterance exam I decided to go for MTech Weekend from USIT, GGSIPU. Amidst all this Covid Pandemic Happened and I decided to get into web technologies and started with REACT because it was the trending framework on the Internet. I am a self taught, most of my skills came from Udemy courses or youtube tutorials. its great to have an open community which has made learning easily available on the internet. My future learning goal is to learn GRAPHQL, some testing framework, python, Decentralization.
        </p>
        <p>
          A part from coding I love video games. I am a gamer. An athlete, I love to play football and go out everyday for my share of walks or the field play. After becoming a successful developer I plan on becoming a video game streamer start my own agricultural startup where I grow and deal in organic greens. My drive to learn is what motivates me and drives me to keep up with the pace
        </p>
      </div>
    </Resizable>
  );
};

export default NewsComponent;
