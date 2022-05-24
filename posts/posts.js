/*
  Meta data for food posts contains the following:
  - slug
  - cover image
  - title
  - date 
  - rate
  - price:
    - average: average price of 1 person, to show on the post. contains "< $200", "$200 - $500", "$500 - $1000", "$1000 - $2000", "> $2000".
    - tier: the bottom price of average, the index of sort function.
  - categories: the index of filter function.
  - menu
*/
export const foodPosts = {
  "ji-an-sushi": {
    slug: "ji-an-sushi",
    cover_image: "/img/food/ji-an-sushi/cover-image.jpg",
    title: "濟安鮨 日本料理",
    date: "2022-03-01",
    rate: "8.8",
    price: {
      average: "> $2000",
      tier: 2000,
    },
    categories: ["日式料理"],
    menu: ["套餐"],
  },
  kabin: {
    slug: "kabin",
    cover_image: "/img/food/kabin/cover-image.jpg",
    title: "Kabin",
    date: "2022-03-13",
    rate: "8.3",
    price: {
      average: "$500 - $1000",
      tier: 500,
    },
    categories: ["日式料理", "Fusion"],
    menu: ["單點"],
  },
  "jen-yuan": {
    slug: "jen-yuan",
    cover_image: "/img/food/jen-yuan/cover-image.jpg",
    title: "珍園燒臘便當",
    date: "2022-03-08",
    rate: "8.0",
    price: {
      average: "< $200",
      tier: 0,
    },
    categories: ["台式料理"],
    menu: ["單點"],
  },
  "da-wan": {
    slug: "da-wan",
    cover_image: "/img/food/da-wan/cover-image.jpg",
    title: "大腕燒肉",
    date: "2022-03-17",
    rate: "6.6",
    price: {
      average: "> $2000",
      tier: 2000,
    },
    categories: ["日式料理"],
    menu: ["套餐", "單點"],
  },
  "vege-teji-classic": {
    slug: "vege-teji-classic",
    cover_image: "/img/food/vege-teji-classic/cover-image.jpg",
    title: "熟 菜豚屋",
    date: "2022-03-16",
    rate: "8.2",
    price: {
      average: "$1000 - $2000",
      tier: 1000,
    },
    categories: ["日式料理", "韓式料理", "Fusion"],
    menu: ["套餐"],
  },
  "huh-pot": {
    slug: "huh-pot",
    cover_image: "/img/food/huh-pot/cover-image.jpg",
    title: "蛤？！Huh Pot",
    date: "2022-03-12",
    rate: "7.4",
    price: {
      average: "$1000 - $2000",
      tier: 1000,
    },
    categories: ["港式料理"],
    menu: ["單點"],
  },
  "le-plein": {
    slug: "le-plein",
    cover_image: "/img/food/le-plein/cover-image.jpg",
    title: "滿堂Le Plein",
    date: "2022-02-26",
    rate: "8.5",
    price: {
      average: "> $2000",
      tier: 2000,
    },
    categories: ["台式料理", "法式料理", "Fusion"],
    menu: ["套餐"],
  },
  "enowine-food-and-wine": {
    slug: "enowine-food-and-wine",
    cover_image: "/img/food/enowine-food-and-wine/cover-image.jpg",
    title: "Enowine Food and Wine",
    date: "2022-04-08",
    rate: "8.6",
    price: {
      average: "> $2000",
      tier: 2000,
    },
    categories: ["法式料理", "義式料理"],
    menu: ["單點"],
  },
  "nan-chuan-noodle": {
    slug: "nan-chuan-noodle",
    cover_image: "/img/food/nan-chuan-noodle/cover-image.jpg",
    title: "南川麵館",
    date: "2022-02-23",
    rate: "8.1",
    price: {
      average: "$200 - $500",
      tier: 200,
    },
    categories: ["台式料理"],
    menu: ["單點"],
  },
  "rolling-thai": {
    slug: "rolling-thai",
    cover_image: "/img/food/rolling-thai/cover-image.jpg",
    title: "泰滾Rolling Thai 泰式火鍋",
    date: "2022-03-02",
    rate: "7.0",
    price: {
      average: "$500 - $1000",
      tier: 500,
    },
    categories: ["泰式料理"],
    menu: ["單點"],
  },
  "san-chiao-01": {
    slug: "san-chiao-01",
    cover_image: "/img/food/san-chiao-01/cover-image.jpg",
    title: "三樵炭火燒肉（1訪）",
    date: "2021-11-24",
    rate: "8.4",
    price: {
      average: "> $2000",
      tier: 2000,
    },
    categories: ["日式料理"],
    menu: ["套餐", "單點"],
  },
  "the-tavernist": {
    slug: "the-tavernist",
    cover_image: "/img/food/the-tavernist/cover-image.jpg",
    title: "The Tavernist",
    date: "2022-05-12",
    rate: "8.5",
    price: {
      average: "> $2000",
      tier: 2000,
    },
    categories: ["法式料理", "fusion"],
    menu: ["套餐"],
  }
};

export const travelPosts = {
  "kansai-1": {
    slug: "kansai-1",
    cover_image: "/img/travel/kansai-1/cover-image.jpg",
    title: "京都市內散策",
    travel_date: "2019-10",
  },
  "kansai-2": {
    slug: "kansai-2",
    cover_image: "/img/travel/kansai-2/cover-image.jpg",
    title: "京都近郊一日遊：琵琶湖valley",
    travel_date: "2019-10",
  },
  "kansai-3": {
    slug: "kansai-3",
    cover_image: "/img/travel/kansai-3/cover-image.jpg",
    title: "京都近郊一日遊：保津川遊船",
    travel_date: "2019-10",
  },
  "kansai-4": {
    slug: "kansai-4",
    cover_image: "/img/travel/kansai-4/cover-image.jpg",
    title: "京都美食巡禮：親子丼名店",
    travel_date: "2019-10",
  },
};
