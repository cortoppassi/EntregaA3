'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const books = [
      {
        title: "As Chamas do Inverno",
        author: "Lívia Monteiro",
        publisher: "Editora Solaris",
        price: 39.90,
        stock: 12
      },
      {
        title: "O Código do Dragão",
        author: "H. R. Tavares",
        publisher: "Fábula Negra",
        price: 42.00,
        stock: 8
      },
      {
        title: "A Última Constelação",
        author: "Daniela Freitas",
        publisher: "Cosmos Press",
        price: 45.50,
        stock: 10
      },
      {
        title: "Crônicas do Abismo",
        author: "Rafael Vilar",
        publisher: "Sombras & Letras",
        price: 38.70,
        stock: 7
      },
      {
        title: "Murmúrios da Selva",
        author: "Carolina Rocha",
        publisher: "Verde Fértil",
        price: 33.80,
        stock: 14
      },
      {
        title: "Lendas de Ayeron",
        author: "F. M. Vasquez",
        publisher: "Estúdio Arcano",
        price: 49.90,
        stock: 9
      },
      {
        title: "A Cidade Submersa",
        author: "Clara Nunes",
        publisher: "Mar Azul",
        price: 36.20,
        stock: 11
      },
      {
        title: "O Enigma da Torre",
        author: "Júlio Mendes",
        publisher: "Letra Antiga",
        price: 40.00,
        stock: 5
      },
      {
        title: "Entre Sombras e Espelhos",
        author: "Larissa D’Avila",
        publisher: "Reflexo Editorial",
        price: 41.75,
        stock: 13
      },
      {
        title: "Tempestade de Areia",
        author: "D. P. Machado",
        publisher: "Terra Branca",
        price: 35.90,
        stock: 6
      },
      {
        title: "Fragmentos de Aurora",
        author: "Bianca Rezende",
        publisher: "Luz & Verso",
        price: 37.50,
        stock: 10
      },
      {
        title: "Os Guardiões do Tempo",
        author: "Lucas Santoro",
        publisher: "Horizonte Literário",
        price: 43.00,
        stock: 8
      },
      {
        title: "O Jogo dos Deuses",
        author: "Felipe Andrade",
        publisher: "Orbe Dourado",
        price: 44.10,
        stock: 9
      },
      {
        title: "Rastros na Neve",
        author: "Patrícia Lima",
        publisher: "Nevasca Editora",
        price: 34.25,
        stock: 12
      },
      {
        title: "Códigos Proibidos",
        author: "Thiago Serrano",
        publisher: "Cripta Publicações",
        price: 46.60,
        stock: 7
      },
      {
        title: "O Portal de Ébano",
        author: "Mariana Braga",
        publisher: "Vórtice Editorial",
        price: 39.40,
        stock: 11
      },
      {
        title: "A Rosa Mecânica",
        author: "Eduardo Leal",
        publisher: "Fronteira Sul",
        price: 32.99,
        stock: 10
      },
      {
        title: "Vento de Liberdade",
        author: "Nayara Coelho",
        publisher: "Brisa Norte",
        price: 35.00,
        stock: 13
      },
      {
        title: "No Coração da Tempestade",
        author: "Luan Xavier",
        publisher: "Trovão Azul",
        price: 47.80,
        stock: 6
      },
      {
        title: "Refúgio dos Anjos",
        author: "Helena Pires",
        publisher: "Alvorada Editorial",
        price: 38.00,
        stock: 15
      },
      {
        title: "Asas de Sangue",
        author: "V. M. Tavares",
        publisher: "Arkan Books",
        price: 43.90,
        stock: 9
      },
      {
        title: "O Labirinto das Vozes",
        author: "Fernanda Dias",
        publisher: "Intrínseca Sombria",
        price: 40.60,
        stock: 8
      },
      {
        title: "Nevoeiro de Prata",
        author: "C. R. Carvalho",
        publisher: "Lunar Press",
        price: 36.90,
        stock: 10
      },
      {
        title: "A Herança de Ferro",
        author: "Igor Pacheco",
        publisher: "Engranagem Literária",
        price: 45.00,
        stock: 11
      },
      {
        title: "O Último Horizonte",
        author: "Tatiane Gama",
        publisher: "Horizonte Final",
        price: 41.00,
        stock: 12
      }
    ];

    const timestamp = new Date();
    books.forEach(book => {
      book.createdAt = timestamp;
      book.updatedAt = timestamp;
    });

    return queryInterface.bulkInsert('Products', books, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
