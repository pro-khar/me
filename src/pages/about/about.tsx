function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center min-h-screen w-full"
    >
      
      <div
        id="about container"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 md:p-16 max-w-screen-xl"
      >
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white">
            About
          </h1>
          <hr className="w-full border-white" />
          <p className="text-xs md:text-sm xl:text-md text-white font-ibm-mono font-medium">
            I'm a recent grad with a strong passion for making things look good
            on screens, tinkering with gadgets, and designing the tiny brains
            that make devices work. I've dived into cool projects during my
            studies, mixing computer software with real-world stuff.
            <br />
            <br />
            I love creating user-friendly interfaces that are easy to use and
            look awesome. Think of it as making digital things user-friendly and
            friendly-looking. I've also had fun playing with gadgets, making
            them do cool things like monitoring stuff in real-time and building
            smart devices like the ones you see in smart homes.
            <br />
            <br />
            And then there's chip design. It's like creating the brains for all
            our cool gadgets. I've learned how to make them tick, from the basic
            building blocks to the stuff that makes them super smart.
            <br />
            <br />
            Now, I'm eager to start my journey in a beginner-friendly role where
            I can put my tech skills to work, make things even cooler, and learn
            from awesome people like you! Let's create some tech magic together.
            😊
          </p>
        </div>
        <img src="" />
      </div>
    </div>
  );
}

export default About;
