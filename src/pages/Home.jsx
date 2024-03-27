import CollapseButton from "../components/CollapseButton";
import CollapseButton2 from "../components/CollapseButton2";
import CollapseButton3 from "../components/CollapseButton3";
import { useState, useEffect } from "react";
import RiseLoader from "react-spinners/RiseLoader";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        // <p className="text-5xl text-black">cargando...</p>
        <div className="text-center h-[20rem] flex justify-center items-center m-10">
          <RiseLoader
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          />
        </div>
      ) : (
        <div className="bg-[#FFF89A] flex flex-col justify-center items-center m-10 rounded-xl">
          <h1 className="xs:text-lg sm:text-2xl lg:text-4xl md:w-[70%] my-20 font-extrabold text-center ">
            Explore the World of Learning with Our English Teaching Course for{" "}
            <span className="text-[#FF8AAE] ">Garden Teachers!</span>
          </h1>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/lotsoflearning-54445.appspot.com/o/home.png?alt=media&token=6134a9d1-b092-4110-a577-dad1b6795981"
            className="max-h-[35rem] my-10 rounded-xl"
            alt=""
          />

          <p className="my-10 xs:text-lg sm:text-xl lg:text-2xl md:w-[70%] font-semibold">
            Welcome to the world of bilingual kindergarten teaching! In our
            specialized English teaching course for kindergarten teachers, we
            offer you the necessary tools and strategies to enrich the learning
            of young children through the English language.
          </p>

          <p className="xs:text-lg sm:text-xl lg:text-2xl md:w-[70%] font-semibold">
            {`Don't wait any longer to enhance your career and offer your
            students a quality and enriching education.`}
          </p>

          <p className="my-5 xs:text-lg sm:text-xl lg:text-2xl md:w-[70%] font-semibold">
            Enroll today in our English teaching course for kindergarten
            teachers and start transforming lives as early as kindergarten!
          </p>

          <div className="sm:flex justify-evenly items-start w-full my-20 ">
            <div className=" sm:mt-1  flex flex-col justify-center items-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/lotsoflearning-54445.appspot.com/o/cloud.png?alt=media&token=a200d05e-3b44-4049-a1bd-2153959b8dd6"
                alt=""
                className="xs:max-w-[7rem] sm:max-w-[15rem] "
              />
              <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB2A6] to-[#FF8AAE] uppercase">
                Pedagogical skills
              </h3>
              <p className="text-center my-5 w-[80%] xs:text-md sm:text-lg lg:text-xl">
                Develop skills to design and adapt educational activities that
                promote the learning of English in an effective and fun way for
                kindergarten children.
              </p>
              <CollapseButton />
            </div>

            <div className="mt-20 sm:mt-1  flex flex-col justify-center items-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/lotsoflearning-54445.appspot.com/o/cloud.png?alt=media&token=a200d05e-3b44-4049-a1bd-2153959b8dd6"
                alt=""
                className="xs:max-w-[7rem] sm:max-w-[15rem] "
              />
              <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB2A6] to-[#FF8AAE] uppercase">
                Classroom management
              </h3>
              <p className="text-center my-5 w-[80%] xs:text-md sm:text-lg lg:text-xl">
                Acquire techniques to effectively manage the classroom and time,
                maintaining a positive and organized learning environment.
              </p>
              <CollapseButton2 />
            </div>

            <div className="mt-20 sm:mt-1  flex flex-col justify-center items-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/lotsoflearning-54445.appspot.com/o/cloud.png?alt=media&token=a200d05e-3b44-4049-a1bd-2153959b8dd6"
                alt=""
                className="xs:max-w-[7rem] sm:max-w-[15rem] "
              />
              <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB2A6] to-[#FF8AAE] uppercase">
                didactic resources
              </h3>
              <p className="text-center my-5 w-[80%] xs:text-md sm:text-lg lg:text-xl">
                Develop skills to create and use innovative teaching materials
                and resources that facilitate the learning of English in the
                classroom. 
              </p>
              <CollapseButton3 />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;


// Improve yourself #alwayslearn

// "¡Bienvenido al mundo de la enseñanza bilingüe en el jardín de infantes! En nuestro curso especializado de enseñanza de inglés para maestras jardineras, te ofrecemos las herramientas y estrategias necesarias para enriquecer el aprendizaje de los niños pequeños a través del idioma inglés.

// Welcome to the world of bilingual kindergarten teaching! In our specialized English teaching course for kindergarten teachers, we offer you the necessary tools and strategies to enrich the learning of young children through the English language.



// Como maestra jardinera, sabes que los primeros años de vida son fundamentales para el desarrollo del lenguaje y el aprendizaje. Nuestro curso está diseñado específicamente para ayudarte a integrar de manera efectiva el inglés en tus actividades diarias en el aula, proporcionándote técnicas pedagógicas innovadoras y recursos educativos de calidad.

// Desde canciones y juegos hasta actividades prácticas y cuentos, aprenderás cómo crear un ambiente de inmersión en inglés que motive y entusiasme a tus pequeños estudiantes. Nuestro enfoque centrado en la participación activa y el aprendizaje lúdico garantiza que cada niño tenga la oportunidad de desarrollar sus habilidades lingüísticas de manera natural y divertida.

// Al unirte a nuestro curso, te convertirás en una maestra jardinera aún más segura y capacitada, lista para guiar a tus alumnos en su viaje hacia el dominio del inglés. ¡Descubre el placer de ver cómo tus estudiantes florecen en un entorno bilingüe y prepárate para marcar la diferencia en sus vidas desde una edad temprana!

// No esperes más para potenciar tu carrera y ofrecer a tus estudiantes una educación de calidad y enriquecedora. ¡Inscríbete hoy en nuestro curso de enseñanza de inglés para maestras jardineras y comienza a transformar vidas desde el jardín de infantes!"

