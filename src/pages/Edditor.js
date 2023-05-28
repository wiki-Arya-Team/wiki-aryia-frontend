import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import Post from "./Post";

const Edditor = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between py-3 ">
        <div className="d-flex justify-content-center align-items-center gap-2 ">
          {/* <MDBIcon fas icon="angle-right" />
          <div>my name is flani</div> */}
        </div>
        <div className="d-flex justfy-content-between align-items-center gap-3">
          <div className="cursorPointer">
            <MDBIcon fas icon="pen" />
          </div>
          <div className="cursorPointer">
            <MDBIcon fas icon="eye" />
          </div>
          <div className="cursorPointer">
            <MDBIcon far icon="star" />
          </div>
          <div className="cursorPointer">
            <MDBIcon fab icon="rocketchat" />
          </div>
          <div className="cursorPointer">
            <MDBIcon fas icon="unlock" />
          </div>
          <div>
            <MDBBtn size="sm">share</MDBBtn>
          </div>
          <div className="cursorPointer">
            <MDBIcon fas icon="ellipsis-h" />
          </div>
        </div>
      </div>
      <Post />
    </div>
  );
};

export default Edditor;
