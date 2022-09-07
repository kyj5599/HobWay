import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter className="bg-light text-center text-white">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        비내리는 호남선- 김민재,민세윤,김유진,신석우
      </div>
    </MDBFooter>
  );
}

export default Footer;
