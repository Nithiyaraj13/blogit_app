import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "./slide.css";

export default function Slide() {
  return (
    <div className="slider-container">
      <MDBCarousel showControls dealy={1000}>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          // src="https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          //src='https://images.pexels.com/photos/1449455/pexels-photo-1449455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt="..."
          style={{ maxHeight: "350px", objectFit: "cover" }}
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          //src='https://mdbootstrap.com/img/new/slides/042.jpg'
          alt="..."
          style={{ maxHeight: "350px", objectFit: "cover" }}
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          //src='https://mdbootstrap.com/img/new/slides/043.jpg'
          alt="..."
          style={{ maxHeight: "350px", objectFit: "cover" }}
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={4}
          src="https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          //src='https://w0.peakpx.com/wallpaper/43/30/HD-wallpaper-travel-couple-lifestyle.jpg'
          alt="..."
          style={{ maxHeight: "350px", objectFit: "cover" }}
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={5}
          src="https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          //src='https://wallpaper-house.com/data/out/12/wallpaper2you_581782.jpg'
          alt="..."
          style={{ maxHeight: "350px", objectFit: "cover" }}
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={6}
          src="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          //src='https://wallpaperaccess.com/full/1209478.jpg'
          alt="..."
          style={{ maxHeight: "350px", objectFit: "cover" }}
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={7}
          src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          //src='https://wallpaperaccess.com/full/43696.jpg'
          alt="..."
          style={{ maxHeight: "350px", objectFit: "cover" }}
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={8}
          src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          //src='https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?cs=srgb&dl=pexels-pixabay-46798.jpg&fm=jpg'
          alt="..."
          style={{ maxHeight: "350px", objectFit: "cover" }}
        />
      </MDBCarousel>
    </div>
  );
}
