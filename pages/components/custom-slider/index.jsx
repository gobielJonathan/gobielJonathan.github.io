import Slider from "react-slick";

export default function CustomSlider({ min = 3, data = [], children }) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  if (data.length > min) return <Slider {...settings}>{children}</Slider>;

  return children;
}
