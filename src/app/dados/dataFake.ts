interface article{
  id: string | null;
  foto: string;
  title: string;
  description: string;
}

export const dataFake: article[] = [
  {
    id: "1",
    foto: "https://assets.pokemon.com/assets//cms2-pt-br/img/video-games/video-games/pokemon_unite/pokemon-unite-logo-169.jpg",
    title: "Pokémon Unite",
    description: "Pokémon Unite é um jogo eletrônico de arena de batalha multijogador desenvolvido pela TiMi Studio Group e publicado pela The Pokémon Company para Microsoft Windows, Nintendo Switch, iOS e Android. Foi lançado em 21 de julho de 2021. O jogo é um jogo de arena de batalha multijogador em tempo real (MOBA) que permite que os jogadores controlem Pokémon em partidas de 5 contra 5. Os jogadores precisam trabalhar juntos para derrotar a equipe adversária, capturando pontos de controle e derrotando o Pokémon adversário."
  },
  {
    id: "2",
    foto: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png",
    title: "Elden Ring",
    description: "Elden Ring é um jogo eletrônico de RPG de ação desenvolvido pela FromSoftware e publicado pela Bandai Namco Entertainment. Foi lançado em 25 de fevereiro de 2022 para Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One e Xbox Series X/S. O jogo é ambientado em um mundo aberto chamado Lands Between, que é governado pelos semideuses filhos de Marika the Eternal, a Rainha dos Semelhantes. Os jogadores assumem o papel de um Tarnished, um exilado que retorna às Terras do Meio em busca da Graça Estelar, uma força mística que pode restaurar sua posição como Lorde Elden."
  },
  {
    id: "3",
    foto: "https://img.hype.games/cdn/c64bd743-e83f-4677-a53b-e03fdc4f6566[BHN-Nintendo]-The-Legend-of-Zelda-Breath-of-the-Wild%20(1).png",
    title: "The Legend of Zelda: Breath of the Wild",
    description: "The Legend of Zelda: Breath of the Wild é um jogo eletrônico de ação-aventura desenvolvido e publicado pela Nintendo para o Nintendo Switch. Foi lançado em 3 de março de 2017. O jogo é ambientado em Hyrule, um reino de fantasia que foi devastado por uma guerra civil. Os jogadores assumem o papel de Link, um jovem herói que deve restaurar a paz ao reino."
  },
  {
    id: "4",
    foto: "https://assetsio.reedpopcdn.com/user-1007518-originalxoriginal-18-06-58.jpg",
    title: "God of War",
    description: "God of War é um jogo eletrônico de ação-aventura desenvolvido pela Santa Monica Studio e publicado pela Sony Interactive Entertainment. Foi lançado em 20 de abril de 2018 para PlayStation 4. O jogo é um reboot da série God of War, e segue Kratos, um ex-deus grego da guerra, e seu filho Atreus, enquanto eles viajam pelo reino nórdico em busca de uma montanha sagrada. O jogo apresenta um novo sistema de combate, um mundo aberto mais amplo e uma história mais sombria e madura do que os jogos anteriores da série."
  },
  {
    id: "5",
    foto: "https://image.api.playstation.com/vulcan/ap/rnd/202010/2915/SqRcyLjZbpK26ej6TnWf43xp.jpg",
    title: "Horizon Forbidden West",
    description: "Horizon Forbidden West é um jogo eletrônico de ação-aventura desenvolvido pela Guerrilla Games e publicado pela Sony Interactive Entertainment. Foi lançado em 18 de fevereiro de 2022 para PlayStation 4 e PlayStation 5. O jogo é uma sequência de Horizon Zero Dawn, e segue Aloy, uma caçadora de máquinas, enquanto viaja para uma América ocidental devastada por tempestades maciças e máquinas mortais."
  },
  {
    id: "6",
    foto: "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/capsule_616x353.jpg",
    title: "Starfield",
    description: "Starfield é um jogo eletrônico de RPG de ação desenvolvido pela Bethesda Game Studios e publicado pela Bethesda Softworks. Foi anunciado em 2018, e está previsto para ser lançado em 2023 para Microsoft Windows e Xbox Series X/S. O jogo é ambientado em um universo de ficção científica, e os jogadores assumem o papel de um astronauta que explora um sistema solar cheio de planetas habitáveis. O jogo apresenta um sistema de criação de personagens profundo, um mundo aberto vasto e uma história épica."
  },
  {
    id: "7",
    foto: "https://cloud.estacaonerd.com/wp-content/uploads/2022/12/14101305/thumbnail-2.jpg",
    title: "The Witcher 3: Wild Hunt",
    description: "The Witcher 3: Wild Hunt é um jogo eletrônico de RPG de ação desenvolvido pela CD Projekt RED e publicado pela Warner Bros. Interactive Entertainment. Foi lançado em 19 de maio de 2015 para Microsoft Windows, PlayStation 4 e Xbox One. O jogo é ambientado em um mundo de fantasia medieval, e segue Geralt de Rivia, um caçador de monstros profissional. O jogo apresenta um mundo aberto vasto e detalhado, uma história complexa e envolvente e um combate desafiador."
  },
  {
    id: "8",
    foto: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg",
    title: "Grand Theft Auto V",
    description: "Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. Foi lançado em 17 de setembro de 2013 para PlayStation 3 e Xbox 360, e em 18 de novembro de 2014 para PlayStation 4 e Xbox One. O jogo é ambientado na cidade fictícia de Los Santos, e segue três criminosos, Michael De Santa, Franklin Clinton e Trevor Philips, enquanto eles participam de uma série de assaltos e outros crimes. O jogo apresenta um mundo aberto vasto e detalhado, uma história complexa e envolvente e um multiplayer online cooperativo."
  },
  {
    id: "9",
    foto: "https://img.hype.games/cdn/cc8f51c4-3813-4eb0-8b93-431afca5601c[BHN-Nintendo]-Super-Mario-Odyssey-600.png",
    title: "Super Mario Odyssey",
    description: "Super Mario Odyssey é um jogo eletrônico de plataforma desenvolvido pela Nintendo EPD e publicado pela Nintendo. Foi lançado em 27 de outubro de 2017 para Nintendo Switch. O jogo é ambientado em um mundo aberto chamado Reino dos Chapéus, e segue Mario, que deve resgatar a Princesa Peach das garras de Bowser. O jogo apresenta um novo sistema de movimentação, que permite que Mario use chapéus para se transformar em diferentes criaturas, e uma história divertida e envolvente."
  },
  {
    id: "10",
    foto: "https://kirbyandtheforgottenland.nintendo.com/assets/images/share-fb.jpg",
    title: "Kirby and the Forgotten Land",
    description: "Kirby and the Forgotten Land é um jogo eletrônico de plataforma desenvolvido pela HAL Laboratory e publicado pela Nintendo. Foi lançado em 25 de março de 2022 para Nintendo Switch. O jogo é ambientado em um mundo abandonado chamado Terra Esquecida, e segue Kirby, que deve salvar os Waddle Dees raptados por King Dedede. O jogo apresenta um novo sistema de movimentação, que permite que Kirby use habilidades de diferentes inimigos, e uma história divertida e envolvente."
  }
]

