import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatgpt3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="dzieje">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="Historia miasta i państwa"
        text="Miasto Rzym zaczęło kształtować się w VIII wieku p.n.e., natomiast kres stworzonego przez nie państwa nastąpił formalnie w 1453 roku n.e. (wraz z upadkiem Konstantynopola i tym samym Cesarstwa bizantyńskiego), choć dosyć często jako koniec starożytnego Rzymu przyjmuje się rok 476 n.e., w którym upadło Cesarstwo zachodniorzymskie."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h2 className="gradient__text">Periodyzacja dziejów</h2>
      <p>pl.wikipedia.org/wiki/Starożytny_Rzym</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Królestwo rzymskie"
        text="od początków miasta (tradycyjna data to 753 p.n.e.) do roku 509 p.n.e."
      />
      <Feature title="Republika rzymska" text="lata 509–30 p.n.e." />
      <Feature
        title="Cesarstwo rzymskie"
        text="od 30 p.n.e. do 1453 n.e. W 395 roku nastąpił ostateczny podział cesarstwa na dwa niezależne państwa: Cesarstwo zachodniorzymskie – zlikwidowane w 476; Cesarstwo Bizantyńskie – upadło w 1453"
      />
    </div>
  </div>
);

export default WhatGPT3;
