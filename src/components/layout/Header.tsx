import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Главная", href: "#home" },
    { name: "Услуги", href: "#services" },
    { name: "О нас", href: "#about" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Scale" className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">
              Законный статус
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+74951234567"
              className="flex items-center space-x-2 text-primary font-semibold"
            >
              <Icon name="Phone" className="w-4 h-4" />
              <span>+7 (495) 123-45-67</span>
            </a>
            <Button>Консультация</Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Icon name="Menu" className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-6 mt-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg text-gray-600 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 space-y-3">
                  <a
                    href="tel:+74951234567"
                    className="flex items-center space-x-2 text-primary font-semibold"
                  >
                    <Icon name="Phone" className="w-4 h-4" />
                    <span>+7 (495) 123-45-67</span>
                  </a>
                  <Button className="w-full">Консультация</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
