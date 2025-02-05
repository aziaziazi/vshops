export const categories: TCategory[] = ['Frais', "Santé", "Boissons", "Salé", "Sucré"]
export type TCategory =    'Frais'| "Santé"| "Boissons"| "Salé"| "Sucré";

export type TProduct = {
  name: string;
  weight: string;
  price: string;
  pricePerKg: string;
  details: string;
  image?: string;
  category?: TCategory;
}

export type TSupermarket = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  products: TProduct[];
  fakeNumberOfProducts: number;
  logo: string;
}

export const supermarkets: TSupermarket[] = [
  {
    name: 'Carrefour',
    address: '135 Bd Voltaire, 75011 Paris',
    latitude: 48.86432119245315,
    longitude: 2.3695853582626327,
    fakeNumberOfProducts: 426,
    logo: './logo-carrefour',
    products: [
      {
        name: "Tofu fumé",
        weight: "200g",
        price: "3,13 €",
        pricePerKg: "15,65 €/kg",
        details: "Tofu* 93% (GRAINES DE SOJA* 55%, eau, agents de coagulation : chlorure de magnésium, sulfate de calcium), sauce de soja* (eau, GRAINES DE SOJA*, BLÉ*, sel marin), fumé par friction.",
        image: "./tofu-fume-taifun.jpeg",
        category: "Frais"
      },
      {
        name: "Tofu fumé amande et sésame",
        weight: "200g",
        price: "3,53 €",
        pricePerKg: "22,25 €/kg",
        details: "Tofu* 87% (GRAINES DE SOJA* 55%, eau, agents de coagulation : chlorure de magnésium, sulfate de calcium), sauce de soja* (eau, GRAINES DE SOJA*, BLÉ*, sel marin), AMANDES* 3,4%, SÉSAME* 3,1%, fumé par friction.",
        image: "./tofu-fume-amande-sesame-taifun.jpeg",
        category: "Frais"
      },
      {
        name: "Tofu basilic",
        weight: "200g",
        price: "3,20 €",
        pricePerKg: "16 €/kg",
        details: "Tofu* 88% (GRAINES DE SOJA* 55%, eau, agents de coagulation: chlorure de magnésium, sulfate de calcium), huile d'olives extra vergine*, basilic* 4,2%, bouillon de légumes* (sel marin, extrait de levure*, huile de tournesol*, poireaux*, carottes*, CÉLERI*, macis*, noix de muscade*, persil*), ail des ours*, persil*.",
        image: "./tofu-basilic-taifun.jpeg",
        category: "Frais"
      },
      {
        name: "Tempeh Kédelaï",
        weight: "200g",
        price: "4,50 €",
        pricePerKg: "22,50 €/kg",
        details: "Bloc de soja fermenté naturellement par un champignon, le rhizopus, riche en protéines végétales et en probiotiques",
        image: "./tempeh-kedalai.jpeg",
        category: "Frais"
      },
      {
        name: "Veg1 90 orange",
        weight: "90 comprimés",
        price: "9,90 €",
        pricePerKg: "",
        details: "La VEG1 Orange vous apporte toutes les vitamines quotidiennes nécessaires au bon équilibre de votre corps, notamment la vitamine B12, peu présente dans l'alimentation vegan. Un complément multivitvitaminé au bon goût de cassis, adapté spécifiquement aux végétaliens.",
        image: "./multivitamine-b12-orange-90-veg-1.jpeg",
        category: "Santé"
      },
      {
        name: "Veg1 180 orange",
        weight: "180 comprimés",
        price: "17,90 €",
        pricePerKg: "",
        details: "La VEG1 Orange vous apporte toutes les vitamines quotidiennes nécessaires au bon équilibre de votre corps, notamment la vitamine B12, peu présente dans l'alimentation vegan. Un complément multivitvitaminé au bon goût de cassis, adapté spécifiquement aux végétaliens.",
        image: "./multivitamine-b12-orange-180-veg-1.jpeg",
        category: "Santé"
      },
      {
        name: "Veg1 90 cassis",
        weight: "90 comprimés",
        price: "9,90 €",
        pricePerKg: "",
        details: "La VEG1 Cassis vous apporte toutes les vitamines quotidiennes nécessaires au bon équilibre de votre corps, notamment la vitamine B12, peu présente dans l'alimentation vegan. Un complément multivitvitaminé au bon goût de cassis, adapté spécifiquement aux végétaliens.",
        image: "./multivitamine-b12-cassis-90-veg-1.jpeg",
        category: "Santé"
      },
      {
        name: "Veg1 180 cassis",
        weight: "180 comprimés",
        price: "17,90 €",
        pricePerKg: "",
        details: "La VEG1 Cassis vous apporte toutes les vitamines quotidiennes nécessaires au bon équilibre de votre corps, notamment la vitamine B12, peu présente dans l'alimentation vegan. Un complément multivitvitaminé au bon goût de cassis, adapté spécifiquement aux végétaliens.",
        image: "./multivitamine-b12-cassis-180-veg-1.jpeg",
        category: "Santé"
      },
      {
        name: "Bédouze framboise",
        weight: "120 comprimés",
        price: "25,34€",
        pricePerKg: "",
        details: "vitamine b12 bio les biofreres",
        image: "./vitamine-b12-bedouze-bio-framboise-54g-les-biofreres.jpeg",
        category: "Santé"
      },
      {
        name: "Bédouze passion",
        weight: "120 comprimés",
        price: "25,34€",
        pricePerKg: "",
        details: "vitamine b12 bio les biofreres",
        image: "./vitamine-b12-bedouze-bio-passion-54g-les-biofreres.jpeg",
        category: "Santé"
      },
      {
        name: "Bédouze poire-vanille",
        weight: "54g",
        price: "25,34€",
        pricePerKg: "120 comprimés",
        details: "vitamine b12 bio les biofreres",
        image: "./vitamine-b12-bedouze-bio-poire-vanille-54g-les-biofreres.jpeg",
        category: "Santé"
      },
    ],
  },
  {
    name: 'Franprix',
    address: '30 Rue du Faubourg du Temple, 75011 Paris',
    latitude: 48.868560,
    longitude: 2.368065,
    products: [],
    fakeNumberOfProducts: 846,
    logo: './logo-franprix',
  },
  {
    name: 'Intermarché Express Goncourt',
    address: '77 Rue du Faubourg du Temple, 75010 Paris',
    latitude: 48.87023524122762,
    longitude: 2.371521369808261,
    products: [],
    fakeNumberOfProducts: 309,
    logo: './logo-intermarché'
  },
];

export const defaultProduct = {
  name: "PRODUCT NAME",
  weight: "_ g",
  price: "_ €",
  pricePerKg: "_ €/kg",
  details: "DESCRIPTION, INDGREDIENTS...",
}