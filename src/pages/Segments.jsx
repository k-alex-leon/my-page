import React, { useEffect, useRef, useState } from "react";
import { cardItemsList } from "../data/cardItemsList";
import CardItem from "../components/CardItem";
import Text from "../components/Text";
import { certifications } from "../data/certificationsList";
import { projects } from "../data/projectsList";
import AppProjectCard from "../components/AppProjectCard";
import Title from "../components/Title";
import emailjs from "@emailjs/browser";
import { notifyError, notifySuccess } from "../utils/notifications";
import { validateForm } from "../utils/Validations";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="w-full h-screen text-white flex flex-col items-center justify-center"
    >
      <Text
        text={"Hola! Soy Kevin Leon."}
        styles={"lg:text-5xl text-3xl typewriter text-violet-900 font-bold"}
      />

      <h3 className="font-bold text-xl mt-4">Software Developer</h3>
      <p className="w-1/2 m-2 lg:text-xl text-center">
        Soy un apasionado programador con más de un año de experiencia en
        desarrollo web y aplicaciones Android, aficionado del aprendizaje
        continuo y enfrentar nuevos desafíos.
      </p>
    </section>
  );
};

const Knowledge = () => {
  return (
    <>
      <section
        id="knowledge"
        className="w-full h-screen md:ml-10 text-white p-10"
      >
        <Title title={"Habilidades"} />

        <p className="w-full m-2 text-lg">
          Mi curiosidad se ha convertido en el combustible y las tecnologias en
          el motor que me han impulsado a superar grandes retos. Estas son
          algunas herramientas que he encontrado en el camino:
        </p>

        <div className="w-full grid md:grid-cols-5 grid-cols-3 mt-4">
          {cardItemsList.map((lngs) => (
            <CardItem key={lngs.name} obj={lngs} />
          ))}
        </div>
      </section>
    </>
  );
};

const Work = () => {
  return (
    <section
      id="work"
      className="w-full h-screen flex flex-col mt-4 md:ml-10 text-white p-10"
    >
      <div className="">
        <Title title={"Experiencia y Proyectos"} />

        <p className="w-full m-2 md:text-lg">
          En mi ruta de aprendizaje he tenido la oportunidad de desarrollar
          diferentes{" "}
          <a
            href="https://github.com/k-alex-leon?tab=repositories"
            target="_blank"
            className="text-cyan-700"
          >
            apps
          </a>
          , cada una representa los desafíos que estoy dispuesto a enfrentar y
          mi capacidad de aprender y usar distintas tecnologías.
        </p>
      </div>
      <div className="w-full grow md:mt-0 h-auto md:h-2/5 grid grid-cols-3 mt-2">
        {projects.map((project) => (
          <AppProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section
      id="education"
      className="w-full h-screen mt-10 md:ml-10 text-white p-10"
    >
      <Title title={"Educación"} />

      <div className="flex w-full flex-col items-center">
        <p className="w-full m-2 md:text-lg">
          Estos son algunos de los certificados e información de mi formación
          academica y mi compromiso con el aprendizaje.
        </p>

        <div className="static md:w-3/5 w-4/5 h-1/4 mt-20">
          <swiper-container
            className="mySwiper static select-none"
            speed="800"
            effect="cards"
            pagination="true"
            grab-cursor="true"
          >
            {certifications.map((crt) => (
              <swiper-slide key={crt.name}>
                <a href={crt.link} target="_blank">
                  <img className="h-2/3 p-2" src={crt.image} alt={crt.name} />
                </a>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const emailForm = useRef();

  

  const clearInputs = (e) => {
    e.target.reset()
  }

  const sendEmail = (e) => {
    // prevenir el refresh de la pagina
    e.preventDefault();

    if (!validateForm(emailForm.current)) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        emailForm.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          notifySuccess("El correo se envió exitosamente!");
          clearInputs(e)
        },
        (error) => {
          notifyError(`Ops...Algo pasa: ${error}`);
        }
      );
  };


  return (
    <section
      id="contact"
      className="w-full h-screen md:mt-10 md:ml-10 text-white p-10"
    >
      <Title title={"Contacto"} />
      <p className="w-full m-2 md:text-lg">
        Estoy emocionado de conectar contigo. Si tienes alguna pregunta,
        propuesta o simplemente quieres saludar, no dudes en escribirme.
      </p>
      <div className="w-full h-1/3 space-y-2 text-black md:mt-10">
        {/* BUTTONS */}
        <div className="md:space-x-2 md:grid-cols-2 md:flex w-full">
          <a
            href="https://wa.me/573203582900?text=Hola Kevin!"
            target="_blank"
            className="w-full flex items-center space-x-2 h-auto bg-emerald-900 text-white p-2 rounded"
          >
            <img
              src="./images/whatsapp.png"
              className="w-8 h-8"
              alt="whatsapp icon"
            />
            <div>
              <h4 className="font-bold">Whatsapp</h4>
              <p>Escribeme un mensaje</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/kevin-león-242891217/"
            target="_blank"
            className="w-full flex items-center space-x-2 h-auto bg-sky-900 text-white p-2 rounded"
          >
            <img
              src="./images/linkedin.png"
              className="w-8 h-8"
              alt="whatsapp icon"
            />
            <div>
              <h4 className="font-bold">Linkedin</h4>
              <p>Conecta con mi perfil</p>
            </div>
          </a>
        </div>

        {/* EMAIL FORM */}
        <form
          ref={emailForm}
          onSubmit={sendEmail}
          className="space-y-2 h-2/3 text-white"
        >
          <input
            type="text"
            className="w-full p-2 rounded bg-black border border-white caret-pink-500"
            placeholder="Nombre"
            name="to_name"
          />
          <input
            type="email"
            className="w-full p-2 rounded bg-black border border-white caret-pink-500"
            placeholder="Email"
            name="from_name"
          />
          <textarea
            placeholder="¡Hola Kevin!....."
            className="w-full h-4/6 p-2 rounded bg-black z-10 border border-white"
            name="message"
          />

          <button
            type="submit"
            className="p-2 bg-violet-900 text-white rounded hover:scale-110 transition duration-150"
          >
            ¡Enviar!
          </button>
        </form>
      </div>
    </section>
  );
};

const Segments = () => {
  return (
    <div className="md:w-2/3 w-full h-full select-none">
      <Introduction />
      <Knowledge />
      <Work />
      <Education />
      <Contact />
    </div>
  );
};

export default Segments;
