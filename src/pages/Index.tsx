import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      title: "Изготовление автоключей",
      description: "Профессиональное изготовление ключей для всех марок автомобилей",
      icon: "Car",
      price: "от 1500₽",
      features: ["Любые марки авто", "Быстрое изготовление", "Гарантия качества"]
    },
    {
      title: "Программирование чипов",
      description: "Программирование и прошивка автомобильных иммобилайзеров",
      icon: "Cpu",
      price: "от 2500₽",
      features: ["Все типы чипов", "Диагностика", "Настройка систем"]
    },
    {
      title: "Аварийное вскрытие",
      description: "Экстренное вскрытие замков без повреждений 24/7",
      icon: "Key",
      price: "от 1000₽",
      features: ["Без повреждений", "Круглосуточно", "Быстрый выезд"]
    },
    {
      title: "Ремонт замков",
      description: "Профессиональный ремонт всех типов замков",
      icon: "Settings",
      price: "от 800₽",
      features: ["Диагностика", "Замена деталей", "Профилактика"]
    }
  ];

  const advantages = [
    {
      icon: "Clock",
      title: "Быстро",
      description: "Изготовление ключей за 15-30 минут"
    },
    {
      icon: "Shield",
      title: "Надёжно",
      description: "Гарантия на все виды работ"
    },
    {
      icon: "Users",
      title: "Опыт",
      description: "Более 10 лет на рынке"
    },
    {
      icon: "MapPin",
      title: "Выезд",
      description: "Работаем по всему городу"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="KeyRound" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">КлючТерДь</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Профессиональные услуги
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Ключи и автосервис
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Изготовление автоключей, программирование чипов и professional locksmith services. 
                Быстро, качественно, с гарантией.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Icon name="KeyRound" size={20} className="mr-2" />
                  Заказать ключ
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (999) 123-45-67
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/f67f969b-4940-498e-b8f6-50625ef11d5d.jpg" 
                alt="Современные автоключи с чипами" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Наши услуги
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Полный спектр услуг</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От изготовления ключей до программирования сложных автомобильных систем
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-slide-up border-0 shadow-md">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-center">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Duplicates Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-scale-in">
              <img 
                src="/img/a6542f31-4d38-47ab-9c36-a27f0fb63b47.jpg" 
                alt="Коллекция различных ключей и брелоков" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Дубликаты
              </Badge>
              <h2 className="text-4xl font-bold mb-6">Дубликаты любых ключей и брелоков</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Изготавливаем точные копии всех типов ключей и брелоков. От простых квартирных 
                ключей до сложных автомобильных систем доступа.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Home" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Квартирные ключи</h3>
                    <p className="text-muted-foreground text-sm">Любые домофонные и квартирные замки</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Car" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Автомобильные</h3>
                    <p className="text-muted-foreground text-sm">Ключи и брелоки сигнализации</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Building" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Офисные</h3>
                    <p className="text-muted-foreground text-sm">Ключи доступа в офисы и здания</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CreditCard" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Карты доступа</h3>
                    <p className="text-muted-foreground text-sm">Электронные пропуски и карты</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Copy" size={20} className="mr-2" />
                  Заказать дубликат
                </Button>
                <div className="flex items-center text-muted-foreground">
                  <Icon name="Clock" size={18} className="mr-2" />
                  <span>Изготовление за 10-15 минут</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                О компании
              </Badge>
              <h2 className="text-4xl font-bold mb-6">Почему выбирают нас</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Мы специализируемся на изготовлении автомобильных ключей и программировании 
                иммобилайзеров. Наша команда имеет более 10 лет опыта работы с современными 
                автомобильными системами безопасности.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={advantage.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{advantage.title}</h3>
                      <p className="text-muted-foreground text-sm">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src="/img/7edbdc83-a874-4a01-8884-2f5069e162db.jpg" 
                alt="Профессиональное оборудование для изготовления ключей" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Популярные услуги
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Востребованные решения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Самые частые запросы наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-orange-400 rounded-full flex items-center justify-center">
                  <Icon name="Car" size={36} className="text-white" />
                </div>
                <CardTitle>BMW/Mercedes</CardTitle>
                <CardDescription>Ключи премиум сегмента</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">от 3500₽</div>
                <p className="text-sm text-muted-foreground">Включая программирование</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-primary/20">
              <CardHeader>
                <Badge className="mb-2 bg-primary text-white">Хит</Badge>
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-secondary to-blue-400 rounded-full flex items-center justify-center">
                  <Icon name="KeyRound" size={36} className="text-white" />
                </div>
                <CardTitle>Toyota/Nissan</CardTitle>
                <CardDescription>Популярные японские марки</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">от 2000₽</div>
                <p className="text-sm text-muted-foreground">Быстрое изготовление</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={36} className="text-white" />
                </div>
                <CardTitle>Экспресс-услуги</CardTitle>
                <CardDescription>Срочное изготовление</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">+50%</div>
                <p className="text-sm text-muted-foreground">К стоимости услуги</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Контакты
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовы помочь вам с любыми вопросами по изготовлению ключей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-all">
              <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all">
              <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">ул. Мастерская, 15</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all">
              <Icon name="Clock" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Режим работы</h3>
              <p className="text-muted-foreground">24/7</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all">
              <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@keyterd.ru</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="KeyRound" size={32} className="text-primary" />
              <span className="text-2xl font-bold">КлючТерДь</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2024 КлючТерДь. Все права защищены.</p>
              <p className="text-gray-400">Профессиональные услуги слесаря-аварийщика</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}