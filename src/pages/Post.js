import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";

const Post = () => {
  return (
    <div>
      <h2>header</h2>
      <div className="d-flex justify-content-start align-items-center gap-3">
        <div>
          <MDBIcon fas icon="user-circle" />
        </div>
        <div>last updated:</div>
        <div>yesterday at</div>
        <div>9:10 PM</div>
        <div>.</div>
        <div>5 min read</div>
        <div>.</div>
        <div>7 people viewed</div>
      </div>
      <h3 className="pt-3">intoduction</h3>
      <p className="pt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores,
        in sunt quibusdam vel ducimus soluta pariatur beatae eos excepturi illo
        adipisci nulla dignissimos atque odio, magni sint mollitia dolor ipsa!
        Asperiores alias quaerat dolores sit placeat vero quam consequuntur,
        saepe vel dolor repellendus nostrum illo, cumque aspernatur voluptates
        itaque distinctio ullam. Placeat cum quo magnam quibusdam numquam
        excepturi, debitis perferendis sequi totam, dolor minima adipisci ex
        magni fuga, tempore itaque! Officiis pariatur fuga provident atque
        maxime minima ab totam nostrum? Recusandae eum eveniet voluptates, ipsam
        suscipit laudantium numquam inventore voluptate eligendi, iure iste
        delectus dolores similique provident earum in.
      </p>
    </div>
  );
};

export default Post;
