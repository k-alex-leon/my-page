import React, { useEffect, useRef } from "react";
import { notifyInfo } from "../utils/notifications";

const Text = ({text, styles}) => {
  let container = useRef();
  const txt =
    text ?? "Texto default para el efecto de typing en pantalla.😃";

  const textTypingEffect = (element, indx = 0) => {
    // Validamos que no exista texto en pantalla antes de ejecutar
    // -- limpiando el string...
    if (indx === 0) element.textContent = "";

    element.textContent += txt[indx];

    // validamos si estamos al final del string
    if (indx === txt.length - 1) {
      notifyInfo("Dale un click al botón de encendido del celular...")
      return
    };

    // damos un delay para volver a ejecutar la fun
    setTimeout(() => textTypingEffect(element, indx + 1), 80);
  };

  useEffect(() => {
    textTypingEffect(container.current);
  }, [container, txt]);

  return (
    <>
      <div
        ref={container}
        className={styles}
      ></div>
    </>
  );
};

export default Text;
