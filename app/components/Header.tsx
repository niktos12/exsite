"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  ChevronDown,
  Search,
  User,
  Rocket,
  Zap,
  Shield,
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { name: "Продукт", href: "#product", icon: <Rocket className="w-4 h-4" /> },
    { name: "Решения", href: "#solutions", icon: <Zap className="w-4 h-4" /> },
    { name: "Цены", href: "#pricing", icon: <BarChart className="w-4 h-4" /> },
    {
      name: "Ресурсы",
      href: "#resources",
      icon: <Shield className="w-4 h-4" />,
    },
  ];

  const productFeatures = [
    { name: "Искусственный интеллект", description: "AI-ассистент" },
    { name: "Аналитика", description: "Детальные отчеты" },
    { name: "Интеграции", description: "50+ сервисов" },
    { name: "Безопасность", description: "Уровень банка" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 lg:gap-10">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg" />
                <div className="relative flex h-full w-full items-center justify-center text-white font-bold">
                  C
                </div>
              </div>
              <span className="hidden font-bold text-xl sm:inline-block">
                Company<span className="text-indigo-600">Name</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-1">
                    Продукт
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white">
                  <DropdownMenuLabel>Функции продукта</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {productFeatures.map((feature) => (
                    <DropdownMenuItem key={feature.name} className="gap-2">
                      <div className="h-2 w-2 rounded-full bg-indigo-600" />
                      <div className="flex flex-col">
                        <span>{feature.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {feature.description}
                        </span>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" asChild>
                <Link href="#solutions">Решения</Link>
              </Button>

              <Button variant="ghost" asChild>
                <Link href="#pricing">Цены</Link>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-1">
                    Ресурсы
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-white">
                  <DropdownMenuItem>Документация</DropdownMenuItem>
                  <DropdownMenuItem>Блог</DropdownMenuItem>
                  <DropdownMenuItem>Веб-семинары</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Поддержка</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Search className="h-4 w-4" />
              <span className="sr-only">Поиск</span>
            </Button>

            <Button variant="ghost" className="gap-2">
              <User className="h-4 w-4" />
              Войти
            </Button>

            <Button className="bg-gradient-to-r text-white from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              Начать бесплатно
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[100vw] p-4 sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Меню</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-muted-foreground">
                      Навигация
                    </h3>
                    {navigationItems.map((item) => (
                      <Button
                        key={item.name}
                        variant="ghost"
                        className="w-full justify-start gap-2"
                        asChild
                      >
                        <Link href={item.href}>
                          {item.icon}
                          {item.name}
                        </Link>
                      </Button>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-muted-foreground">
                      Аккаунт
                    </h3>
                    <Button variant="outline" className="w-full gap-2">
                      <User className="h-4 w-4" />
                      Войти
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                      Начать бесплатно
                    </Button>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="text-sm text-muted-foreground space-y-2">
                      <p>Телефон: +7 (999) 999-99-99</p>
                      <p>Email: support@company.ru</p>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700"
                      >
                        Онлайн поддержка 24/7
                      </Badge>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
