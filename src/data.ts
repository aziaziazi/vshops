export const categories: TCategory[] = ['Frais', "Santé", "Boissons", "Épicerie Salé", "Épicerie Sucré", "Surgelés"]
export type TCategory ='Frais'| "Santé"| "Boissons"| "Épicerie Salé"| "Épicerie Sucré" | "Surgelés"

export type TProduct = {
  name: string;
  weight: string;
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
  markerLogo: string;
}

export const supermarkets: TSupermarket[] = [
  {
    name: 'Carrefour Express',
    address: '135 Bd Voltaire, 75011 Paris',
    latitude: 48.86432119245315,
    longitude: 2.3695853582626327,
    fakeNumberOfProducts: 426,
    logo: './shop_logos/logo_carrefour.svg',
    markerLogo: './shop_logos/marker_logo_carrefour.svg',
    products: [
      {
        name: "Tofu fumé",
        weight: "Taïfun - 200g",
        details: "Tofu* 93% (GRAINES DE SOJA* 55%, eau, agents de coagulation : chlorure de magnésium, sulfate de calcium), sauce de soja* (eau, GRAINES DE SOJA*, BLÉ*, sel marin), fumé par friction.",
        image: "./products/tofu-fume-taifun.jpeg",
        category: "Frais"
      },
      {
        name: "Tofu fumé amande et sésame",
        weight: "Taïfun - 200g",
        details: "Tofu* 87% (GRAINES DE SOJA* 55%, eau, agents de coagulation : chlorure de magnésium, sulfate de calcium), sauce de soja* (eau, GRAINES DE SOJA*, BLÉ*, sel marin), AMANDES* 3,4%, SÉSAME* 3,1%, fumé par friction.",
        image: "./products/tofu-fume-amande-sesame-taifun.jpeg",
        category: "Frais"
      },
      {
        name: "Tofu basilic",
        weight: "Taïfun - 200g",
        details: "Tofu* 88% (GRAINES DE SOJA* 55%, eau, agents de coagulation: chlorure de magnésium, sulfate de calcium), huile d'olives extra vergine*, basilic* 4,2%, bouillon de légumes* (sel marin, extrait de levure*, huile de tournesol*, poireaux*, carottes*, CÉLERI*, macis*, noix de muscade*, persil*), ail des ours*, persil*.",
        image: "./products/tofu-basilic-taifun.jpeg",
        category: "Frais"
      },
      {
        name: "Tempeh Bloc",
        weight: "Kédelaï - 200g",
        details: "Bloc de soja fermenté naturellement par un champignon, le rhizopus, riche en protéines végétales et en probiotiques",
        image: "./products/tempeh-kedalai.jpeg",
        category: "Frais"
      },
      {
        name: "Bédouze passion",
        weight: "Les Biofreres - 54g",
        details: "vitamine b12 bio saveur passion",
        image: "./products/vitamine-b12-bedouze-bio-passion-54g-les-biofreres.jpeg",
        category: "Santé"
      },
      {
        name: "Bédouze poire-vanille",
        weight: "Les Biofreres - 54g",
        details: "vitamine b12 bio saveur poire vanille",
        image: "./products/vitamine-b12-bedouze-bio-poire-vanille-54g-les-biofreres.jpeg",
        category: "Santé"
      },
      {
        name: "Bédouze framboise",
        weight: "Les Biofreres - 54g",
        details: "vitamine b12 bio saveur framboise",
        image: "./products/vitamine-b12-bedouze-bio-framboise-54g-les-biofreres.jpeg",
        category: "Santé"
      },
      {
        name: "Veg1 90 orange",
        weight: "The Vegan Society - 90c",
        details: "La VEG1 Orange vous apporte toutes les vitamines quotidiennes nécessaires au bon équilibre de votre corps, notamment la vitamine B12, peu présente dans l'alimentation vegan. Un complément multivitvitaminé au bon goût de cassis, adapté spécifiquement aux végétaliens.",
        image: "./products/multivitamine-b12-orange-90-veg-1.jpeg",
        category: "Santé"
      },
      {
        name: "Veg1 180 orange",
        weight: "The Vegan Society - 180c",
        details: "La VEG1 Orange vous apporte toutes les vitamines quotidiennes nécessaires au bon équilibre de votre corps, notamment la vitamine B12, peu présente dans l'alimentation vegan. Un complément multivitvitaminé au bon goût de cassis, adapté spécifiquement aux végétaliens.",
        image: "./products/multivitamine-b12-orange-180-veg-1.jpeg",
        category: "Santé"
      },
      {
        name: "Veg1 90 cassis",
        weight: "The Vegan Society - 90c",
        details: "La VEG1 Cassis vous apporte toutes les vitamines quotidiennes nécessaires au bon équilibre de votre corps, notamment la vitamine B12, peu présente dans l'alimentation vegan. Un complément multivitvitaminé au bon goût de cassis, adapté spécifiquement aux végétaliens.",
        image: "./products/multivitamine-b12-cassis-90-veg-1.jpeg",
        category: "Santé"
      },
      {
        name: "Veg1 180 cassis",
        weight: "The Vegan Society - 180c",
        details: "La VEG1 Cassis vous apporte toutes les vitamines quotidiennes nécessaires au bon équilibre de votre corps, notamment la vitamine B12, peu présente dans l'alimentation vegan. Un complément multivitvitaminé au bon goût de cassis, adapté spécifiquement aux végétaliens.",
        image: "./products/multivitamine-b12-cassis-180-veg-1.jpeg",
        category: "Santé"
      }
    ],
  },
  {
    name: 'Franprix',
    address: '30 Rue du Faubourg du Temple, 75011 Paris',
    latitude: 48.868560,
    longitude: 2.368065,
    products: [],
    fakeNumberOfProducts: 846,
    logo: './shop_logos/logo_franprix.svg',
    markerLogo: './shop_logos/marker_logo_franprix.svg',
  },
  {
    name: 'Intermarché Express Goncourt',
    address: '77 Rue du Faubourg du Temple, 75010 Paris',
    latitude: 48.87023524122762,
    longitude: 2.371521369808261,
    products: [],
    fakeNumberOfProducts: 309,
    logo: './shop_logos/logo_intermarché.svg',
    markerLogo: './shop_logos/marker_logo_intermarché.svg',

  },
];

export const defaultProduct = {
  name: "Produit",
  weight: "Marque - poids",
  details: "Description, ingredients.",
  image: "./products/default_image.svg",
}