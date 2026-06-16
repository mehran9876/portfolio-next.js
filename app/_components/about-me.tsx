import AboutMePicture from "@/app/_components/Icon/aboutme-picture";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="section grid w-8/10 max-w-350 gap-12 pt-12 pb-4 md:grid-cols-2 md:pt-22"
    >
      <div className="hidden justify-center md:flex">
        <AboutMePicture />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-secondary-text mb-4">About Me</span>
        <h2 className="fancy-text mb-8 bg-linear-to-r text-3xl font-extrabold text-transparent">
          Who is Mehran?
        </h2>
        <p className="">
          I’m Mehran, a web developer focused on building high-performance
          applications with clean, efficient architecture. While I specialize in
          the JavaScript ecosystem—specifically React and Next.js—my real
          passion lies in the underlying logic and system optimization. Instead
          of just making things look flashy, I care deeply about how they
          actually run under the hood, from minimizing frame drops to
          streamlining rendering paths. As a self-taught engineer, I approach
          development with a pragmatic, problem-solving mindset. I build robust
          web applications that are as fast as they are reliable, focusing on
          measurable performance and solid engineering.
        </p>
      </div>
    </section>
  );
}
