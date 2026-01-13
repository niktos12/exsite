import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-8 md:pt-12">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-0 left-1/4 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 translate-x-1/2 translate-y-1/2 rounded-full bg-purple-200/30 blur-3xl" />
      
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Badge 
            variant="outline" 
            className="mb-6 animate-pulse border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-50"
          >
            🚀 НОВИНКА: Искусственный интеллект уже здесь
          </Badge>
          
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Превращаем{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              идеи
            </span>{' '}
            в реальность
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            Инновационная платформа, которая увеличивает эффективность вашего бизнеса на 300% с помощью AI
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className="group gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 px-8 hover:from-indigo-700 hover:to-purple-700"
            >
              Начать бесплатно
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 border-2 px-8"
            >
              <Play className="h-4 w-4" />
              Смотреть демо
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Без кредитной карты
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              14 дней бесплатно
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Поддержка 24/7
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative border-t bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 py-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">500+</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime системы</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">45%</div>
              <div className="text-sm text-muted-foreground">Рост эффективности</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">24/7</div>
              <div className="text-sm text-muted-foreground">Поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;