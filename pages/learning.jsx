import React, { useState } from 'react'
import Footer from '../components/footer';
import Image from 'next/image';
import learn_bg from '../public/learn_bg.png'
import emailjs from 'emailjs-com'

const Learning = () => {
  const [form, setForm] = useState(false);
  const handleForm = () => {
    setForm(!form);
    console.log(form);
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8hirfqi",
        "template_hkski2o",
        e.target,
        "G31OC-KcMBL9b4y3e"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div
      id="learning"
      className="relative h-full bg-gradient-to-b from-[#60009462] via-[#6f00bf56] to-[#00000054] z-[-1]"
    >
      <Image
        src={learn_bg}
        className="object-cover opacity-50"
        height="740vh"
        width="1500vw"
      />
      <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="py-4 pb-8 my-4 drop-shadow-lg">Learning series</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit tempor
          nunc diam ut sit neque enim, rhoncus.
          <br></br>
          Quis convallis elit euismod ri sus, ut risus. At neque ipsum commodo
          pretium mauris aliquet sed vel enim. A dictum iaculis etiam orci
          purus, pharetra, senectus.
        </p>
        <div
          onClick={handleForm}
          className="mt-14 flex items-center justify-center"
        >
          <button className="text-center py-5 rounded-3xl text-sm px-14 cursor-pointer hover:scale-105 ease-in duration-200">
            Learning series
          </button>
        </div>
      </div>
      <div
        className={
          form
            ? "fixed left-[27.5%] top-[20%] w-[75%] sm:w-[60%] md:w-[45%] ease-in duration-500 bg-[#fbc3ff] dark:bg-[#060309] rounded-xl"
            : "fixed left-[-200%] top-0 w-[75%] sm:h-screen sm:w-[60%] md:w-[45%] border-none ease-in duration-500 rounded-xl"
        }
      >
        <div className="col-span-3 w-full bg-gradient-to-b from-[#c863fe62] via-[#6f00bf56] to-[#4b256d54] h-auto shadow-xl shadow-[#2a164f] rounded-xl lg:p-4 ">
          <div className="p-4">
            <form method="post" onSubmit={sendEmail}>
              <div className="grid md:grid-cols-2 gap-6 w-full py-2 ">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="rounded-lg p-3 flex border-transparent bg-white/30 dark:bg-black/30"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">
                    WhatsApp Number
                  </label>
                  <input
                    className="rounded-lg p-3 flex border-transparent bg-white/30 dark:bg-black/30"
                    type="number"
                    name="whatsapp"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                  className="rounded-lg p-3 flex border-transparent bg-white/30 dark:bg-black/30"
                  type="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Profession</label>
                <input
                  className="rounded-lg p-3 flex border-transparent bg-white/30 dark:bg-black/30"
                  type="text"
                  name="profession"
                />
              </div>
              <div className="flex items-center justify-center pt-3">
                <button
                  onClick={handleForm}
                  className=" text-center py-3 rounded-3xl text-sm px-14 cursor-pointer hover:scale-105 ease-in duration-200"
                  type="submit"
                  id="btn"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute top-[96%] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Learning