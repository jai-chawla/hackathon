import React from 'react'
import YogaSlider from './YogaSlider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YogaFeature from './YogaFeature';
import ReviewsPage from './ReviewsPage';
import Pricing from './Pricing';

const Home = () => {
  return (
    <div>
      <div className="relative h-[572px] bg-cover bg-center" style={{ backgroundImage: 'url(/first_bg.jpg)' }}>
        {/* Overlay for text */}
        <div className="absolute ml-10  mt-10 inset-0  flex flex-col justify-start items-start text-center text-white">
          <h1 className="text-4xl font-bold my-4">Welcome to </h1>
          <h1 className="text-4xl font-bold mb-4">the Yogic World.</h1>


          <p className="text-lg">Yoga Teacher Trainings, Classes, </p>
          <p className="text-lg">Meditation, Pranayama, Music,</p>
          <p className="text-lg"> Philosophy & More.</p>
          <p className="text-md italic mt-2">Everything under $10.</p>
        </div>
      </div>

      {/* second page */}
      <div className='mt-5'>
        {/* Stats Section */}
        <section className="pt-12 pb-7 text-black">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-around">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 ">190+</h2>
                <p className="text-gray-600 dark:text-gray-400">Countries</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 ">1,000+</h2>
                <p className="text-gray-600 dark:text-gray-400">On-Demand Classes</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 ">100K</h2>
                <p className="text-gray-600 dark:text-gray-400">Members</p>
              </div>
            </div>
          </div>
        </section>
        <p className='border-2'></p>

        {/* Main Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold ">Discover Your Yogic Path</h2>
            <p className="text-lg   mt-4">Join our community and transform your yoga practice today.</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="p-6 bg-[rgb(243,244,248)]  shadow-lg rounded-xl hover:scale-105 duration-300">
                <h3 className="text-sm font-bold  ">Yoga Teacher Trainings</h3>
                <p className="text-sm mt-2">Become certified Yoga Teachers and transform your practice with the world's most accessible & affordable programs.</p>
              </div>
              <div className="p-6 bg-[rgb(243,244,248)]  shadow-lg rounded-xl hover:scale-105 duration-300">
                <h3 className="text-sm font-bold  ">Yoga Classes</h3>
                <p className="text-sm mt-2">Join revitalizing Yoga classes of Yin, Hatha, Ashtanga, Vinyasa, and a lot more to enhance your well-being.</p>
              </div>
              <div className="p-6 bg-[rgb(243,244,248)]  shadow-lg rounded-xl hover:scale-105 duration-300">
                <h3 className="text-sm font-bold  ">Calm Music</h3>
                <p className="text-sm mt-2">Experience tranquility with our calming music, perfect for relaxation and mindfulness.</p>
              </div>
              <div className="p-6 bg-[rgb(243,244,248)]  shadow-lg rounded-xl hover:scale-105 duration-300">
                <h3 className="text-sm font-bold  ">Pranayama & Meditation</h3>
                <p className="text-sm mt-2">Explore the power of breath and enhance your self-awareness and inner peace.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* third-page */}

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-white">
        {/* Text Section */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-2xl  font-bold leading-snug text-gray-900">
            Get Internationally Accredited by Bodsphere,
          </h1>
          <h1 className='text-2xl  font-bold leading-snug text-gray-900'> from the comfort of your home</h1>
          <p className="mt-6 text-gray-700">
            Join the Bodsphere Community and take the first step towards joining the
            World’s Biggest Community of Yoga Schools and Teachers that represent
            high quality, safe, affordable, accessible and equitable Yoga.
          </p>
          <button className="mt-8 px-6 py-3 border border-black rounded-full text-sm font-medium hover:bg-gray-800 hover:text-white transition">
            Get Accredited
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 md:ml-12 w-full md:w-1/2 flex justify-end">
          {/* Placeholder for Image */}
          <div className="w-72 h-96  rounded-lg  flex items-center justify-center">
            <img src="/third_image.png" alt="" className='w-full h-full object-contain' />
          </div>
        </div>
      </section>

      {/* fourth page */}
      <YogaSlider/>

      {/* fifth page */}
      <YogaFeature/>

      {/* sixth page */}
      <ReviewsPage/>

      {/* seventh page  */}
      <Pricing/>

      {/* eight page */}

      <div className='my-10'>
        <div className='w-[81%] mx-auto'>
        <img src="/eight_image.png" alt="" className='rounded-lg' />
        </div>
      </div>
    </div>
  )
}

export default Home