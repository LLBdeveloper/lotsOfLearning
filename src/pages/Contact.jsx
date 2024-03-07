import Form from '../components/Form'

export default function ContactForm() {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <h1 className="my-10  xs:text-2xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB2A6] to-[#FF8AAE]">CONTACT</h1>
      <h2 className="my-5 text-2xl text-center w-[60%]">Complete the form below and join our community of teachers passionate about teaching English to the little ones. We hope to meet you soon!</h2>
      <Form/>
    </div>
  );
}
