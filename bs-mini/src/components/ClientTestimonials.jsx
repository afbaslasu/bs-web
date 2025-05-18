import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ibasPix from "../assets/images/profilePix.png";
import ibasKunle from "../assets/images/ibaslogicPix.png";
import teamMember from "../assets/images/team-6.jpg";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Afbas Ibas",
    role: "CEO, Acme Corp",
    avatar: `${ ibasPix }`,
    quote:
      "This service transformed our business. Exceptional quality and support!",
  },
  {
    name: "Ibas Kunle",
    role: "CTO, Tech Innovations",
    avatar: `${ ibasKunle }`,
    quote: "A world-class experience from start to finish. Highly recommend!",
  },
  {
    name: "Beejay Omoh",
    role: "Product Lead, InnovateX",
    avatar: `${ teamMember }`,
    quote:
      "Their expertise delivered results beyond our expectations. Stellar team!",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="relative py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <p className="italic text-lg mb-4">“{t.quote}”</p>
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <span className="text-gray-500">{t.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
