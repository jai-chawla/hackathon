import React from 'react'
import Slider from "react-slick";

const ReviewsPage = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const data = [
    { text: "Bodsspehere has made Yoga accesible and affordable for everyone. So grateful!", name: "Alejandra Martinez", country:"Argentina" },
    { text: "Super happy to be a part of the Bodsphere Revolution!", name: "Katerina Smith", country:"United States of America" },
    { text: "Bodsphere's Platform is a gift for this World", name: "Diego Rodriguez", country:"Spain" },
    { text: "Bodsphere Accreditation, So powerful!", name: "Susana Fernandes", country:"Thailand" },
    
  ];

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">What they say about Bodsphere</h2>
        {/* <p className="mt-4 text-gray-600">
          We work with the finest professionals to ensure you feel your best.
        </p> */}
      </div>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {data.map((card, index) => (
            <div key={index} className="px-4">
              
              <div className="bg-gray-100 border rounded-lg shadow-md overflow-hidden h-52">
              <img src="/inverted.png" alt="" className='w-16 h-12 mt-3 ml-2'/>
                <div className="p-2 text-left space-y-3">
                  <h3 className="text-sm font-medium text-gray-900">
                    {card.text}
                  </h3>

                  <h3 className="text-sm font-medium text-gray-900">
                    {card.name}
                  </h3>
                  <h3 className="text-sm font-medium text-gray-400">
                    {card.country}
                  </h3>

                  
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default ReviewsPage