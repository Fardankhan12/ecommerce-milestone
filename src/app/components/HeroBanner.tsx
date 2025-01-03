import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HeroBanner() {
  const cards = [
    {
      id: "0",
      image: "https://static.vecteezy.com/system/resources/previews/002/491/931/large_2x/big-sale-banner-background-free-vector.jpg",
      description: "Exclusive Watches Starting at $199",
    },
    {
      id: "1",
      image: "https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143835.jpg",
      description: " Up to 50% off Electronics",
    },
    {
      id: "2",
      image: "https://static.vecteezy.com/system/resources/previews/008/629/549/non_2x/abstract-banner-template-with-dummy-text-for-web-design-landing-page-background-etc-free-vector.jpg",
      description: "Latest Fashion Trends - 30% Off",
    },
  ];

  return (
    <div className="relative">
      <Carousel
        showStatus={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
      >
        {cards.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.description}  className="object cover"/>
            <p className="legend text-lg font-semibold">{item.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default HeroBanner;
