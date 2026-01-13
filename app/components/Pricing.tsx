"use client"
import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Стартовый",
      monthlyPrice: "₽0",
      yearlyPrice: "₽0",
      description: "Для тестирования и небольших проектов",
      features: [
        { text: "До 1,000 посещений/мес", included: true },
        { text: "Базовая аналитика", included: true },
        { text: "Email поддержка", included: true },
        { text: "5GB хранилище", included: true },
        { text: "API доступ", included: false },
        { text: "Приоритетная поддержка", included: false },
        { text: "Расширенная аналитика", included: false },
      ],
      cta: "Начать бесплатно",
      popular: false,
    },
    {
      name: "Профессиональный",
      monthlyPrice: "₽2 990",
      yearlyPrice: "₽28 700",
      description: "Для растущего бизнеса",
      features: [
        { text: "До 10,000 посещений/мес", included: true },
        { text: "Расширенная аналитика", included: true },
        { text: "Приоритетная поддержка", included: true },
        { text: "50GB хранилище", included: true },
        { text: "Полный API доступ", included: true },
        { text: "Индивидуальные интеграции", included: false },
        { text: "Доступ к бета-функциям", included: true },
      ],
      cta: "Начать пробный период",
      popular: true,
    },
    {
      name: "Бизнес",
      monthlyPrice: "₽9 990",
      yearlyPrice: "₽95 900",
      description: "Для корпораций",
      features: [
        { text: "Безлимитные посещения", included: true },
        { text: "Полная аналитика", included: true },
        { text: "24/7 поддержка", included: true },
        { text: "500GB хранилище", included: true },
        { text: "Полный API доступ", included: true },
        { text: "Индивидуальные интеграции", included: true },
        { text: "Персональный менеджер", included: true },
      ],
      cta: "Связаться с отделом продаж",
      popular: false,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Прозрачные цены
          </h2>
          <p className="mb-8 text-xl text-muted-foreground">
            Выберите план, который идеально подходит для вашего бизнеса
          </p>
          
          <div className="mb-12 flex items-center justify-center gap-4">
            <Label htmlFor="billing-period" className="text-lg font-medium">
              Ежемесячно
            </Label>
            <Switch
              id="billing-period"
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <div className="flex items-center gap-2">
              <Label htmlFor="billing-period" className="text-lg font-medium">
                Ежегодно
              </Label>
              <Badge variant="outline" className="bg-green-50 text-green-700">
                Экономия 20%
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular
                  ? 'border-indigo-300 shadow-xl shadow-indigo-100 dark:shadow-indigo-900/20'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-1">
                    Самый популярный
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    <span className="text-lg font-normal text-muted-foreground">
                      {plan.monthlyPrice === "₽0" ? " навсегда" : isYearly ? "/год" : "/мес"}
                    </span>
                  </div>
                  {plan.monthlyPrice !== "₽0" && isYearly && (
                    <div className="text-sm text-green-600">
                      Экономия ₽{(parseInt(plan.monthlyPrice.replace('₽', '').replace(' ', '')) * 12 * 0.2).toLocaleString('ru-RU')}
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      {feature.included ? (
                        <Check className="mr-3 h-5 w-5 text-green-500" />
                      ) : (
                        <X className="mr-3 h-5 w-5 text-muted-foreground" />
                      )}
                      <span className={feature.included ? "" : "text-muted-foreground"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                      : ''
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Tabs defaultValue="faq" className="mx-auto max-w-3xl">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="faq">Частые вопросы</TabsTrigger>
              <TabsTrigger value="compare">Сравнение тарифов</TabsTrigger>
            </TabsList>
            <TabsContent value="faq" className="space-y-4 pt-4 text-left">
              <div>
                <h4 className="font-semibold">Можно ли изменить тариф позже?</h4>
                <p className="text-muted-foreground">Да, вы можете изменить тариф в любое время в личном кабинете.</p>
              </div>
              <div>
                <h4 className="font-semibold">Есть ли плата за отмену?</h4>
                <p className="text-muted-foreground">Нет, отмена подписки бесплатна в любое время.</p>
              </div>
            </TabsContent>
            <TabsContent value="compare" className="pt-4">
              <p className="text-center text-muted-foreground">
                Все тарифы включают 14-дневный бесплатный пробный период
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Pricing;