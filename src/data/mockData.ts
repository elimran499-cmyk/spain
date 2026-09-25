import { PosterItem, PricingPlan, FAQItem, DeviceInfo, PackageTier, DurationPack, ChannelItem } from '../types';

export const WHATSAPP_NUMBER = "447832486269"; // same line as beehoster.net
export const WHATSAPP_DISPLAY = "+44 7832 486269";

export const POSTER_ITEMS: PosterItem[] = [
  // Live Sports
  {
    id: 'mv-tt0111161',
    title: 'The Shawshank Redemption',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 9.3,
    year: '1994',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Condenado a cadena perpetua por un asesinato que no cometió, un banquero forja una amistad improbable y prepara con paciencia su libertad.',
    genre: ['Drama']
  },
  {
    id: 'mv-tt0068646',
    title: 'The Godfather',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 9.2,
    year: '1972',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNTljNjllNDAtMzc0MS00ZGExLThlOTktOTRlNzc3YjA3ZWFlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'El patriarca de una dinastía criminal neoyorquina cede su imperio al hijo que nunca lo quiso.',
    genre: ['Policiaco', 'Drama']
  },
  {
    id: 'mv-tt0468569',
    title: 'The Dark Knight',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 9.1,
    year: '2008',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Batman se enfrenta al Joker, un anarquista sin más plan que el caos, en un duelo que lleva a Gotham al límite.',
    genre: ['Policiaco', 'Thriller']
  },
  {
    id: 'mv-tt0071562',
    title: 'The Godfather Part II',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 9.0,
    year: '1974',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjQ5MzQxZTEtMmE1Yy00NjZlLTk5ODItNjI3MWIxMjk1M2U5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Michael Corleone aprieta su control sobre los negocios familiares mientras el joven Vito se abre paso en el Nueva York de los años veinte.',
    genre: ['Policiaco', 'Drama']
  },
  {
    id: 'mv-tt0167260',
    title: 'The Lord of the Rings: The Return of the King',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 9.0,
    year: '2003',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZGEzZDkzNDgtMGMzZi00NjNhLTliNWMtMTllYzQ2OTQwNGFkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Gandalf y Aragorn lideran la última resistencia contra Sauron mientras Frodo y Sam llevan el Anillo al Monte del Destino.',
    genre: ['Aventura', 'Drama', 'Fantasía']
  },
  {
    id: 'mv-tt0050083',
    title: '12 Angry Men',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 9.0,
    year: '1957',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYThhOGFhODktNGEwNi00MzY2LTg3YWYtNzAzZTE0MTFlMWQxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un jurado se niega a condenar sin debatir y la sala de deliberación se convierte en una batalla por la duda razonable.',
    genre: ['Policiaco', 'Drama']
  },
  {
    id: 'mv-tt0108052',
    title: "Schindler's List",
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 9.0,
    year: '1993',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZWUyNTJmOTMtZGM4MC00NWE2LThmZTUtZWE1NGM2YzYwZjRlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un industriel allemand transforme son usine en refuge et sauve plus de mille Juifs de la Shoah.',
    genre: ['Biografía', 'Drama', 'Histórico']
  },
  {
    id: 'mv-tt0120737',
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.9,
    year: '2001',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNDM0ZTRjNDAtMWFiOS00MjZiLThhZjYtNGQ0ODQ5MGE3Y2Y0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un hobbit hereda un anillo de poder terrible y parte con ocho compañeros para destruirlo.',
    genre: ['Aventura', 'Drama', 'Fantasía']
  },
  {
    id: 'mv-tt0110912',
    title: 'Pulp Fiction',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.8,
    year: '1994',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMzNlNGRkZWYtNmE0Yy00NjQyLWFmMzItYWY5NGM2YWU4OWYwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Dos sicarios, un boxeador y la mujer de un gánster se cruzan en varias historias de Los Ángeles contadas en desorden.',
    genre: ['Policiaco', 'Drama']
  },
  {
    id: 'mv-tt0060196',
    title: 'The Good, the Bad and the Ugly',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.8,
    year: '1966',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BN2FmNmM5OTUtODEwMC00NDE5LWI4ZTUtZTg1ZmZlYjVjN2EyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Tres forajidos se disputan un tesoro confederado enterrado en plena guerra de Secesión.',
    genre: ['Aventura', 'Drama', 'Wéstern']
  },
  {
    id: 'mv-tt0167261',
    title: 'The Lord of the Rings: The Two Towers',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.8,
    year: '2002',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNjJhZjZlNjktZTEwYi00MmMwLTgyYTgtYmMyMmRlOWMzNmRjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'La Comunidad, ya rota, pelea en varios frentes mientras Rohan resiste en el Abismo de Helm.',
    genre: ['Aventura', 'Drama', 'Fantasía']
  },
  {
    id: 'mv-tt0109830',
    title: 'Forrest Gump',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.8,
    year: '1994',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BOWQ0NzQ5MDItYTA3Yy00Y2ZjLWFlMGQtNjcxYzU4MWM3NzFmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un hombre de gran corazón atraviesa treinta años de historia de Estados Unidos sin olvidar nunca a Jenny.',
    genre: ['Drama', 'Romance']
  },
  {
    id: 'mv-tt0137523',
    title: 'Fight Club',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.8,
    year: '1999',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZjA1YzQ3MDktYzRjMi00NWQ0LWFhYWYtZGMyODcwNGEwZjNmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un oficinista insomne y un vendedor de jabón fundan un club de lucha que se les va de las manos enseguida.',
    genre: ['Policiaco', 'Drama', 'Thriller']
  },
  {
    id: 'mv-tt1375666',
    title: 'Inception',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.8,
    year: '2010',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNTQxYmM1NzQtY2FiZS00MzRhLTljZDYtZjRmMGNiMWI3NTQxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'A un ladrón de secretos dentro de los sueños le ofrecen una segunda vida si logra implantar una idea en lugar de robarla.',
    genre: ['Aventura', 'Ciencia ficción', 'Thriller']
  },
  {
    id: 'mv-tt0080684',
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.7,
    year: '1980',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZWQyNTJkMTAtZWQ0Zi00NGFlLWI2ZDktNTA4MzM5NDQ0MTk4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'La Rebelión se dispersa tras una dura derrota: Luke se entrena con Yoda mientras Vader le pisa los talones.',
    genre: ['Aventura', 'Fantasía', 'Ciencia ficción']
  },
  {
    id: 'mv-tt0133093',
    title: 'The Matrix',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.7,
    year: '1999',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNGE1YzI4NzMtZTUxNi00Y2I5LTg2MmQtODE0NThmYTFmMDk0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un hacker descubre que su mundo es una simulación y se une a la lucha por liberar a la humanidad de las máquinas.',
    genre: ['Acción', 'Ciencia ficción']
  },
  {
    id: 'mv-tt0816692',
    title: 'Interstellar',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.7,
    year: '2014',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'La Tierra se muere: un antiguo piloto deja a sus hijos y cruza un agujero de gusano en busca de un mundo nuevo.',
    genre: ['Aventura', 'Drama', 'Ciencia ficción']
  },
  {
    id: 'mv-tt0099685',
    title: 'GoodFellas',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.7,
    year: '1990',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYTE0MmJhNGUtZDI5My00YThhLTk1NmItNDExOWUxMjg1YzUxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Treinta años en la mafia, de la euforia de pertenecer a la paranoia que se lo lleva todo por delante.',
    genre: ['Biografía', 'Policiaco', 'Drama']
  },
  {
    id: 'mv-tt0073486',
    title: "One Flew Over the Cuckoo's Nest",
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.6,
    year: '1975',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYjdkNjdlNDgtZTM1My00YzEwLTk5YjItYjE3YzllZTViNTVlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un détenu simule la folie pour purger sa peine en hôpital psychiatrique et se heurte à l’infirmière Ratched.',
    genre: ['Drama']
  },
  {
    id: 'mv-tt0114369',
    title: 'Se7en',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.6,
    year: '1995',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjk4YWQ5YTItZTk2OS00MTcxLWIwNjctZjE3NzNhNjQzZjI2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Dos inspectores persiguen a un asesino que escenifica sus crímenes según los siete pecados capitales.',
    genre: ['Policiaco', 'Drama', 'Misterio']
  },
  {
    id: 'mv-tt0038650',
    title: "It's a Wonderful Life",
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.6,
    year: '1946',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNzg5YjAwODItZmNiNC00OGEwLWIzYmMtNzc3ZTc5MmM4NDc0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Au pire soir de sa vie, un homme découvre ce que serait le monde s’il n’était jamais né.',
    genre: ['Drama', 'Familia', 'Fantasía']
  },
  {
    id: 'mv-tt0102926',
    title: 'The Silence of the Lambs',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.6,
    year: '1991',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BOGZiZjYxY2UtNDE5YS00NzcwLWI0NmItNjcwYThkOWMwYTdhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Una joven agente del FBI negocia con un caníbal encarcelado para atrapar a un asesino en serie que sigue suelto.',
    genre: ['Policiaco', 'Drama', 'Terror']
  },
  {
    id: 'mv-tt0120815',
    title: 'Saving Private Ryan',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.6,
    year: '1998',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMzU0YTgzM2EtYWNmMy00NWM1LWE0NTMtYjFhZDNlMDU1NWJmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Tras el desembarco de Normandía, una escuadra cruza las líneas enemigas para devolver a casa a un paracaidista.',
    genre: ['Drama', 'Bélico']
  },
  {
    id: 'mv-tt0047478',
    title: 'Seven Samurai',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.6,
    year: '1954',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYzc0ODMyMzctZTA5Zi00MGZhLWE0NTItZjJhOTE3OWMxZjBlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Una aldea hambrienta contrata a siete samuráis sin señor para defender la cosecha de los bandidos.',
    genre: ['Acción', 'Drama']
  },
  {
    id: 'mv-tt0120689',
    title: 'The Green Mile',
    category: 'movies',
    categoryLabel: 'Cine',
    rating: 8.6,
    year: '1999',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BM2VlMDA2NWYtYzQxZi00NGIyLTk0OTYtMGY3ODFmOGFhMTI3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Los funcionarios del corredor de la muerte conocen a un preso con un don imposible y ya nada vuelve a ser igual.',
    genre: ['Policiaco', 'Drama', 'Fantasía']
  },

  // TV Series - IMDb Top 250 TV, ranks 1-25 (imdb.com/chart/toptv)
  {
    id: 'tv-tt0903747',
    title: 'Breaking Bad',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.5,
    year: '2008 - 2013',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BOWE4NTc3YmYtNmU2Mi00ZjhkLWE1MTItZmM1M2U1ODU3YjFlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un profesor de química con un cáncer terminal empieza a fabricar metanfetamina por su familia y se pierde en su propio imperio.',
    genre: ['Policiaco', 'Drama', 'Thriller']
  },
  {
    id: 'tv-tt5491994',
    title: 'Planet Earth II',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.4,
    year: '2016',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMzY4NDBkMWYtYzdkYy00YzBjLWJmODctMWM4YjYzZTdjNWE5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'David Attenborough filma islas, montañas, selvas y ciudades con una cercanía asombrosa.',
    genre: ['Documental', 'Familia']
  },
  {
    id: 'tv-tt0795176',
    title: 'Planet Earth',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.4,
    year: '2006',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BY2NjNDUzOTgtMDFmNC00ZGQ4LWE5MDctMzczNGVlOGU1N2MyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'La serie de naturaleza de referencia: cinco años de rodaje y cuarenta países para filmar la vida en todos los continentes.',
    genre: ['Documental', 'Familia']
  },
  {
    id: 'tv-tt0185906',
    title: 'Band of Brothers',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.4,
    year: '2001',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYjdlNGJlYjQtMDU2Mi00ZjA1LWEwYzgtYzlmNDM5MmE1ZGUwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'La Compañía Easy salta sobre Normandía y cruza Europa, del Día D al final de la guerra.',
    genre: ['Acción', 'Drama', 'Histórico']
  },
  {
    id: 'tv-tt7366338',
    title: 'Chernobyl',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.3,
    year: '2019',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNzU0OTI4YTQtNGQ1ZS00ZjA4LTg3MTMtZjkyZWNjN2RiZDJmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'La explosión del reactor en 1986 y los científicos, mineros y bomberos que pagaron el precio de la mentira.',
    genre: ['Drama', 'Histórico', 'Thriller']
  },
  {
    id: 'tv-tt0306414',
    title: 'The Wire',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.3,
    year: '2002 - 2008',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYjIxZTMwZmUtOTUzYS00YmU2LWJhNDAtNzA2NDg0NDA0MjVkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Baltimore vista desde todos los ángulos a la vez: la calle, el puerto, el ayuntamiento, la escuela y la redacción.',
    genre: ['Policiaco', 'Drama', 'Thriller']
  },
  {
    id: 'tv-tt0417299',
    title: 'Avatar: The Last Airbender',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.3,
    year: '2005 - 2008',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZTZmMWU3ZTUtM2U4Ni00YmNhLTkwODktN2IzNzkyZmRlYjZjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un joven maestro del aire despierta tras un siglo de hielo: el mundo está en guerra y solo él puede pararla.',
    genre: ['Animación', 'Acción', 'Aventura']
  },
  {
    id: 'tv-tt0141842',
    title: 'The Sopranos',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.2,
    year: '1999 - 2007',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BODMxMDU5ZjEtYzk5MC00YzE5LTg3ZTMtZDRjYTEyMDdiMzc3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un capo de Nueva Jersey hace malabares entre dos familias y acaba yendo al psicólogo.',
    genre: ['Policiaco', 'Drama']
  },
  {
    id: 'tv-tt6769208',
    title: 'Blue Planet II',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.3,
    year: '2017',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNmUwYThjM2UtNTg1Yy00MzRlLThhMmYtNjlmOWU0ZmQxZDA3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Nuevas tecnologías llevan las cámaras más hondo que nunca a unos océanos todavía por descubrir.',
    genre: ['Documental', 'Familia']
  },
  {
    id: 'tv-tt2395695',
    title: 'Cosmos: A Spacetime Odyssey',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.2,
    year: '2014',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYTRlMzk0NzctNTI3Ni00N2E2LWJiNGMtMDdlNjk1YWNmMzkyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Neil deGrasse Tyson recupera la nave de la imaginación de Sagan para un nuevo recorrido por el universo.',
    genre: ['Documental', 'Familia']
  },
  {
    id: 'tv-tt0081846',
    title: 'Cosmos',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.3,
    year: '1980',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BOTA5MWFhMzAtOWU1OS00Yjk4LTlkNGItNGI3N2VkNzcyNGU2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'El viaje original de Carl Sagan en trece episodios por el espacio, el tiempo y el método científico.',
    genre: ['Documental']
  },
  {
    id: 'tv-tt9253866',
    title: 'Our Planet',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.2,
    year: '2019 - 2023',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZDE1NzlkNWMtNzFiMC00ZTgxLTgyMmItOTU5OGI2NWQ4MDMxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Historia natural a la mayor escala posible, con un retrato sin rodeos de lo que estamos perdiendo.',
    genre: ['Documental', 'Familia']
  },
  {
    id: 'tv-tt0944947',
    title: 'Game of Thrones',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.2,
    year: '2011 - 2019',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYmI2ZTJiZTUtYWM2NS00OTAyLTk2MmUtYjVkMTdjNjg1YjhkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Nueve grandes casas se disputan el Trono de Hierro mientras un enemigo olvidado se reúne más allá del Muro.',
    genre: ['Drama', 'Fantasía']
  },
  {
    id: 'tv-tt7678620',
    title: 'Bluey',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.3,
    year: '2018 - Present',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYWU1YmQzMjEtMDNjOS00MGIyLWExY2ItZDAzNmU5NWViMGZmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Una perrita azul convierte el día a día familiar en un juego, en tandas de siete minutos perfectos.',
    genre: ['Animación', 'Corto', 'Comedia']
  },
  {
    id: 'tv-tt0071075',
    title: 'The World at War',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.2,
    year: '1973 - 1974',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BM2I1OGUyNmYtZmNiOC00OGQ4LWFlNDEtYTM5ZTAxMDI4ZmMyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'El relato de referencia de la Segunda Guerra Mundial, contado por quienes la vivieron.',
    genre: ['Documental', 'Histórico', 'Bélico']
  },
  {
    id: 'tv-tt2560140',
    title: 'Attack on Titan',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.1,
    year: '2013 - 2023',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'La humanidad se refugia tras murallas gigantes hasta el día en que los Titanes las atraviesan.',
    genre: ['Animación', 'Acción', 'Aventura']
  },
  {
    id: 'tv-tt1355642',
    title: 'Fullmetal Alchemist: Brotherhood',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.1,
    year: '2009 - 2010',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMzNiODA5NjYtYWExZS00OTc4LTg3N2ItYWYwYTUyYmM5MWViXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Dos hermanos pagan muy caro una alquimia prohibida y buscan la piedra que podría repararlo todo.',
    genre: ['Animación', 'Acción', 'Aventura']
  },
  {
    id: 'tv-tt1533395',
    title: 'Life',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.1,
    year: '2009',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZDJjMzJiMTktMWZkZi00YWY0LWJjNGUtY2ZmNTFlOThhZTA4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Cuatro años de rodaje sobre las estrategias de supervivencia más extrañas que ha producido la evolución.',
    genre: ['Documental']
  },
  {
    id: 'tv-tt8420184',
    title: 'The Last Dance',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.0,
    year: '2020',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BOTQyYmQ1N2UtYjFkNS00NzgyLTk5YTUtYjExMDdjOTA3MGU2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Imágenes inéditas de la última temporada de Michael Jordan con los Chicago Bulls.',
    genre: ['Documental', 'Biografía', 'Histórico']
  },
  {
    id: 'tv-tt0052520',
    title: 'The Twilight Zone',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.0,
    year: '1959 - 1964',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYzUxYmJmZGYtYjYyZC00MWJhLTkwZGYtOWRiNTJlYTRhYjNjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'La antología de Rod Serling: historias independientes, entre la ciencia ficción y la fábula moral.',
    genre: ['Drama', 'Fantasía', 'Terror']
  },
  {
    id: 'tv-tt1877514',
    title: 'The Vietnam War',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.1,
    year: '2017',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYTQ1ZWYzMmQtNWU5OC00YWY0LTkyMWMtMTU0NjYxMjJkMmNjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Ken Burns y Lynn Novick cuentan la guerra a través de los soldados y los civiles de todos los bandos.',
    genre: ['Documental', 'Histórico', 'Bélico']
  },
  {
    id: 'tv-tt2861424',
    title: 'Rick and Morty',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.0,
    year: '2013 - Present',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un genio nihilista arrastra a su nieto por las dimensiones y lo empeora todo por el camino.',
    genre: ['Animación', 'Aventura', 'Comedia']
  },
  {
    id: 'tv-tt1475582',
    title: 'Sherlock',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.0,
    year: '2010 - 2017',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjRhZDdjMDYtMTg5Yy00NGI4LWI3ZDgtYjNkNDc4MzJkNDRjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'El detective de Conan Doyle trasladado al Londres de hoy, en investigaciones de largo recorrido.',
    genre: ['Policiaco', 'Drama', 'Misterio']
  },
  {
    id: 'tv-tt0103359',
    title: 'Batman: The Animated Series',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.0,
    year: '1992 - 1995',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYjgwZWUzMzUtYTFkNi00MzM0LWFkMWUtMDViMjMxNGIxNDUxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'El Gotham art déco que definió a Batman para toda una generación y alumbró a Harley Quinn.',
    genre: ['Animación', 'Acción', 'Aventura']
  },
  {
    id: 'tv-tt3032476',
    title: 'Better Call Saul',
    category: 'series',
    categoryLabel: 'Series TV',
    rating: 9.0,
    year: '2015 - 2022',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTAxOTQ0MjUzMzJeQTJeQWpwZ15BbWU4MDY0NTAxNzMx._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Seis años antes de Walter White, el abogadillo Jimmy McGill se convierte en Saul Goodman.',
    genre: ['Policiaco', 'Drama']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'p1',
    name: '3 Months',
    duration: '3 Months Access',
    price: {
      USD: 26.99,
      EUR: 24.99,
      GBP: 21.99
    },
    originalPrice: {
      USD: 48.99,
      EUR: 44.99,
      GBP: 38.99
    },
    popular: false,
    savings: 'Save 40%',
    tagline: 'Most popular choice for the sports season',
    features: [
      '80,000+ Live TV Channels',
      '95,000+ Movies & Series',
      '4K & 60FPS Ultra HD Quality',
      'Anti-Freeze 9.0 (99.9% Uptime)',
      'Active Within 5 Minutes',
      'Works on All Devices & Apps',
      'Electronic Program Guide (EPG)',
      'Free 7-Day Catch-Up',
      'Adult Channels (Optional)',
      '24/7 VIP Priority Support',
      '1 Connection'
    ],
    whatsappText: 'Hello! I want to order the 3 Months IPTV Pack (EUR 24.99). Please activate my account.'
  },
  {
    id: 'p2',
    name: '6 Months',
    duration: '6 Months Access',
    price: {
      USD: 37.99,
      EUR: 34.99,
      GBP: 29.99
    },
    originalPrice: {
      USD: 75.99,
      EUR: 69.99,
      GBP: 59.99
    },
    popular: false,
    savings: 'Save 45%',
    tagline: 'Strong value for longer viewing',
    features: [
      '80,000+ Live TV Channels',
      '95,000+ Movies & Series',
      '4K & 60FPS Ultra HD Quality',
      'Anti-Freeze 9.0 (99.9% Uptime)',
      'Active Within 5 Minutes',
      'Works on All Devices & Apps',
      'Electronic Program Guide (EPG)',
      'Free 7-Day Catch-Up',
      'Adult Channels (Optional)',
      'Automatic Playlist Updates',
      '24/7 VIP Priority Support',
      '1 Connection'
    ],
    whatsappText: 'Hello! I want to order the 6 Months IPTV Pack (EUR 34.99). Please activate my account.'
  },
  {
    id: 'p3',
    name: '12 Months',
    duration: '1 Year Full Access',
    price: {
      USD: 52.99,
      EUR: 49.0,
      GBP: 41.99
    },
    originalPrice: {
      USD: 128.99,
      EUR: 119.0,
      GBP: 101.99
    },
    popular: true,
    savings: 'BEST VALUE - SAVE 55%',
    tagline: 'Best price, guaranteed buffer-free',
    features: [
      '80,000+ Live TV Channels',
      '95,000+ Movies & Series',
      '4K & 60FPS Ultra HD Quality',
      'Anti-Freeze 9.0 (99.9% Uptime)',
      'Active Within 5 Minutes',
      'Works on All Devices & Apps',
      'Electronic Program Guide (EPG)',
      'Free 7-Day Catch-Up',
      'Adult Channels (Optional, PIN protected)',
      'Channel Requests & Server Updates Included',
      '24/7 Instant VIP Support on WhatsApp',
      '1 Connection (works across rooms)'
    ],
    whatsappText: 'Hello! I want to order the 12 Months IPTV Pack (EUR 49.00). Please activate my account.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq1',
    question: '¿Cuánto tarda en activarse mi lista?',
    answer: 'El alta es casi inmediata. En cuanto haces el pedido por WhatsApp, nuestros servidores generan tu enlace M3U y tus credenciales Xtream Codes en 2 o 5 minutos.',
    category: 'setup'
  },
  {
    id: 'faq2',
    question: '¿Qué dispositivos y aplicaciones son compatibles?',
    answer: 'Todos: Smart TV (Samsung Tizen, LG WebOS, Android TV), Amazon Firestick, deco MAG y Formuler, Apple TV, iOS, Android, Windows y Mac.',
    category: 'setup'
  },
  {
    id: 'faq3',
    question: '¿Qué velocidad hace falta para ver en 4K?',
    answer: 'Cuenta con 10 Mbps como mínimo para HD y 25 Mbps para 4K Ultra HD y deporte a 60 FPS. Con fibra o un 5G estable va perfecto.',
    category: 'technical'
  },
  {
    id: 'faq4',
    question: '¿Qué es la tecnología Anti-Freeze?',
    answer: 'Nuestra tecnología Anti-Freeze v4.0 reparte la carga entre varios servidores regionales y cambia tu emisión en milisegundos si hay saturación: se acabaron los cortes en los partidos grandes.',
    category: 'technical'
  },
  {
    id: 'faq5',
    question: '¿Cómo se contrata y cuánto tarda el alta?',
    answer: 'Elige tu pack, la modalidad y cuántas pantallas quieres, y pulsa Contratar por WhatsApp. Recibes las credenciales en esa misma conversación, en 5 minutos de media.',
    category: 'general'
  },
  {
    id: 'faq6',
    question: '¿Puedo usar la suscripción en varias pantallas?',
    answer: 'Sí. Cada pack se elige según el número de pantallas, de 1 a 4 conexiones a la vez: salón, dormitorio y móvil al mismo tiempo. Selecciona cuántas quieres antes de contratar.',
    category: 'general'
  }
];

