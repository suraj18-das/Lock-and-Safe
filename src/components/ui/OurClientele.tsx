import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function OurClientele() {
  const clientLogos = [
      { src: 'src/components/assets/Waldies.png', alt: 'Waldies' },
      { src: 'src/components/assets/Prabhu Polycolor.png', alt: 'Prabhu Polycolor' },
      { src: 'src/components/assets/Zuba Crop.png', alt: 'Zuba Crop' },
      { src: 'src/components/assets/ChandraMukhi.png', alt: 'ChandraMukhi' },
      { src: 'src/components/assets/Natraj Piepes.png', alt: 'Natraj Piepes' },
      { src: 'src/components/assets/Express Roadways.png', alt: 'Express Roadways' },
      { src: 'src/components/assets/Pratham.png', alt: 'Pratham Enterprise' },
      { src: 'src/components/assets/DL Logistics.png', alt: 'DL Logistics' },
      { src: 'src/components/assets/Adhunik Construction.png', alt: 'Adhunik Construction' },
      { src: 'src/components/assets/Triveni.png', alt: 'Triveni' },
  ];

  const settings = {
    dots: true, // Adds navigation dots below the slider
    infinite: true, // Allows infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of logos visible at a time
    slidesToScroll: 1, // Number of logos to scroll per action
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 2000, // Sets the time interval (in ms) between slides (e.g., 3000 ms = 3 seconds)
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

  return (
    <div className="py-16 bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-black-600 mb-8">Our Clientele</h2>
        <div>
          <Slider {...settings}>
            {clientLogos.map((logo, index) => (
              <div key={index} className="px-2">
                <div className="w-34 h-20 flex justify-center items-center mx-auto ">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full object-contain lazy-load"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
