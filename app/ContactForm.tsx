// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    email: "",
    alternatePhone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! We'll get back to you soon.");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-purple-50 p-8 rounded-lg shadow-md space-y-6"
        >
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Join Us Today</h2>
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="w-full p-3 rounded border border-purple-300"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone Number"
            className="w-full p-3 rounded border border-purple-300"
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            required
            placeholder="Residential Location"
            className="w-full p-3 rounded border border-purple-300"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email ID"
            className="w-full p-3 rounded border border-purple-300"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="alternatePhone"
            required
            placeholder="Alternate Phone Number"
            className="w-full p-3 rounded border border-purple-300"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700"
          >
            Submit
          </button>
        </form>

        <div className="flex justify-center">
          <img
            src="/form.webp"
            alt="Yoga Pose"
            className="w-full max-w-sm rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
