import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center flex-col lg:flex-row lg:gap-10">
      <section className="text-gray-100 text-center lg:text-left">
        <h1 className="text-4xl font-bold lg:text-9xl">Welcome,</h1>
        <h2 className="text-3xl font-bold lg:text-8xl">I'm Alan!</h2>
        <div className="text-xl lg:text-7xl">
          <Typewriter
            options={{
              strings: ["Front-End web developer."],
              autoStart: true,
              loop: false,
              deleteSpeed: Infinity,
              cursor: "|",
              delay: 75,
            }}
          />
        </div>
      </section>
    </div>
  );
}
