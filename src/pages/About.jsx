import { Link } from 'react-router-dom';
import { TERipple } from "tw-elements-react";


function About() {
  return (
    <div className="flex flex-col justify-center items-center mx-10 my-10">

      <h1 className="my-10  xs:text-2xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB2A6] to-[#FF8AAE]">ABOUT</h1>

    

      <div className="mx-10 w-[70%] xs:text-lg sm:text-xl lg:text-2xl  flex flex-col justify-center items-center text-center">

        <p className="">
          At Lots Of Learning, we are passionately dedicated to preparing kindergarten teachers to teach English classes effectively and enrichingly in their classrooms. With a focus on play, interaction, and creativity, our team of educators and ESL experts work tirelessly to deliver high-quality training programs that empower bilingual teachers to provide a memorable learning experience to their children. students.</p>

          <img src="https://firebasestorage.googleapis.com/v0/b/lotsoflearning-54445.appspot.com/o/buenas-practicas-educativas-y-docentes-teteducation.jpg?alt=media&token=5464e470-a4b8-4b72-8e75-b3c42dd64ae7" className="rounded-xl my-10" alt="" />

          <p className="my-2">
          Our courses are specifically designed to fit the unique needs of preschoolers, taking advantage of their natural curiosity and innate ability to absorb new languages. Through playful activities, songs, stories and interactive games, our classes provide a fun and stimulating environment where children can develop fundamental language skills while immersing themselves in the English language naturally and organically.
          </p>

          <p className="my-2">
          At Lots Of Learning, we believe in the transformative power of early education and the positive impact it can have on the comprehensive development of children. We are committed to providing ongoing support and high-quality resources to kindergarten teachers, helping them cultivate a lasting love of English language learning in their students and laying the foundation for a bright, opportunity-filled future.
          </p>
          
          <p className="my-2">
          Join us on our journey to inspire and empower kindergarten teachers around the world to become educational leaders in their communities and open the doors to the world through the universal language of English.
          </p>

          <span className="mt-10 font-bold text-pink-500">Together we can make a difference!</span>
          <Link
            to="/contact"
            className=" my-5 inline-block rounded bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
          >
            Contact Now !
          </Link>
      </div>
  


    </div>
  )
}

export default About