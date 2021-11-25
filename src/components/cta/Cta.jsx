import React, { useState } from "react";
import "./cta.css";
import Modal from "../../components/Portal/Modal";

const CTA = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>łac. Gaius Iulius Caesar</p>
        <h3>
          Dzięki pomocy swych żołnierzy udało mu się pokonać opozycję, skupioną
          wokół senatu i Pompejusza – tzw. optymatów, aby następnie, po
          wieloletnich walkach, przejąć pełnię władzy w Rzymie. Zamordowany w
          idy marcowe przez senatorów pod przywództwem Brutusa oraz Gajusza
          Kasjusza. W testamencie adoptował syna swojej siostrzenicy Gajusza
          Oktawiusza, późniejszego Oktawiana Augusta, wyznaczając go na swego
          spadkobiercę.
        </h3>
      </div>
      <div className="gpt3__cta-btn">
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
          Czytaj więcej
        </button>
        <Modal
          show={modal}
          close={Toggle}
          title="Ciekawostki o Juliuszu Cezarze"
        >
          <p>
            Cezar nie bał się zamachu na swoje życie, pomimo, że był
            wielokrotnie ostrzegany przed czyhającym na niego
            niebezpieczeństwem. Był wręcz pewien, że nikt nie odważy się na
            dokonanie zamachu – jak się jednak okazało, życie odebrał mu jego
            najlepszy przyjaciel, Brutus. Mężczyzna zdołał wypowiedzieć przed
            śmiercią znane słowa "i ty, Brutusie, przeciwko mnie?";
          </p>
          <p>
            Największe marzenie Juliusza stanowiło dorównanie Aleksandrowi
            Wielkiemu. Wódz marzył o tym niemal obsesyjnie, opłakując to, że w
            konkretnym wieku dokonał mniej, niż jego idol.
          </p>
          <br />
          <p>
            <em>
              www.focus.pl/artykul/juliusz-cezar-historia-i-ciekawostki-o-rzymskim-polityku-i-pisarzu
            </em>
          </p>
        </Modal>
      </div>
    </div>
  );
};
export default CTA;
