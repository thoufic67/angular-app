export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: any[];

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.ingredients = new Array();
    this.imagePath = imagePath;
  }
}
