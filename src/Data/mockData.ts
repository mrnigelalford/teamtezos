const imgUrl =
  'https://github.com/mrnigelalford/foliomark/blob/38baee707d6f50b321de110f67ea1e850e977b7c/public/img';

const mockDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const fullDescription =
  'Cosby sweater iphone artisan, squid trust fund photo booth twee blog shoreditch single-origin coffee aesthetic jean shorts messenger bag brooklyn butcher. Iphone fap banksy next level put a bird on it, letterpress photo booth thundercats biodiesel fanny pack etsy banh mi wayfarers. Sustainable four loko dreamcatcher, vegan single-origin coffee yr cardigan biodiesel williamsburg thundercats salvia master cleanse terry richardson tumblr mcsweeney’s. Lomo gluten-free salvia you probably haven’t heard of them portland. Mlkshk jean shorts carles, etsy artisan farm-to-table sartorial williamsburg marfa PBR leggings trust fund. Mcsweeney’s banh mi lo-fi mustache, fixie cosby sweater tumblr twee fanny pack. Thundercats food truck vegan, hoodie irony artisan beard synth.';

export const mockCollection = [
  {
    id: 'abc123',
    collectionImg: `${imgUrl}/collections/coll-1.jpg?raw=true`,
    authorImg: `${imgUrl}/author/author-1.jpg?raw=true`,
    authorId: 'author-1',
    title: 'Abstractions',
    description: mockDescription,
    isVerified: false,
    fullDescription,
  },
  {
    id: 'abc124',
    collectionImg: `${imgUrl}/collections/coll-2.jpg?raw=true`,
    authorImg: `${imgUrl}/author/author-2.jpg?raw=true`,
    authorId: 'author-1',
    title: 'Patternlicious',
    description: mockDescription,
    isVerified: true,
    fullDescription,
  },
  {
    id: 'abc125',
    collectionImg: `${imgUrl}/collections/coll-3.jpg?raw=true`,
    authorImg: `${imgUrl}/author/author-3.jpg?raw=true`,
    authorId: 'author-2',
    title: 'Skecthify',
    description: mockDescription,
    isVerified: false,
    fullDescription,
  },
  {
    id: 'abc126',
    collectionImg: `${imgUrl}/collections/coll-4.jpg?raw=true`,
    authorImg: `${imgUrl}/author/author-4.jpg?raw=true`,
    authorId: 'author-3',
    title: 'Cartoonism',
    description: mockDescription,
    isVerified: false,
    fullDescription,
  },
];
