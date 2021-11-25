import React, { useState } from "react";
import "./potega.css";
import people from "../../assets/19.png";
import ai from "../../assets/18.png";
import Modal from "../../components/Portal/Modal";
import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import ScrollToTop from "../../ScrollToTop";

const Potega = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <ScrollToTop />
      <Link to="/" className="back">
        <BsFillArrowLeftSquareFill />
      </Link>
      <div className="gpt3__header section__padding">
        <div className="gpt3__header-content">
          <h1 className="gradient__text">Potęga Rzymu</h1>
          <p className="sub">
            10 rzeczy, które spowodowały że antyczny Rzym stał się potęgą:
          </p>
          <div className="gpt3__header-content__input">
            <p>I. Akwedukty</p>
            <p>II. Cement</p>
            <p>III. Gazety</p>
            <p>IV. Dobrobyt</p>
            <p>V. Książki</p>
            <p>VI. Drogi</p>
            <p>VII. Rzymskie łuki</p>
            <p>VIII. Kalendarz juliański</p>
            <p>IX. Prawo rzymskie</p>
            <p>X. Chirurgia</p>
          </div>
          <button
            className="btn"
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

          <Modal show={modal} close={Toggle} title="Chirurgia rzymska">
            <p>
              Już z racji stylu życia, ciągłych wojen, bitew i podbojów,
              opatrywanie rannych było u Rzymian niemal na porządku dziennym. To
              antyczni Rzymianie wynaleźli wiele narzędzi chirurgicznych i
              zaczęli wykonywać cesarskie cięcie. Rzymscy medycy towarzyszyli
              legionom w czasie ich licznych kampanii wojennych. Za Oktawiana
              Augusta (27 p.n.e. – 14 n.e.) powołano specjalny korpus medyczny,
              który działał przy legionie.
            </p>
            <br />
            <p>
              <em>
                imperiumromanum.pl/artykul/10-rzeczy-ktore-spowodowaly-ze-antyczny-rzym-stal-sie-potega
              </em>
            </p>
          </Modal>
          <div className="gpt3__header-content__people">
            <img src={people} /> <br /> <br />
            <p>
              Cesarstwo Zachodniorzymskie upadło ponad 1500 lat temu, jednak
              jego dziedzictwo oraz dorobek są cenione po dziś dzień. Rzymianie
              byli wielkimi budowniczymi oraz wynalazcami.
            </p>
          </div>
        </div>
        <div className="gpt3__header-img">
          <img src={ai} />
        </div>
      </div>
    </>
  );
};

export default Potega;
