import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Scale" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-law-blue">
                Законный статус
              </h1>
              <p className="text-xs text-gray-600">Юридические услуги</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Главная
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Услуги
            </a>
            <a
              href="/case-studies"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Кейсы
            </a>
            <a
              href="/blog"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Блог
            </a>
            <a
              href="/contacts"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+78001234567"
              className="flex items-center space-x-2 text-primary font-semibold"
            >
              <Icon name="Phone" size={18} />
              <span>8 (800) 123-45-67</span>
            </a>
            <Button className="bg-law-gold hover:bg-yellow-500 text-black font-semibold">
              Консультация
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-primary py-2">
                Главная
              </a>
              <a
                href="/services"
                className="text-gray-700 hover:text-primary py-2"
              >
                Услуги
              </a>
              <a
                href="/case-studies"
                className="text-gray-700 hover:text-primary py-2"
              >
                Кейсы
              </a>
              <a href="/blog" className="text-gray-700 hover:text-primary py-2">
                Блог
              </a>
              <a
                href="/contacts"
                className="text-gray-700 hover:text-primary py-2"
              >
                Контакты
              </a>
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:+78001234567"
                  className="flex items-center space-x-2 text-primary font-semibold py-2"
                >
                  <Icon name="Phone" size={18} />
                  <span>8 (800) 123-45-67</span>
                </a>
                <Button className="w-full mt-2 bg-law-gold hover:bg-yellow-500 text-black font-semibold">
                  Консультация
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