export const SUPPORTED_DEVICES: DeviceInfo[] = [
  {
    name: 'Smart TV (LG & Samsung)',
    iconName: 'Tv',
    description: 'Native app integration with Flix IPTV, Smart ONE, IB Player, or NET IPTV.',
    apps: ['Flix IPTV', 'IB Player Pro', 'Smart ONE', 'SET IPTV']
  },
  {
    name: 'Firestick & Android TV',
    iconName: 'Flame',
    description: 'High performance playback on Amazon Fire TV, Nvidia Shield, and Xiaomi Box.',
    apps: ['TiviMate 4K', 'IPTV Smarters Pro', 'XCIPTV', 'Ibo Player']
  },
  {
    name: 'Apple TV & iOS Devices',
    iconName: 'Apple',
    description: 'Crisp 4K HDR playback on Apple TV 4K, iPad, and iPhone.',
    apps: ['GSE Smart IPTV', 'IPTV Smarters', 'Smarters Player Lite']
  },
  {
    name: 'MAG & Formuler Boxes',
    iconName: 'Box',
    description: 'Portal URL support with MAC address line connection for hardware boxes.',
    apps: ['Stalker Portal', 'Formuler MyTVOnline 2/3', 'MAG Portal']
  },
  {
    name: 'PC & Mac Laptops',
    iconName: 'Monitor',
    description: 'Stream directly in Web Player, VLC, or dedicated Windows / MacOS software.',
    apps: ['VLC Media Player', 'SFVIP Player', 'Web Player Portal']
  }
];

