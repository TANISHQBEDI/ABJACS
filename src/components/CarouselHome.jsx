import React,{ useState, useEffect } from 'react'
import carousel from './carouselData'
import Carousel from 'react-bootstrap/Carousel'

export default function CarouselHome() {
    const [listItems, setListItems] = useState([]);

    const showListItems = (items) => {
        let delay = 1000;
        items.forEach((item, index) => {
        setTimeout(() => {
            setListItems((prevItems) => [...prevItems, item]);
        }, delay);
        delay += 1000;
        });
    };

    const handleSlide = (slideIndex) => {
        const slide = carousel[slideIndex];
        if (slide.type === 'list') {
        setListItems([]);
        showListItems(slide.content);
        } else {
        setListItems([slide.content]);
        }
    };
  return (
    <Carousel
        interval={5000}
        indicators={false} 
        onSelect={handleSlide}
    >
        {
            carousel.map((slide)=>(
              <Carousel.Item key={slide.title}>
                <img
                  className='d-block w-100'
                  src={slide.image}
                  alt={slide.title}
                />
                <Carousel.Caption>
                  <h1  className={slide.type==="list"?"listCarHead":"parCarHead"}>{slide.title}</h1>
                  {slide.type==="list"?(
                    <ul  className={slide.type==="list"?"listCarCont carousel-list":"carousel-list"} style={{ animationDelay: '1s' }}>
                      {/* {slide.content.map((item,index)=>(
                        <li key={index} className="carousel-list-item" style={{ animationDelay: `${(index + 1) * 1}s` }}>{item}</li>
                      ))} */}
                      {listItems.map((item, index) => (
                            <li className="carousel-list-item" key={index}>{item}</li>
                        ))}
                    </ul>
                  ):(
                    <p className='parCarCont'>{slide.content}</p>
                  )}
                </Carousel.Caption>
              </Carousel.Item>
            ))
        }
    </Carousel>
  )
}
