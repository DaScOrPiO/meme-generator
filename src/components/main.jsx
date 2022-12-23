// import axios from "axios";
import React from "react";
import "../file.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Err from "./err";

export default function Main() {
  const [Meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImages: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [Error, setError] = useState(false);

  const request = useEffect(() => {
    const memeFetch = async () => {
      try {
        const res = await axios.get(`https://api.imgflip.com/get_memes`);
        setallMemeimage(res);
      } catch (err) {
        setError((prev) => prev = true);
      }
    };
    memeFetch();
  }, []);

  const [allMemeImage, setallMemeimage] = useState(request);

  const getMemes = () => {
    const memeArr = allMemeImage.data.data.memes;
    const randNum = Math.floor(Math.random() * memeArr.length);
    const randImage = memeArr[randNum].url;
    setMeme((prevState) => ({ ...prevState, randomImages: randImage }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div>
      <header className="header align-items-center px-5">
        <div className="con align-items-center justify-content-between">
          <div className="logo">
            <img src={require("../image/icons8-trollface-96.png")} alt="logo" />
          </div>

          <div className="brand-name">
            <p className="text">Meme-Genrator</p>
          </div>
        </div>
      </header>

      <main className="container my-4">
        <div className="form--input flex-column justify-content-center">
          <div className="form-con justify-content-around">
            <input
              className="top-text rounded-3"
              type="text"
              name="topText"
              placeholder="top-text"
              value={Meme.topText}
              onChange={handleChange}
            />
            <input
              className="bottom-text rounded-3"
              type="text"
              name="bottomText"
              placeholder="bottom-text"
              value={Meme.bottomText}
              onChange={handleChange}
            />
          </div>
          <div className="btn-con justify-content-center mt-5">
            <button
              className="px-1 py-2 rounded-3"
              type="submit"
              onClick={getMemes}
            >
              <span className="gradient-color">Generate Meme 🖼</span>
            </button>
          </div>
        </div>

        <div className="generated-image align-items-center justify-content-center my-4">
          {Error === true && <Err />}
          {Error === false && 
          <>
          <img
            className="img-fluid"
            src={Meme.randomImages}
            // {require("../image/26am.jpg")}
            alt="generated png"
          />
          <h3 className="text top-text">{Meme.topText}</h3>
          <h3 className="text bottom-text">{Meme.bottomText}</h3>
          </>}
        </div>
      </main>
    </div>
  );
}