/* ── Subscription packages ────────────────────────────────────────────────
   Ported from the beehoster project (bee wa3err/src/data/iptvData.ts):
   two tiers, four device counts, three durations. Prices are EUR, exactly as
   in the source — prices[tier][devices - 1]. */

export const PACKAGE_TIERS: PackageTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    headline: '¿Qué incluye el pack Basic?',
    features: [
      'Calidad SD / HD / Full HD',
      '+25.000 canales + Netflix',
      'La 1, Antena 3, Telecinco, laSexta, Movistar+, DAZN',
      '+140.000 películas y series',
      'Actualizaciones semanales',
      'Soporte 24 horas',
      '100 % anónimo',
      'Tecnología Anti-Freeze',
      'Todos los dispositivos',
      'Contenidos españoles exclusivos',
      'Netflix, Amazon, HBO, Apple TV, Hulu'
    ]
  },
  {
    id: 'vip',
    name: 'Premium VIP',
    headline: '¿Qué incluye el pack Premium VIP?',
    features: [
      'SD / HD / Full HD / 4K / 8K / HDR-VR',
      '+80.000 canales + Netflix',
      'La 1, Antena 3, Telecinco, laSexta, Movistar+, DAZN, LaLiga',
      '+200.000 películas y series',
      'Actualizaciones diarias',
      'Todos los eventos PPV',
      'Soporte VIP 24 horas',
      'Anti-Freeze PRO',
      'Asesor VIP personal',
      'Todos los dispositivos',
      'VPN incluida',
      'Contenidos VIP exclusivos',
      'Netflix, Amazon, HBO, Apple TV, Disney+'
    ]
  }
];

