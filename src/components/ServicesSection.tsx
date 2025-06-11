import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "User",
      title: "Банкротство физических лиц",
      description:
        "Полное списание долгов для граждан с сохранением необходимого имущества.",
      features: [
        "Остановка судов и исполнения",
        "Защита единственного жилья",
        "Сохранение необходимых вещей",
        "Процедура 6-12 месяцев",
      ],
      price: "от 30 000 ₽",
    },
    {
      icon: "Building",
      title: "Банкротство юридических лиц",
      description: "Закрытие бизнеса с минимальными рисками для руководителей.",
      features: [
        "Избежание субсидиарной ответственности",
        "Защита личного имущества",
        "Ликвидация долгов компании",
        "Возможность нового бизнеса",
      ],
      price: "от 50 000 ₽",
    },
    {
      icon: "RefreshCw",
      title: "Реструктуризация долгов",
      description: "Снижение платежей и изменение условий кредитования.",
      features: [
        "Снижение платежей до 70%",
        "Отсрочка по основному долгу",
        "Остановка начисления пени",
        "Сохранение кредитной истории",
      ],
      price: "от 20 000 ₽",
    },
    {
      icon: "TrendingDown",
      title: "Рефинансирование кредитов",
      description: "Объединение кредитов с лучшими условиями.",
      features: [
        "Снижение процентной ставки",
        "Один платеж вместо нескольких",
        "Увеличение срока кредита",
        "Улучшение условий",
      ],
      price: "от 15 000 ₽",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-law-blue mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексное решение долговых проблем для физических и юридических
            лиц
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-law-gray p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 bg-law-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={service.icon} size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-montserrat text-xl font-semibold text-law-blue mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="text-2xl font-bold text-law-gold">
                  {service.price}
                </div>
                <Button className="bg-law-blue hover:bg-blue-800 text-white">
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-law-gold hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-4 h-auto"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Получить консультацию по всем услугам
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
