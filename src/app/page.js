"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

// soft scroll fade animation
function ScrollFade({ children, direction = "up", delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("exit");
  }, [controls, inView]);

  const distance = 100;
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 15,
        delay,
      },
    },
  };

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={controls}>
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main
      className={`bg-[#FBFBFB] text-[#2C2C2C] min-h-screen flex flex-col items-center justify-center px-6 scroll-smooth overflow-x-hidden ${inter.className}`}
    >
      {/* HERO */}
      <section
        id="home"
        className="min-h-[100vh] flex flex-col items-center justify-center text-center pt-90"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-4xl md:text-5xl font-medium mb-6 text-[#002B5B] ${playfair.className}`}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('hi, <span style="color:#00BFA6;">furtuna</span> here.')
                .start();
            }}
            options={{
              autoStart: true,
              loop: false,
              delay: 90,
              cursor: "",
            }}
          />
        </motion.h1>

   <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="text-[1.05rem] md:text-[1.2rem] text-[#3a3a3a] max-w-xl leading-relaxed" > i like making things that actually work — and feel calm, intuitive, and a little magical. </motion.p>
   {/* SAY HI BOX */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.6 }}
  className="mt-10 px-8 py-4 rounded-lg bg-[#FFFFFF] border border-[#00BFA6] text-center shadow-sm hover:shadow-md transition-all"
>
  <a
    href="mailto:furtiarone@gmail.com"
    className="flex items-center justify-center gap-2 text-[#00BFA6] font-medium text-lg md:text-xl tracking-wide hover:opacity-80 transition"
  >
    {/* Envelope icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      stroke="#00BFA6"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 7.5l-9.75 6-9.75-6m19.5 0A2.25 2.25 0 0021.75 5.25H2.25A2.25 2.25 0 000 7.5v9A2.25 2.25 0 002.25 18h19.5A2.25 2.25 0 0024 16.5v-9z"
      />
    </svg>
    say hi
  </a>
</motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-[80vh] w-full flex flex-col md:flex-row items-center justify-center gap-15 px-10 md:px-35 mt-15"
      >
        <div className="flex-1">
          <ScrollFade direction="up">
            <h2
              className={`text-3xl md:text-4xl font-medium mb-8 text-[#002B5B] ${playfair.className}`}
            >
              / about me
            </h2>
          </ScrollFade>

          <ScrollFade direction="up" delay={0.2}>
            <p
              className={`text-[1.05rem] text-[#3a3a3a] max-w-2xl leading-relaxed ${inter.className}`}
            >
              I’m currently pursuing my master’s in computer science at florida state university, after earning my bachelor’s from the Eritrea institute of technology. along the way, i’ve balanced school with part-time jobs and internships learning how tech, people, and real-world problem-solving all connect. I enjoy building things that work beautifully and actually make sense.
            <br /><br />
            Outside of code, i love photography, exploring design, and keeping up with the latest in technology and creative trends.
            </p>
          </ScrollFade>
        </div>

        {/* PHOTO */}
        <ScrollFade direction="right" delay={0.3}>
          <div className="w-60 h-70 md:w-62 md:h-72 bg-[#f0f0f0] rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-[#e4e4e4] hover:scale-[1.03] transition-all duration-500 mt-38">
            <img
              src="/yourphoto.jpg"
              alt="furtuna estifanos"
              className="w-full h-full object-cover brightness-[0.97]"
            />
          </div>
        </ScrollFade>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="min-h-[70vh] w-full flex flex-col items-start justify-center px-10 md:px-20 mt-16"
      >
        <ScrollFade direction="up">
          <h2
            className={`text-3xl md:text-4xl font-medium mb-8 text-[#002B5B] ${playfair.className}`}
          >
            technologies & tools
          </h2>
        </ScrollFade>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-4 w-full">
          {["Python","Java", "Javascript", "React.js", "Next.js", "Node.js", "HTML / CSS", "Mysql", "Git / Github","Oracle","AWS","C/ C++"].map(
            (tool, i) => (
              <ScrollFade key={tool} direction="up" delay={i * 0.1}>
                <div className="bg-[#f5f5f5] p-5 rounded-xl text-center hover:scale-105 transition-all shadow-sm hover:shadow-md border border-[#e5e5e5]">
                  <p className={`text-[#00BFA6] text-[1.05rem] font-medium ${inter.className}`}>
                    {tool}
                  </p>
                </div>
              </ScrollFade>
            )
          )}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="min-h-[70vh] w-full flex flex-col items-start justify-center px-10 md:px-20 mt-16"
      >
        <ScrollFade direction="up">
          <h2
            className={`text-3xl md:text-4xl font-medium mb-8 text-[#002B5B] ${playfair.className}`}
          >
            experience
          </h2>
        </ScrollFade>

        <ScrollFade direction="up" delay={0.2}>
          <p
            className={`text-[1.05rem] text-[#3a3a3a] max-w-2xl leading-relaxed ${inter.className}`}
          >
            i’ve contributed to projects that mix creative design with smart engineering — from backend
            logic to clean interfaces that make users smile. every build teaches me a new way to think
            and refine my craft.
          </p>
        </ScrollFade>
      </section>

   {/* PROJECTS */}
