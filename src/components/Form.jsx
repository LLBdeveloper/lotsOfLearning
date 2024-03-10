import { TEInput, TERipple, TETextarea } from "tw-elements-react";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AlertEmail from "./AlertEmail";

function Form() {
    const [showAlert, setShowAlert] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Validación de correo electrónico
        const email = form.current['user_email'].value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return;
        }

        emailjs
        .sendForm('service_g1i4e5s', 'template_x2ccn4k', form.current, {
            publicKey: 'lBsR7F9UFnrdD5jhB',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            form.current.reset()
            setShowAlert(true);
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <>
        <div className="block w-[90%] sm:w-[50%] rounded-lg bg-white my-10 p-5 sm:p-14 border-[#FF8AAE] border-4  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                

                <form ref={form} onSubmit={sendEmail}>
                <h2 className="my-5  xs:text-xl sm:text-2xl lg:text-3xl uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB2A6] to-[#FF8AAE]">Contact Form</h2>
                {/* <!--Name input--> */}
                <TEInput
                    type="text"
                    name="user_name"
                    label="Name"
                    className="mb-6"
                    required
                ></TEInput>
                {/* <!--E-mail input--> */}
                <TEInput
                    type="email"
                    name="user_email"
                    label="Email address"
                    className="mb-6"
                    required
                ></TEInput>

                {/* <!--Message textarea--> */}
                <div className="relative mb-3 w-full">
                    <TETextarea 
                    id="textArea" 
                    label="Message"
                    name="message"
                    className="w-full"
                    rows={4}
                    required
                    >
                    </TETextarea>
                </div>


                {/* <!--Submit button--> */}
                <TERipple  className="w-full">
                    <button
                    value="Send"
                    
                    className="inline-block rounded w-full bg-rose-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#FF8AAE] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#9ADCFF] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                    
                    Send
                    </button>
                </TERipple>
                </form>

            </div>
            {showAlert && <AlertEmail />}
            </>
    )
}

export default Form
