import React from "react";
import { FaLaptopCode, FaMobileAlt, FaCloud } from "react-icons/fa";
import { HiOutlineCheckCircle } from "react-icons/hi";
import ClientTestimonials from "./ClientTestimonials";

// Option A: Feature-Focused Services Page
export default function ServicesSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Smilelink Web Development Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            We deliver cutting-edge web solutions that drive growth, efficiency,
            and innovation.
          </p>
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-500"
          >
            Chat With Us for Free
          </a>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container bg-gray-50 mx-auto px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <FaLaptopCode className="h-10 w-10 text-indigo-500" />,
              title: "Custom Web Apps",
            },
            {
              icon: <FaMobileAlt className="h-10 w-10 text-indigo-500" />,
              title: "Mobile-Responsive Design",
            },
            {
              icon: <FaCloud className="h-10 w-10 text-indigo-500" />,
              title: "Cloud Integration",
            },
          ].map((service) => (
            <div key={service.title} className="text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 p-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">
                Industry-leading expertise for scalable, robust, and secure
                solutions.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Proven Process
          </h2>
          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {[
              "Discovery & Planning",
              "Design & Development",
              "Testing & Launch",
            ].map((step) => (
              <div key={step} className="flex items-start">
                <HiOutlineCheckCircle className="h-8 w-8 text-green-500 mt-1 mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {step}
                  </h4>
                  <p className="text-gray-600">
                    We collaborate closely to ensure your requirements are met
                    at every stage.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <ClientTestimonials />

      {/* Contact CTA */}
      <section id="contact" className="bg-indigo-900 text-gray-200 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="mb-6">
            Reach out today and let’s build something amazing together.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
