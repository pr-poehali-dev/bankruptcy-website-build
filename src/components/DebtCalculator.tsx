import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const DebtCalculator = () => {
  const [debtAmount, setDebtAmount] = useState("");
  const [debtType, setDebtType] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculateSolution = () => {
    const amount = parseInt(debtAmount.replace(/\s/g, ""));

    if (!amount || !debtType) return;

    let solution = "";
    let description = "";

    if (amount < 500000) {
      solution = "Реструктуризация долга";
      description =
        "Рекомендуем переговоры с кредиторами для снижения платежей на 50-70%";
    } else if (amount < 1500000) {
      solution = "Банкротство физического лица";
      description =
        "Списание долгов через процедуру банкротства с сохранением имущества";
    } else {
      solution = "Комплексное банкротство";
      description =
        "Индивидуальная стратегия с привлечением арбитражного управляющего";
    }

    setResult(`${solution}: ${description}`);
  };

  const formatNumber = (value: string) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg">
      <CardHeader className="text-center bg-primary text-white rounded-t-lg">
        <CardTitle className="flex items-center justify-center space-x-2">
          <Icon name="Calculator" size={24} />
          <span>Калькулятор долгов</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Общая сумма долга (₽)
          </label>
          <Input
            type="text"
            placeholder="Например: 1 500 000"
            value={formatNumber(debtAmount)}
            onChange={(e) => setDebtAmount(e.target.value.replace(/\s/g, ""))}
            className="text-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Тип долга
          </label>
          <Select value={debtType} onValueChange={setDebtType}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите тип долга" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="credit">Кредиты и займы</SelectItem>
              <SelectItem value="taxes">Налоги и штрафы</SelectItem>
              <SelectItem value="business">Бизнес долги</SelectItem>
              <SelectItem value="utilities">ЖКХ и коммунальные</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={calculateSolution}
          className="w-full bg-law-gold hover:bg-yellow-500 text-black font-semibold"
          disabled={!debtAmount || !debtType}
        >
          Получить рекомендацию
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-law-gray rounded-lg border-l-4 border-primary animate-fade-in">
            <div className="flex items-start space-x-2">
              <Icon
                name="CheckCircle"
                size={20}
                className="text-green-600 mt-1"
              />
              <div>
                <p className="font-semibold text-primary">
                  Рекомендуемое решение:
                </p>
                <p className="text-gray-700 text-sm mt-1">{result}</p>
              </div>
            </div>
            <Button className="w-full mt-3 bg-primary hover:bg-blue-700">
              Записаться на консультацию
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DebtCalculator;
