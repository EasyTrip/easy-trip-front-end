export class Expense {
  id: string;
  name: string;
  description: string;
  price: string;
  priceCurrency: string;

  constructor(input?: any) {
    if (input) {
      this.id = input.id;
      this.name = input.name;
      this.description = input.description;
      this.price = input.price;
      this.priceCurrency = input.priceCurrency;
    }
  }
}
