const ParallaxBackground = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover -z-50"
    >
      <source src="assets/videos/heropage.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default ParallaxBackground;