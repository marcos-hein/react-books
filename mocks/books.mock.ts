import { Book } from '../src/redux/booksSlice';

export const BOOKS_MOCK: Book[] = [
  {
    id: 1,
    title: '1984',
    author: 'George Orwell',
    releaseYear: 1949,
    pageCount: 328,
    imageUrl: 'https://m.media-amazon.com/images/I/81QlFpAXS3L._SL1500_.jpg',
    rented: false,
    summary:
      '1984 é um romance distópico que descreve um futuro totalitário governado por um regime opressivo. George Orwell explora temas como vigilância, controle governamental e a manipulação da verdade.',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    releaseYear: 1960,
    pageCount: 281,
    imageUrl: 'https://m.media-amazon.com/images/I/71smIoGNeiL._SL1500_.jpg',
    rented: false,
    summary:
      'To Kill a Mockingbird é um clássico da literatura americana que aborda questões de racismo e injustiça em uma cidade do sul dos Estados Unidos durante a década de 1930. A história é contada pela perspectiva de uma criança, Scout Finch.',
  },
  {
    id: 3,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    releaseYear: 1925,
    pageCount: 180,
    imageUrl: 'https://m.media-amazon.com/images/I/71X7HnBk6VL._SL1500_.jpg',
    rented: false,
    summary:
      'The Great Gatsby é um retrato da decadência da sociedade americana nos anos 1920. F. Scott Fitzgerald explora temas como o sonho americano, riqueza e o vazio da busca por prazeres superficiais.',
  },
  {
    id: 4,
    title: 'Cem Anos de Solidão',
    author: 'Gabriel Garcia Marquez',
    releaseYear: 1967,
    pageCount: 417,
    imageUrl: 'https://m.media-amazon.com/images/I/71unfMNt5GL._SL1500_.jpg',
    rented: false,
    summary:
      'Cem Anos de Solidão é uma obra-prima do realismo mágico que narra a história da família Buendía em Macondo. Gabriel Garcia Marquez explora a cultura latino-americana, eventos místicos e a complexidade das relações familiares.',
  },
  {
    id: 5,
    title: 'The Catcher in the Ry',
    author: 'J.D. Salinger',
    releaseYear: 1951,
    pageCount: 277,
    imageUrl: 'https://m.media-amazon.com/images/I/71-gnsG9dVL._SY522_.jpg',
    rented: false,
    summary:
      'The Catcher in the Rye segue o adolescente Holden Caulfield enquanto ele navega pela cidade de Nova York. J.D. Salinger aborda temas como alienação, adolescência e a busca por autenticidade.',
  },
  {
    id: 6,
    title: 'O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    releaseYear: 1954,
    pageCount: 1178,
    imageUrl: 'https://m.media-amazon.com/images/I/91mMbE4XPkL._SL1500_.jpg',
    rented: false,
    summary:
      'O Senhor dos Anéis é uma epopeia fantástica que segue a jornada de Frodo Baggins para destruir o Um Anel. J.R.R. Tolkien cria um mundo rico com personagens memoráveis, explorando temas de amizade, coragem e poder.',
  },
  {
    id: 7,
    title: 'Orgulho e Preconceito',
    author: 'Jane Austen',
    releaseYear: 1813,
    pageCount: 279,
    imageUrl: 'https://m.media-amazon.com/images/I/81WK3PBySkL._SL1500_.jpg',
    rented: false,
    summary:
      'Orgulho e Preconceito é um romance clássico que satiriza a sociedade e os valores do início do século XIX na Inglaterra. Jane Austen cria uma história de amor entre Elizabeth Bennet e Mr. Darcy, explorando preconceitos sociais e individuais.',
  },
  {
    id: 8,
    title: 'O Hobbit',
    author: 'J.R.R. Tolkien',
    releaseYear: 1937,
    pageCount: 310,
    imageUrl: 'https://m.media-amazon.com/images/I/91zdxRRvabL._SL1500_.jpg',
    rented: false,
    summary:
      'O Hobbit é uma aventura que segue Bilbo Bolseiro em sua jornada para recuperar um tesouro guardado por um dragão. J.R.R. Tolkien cria um conto encantador, cheio de criaturas mágicas e heroísmo inesperado.',
  },
  {
    id: 9,
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J.K. Rowling',
    releaseYear: 1997,
    pageCount: 223,
    imageUrl: 'https://m.media-amazon.com/images/I/81m9fP+LIPL._SL1500_.jpg',
    rented: false,
    summary:
      'Harry Potter e a Pedra Filosofal é o início da saga que segue as aventuras do jovem bruxo Harry Potter. J.K. Rowling introduz os leitores ao mundo mágico de Hogwarts, explorando temas de amizade, coragem e o eterno conflito entre o bem e o mal.',
  },
  {
    id: 10,
    title: 'Jogos Vorazes',
    author: 'Suzanne Collins',
    releaseYear: 2008,
    pageCount: 374,
    imageUrl: 'https://m.media-amazon.com/images/I/81qPd0bhz0L._SL1500_.jpg',
    rented: false,
    summary:
      'Jogos Vorazes se passa em um futuro distópico onde jovens são selecionados para lutar até a morte em uma arena televisiva. Suzanne Collins aborda temas de opressão, resistência e as consequências da violência em massa.',
  },
];
