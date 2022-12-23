import React from "react";
import "../file.css";
import { BsEmojiFrown } from "react-icons/bs";

export default function Err() {
  return (
    <div className="err-msg">
      <div className="icon-container">
        <span className="icon">
          <BsEmojiFrown size="50%" />
        </span>
      </div>
      <p className="text-1 text-center">
        Cannot get Memes :( <br /> Plesae try again later
      </p>
    </div>
  );
}
