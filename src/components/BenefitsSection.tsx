import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Shield",
      title: "Без предоплаты",
      description: "Оплата только после получения положительного результата",
    },
    {
      icon: "Scale",
      title: "Представительство в суде",
      description:
        "Полное сопровождение процедуры от подачи до списания долгов",
    },
    {
      icon: "PhoneOff",
      title: "Остановим звонки коллекторов",
      description: "Прекратим давление кредиторов с момента подачи заявления",
    },
    {
      icon: "Home",
      title: "Сохраним имущество",
      description: "Защитим единственное жилье и необходимые для жизни вещи",
    },
    {
      icon: "CheckCircle",
      title: "Лицензированные юристы",
      description:
        "Команда опытных специалистов с лицензией на юридическую деятельность",
    },
    {
      icon: "Clock",
      title: "Быстрое решение",
      description:
        "Процедура банкротства занимает 6-12 месяцев вместо лет судебных тяжб",
    },
  ];

  return (
    <section className="py-20 bg-law-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-law-blue mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы обеспечиваем профессиональную защиту ваших интересов на каждом
            этапе процедуры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-law-blue rounded-lg flex items-center justify-center mb-6">
                <Icon
                  name={benefit.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>

              <h3 className="font-montserrat text-xl font-semibold text-law-blue mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
