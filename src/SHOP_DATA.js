import skincare1 from "./assets/pictures/1.jpg";



import makeup300 from "./assets/pictures/300.jpg";



import perfume600 from "./assets/pictures/600.jpg";


import bodycare800 from "./assets/pictures/800.jpg";


import haircare1000 from "./assets/pictures/1000.jpg";


import lenses1300 from "./assets/pictures/1300.jpg";



import gifts1600 from "./assets/pictures/1600.jpg";


export const SHOP_DATA = [
  {
    // skin care
    title: "skincare",
    items: [
      {
        id: 1,
        name: "𝐸𝑀𝐵𝑅𝑌𝑂𝐿𝐼𝑆𝑆𝐸, 𝐿𝐴𝐼𝑇 𝐶𝑅𝐸𝑀𝐸 𝐶𝑂𝑁𝐶𝐸𝑁𝑇𝑅𝐸",
        imageUrl: skincare1,
        price: 120,
        price2: null,
        disprice: 0,
      },
    ],
  },



  {
    title: "makeups",
    items: [
      {
        id: 300,
        name: "Charlotte Tilbury Beautiful Skin Radiant Concealer",
        imageUrl: makeup300,
        des: "",
        price: 140,
        price2: null,
        disprice: 0,
      },
    
    ],
  },



  {
    title: "haircare",
    items: [
      {
        id: 1000,
        name: "Hair wax stick",
        imageUrl: haircare1000,
        price: 40,
        disprice: 0,
      },
    ],
  },



  {
    /////////
    title: "perfumes",
    items: [
      {
        id: 600,
        name: "Musk collection tropical fruits by gulf orchid",
        imageUrl: perfume600,
        price: 100,
        disprice: 0,
      },
    ],
  },



  {
    title: "body-lotions",
    items: [
      {
        id: 800,
        name: "SOL DE JANEIRO Brazilian Crush Cheirosa '62 Sol de Janeiro 90ml",
        imageUrl: bodycare800,
        price: 160,
        price2: 220,
        disprice: 0,
      },
    ],
  },



  {
    // lenses care
    title: "lenses",
    items: [
      {
        id: 1300,
        name: "lime green lenses",
        imageUrl: lenses1300,
        price: 150,
        price2: 0,
        disprice: 0,
      },
    ],
  },



  {
    // gifts care
    title: "gifts",
    items: [
      {
        id: 1600,
        name: "Gift 1",
        imageUrl: gifts1600,
        price: null,
        price2: null,
        disprice: 0,
      },
  


    
    ]
  }
];
