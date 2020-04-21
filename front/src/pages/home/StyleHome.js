import styled from "styled-components";
import lata from "../../../public/images/earth.jpg";

export const ImageHome = styled.div`
  background-image: url(${lata});
  background-position: center;
  background-size: cover;
  width: 100wv;
  height: 40em;
`;

export const TextHome = styled.div`
  text-align: center;
  position: absolute;
  top: 35%;
  left: 30%;
  transform: translate(-50%, -50%);
  color: white;
  && h1 {
    font-size: 50px;
  }
`;
