"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Header */}
<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b">
  <div className="max-w-7xl mx-auto px-6 py-3">

    <div className="flex items-center justify-between">

      {/* Logo */}
      <a href="#home" className="flex items-center gap-3">

        <img
          src="/images/logo.png"
          alt="Tastee Caterers Logo"
          className="w-14 h-14 object-contain"
        />

        <div>
          <h1 className="text-xl md:text-2xl font-extrabold text-yellow-600">
            Tastee Caterers
          </h1>

          <p className="text-xs text-gray-500">
            Taste • Quality • Service
          </p>
        </div>

      </a>

{/* Mobile Menu Button */}
<button
  className="md:hidden text-2xl font-bold"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle menu"
>
  {menuOpen ? "✕" : "☰"}
</button>
{menuOpen && (
  <nav className="md:hidden border-t mt-3 pt-4 pb-3">
    <div className="flex flex-col gap-4 font-semibold">

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
      >
        Home
      </a>

      <a
        href="#services"
        onClick={() => setMenuOpen(false)}
      >
        Services
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
      >
        About
      </a>

      <a
        href="#gallery"
        onClick={() => setMenuOpen(false)}
      >
        Gallery
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </a>

    </div>
  </nav>
)}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 font-semibold">

        <a href="#home" className="hover:text-yellow-600 transition">
          Home
        </a>

        <a href="#services" className="hover:text-yellow-600 transition">
          Services
        </a>

        <a href="#about" className="hover:text-yellow-600 transition">
          About
        </a>

        <a href="#gallery" className="hover:text-yellow-600 transition">
          Gallery
        </a>

        <a href="#contact" className="hover:text-yellow-600 transition">
          Contact
        </a>

      </nav>


      {/* WhatsApp */}
      <a
        href="https://wa.me/919106670843?text=Hello%20Tastee%20Caterers,%20I%20want%20to%20know%20about%20your%20catering%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-2.5 rounded-full font-bold shadow-md transition"
      >
        💬 <span className="hidden sm:inline">WhatsApp</span>
      </a>

    </div>

  </div>
</header>


      {/* Hero */}
      <section
        id="home"
        className="bg-gradient-to-r from-yellow-50 via-white to-orange-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <p className="text-yellow-600 font-bold uppercase tracking-widest">
            Premium Catering Service
          </p>

          <h2 className="mt-4 text-5xl md:text-7xl font-extrabold">
            Delicious Food.
            <br />
            <span className="text-yellow-600">
              Memorable Events.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Tastee Caterers provides delicious and hygienic catering
            services for weddings, parties, corporate events and special
            occasions.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold"
            >
              Book Catering
            </a>

            <a
              href="#gallery"
              className="border-2 border-yellow-500 text-yellow-600 px-8 py-4 rounded-full font-bold"
            >
              View Gallery
            </a>

          </div>

        </div>
      </section>


      {/* Services */}
<section id="services" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">

      <p className="text-yellow-600 font-bold uppercase tracking-widest">
        Our Services
      </p>

      <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
        Catering For Every Occasion
      </h2>

      <p className="mt-5 text-gray-600 text-lg">
        From intimate celebrations to large events, we provide
        delicious food and professional catering service.
      </p>

    </div>


    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

      {/* Wedding */}
      <div className="group p-8 rounded-3xl border bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-4xl">
          💍
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Wedding Catering
        </h3>

        <p className="mt-3 text-gray-500 leading-7">
          Complete food arrangements for weddings, receptions
          and traditional ceremonies.
        </p>

        <a
          href="#contact"
          className="inline-block mt-6 text-yellow-600 font-bold"
        >
          Enquire Now →
        </a>

      </div>


      {/* Birthday */}
      <div className="group p-8 rounded-3xl border bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-4xl">
          🎂
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Birthday Parties
        </h3>

        <p className="mt-3 text-gray-500 leading-7">
          Tasty snacks, meals and special menus for memorable
          birthday celebrations.
        </p>

        <a
          href="#contact"
          className="inline-block mt-6 text-yellow-600 font-bold"
        >
          Enquire Now →
        </a>

      </div>


      {/* Corporate */}
      <div className="group p-8 rounded-3xl border bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-4xl">
          🏢
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Corporate Events
        </h3>

        <p className="mt-3 text-gray-500 leading-7">
          Professional catering for meetings, conferences,
          office events and staff functions.
        </p>

        <a
          href="#contact"
          className="inline-block mt-6 text-yellow-600 font-bold"
        >
          Enquire Now →
        </a>

      </div>


      {/* Special Events */}
      <div className="group p-8 rounded-3xl border bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-4xl">
          🍽️
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Special Events
        </h3>

        <p className="mt-3 text-gray-500 leading-7">
          Customized catering for parties, social gatherings
          and special occasions.
        </p>

        <a
          href="#contact"
          className="inline-block mt-6 text-yellow-600 font-bold"
        >
          Enquire Now →
        </a>

      </div>

    </div>


    {/* CTA */}
    <div className="mt-14 rounded-3xl bg-black text-white p-8 md:p-10 text-center">

      <h3 className="text-2xl md:text-3xl font-bold">
        Planning an Event?
      </h3>

      <p className="mt-3 text-gray-300">
        Tell us your guest count and event requirements.
      </p>

      <a
        href="https://wa.me/919106670843?text=Hello%20Tastee%20Caterers,%20I%20want%20a%20catering%20quotation."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-bold transition"
      >
        Get Catering Quotation
      </a>

    </div>

  </div>
