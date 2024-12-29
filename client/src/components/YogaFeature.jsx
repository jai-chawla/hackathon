import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const YogaFeature = () => {
  return (
    <section className="py-12 bg-white my-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left Section - Image Placeholder */}
        <div className="w-1/2 h-fit flex justify-center mb-8 ">
          <div className="w-full h-64  rounded-lg flex items-center justify-center">
            <img src="/fifth_image.png" alt="" className='object-contain rounded-lg'/>
          </div>
        </div>

        {/* Right Section - Text and Buttons */}
        <div className="w-full md:w-1/2 text-center md:text-left mx-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Yoga Like Never Before
          </h2>
          <p className="text-gray-600 mb-6">
            Becoming a Yoga Teacher has never been so easy. You can even
            download your favorite classes so they’re always available when you
            want them.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Apple Store Button */}
            <button className="bg-black text-white px-5 py-2 rounded-lg flex items-center">
              <FontAwesomeIcon icon={faApple} className="mr-2 w-7 h-7" />
              <div className='flex flex-col items-start'>
              <p className='text-xs'>Get in </p>
              <p className='text-xs'> Apple Store</p>
              </div>
            </button>

            {/* Google Play Store Button */}
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
              <FontAwesomeIcon icon={faGooglePlay} className="mr-2 w-6 h-6" />
              <div className='flex flex-col items-start'>
              <p className='text-xs'>Get in </p>
              <p className='text-xs'> Play Store</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default YogaFeature