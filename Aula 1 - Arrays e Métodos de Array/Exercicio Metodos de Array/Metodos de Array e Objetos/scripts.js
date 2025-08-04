const jogos = [
  {
    "id": 1,
    "titulo": "The Legend of Zelda: Breath of the Wild",
    "genero": "Aventura",
    "plataforma": ["Nintendo Switch", "Wii U"],
    "anoLancamento": 2017,
    "multiplayer": false,
    "notaMedia": 9.8
  },
  {
    "id": 2,
    "titulo": "God of War",
    "genero": "Ação",
    "plataforma": ["PlayStation 4"],
    "anoLancamento": 2018,
    "multiplayer": false,
    "notaMedia": 9.6
  },
  {
    "id": 3,
    "titulo": "Minecraft",
    "genero": "Sandbox",
    "plataforma": ["PC", "Xbox", "PlayStation", "Nintendo Switch", "Mobile"],
    "anoLancamento": 2011,
    "multiplayer": true,
    "notaMedia": 9.0
  },
  {
    "id": 4,
    "titulo": "Fortnite",
    "genero": "Battle Royale",
    "plataforma": ["PC", "Xbox", "PlayStation", "Nintendo Switch", "Mobile"],
    "anoLancamento": 2017,
    "multiplayer": true,
    "notaMedia": 8.5
  },
  {
    "id": 5,
    "titulo": "Overwatch",
    "genero": "FPS",
    "plataforma": ["PC", "Xbox", "PlayStation", "Nintendo Switch"],
    "anoLancamento": 2016,
    "multiplayer": true,
    "notaMedia": 8.7
  },
  {
    "id": 6,
    "titulo": "Super Mario Odyssey",
    "genero": "Plataforma",
    "plataforma": ["Nintendo Switch"],
    "anoLancamento": 2017,
    "multiplayer": false,
    "notaMedia": 9.4
  },
  {
    "id": 7,
    "titulo": "Red Dead Redemption 2",
    "genero": "Ação/Aventura",
    "plataforma": ["PC", "Xbox", "PlayStation"],
    "anoLancamento": 2018,
    "multiplayer": true,
    "notaMedia": 9.7
  },
  {
    "id": 8,
    "titulo": "Among Us",
    "genero": "Party/Social Dedução",
    "plataforma": ["PC", "Mobile", "Nintendo Switch"],
    "anoLancamento": 2018,
    "multiplayer": true,
    "notaMedia": 8.0
  },
  {
    "id": 9,
    "titulo": "The Witcher 3: Wild Hunt",
    "genero": "RPG",
    "plataforma": ["PC", "Xbox", "PlayStation", "Nintendo Switch"],
    "anoLancamento": 2015,
    "multiplayer": false,
    "notaMedia": 9.5
  },
  {
    "id": 10,
    "titulo": "Call of Duty: Warzone",
    "genero": "Battle Royale/FPS",
    "plataforma": ["PC", "Xbox", "PlayStation"],
    "anoLancamento": 2020,
    "multiplayer": true,
    "notaMedia": 8.8
  }
]

// PUSH: adiciona um novo jogo ao array e mostra resultado
function executarPush() {

  mostrarArray("resultado-push", copia);
}

// SPLICE: remove o jogo "Fortnite" e mostra resultado
function executarSplice() {

  mostrarArray("resultado-splice", copia);
}

// MAP: cria um array só com títulos
function executarMap() {
  mostrarArray("resultado-map", titulos);
}

// FILTER: retorna só jogos multiplayer
function executarFilter() {
  mostrarArray("resultado-filter", multiplayer);
}

// INCLUDES: verifica se algum gênero inclui "Ação"
function executarIncludes() {
  document.getElementById("resultado-includes").textContent = resultado ? "Sim" : "Não";
}
  






// Função para mostrar JSON formatado nos elementos <pre>
function mostrarArray(idElemento, array) {
  document.getElementById(idElemento).textContent = JSON.stringify(array, null, 2);
}

// Inicializa mostrando os arrays originais
mostrarArray("array-push", jogos);
mostrarArray("array-splice", jogos);
mostrarArray("array-map", jogos);
mostrarArray("array-filter", jogos);
mostrarArray("array-includes", jogos.map(j => j.genero));
