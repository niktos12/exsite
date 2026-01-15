"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useRef, useState } from "react";
import IMask from "imask";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Имя должно содержать минимум 2 символа" })
    .max(50, { message: "Имя должно содержать не более 50 символов" })
    .regex(/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/, {
      message: "Имя может содержать только буквы, пробелы и дефисы",
    }),

  email: z
    .string()
    .email({ message: "Введите корректный email" })
    .min(5, { message: "Email должен содержать минимум 5 символов" })
    .max(100, { message: "Email должен содержать не более 100 символов" }),

  phone: z.string().optional(),

  company: z.string().max(100, {
    message: "Название компании должно содержать не более 100 символов",
  }),

  message: z
    .string()
    .max(500, { message: "Сообщение должно содержать не более 500 символов" }),

  consent: z.boolean().refine((val) => val === true, {
    message: "Необходимо согласие на обработку данных",
  }),
});

type FormData = z.infer<typeof formSchema>;

const LeadForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const maskRef = useRef<any>(null);
  const phoneValueRef = useRef<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    reset,
    setValue,
    watch,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      consent: false,
    },
    mode: "onBlur",
  });

  const phoneValue = watch("phone");
  const nameValue = watch("name");
  const emailValue = watch("email");
  const companyValue = watch("company");
  const messageValue = watch("message");
  const consentValue = watch("consent");

  useEffect(() => {
    if (phoneInputRef.current && !maskRef.current) {
      maskRef.current = IMask(phoneInputRef.current, {
        mask: "+{7} (000) 000-00-00",
        lazy: false,
        placeholderChar: "_",
        blocks: {
          "0": {
            mask: "0",
            validator: "[0-9]",
          },
        },
        prepare: function (str: string) {
          return str.replace(/[^\d]/g, "");
        },
        commit: function (value: string, masked: any) {
          const cleanValue = value.replace(/\D/g, "");
          phoneValueRef.current = cleanValue;
          setValue("phone", cleanValue, {
            shouldValidate: true,
            shouldTouch: true,
          });
        },
      });

      const syncMask = () => {
        if (phoneValue && maskRef.current) {
          const cleanPhone = phoneValue.replace(/\D/g, "");
          if (cleanPhone !== phoneValueRef.current) {
            maskRef.current.unmaskedValue = cleanPhone;
            phoneValueRef.current = cleanPhone;
          }
        } else if (phoneValue === "" && maskRef.current) {
          maskRef.current.unmaskedValue = "";
          phoneValueRef.current = "";
        }
      };

      syncMask();
    }

    return () => {
      if (maskRef.current) {
        maskRef.current.destroy();
        maskRef.current = null;
      }
    };
  }, [setValue]);

  useEffect(() => {
    if (maskRef.current && phoneValue !== undefined) {
      const cleanPhone = phoneValue?.replace(/\D/g, "") || "";
      if (cleanPhone !== phoneValueRef.current) {
        maskRef.current.unmaskedValue = cleanPhone;
        phoneValueRef.current = cleanPhone;
      }
    }
  }, [phoneValue]);

  const onSubmit = async (data: FormData) => {
    console.log("Form data:", data);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const getInputErrorStyle = (fieldName: keyof FormData, isTouched = false) => {
    const hasError = errors[fieldName];
    const isFieldTouched = isTouched || touchedFields[fieldName];

    if (fieldName === "phone") {
      const phoneHasValue =
        phoneValue && phoneValue.replace(/\D/g, "").length > 0;
      if (!phoneHasValue) return "";
    }

    return hasError && isFieldTouched
      ? "border-red-500 focus-visible:ring-red-500"
      : "";
  };

  const getCheckboxErrorStyle = () => {
    return errors.consent && touchedFields.consent ? "border-red-500" : "";
  };

  return (
    <section
      id="form"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Спасибо! Мы свяжемся с вами в ближайшее время.
                  </h3>
                </div>
              </div>
            </div>
          )}

          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Получите персональную демонстрацию
              </CardTitle>
              <CardDescription className="text-lg">
                Заполните форму и наш специалист свяжется с вами в течение 1
                часа
              </CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Имя *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      {...register("name")}
                      className={`${getInputErrorStyle("name")} focus:bg-background`}
                    />
                    {errors.name && touchedFields.name && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@company.ru"
                      {...register("email")}
                      className={`${getInputErrorStyle("email")} focus:bg-background`}
                    />
                    {errors.email && touchedFields.email && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Телефон
                      <span className="text-gray-500 font-normal ml-1">
                        (необязательно)
                      </span>
                    </Label>
                    <div className="relative">
                      <Input
                        ref={phoneInputRef}
                        type="tel"
                        id="phone"
                        className={`flex h-10 w-full rounded-md border focus:bg-background bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                          phoneValue &&
                          phoneValue.replace(/\D/g, "").length > 0 &&
                          errors.phone
                            ? "border-red-500 focus-visible:ring-red-500"
                            : "border-input"
                        }`}
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    {phoneValue &&
                      phoneValue.replace(/\D/g, "").length > 0 &&
                      errors.phone && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    <p className="text-xs text-gray-500 mt-1">
                      Формат: +7 (999) 999-99-99
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      Компания
                      <span className="text-gray-500 font-normal ml-1">
                        (необязательно)
                      </span>
                    </Label>
                    <Input
                      id="company"
                      placeholder="Название компании"
                      {...register("company")}
                      className={`${getInputErrorStyle("company")} focus:bg-background`}
                    />
                    {errors.company && touchedFields.company && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.company.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Что вас интересует?
                    <span className="text-gray-500 font-normal ml-1">
                      (необязательно)
                    </span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о ваших задачах или вопросах..."
                    className={`min-h-[120px] focus:bg-background resize-none ${getInputErrorStyle(
                      "message"
                    )}`}
                    {...register("message")}
                  />
                  {errors.message && touchedFields.message && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Максимум 500 символов</span>
                    <span>{messageValue?.length || 0}/500</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-4">
                  <Checkbox
                    id="consent"
                    {...register("consent")}
                    checked={consentValue}
                    onCheckedChange={(checked) => {
                      setValue("consent", checked as boolean, {
                        shouldValidate: true,
                        shouldTouch: true,
                      });
                    }}
                    className={`mt-1 ${getCheckboxErrorStyle()}`}
                  />
                  <div className="space-y-1">
                    <Label
                      htmlFor="consent"
                      className="block text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Я согласен на обработку персональных данных и принимаю
                      условия{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        политики конфиденциальности
                      </a>
                    </Label>
                    {errors.consent && touchedFields.consent && (
                      <p className="text-sm text-red-600">
                        {errors.consent.message}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex-col gap-4 pt-6">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Отправка...
                    </>
                  ) : (
                    "Получить демонстрацию"
                  )}
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">
                    Нажимая кнопку, вы даете согласие на обработку персональных
                    данных
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-green-500 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Без спама
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-green-500 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Конфиденциально
                    </div>
                  </div>
                </div>
              </CardFooter>
            </form>

            <div className="border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    1 час
                  </div>
                  <div className="text-sm text-gray-600">
                    Среднее время ответа
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">
                    Поддержка клиентов
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">
                    Конфиденциальность
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
