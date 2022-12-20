import React from "react";
import "../file.css";

export default function footer() {
  return (
    <footer className="footer flex-column justify-content-center px-4">
      <div className="row">
        <div className="foot-con-1 col-md-4 flex-column justify-content-center">
          <div className="foot-img justify-content-center">
            <img src={require("../image/icons8-trollface-96.png")} alt="logo" />
          </div>

          <div className="logo-name">
            <p className="text">Meme-generator</p>
          </div>
        </div>

        <div className="foot-con-2 col-md-3 flex-column justify-content-center">
          <div className="foot-links d-flex flex-column justify-content-center">
            <a href="/#">Contribute</a>
            <a href="/#">My other projects</a>
          </div>
        </div>

        <div className="foot-con-3 col-md-5 flex-column justify-content-center">
          <div className="foot-contact d-flex justify-content-center">
            <input type="email" name="mail" className="rounded-2 px-2" />
            <input
              type="submit"
              name=""
              value="Contact Me"
              className="submit rounded-1"
            />
          </div>
        </div>

        <div className="copyright justify-content-center align-items-center">
          <p className="text">&copy; 2022 By DaScOrPiO~</p>
        </div>
      </div>
    </footer>
  );
}
