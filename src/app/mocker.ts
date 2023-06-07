import {faker} from "@faker-js/faker";
import {GastronomicCultureDetail} from "./culture/gastronomic-culture-detail";
import {Recipe} from "./recipe/recipe";
import {GastronomicCategory} from "./category/gastronomic-category";
import {CountryDetail} from "./culture/country-detail";
import {RestaurantDetail} from "./restaurant/restaurant-detail";
import {MichelinStarDetail} from "./restaurant/michelin-star-detail";

export function getMockCulture(): GastronomicCultureDetail {
  const mockRecipes: Array<Recipe> = [
    new Recipe(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.paragraphs(10, "\n"),
      undefined
    )];

  const mockCategories: Array<GastronomicCategory> = [
    new GastronomicCategory(
      faker.lorem.word(),
      faker.image.imageUrl(),
      undefined, // The culture will be assigned later
      [])];
  const mockCountries: Array<CountryDetail> = [
    new CountryDetail(
      faker.datatype.number(),
      faker.lorem.word(),
      faker.lorem.word(),
      [],
      [])];


  const mockCulture = new GastronomicCultureDetail(
    faker.datatype.number(),
    faker.lorem.word(),
    faker.lorem.sentence(),
    faker.image.imageUrl(),
    mockRecipes,
    mockCategories,
    mockCountries);

  // Assign the culture to recipes, categories, and countries
  mockRecipes.forEach(recipe => (recipe.culture = mockCulture));
  mockCategories.forEach(category => (category.culture = mockCulture));
  mockCountries.forEach(country => (country.cultures = [mockCulture]));
  return mockCulture;
}

export function getMockRestaurant(): RestaurantDetail {
  const mockRecipes: Array<Recipe> = [
    new Recipe(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.paragraphs(10, "\n"),
      undefined
    )];

  const mockCountry = new CountryDetail(
    faker.datatype.number(),
    faker.lorem.word(),
    faker.lorem.word(),
    [],
    []);
  const mockStars = [
    new MichelinStarDetail(
      faker.datatype.number(),
      faker.date.past(),
      undefined // The restaurant will be assigned later
    )];

  const mockRestaurant = new RestaurantDetail(
    faker.datatype.number(),
    faker.name.fullName(),
    faker.address.city(),
    faker.phone.number(),
    mockCountry,
    mockRecipes,
    mockStars,
    faker.image.imageUrl()
  );

  mockStars[0].restaurant = mockRestaurant;
  return mockRestaurant;
}
