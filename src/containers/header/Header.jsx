import React, { useState } from "react";
import "./header.css";
import people from "../../assets/3.png";
import ai from "../../assets/6.png";
import Modal from "../../components/Portal/Modal";

const Header = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className="gpt3__header section__padding" id="start">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Starożytny Rzym</h1>
        <p>
          cywilizacja rozwijająca się w basenie Morza Śródziemnego i części
          Europy. Jej kolebką było miasto i późniejsza stolica: Rzym leżące w
          Italii, które w pewnym momencie swoich dziejów rozpoczęło ekspansję,
          rozszerzając swoje panowanie na znaczne obszary i wchłaniając m.in.
          kulturę starożytnej Grecji.
        </p>
        <div className="gpt3__header-content__input">
          {/* <input type="email" placeholder="Your Email Address" /> */}
          <button
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
            Więcej
          </button>
          <Modal show={modal} close={Toggle} title="Dzieje starożytnego Rzymu">
            <p>
              Rzym królewski (753–509 r. p.n.e.) – okres, który rozpoczął się od
              zbudowania miasta Rzym i trwał aż do wygnania ostatniego króla
              rzymskiego, czyli Tarkwiniusza Pysznego.
            </p>
            <p>
              Republika (509–27 r. p.n.e.) – okres, który trwał od wygnania
              Tarkwiniusza do przejęcia władzy przez pierwszego cesarza Rzymu,
              Oktawiana Augusta.
            </p>
            <p>
              Cesarstwo Rzymskie (27 r. p.n.e.–476 r. n.e.) – okres ten dzieli
              się na dwa poszczególne etapy: Pryncypat (27 r. p.n.e.–284 r.
              n.e.) i Dominat (284–476 r. n.e.).
            </p>
            <br />
            <p>
              <em>
                historia.org.pl/2019/01/02/matura-z-historii-cz-vi-ustroj-gospodarka-i-spoleczenstwo-starozytnego-rzymu
              </em>
            </p>
          </Modal>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="..." />
          <p>
            Cywilizacja rzymska, nazywana też niekiedy grecko-rzymską, razem z
            pochodzącą z Bliskiego Wschodu religią – chrześcijaństwem, stworzyła
            podstawy późniejszej cywilizacji europejskiej.
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="...." />
      </div>
    </div>
  );
};

export default Header;
