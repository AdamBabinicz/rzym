import React from "react";
import possibilityImage from "../../assets/16.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="cezar">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>
        Jest bez wątpienia jedną z najsłynniejszych postaci w historii
        ludzkości.
      </h4>
      <h2 className="gradient__text">
        Juliusz Cezar <br /> (102/100 p.ne. - 44 p.ne.)
      </h2>
      <p>
        Historycy szacują, że <b>Juliusz Cezar</b> brał udział w <b>50 </b>
        bitwach, z których 48 zakończyło się jego zwycięstwem – jest to jeden z
        najlepszych wyników w historii świata. Jego reputacja wybitnego
        generała, zaprawionego w wojennych trudach, jest więc w pełni zasłużona.
        Warto jednak podkreślić, że jedno z szerzej znanych wydarzeń z jego
        życia – przekroczenie <b>Rubikonu</b> – nie nosiło znamion wielkiego
        wyczynu w sensie czysto fizycznym. Ta północnowłoska rzeka jest bowiem
        bardzo niewielka. Słynna decyzja o przejściu na jej drugi brzeg miała
        jednak ogromne znaczenie symboliczne: oznaczała przekroczenie granicy
        między <b>Galią Przedalpejską</b> i <b>Italią</b> oraz rozpoczęcie wojny
        domowej z <b>Pompejuszem</b>, zaanonsowane słowami alea iacta est (
        <b>“kości zostały rzucone”</b>).
      </p>
      <h4>
        lente-magazyn.com/tego-nie-wiedziales-o-juliuszu-cezarze-ciekawostki-na-idy-marcowe-czesc-i
      </h4>
    </div>
  </div>
);

export default Possibility;
