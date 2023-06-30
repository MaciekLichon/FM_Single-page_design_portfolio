import slide1 from '../../assets/image-slide-1.jpg';
import slide2 from '../../assets/image-slide-2.jpg';
import slide3 from '../../assets/image-slide-3.jpg';
import slide4 from '../../assets/image-slide-4.jpg';
import slide5 from '../../assets/image-slide-5.jpg';

import {useState, useEffect} from "react";

const Gallery = () => {

    const slides = [slide1, slide2, slide3, slide4, slide5];

    const [imageNumber, setImageNumber] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
        return () => {
            window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
        };
    }, []);

    const moveRight = () => {
        if (imageNumber > -2) {
            setImageNumber(imageNumber - 1);
        }
    }
    const moveLeft = () => {
        if (imageNumber < 2) {
            setImageNumber(imageNumber + 1);
        }
    }

    return (
        <section className="mt-24 md:mt-32 lg:mt-20">
            <div className="max-w-[1440px] mx-auto overflow-hidden">
                <h3 className="header text-center mb-8 md:mb-14">My Work</h3>

                <div className="mb-8 flex flex_centered transition duration-300 origin-center md:mb-14"
                     style={{
                         transform: `${windowWidth >= 768 ? `translateX(${imageNumber * 570}px)` : `translateX(${imageNumber * 286}px)`}`,
                         gap: `${windowWidth >= 768 ? '30px ' : '16px'}`,
                     }}>
                    {slides.map((slide, index) => (
                        <img key={index} src={slide} alt="slide" className="rounded-[10px]"
                             style={{width: `${windowWidth >= 768 ? '540px ' : '270px'}`}}/>
                    ))}
                </div>

                <div className="flex_centered gap-4">
                    <button className="arrow arrow_left" onClick={moveLeft}></button>
                    <button className="arrow arrow_right" onClick={moveRight}></button>
                </div>
            </div>

        </section>
    );
};

export default Gallery;
