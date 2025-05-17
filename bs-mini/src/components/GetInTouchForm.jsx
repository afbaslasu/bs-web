
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaGlobe,
  FaRegClock,
  FaDollarSign,
  FaPaintBrush,
  FaCogs,
  FaBullseye,
  FaFileAlt,
} from "react-icons/fa";

export default function GetInTouchForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    timeline: "",
    budget: "",
    designPreferences: "",
    features: "",
    audience: "",
    brandingAssets: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit logic here
    console.log("Form submitted", formData);
  };

  return (
    <section
      id="get-in-touch-form"
      className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-xl mb-35"
    >
      <h2 className="text-2xl font-bold text-center mb-6">
        Tell Us About Your Project
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center border rounded-lg p-2">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full outline-none"
            />
          </div>
          <div className="flex items-center border rounded-lg p-2">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full outline-none"
            />
          </div>
        </div>
        <div className="flex items-center border rounded-lg p-2">
          <FaGlobe className="text-gray-500 mr-2" />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center border rounded-lg p-2">
          <FaRegClock className="text-gray-500 mr-2" />
          <input
            type="text"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            placeholder="Desired Timeline"
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center border rounded-lg p-2">
          <FaDollarSign className="text-gray-500 mr-2" />
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Estimated Budget"
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center border rounded-lg p-2">
          <FaPaintBrush className="text-gray-500 mr-2" />
          <input
            type="text"
            name="designPreferences"
            value={formData.designPreferences}
            onChange={handleChange}
            placeholder="Design Preferences or Examples"
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center border rounded-lg p-2">
          <FaCogs className="text-gray-500 mr-2" />
          <input
            type="text"
            name="features"
            value={formData.features}
            onChange={handleChange}
            placeholder="Core Features & Functionality"
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center border rounded-lg p-2">
          <FaBullseye className="text-gray-500 mr-2" />
          <input
            type="text"
            name="audience"
            value={formData.audience}
            onChange={handleChange}
            placeholder="Target Audience"
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center border rounded-lg p-2">
          <FaFileAlt className="text-gray-500 mr-2" />
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Additional Notes or Questions"
            rows={4}
            className="w-full outline-none resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Submit Your Project Brief
        </button>
      </form>
    </section>
  );
}
