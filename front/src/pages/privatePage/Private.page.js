import React, { useState } from "react";
import arbolAzul from "../../../public/images/arbolfooterazul.png";
import lata from "../../../public/images/Lata1000.jpg";
import { withProtected } from "../../lib/protectRoute.hoc";

let images = [arbolAzul, lata];

const FaceSelector = () => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <img
      src={images[imageIndex]}
      width="100"
      onClick={() => setImageIndex((imageIndex + 1) % images.length)}
    />
  );
};

const Page = () => (
  <div>
    <FaceSelector />
    <img src="https://okdiario.com/img/2019/09/05/mejores-frases-de-homer-simpson-655x368.jpg" />
  </div>
);

// si no hay usuario y quieres que te rediriaja a Redirect to /auth/login
export const PrivatePage = withProtected(Page);

// si no hay usuario que te redirija a /
//export const PrivatePage = withProtected(Page, { redirectTo: "/" });

// No redirige pero enseña  protected page
//export const PrivatePage = withProtected(Page, { redirect: false });
