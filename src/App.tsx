import React from "react";
import DarkVeil from "./assets/Backgrounds/DarkVeil/DarkVeil";
import LoadingScreen from "./components/LoadingScreen";
import PillNav from "./components/PillNav/PillNav";
import TrueFocus from "./TextAnimations/TrueFocus/TrueFocus";
import StarBorder from "./Animations/StarBorder/StarBorder";
import ElectricBorder from "./Animations/ElectricBorder/ElectricBorder";
// import Lanyard from "./Components/Lanyard/Lanyard";
import { Linkedin, Github, Instagram } from "lucide-react";
// import LogoLoop from "./Components/LogoLoop/LogoLoop";
function App() {
  const [loadingDone, setLoadingDone] = React.useState(false);

  return (
    <>
      {/* Background Wrapper */}
      <div className="absolute inset-0 -z-10">
        {/* Bagian Hero pakai DarkVeil */}
        <div className="h-screen w-full">
          <DarkVeil />
        </div>

        {/* Setelah scroll, jadi hitam */}
        <div className="h-[500vh] w-full bg-black"></div>
      </div>

      {/* Loading Screen */}
      {!loadingDone && <LoadingScreen onFinish={() => setLoadingDone(true)} />}

      {/* Konten Utama */}
      {loadingDone && (
        <div className="relative z-20">
          {/* Navbar */}
          <PillNav
            items={[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Blog", href: "#blog" },
              { label: "Contact", href: "#contact" },
            ]}
            activeHref="#"
          />

          {/* Section Home */}
          <section id="home">
            <div className="h-screen w-full flex flex-col items-center justify-center text-center text-white px-4 space-y-6">
              {/* Nama Utama */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 ">
                Zahrah Setia Rafaeyfa Assyla
              </h1>

              {/* Subjudul pakai TrueFocus */}
              <TrueFocus className="text-lg md:text-xl font-medium text-gray-300" />

              <p className="text-gray-300 text-lg mb-6">
                Building interactive web & mobile experiences with passion 🚀
              </p>

              {/* Tombol */}
              <div className="flex justify-center gap-4 mt-4">
                <StarBorder
                  borderColor="purple"
                  glowColor="rgba(168, 85, 247, 0.6)" // ungu glow
                  borderWidth={2}
                  radius={24}
                  padding={32}
                >
                  <a href="/cv.pdf" download>
                    Get My CV
                  </a>
                </StarBorder>
                <StarBorder>
                  <a href="mailto:yourname@email.com">Contact Me</a>
                </StarBorder>
              </div>

              {/* Ikon Sosial Media */}
              <div className="flex gap-6 mt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="hover:text-purple-400 transition"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://github.com/ZahrahSetiaRafaeyfaAssyla"
                  target="_blank"
                  className="hover:text-purple-400 transition"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.instagram.com/zhstrfas/"
                  target="_blank"
                  className="hover:text-purple-400 transition"
                >
                  <Instagram size={28} />
                </a>
              </div>
            </div>
          </section>

          {/* Section About */}
          {/* Section About */}
<section
  id="about"
  className="min-h-screen w-full flex items-center justify-center bg-black px-6"
>
  <ElectricBorder className="w-full max-w-6xl p-12 md:p-20 rounded-2xl">
    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Kiri: Text */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-purple-400">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Hi 👋, I’m{" "}
          <span className="font-semibold text-white">
            Zahrah Setia Rafaeyfa Assyla
          </span>
          , a passionate{" "}
          <span className="font-semibold text-white">
            Web & Mobile Developer
          </span>{" "}
          who loves building modern, interactive, and responsive applications.  
          I enjoy exploring new technologies and turning ideas into
          real-world digital products 🚀.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-purple-600/20 p-6 rounded-xl text-center">
            <span className="block text-2xl font-bold text-white">3+</span>
            <span className="text-sm text-gray-400">Years Experience</span>
          </div>
          <div className="bg-purple-600/20 p-6 rounded-xl text-center">
            <span className="block text-2xl font-bold text-white">15+</span>
            <span className="text-sm text-gray-400">Projects</span>
          </div>
          <div className="bg-purple-600/20 p-6 rounded-xl text-center">
            <span className="block text-2xl font-bold text-white">5+</span>
            <span className="text-sm text-gray-400">Happy Clients</span>
          </div>
        </div>
      </div>

      {/* Kanan: Avatar / Lanyard */}
      <div className="flex-shrink-0">
        {/* Kalau mau pakai gambar biasa */}
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-purple-500 shadow-lg"
        />

        {/* Atau kalau mau langsung pakai komponen Lanyard */}
        {/*
        <Lanyard
          name="Zahrah Setia Rafaeyfa Assyla"
          role="Web & Mobile Developer"
          avatarUrl="/lanyard.png"
        />
        */}

        {/* Atau pakai LogoLoop */}
        {/* Section Tech Stack */}
<section
  id="tech"
  className="min-h-[60vh] w-full flex items-center justify-center bg-black px-6"
>
  <div className="w-full max-w-6xl text-center space-y-8">
    <h2 className="text-3xl md:text-5xl font-bold text-purple-400">
      My Tech Stack
    </h2>
    <p className="text-gray-300 text-lg">
      Tools & technologies I often use to build apps 🚀
    </p>

    {/* LogoLoop */}
    {/* <div className="w-full flex justify-center">
      <LogoLoop
        logos={[
          { src: "/logos/react.svg", alt: "React" },
          { src: "/logos/tailwind.svg", alt: "TailwindCSS" },
          { src: "/logos/nodejs.svg", alt: "Node.js" },
          { src: "/logos/mongodb.svg", alt: "MongoDB" },
          { src: "/logos/flutter.svg", alt: "Flutter" },
          { src: "/logos/firebase.svg", alt: "Firebase" },
        ]}
        speed={1.5} // lebih cepat kalau mau
      />
    </div> */}
  </div>
</section>

        <section></section>

      </div>
    </div>
  </ElectricBorder>
</section>
          {/* Section Skills */}
      <section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-8">
          Tech Stack
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="w-16 h-16"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            className="w-16 h-16"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="w-16 h-16"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            alt="Tailwind"
            className="w-16 h-16"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="w-16 h-16"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
            alt="Unity"
            className="w-16 h-16"
          />
        </div>
      </section>
      {/* Section Contact */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">
          Contact Me
        </h2>
        <p className="text-gray-300 mb-6">
          Feel free to reach out through my socials 🚀
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/zahrahrafaeyfa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-xl"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-xl"
          >
            LinkedIn
          </a>
          <a
            href="mailto:zahrah@example.com"
            className="text-gray-300 hover:text-white text-xl"
          >
            Email
          </a>
        </div>
      </section>
        </div>
      )}
    </>
  );
}

export default App;
 