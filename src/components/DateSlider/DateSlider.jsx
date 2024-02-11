import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { SliderContent, StyledDateSlider, StyledDateSliderWrapper, StyledTimeSlider } from './DateSlider.styles';
import Button from '../Button';
import { HiArrowLongRight } from 'react-icons/hi2';
import { MdOutlineClose } from 'react-icons/md';
import { useTranslation } from '@/helpers/useTranslation';

const DateSlider = ({
  title = 'Tour This Home',
  discreption = 'Book a free tour of this home',
  close,
  setOpen,
  open,
  button = 'Request A Tour',
}) => {
  const [dates, setDates] = useState([]);
  const { t } = useTranslation();
  const time = [
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
  ];
  useEffect(() => {
    const fetchDates = () => {
      const today = new Date();
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      const nextDates = Array.from({ length: 15 }, (_, i) => {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);

        const date = nextDate.toISOString().slice(0, 10);
        const year = nextDate.getFullYear();
        const monthIndex = nextDate.getMonth();
        const month = months[monthIndex];
        const dayIndex = nextDate.getDay();
        const day = days[dayIndex];
        const dayNumber = nextDate.getDate().toString().padStart(2, '0');

        return { date, year, month, day, dayNumber };
      });
      setDates(nextDates);
    };

    fetchDates();
  }, []);

  const settings = {
    // autoplay: true,
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1421,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <StyledDateSliderWrapper>
        <div className="text">
          <strong>{t(title)}</strong>
          <p>{t(discreption)}</p>
        </div>
        <StyledDateSlider>
          <Slider {...settings}>
            {dates.map((elem, ind) => (
              <SliderContent key={elem.day}>
                <div className="day">{elem.dayNumber}</div>
                <div className="month">{elem.month}</div>
                <div className="dayName">{elem.day}</div>
              </SliderContent>
            ))}
          </Slider>
        </StyledDateSlider>
        <StyledTimeSlider>
          <Slider {...settings}>
            {time.map((elem, ind) => (
              <SliderContent key={ind}>
                <div className="dayName">{elem}</div>
              </SliderContent>
            ))}
          </Slider>
        </StyledTimeSlider>
        <span className="span">
          <input type="checkbox" id="uber" />
          <label htmlFor="uber">{t('I need a UBER ride')}</label>
        </span>
        <Button onClick={() => setOpen(!open)}>
          {t(button)} <HiArrowLongRight size={22} />
        </Button>
      </StyledDateSliderWrapper>
    </>
  );
};

export default DateSlider;
