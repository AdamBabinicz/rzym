import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="społeczeństwo">
    <div className="gpt3__blog-heading">
      <h2 className="gradient__text">
        Struktura społeczna <br /> w starożytnym Rzymie
      </h2>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="arystokracja rodowa, dla której najważniejsze było pochodzenie jednostki"
          text="Patrycjusze"
          para="(Z łac. patres, ojcowie) − uprzywilejowana, wyższa warstwa społeczna, która pojawiła się w okresie królestwa oraz republiki w starożytnym Rzymie. Posiadali pełne prawa polityczne oraz wyłączność obejmowania urzędów. W ich rękach znajdowała się większość ziem. Wywodzili się z zamożnych rodzin. Do najbardziej wpływowych i najznamienitszych rodów patrycjuszowskich należały takie jak np. Korneliuszów, Emiliuszów, Waleriuszów, Juliuszów czy Klaudiuszów. Przywileje te dziedziczyli z pokolenia na pokolenie. Inne warstwy społeczne nie miały dostępu do tego stanu."
          name={"🏛"}
          link="//pl.wikipedia.org/wiki/Patrycjusze"
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="tzw. plebs/pospólstwo, czyli ubogie warstwy społeczne"
          text="Plebejusze"
          name={"🏛"}
          link="//pl.wikipedia.org/wiki/Plebejusze"
        />
        <Article
          imgUrl={blog03}
          date="grupa ukształtowana w III w. p.n.e., do której należały najbogatsze rody patrycjuszowkie, ale i plebejskie"
          text="Nobilowie"
          name={"🏛"}
          link="//pl.wikipedia.org/wiki/Nobilowie"
        />
        <Article
          imgUrl={blog04}
          date="zamożna grupa wywodząca się z plebejuszy, ich cechami charakterystycznymi było zajmowanie się handlem oraz obowiązek konnej służby wojskowej"
          text="Ekwici"
          name={"🏛"}
          link="//pl.wikipedia.org/wiki/Ekwici"
        />
        <Article
          imgUrl={blog05}
          date="nie posiadali żadnych praw, pracowali głównie w kopalniach, w latyfundiach (wielkich majątkach ziemskich), jako służba domowa lub byli gladiatorami. W skład niewolników najczęściej wchodzili jeńcy wojenni"
          text="Niewolnicy"
          name={"🏛"}
          link="//imperiumromanum.pl/spoleczenstwo/warstwy-spoleczne-starozytnego-rzymu/niewolnictwo-w-starozytnym-rzymie"
        />
      </div>
    </div>
  </div>
);

export default Blog;
