import video from '../assets/Videos/Manufacture.mp4';

const Manufacture = () => {
  return (
    <div className='flex flex-col sm:flex-row mt-20 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Video Section */}
      <div className='w-full sm:w-1/2 flex justify-center sm:justify-start mt-20 sm:mt-32 sm:ml-20'>
        <video
          className='w-full max-w-[400px] h-[300px] sm:h-[400px] object-cover rounded-lg shadow-lg'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Section */}
      <div className='w-full sm:w-1/2 p-4 sm:p-8 flex flex-col justify-center '>
        <h1 className='text-2xl sm:text-3xl font-semibold mb-4 text-gray-800 dark:text-white'>Manufacturing</h1>
        <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
          Every timepiece is powered by its beating heart: the movement. Crafting a movement demands a culture of innovation, unwavering passion, meticulous precision, and artistic finesse – qualities that define <strong>TimeLuxe&apos;s</strong> legacy in watchmaking.
          <br /><br />
          <strong>In 2008, TimeLuxe</strong> revolutionized the industry with a groundbreaking innovation: an automatic movement featuring a bidirectional mechanism with a peripheral oscillating weight, marking a milestone in series production. This achievement solidified the brand&apos;s reputation as a pioneer in peripheral technology.
          <br /><br />
          At the core of <strong>TimeLuxe&apos;s</strong> watchmaking excellence are the TLX A1000 and TLX A2000 manufacture caliber families, renowned for their bidirectional automatic winding system with a peripheral rotor. The <strong>TLX T3000</strong>, a completely in-house developed movement, stands as a world-first, combining a peripheral automatic winding system with a floating tourbillon that creates a mesmerizing visual effect. With the TLX MR3000, <strong>TimeLuxe</strong> redefined horological innovation by integrating a peripheral rotor with a floating tourbillon and a minute repeater regulator, setting new standards in precision and craftsmanship. These advancements not only highlight the brand&apos;s mastery of peripheral technology but also make <strong>TimeLuxe</strong> watches a symbol of sophistication and technical brilliance for discerning collectors and enthusiasts alike.
        </p>
      </div>
    </div>
  );
};

export default Manufacture;