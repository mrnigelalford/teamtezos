import {
  faBalanceScaleRight,
  faCoins,
  faDatabase,
  faDonate,
  faGamepad,
  faGlasses,
  faHeart,
  faHouseDamage,
  faMoneyBillAlt,
  faPaw,
  faPeopleArrows,
  faPiggyBank,
  faRocket,
  faSchool,
  faUsers,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { faArtstation } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard, faIdBadge } from '@fortawesome/free-regular-svg-icons';

export interface Project {
  title?: string;
  categories: projectType[];
  date_added: Date;
  full_description?: string;
  short_description: string;
  img?: string;
  links: {
    twitter?: string;
    discord?: string;
    blog?: string;
    telegram?: string;
    github?: string;
    website?: string;
    youtube?: string;
    facebook?: string;
    stats?: string;
  };
  isFeatured: {
    home: boolean;
    ecosystem: boolean;
    categories: boolean;
    popular: boolean;
    promoted: boolean;
  };
}

enum projectType {
  game = 'Game',
  tools = 'Tools',
  developers = 'Developers',
  other = 'Other',
  nft = 'NFT',
  defi = 'DEFI',
  dao = 'DAO',
  dapp = 'dapp',
  exchange = 'Exchanges (DEX)',
  identity = 'Identity',
  community = 'Community',
  gaming = 'Gaming',
  insurance = 'Insurance',
  corporateBaker = 'Corporate Baker',
  token = 'Stablecoin',
  realEstate = 'Real Estate',
  wallet = 'Wallet',
  oracle = 'Oracle',
  data = 'Data',
  education = 'Education',
  launchpad = 'Launchpad',
  bakerTool = 'Baker Tool',
}

export const resetProjectData = () => projectCategories.forEach((cat) => (cat.projects = []));

export const projectCategories = [
  { name: projectType.nft, icon: faArtstation, projects: [] as Project[] },
  { name: projectType.defi, icon: faCoins, projects: [] as Project[] },
  { name: projectType.dapp, icon: faUsers, projects: [] as Project[] },
  { name: projectType.tools, icon: faBalanceScaleRight, projects: [] as Project[] },
  { name: projectType.developers, icon: faPaw, projects: [] as Project[] },
  { name: projectType.realEstate, icon: faHouseDamage, projects: [] as Project[] },
  { name: projectType.token, icon: faDonate, projects: [] as Project[] },
  { name: projectType.wallet, icon: faWallet, projects: [] as Project[] },
  { name: projectType.corporateBaker, icon: faSchool, projects: [] as Project[] },
  { name: projectType.dao, icon: faPeopleArrows, projects: [] as Project[] },
  { name: projectType.exchange, icon: faPiggyBank, projects: [] as Project[] },
  { name: projectType.identity, icon: faIdBadge, projects: [] as Project[] },
  { name: projectType.community, icon: faHeart, projects: [] as Project[] },
  { name: projectType.oracle, icon: faGlasses, projects: [] as Project[] },
  { name: projectType.data, icon: faDatabase, projects: [] as Project[] },
  { name: projectType.gaming, icon: faGamepad, projects: [] as Project[] },
  { name: projectType.education, icon: faMoneyBillAlt, projects: [] as Project[] },
  { name: projectType.insurance, icon: faCreditCard, projects: [] as Project[] },
  { name: projectType.launchpad, icon: faRocket, projects: [] as Project[] },
];

