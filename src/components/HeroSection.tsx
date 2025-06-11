import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-law-blue via-blue-800 to-blue-900 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="font-montserrat text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Освободитесь от долгов —
              <span className="text-law-gold"> законное решение</span> по
              банкротству
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Помогаем физлицам и бизнесу списать долги, снизить платежи и
              избежать судов. Профессиональная защита ваших интересов с 2014
              года.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-law-gold hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-4 h-auto"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-law-blue text-lg px-8 py-4 h-auto"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать долг
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-blue-700 animate-scale-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-law-gold mb-2">
                500+
              </div>
              <div className="text-blue-200">Решенных дел</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-law-gold mb-2">
                10 лет
              </div>
              <div className="text-blue-200">Опыта работы</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-law-gold mb-2">
                98%
              </div>
              <div className="text-blue-200">Успешных банкротств</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
