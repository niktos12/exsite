"use client"
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать минимум 2 символа' }),
  email: z.string().email({ message: 'Введите корректный email' }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Необходимо согласие на обработку данных',
  }),
});

type FormData = z.infer<typeof formSchema>;

const LeadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log('Form data:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    reset();
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Получите персональную демонстрацию</CardTitle>
              <CardDescription>
                Заполните форму и наш специалист свяжется с вами в течение 1 часа
              </CardDescription>
            </CardHeader>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@company.ru"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      placeholder="+7 (999) 999-99-99"
                      {...register('phone')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Компания</Label>
                    <Input
                      id="company"
                      placeholder="Название компании"
                      {...register('company')}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Что вас интересует?</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о ваших задачах..."
                    className="min-h-[120px]"
                    {...register('message')}
                  />
                </div>
                
                <div className="flex items-start space-x-2 mb-4">
                  <Checkbox id="consent" {...register('consent')} />
                  <div className=" gap-1.5 leading-none">
                    <Label
                      htmlFor="consent"
                      className="block text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Я согласен на обработку персональных данных и принимаю условия{' '}
                      <a href="#" className="text-indigo-600 hover:underline">
                        политики конфиденциальности
                      </a>
                    </Label>
                    {errors.consent && (
                      <p className="text-sm text-red-500">{errors.consent.message}</p>
                    )}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex-col gap-4">
                <Button
                  type="submit"
                  className="w-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Получить демонстрацию'}
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Нажимая кнопку, вы даете согласие на обработку персональных данных
                </p>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;