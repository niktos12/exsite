import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Анна Иванова",
    role: "Директор по маркетингу, TechCorp",
    content: "Внедрение этого решения увеличило нашу конверсию на 45% за первый месяц.",
    avatar: "/api/placeholder/100/100"
  },
  {
    name: "Михаил Петров",
    role: "CEO, RetailPro",
    content: "Лучшая платформа на рынке. Служба поддержки работает безупречно.",
    avatar: "/api/placeholder/100/100"
  },
  {
    name: "Елена Сидорова",
    role: "CTO, StartupHub",
    content: "Техническая реализация превзошла все ожидания. Рекомендую всем!",
    avatar: "/api/placeholder/100/100"
  }
];

const companies = [
  { name: "TechCorp", logo: "/api/placeholder/150/60" },
  { name: "RetailPro", logo: "/api/placeholder/150/60" },
  { name: "StartupHub", logo: "/api/placeholder/150/60" },
  { name: "DigitalGroup", logo: "/api/placeholder/150/60" },
  { name: "InnovateCo", logo: "/api/placeholder/150/60" }
];

const TrustConfirmation = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Нам доверяют
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 500+ компаний уже используют наше решение
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="w-40 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-700 font-semibold">{company.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Отзывы */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 animate__animated animate__fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustConfirmation;