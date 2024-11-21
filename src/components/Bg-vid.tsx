import bgvid from "../assets/binary.mp4";

function BgVid() {
  return (
    <div className="absolute inset-0 -z-[10] bg-background">
      <video
        src={bgvid}
        className="object-cover w-full h-full opacity-5 grayscale"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black opacity-50 dark:block hidden"></div>
    </div>
  );
}

export default BgVid;
