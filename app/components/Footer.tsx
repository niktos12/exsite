import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Продукт: [
      { name: 'Функции', href: '#' },
      { name: 'Цены', href: '#' },
      { name: 'API', href: '#' },
      { name: 'Документация', href: '#' }
    ],
    Компания: [
      { name: 'О нас', href: '#' },
      { name: 'Блог', href: '#' },
      { name: 'Карьера', href: '#' },
      { name: 'Контакты', href: '#' }
    ],
    Поддержка: [
      { name: 'Помощь', href: '#' },
      { name: 'Сообщество', href: '#' },
      { name: 'Статус', href: '#' },
      { name: 'Соглашения', href: '#' }
    ],
    Юридическое: [
      { name: 'Политика конфиденциальности', href: '#' },
      { name: 'Условия использования', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'Согласие на обработку данных', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">C</span>
              </div>
              <span className="text-2xl font-bold">CompanyName</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Мы помогаем бизнесу расти с помощью инновационных технологических решений. 
              Простота, безопасность и эффективность — наши основные принципы.
            </p>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg font-medium transition duration-300">
                Начать бесплатно
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-lg font-medium transition duration-300">
                Демо
              </button>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} CompanyName. Все права защищены.
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-800 font-bold">RU</span>
              </div>
              <span>Русский</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Система работает стабильно</span>
            </div>
            
            <div className="text-gray-400">
              Версия 2.1.5
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400">
            <div>
              <p className="mb-2">
                ООО "Компанейм" • ИНН 1234567890 • ОГРН 1234567890123
              </p>
              <p>
                123456, Москва, ул. Примерная, д. 15, БЦ "Современный"
              </p>
            </div>
            <div className="text-right">
              <p className="mb-2">
                Телефон: +7 (999) 999-99-99
              </p>
              <p>
                Email: legal@company.ru
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;