const tezosProjects: Project[] = [
  // TezDAO
  {
    title: 'TezDAO',
    short_description:
      'TezDAO is the Decentralized Autonomous Organisation empowering the community to propose and fund projects on Tezos.',
    full_description:
      'A truly decentralized autonomous organization, tezDAO was created and launched by members of the Tezos community for everyone to participate. Holders of $TezDAO tokens can submit proposals on the direction and development of the DAO as well as vote on the distribution of grants to ecosystem projects. Staking of $TezDAO and the provision of liquidity on Tezos based decentralized exchanges are incentivized with a total of 30% of the total token supply.',
    links: {
      website: 'https://tezdao.org/#',
      twitter: 'https://twitter.com/tezDAO',
      discord: 'https://discord.gg/7BYTYyZfdK',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('2019-10-01'),
    categories: [projectType.dao],
    img: 'https://tezdao.org/assets/images/tezoslogo3.png',
  },

  // FX Hash
  {
    title: 'FX Hash',
    short_description:
      'fxhash is an open platform to create and collect generative NFTs on the tezos blockchain',
    full_description:
      'A truly decentralized autonomous organization, tezDAO was created and launched by members of the Tezos community for everyone to participate. Holders of $TezDAO tokens can submit proposals on the direction and development of the DAO as well as vote on the distribution of grants to ecosystem projects. Staking of $TezDAO and the provision of liquidity on Tezos based decentralized exchanges are incentivized with a total of 30% of the total token supply.',
    links: {
      website: 'https://tezdao.org/#',
      twitter: 'https://twitter.com/tezDAO',
      discord: 'https://discord.gg/7BYTYyZfdK',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('2019-10-01'),
    categories: [projectType.dao],
    img: 'https://www.fxhash.xyz/favicon-32x32.png',
  },

  // Versum Official
  {
    title: 'Versum Official',
    short_description: 'Versum is an NFT platform and metaverse on the Tezos blockchain.',
    full_description:
      'Our primary focus is on the art, user experience, and scalability. First and foremost, we prioritize art. Our minimalistic UI was designed so that your eyes are drawn to the art — the platform is there, but you don’t see it.',
    links: {
      discord: 'https://discord.gg/xkf6TG7A2W',
      twitter: 'https://twitter.com/versumofficial',
      website: 'https://versum.xyz/',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('2019-10-01'),
    categories: [projectType.nft],
    img: 'https://cdn.dribbble.com/users/8635561/avatars/normal/1e471aef07f69f7e67c8ffc70bbfb016.png?1627250194',
  },

  // Stake Now
  {
    title: 'Stake Now',
    short_description: 'Versum is an NFT platform and metaverse on the Tezos blockchain.',
    full_description:
      'Our primary focus is on the art, user experience, and scalability. First and foremost, we prioritize art. Our minimalistic UI was designed so that your eyes are drawn to the art — the platform is there, but you don’t see it.',
    links: {
      discord: 'https://discord.gg/8JbQv6v5',
      twitter: 'https://twitter.com/StakeNow',
      website: 'https://stakenow.fi/',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('2019-10-01'),
    categories: [projectType.nft],
    img: 'https://pbs.twimg.com/profile_images/1163864924587790336/qwqKjlXq_400x400.jpg',
  },

  // Spicy Swap
  {
    title: 'Spicy Swap',
    short_description: 'Provide Liquidity, and Spice Farm!',
    full_description: 'SpicySwap is a next-generation DEX built by Genius Contracts ...',
    links: {
      twitter: 'https://twitter.com/SpicySwap',
      website: 'https://spicyswap.xyz',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('2019-10-01'),
    categories: [projectType.defi],
    img: 'https://spicyswap.xyz/assets/sswap-logo-LP.png',
  },
  // Instaraise
  {
    title: 'Instaraise',
    short_description:
      'Instaraise is building DeFi Universe on Tezos. We support projects to raise fund, build communities and turn their ideas into products.',
    full_description:
      'Instaraise is building DeFi Universe on Tezos. We support projects to raise fund, build communities and turn their ideas into products.',
    links: {
      telegram: 'http://telegram.me/Instaraise',
      twitter: 'https://twitter.com/Instaraise',
      website: 'https://instaraise.io',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('2019-10-01'),
    categories: [projectType.defi],
    img: 'https://www.instaraise.io/static/media/Logo_white.fe663a02.png',
  },

  // Tezos Domains
  {
    title: 'Tezos Domains',
    short_description: 'Friendly names on Tezos blockchain',
    full_description:
      "Tezos Domains is a distributed, open and extensible naming system using the Tezos blockchain. The main function is to translate a meaningful and user-friendly alias to it's corresponding Tezos address and vice versa. This translation is globally consistent so that all users see the same address for a given alias. Domains can be used to associate an address, share an avatar, publish contact information and more. Wallets and other projects in the ecosystem will let you use domain names directly instead of addresses and show domain names where Tezos addresses would be normally. The long term plan for Tezos Domains includes allowing websites to be built on Tezos Domains using decentralized content hosting like IPFS. This could serve as an alternative to traditional centralized solutions (i.e. DNS with centralized content hosting).",
    links: {
      website: 'https://tezos.domains/',
      twitter: 'https://twitter.com/tezosdomains',
      github: 'https://gitlab.com/tezos-domains',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('2019-10-01'),
    categories: [projectType.tools],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tezosdomains/tezosdomains_logo.png',
  },

  // 'Hic et Nunc'
  {
    title: 'Hic et Nunc',
    short_description: 'NFT marketplace',
    full_description:
      'The H=N platform combines the cost-effective utility working artists need and the eco-friendly characteristics they care about.',
    links: {
      website: 'https://www.hicetnunc.art/',
      twitter: 'https://twitter.com/hicetnunc2000',
      github: 'https://github.com/hicetnunc2000',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('01-01-2019'),
    categories: [projectType.nft],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/hen/hen_logo.jpg',
  },

  // 'AKA Swap'
  {
    title: 'akaSwap',
    short_description: 'A friendly, open and green NFT marketplace.',
    full_description:
      'We are committed to building a simple, friendly, and open green NFT trading platform for everyone to easily create, trade, appreciate, collect, and promote various NFT valuable assets from all over the world. \nakaSwap hopes to open a new source of income for artists and provide collectors with a place to store and trade artworks. Artists can auction their creations or sell them at a customized price. \n* We recommend using Google Chrome, Mozilla Firefox or Microsoft Edge for the best experience.',
    links: {
      website: 'https://www.akaswap.com/',
      twitter: 'https://twitter.com/AkaswapCom',
      github: 'https://github.com/akaSwap',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('01-01-2019'),
    categories: [projectType.nft],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/akaswap/akaswap_logo.jpg',
  },

  // 'Space Farm'
  {
    title: 'Space Farm',
    short_description: 'Token Farming platform',
    full_description:
      'Stake your FLAME tokens and LP liquidity tokens to earn FLAME in our farms. Use your referral link to boost your stack.',
    links: {
      website: 'https://flame.spacefarm.xyz/',
      twitter: 'https://twitter.com/FlameDeFi',
      blog: 'https://flamedefi.medium.com/',
      telegram: 'https://t.me/FLAMEtokenFarm',
    },
    isFeatured: {
      home: true,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date(''),
    categories: [projectType.defi],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/flame/flame_logo.jpg',
  },

  // Alien's Farm
  {
    title: "Alien's Farm",
    short_description: 'The first alien yield farm on Tezos',
    full_description:
      "Alien's Farm is an open-source platform with a couple of farming products on Tezos blockchain aimed to bring fresh financial abstractions to the network and open up new economic opportunities for community members who are eager for yield mechanics.",
    links: {
      website: 'https://aliens.farm/',
      twitter: 'https://twitter.com/tezaliensfarm',
      github: 'https://github.com/degentech/aliensfarm',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('01-01-2019'),
    categories: [projectType.defi],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/aliensfarm/aliensfarm_logo.png',
  },

  // FARM
  {
    title: 'FARM',
    short_description: 'FARMing and Rotational Airdrops',
    full_description:
      'FARM is a Tezos-based farming platform that uses staked SOIL token LP to generate FARM. FARM token is the utility token for the FARM platform. You can stake FARM LP on our website to qualify for airdrops of XTZ, Teztees, NFTs, and various other assets. You can also use FARM to farm Dos Esposas ingredients on Crunchy.network.',
    links: {
      website: 'https://farmsoil.xyz/farm',
    },
    isFeatured: {
      home: true,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('01-01-2019'),
    categories: [projectType.defi],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/farmsoil/farmsoil_logo.png',
  },

  // World War Tez
  {
    title: 'World War Tez',
    short_description: 'RPG where players battle each other',
    full_description:
      'An RPG-style dApp where players can power up, battle each other to conquer territories, earn bonuses from liquidity pool balances and equipment, and trade avatars with other players.',
    links: {
      website: 'https://www.worldwartez.com',
      telegram: 'https://t.me/gutsgaming',
      twitter: 'https://twitter.com/worldwartez',
      github: 'https://github.com/guts-gaming/world-war-tez',
    },
    isFeatured: {
      home: true,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('01-01-2019'),
    categories: [projectType.gaming],
    img: 'https://i1.wp.com/xtz.news/wp-content/uploads/2021/04/GUTS1.jpg?w=1500&ssl=1',
  },

  // Project Uanon
  {
    title: 'Project Uanon',
    short_description: 'The Truth as entertainment',
    full_description:
      "Project Uanon is a dystopian cyber adventure puzzle set in the near term future. It's the first game to use Zero Knowledge cryptographic proofs to grant and distribute rewards, and prove player progress and leaderboard point rankings. Players proceed through 6 stages of the game world, called “seasons”, competing for seasonal prizes and an overall prize awarded to the first player to correctly solve all 6 seasons. In this game world, mainstream media is rarely trusted and conspiracy theories abound. Certifiable truth comes at premium value, disseminated in the form of NFT tokens called Truth Shards.",
    links: {
      website: 'https://uanon.observer/',
      twitter: 'https://twitter.com/chainofinsight',
      github: 'https://github.com/Chain-of-Insight',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('01-01-2019'),
    categories: [projectType.gaming],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/uanon/uanon_logo.png',
  },

  // Bazaar
  {
    title: 'Bazaar',
    short_description: 'Carbon-Offset NFTs',
    full_description:
      'Bazaar Market is the first ever carbon-negative NFT Market, based on OpenMinter, an open source platform for making dApps on Tezos.',
    links: {
      website: 'https://bazaarnft.xyz/',
      twitter: 'https://twitter.com/BazaarNfts',
      github: 'https://github.com/BazaarMarket/Bazaar-Market',
      telegram: 'https://t.me/joinchat/L_izbzRXxLNhNTY5',
      discord: 'https://discord.gg/mnYZwv8s5a',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('01-01-2019'),
    categories: [projectType.nft],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/bazaar/bazaar_logo.png',
  },

  // Tezos Mandala
  {
    title: 'Tezos Mandala',
    short_description: 'Unique digital mandalas as NFTs',
    full_description:
      'Create your unique digital mandalas as NFTs. All mandalas are recorded in the Tezos blockchain. This makes them truly decentralized, and ever-lasting.',
    links: {
      website: 'https://tezos-mandala.art',
      telegram: 'https://t.me/buttonists',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('01-01-2019'),
    categories: [projectType.nft],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/mandala/mandala_logo.png',
  },

  // Golden Goals
  {
    title: 'Golden Goals',
    short_description: 'Football oriented NFT marketplace',
    full_description:
      "Golden Goals is the new virtual gallery for football clubs and fan art. We believe that football is an art. Thanks to Blockchain technology, you can build your very own virtual collection of football art. You can find exclusive content from clubs and artists that you'll be able to share and trade! Official clubs account will create content, and fans/artists are able to collect it or even create NFTs associated with their favorite team. Your collection is your emotions' museum.",
    links: {
      website: 'https://goldengoals.io/',
      twitter: 'https://twitter.com/goldengoals_io',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('01-01-2019'),
    categories: [projectType.gaming],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/goldengoals/goldengoals_logo.jpg',
  },

  // TzColors
  {
    title: 'TzColors',
    short_description: 'Unique colors as NFT tokens',
    full_description:
      'Get your hands on one of the 1690 unique NFT tzcolors tokens. Buy, Bid and Resell your Colors! Have fun and remeber, they are limited ;) Each color artwork is sold in an inital account. The inital account has a duration of 7 days. On completion, the highest bidder wins the color and can claim it. The reward of all initial accounts go to a specified address. An owner of a color artwork can create a new auction and specify the minimum bid amount and the auction duration. Each bid additionally extends the auction end time by 5 minutes. The highest bidder can claim the token and the previous owner can claim the reward.',
    links: {
      website: 'https://tzcolors.com/',
      twitter: 'https://twitter.com/tzcolors',
      github: 'https://github.com/tzcolors',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('01-01-2019'),
    categories: [projectType.gaming],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tzcolors/tzcolors_logo.png',
  },

  // Pixel Posh
  {
    title: 'Pixel Posh',
    short_description: '999 very fancy generative pixel art portraits.',
    full_description:
      'Pixel Posh is a series of 999 very fancy generative pixel art portraits, created by Lanton Mills. Each portrait is unique. There are 37 different species and thousands of possible clothing combinations.',
    links: {
      website: 'https://pixelpo.sh',
      twitter: 'https://twitter.com/pixelposhtez',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('01-01-2019'),
    categories: [projectType.gaming],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/pixelposh/pixelposh_logo.jpg',
  },

  // ByteBlock NFT
  {
    title: 'ByteBlock NFT',
    short_description: 'Empowering millions of artist through Tezos.',
    full_description:
      'byteblock.art is the first FA2 marketplace that is aiming to empower millions of artist. We are the first NFT platform on Tezos to launch NFT-as-a-Service (NaaS)',
    links: {
      website: 'https://byteblock.art/',
      twitter: 'https://twitter.com/ByteBlockNFT',
      telegram: 'https://t.me/ByteBlockNFT',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('01-01-2019'),
    categories: [projectType.gaming],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/uanon/uanon_logo.png',
  },

  // TZButton
  {
    title: 'TzButton',
    short_description: 'Tezos-blockchain based game',
    full_description:
      'The TzButton experiment is controlled by a smart contract deployed on the Tezos blockchain. Whenever anyone presses the button three things will happen:\n1. You will add 0.2 tez to the smart contract’s balance\n2. The address of the sender will become the leader\n3. The countdown is reset\n\nThe address that is the leader after the countdown expired will be eligible to withdraw the total balance on the smart contract.',
    links: {
      website: 'https://tzbutton.io/',
      telegram: 'https://t.me/AirGap',
      twitter: 'https://twitter.com/AirGap_it',
      github: 'https://github.com/airgap-it/airgap-wallet',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('01-01-2019'),
    categories: [projectType.gaming],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/uanon/uanon_logo.png',
  },
  // pixel potus
  {
    title: 'Pixel Potus',
    short_description: 'Digital collectable competition',
    full_description:
      'We hold these truths to be self-evident, that all NFTs are NOT created equal, that some are endowed by their Creator with certain unalienable rights, that among these are Life, Liberty and the pursuit of Pixelation.',
    links: {
      website: 'https://www.pixelpotus.com/',
      twitter: 'https://twitter.com/PixelPotus',
      telegram: 'https://t.me/joinchat/YTjc8t6oiahkMzMx',
      discord: 'https://discord.gg/CbdbvwtwkM',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('2019-10-01'),
    categories: [projectType.nft],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/pixelpotus/pixelpotus_logo.png',
  },

  // Tezotopia
  {
    title: 'Tezotopia',
    short_description: 'Virtual world with NFT yield farming',
    full_description:
      'Tezotopia is a Tezos-based Real-Time Strategy (RTS) gaming platform that allows players to acquire land (Tezotops), items and resources. Tezotops are yield farming NFTs. Buy, Sell, and Trade Digital Territories \u0026 Build Unique Virtual Assets in Tezotopia. Battle, earn, and win prizes such as Unobtanium.',
    links: {
      website: 'https://app.tezotopia.com/',
      twitter: 'https://twitter.com/gifdotgames',
      github: 'https://github.com/Gif-Games',
      telegram: 'https://t.me/gifgames',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('2019-10-01'),
    categories: [projectType.game],
    img: 'https://tezotop.io/wp-content/uploads/2021/03/tezotopia-logo.png',
  },

  // Crunchy
  {
    title: 'Crunchy network',
    short_description: 'DeFi-as-a-Service',
    full_description:
      'Crunchy provides DeFi services and solutions on Tezos to projects, developers, and end users. We like to think of ourselves as a DeFi-as-a-Service (DaaS) platform. Crunchy is maintained by independent developers and is governed by CrDAO holders.',
    links: {
      website: 'https://app.crunchy.network/',
      twitter: 'https://twitter.com/CrunchyTez',
      discord: 'https://discord.com/invite/99UnxxgB46',
      telegram: 'https://t.me/crunchy_network',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: true,
      promoted: true,
    },
    date_added: new Date('2019-10-01'),
    categories: [projectType.defi],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/crunchy/crunchy_logo.jpg',
  },

  // Wrap protocol
  {
    title: 'WRAP Protocol',
    short_description: 'Decentralized bridge between Ethereum and Tezos',
    full_description:
      'Through Wrap, users issue wTokens (wrapped tokens) which are representations of ERC20 and ERC721 tokens on the Tezos blockchain. wTokens can then be used on the Tezos blockchain, and their value is pegged to the original tokens. Wrap is a decentralized protocol, relying on a strong federation (the Signers Quorum) that guarantees the stability of the protocol, and a community of WRAP governance token holders.',
    links: {
      website: 'https://www.benderlabs.io/wrap',
      twitter: 'https://twitter.com/BenderLabs',
      telegram: 'https://t.me/BenderLabs',
      github: 'https://github.com/bender-labs',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: true,
    },
    date_added: new Date('2019-10-01'),
    categories: [projectType.token],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tzwrap/tzwrap_logo.png',
  },

  //lugh
  {
    title: 'lugh',
    categories: [projectType.defi],
    date_added: new Date('2022-01-01'),
    short_description: 'A Tezos-based protocol for the creation of liquid democracy',
    full_description:
      "Lugh's commitment is to provide a transparent, secured and stable digital asset : 1 EURL is always equal to 1 Euro. For this purpose, PwC issues a report on the number of EURL tokens issued and the balance of the associated bank account at Societe Generale. By CoinhouseHQ, Groupe_Casino & Nomdaic Labs",
    links: {
      twitter: 'https://twitter.com/LughStablecoin',
      discord: 'https://discord.gg/XufcBNu277',
      website: 'http://www.lugh.io/',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    img: 'https://tezosprojects.com/img/lugh.jpg',
  },
  // kolibri
  {
    categories: [projectType.defi],
    date_added: new Date('2022-01-01'),
    title: 'Kolibri',
    short_description:
      'An Tezos-based stablecoin built on Collateralized Debt Positions (CDPs) known as Ovens.',
    full_description:
      'Kolibri is an Tezos based stablecoin built on Collateralized Debt Positions (CDPs) known as Ovens. Kolibri uses CDPs to collateralize a soft pegged USD-stable value asset, kUSD. Data is provided via the Harbinger Price Feed via the Oracle contract.',
    links: {
      twitter: 'https://twitter.com/hovereng',
      discord: 'https://discord.gg/pCKVNTw6Pf',
      website: 'https://kolibri.finance',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    img: 'https://tezosprojects.com/img/Kolibri.jpg',
  },
  // Objkt
  {
    title: 'Objkt',
    categories: [projectType.nft],
    links: {
      twitter: 'https://twitter.com/objktcom',
      discord: 'https://discord.gg/m7YFqPvmj6',
      blog: undefined,
      telegram: undefined,
      github: '',
      website: 'https://objkt.com',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    date_added: new Date('2022-01-01'),
    full_description:
      'Buy and sell your NFTs on our marketplace or try out an English or a Dutch Auction.',
    short_description:
      'We want to enable price discovery and provide tools that make it easier for the community to buy and sell NFTs on Tezos.',
    img: 'https://s2.qwant.com/thumbr/400x400/5/a/f19f154034e138094bea7c0c3705abbbe1f76006ae5f8ee617170f868e1bf1/th.jpg?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JPh_wtgf0gREKNhmHN4jZwGQGQ%26pid%3DApi&q=0&b=1&p=0&a=0',
  },
  // Tezfin
  {
    title: 'Tezfin',
    categories: [projectType.defi],
    date_added: new Date('2022-01-01'),
    short_description: 'A Tezos-based protocol for the creation of liquid democracy',
    full_description:
      "Tezos Stable Technologies, Ltd. (aka 'StableTech') coordinates the building of stable, scalable, open-source, technologies for the advancement of open Tezos DeFi, and for the betterment of the Tezos ecosystem.",
    links: {
      twitter: 'https://twitter.com/TezosFinance',
      telegram: 'https://t.me/stabletz',
      website: 'https://tezos.finance/',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    img: 'https://tezosprojects.com/img/Tezfin.jpg',
  },
  // Youves
  {
    title: 'Youves',
    short_description: 'Synthetic assets management',
    full_description:
      'Youves is a decentralised, non-custodial and self-governed platform for the creation and management of synthetic assets. Minters of synthetic assets earn a passive income in YOU, the governance token on youves. YOU tokens are awarded to minters by the youves protocol in relation to their minted synthetic assets. YOU holders have voting rights and the possibility to stake YOU tokens and receive their share of the platform profits.',
    links: {
      twitter: 'https://twitter.com/youves_com',
      discord: 'https://discord.com/invite/2TGyP8UEJF',
      blog: 'https://medium.com/@youves',
      telegram: undefined,
      github: '',
      website: 'https://youves.com/',
    },
    isFeatured: {
      home: true,
      ecosystem: false,
      categories: false,
      popular: true,
      promoted: false,
    },
    categories: [projectType.token],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/youves/youves_logo.png',
    date_added: new Date('2022-01-01'),
  },
  // quipuswap
  {
    title: 'Quipuswap',
    categories: [projectType.defi],
    date_added: new Date('2022-01-01'),
    isFeatured: {
      ecosystem: true,
      home: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    short_description:
      'QuipuSwap is an Automated Market-Making (AMM) Decentralized Exchange (DEX) on the Tezos blockchain.',
    full_description:
      'QuipuSwap is an automated market-making (AMM) decentralized exchange (DEX) that allows for seamless swapping of Tezos-based tokens and XTZ. What this means is that you may add or trade any FA1.2 or FA2 standard assets without any limitations or restrictions.',
    links: {
      twitter: 'https://twitter.com/madfishofficial',
      discord: '',
      blog: undefined,
      telegram: undefined,
      github: '',
      website: 'https://quipuswap.com/',
    },
    img: 'https://quipuswap.com/img/logo.87f215cb.png',
  },

  // atomex
  {
    title: 'Atomex',
    short_description: 'Hybrid cross-chain exchange',
    date_added: new Date('2022-01-01'),
    full_description:
      'Atomex — is a non-custodial crypto wallet with a built in Atomic swap decentralized exchange (DEX). You can store, use and swap cryptocurrencies from a different blockchain like Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Tezos (XTZ), USDT (ERC20 token), tzBTC (Tezos wrapped Bitcoin token), TBTC and WBTC (Ethereum wrapped Bitcoin token) and other coins without intermediaries from your own HD wallet.',
    links: {
      twitter: 'https://twitter.com/atomex_official',
      telegram: 'https://t.me/atomex_official',
      blog: 'https://medium.com/@_MisterWalker_',
      website: 'https://atomex.me',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    categories: [projectType.exchange],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/atomex/atomex_logo.jpg',
  },

  // homebase
  {
    title: 'Homebase',
    categories: [projectType.dao],
    date_added: new Date('2022-01-01'),
    short_description: 'A DAO creation tool for the Tezos blockchain',
    full_description:
      'Homebase is a web application that enables users to create and manage/use DAOs on the Tezos blockchain. This application aims to help empower community members and developers to launch and participate in Tezos-based DAOs',
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    links: {
      twitter: 'https://twitter.com/homebase_io',
      discord: 'https://discord.gg/XufcBNu277',
      github: 'https://github.com/dOrgTech/homebase-app',
      website: 'https://tezos-homebase.io/',
    },
    img: 'https://tezos-homebase.io/static/media/homebase_logo.bd22e86f.svg',
  },

  // smartlink
  {
    title: 'Smartlink',
    categories: [projectType.defi],
    date_added: new Date('2022-01-01'),
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: false,
    },
    short_description: 'a decentralized escrow payment system for Web 3.0',
    full_description:
      'Smartlink introduces Trust-as-a-Service, providing a decentralized escrow payment system for Web 3.0. enabling users to buy and sell products and services using cryptocurrencies.',
    links: {
      twitter: 'https://twitter.com/hello_wakam',
      website: 'https://www.smartlink.so/',
    },
    img: 'https://tezosprojects.com/img/Smartlink.jpg',
  },

  // Staker DAO
  {
    title: 'StakerDAO',
    categories: [projectType.defi],
    date_added: new Date('2022-01-01'),
    short_description: 'Enabling the vibrant future of decentralized finance.community.',
    full_description:
      'StakerDAO is a governance protocol run by a community of blockchain and finance enthusiasts who make governance decisions for building cross-chain, decentralized financial assets in a compliant manner.',
    links: {
      twitter: 'https://twitter.com/stakerdao',
      telegram: 'https://t.me/stakercommunity',
      website: 'https://www.stakerdao.com/',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    img: 'https://www.stakerdao.com/webroot/images/stakerDAO-logo-white.svg',
  },

  // Exaion
  {
    categories: [projectType.corporateBaker],
    date_added: new Date('2022-01-01'),
    title: 'exaion',
    short_description: 'Tezos Corporate Baker',
    full_description:
      'Exaion, a subsidiary of the French multinational electric utility company EDF Group, will join the Tezos ecosystem as a corporate baker. The company aims to utilize distributed ledger technology to develop solutions to minimize the carbon footprint of its business and its customers.',
    img: 'https://exaion.edf.fr/sites/default/files/contrib/exaion/cp_exaion_tezos_logos.png',
    links: {
      website:
        'https://exaion.edf.fr/en/exaion/our-news/exaion-edf-group-subsidiary-becomes-a-tezos-baker',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
  },

  // societe-generale
  {
    title: 'Societe General',
    categories: [projectType.defi],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    date_added: new Date('2022-01-01'),
    short_description:
      'The Bank of France had selected Societe Generale - Forge as part of its call for applications to experiment with the use of Central Bank Digital Currency',
    full_description:
      'For a digital euro, the Bank of France had selected Societe Generale - Forge as part of its call for applications to experiment with the use of Central Bank Digital Currency. The experiment will explore the feasibility of financial securities being digitally settled and delivered in CBDC.',
    links: {
      website: 'https://www.societegenerale.com/',
      twitter: 'https://twitter.com/Sword_Group',
    },
    img: 'https://tezosprojects.com/img/Societe%20General.jpg',
  },

  // ETHTez
  {
    categories: [projectType.defi],
    date_added: new Date('2022-01-01'),
    title: 'ETHtez',
    short_description: 'Tezos-based ETH token',
    full_description:
      'ETHtz is a stablecoin from StableTez. StableTez (Tezos Stablecoins) is a family of stablecoins that run on the Tezos blockchain and adhere to the Tezos FA token standard, which is the universal Tezos token standard.',
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: false,
    },
    links: {
      website: 'https://ethtz.io/',
    },
    img: 'https://tezosprojects.com/img/ETHtez.jpg',
  },

  // sword group
  {
    title: 'Sword Group',
    categories: [projectType.corporateBaker],
    date_added: new Date('2022-01-01'),
    short_description: 'Sword Group is a corporate baker that runs on the Tezos blockchain',
    full_description:
      'Sword Blockchain Director comments "We are convinced that crypto-assets and particularly security tokens will have a major role to play in tomorrow\'s banking ecosystem. Becoming a corporate baker on Tezos is evidence of that conviction and represents a further step towards blockchain Community."',
    links: {
      website: 'https://www.sword-group.com/',
    },
    img: 'https://tezosprojects.com/img/Sword%20Group.jpg',
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: false,
    },
  },

  // Oropocket
  {
    title: 'OroPocket',
    categories: [projectType.defi],
    date_added: new Date('2022-01-01'),
    short_description: 'OroPocket is a decentralized exchange for Tezos',
    full_description:
      'Oropocket is 100% asset backed banking without the insidious, hidden charges and time consuming tedium that come with traditional banks. Invest into multiple asset classes, grow your wealth, enjoy 100% liquidity.',
    links: {
      twitter: 'https://twitter.com/oropocket',
    },
    img: 'https://tezosprojects.com/img/OroPocket.jpg',
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: false,
    },
  },

  // radion FM
  {
    categories: [projectType.dapp],
    date_added: new Date('2022-01-01'),
    title: 'RADION FM',
    short_description: 'RADION FM is a decentralized radio station',
    full_description:
      'Now talented musicians from all over the world will be able to upload their music and receive payment directly to their crypto wallets for every single download they have. A pure peer to peer experience thanks to blockchain technology.',
    img: 'https://tezosprojects.com/img/RADION%20FM.jpg',
    links: {
      twitter: 'https://twitter.com/homebase_io',
      telegram: 'https://t.me/radion_fm_community',
      youtube: 'https://www.radion.fm/#',
      discord: 'https://discord.gg/XufcBNu277',
      blog: undefined,
      website: 'https://www.radion.fm/',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: true,
      popular: false,
      promoted: false,
    },
  },

  // stableTez
  {
    title: 'StableTez',
    categories: [projectType.token],
    date_added: new Date('2022-01-01'),
    short_description:
      'Tezos DeFi Liquidity: stable, scalable, financial dApp programmable All Tezos stablecoins tokens are built to the Tezos FA token standard',
    full_description:
      'The SABZ token is an FA 2.0 governance token of the StableTez network and its DAO — that is, it is a parent token (and parent smart-contract via transfer hook permissioning instantiated under the FA 2.0 standard) for all stablecoins in the StableTez network past, present, and future (e.g. USDtz, BTCtz, ETHtz, LTCtz, EURtz, AUDtz, CADtz, NZDtz, CHFtz, GBPtz, JPYtz, GLDtz, SItz, PAtz, PLtz ...',
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    links: {
      website: 'https://stabletez.com/',
      twitter: 'https://twitter.com/stabletez',
      discord: 'https://t.me/stabletz',
    },
    img: 'https://tezosprojects.com/img/StableTez.jpg',
  },
  /// --------------------------------------------------
  // cricTez
  {
    categories: [projectType.nft],
    date_added: new Date('2022-01-01'),
    title: 'CricTez',
    short_description: 'CricTez is a non-fungible token-based fantasy sports dapp',
    full_description:
      'CricTez is a non-fungible token-based fantasy sports dapp, primarily focused on cricket (refer to the last section for more info on cricket). The core idea of dapp revolves around the representation of players/athletes as Non-Fungible Tokens(NFTs).',
    img: 'https://tezosprojects.com/img/CricTez.jpg',
    links: {
      twitter: 'https://twitter.com/crictez_io',
      discord: 'https://discord.gg/dHaBeKjEDj',
      blog: undefined,
      telegram: undefined,
      github: 'https://github.com/dOrgTech/homebase-app',
      website: 'https://crictez.io/',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
  },

  // Kalamint
  {
    title: 'Kalamint',
    date_added: new Date('2022-01-01'),
    short_description: 'Kalamint is a decentralized NFT exchange for Tezos',
    full_description: 'Create, sell and collect NFTs on Tezos with Kalamint',
    categories: [projectType.exchange],
    links: {
      website: 'https://kalamint.io/',
      blog: 'https://kalamint.medium.com/',
      twitter: 'https://twitter.com/kalamint_io',
    },
    isFeatured: {
      home: true,
      ecosystem: true,
      categories: false,
      popular: true,
      promoted: false,
    },
    img: 'https://kalamint.io/static/media/logo.2681f48f.svg',
  },
  // Werenode
  {
    title: 'Werenode',
    date_added: new Date('2022-01-01'),
    categories: [projectType.dapp],
    short_description:
      'Connect every charging equipement and allow anybody to share its own and be compensated seamlessly. Ready for your clean and sustainable mobility!',
    full_description:
      'An Electric Vehicle Charging Solution Built On Tezos, With Links To Renault, Nissan & Mitsubishi',
    links: {
      twitter: 'https://twitter.com/werenode',
      website: 'https://werenode.com/',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: true,
      promoted: false,
    },
    img: 'https://tezosprojects.com/img/Werenode.jpg',
  },

  // TzBTC
  {
    title: 'tzBTC',
    categories: [projectType.token],
    date_added: new Date('2022-01-01'),
    short_description:
      'tzBTC brings the liquidity and battle-tested brand of Bitcoin (BTC) into the Tezos ecosystem',
    full_description:
      'tzBTC brings the liquidity and battle-tested brand of Bitcoin (BTC) into the Tezos ecosystem, enabling BTC-backed use-cases on Tezos. Developers on Tezos can use tzBTC to enable novel financial applications on the Tezos blockchain.',
    links: {
      website: 'https://www.bitcoinassociation.ch/tzbtc',
      twitter: 'https://twitter.com/bitcoin_ch',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    img: 'https://tezosprojects.com/img/tzBTC.jpg',
  },

  // DAOBakery
  {
    title: 'DAOBaker',
    categories: [projectType.defi],
    date_added: new Date('2022-01-01'),
    short_description:
      'Yield Baker is an Automated Liquidity Protocol with a rebalancer instrument for tokenized staking',
    full_description:
      "Yield Baker is an Automated Liquidity Protocol with a rebalancer instrument for tokenized staked assets on Tezos (dXTZ, SLOT). It's a smart-contract driven protocol that allows users to deposit their staked XTZ (dXTZ) to earn a yield up to 25% APY by providing liquidity for SLOTs.",
    links: {
      website: 'https://www.bitcoinassociation.ch/tzbtc',
      twitter: 'https://twitter.com/bitcoin_ch',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    img: 'https://tezosprojects.com/img/DAOBaker.jpg',
  },

  // Tezos reward distributor
  {
    title: 'Tezos Reward Distributor',
    categories: [projectType.tools],
    date_added: new Date('2022-01-01'),
    short_description: 'TRD is a software for distributing staking rewards of Tezos delegators',
    full_description:
      'TRD is a software for distributing staking rewards of Tezos delegators, introduced in detail in its Medium article. This is not a script but a full scale application which can continuously run in the background as a Linux service.',
    links: {
      website: 'https://github.com/tezos-reward-distributor-organization/tezos-reward-distributor',
      github: 'https://github.com/tezos-reward-distributor-organization/tezos-reward-distributor',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    img: 'https://tezosprojects.com/img/Tezos%20Reward%20Distributor.jpg',
  },

  // Spruce ID
  {
    title: 'Spruceid',
    categories: [projectType.identity],
    date_added: new Date('2022-01-01'),
    short_description:
      'Everything you need for signing, sharing, and verifying trusted information.',
    full_description: 'Decentralized identity capabilities built using the latest W3C standards.',
    links: {
      website: 'https://spruceid.com/spruceid',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    img: 'https://tezosprojects.com/img/Decentralized%20Identity.jpg',
  },

  // kiln
  {
    title: 'Kiln',
    categories: [projectType.tools, projectType.bakerTool],
    date_added: new Date('2022-01-01'),
    short_description: 'Kiln is a tool for baking and monitoring on the Tezos network.',
    full_description:
      'Kiln is a tool for both baking and monitoring on the Tezos network. It provides a locally hosted graphical interface, binaries for tezos-client, tezos-node, tezos-baker, and tezos-endorser, and it builds a cache of chain data from the nodes to which it connects.',
    links: {
      github: 'https://gitlab.com/tezos-kiln/kiln',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    img: 'https://tezosprojects.com/img/Kiln.jpg',
  },

  // Tezos Agora
  {
    title: 'Tezos Agora',
    categories: [projectType.community],
    date_added: new Date('2022-01-01'),
    short_description: 'Tezos Agora is a community of Tezos users and developers.',
    full_description:
      'Tezos Agora Learn Learn about the Tezos amendment process Discuss Join the global conversation about current and future proposals to amend Tezos Get Started Resources to store, transact, bake, and build with Tezos TZIP Explore and discuss Tezos Improvement Proposals Wiki Tezos wiki Current Period Proposal 3 Days Remaining',
    links: {
      website: 'https://tezosagora.org/',
      twitter: 'https://twitter.com/TezosAgora',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    img: 'https://tezosprojects.com/img/Tezos%20Agora.jpg',
  },

  // Tezos Giganode
  {
    title: 'Tez Edge',
    categories: [projectType.tools],
    date_added: new Date('2022-01-01'),
    short_description: 'TezEdge is a Rust-based node for Tezos developed by Viable Systems',
    full_description:
      'We built a reliable, secure, fault-tolerant, robust and geographically distributed infrastructure that capable of processing most of the day-to-day operations on the Tezos network including the peak times at the beginning of each cycle.',
    links: {
      website: 'https://tezedge.com/#/monitoring',
      twitter: 'https://twitter.com/TezEdge',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    img: 'https://tezosprojects.com/img/Tezos%20Giga%20Node.jpg',
  },

  // Tezos StackExchange
  {
    title: 'Tezos Stackexchange',
    categories: [projectType.tools],
    date_added: new Date('2022-01-01'),
    short_description:
      'The Stackexchange for Tezos. All technical / development questions go in here.',
    img: 'https://tezosprojects.com/img/Tezos%20Stackexchange.jpg',
    links: {
      website: 'https://tezos.stackexchange.com/',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
  },

  // nautilus cloud
  {
    title: 'Nautilus Cloud',
    categories: [projectType.tools],
    date_added: new Date('2022-01-01'),
    short_description: 'A full suite of tools to develop and deploy Tezos applications',
    full_description:
      'Nautilus Cloud makes using blockchain and indexer nodes easier by providing cloud hosted Tezos and Conseil nodes. We provide infrastructure with rich queryable data so that you can get started quickly and focus on building out your ideas.',
    img: 'https://tezosprojects.com/img/Nautilus%20Cloud.jpg',
    links: {
      website: 'https://nautilus.cloud/',
      twitter: 'https://twitter.com/cryptonomictech',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
  },

  // Vertalo
  {
    categories: [projectType.dapp],
    date_added: new Date('2022-01-01'),
    title: 'Vertalo',
    short_description: 'Vertalo connects and enables the Digital Asset Ecosystem.',
    full_description:
      "Vertalo's platform technology helps track, manage, and support the complete life cycle of digital securities.” Jeff Sweeney, Chairman & CEO, US Capital Global “Vertalo is a clear leader in the race to digitize assets.",
    img: 'https://www.vertalo.com/assets/images/vertalo-logo-white.svg',
    links: {
      website: 'https://www.vertalo.com/',
      twitter: 'https://twitter.com/Vertalo_',
      blog: 'https://medium.com/@vertalo',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
  },

  // TzProfiles
  {
    title: 'Tezos Profiles',
    categories: [projectType.identity],
    date_added: new Date('2022-01-01'),
    short_description:
      'Tezos Profiles enables you to associate your online identity with your Tezos account.',
    full_description:
      'Tezos Profiles (TZP) is a web application where users can associate their public online identity based on social media profiles and self-attested information to their Tezos address.',
    img: 'https://twitter.com/tzProfiles',
    links: {
      website: 'https://tzprofiles.com/',
      discord: 'https://discord.gg/WjvuYqvm5Y',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
  },

  // Arronax
  {
    title: 'Arronax',
    categories: [projectType.tools],
    date_added: new Date('2022-01-01'),
    short_description: 'Interactive block explorer for Tezos built around Conseil.',
    img: 'https://tezosprojects.com/img/Arronax.jpg',
    links: {
      website: 'https://arronax.io/tezos/mainnet/blocks',
      twitter: 'https://twitter.com/CryptonomicTech',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
  },

  // Checker
  {
    title: 'Checker',
    date_added: new Date('2022-01-01'),
    categories: [projectType.dapp],
    short_description:
      'Checker is a generic piece of software for creating robocoins on the Tezos blockchain.',
    full_description:
      'Checker is a software project implementing financial logic designed to help stabilize the value of a cryptographic coin with respect to an externally provided index by Arthur Breitman (Founder of Tezos).',
    links: {
      website: 'https://checker.readthedocs.io/en/latest/',
      github: 'https://github.com/tezos-checker/checker',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      promoted: false,
      popular: false,
    },
    img: 'https://research-development.nomadic-labs.com/images/logo-nomadic-labs-header.png',
  },

  // imToken
  {
    title: 'imToken',
    categories: [projectType.wallet],
    date_added: new Date('2022-01-01'),
    short_description: 'imToken is an easy and secure digital wallet trusted by millions',
    img: 'https://token.im/img/imTokenLogo.svg',
    links: {
      website: 'https://token.im/',
      twitter: 'https://token.im/images/footer/twitter.svg',
      github: 'https://github.com/consenlabs',
      discord: 'https://discord.com/invite/fjX85Ww4Nw',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
  },

  // tezos israel
  {
    title: 'Tezos Israel',
    categories: [projectType.developers],
    date_added: new Date('2022-01-01'),
    short_description:
      'Tezos Israel is an innovation lab that serves the Israeli community in educating and training developers ',
    full_description:
      'Tezos Israel is an innovation lab that serves the Israeli community in educating and training developers while building advanced blockchain technologies for the Tezos ecosystem.',
    img: 'https://tezosprojects.com/img/Tezos%20Israel.jpg',
    links: {
      website: 'https://tezos.co.il',
      twitter: 'https://twitter.com/TezosIsrael',
      telegram: 'https://t.me/tezos_il',
      facebook: 'https://www.facebook.com/tezos.co.il/',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
  },

  // Morley
  {
    title: 'Morley',
    categories: [projectType.tools],
    date_added: new Date('2022-01-01'),
    short_description: 'Developer tools for the Michelson Language',
    img: 'https://tezosprojects.com/img/Morley.jpg',
    links: {
      website: 'https://wiki.tezosagora.org/learn/smartcontracts',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
  },

  // TezID
  {
    categories: [projectType.identity],
    date_added: new Date('2022-01-01'),
    title: 'TezID',
    short_description: 'TezID is an identity oracle for Tezos.',
    full_description:
      'TezID allows users to prove that they own certain digital property such as an email address, phone number, etc. And perhaps in the future a physical address and even government issued ID’s.',
    links: {
      website: 'https://tezid.net/',
      twitter: 'https://twitter.com/tezid_net',
    },
    img: 'https://tezid.net/logo-notext.svg',
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
  },

  // Tezos Ukraine
  {
    title: 'Tezos Ukraine',
    categories: [projectType.developers],
    links: {
      website: 'https://tezos.org.ua/en',
      twitter: 'https://twitter.com/TezosUkraine',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    date_added: new Date('2022-01-01'),
    short_description: 'Tezos Ukraine is a community of Tezos developers and enthusiasts.',
    full_description:
      'Tezos Ukraine is a non-profit organization run by Ukrainian blockchain enthusiasts and industry experts.',
    img: 'https://tezosprojects.com/img/Tezos%20Ukraine.jpg',
  },

  // kukai wallet
  {
    title: 'Kukai',
    categories: [projectType.wallet],
    short_description:
      'Manage your digital assets and seamlessly connect with experiences and apps on Tezos.',
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    links: {
      website: 'https://kukai.app/',
      twitter: 'https://twitter.com/KukaiWallet',
    },
    date_added: new Date('2022-01-01'),
    full_description:
      'A web based wallet for Tezos. Kukai can be run in the browser at kukai.app or as a standalone app.',
    img: 'https://tezosprojects.com/img/Tezos%20Snapshots.jpg',
  },

  // protofire
  {
    title: 'Protofire',
    categories: [projectType.developers],
    links: {
      website: 'https://protofire.io/',
      twitter: 'https://twitter.com/protofire',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    date_added: new Date('2022-01-01'),
    short_description: 'Protofire is a decentralized platform for blockchain-based applications.',
    full_description:
      'Protofire is a team of engineers, which helps decentralized protocols and developer platforms to accelerate growth of their ecosystems. By delivering hands-on coding and contributions, Protofire specializes in supercharging developer adoption and network usage.',
    img: 'https://tezosprojects.com/img/Protofire.jpg',
  },

  // Tezex
  {
    title: 'Tezex Bridge',
    categories: [projectType.exchange],
    links: {
      website: 'https://tezex.io',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    date_added: new Date('2022-01-01'),
    short_description: 'Decentralized ezchange for the Tezos blockchain.',
    full_description:
      'Non-profit organization aiming to promote new usage of technology for democracy and voting. Will organize a cross-university electoral vote in 2020 using a Tezos-based application',
    img: 'https://tezosprojects.com/img/Electis.jpg',
  },

  // TezBridge
  {
    categories: [projectType.tools],
    links: {
      website: 'https://www.tezbridge.com/',
      github: 'https://github.com/tezbridge',
      telegram: 'https://t.me/tezbridge',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    date_added: new Date('2022-01-01'),
    title: 'TezBridge',
    short_description: 'TezBridge is a connector between Tezos and DApps.',
    full_description:
      'TezBridge is a connector between Tezos and DApps. It works on both desktop and mobile devices and, furthermore, users can run DApp on device A and sign operations on device B under local area network.',
    img: 'https://tezosprojects.com/img/TezBridge.jpg',
  },

  // baking bad
  {
    title: 'Baking Bad',
    categories: [projectType.developers],
    date_added: new Date('2022-01-01'),
    short_description:
      'Our principles are to make everything as simple and convenient as possible to minimize the entry threshold for new users and increase the efficiency of the entire ecosystem.',
    full_description:
      'Baking Bad is a team of developers, crypto-enthusiasts and friends involved in the blockchain world since 2017 and lately most time in Tezos.',
    img: 'https://tezosprojects.com/img/Baking%20Bad.jpg',
    links: {
      website: 'https://baking-bad.org',
      twitter: 'https://twitter.com/TezosBakingBad',
      discord: 'https://discord.gg/aG8XKuwsQd',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
  },

  // Tezos Academy
  {
    title: 'Tezos Academy',
    categories: [projectType.education],
    links: {
      website: 'https://tezosacademy.io/',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    date_added: new Date('2022-01-01'),
    full_description:
      'Tezos Academy is a fun interactive tutorial to the LIGO language Choose your language Tezos Academy is compatible with PascaLIGO, CameLIGO and ReasonLIGO PascalLIGO PascaLIGO has a syntax close to Pascal, great for simplicity. START WITH PASCAL ReasonLIGO ReasonLIGO has a syntax close to ReasonML, for next level learning. START WITH REASON CameLIGO',
    short_description:
      'Learn to code Tezos Smart Contracts the easy way! Tezos academy is a fun interactive tutorial to the LIGO language.',
    img: 'https://tezosprojects.com/img/Tezos%20Academy.jpg',
  },

  // Cryptonomic
  {
    title: 'Cryptonomic',
    categories: [projectType.developers],
    date_added: new Date('2022-01-01'),
    full_description:
      'Cryptonomic is an NYC-based company committed to decentralization and digital sovereignty. We provide tools and smart contracts which enable higher level decentralized and consortium applications. By embracing all aspects of decentralized technology we are helping build the economy of the future.',
    short_description:
      'Cryptonomic is an NYC-based company committed to decentralization and digital sovereignty building several projects for Tezos.',
    img: 'https://cryptonomic.tech/img/logo.png',
    links: {
      website: 'https://cryptonomic.tech/',
      twitter: 'https://twitter.com/CryptonomicTech',
      github: 'https://github.com/Cryptonomic',
      blog: 'https://medium.com/the-cryptonomic-aperiodical',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
  },

  // developers --> hide this category
  {
    categories: [projectType.developers],
    links: {
      website: 'https://templewallet.com/',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    date_added: new Date('2022-01-01'),
    title: 'IMDEA',
    short_description: '',
    full_description:
      'The iMdea Software contributes to the core development of Tezos. iMdea has signed a collaboration agreement with the Tezos Foundation and Nomadic Labs.',
    img: 'https://tezosprojects.com/img/IMDEA.jpg',
  },

  // temple wallet
  {
    title: 'Temple Wallet',
    categories: [projectType.wallet],
    links: {
      website: 'https://templewallet.com/',
      twitter: 'https://twitter.com/madfishofficial',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    date_added: new Date('2022-01-01'),
    short_description: 'Decentralized ezchange for the Tezos blockchain.',
    full_description:
      'Temple Wallet is an open-source and easy-to-use browser extension wallet for interacting with the Tezos Ecosystem. Main advantages of the Temple Wallet: all information is stored only on your computer, the possibility to connect to Tezos Dapps, work with all FA 1.2 and FA 2 tokens, easy token delegation to bakers, multi-account support, regular ...',
    img: 'https://templewallet.com/icons/icon-48x48.png?v=b5d4e9f44419a7c6769d4b41fb450031',
  },

  // USDtez
  {
    title: 'USDtez',
    categories: [projectType.token],
    links: {
      website: 'https://usdtz.com/',
      twitter: 'https://twitter.com/usdtz',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    date_added: new Date('2022-01-01'),
    short_description:
      'FIAT-backed USD stablecoin on Tezos; Secure, audited, scalable, convertible, dApp programmable.',
    full_description:
      'USDtez (USDtz) is the first USD-pegged token and first FIAT-pegged token on Tezos. It is backed 1-1 with FIAT, keeping full and transparent reserves and enabling a secure, scalable, and [financial instrument] programmable source of liquidity.',
    img: 'https://tezosprojects.com/img/USDtez.jpg',
  },

  // Netezos
  {
    title: 'Netezos',
    categories: [projectType.tools],
    links: {
      website: 'https://netezos.dev/',
      github: 'https://github.com/baking-bad/netezos',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    short_description:
      'Netezos is a cross-platform Tezos SDK for .NET developers, simplifying the access and interaction with the Tezos blockchain.',
    date_added: new Date('2022-01-01'),
    full_description:
      'Netezos is a cross-platform Tezos SDK for .NET developers,simplifying interaction with the Tezos blockchain',
    img: 'https://tezosprojects.com/img/Netezos.jpg',
  },

  // stake fish
  {
    title: 'Stake Fish',
    categories: [projectType.tools],
    links: {
      website: 'https://tezos.fish/leaderboard',
      twitter: 'https://twitter.com/stakedotfish',
      telegram: 'https://t.me/stakefish',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    date_added: new Date('2022-01-01'),
    short_description:
      "Check how much of the total network's power has been delegated to your preferred validator",
    full_description:
      "Check how much of the total network's power has been delegated to your preferred validator, also known as a baker on Tezos. Show your support by joining your preferred validator’s social media channels and get more detailed information there.",
    img: 'https://tezosprojects.com/img/Baker%20Leaderboard.jpg',
  },

  // Tezos TAPS
  {
    title: 'Tezos TAPS',
    categories: [projectType.tools],
    links: {
      github: 'https://github.com/TezosRio/taps',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    date_added: new Date('2022-01-01'),
    short_description:
      'TAPS enables Tezos Bakers to automate rewards distribution with a web-page like interface.',
    full_description:
      'TAPS software (acronym for Tezos Automatic Paying System), a system created to allow bakers to automate their rewards distribution to their delegators',
    img: 'https://tezosprojects.com/img/Tezos%20TAPS.jpg',
  },

  // Taquito
  {
    title: 'Taquito',
    categories: [projectType.tools],
    links: {
      website: 'https://tezostaquito.io/',
      github: 'https://github.com/ecadlabs/taquito',
      twitter: 'https://twitter.com/TezosTaquito',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    date_added: new Date('2022-01-01'),
    short_description:
      'Taquito is a TypeScript library suite for development on the Tezos blockchain.',
    full_description:
      'Taquito A TypeScript library suite for development on the Tezos blockchain. Quick Start TypeDoc Reference Easy to Use Hit the ground running using: Taquitos Smart-Contract abstractions makes working with contracts feel like your working with plain old JavaScript objects. Portable',
    img: 'https://tezosprojects.com/img/Taquito.jpg',
  },

  // PyTezos
  {
    title: 'PyTezos',
    categories: [projectType.tools],
    links: {
      website: 'https://pytezos.org/',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    date_added: new Date('2022-01-01'),
    short_description: '',
    full_description:
      'PyTezos library is a Python toolset for Tezos blockchain, including work with keys, signatures, contracts, operations, RPC query builder, and a high-level interface for smart contract interaction.',
    img: 'https://pytezos.org/_static/img/pytezos.png',
  },
  // tezos notifier
  {
    title: 'Tezos Notifier',
    categories: [projectType.tools],
    links: {
      website: 'https://tzsnt.fr/',
      github: 'https://github.com/tnb-dev/TezosNotifierBot',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    date_added: new Date('2022-01-01'),
    short_description: 'Telegram Bot for Tezos Blockchain',
    full_description:
      'Tezos Notifier Bot notifies users about transactions and other events in the Tezos blockchain.',
    img: 'https://tezosprojects.com/img/Tezos%20Notifier.jpg',
  },

  // TZstats
  {
    title: 'Tzstats',
    categories: [projectType.tools],
    links: {
      twitter: 'https://twitter.com/tzstats',
      github: 'https://github.com/dOrgTech/homebase-app',
      website: 'https://tzstats.com/',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    date_added: new Date('2022-01-01'),
    short_description: 'Tezos Block Explorer. Powerful data API and advanced analytics. ',
    full_description:
      'A modern block explorer with advanced analytics for the Tezos blockchain providing insights into on-chain activity, staking, health, growth and governance.',
    img: 'https://pbs.twimg.com/profile_images/1292754365460164608/4XT7kZT6_400x400.jpg',
  },

  //better call dev
  {
    title: 'Better Call Dev',
    categories: [projectType.tools],
    date_added: new Date('2022-01-01'),
    short_description: 'Smart Contract Explorer by Baking Bad',
    full_description:
      'Better Call Dev — Tezos smart contract explorer by Baking Bad. Unique contracts. FA tokens. Contract calls. Synced. 1778. 12218. 41041583. a few seconds ago.',
    img: 'https://tezosprojects.com/img/Better%20Call%20Dev.jpg',
    links: {
      twitter: 'https://twitter.com/TezosBakingBad',
      telegram: 'tg://resolve?domain=baking_bad_chat',
      github: 'https://github.com/baking-bad',
      website: 'https://better-call.dev/',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
  },

  // Galleon waller
  {
    title: 'Galleon',
    categories: [projectType.wallet],
    date_added: new Date('2022-01-01'),
    short_description:
      'Galleon is a deployment of Tezori, an open source wallet framework for Tezos, supporting both software and hardware wallets',
    full_description:
      'Galleon is a software wallet for the Tezos blockchain. It is a deployment of Tezori (T2), an open source desktop wallet framework for Tezos, which runs on Cryptonomic infrastructure. Galleon for desktop supports hardware signing and is translated into eight languages with releases available for Mac, Windows and Linux.',
    links: {
      twitter: 'https://twitter.com/CryptonomicTech',
      discord: '',
      blog: undefined,
      telegram: undefined,
      github: '',
      website: 'https://cryptonomic.tech/galleon.html',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
    img: 'https://cryptonomic.tech/img/banner_logo.svg',
  },

  // TezDice
  {
    categories: [projectType.gaming],
    date_added: new Date('2022-01-01'),
    title: 'TezDice',
    short_description: '',
    full_description:
      'The first and only gambling website that supports Tezos. Join us for endless rewards possibilities!',
    img: 'https://tezosprojects.com/img/TezDice.jpg',
    links: {
      twitter: '',
      discord: '',
      blog: undefined,
      telegram: undefined,
      github: '',
      website: '',
    },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false,
    },
  },

  // ------------------------------------------------------------------
  // community section
  /*
  {
    title: 'Tezos Gulf',
    categories: [projectType.community],
    links: {
        website: '',
      },
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false
    },
    date_added: new Date('2022-01-01'),
    short_description: '',
    full_description:
      "Based in Dubai, Tezos Gulf Technologies' mission is to support the growth of the Tezos ecosystem in the Middle East.",
    img: 'https://tezosprojects.com/img/Tezos%20Gulf.jpg',
  },
  {
    categories: [projectType.developers],
    date_added: new Date('2022-01-01'),
    title: 'Smart Contract Labs',
    short_description: '',
    full_description:
      'Smart Contract Labs builds blockchain products on modern Proof-of-Stake platforms, like Tezos.',
    img: 'https://tezosprojects.com/img/Smart%20Contract%20Labs.jpg',
  },

  {
    categories: [projectType.community],
    date_added: new Date('2022-01-01'),
    title: 'Tezos Japan',
    short_description: '',
    full_description: 'Expand and empower the Tezos community in Japan.',com',
    img: 'https://tezosprojects.com/img/Tezos%20Japan.jpg',
  },
  {
    categories: [projectType.community],
    date_added: new Date('2022-01-01'),
    title: 'Tezos India Foundation',
    short_description: '',
    full_description: 'Dedicated to Growing the Tezos Community in India.',
    img: 'https://tezosprojects.com/img/Tezos%20India%20Foundation.jpg',
  },
  {
    categories: [projectType.community],
    date_added: new Date('2022-01-01'),
    title: 'Tezos Southeast Asia',
    short_description: '',
    full_description:
      'Independent non-profit association run and fully led by locals from Singapore, complemented by established industry veterans who provide strategic advice and oversight.',
    img: 'https://tezosprojects.com/img/Tezos%20Southeast%20Asia.jpg',
  },
    {
    categories: [projectType.community],
    date_added: new Date('2022-01-01'),
    title: 'Tezos Foundation',
    full_description:
      'The Tezos Foundation stands as part of the community in support of the Tezos protocol and ecosystem. Goal: 1,000 New Tezos Developers in 2019',
    img: 'https://tezosprojects.com/img/Tezos%20Foundation.jpg',
  },
  {
    categories: [projectType.developers],
    date_added: new Date('2022-01-01'),
    title: 'Tezos Commons Foundation',
    full_description:
      'The mission of Tezos Commons Foundation is to foster the growth of the global Tezos ecosystem through the identification, funding and execution of projects that drive community growth, awareness and success.',
    img: 'https://tezosprojects.com/img/Tezos%20Commons%20Foundation.jpg',
  },
  {
    categories: [projectType.developers],
    date_added: new Date('2022-01-01'),
    title: 'Nomadic Labs',
    full_description:
      'We research and develop products and services in various domains of computer science, namely distributed, decentralized, and formally verified systems.',
    img: 'https://tezosprojects.com/img/Nomadic%20Labs.jpg',
  },
  {
    categories: [projectType.community],
    date_added: new Date('2022-01-01'),
    title: 'Tezos Korea',
    full_description: 'Expand and empower the Tezos community in Korea',
    img: 'https://tezosprojects.com/img/Tezos%20Korea.jpg',
  },
  {
    categories: [projectType.developers],
    date_added: new Date('2022-01-01'),
    title: 'TQ Tezos',
    full_description:
      'The Tocqueville Group (TQ) works to advance the Tezos ecosystem by creating open source software and other public goods, providing support to projects and companies building on Tezos, and connecting the global Tezos community.',
    img: 'https://tezosprojects.com/img/TQ%20Tezos.jpg',
  },

  {
    categories: [projectType.tools],
    date_added: new Date('2022-01-01'),
    title: 'The Michelson Language',
    short_description: '',
    full_description:
      'Michelson is the domain-specific language used to write smart contracts on the Tezos blockchain.',
    img: 'https://tezosprojects.com/img/The%20Michelson%20Language.jpg',
    links: [{
      twitter: '',
      discord: '',
      blog: undefined,
      telegram: undefined,
      github: '',
      website: ''
    }],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false
    },
  },


  {
    title: 'ConseilJS by Cryptonomic',
    categories: [projectType.developers],
    date_added: new Date('2022-01-01'),
    short_description: '',
    full_description:
      'A full-fledge dApp development framework in TypeScript. This library can be used for React and web development. It contains a broad range of functionality, from the an interface to the Conseil indexing service to Tezos node interactions, and hardware wallet support.',
    img: 'https://tezosprojects.com/img/ConseilJS%20by%20Cryptonomic.jpg',
    links: [{
      twitter: '',
      discord: '',
      blog: undefined,
      telegram: undefined,
      github: '',
      website: ''
    }],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
      popular: false,
      promoted: false
    },
  },
  */
  // ------------------------------------------------------------------
];

export default tezosProjects;
