import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Phone, Mail } from 'lucide-react';

const FAQ = () => {
  const faqItems = [
    {
      question: "Как начать пользоваться сервисом?",
      answer: "Просто зарегистрируйтесь на сайте, выберите подходящий тарифный план и начните работу. Первые 14 дней бесплатно для всех новых пользователей."
    },
    {
      question: "Можно ли отменить подписку?",
      answer: "Да, вы можете отменить подписку в любой момент через личный кабинет. После отмены у вас останется доступ к сервису до конца оплаченного периода."
    },
    {
      question: "Есть ли мобильное приложение?",
      answer: "Да, у нас есть мобильные приложения для iOS и Android. Вы можете скачать их в App Store и Google Play."
    },
    {
      question: "Как обеспечивается безопасность данных?",
      answer: "Мы используем шифрование SSL/TLS, регулярно проходим аудиты безопасности и соответствуем стандартам ISO 27001 и GDPR."
    },
    {
      question: "Предоставляете ли вы техническую поддержку?",
      answer: "Да, мы предоставляем круглосуточную техническую поддержку по email, чату и телефону. Время ответа - не более 1 часа."
    },
    {
      question: "Можно ли интегрировать ваш сервис с другими системами?",
      answer: "Да, у нас есть открытое API и готовые интеграции с популярными CRM, ERP и другими бизнес-системами."
    },
  ];

  return (
    <section className="py-20" id='faq'>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-muted-foreground">
              Ответы на самые популярные вопросы о нашем сервисе
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-100">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="mb-4 text-2xl font-bold">Остались вопросы?</h3>
                <p className="mb-6 text-muted-foreground">
                  Наша команда поддержки готова помочь вам 24/7
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Чат поддержки
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Позвонить
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Написать
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;