

function Video_Card() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around p-5 gap-5">
      <div className="rounded-3xl p-5 bg-gray-100 flex flex-col w-full lg:w-1/3">
        <video
          src='/src/assets/app_video.mp4'
          autoPlay
          loop
          muted
          className="video w-full h-96 rounded-2xl"
        >
          Your browser does not support the video tag.
        </video>
        <h1 className='text-xl font-mono font-bold mt-5'>Videos</h1>
        <p className='font-mono'>
          Experience flows the way they were meant to be experienced, complete with transitions,
          micro-interactions, and animations.
        </p>
      </div>
      <div className="rounded-3xl p-5 bg-gray-100 flex flex-col w-full lg:w-1/3">
        <video
          src='/src/assets/app_video2.mp4'
          autoPlay
          loop
          muted
          className="video w-full h-96 rounded-2xl"
        >
          Your browser does not support the video tag.
        </video>
        <h1 className='text-xl font-mono font-bold mt-5'>Prototype mode</h1>
        <p className='font-mono'>
          Walk through flows, step by step, by using the interactive hotspots at your own preferred pace.
        </p>
      </div>
    </div>
  );
}

export default Video_Card;
