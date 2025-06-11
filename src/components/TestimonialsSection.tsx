import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Алексей М.",
      debt: "2.3 млн ₽",
      result: "Полностью списан",
      text: "Думал, что банкротство - это стыдно. Оказалось, что это единственный выход. Юристы работали профессионально, объяснили каждый шаг. Долги списали полностью, квартиру сохранили.",
      rating: 5,
      period: "8 месяцев",
    },
    {
      name: "Мария С.",
      debt: "890 тыс. ₽",
      result: "Снижен на 65%",
      text: "Банки требовали невозможное. После обращения в «Законный статус» смогли договориться о реструктуризации. Теперь плачу в 3 раза меньше, и есть время восстановиться.",
      rating: 5,
      period: "4 месяца",
    },
    {
      name: "ООО «Стройком»",
      debt: "15.7 млн ₽",
      result: "Банкротство без последствий",
      text: "Компания обанкротилась из-за пандемии. Юристы помогли пройти процедуру так, что директор избежал субсидиарной ответственности. Сейчас открыли новый бизнес.",
      rating: 5,
      period: "11 месяцев",
    },
  ];

  return (
    <section className="py-20 bg-law-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-law-blue mb-4">
            Истории успеха наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Реальные результаты решения долговых проблем
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Header with client info */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-montserrat font-semibold text-law-blue">
                      {testimonial.name}
                    </h3>
                    <div className="text-sm text-gray-500">
                      {testimonial.period}
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="text-law-gold fill-current"
                      />
                    ))}
                  </div>
                </div>

                {/* Debt info */}
                <div className="bg-law-gray p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Долг:</span>
                    <span className="font-semibold text-red-600">
                      {testimonial.debt}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Результат:</span>
                    <span className="font-semibold text-green-600">
                      {testimonial.result}
                    </span>
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Success badge */}
                <div className="flex items-center mt-6 pt-6 border-t border-gray-200">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-600 mr-2"
                  />
                  <span className="text-green-600 font-medium">
                    Успешно решено
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="font-montserrat text-2xl font-bold text-law-blue mb-4">
            Станьте следующей историей успеха
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Каждый месяц мы помогаем десяткам клиентов решить долговые проблемы.
            Ваша ситуация не уникальна — мы знаем, как помочь.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+78001234567"
              className="inline-flex items-center justify-center px-6 py-3 bg-law-gold hover:bg-yellow-500 text-black font-semibold rounded-lg transition-colors"
            >
              <Icon name="Phone" size={20} className="mr-2" />8 (800) 123-45-67
            </a>
            <a
              href="https://wa.me/78001234567"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
