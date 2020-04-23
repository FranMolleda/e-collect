import styled from "styled-components";
import lata from "../../../public/images/earth.jpg";

export const ImageHome = styled.div`
  background-image: url(${lata});
  background-position: center;
  background-size: cover;
  width: 100wv;
  min-height: 91vh;
  filter: blur(6px);
  .container {
    display: grid;
    /* Space between items. */
    grid-gap: 1rem;
    /* 3x6 grid. */
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 8rem);
  }

  .item.med {
    grid-column: span 2;
    grid-row: span 2;
    background-image: url("//unsplash.it/600/600");
  }
  .item.tall {
    grid-row: span 3;
    background-image: url("//unsplash.it/600/800");
  }

  .item {
    /* Flex is just used to center the text both vertically and horizontally. */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: white;
    text-shadow: 0 0 2px #000;
  }
  .text-footer {
    text-align-last: right;
  }
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
