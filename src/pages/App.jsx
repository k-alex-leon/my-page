import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { MyPhone } from "../components/MyPhone";
import Segments from "./Segments";
import { notifyWarning } from "../utils/Notifications";

const App = () => {
  const [appClicked, setApp] = useState("");

  const [widthSize, setWidthSize] = useState(window.innerWidth);

  useEffect(() => {
    if (widthSize <= 700)
      notifyWarning(
        "Visita este sitio web en un computador para una mejor experiencia! 😁"
      );
  }, [window.innerWidth]);

  return (
    <>
      <div className="md:flex container text-white">
        <Segments segment={appClicked} />

        {widthSize > 700 && (
          <div className="absolute w-full flex">
            <div className="md:w-1/2 w-full h-screen fixed translate-x-full">
              <Canvas shadows className="w-full h-full">
                <Suspense fallback={null}>
                  <Environment files={"./blueSky.hdr"} background={""} />
                  <OrbitControls
                    target={[0, 7, 0]}
                    enableZoom={false}
                    enablePan={false}
                  />
                  <ambientLight intensity={1} color={0xffffff} />
                  <PerspectiveCamera makeDefault position={[-20, 10, 10]} />

                  <MyPhone
                    appClicked={(e) => {
                      setApp(e);
                    }}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
        )}
      </div>

      {/* ESTA ETIQUETA ES OBLIGATORIA PARA MOSTRAR LAS ALERTAS DE TOASTIFY */}
      <ToastContainer />
    </>
  );
};

export default App;