<section
  id="projects"
  className="min-h-[70vh] w-full flex flex-col items-start justify-center px-10 md:px-20 mt-16"
>
  <ScrollFade direction="up">
    <h2
      className={`text-3xl md:text-4xl font-medium mb-8 text-[#002B5B] ${playfair.className}`}
    >
      projects
    </h2>
  </ScrollFade>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
    {[
      { id: 1, title: "Smart Vision", note: "AI-based image recognition using Python & OpenCV.", img: "/project1.jpg", link: "https://github.com/FurtiA/smart-vision" },
      { id: 2, title: "Portfolio Design", note: "A minimalist Next.js portfolio built with Framer Motion.", img: "/project2.jpg", link: "https://github.com/FurtiA/portfolio" },
      { id: 3, title: "DataFlow", note: "Interactive data visualization dashboard using React & D3.js.", img: "/project3.jpg", link: "https://github.com/FurtiA/dataflow" },
      { id: 4, title: "EcoShop", note: "Sustainable e-commerce prototype focused on green products.", img: "/project4.jpg", link: "https://github.com/FurtiA/ecoshop" },
      { id: 5, title: "FitTrack", note: "Personal fitness tracker app powered by Node.js & MongoDB.", img: "/project5.jpg", link: "https://github.com/FurtiA/fittrack" },
      { id: 6, title: "AI Journal", note: "A digital journaling app with sentiment analysis.", img: "/project6.jpg", link: "https://github.com/FurtiA/aijournal" },
      { id: 7, title: "MoodLens", note: "Face-emotion detection app using TensorFlow & React.", img: "/project7.jpg", link: "https://github.com/FurtiA/moodlens" },
      { id: 8, title: "BookNest", note: "A cozy web app for discovering & saving book lists.", img: "/project8.jpg", link: "https://github.com/FurtiA/booknest" },
      { id: 9, title: "Weatherly", note: "Weather forecast web app using OpenWeather API.", img: "/project9.jpg", link: "https://github.com/FurtiA/weatherly" },
    ].map((project, i) => (
      <ScrollFade key={project.id} direction="up" delay={i * 0.05}>
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="group relative rounded-2xl overflow-hidden shadow-sm border border-[#e5e5e5] bg-[#f5f5f5] cursor-pointer"
        >
          {/* Project Image */}
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-64 object-cover rounded-2xl group-hover:brightness-90 transition-all duration-500"
          />

          {/* Sliding Transparent Card */}
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 90, damping: 15 }}
            className="absolute top-0 left-0 right-0 bg-[#FFD6DA]/90 backdrop-blur-sm p-5 text-center rounded-b-2xl shadow-md"
          >
            <h4
              className={`text-xl font-semibold text-[#002B5B] mb-1 ${playfair.className}`}
            >
              {project.title}
            </h4>
            <p
              className={`text-sm text-[#2C2C2C] leading-relaxed mb-2 ${inter.className}`}
            >
              {project.note}
            </p>
            <span className="text-[#00BFA6] font-medium text-sm">
              View on GitHub →
            </span>
          </motion.div>
        </motion.a>
      </ScrollFade>
    ))}
  </div>
</section>


      {/* CERTIFICATES */}
      <section
        id="certificates"
        className="min-h-[70vh] w-full flex flex-col items-start justify-center px-10 md:px-20 mt-16"
      >
        <ScrollFade direction="up">
          <h2
            className={`text-3xl md:text-4xl font-medium mb-8 text-[#002B5B] ${playfair.className}`}
          >
            certifications & recognition
          </h2>
        </ScrollFade>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
          {[1, 2].map((i) => (
            <ScrollFade key={i} direction="up" delay={i * 0.1}>
              <div className="rounded-2xl bg-[#f5f5f5] p-6 shadow-sm hover:shadow-md hover:-translate-y-2 transition-all border border-[#e5e5e5]">
                <h4
                  className={`text-xl font-medium text-[#00BFA6] mb-3 ${playfair.className}`}
                >
                  certificate title {i}
                </h4>
                <p
                  className={`text-[#3a3a3a] text-[1rem] leading-relaxed ${inter.className}`}
                >
                  a small note about what this recognition stands for — proof of curiosity and effort.
                </p>
              </div>
            </ScrollFade>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-10 text-center text-[#6b6b6b] text-sm border-t border-[#ececec] mt-20">
        © {new Date().getFullYear()} furtuna estifanos. all rights reserved.
      </footer>
    </main>
  );
}
