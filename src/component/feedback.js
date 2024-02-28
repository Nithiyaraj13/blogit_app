import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./feedback.css";
import { Button } from "bootstrap";
import { Image } from "react-bootstrap";

export default class Feedback extends Component {
  render() {
    const cardData = [
      {
        id: 1,

        title: "Card 1",

        content: "This is the content of card 1.",

        image:
          "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=900&t=st=1691496189~exp=1691496789~hmac=fc4d76c911e29f3f0550eab7af9aa42364415f0eb30f75abb337a61b35c66c30",

        name: "Jane Smith",

        testimonial:
          "Vestibulum tincidunt neque vel iaculis hendrerit. Maecenas sit amet ex in lectus fermentum vestibulum.",
        rating: 4,
      },

      {
        id: 2,

        title: "Card 2",

        content: "This is the content of card 2.",

        image:
          "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=900&t=st=1691496212~exp=1691496812~hmac=4c58a37c0c7f6c0a6fa171b09d5b3a168e24d69d9a57654929b4fb48005b4482",

        name: "Jane Smith",

        testimonial:
          "Vestibulum tincidunt neque vel iaculis hendrerit. Maecenas sit amet ex in lectus fermentum vestibulum.",

        rating: 2,
      },

      {
        id: 3,

        title: "Card 3",

        content: "This is the content of card 3.",

        image:
          "https://img.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg?w=900&t=st=1691496233~exp=1691496833~hmac=52c2df3ddfda495ad10da7412b3ee2c68b18f6dd1b853eea40ab76b28ef1c258",

        name: "Jane Smith",

        testimonial:
          "Vestibulum tincidunt neque vel iaculis hendrerit. Maecenas sit amet ex in lectus fermentum vestibulum.",

        rating: 3.5,
      },

      {
        id: 4,

        title: "Card 4",

        content: "This is the content of card 3.",

        image:
          "https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?w=900&t=st=1691496269~exp=1691496869~hmac=bfaee65f5fe564f58e8624daf40d47e2a506fd12a96371301af36134baba5e2a",

        name: "Jane Smith",

        testimonial:
          "Vestibulum tincidunt neque vel iaculis hendrerit. Maecenas sit amet ex in lectus fermentum vestibulum.",

        rating: 3.5,
      },

      {
        id: 5,

        title: "Card 5",

        content: "This is the content of card 3.",

        image:
          "https://img.freepik.com/free-photo/lady-with-brown-eyes-is-smiling-red-wall_197531-16958.jpg?w=900&t=st=1691496319~exp=1691496919~hmac=b2a04a8ababbb70368566189a1ba8c7e23efdcdfdb89365fbd7b45119431c0b7",

        name: "Jane Smith",

        testimonial:
          "Vestibulum tincidunt neque vel iaculis hendrerit. Maecenas sit amet ex in lectus fermentum vestibulum.",

        rating: 1,
      },

      {
        id: 6,

        title: "Card 6",

        content: "This is the content of card 3.",

        image:
          "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=900&t=st=1691496296~exp=1691496896~hmac=839ea500e6554253f332901112bf25b89f05e29776c4a91bc887e3340384c3b8",

        name: "Jane Smith",

        testimonial:
          "Vestibulum tincidunt neque vel iaculis hendrerit. Maecenas sit amet ex in lectus fermentum vestibulum.",

        rating: 3,
      },

      {
        id: 7,

        title: "Card 7",

        content: "This is the content of card 3.",

        image:
          "https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg?w=900&t=st=1691496129~exp=1691496729~hmac=6ede7992c2e14ae1321550416d4bb1253e3f5795105b0a5c9e535f951e1b35ba",

        name: "Jane Smith",

        testimonial:
          "Vestibulum tincidunt neque vel iaculis hendrerit. Maecenas sit amet ex in lectus fermentum vestibulum.",

        rating: 5,
      },
    ];

    return (
      <div className="horizontal-carousel">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          showArrows={true}
          showStatus={true}
          showIndicators={true}
          centerMode={true}
          centerSlidePercentage={33.3}
        >
          {cardData.map((card) => (
            <div key={card.id} className="carousel-card">
              <Image src={card.image} thumbnail />
              {/* <img src={card.image} alt={card.title} /> */}

              <h3>{card.name}</h3>

              <p>{card.testimonial}</p>

              <div className="rating">
                <p>Ratings:</p>

                {Array.from({ length: card.rating }).map((_, index) => (
                  <span key={index} className="star">
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
