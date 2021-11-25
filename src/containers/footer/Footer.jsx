import React, { useState } from "react";
import gpt3Logo from "../../assets/1.png";
import "./footer.css";
import Modal from "../../components/Portal/Modal";

const Footer = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Italia przedrzymska</h1>
      </div>

      <div
        className="gpt3__footer-btn"
        type="button"
        onClick={() => Toggle()}
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        primary="true"
        dark="true"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
      >
        <p>Ludy Półwyspu Apeninskiego</p>
      </div>
      <Modal show={modal} close={Toggle} title="Pierwotne ludy Italii">
        <p>
          Indoeuropejczycy pojawili się na Półwyspie Apenińskim w II tysiącleciu
          p.n.e., główną ich grupę stanowili Italikowie, obok nich spotykamy w
          Italii także ludy illiryjskie, do nich można zaliczyć Japygów w
          południowo-wschodniej części Italii (późniejsza Apulia). Starożytni
          uważali za Illyrów również Wenetów, ale współczesne badania temu
          zaprzeczyły. Wśród właściwych Italików wyróżnia się na ogół dwie
          zasadnicze grupy językowe: latyńsko-falijską oraz ubryjsko-sabelską.
          Ludy tej ostatniej grupy zajęły wschodnią część Półwyspu Apenińskiego,
          najważniejsze z nich to Umbrowie na północnym wschodzie i góralscy
          Samnici w centrum Apeninów, którzy wykazali największe tendencje
          ekspansjonistyczne. Bliższymi sąsiadami Latynów byli Sabinowie,
          Ekwowie i Wolskowie.
        </p>
        <br />
        <p>
          <em>pl.wikipedia.org/wiki/Pierwotne_ludy_Italii</em>
        </p>
      </Modal>
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>
          Rzym starożytny <br /> Imperium Romanum
        </p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_div">
          <h4>Etruskowie</h4>
          <p>od VII w. p.n.e. aż do I w. n.e.</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Wenetowie</h4>
          <p>
            lud iliryjski zamieszkujący od IX wieku p.n.e. ziemie północnej
            Italii. W III wieku p.n.e., uległ romanizacji
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Galowie</h4>
          <p>
            zamieszkiwali krainę historyczną w Europie Zachodniej, znajdująca
            się na terenach dzisiejszej Francji, Belgii i północnych Włoch
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Italikowie</h4>
          <p>
            plemiona indoeuropejskie, zasiedlające od połowy II tysiąclecia
            p.n.e. Półwysep Apeniński
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Latynowie</h4>
          <p>
            jedno z plemion italskich żyjące w regionie ujścia Tybru i Gór
            Albańskich, od którego pochodzi nazwa regionu Lacjum (Latium vetus)
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Grecy</h4>
          <p>
            Osadnictwo greckie we Włoszech datuje się jeszcze z czasów
            starożytnych (kolonie greckie – Wielka Grecja)
          </p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>2021 - {new Date().getFullYear()}.</p>
      </div>
    </div>
  );
};
export default Footer;
