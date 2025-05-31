import tabon from "./assets/pictures/tabon.jpg";
import sweets1 from "./assets/pictures/3.jpg";
import ftorbrnji from "./assets/pictures/ftorbrnji.jpg";
import ftorclasic from "./assets/pictures/ftorclasic.jpg";

export const SHOP_DATA = [
  {
    title: "breakfast",
    items: [
      {
        title: "specialbreakfast",
        name: "فطور سبشل",
        id: 1,
        imageUrl: ftorbrnji,
        items: [
          {
            id: 11,
            name: " فطور برنجي ",
            imageUrl: ftorbrnji,
            price: 155,
            price2: null,
            disprice: 0,
          },
          {
            id: 12,
            name: "فطور كلاسيكي",
            imageUrl: ftorclasic,
            price: 125,
            price2: null,
            disprice: 0,
          },
        ],
      },
      {
        title: "tabon",
        name: "طابون",
        id: 2,
        imageUrl: tabon,
        items: [
          {
            id: 21,
            name: " فطور برنجي ",
            imageUrl: ftorbrnji,
            price: 155,
            price2: null,
            disprice: 0,
          },
          {
            id: 22,
            name: "فطور كلاسيكي",
            imageUrl: ftorclasic,
            price: 125,
            price2: null,
            disprice: 0,
          },
        ],
      }
    ],
  },
  {
    title: "food",
    items: [
      {
        title: "sea",
        name: "اكلات بحرية",
        id: 100,
        imageUrl: ftorclasic,
        items: [
          {
            id: 102,
            name: "pizza 1",
            imageUrl: sweets1,
            des: "",
            price: 40,
            price2: null,
            disprice: 0,
          },
          {
            id: 103,
            name: "pizza 2",
            imageUrl: sweets1,
            des: "",
            price: 40,
            price2: null,
            disprice: 0,
          },
        ],
      },
      {
        id: 101,
        name: "شو",
        imageUrl: ftorclasic,
        price: 125,
        price2: null,
        disprice: 0,
      },
    ],
  },
  
  {
    title: "salads",
    items: [
      {
        id: 112,
        title: "pizza",
        name: "بيتسا",

        imageUrl: ftorbrnji,
        items: [],
      },
    ],
  },

  // {
  //   title: "makeups",
  //   items: [
  //     {
  //       id: 300,
  //       name: "קריפ",
  //       imageUrl: sweets1,
  //       des: "",
  //       price: 40,
  //       price2: null,
  //       disprice: 0,
  //     },
  //   ],
  // },

  // {
  //   title: "haircare",
  //   items: [
  //     {
  //       id: 1000,
  //       name: "קוקה קולה",
  //       imageUrl: drink1,
  //       price: 15,
  //       disprice: 0,
  //     },
  //   ],
  // },

  // {
  //   title: "body-lotions",
  //   items: [
  //     {
  //       id: 800,
  //       name: "برجر",
  //       imageUrl: food1,
  //       price: 80,
  //       disprice: 0,
  //     },
  //   ],
  // },

  // {
  //   title: "lololololo",
  //   items: [
  //     {
  //       id: 1200,
  //       name: "t3b",
  //       imageUrl: food1,
  //       price: 80,
  //       disprice: 0,
  //     },
  //   ],
  // },
];
