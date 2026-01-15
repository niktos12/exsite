import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { Youtube, Send, Linkedin } from "lucide-react";

const ContactAndSocial = () => {
  const socialLinks = [
    { name: "Telegram", icon: <Send />, url: "#", color: "bg-blue-500" },
    { name: "YouTube", icon: <Youtube />, url: "#", color: "bg-red-600" },
    { name: "LinkedIn", icon: <Linkedin />, url: "#", color: "bg-blue-700" },
  ];

  const contactInfo = [
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Телефон",
      value: "+7 (999) 999-99-99",
      desc: "Пн-Пт 9:00-18:00",
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: "Email",
      value: "hello@company.ru",
      desc: "Ответ в течение 1 часа",
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Адрес",
      value: "Москва, ул. Примерная, 15",
      desc: "БЦ 'Современный'",
    },
    {
      icon: <GlobeAltIcon className="w-6 h-6" />,
      title: "Сайт",
      value: "www.company.ru",
      desc: "Официальный сайт",
    },
  ];

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы всегда рады помочь и ответить на ваши вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Контактные данные
            </h3>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <div className="text-indigo-600">{contact.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {contact.title}
                    </h4>
                    <p className="text-lg text-gray-800 font-medium">
                      {contact.value}
                    </p>
                    <p className="text-gray-600 text-sm">{contact.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Мы в социальных сетях
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`${social.color} text-white p-4 rounded-xl hover:opacity-90 transition duration-300 transform hover:scale-105 flex items-center gap-2`}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-1">
            <div className="bg-white rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Быстрый запрос
              </h3>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Сообщение"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
                >
                  Отправить сообщение
                </button>
              </form>

              <div className="mt-8">
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPinIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Карта расположения</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              О компании
            </h3>
            <p className="text-gray-600 mb-6">
              Мы - технологическая компания, специализирующаяся на создании
              инновационных решений для бизнеса. Наша миссия - делать сложные
              технологии доступными для каждого предпринимателя.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Год основания
                </h4>
                <p className="text-gray-600">2018</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Клиентов</h4>
                <p className="text-gray-600">500+</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Команда</h4>
                <p className="text-gray-600">50+ специалистов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAndSocial;