</section>


     {/* About */}
<section id="about" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Left */}
      <div>

        <p className="text-yellow-600 font-bold uppercase tracking-widest">
          About Tastee Caterers
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
          Great Food Makes
          <br />
          <span className="text-yellow-600">
            Great Memories.
          </span>
        </h2>

        <p className="mt-6 text-gray-600 text-lg leading-8">
          Tastee Caterers is dedicated to serving delicious food
          with quality ingredients, hygienic preparation and
          professional service.
        </p>

        <p className="mt-4 text-gray-600 leading-8">
          Whether it is a wedding, birthday, corporate function
          or special celebration, we help make your event
          enjoyable with carefully prepared food and reliable service.
        </p>

        <a
          href="#contact"
          className="inline-block mt-7 bg-yellow-500 hover:bg-yellow-600 text-white px-7 py-3 rounded-full font-bold transition"
        >
          Talk To Us →
        </a>

      </div>


      {/* Right */}
      <div className="grid grid-cols-2 gap-5">

        <div className="bg-white rounded-3xl p-7 shadow-sm">
          <div className="text-4xl">🍛</div>
          <h3 className="mt-4 text-xl font-bold">
            Quality Food
          </h3>
          <p className="mt-2 text-gray-500">
            Carefully prepared food with quality ingredients.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-7 shadow-sm">
          <div className="text-4xl">🧼</div>
          <h3 className="mt-4 text-xl font-bold">
            Hygiene
          </h3>
          <p className="mt-2 text-gray-500">
            Clean and hygienic food preparation.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-7 shadow-sm">
          <div className="text-4xl">👨‍🍳</div>
          <h3 className="mt-4 text-xl font-bold">
            Professional Service
          </h3>
          <p className="mt-2 text-gray-500">
            Organized service for smooth events.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-7 shadow-sm">
          <div className="text-4xl">❤️</div>
          <h3 className="mt-4 text-xl font-bold">
            Made With Care
          </h3>
          <p className="mt-2 text-gray-500">
            Every event receives personal attention.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

