const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 23 }
  ];

  var index = books.findIndex(function(item) {
    return item.id === 133712;
  });
  
  if (index !== -1) {
    var removedBook = books.splice(index, 1);
    console.log("Livre supprimé :", removedBook[0]);
  } else {
    console.log("Aucun livre trouvé avec l'ID 133712.");
  }

  books.sort(function(a, b) {
    var titleA = a.title.toUpperCase(); // Convertit en majuscules pour comparer sans distinction de casse
    var titleB = b.title.toUpperCase();
  
    if (titleA < titleB) {
      return -1; // a vient avant b
    }
    if (titleA > titleB) {
      return 1; // b vient avant a
    }
    return 0; // a et b sont égaux
  });
  
  console.log(books);