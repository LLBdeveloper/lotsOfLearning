import { useState } from "react";
import { TERipple } from "tw-elements-react";

export default function CollapseButton() {
    const [show, setShow] = useState(false);

    const toggleShow = () => setShow(!show);

    return (
        <>
        <TERipple rippleColor="light">
            <button
            className="inline-block rounded bg-pink-500 mr-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-pink-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-pink-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={toggleShow}
            >
            See More!
            </button>
        </TERipple>
        
        {show && (
            <div className="m-1 xs:w-full sm:w-[80%] block rounded-lg bg-[#FFB2A6] p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50 ">
                <p className="my-5 xs:text-md sm:text-lg lg:text-xl">
                    {`"Master classroom management techniques to maintain children's attention and participation in English learning activities."`}
                </p>

                <p className="my-5 xs:text-md sm:text-lg lg:text-xl">
                    {`"Learn to structure your classes efficiently to make the most of the time available and achieve learning objectives."`}
                </p>
                
                <p className="my-5 xs:text-md sm:text-lg lg:text-xl">
                    {`"Discover effective strategies to manage children's behavior and create a safe and respectful learning environment."`}
                </p>

            </div>
        )}
        </>
    );
}

