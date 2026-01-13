import React from 'react';
import { 
  BoltIcon, 
  ShieldCheckIcon, 
  ChartBarIcon, 
  DevicePhoneMobileIcon,
  CloudArrowUpIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: <BoltIcon className="w-12 h-12" />,
    title: "Мгновенная скорость",
    description: "Загрузка страниц менее 1 секунды благодаря оптимизации"
  },
  {
    icon: <ShieldCheckIcon className="w-12 h-12" />,
    title: "Безопасность",
    description: "Защита данных уровня банковских систем"
  },
  {
    icon: <ChartBarIcon className="w-12 h-12" />,
    title: "Аналитика",
    description: "Детальная аналитика эффективности в реальном времени"
  },
  {
    icon: <DevicePhoneMobileIcon className="w-12 h-12" />,
    title: "Адаптивность",
    description: "Идеальное отображение на всех устройствах"
  },
  {
    icon: <CloudArrowUpIcon className="w-12 h-12" />,
    title: "Облачное хранение",
    description: "Неограниченное облачное хранилище для ваших данных"
  },
  {
    icon: <UserGroupIcon className="w-12 h-12" />,
    title: "Командная работа",
    description: "Удобные инструменты для совместной работы"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate__animated animate__fadeIn">
            Ключевые преимущества
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Все, что нужно для успешного развития вашего бизнеса в одном решении
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-indigo-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;