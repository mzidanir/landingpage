import React from 'react';

function HeroSection() {
  return (
    <section className="bg-cover bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage: "url('/yuda123.jpg')" }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Masa Depan Teknologi Otomotif Bersama Tesla</h1>
        <p className="mt-4 text-xl">Inovasi yang Mengubah Dunia</p>
        <button className="mt-8 bg-red-500 px-6 py-3 rounded text-lg">Baca Selengkapnya</button>
      </div>
    </section>
  );
}

export default HeroSection;
