import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { MdWorkOutline } from "react-icons/md"
import { FiClock } from "react-icons/fi"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

function Contact() {

  const form = useRef()

  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    setSending(true)

    emailjs.sendForm(
      "service_2106",
      "template_xfh7mte",
      form.current,
      "x_0f00fSs83miJM_t"
    )
    .then(() => {

      setSending(false)
      setSent(true)

      form.current.reset()

      setTimeout(() => {
        setSent(false)
      }, 4000)

    })
    .catch((error) => {

      console.log(error)
      setSending(false)

    })
  }

  return (
    <section className="relative min-h-screen px-6 sm:px-10 md:px-20 pt-32 pb-16 text-white">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl sm:text-5xl font-semibold mb-4 tracking-tight">
            Let’s Connect
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Interested in working together or discussing an opportunity?
            Feel free to reach out — I'm always happy to connect.
          </p>

        </motion.div>


        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-white/10
          bg-gradient-to-br from-white/[0.05] via-white/[0.025] to-transparent
          backdrop-blur-xl px-8 sm:px-12 py-12
          overflow-hidden"
        >

          <div className="absolute inset-0 pointer-events-none rounded-2xl
          bg-[linear-gradient(120deg,transparent,rgba(59,130,246,0.06),transparent)]
          opacity-40"></div>

          <div className="absolute -top-28 -left-28 w-64 h-64 bg-blue-500/5 blur-3xl"></div>
          <div className="absolute -bottom-28 -right-28 w-64 h-64 bg-cyan-500/5 blur-3xl"></div>


          <div className="relative grid md:grid-cols-[0.95fr_1.05fr] gap-14">

            {/* LEFT INFO (UNCHANGED) */}
            <div className="space-y-10">

              <div>
                <h3 className="text-lg font-semibold tracking-wide mb-3">
                  Contact Information
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                 Open to internships, collaborations, and interesting projects. If you have something in mind or want to discuss opportunities, feel free to reach out.
                </p>
              </div>

              <div className="space-y-7">

                <div className="flex items-start gap-4 group">
                  <FaEnvelope className="text-blue-400 text-lg mt-1 transition group-hover:scale-110" />

                  <div>
                    <p className="text-xs text-gray-500 mb-[2px]">Email</p>
                    <p className="text-sm text-gray-200">
                      callkrish9294@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <HiOutlineLocationMarker className="text-cyan-400 text-lg mt-1 transition group-hover:scale-110" />

                  <div>
                    <p className="text-xs text-gray-500 mb-[2px]">Location</p>
                    <p className="text-sm text-gray-200">
                      India • Open to Remote Opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <MdWorkOutline className="text-purple-400 text-lg mt-1 transition group-hover:scale-110" />

                  <div>
                    <p className="text-xs text-gray-500 mb-[2px]">Availability</p>
                    <p className="text-sm text-gray-200">
                      Internships • Entry-Level Roles • Collaboration
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <FiClock className="text-blue-300 text-lg mt-1 transition group-hover:scale-110" />

                  <div>
                    <p className="text-xs text-gray-500 mb-[2px]">Response Time</p>
                    <p className="text-sm text-gray-200">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>

              </div>

            </div>



            {/* FORM */}
            <div>

              <h3 className="text-lg font-semibold mb-7">
                Send a Message
              </h3>

              <form ref={form} onSubmit={sendEmail} className="space-y-5">

                <div className="grid sm:grid-cols-2 gap-4">

                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="bg-white/[0.02] border border-white/10
                    rounded-lg px-4 py-[11px] text-sm
                    focus:outline-none
                    focus:border-blue-400/40
                    focus:ring-1 focus:ring-blue-400/20
                    transition"
                  />

                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    className="bg-white/[0.02] border border-white/10
                    rounded-lg px-4 py-[11px] text-sm
                    focus:outline-none
                    focus:border-cyan-400/40
                    focus:ring-1 focus:ring-cyan-400/20
                    transition"
                  />

                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full bg-white/[0.02] border border-white/10
                  rounded-lg px-4 py-[11px] text-sm
                  focus:outline-none
                  focus:border-blue-400/40
                  focus:ring-1 focus:ring-blue-400/20
                  transition"
                />

                <textarea
                  rows="4"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full rounded-lg px-4 py-3 text-sm resize-none
                  border border-white/10
                  bg-white/[0.02]
                  focus:outline-none
                  focus:border-cyan-400/40
                  focus:ring-1 focus:ring-cyan-400/20
                  transition"
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-[11px] rounded-lg text-sm font-medium
                  border border-blue-400/20
                  bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10
                  hover:border-cyan-400
                  hover:shadow-[0_0_16px_rgba(34,211,238,0.18)]
                  transition"
                >
                  {sending ? "Sending..." : sent ? "Message Sent ✓" : "Send Message →"}
                </button>

              </form>

            </div>

          </div>

        </motion.div>



        {/* CONTACT LINKS */}
        <div className="mt-16 pt-8 border-t border-white/10">

          <p className="text-center text-gray-400 text-sm mb-7">
            Or reach me directly
          </p>

          <div className="flex flex-wrap justify-center gap-5">

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=callkrish9294@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 px-4 py-2 rounded-lg
  bg-white/[0.02] border border-white/10
  hover:border-blue-400/40 hover:bg-white/[0.05]
  hover:shadow-[0_0_12px_rgba(59,130,246,0.15)]
  transition"
>
              <FaEnvelope className="text-blue-400"/>
              <span className="text-sm text-gray-300">Email</span>
            </a>

            <a
              href="https://wa.me/916303749349"
              target="_blank"
              className="flex items-center gap-3 px-4 py-2 rounded-lg
              bg-white/[0.02] border border-white/10
              hover:border-green-400/40 hover:bg-white/[0.05]
              hover:shadow-[0_0_12px_rgba(34,197,94,0.15)]
              transition"
            >
              <FaWhatsapp className="text-green-400"/>
              <span className="text-sm text-gray-300">WhatsApp</span>
            </a>

            <a
              href="https://github.com/Krish-Kal"
              target="_blank"
              className="flex items-center gap-3 px-4 py-2 rounded-lg
              bg-white/[0.02] border border-white/10
              hover:border-gray-400/40 hover:bg-white/[0.05]
              hover:shadow-[0_0_12px_rgba(255,255,255,0.1)]
              transition"
            >
              <FaGithub className="text-gray-200"/>
              <span className="text-sm text-gray-300">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/krishna-kalvakolanu"
              target="_blank"
              className="flex items-center gap-3 px-4 py-2 rounded-lg
              bg-white/[0.02] border border-white/10
              hover:border-cyan-400/40 hover:bg-white/[0.05]
              hover:shadow-[0_0_12px_rgba(34,211,238,0.15)]
              transition"
            >
              <FaLinkedin className="text-cyan-400"/>
              <span className="text-sm text-gray-300">LinkedIn</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact