import {
  TrophyIcon,
  CheckBadgeIcon,
  ChartBarSquareIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    icon: <TrophyIcon className="w-8 h-8" />,
    value: "99.9%",
    label: "Uptime системы",
  },
  {
    icon: <CheckBadgeIcon className="w-8 h-8" />,
    value: "500+",
    label: "Довольных клиентов",
  },
  {
    icon: <ChartBarSquareIcon className="w-8 h-8" />,
    value: "45%",
    label: "Рост эффективности",
  },
  {
    icon: <BuildingLibraryIcon className="w-8 h-8" />,
    value: "24/7",
    label: "Поддержка",
  },
];

const certifications = [
  { name: "ISO 27001", desc: "Сертификат безопасности" },
  { name: "GDPR Compliant", desc: "Соответствие защите данных" },
  { name: "PCI DSS", desc: "Безопасность платежей" },
];

const SocialProof = () => {
  return (
    <section id="facts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Факты и достижения
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Наши результаты говорят сами за себя
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__zoomIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-indigo-600 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Наши сертификаты
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 text-center hover:border-indigo-300 transition duration-300"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckBadgeIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-600">{cert.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <div className="text-2xl font-bold text-gray-900">
                  Премии и награды
                </div>
                <p className="text-gray-600">Признание индустрии</p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-semibold">
                  Лучший стартап 2023
                </div>
                <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
                  Выбор редакции
                </div>
                <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                  Инновация года
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
