"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import FadeInSection from "./components/FadeInSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a192f] text-[#ccd6f6] px-6 scroll-smooth">
      {/* HERO */}
      <FadeInSection>
        <section className="min-h-[80vh] flex flex-col items-center justify-end text-center pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-[#8892b0]">hi, i’m </span>
            
            <span className="text-[#f9a8d4]">
  <Typewriter
    words={["furtuna"]}
    loop={1}
    cursor
    cursorStyle="|"
    typeSpeed={80}
    deleteSpeed={0}
    delaySpeed={1000}
  />
</span>

          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-[#8892b0] max-w-2xl leading-relaxed"
          >
            i’m in that sweet spot between being a grad student and a builder — 
            learning computer science, writing a lot of code, and chasing the thrill 
            of “it finally runs without errors.” i’m also a software engineer, always 
            tinkering with new ideas and trying to make them real.
          </motion.p>
        </section>
      </FadeInSection>

      {/* ABOUT ME */}
      <FadeInSection>
        <section id="about" className="py-20 max-w-5xl mx-auto text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-10">
            / about me
          </h2>

          <p className="text-xl text-[#8892b0] leading-relaxed">
            i moved to the u.s. for grad school and ended up falling in love 
            with making ideas real in code. sometimes it’s a project on github, 
            sometimes a ctf challenge, and sometimes just me staring at the screen 
            until it finally clicks. <br /><br />
            python, javascript, and sql are my usual tools, but i’ll grab whatever 
            helps me solve the problem. i love clean, calm design — that applies 
            to my code, my space, and this portfolio.
          </p>
        </section>
      </FadeInSection>

      {/* EXPERIENCE */}
      <FadeInSection>
        <section id="experience" className="py-20 max-w-5xl mx-auto text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-10">
            / experience
          </h2>

          <div className="space-y-6">
            <div className="rounded-xl bg-[#112240] p-6 shadow hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-[#f9a8d4] mb-3">
                software engineering intern @ liya enterprise
              </h3>
              <p className="text-base md:text-lg text-[#8892b0] leading-relaxed">
                contributed to backend systems, wrote efficient scripts, and 
                collaborated with a small engineering team. learned how real-world 
                software goes from idea → production.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* PROJECTS */}
      <FadeInSection>
        <section id="projects" className="py-20 max-w-5xl mx-auto text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-10">
            / projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <FadeInSection key={i}>
                <div className="rounded-xl bg-[#112240] p-6 shadow hover:shadow-xl hover:-translate-y-2 transition">
                  <h4 className="text-2xl font-semibold text-[#f9a8d4] mb-2">
                    project {i}
                  </h4>
                  <p className="text-base md:text-lg text-[#8892b0] leading-relaxed">
                    placeholder for a future project. this will showcase code, 
                    design, or something fun you build soon.
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* FOOTER */}
      <footer className="text-center py-12 text-[#8892b0] text-base md:text-lg">
        © {new Date().getFullYear()} furtuna estifanos. all rights reserved.
      </footer>
    </main>
  );
}
