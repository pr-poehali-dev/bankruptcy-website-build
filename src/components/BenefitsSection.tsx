import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Shield",
      title: "Без предоплаты",
      description: "Оплата только за результат. Никаких скрытых платежей.",
    },
    {
      icon: "Gavel",
      title: "Представительство в суде",
      description: "Полное ведение дела от подачи до получения решения.",
    },
    {
      icon: "PhoneOff",
      title: "Остановим коллекторов",
      description: "Прекращение звонков и визитов в день подачи заявления.",
    },
    {
      icon: "FileCheck",
      title: "Законное списание",
      description: "100% легальные процедуры в соответствии с законом РФ.",
    },
    {
      icon: "Home",
      title: "Сохраним имущество",
      description: "Защитим единственное жилье и необходимые вещи.",
    },
    {
      icon: "Clock",
      title: "Быстрый результат",
      description: "Процедура банкротства от 6 до 12 месяцев.",
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
            Профессиональная защита ваших интересов с гарантией результата
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-law-blue rounded-lg flex items-center justify-center mb-6">
                <Icon name={benefit.icon} size={28} className="text-white" />
              </div>
              <h3 className="font-montserrat text-xl font-semibold text-law-blue mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-law-gold mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">Решенных дел</div>
            </div>
            <div
              className="animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-4xl md:text-5xl font-bold text-law-gold mb-2">
                10
              </div>
              <div className="text-gray-600 font-medium">Лет опыта</div>
            </div>
            <div
              className="animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-4xl md:text-5xl font-bold text-law-gold mb-2">
                98%
              </div>
              <div className="text-gray-600 font-medium">Успешных дел</div>
            </div>
            <div
              className="animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-4xl md:text-5xl font-bold text-law-gold mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
