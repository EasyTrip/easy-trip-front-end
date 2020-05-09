export class Trip {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  finishDate: Date;

  constructor(input?: any) {
    if (input) {
      this.id = input.id;
      this.name = input.name;
      this.description = input.description;
      if (input.startDate) {
        this.startDate = new Date(input.startDate);
      }
      if (input.finishDate) {
        this.finishDate = new Date(input.finishDate);
      }
    }
  }
}
