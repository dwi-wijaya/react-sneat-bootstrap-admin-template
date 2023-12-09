import React from 'react';

const Carousel = ({ id, items, dark }) => {
    return (
        <>

            <div
                id={id}
                className={`carousel ${dark ? 'carousel-dark slide carousel-fade' : 'carousel slide'}`}
                data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {items.map((_, index) => (
                        <button 
                            key={index}
                            type="button"
                            data-bs-target={`#${id}`}
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {items.map((item, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img className="d-block w-100" src={item.image} alt={`Slide ${index + 1}`} aria-label={item.description}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href={`#${id}`} role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href={`#${id}`} role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        </>
    );
};

export default Carousel;
