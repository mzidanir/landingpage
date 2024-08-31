import React from 'react';

function AboutTesla() {
  return (
    <section className="p-8 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6">Inovasi Teknologi Tesla</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <img src="https://www.tesla.com/ns_videos/model-3-social.jpg" alt="Tesla Technology" className="w-full rounded-lg" />
        </div>
        <div className="flex-1">
          <p className="text-lg mb-4">Tesla adalah pelopor dalam teknologi otomotif listrik dengan berbagai inovasi yang mendefinisikan ulang industri kendaraan. Mulai dari baterai berdaya tinggi hingga fitur autopilot, Tesla terus memimpin dalam pengembangan mobil yang cerdas dan ramah lingkungan.</p>
          <ul className="list-disc list-inside">
            <li>Baterai listrik berkapasitas tinggi</li>
            <li>Autopilot dan teknologi self-driving</li>
            <li>Desain yang efisien dan aerodinamis</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutTesla;
