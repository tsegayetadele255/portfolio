import Image from "next/image";
import styles from "./AnimatedBrightBorder.module.css";
import AnimatedFlag from "../components/AnimatedFlag";
import SkillsSection from "./SkillsSection";


export default function Home() {
  return (
    <>
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-gradient-to-r from-black via-zinc-900 to-neutral-800/90">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
      
        {/* Profile Image */}
        <div className="flex flex-col items-center md:items-start gap-1 w-full md:w-1/2">
          <Image
            src="/me.jpg"
            alt="Tsegaye's profile photo"
            width={300}
            height={300}
            className={`${styles['bright-animated-border']} rounded-full shadow-lg object-cover ml-0 mr-0 mt-4 mb-4 md:ml-10 md:mr-0 md:mt-10 md:mb-10`}
            priority
          />
        </div>
        {/* Animated Flag */}
        <div className="relative flex-shrink-0 flex items-center justify-start w-full md:w-1/2">
          <AnimatedFlag />
        </div>
      </div>
    </section>
    <SkillsSection />
    </>
  );
}