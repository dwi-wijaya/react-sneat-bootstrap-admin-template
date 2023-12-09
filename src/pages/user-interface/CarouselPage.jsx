import React from 'react'
import Carousel from '../../components/molecul/carousel';

export const CarouselPage = () => {
    const carouselItems = [
        {
            image: '../assets/img/elements/13.jpg',
            title: 'First slide',
            description: 'Eos mutat malis maluisset et, agam ancillae quo te, in vim congue pertinacia.'
        },
        {
            image: '../assets/img/elements/2.jpg',
            title: 'Second slide',
            description: 'In numquam omittam sea.'
        },
        {
            image: '../assets/img/elements/18.jpg',
            title: 'Third slide',
            description: 'Lorem ipsum dolor sit amet, virtute consequat ea qui, minim graeco mel no.'
        }
    ];


    return (

        <div className="row">
            <div className="col-md">
                <h5 className="my-4">Bootstrap carousel</h5>
                <Carousel id="carouselExample" items={carouselItems} />
            </div>
            <div className="col-md">
                <h5 className="my-4">Bootstrap crossfade carousel (dark) </h5>
                <Carousel id="carouselExampleDark" items={carouselItems} dark />
            </div>
        </div>
    );

}