{/* Reviews */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <p className="text-yellow-600 font-bold uppercase tracking-widest">
        Customer Reviews
      </p>

      <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
        What Our Customers Say
      </h2>

      <p className="mt-4 text-gray-600">
        We value every customer and every celebration.
      </p>

    </div>


    <div className="grid md:grid-cols-3 gap-6 mt-12">

      {/* Review 1 */}
      <div className="rounded-3xl border bg-gray-50 p-8 shadow-sm">

        <div className="text-yellow-500 text-xl">
          ★★★★★
        </div>

        <p className="mt-5 text-gray-600 leading-7">
          “Delicious food and very good service.
          Everything was well organized for our event.”
        </p>

        <div className="mt-6 font-bold">
          Happy Customer
        </div>

      </div>


      {/* Review 2 */}
      <div className="rounded-3xl border bg-gray-50 p-8 shadow-sm">

        <div className="text-yellow-500 text-xl">
          ★★★★★
        </div>

        <p className="mt-5 text-gray-600 leading-7">
          “The food quality was excellent and the
          catering team was very helpful.”
        </p>

        <div className="mt-6 font-bold">
          Happy Customer
        </div>

      </div>


      {/* Review 3 */}
      <div className="rounded-3xl border bg-gray-50 p-8 shadow-sm">

        <div className="text-yellow-500 text-xl">
          ★★★★★
        </div>

        <p className="mt-5 text-gray-600 leading-7">
          “Great experience for our family function.
          Tasty food and professional service.”
        </p>

        <div className="mt-6 font-bold">
          Happy Customer
        </div>

      </div>

    </div>

  </div>
</section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-yellow-600 font-bold">
            OUR GALLERY
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Food & Events
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">

  {[
    "/images/1.jpg.png",
    "/images/2.jpg.png",
    "/images/farsan.jpg",
    "/images/event.jpg",
  ].map((src, index) => (
    <div
      key={src}
      className="h-64 rounded-2xl overflow-hidden shadow-md"
    >
      <img
        src={src}
        alt={`Tastee Caterers Food ${index + 1}`}
        className="w-full h-full object-cover hover:scale-105 transition duration-500"
      />
    </div>
  ))}

</div>

        </div>
      </section>


      {/* Contact */}
<section id="contact" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <p className="text-yellow-600 font-bold uppercase tracking-widest">
        Contact Us
      </p>

      <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
        Let's Plan Your Event
      </h2>

      <p className="mt-4 text-gray-600 text-lg">
        Contact us for catering menu, quotation and booking.
      </p>

    </div>


    <div className="grid md:grid-cols-3 gap-6 mt-12">


      {/* Call */}
      <a
        href="tel:+919106670843"
        className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition"
      >
        <div className="text-5xl">📞</div>

        <h3 className="mt-5 text-xl font-bold">
          Call Us
        </h3>

        <p className="mt-2 text-gray-500">
          +91 9106670843
        </p>
      </a>


      {/* WhatsApp */}
      <a
        href="https://wa.me/919106670843?text=Hello%20Tastee%20Caterers,%20I%20want%20to%20know%20about%20your%20catering%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition"
      >
        <div className="text-5xl">💬</div>

        <h3 className="mt-5 text-xl font-bold">
          WhatsApp
        </h3>

        <p className="mt-2 text-gray-500">
          Chat With Us
        </p>
      </a>


      {/* Location */}
      <div className="bg-white rounded-3xl p-8 text-center shadow-sm">

        <div className="text-5xl">📍</div>

        <h3 className="mt-5 text-xl font-bold">
          Location
        </h3>

        <p className="mt-2 text-gray-500">
          Bardoli, Gujarat
        </p>

      </div>

    </div>

{/* Google Maps */}
<div className="mt-12">

  <h3 className="text-2xl font-bold text-center mb-6">
    Find Us In Bardoli
  </h3>

  <div className="overflow-hidden rounded-3xl shadow-lg border bg-white">

    <iframe
  src="https://www.google.com/maps?q=21.135549,73.0938149&z=17&output=embed"
  width="100%"
  height="400"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  title="Tastee Caterers Location"
></iframe>

  </div>

</div>

    {/* Main CTA */}
    <div className="mt-12 rounded-3xl bg-black text-white p-10 text-center">

      <h3 className="text-3xl md:text-4xl font-extrabold">
        Ready To Make Your Event Special?
      </h3>

      <p className="mt-4 text-gray-300">
        Get in touch with Tastee Caterers today.
      </p>

      <div className="mt-7 flex flex-col sm:flex-row justify-center gap-4">

        <a
          href="tel:+919106670843"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-bold transition"
        >
          📞 Call Now
        </a>

        <a
          href="https://wa.me/919106670843?text=Hello%20Tastee%20Caterers,%20I%20want%20a%20catering%20quotation."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-bold transition"
        >
          💬 Get Quotation
        </a>

      </div>

    </div>

  </div>
</section>

          {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 text-center py-6">
        © 2026 Tastee Caterers. All Rights Reserved.
      </footer>


      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919106670843?text=Hello%20Tastee%20Caterers,%20I%20want%20to%20know%20about%20your%20catering%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl text-3xl transition-transform hover:scale-110"
        aria-label="Contact Tastee Caterers on WhatsApp"
      >
        💬
      </a>


    </main>
  );
}