export class Restaurant {
  id: number;
  name: string;
  city: string;
  contact: string;

  constructor(id: number, name: string, city: string, contact: string) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.contact = contact;
  }
}
