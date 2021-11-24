import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "prawo rzymskie",
    text: "(łac. Ius Romanum) – termin oznaczający najczęściej prawo starożytnego Rzymu, które rozwijało się od czasów prawa zwyczajowego, aż do kodyfikacji Justyniana I Wielkiego (VI wiek n.e.). Prawo rzymskie miało istotny wpływ na rozwój prawodawstwa europejskiego (tzw. recepcja prawa rzymskiego) w postaci prawa powszechnego (ius commune) w średniowieczu, pandektystykę, która osiągnęła swoje apogeum w XIX wieku, a także na współczesną naukę, rozwijaną jako przedmiot uniwersytecki.",
  },
  {
    title: "system monetarny w cesarstwie rzymskim",
    text: "Podstawową jednostką płatniczo-obrachunkową był as; moneta złota (aureus) miała równowartość 400 asów (25×16). W asach początkowo wyliczano wszystkie sumy (ceny, płace), później dla wygody większe kwoty podawano w sestercach lub rzadziej – w denarach. Np. kilogram miedzi miał w przeliczeniu wartość 12 denarów. Armia rzymska za Oktawiana liczyła w czasie pokoju 150 tys. żołnierzy.",
  },
  {
    title: "filozofia starożytnego Rzymu",
    text: "Filozofia rzymska pozostawała odroślą od filozofii greckiej, mniej rozwiniętą i bujną, zawsze też czerpiącą z greckich źródeł. Grecka filozofia pozostawała żywa pomimo podboju Grecji przez Rzymian. Takie popularne i szerokie nurty jak platonizm (w wydaniu Plutarcha), arystotelizm czy sceptycyzm rozwijane były przede wszystkim w języku greckim, a ich centrum intelektualnym była Grecja czy rzymski Wschód.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="imperium">
    <div className="gpt3__features-heading">
      <h2 className="gradient__text">
        Opanowanie półwyspu uczyniło Rzym największą militarną potęgą świata
        starożytnego. W 265 liczba obywateli rzymskich (mężczyzn od 17. roku
        życia) wynosiła ok. 292 tysięcy, wielokrotnie więcej niż w innych
        największych miastach-państwach antycznych, co było wynikiem eksplozji
        demograficznej spowodowanej obfitością zdobycznej ziemi, a także
        nadawaniem obywatelstwa rzymskiego podbitym ludom, zwłaszcza bliższym
        sąsiadom.
      </h2>
      <p>encyklopedia.pwn.pl/haslo/Rzym-starozytny-Historia;4019663.html</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
