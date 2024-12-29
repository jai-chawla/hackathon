import React from "react";
import Slider from "react-slick";

const YogaSlider = () => {
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

  const instructors = [
    { name: "Preetika Bhatnagar", placeholder: "/yoga_1.png" },
    { name: "Samarthya Bhatnagar", placeholder: "/yoga_2.png" },
    { name: "Diana", placeholder: "/yoga_3.png" },
    { name: "Herkeesh", placeholder: "/yoga_4.jpg" },
    { name: "Ash", placeholder: "/yoga_5.jpeg" },
    { name: "Somi", placeholder: "/yoga_6.jpg" },
    { name: "Silliams", placeholder: "/yoga_7.jpg" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Meet Your Instructors</h2>
        <p className="mt-4 text-gray-600">
          We work with the finest professionals to ensure you feel your best.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {instructors.map((instructor, index) => (
            <div key={index} className="px-4">
              <div className="bg-white border rounded-lg shadow-md overflow-hidden">
                <div className="h-64 flex items-center justify-center">
                  <img src={instructor.placeholder} alt="" className="object-contain"/>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {instructor.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default YogaSlider;
