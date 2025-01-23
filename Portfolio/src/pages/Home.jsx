import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center flex-col">
      <section className="text-gray-100">
        <h1 className="text-4xl font-bold ">Hey,</h1>
        <h2 className="text-3xl font-bold ">I'm Alan!</h2>
        <div className="text-xl">
          <Typewriter
            options={{
              strings: ["Web developer, focused on Front-End."],
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
