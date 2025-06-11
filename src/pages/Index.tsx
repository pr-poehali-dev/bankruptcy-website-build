import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DebtCalculator from "@/components/DebtCalculator";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />

      {/* Debt Calculator Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-law-blue mb-4">
              Узнайте оптимальное решение для ваших долгов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Получите персональную рекомендацию за 30 секунд
            </p>
          </div>
          <div className="flex justify-center">
            <DebtCalculator />
          </div>
        </div>
      </section>

      <BenefitsSection />
      <ServicesSection />
      <TestimonialsSection />

      {/* Final CTA Section */}
      <section className="py-20 bg-law-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-6">
            Не ждите — действуйте сейчас
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Каждый день промедления увеличивает долг. Получите бесплатную
            консультацию и узнайте, как решить проблему уже сегодня.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+78001234567"
              className="inline-flex items-center justify-center px-8 py-4 bg-law-gold hover:bg-yellow-500 text-black font-semibold text-lg rounded-lg transition-colors"
            >
              Позвонить сейчас: 8 (800) 123-45-67
            </a>
            <a
              href="https://wa.me/78001234567"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
