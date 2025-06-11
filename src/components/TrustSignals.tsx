import Icon from "@/components/ui/icon";

const TrustSignals = () => {
  const testimonials = [
    {
      name: "Анна К.",
      debt: "2,1 млн ₽",
      result: "Списано 100%",
      text: "Спасибо огромное! Избавилась от кредитов на 2 миллиона. Коллекторы больше не звонят.",
    },
    {
      name: "Сергей М.",
      debt: "850 тыс ₽",
      result: "Списано 95%",
      text: "Процедура прошла быстро. Юристы объяснили каждый шаг, всегда были на связи.",
    },
    {
      name: "ООО «Строй-Плюс»",
      debt: "12 млн ₽",
      result: "Сохранен бизнес",
      text: "Помогли избежать субсидиарной ответственности и перезапустить компанию.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-law-blue mb-4">
            Результаты наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Реальные истории людей, которые освободились от долгов с нашей
            помощью
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-law-gray p-8 rounded-lg border-l-4 border-law-gold animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <Icon name="User" size={20} className="text-law-blue mr-3" />
                <span className="font-semibold text-law-blue">
                  {testimonial.name}
                </span>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-600">Сумма долга:</div>
                <div className="text-xl font-bold text-red-600">
                  {testimonial.debt}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-600">Результат:</div>
                <div className="text-xl font-bold text-green-600">
                  {testimonial.result}
                </div>
              </div>

              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        {/* Credentials */}
        <div className="border-t border-gray-200 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Icon
                name="Award"
                size={48}
                className="text-law-gold mx-auto mb-4"
              />
              <h3 className="font-semibold text-law-blue mb-2">Лицензия</h3>
              <p className="text-sm text-gray-600">Адвокатская палата Москвы</p>
            </div>

            <div>
              <Icon
                name="Users"
                size={48}
                className="text-law-gold mx-auto mb-4"
              />
              <h3 className="font-semibold text-law-blue mb-2">Опыт</h3>
              <p className="text-sm text-gray-600">
                10+ лет в банкротном праве
              </p>
            </div>

            <div>
              <Icon
                name="FileCheck"
                size={48}
                className="text-law-gold mx-auto mb-4"
              />
              <h3 className="font-semibold text-law-blue mb-2">Гарантии</h3>
              <p className="text-sm text-gray-600">
                Договор с фиксированной стоимостью
              </p>
            </div>

            <div>
              <Icon
                name="Clock"
                size={48}
                className="text-law-gold mx-auto mb-4"
              />
              <h3 className="font-semibold text-law-blue mb-2">Поддержка</h3>
              <p className="text-sm text-gray-600">24/7 консультации</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
