import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* Grid 1 */}
        <div className="relative flex items-end grid-default-color grid-1 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
          >
            <source src="assets/videos/portfolio-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="z-10">
            <p className="headtext">Hi, I'm Katakam Pranav Shankar</p>
            <p className="subtext">
              I'm an AI/ML Engineer passionate about crafting intelligent solutions using 
              Neural Networks, Large Language Models, and cutting-edge Deep Learning techniques. 
              I bridge innovation between AI, ML, and real-world applications like cybersecurity and finance.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-4xl text-gray-400">BUILD. INNOVATE. DEPLOY.</p>
            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="Neural Networks" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="LLMs" containerRef={grid2Container} />
            <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="Machine Learning" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="NLP" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="Generative AI" containerRef={grid2Container} />
            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/tensorflow.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/huggingface.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/aws.svg" containerRef={grid2Container} />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Location & Remote Work</p>
            <p className="subtext">
              I'm based in India but collaborate globally with teams and clients across time zones.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Interested in collaborating or building something impactful together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="relative grid-default-color grid-5 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          >
            <source src="assets/videos/home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack & Specialties</p>
            <p className="subtext">
              I specialize in Artificial Intelligence, Machine Learning, Deep Learning, LLMs, NLP, GenAI, and robust backends using AWS, Flask, React, and more.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 z-10">
            <Frameworks />
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
