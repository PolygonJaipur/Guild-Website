import React from 'react'
import emailjs from 'emailjs-com'
import Footer from '../components/footer';
import Image from 'next/image';
import learn_bg from '../public/learn_bg.png'

const JoinGuild = () => {
    function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8hirfqi",
        "template_4vdg0tl",
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
    <div className="bg-gradient-to-b from-[#c863fe62] via-[#6f00bf56] to-[#00000054] flex items-center justify-center rounded-xl">
      <div className="w-[60%] px-10 py-[10vh] rounded-xl">
        <div className="bg-gradient-to-b from-[#60009462] via-[#6f00bf56] to-[#00000054] rounded-xl">
          <div className="bg-[#ffffffb5] dark:bg-[#320155c9] rounded-xl">
            <div className="col-span-3 w-full bg-gradient-to-b from-[#ac23f662] via-[#45007756] to-[#3f116083] h-auto shadow-xl shadow-[#000000] rounded-xl lg:p-4 ">
              <h2 className="flex justify-center py-4 text-4xl font-bold drop-shadow-lg">
                Join GUILD
              </h2>
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
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">
                      Mention Your Insitute / Company Name
                    </label>
                    <input
                      className="rounded-lg p-3 flex border-transparent bg-white/30 dark:bg-black/30"
                      type="text"
                      name="company"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">
                      Mention Your Skills
                    </label>
                    <input
                      className="rounded-lg p-3 flex border-transparent bg-white/30 dark:bg-black/30"
                      type="text"
                      name="skills"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">
                      How will you contribute to the GUILD?
                    </label>
                    <textarea
                      className="rounded-lg p-3 flex border-transparent bg-white/30 dark:bg-black/30"
                      rows="8"
                      name="contribute"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-center pt-3">
                    <button
                      className=" text-center py-3 rounded-3xl text-sm px-14 cursor-pointer hover:scale-105 ease-in duration-200"
                      type="submit"
                      id="btn"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinGuild
