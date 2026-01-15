import { PlayCircleIcon } from '@heroicons/react/24/outline';

const ProductDemo = () => {
  return (
    <section id='demo' className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate__animated animate__fadeInLeft">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Увидеть — значит поверить
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Посмотрите, как наше решение преобразует ваш бизнес-процесс всего за 2 минуты
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Интуитивно понятный интерфейс</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Интеграция с популярными сервисами</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Мгновенная аналитика</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:w-1/2 w-full relative animate__animated animate__fadeInRight">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-gray-900 rounded-xl p-2">
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <button className="absolute z-10 bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition duration-300">
                    <PlayCircleIcon className="w-16 h-16 text-white" />
                  </button>
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-400">product-demo.ai</div>
                  </div>
                  
                  <div className="w-3/4 h-32 bg-gray-800/50 rounded-lg border border-gray-700"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;