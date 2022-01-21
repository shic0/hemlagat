const products = [
  {
    id: 1,
    api_id: "price_1KIupQKM0qNX2m1Ef1CDKERY",
    category: "pasta",
    name: "Truffle Pasta",
    description: "Tryffle pasta med svenska svampar och gräddsås",
    price: 75,
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80'
  },
  {
    id: 2,
    api_id: "price_1KIv32KM0qNX2m1EQuq3042O",
    category: "pasta",
    name: "Spahetti Bolonese",
    description: "Spagetti Bolonese på svenskt vis",
    price: 70,
    image:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
  },
  {
    id: 3,
    api_id: "price_1KIvJeKM0qNX2m1Eb8WsAG9K",
    category: "Förrätter",
    name: "Toast Skagen",
    description: "Svensk klassiker Toast Skagen, handskalade svenska räkor med löjrom, vår egna hemlagade mayonäs, serveras med citron på nybakat surdegsbröd",
    price: 70,
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
  },
  {
    id: 4,
    api_id: "price_1KIvR7KM0qNX2m1Ev2doUpUk",
    category: "Förrätter",
    name: "Vitlökspizza",
    description: "Vitlök, ost, basilika och oregano toppad med olivolja och parmesan",
    price: 50,
    image:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
  },
  {
    id: 5,
    api_id: "price_1KIvfaKM0qNX2m1EscfpVfg2",
    category: "kött",
    name: "Stekt renskalv",
    description: "Stekt renskalv serveras med hemlagad potatismos, kantarellsås och enbar",
    price: 80,
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
  },
  {
    id: 6,
    api_id: "price_1KIvqLKM0qNX2m1ENOdYIcsM",
    category: "kött",
    name: "Köttbullar",
    description: "Svenska köttbullar serveras med potatismos, pressgurka, rårörda lingon från svenska skogar och brunsås",
    price: 75,
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
  },
  {
    id: 7,
    api_id: "price_1KIwBrKM0qNX2m1ECIWFORLt",
    category: "kött",
    name: "Pyttipanna med köttfärs",
    description: "Svensk klassiker. Gjord på nypotatis och högrevsköttfärs, serveras med stekt ägg och rödbetor",
    price: 65,
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
  },
  {
    id: 8,
    api_id: "price_1KIwQfKM0qNX2m1EO7uFDkdH",
    category: "fisk",
    name: "Bakpotatis fylld med tonfiskröra",
    description: "Svensk bakpotatis med krämig tonfiskröra och persilja, serveras med sallad",
    price: 65,
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
  },
  {
    id: 9,
    api_id: "price_1KIwk8KM0qNX2m1EEJiTxwT5",
    category: "fisk",
    name: "Korvstroganoff",
    description: "Korvstroganoff med ris",
    price: 65,
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
  },
  {
    id: 10,
    api_id: "price_1KIxfBKM0qNX2m1E3na3UjIO",
    category: "fisk",
    name: "Torsk",
    description: "Torsk från västkusten med potatismos ärtor och dill",
    price: 70,
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
  },
  {
    id: 11,
    api_id: "price_1KIxkIKM0qNX2m1EKECgEKMe",
    category: "kött",
    name: "Pannbiffar",
    description: "Pannbiffar med nypotatis lingon och sockerärtor",
    price: 70,
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
  },
  {
    id: 12,
    api_id: "price_1KIyJAKM0qNX2m1EFM28a09H",
    category: "kött",
    name: "Entrecote",
    description: "Svensk entrecote med hemmalagade pommes frites, serveras med rödvinssky på sidan",
    price: 95,
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
  },
  {
    id: 13,
    api_id: "price_1KIyWdKM0qNX2m1ER4xEgFl4",
    category: "pasta",
    name: "Spagetti Marinara",
    description: "Svenska pilgrimsmusslor med chili och vitlök i vitvinssås",
    price: 85,
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
  },
  {
    id: 14,
    api_id: "price_1KIydDKM0qNX2m1E46CVZUS0",
    category: "soppa",
    name: "Pumpasoppa",
    description: "Krämig, smakrik och söt pumpasoppa, toppas med gräddfil, örter och chili",
    price: 55,
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
  },
  {
    id: 15,
    api_id: "price_1KIyidKM0qNX2m1EewBXqDTW",
    category: "soppa",
    name: "Tomat och championsoppa",
    description: "Smakrik tomat och championsoppa, med en hint utav vitlök, citron och chili",
    price: 70,
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
  }
];

module.exports = products;
