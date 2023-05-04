import React from "react";
import Card from "../components/Card";

function Demo() {
  // fake sample card-data
  const cardsData = [
    { title: "article 1", desc: "Lorem, ipsum dolor sit amet consectetu" },
    { title: "article 2", desc: "Lorem, ipsum dolor sit amet consectetu" },
    { title: "article 3", desc: "Lorem, ipsum dolor sit amet consectetu" },
    { title: "article 4", desc: "Lorem, ipsum dolor sit amet consectetu" },
    { title: "article 5", desc: "Lorem, ipsum dolor sit amet consectetu" }
  ];
  return (
    <>
      <main className="content">
        <h1 className="content__title">Sample title</h1>
        <p className="content__desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          accusamus eius quidem repellendus numquam corporis exercitationem
          voluptatem recusandae sed quis, repellat alias impedit voluptate.
          Sequi veritatis placeat officiis reiciendis iure magnam officia
          perspiciatis. Iure dignissimos eligendi corrupti mollitia aut, aliquam
          deserunt qui dolore nostrum, possimus nobis maiores earum et ad. Sed
          perspiciatis fuga quas, voluptatem commodi assumenda magni voluptates.
          Ad, maxime! Minus esse aut doloribus illo necessitatibus corrupti.
          Quaerat corrupti nobis, natus aperiam quidem reprehenderit blanditiis
          saepe tempore ex ab, quis debitis placeat cumque sunt facilis
          praesentium labore dolorem possimus dolor vel vero! Reiciendis totam
          facilis quasi ut molestias voluptatum!
        </p>
        <div className="content__refs refs">
          <h3 className="refs__title">References</h3>

          <ul className="refs__links-wrapper">
            <li className="refs__link">link 1</li>
            <li className="refs__link">link 2</li>
            <li className="refs__link">link 3</li>
            <li className="refs__link">link 4</li>
            <li className="refs__link">link 5</li>
          </ul>
        </div>
        <div className="cards">
          {cardsData.map(({ title, desc }) => (
            <Card title={title} desc={desc} key={title} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Demo;
