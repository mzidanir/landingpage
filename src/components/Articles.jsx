import React from 'react';

function Articles({ onReadMore }) {
  const articles = [
    {
      title: "Teknologi Baterai Tesla yang Revolusioner",
      description: "Tesla mengembangkan baterai berkapasitas tinggi yang mampu meningkatkan jarak tempuh kendaraan listrik.",
      imageUrl: "2323.jpg",
      content: "Ini adalah artikel penuh tentang teknologi baterai Tesla..."
    },
    {
      title: "Autopilot: Masa Depan Mengemudi Otomatis",
      description: "Fitur autopilot Tesla adalah langkah besar menuju mobil tanpa pengemudi.",
      imageUrl: "auto.jpg",
      content: "Ini adalah artikel penuh tentang fitur autopilot Tesla..."
    },
    {
      title: "Desain Aerodinamis yang Canggih",
      description: "Setiap kendaraan Tesla dirancang untuk mengurangi hambatan angin dan meningkatkan efisiensi energi.",
      imageUrl: "zidan.png",
      content: "Ini adalah artikel penuh tentang desain aerodinamis Tesla..."
    }
  ];

  return (
    <section className="p-8 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6">Artikel Terbaru tentang Teknologi Tesla</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="mt-2 text-gray-600">{article.description}</p>
              <button 
                onClick={() => onReadMore(article)}
                className="mt-4 text-blue-500"
              >
                Baca Selengkapnya
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;
