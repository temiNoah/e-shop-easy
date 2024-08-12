import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { formatCurrency } from '../../utilities/formatCurrency'

import "./HeroSlider.css";

const HeroSlider = () => {
    const slides =
        [
            {
                "product_id": 1,
                "name": "Smartphone",
                "description": "High-end smartphone with advanced features.",
                "price": 599.99,
                "unit": "Piece",
                "image": "https://firebasestorage.googleapis.com/v0/b/ninja-firegram-80354.appspot.com/o/images%2F64330255891d63d1982bfbf6%2Ff0b262b2-b3ae-0096-858c-9b9f5a14689a-1681548950170.jpg?alt=media&token=063a73f3-4e7f-4d26-b077-456d222dbfff",
                "discount": 10,
                "availability": true,
                "brand": "BrandX",
                "category": "Electronics",
                "rating": 4.5,
                "reviews": [
                    {
                        "user_id": 1,
                        "rating": 5,
                        "comment": "Great phone with a superb camera!"
                    },
                    {
                        "user_id": 2,
                        "rating": 4,
                        "comment": "Good performance, but the battery life could be better."
                    }
                ]
            },
            {
                "product_id": 2,
                "name": "Laptop",
                "description": "Powerful laptop for work and gaming.",
                "price": 999.99,
                "unit": "Piece",
                "image": "https://firebasestorage.googleapis.com/v0/b/ninja-firegram-80354.appspot.com/o/images%2F64330255891d63d1982bfbf6%2Ff0b262b2-b3ae-0096-858c-9b9f5a14689a-1681548950170.jpg?alt=media&token=063a73f3-4e7f-4d26-b077-456d222dbfff",
                "discount": 5,
                "availability": true,
                "brand": "BrandY",
                "category": "Electronics",
                "rating": 4.7,
                "reviews": [
                    {
                        "user_id": 3,
                        "rating": 5,
                        "comment": "Excellent laptop for gaming and work tasks."
                    },
                    {
                        "user_id": 4,
                        "rating": 4,
                        "comment": "Good value for the price."
                    }
                ]
            },
            {
                "product_id": 3,
                "name": "Wireless Headphones",
                "description": "Premium wireless headphones with noise-cancellation.",
                "price": 149.99,
                "unit": "Piece",
                "image": "https://firebasestorage.googleapis.com/v0/b/ninja-firegram-80354.appspot.com/o/images%2F64330255891d63d1982bfbf6%2Ff0b262b2-b3ae-0096-858c-9b9f5a14689a-1681548950170.jpg?alt=media&token=063a73f3-4e7f-4d26-b077-456d222dbfff",
                "discount": 15,
                "availability": true,
                "brand": "SoundMasters",
                "category": "Electronics",
                "rating": 4.8,
                "reviews": [
                    {
                        "user_id": 5,
                        "rating": 5,
                        "comment": "Top-notch sound quality and comfort."
                    },
                    {
                        "user_id": 6,
                        "rating": 4,
                        "comment": "Impressive noise-cancellation, but a bit pricey."
                    }
                ]
            },
        ];

    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };
    return (
        <section className="p-0 hero__slider-section">
        <Slider {...settings} className="hero__slider">
                {
                    slides.map((slide, index) =>
                        <div className="slider__item  mt0" key={index} style={{
                            backgroundImage: `url(""+ ${slide.image})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <Container>
                                <div className="slider__content ">
                                    <h1>{slide.name}</h1>
                                    <h4 className="text-light mb-3">For Rent {formatCurrency(slide.price)} Per Day</h4>
                                    <h1 className="text-light mb-4">{slide.description}</h1>

                                    <button className="btn reserve__btn mt-4">
                                        <Link to="/products">Reserve Now</Link>
                                    </button>
                                </div>
                            </Container>
                        </div>
                    )
                }
        </Slider>
        </section>
    );
};

export default HeroSlider;
