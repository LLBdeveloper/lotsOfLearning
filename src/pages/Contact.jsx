import Form from '../components/Form'
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";




export default function ContactForm() {

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
            <p className="xs:text-2xl sm:text-5xl font-bold my-20  text-black">Loading . . . </p>
            <PacmanLoader
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center my-20">
            <h1 className="my-10  xs:text-2xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB2A6] to-[#FF8AAE]">CONTACT</h1>
            <h2 className="my-5 xs:text-lg sm:text-xl lg:text-2xl text-center sm:w-[60%]">Complete the form below and join our community of teachers passionate about teaching English to the little ones. We hope to meet you soon!</h2>
            <Form/>
          </div>
        )
      }
    </>
  );
}