export const DURATION_PACKS: DurationPack[] = [
  {
    id: 'pack-3m',
    label: '3 meses',
    months: 3,
    savePercent: 30,
    prices: {
      basic: [24.99, 39.99, 49.99, 57.99],
      vip: [34.99, 49.99, 69.99, 89.99]
    }
  },
  {
    id: 'pack-6m',
    label: '6 meses',
    months: 6,
    savePercent: 40,
    prices: {
      basic: [34.99, 49.99, 69.99, 89.99],
      vip: [49.99, 79.99, 99.99, 139.99]
    }
  },
  {
    id: 'pack-15m',
    label: '12 + 3 meses',
    months: 15,
    bestDeal: true,
    savePercent: 50,
    prices: {
      basic: [49.0, 79.0, 109.0, 129.0],
      vip: [79.99, 124.99, 179.99, 199.99]
    }
  }
];

/* ── Live channel line-up ─────────────────────────────────────────────────
   Popular Spanish channels only: TDT, noticias, cine and deportes. */

export const CHANNEL_ITEMS: ChannelItem[] = [
  {
    id: 'ch-la1',
    name: 'La 1 HD',
    category: 'TDT',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'LA1',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Logo_La_1.svg/250px-Logo_La_1.svg.png'
  },
  {
    id: 'ch-la2',
    name: 'La 2 HD',
    category: 'TDT',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'LA2',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_La_2.svg/250px-Logo_La_2.svg.png'
  },
  {
    id: 'ch-antena3',
    name: 'Antena 3 HD',
    category: 'TDT',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'A3',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Logo_Antena_3_2025_%28Naranja%29.svg/250px-Logo_Antena_3_2025_%28Naranja%29.svg.png'
  },
  {
    id: 'ch-telecinco',
    name: 'Telecinco HD',
    category: 'TDT',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'T5',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Telecinco_2024_Logo.svg/250px-Telecinco_2024_Logo.svg.png'
  },
  {
    id: 'ch-cuatro',
    name: 'Cuatro HD',
    category: 'TDT',
    quality: 'FHD',
    flag: 'ES',
    logoText: '4',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cuatro_logo.svg/250px-Cuatro_logo.svg.png'
  },
  {
    id: 'ch-lasexta',
    name: 'laSexta HD',
    category: 'TDT',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'LA6',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/LaSexta_2024_Logo.svg/250px-LaSexta_2024_Logo.svg.png'
  },
  {
    id: 'ch-neox',
    name: 'Neox HD',
    category: 'TDT',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'NEOX',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Neox_2023_logo.svg/250px-Neox_2023_logo.svg.png'
  },
  {
    id: 'ch-nova',
    name: 'Nova HD',
    category: 'TDT',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'NOVA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nova.svg/250px-Nova.svg.png'
  },
  {
    id: 'ch-mega',
    name: 'Mega HD',
    category: 'TDT',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'MEGA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/MEGA.svg/250px-MEGA.svg.png'
  },
  {
    id: 'ch-atreseries',
    name: 'Atreseries HD',
    category: 'Series',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'ATRES',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Atreseries_2020_logo.svg/250px-Atreseries_2020_logo.svg.png'
  },
  {
    id: 'ch-fdf',
    name: 'FDF HD',
    category: 'Series',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'FDF',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Factor%C3%ADa_de_Ficci%C3%B3n.svg/250px-Factor%C3%ADa_de_Ficci%C3%B3n.svg.png'
  },
  {
    id: 'ch-energy',
    name: 'Energy HD',
    category: 'TDT',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'ENERGY',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Energy.svg/250px-Energy.svg.png'
  },
  {
    id: 'ch-divinity',
    name: 'Divinity HD',
    category: 'TDT',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'DIV',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Divinity_%282012%29.svg/250px-Divinity_%282012%29.svg.png'
  },
  {
    id: 'ch-boing',
    name: 'Boing HD',
    category: 'Infantil',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'BOING',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Boing_2020.svg/250px-Boing_2020.svg.png'
  },
  {
    id: 'ch-clan',
    name: 'Clan HD',
    category: 'Infantil',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'CLAN',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Clan_logo.svg/250px-Clan_logo.svg.png'
  },
  {
    id: 'ch-c24h',
    name: 'Canal 24 Horas HD',
    category: 'Noticias',
    quality: 'FHD',
    flag: 'ES',
    logoText: '24H',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Logo_Canal_24_horas.svg/250px-Logo_Canal_24_horas.svg.png'
  },
  {
    id: 'ch-tv3',
    name: 'TV3 HD',
    category: 'Autonómica',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'TV3',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TV3.svg/250px-TV3.svg.png'
  },
  {
    id: 'ch-canalsur',
    name: 'Canal Sur HD',
    category: 'Autonómica',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'CSUR',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Canal_Sur_Televisi%C3%B3n_2011-2017_logo.svg/250px-Canal_Sur_Televisi%C3%B3n_2011-2017_logo.svg.png'
  },
  {
    id: 'ch-telemadrid',
    name: 'Telemadrid HD',
    category: 'Autonómica',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'TM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Telemadrid-Logo.svg/250px-Telemadrid-Logo.svg.png'
  },
  {
    id: 'ch-laliga',
    name: 'LaLiga EA Sports 4K',
    category: 'Deportes',
    quality: '4K UHD',
    flag: 'ES',
    logoText: 'LALIGA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/LaLiga_2023_Horizontal_Logo.svg/250px-LaLiga_2023_Horizontal_Logo.svg.png'
  },
  {
    id: 'ch-movistarlaliga',
    name: 'Movistar LaLiga 4K',
    category: 'Deportes',
    quality: '4K UHD',
    flag: 'ES',
    logoText: 'M+ LIGA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Movistar_LaLiga.svg/250px-Movistar_LaLiga.svg.png'
  },
  {
    id: 'ch-movistarchampions',
    name: 'Liga de Campeones 4K',
    category: 'Deportes',
    quality: '4K UHD',
    flag: 'ES',
    logoText: 'M+ UCL',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Liga_de_Campeones_por_Movistar_Plus%2B_2022_logo.svg/250px-Liga_de_Campeones_por_Movistar_Plus%2B_2022_logo.svg.png'
  },
  {
    id: 'ch-movistardeportes',
    name: 'Movistar Deportes HD',
    category: 'Deportes',
    quality: 'FHD 60FPS',
    flag: 'ES',
    logoText: 'M+ DEP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Deportes_por_Movistar_Plus%2B_2022_logo.svg/250px-Deportes_por_Movistar_Plus%2B_2022_logo.svg.png'
  },
  {
    id: 'ch-dazn',
    name: 'DAZN 4K',
    category: 'Deportes',
    quality: '4K UHD',
    flag: 'ES',
    logoText: 'DAZN',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/DAZN_Logo_Master.svg/250px-DAZN_Logo_Master.svg.png'
  },
  {
    id: 'ch-teledeporte',
    name: 'Teledeporte HD',
    category: 'Deportes',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'TDP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Teledeporte.svg/250px-Teledeporte.svg.png'
  },
  {
    id: 'ch-movistarcine',
    name: 'Clásicos por Movistar+ HD',
    category: 'Cine',
    quality: 'FHD',
    flag: 'ES',
    logoText: 'M+ CINE',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Cl%C3%A1sicos_por_Movistar_Plus%2B_2022_logo.svg/250px-Cl%C3%A1sicos_por_Movistar_Plus%2B_2022_logo.svg.png'
  }
];
