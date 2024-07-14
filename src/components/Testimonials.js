import { Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { testimonials } from "../data";

function Testimonials() {
  return (
    <div className="px-4 py-8 md:px-8 md:py-16 rounded-2xl bg-gradient-to-r from-gray-600 to-gray-800 text-white w-full">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12 text-white">
        Testimonials
      </h1>
      <Carousel
        animation="slide"
        autoPlay={true}
        interval={5000}
        indicators={false}
        navButtonsAlwaysVisible={true}
      >
        {testimonials.map((testimonial) => (
          <Item key={testimonial.id} testimonial={testimonial} />
        ))}
      </Carousel>
    </div>
  );
}

function Item({ testimonial }) {
  return (
    <div className="flex justify-center w-full px-2 md:px-4">
      <Paper className="bg-gradient-to-r from-purple-200 to-yellow-100 p-4 md:p-8 rounded-lg shadow-lg w-full text-center">
        <p className="italic mb-4">"{testimonial.testimonial}"</p>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-gray-400">
            {testimonial.position}, {testimonial.company}
          </p>
        </div>
      </Paper>
    </div>
  );
}

export default Testimonials;
