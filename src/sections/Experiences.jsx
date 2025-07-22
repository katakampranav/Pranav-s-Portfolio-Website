import { Timeline } from "../components/Timeline";
import { Particles } from "../components/Particles";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <section className="relative flex items-center justify-center c-space section-spacing min-h-screen" id="work">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;
