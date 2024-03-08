import { useState, useEffect } from "react";
import RiseLoader from "react-spinners/RiseLoader";


function Courses() {

  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {
        loading ? (
          <div className="h-[20rem] flex flex-col justify-center items-center m-16 ">
            {/* <p className="xs:text-2xl sm:text-5xl font-bold my-20 text-black">Loading . . . </p> */}
            <RiseLoader
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center my-20">
            <h1 className="my-10  xs:text-2xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB2A6] to-[#FF8AAE]">COURSES</h1>
            <h2 className=" text-center my-16 xs:text-xl sm:text-2xl lg:text-4xl font-bold">{`Beginner's Guide for Kindergarten Teachers`}</h2>
            <div className="mx-10 w-[70%] xs:text-lg sm:text-xl lg:text-2xl  flex flex-col justify-center items-center text-center">      
              <div className="sm:flex justify-center items-center gap-5 my-10">
                <p className="sm:w-[50%] text-center sm:text-start">
                  As a kindergarten teacher, you know that the first years of life are fundamental for language development and learning. Our course is specifically designed to help you effectively integrate English into your daily classroom activities, providing you with innovative pedagogical techniques and quality educational resources.
                </p>
                <img src="https://firebasestorage.googleapis.com/v0/b/lotsoflearning-54445.appspot.com/o/Como-conseguir-empleo-en-colegios-de-Educacion-Especial-38.jpg?alt=media&token=3ce060c1-89c8-40c1-a5cd-e4c963e4e6d2" className="sm:w-[50%] rounded-xl" alt="" />
              </div>
              
              <div className="sm:flex justify-center items-center gap-5 my-10">
                <img src="https://firebasestorage.googleapis.com/v0/b/lotsoflearning-54445.appspot.com/o/profesor-y-estudiante-978x652.jpg?alt=media&sm:token=30599c46-038b-4406-a4bd-211a8296714e" className="sm:w-[50%] rounded-xl" alt="" />
                <p className="sm:w-[50%] text-center sm:text-end">
                  {`From songs and games to hands-on activities and stories, you'll learn how to create an English immersion environment that motivates and excites your little learners. Our approach focused on active participation and playful learning ensures that every child has the opportunity to develop their language skills in a natural and fun way.`}
                </p>
              </div>
                <p className="my-10">
                  By joining our course, you will become an even more confident and skilled kindergarten teacher, ready to guide your students on their journey to English proficiency. 
                </p>
                <p className="my-5 text-pink-500 font-semibold">
                  Discover the joy of watching your students flourish in a bilingual environment and prepare to make a difference in their lives from an early age!
                </p>
            </div>
            {/* <div className="bg-white text-center h-[20rem] w-[30rem] flex justify-center items-center">
              <h2 className="text-4xl font-bold">{ `Beginner's Guide for Kindergarten Teachers`}</h2>
            </div> */}

          </div>
        )
      }
    </>
  );
}

export default Courses



// Beginner's Guide for Kindergarten Teachers