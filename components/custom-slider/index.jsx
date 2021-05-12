import Slider from "react-slick";

export default function CustomSlider({slideToShow = 5 ,min = 3,  data = [], children, vertical = true}) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive : [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };

  if(vertical){
    settings['vertical'] = true
    settings['verticalSwiping'] = true
  }

  if (data.length > min) return <Slider {...settings}>{children}</Slider>;

  return <>{children}</>
}
