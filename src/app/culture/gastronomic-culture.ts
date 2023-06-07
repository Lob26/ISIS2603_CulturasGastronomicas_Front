export class GastronomicCulture {
  id: number;
  name: string;
  description: string;
  url: string;

  constructor(id: number, name: string, description: string, image: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.url = image;
  }
}
