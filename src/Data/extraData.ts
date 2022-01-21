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
import { ProjectData } from './data';
import { projectType } from '../Project/projectType.type';

export const projectCategories = [
  { type: 'NFT', icon: faArtstation, projects: [] as ProjectData[] },
  { type: 'DEFI', icon: faCoins, projects: [] as ProjectData[] },
  { type: 'Dapp', icon: faUsers, projects: [] as ProjectData[] },
  { type: 'Tools', icon: faBalanceScaleRight, projects: [] as ProjectData[] },
  { type: 'Developers', icon: faPaw, projects: [] as ProjectData[] },
  { type: 'Real-estate', icon: faHouseDamage, projects: [] as ProjectData[] },
  { type: 'Stablecoin', icon: faDonate, projects: [] as ProjectData[] },
  { type: 'Wallet', icon: faWallet, projects: [] as ProjectData[] },
  { type: 'Corporate Baker', icon: faSchool, projects: [] as ProjectData[] },
  { type: 'DAO', icon: faPeopleArrows, projects: [] as ProjectData[] },
  { type: 'Exchanges (DEX)', icon: faPiggyBank, projects: [] as ProjectData[] },
  { type: 'Identity', icon: faIdBadge, projects: [] as ProjectData[] },
  { type: 'Community', icon: faHeart, projects: [] as ProjectData[] },
  { type: 'Oracle', icon: faGlasses, projects: [] as ProjectData[] },
  { type: 'Data', icon: faDatabase, projects: [] as ProjectData[] },
  { type: 'Gaming', icon: faGamepad, projects: [] as ProjectData[] },
  { type: 'Education', icon: faMoneyBillAlt, projects: [] as ProjectData[] },
  { type: 'Insurance', icon: faCreditCard, projects: [] as ProjectData[] },
  { type: 'Launchpad', icon: faRocket, projects: [] as ProjectData[] },
];

interface projectDataModel {
  title: string;
  categories: projectType[];
  date_added: Date;
  full_description?: string;
  short_description: string;
  img: string;
  links: [
    {
      twitter?: string;
      discord?: string;
      blog?: string;
      telegram?: string;
      github?: string;
      website?: string;
      youtube?: string;
    }
  ];
  isFeatured: {
    home: boolean;
    ecosystem: boolean;
    categories: boolean;
    popular: boolean;
    promoted: boolean;
  };
}

/* 

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

*/

const extraData = [
  {
    title: 'WRAP Protocol',
    short_description: 'Decentralized bridge between Ethereum and Tezos',
    full_description:
      'Through Wrap, users issue wTokens (wrapped tokens) which are representations of ERC20 and ERC721 tokens on the Tezos blockchain. wTokens can then be used on the Tezos blockchain, and their value is pegged to the original tokens. Wrap is a decentralized protocol, relying on a strong federation (the Signers Quorum) that guarantees the stability of the protocol, and a community of WRAP governance token holders.',
    website_link: 'https://www.benderlabs.io/wrap',
    authors: ['Bender Labs'],
    social_links: [
      'https://twitter.com/BenderLabs',
      'https://t.me/benderlabs',
      'https://github.com/bender-labs',
    ],
    interfaces: ['FA2'],
    categories: ['Token', 'Wrapped'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tzwrap/tzwrap_logo.png',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tzwrap/tzwrap_cover.png',
    promoted: true,
    date_added: 'today',
  },
  {
    title: 'Youves',
    short_description: 'Synthetic assets management',
    full_description:
      'Youves is a decentralised, non-custodial and self-governed platform for the creation and management of synthetic assets. Minters of synthetic assets earn a passive income in YOU, the governance token on youves. YOU tokens are awarded to minters by the youves protocol in relation to their minted synthetic assets. YOU holders have voting rights and the possibility to stake YOU tokens and receive their share of the platform profits.',
    website_link: 'https://youves.com/',
    authors: ['Ubinetic'],
    social_links: [
      'https://twitter.com/youves_com',
      'https://discord.com/invite/2TGyP8UEJF',
      'https://medium.com/@youves',
    ],
    interfaces: ['FA2'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['Token', 'Stable'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/youves/youves_logo.png',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/youves/youves_cover.png',
    date_added: 'today',
  },
  {
    title: 'Atomex',
    short_description: 'Hybrid cross-chain exchange',
    full_description:
      'Atomex — is a non-custodial crypto wallet with a built in Atomic swap decentralized exchange (DEX). You can store, use and swap cryptocurrencies from a different blockchain like Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Tezos (XTZ), USDT (ERC20 token), tzBTC (Tezos wrapped Bitcoin token), TBTC and WBTC (Ethereum wrapped Bitcoin token) and other coins without intermediaries from your own HD wallet.',
    website_link: 'https://atomex.me',
    authors: ['Baking Bad'],
    social_links: [
      'https://twitter.com/atomex_official',
      'https://medium.com/@_MisterWalker_',
      'https://www.youtube.com/channel/UCg-jUk-6MVEMSZ4Qhfrt40Q',
      'https://t.me/atomex_official',
    ],
    interfaces: undefined,
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['DEX', 'Cross-chain'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/atomex/atomex_logo.jpg',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/atomex/atomex_cover.jpg',
    screenshots: [
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/atomex/atomex_screen_1.png',
      },
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/atomex/atomex_screen_2.png',
      },
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/atomex/atomex_screen_3.png',
      },
      {
        type: 'mobile',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/atomex/atomex_mobile_1.jpg',
      },
      {
        type: 'mobile',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/atomex/atomex_mobile_2.jpg',
      },
      {
        type: 'mobile',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/atomex/atomex_mobile_3.jpg',
      },
      {
        type: 'mobile',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/atomex/atomex_mobile_4.jpg',
      },
      {
        type: 'mobile',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/atomex/atomex_mobile_5.jpg',
      },
      {
        type: 'mobile',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/atomex/atomex_mobile_6.jpg',
      },
    ],
    date_added: 'today',
  },
  {
    title: 'QuipuSwap',
    short_description: 'A decentralized exchange on Tezos',
    full_description:
      'QuipuSwap is an open-source protocol that provides an interface for the seamless decentralized exchange of Tezos-based Tokens and XTZ. Using the advantages of Tezos protocol such as liquid XTZ delegation, liquidity providers earn both from swap fees and bakers rewards.',
    website_link: 'https://quipuswap.com/',
    authors: ['Madfish Solutions'],
    social_links: [
      'https://twitter.com/madfishofficial',
      'https://www.reddit.com/r/MadFishCommunity',
      'https://t.me/MadFishCommunity',
      'https://discord.com/invite/qFRZ8kVzkv',
    ],
    interfaces: ['FA1.2', 'FA2'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['DEX'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/quipuswap/quipuswap_logo.jpg',
    cover:
      'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/quipuswap/quipuswap_cover.png',
    date_added: 'today',
  },
  {
    title: 'tzBTC',
    short_description: 'Wrapped Bitcoin',
    full_description:
      'tzBTC brings the liquidity and battle-tested brand of Bitcoin (BTC) into the Tezos ecosystem, enabling BTC-backed use-cases on Tezos. Developers on Tezos can use tzBTC to enable novel financial applications on the Tezos blockchain. Usable In Tezos Smart Contracts As an asset on Tezos, tzBTC enables Tezos-based applications to use BTC with the full expressivity of Tezos smart contracts. tzBTC is implemented using the FA 1.2 asset standard on Tezos. No single-point-of-failure. The tzBTC system divides governance among a group of Keyholders. Keyholders can access via multi-signature wallets the underlying Bitcoin and oversee supply management by minting and burning the corresponding tzBTC. Gatekeepers interact directly with End-Users and ensure compliance with KYC \u0026 AML documentation.',
    website_link: 'https://tzbtc.io/',
    authors: ['Bitcoin Association Switzerland'],
    social_links: undefined,
    interfaces: ['FA1.2'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['Token', 'Wrapped'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tzbtc/tzbtc_logo.jpg',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tzbtc/tzbtc_cover.jpg',
    date_added: 'today',
  },
  {
    title: 'Plenty DeFi',
    short_description: 'Sustainable yield farming',
    full_description:
      'Plenty is a decentralized yield farm. The primary goal of Plenty is to bring more liquidity into the Tezos ecosytem. Plenty is incentivizing liquidity providers of other blockchains to bridge their assets to Tezos.',
    website_link: 'https://www.plentydefi.com/',
    authors: ['Tezsure', 'DGH'],
    social_links: [
      'https://twitter.com/plentydefi',
      'https://t.me/PlentyDeFi',
      'https://medium.com/plenty-defi',
      'https://discord.gg/Ph9GWPNRbv',
      'https://github.com/orgs/Plenty-DeFi/',
    ],
    interfaces: ['TZIP-7', 'TZIP-16'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['Farming', 'Token'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/plenty/plenty_logo.png',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/plenty/plenty_cover.png',
    date_added: 'today',
  },
  {
    title: 'objkt.com',
    short_description: 'The largest NFT marketplace on Tezos.',
    full_description:
      'objkt.com is the first FA2 marketplace that aggregates tokens across contracts and provides a cohesive user interface to interact with and trade multimedia NFTs.',
    website_link: 'https://objkt.com',
    authors: ['objkt.com'],
    social_links: ['https://twitter.com/objktcom'],
    interfaces: undefined,
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['NFT', 'Marketplace'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/objkt/objkt_logo.png',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/objkt/objkt_cover.png',
    screenshots: [
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/objkt/objkt_screen_1.png',
      },
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/objkt/objkt_screen_2.png',
      },
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/objkt/objkt_screen_3.png',
      },
    ],
    date_added: 'today',
  },
  {
    title: 'Hic et nunc',
    short_description: 'NFT marketplace',
    full_description:
      'The H=N platform combines the cost-effective utility working artists need and the eco-friendly characteristics they care about.',
    website_link: 'https://www.hicetnunc.art/',
    authors: [],
    social_links: ['https://twitter.com/hicetnunc2000', 'https://github.com/hicetnunc2000'],
    interfaces: ['FA2'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['NFT', 'Token'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/hen/hen_logo.jpg',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/hen/hen_cover.jpg',
    date_added: 'today',
  },
  {
    title: 'Kolibri',
    short_description: 'Algorithmic stablecoin',
    full_description:
      'Kolibri is an Tezos based stablecoin built on Collateralized Debt Positions (CDPs) known as Ovens. Kolibri uses CDPs to collateralize a soft pegged USD-stable value asset, kUSD. Data is provided via the Harbinger Price Feed via the Oracle contract',
    website_link: 'https://kolibri.finance/',
    authors: ['Hover Labs'],
    social_links: ['https://twitter.com/HoverEng', 'https://hover.engineering/'],
    interfaces: ['FA1.2'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['Token', 'Stable'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/kolibri/kolibri_logo.png',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/kolibri/kolibri_cover.png',
    date_added: 'today',
  },
  {
    title: 'Tezos Domains',
    short_description: 'Friendly names on Tezos blockchain',
    full_description:
      "Tezos Domains is a distributed, open and extensible naming system using the Tezos blockchain. The main function is to translate a meaningful and user-friendly alias to it's corresponding Tezos address and vice versa. This translation is globally consistent so that all users see the same address for a given alias. Domains can be used to associate an address, share an avatar, publish contact information and more. Wallets and other projects in the ecosystem will let you use domain names directly instead of addresses and show domain names where Tezos addresses would be normally. The long term plan for Tezos Domains includes allowing websites to be built on Tezos Domains using decentralized content hosting like IPFS. This could serve as an alternative to traditional centralized solutions (i.e. DNS with centralized content hosting).",
    website_link: 'https://tezos.domains/',
    authors: ['Agile Ventures'],
    social_links: [
      'https://t.me/tezosdomains',
      'https://twitter.com/tezosdomains',
      'https://gitlab.com/tezos-domains',
    ],
    interfaces: ['TZIP-12'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['NFT'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tezosdomains/tezosdomains_logo.png',
    cover:
      'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tezosdomains/tezosdomains_cover.png',
    date_added: 'today',
  },
  {
    title: 'Kalamint',
    short_description: 'NFT marketplace focused on the future',
    full_description:
      'We are an NFT marketplace focused on moving into the future of NFTs and staying true to blockchain technology. We are building our platform around the artist and not the other way around and are building strategic partnerships to help us achieve these goals. Kalamint hopes to be the bridge between other platforms, different mediums, and the real world and make NFTs so readily available that they become main stream without people knowing.',
    website_link: 'https://www.kalamint.io',
    authors: ['21 Chain Labs Limited'],
    social_links: [
      'https://t.me/kalamint',
      'https://www.instagram.com/kalamint_io/',
      'https://twitter.com/kalamint_io',
      'https://www.youtube.com/channel/UCqqC7-KBJiAFfwECX2ZXAHA',
    ],
    interfaces: ['TZIP-12'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['NFT', 'Marketplace'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/kalamint/kalamint_logo.png',
    cover:
      'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/kalamint/kalamint_cover.jpg',
    screenshots: [
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/kalamint/kalamint_desktop.png',
      },
    ],
    date_added: 'today',
  },
  {
    title: 'Pixel Potus',
    short_description: 'Digital collectable competition',
    full_description:
      'We hold these truths to be self-evident, that all NFTs are NOT created equal, that some are endowed by their Creator with certain unalienable rights, that among these are Life, Liberty and the pursuit of Pixelation.',
    website_link: 'https://www.pixelpotus.com/',
    authors: [],
    social_links: [
      'https://twitter.com/PixelPotus',
      'https://t.me/joinchat/YTjc8t6oiahkMzMx',
      'https://discord.gg/CbdbvwtwkM',
    ],
    interfaces: ['TZIP-12'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['NFT'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/pixelpotus/pixelpotus_logo.png',
    cover:
      'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/pixelpotus/pixelpotus_cover.jpg',
    date_added: 'today',
  },
  {
    title: 'Crunchy network',
    short_description: 'DeFi-as-a-Service',
    full_description:
      'Crunchy provides DeFi services and solutions on Tezos to projects, developers, and end users. We like to think of ourselves as a DeFi-as-a-Service (DaaS) platform. Crunchy is maintained by independent developers and is governed by CrDAO holders.',
    website_link: 'https://app.crunchy.network/',
    authors: [],
    social_links: [
      'https://t.me/crunchy_network',
      'https://twitter.com/CrunchyTez',
      'https://discord.com/invite/99UnxxgB46',
    ],
    interfaces: [],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['Farming'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/crunchy/crunchy_logo.jpg',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/crunchy/crunchy_cover.png',
    date_added: 'today',
  },
  {
    title: 'ETHtez',
    short_description: 'ETH-wrapped token',
    full_description:
      'ETHtez (ETHtz) is Ethereum currency, Ether (ETH), wrapped in a Tezos FA-standard token, enabling users to interact with a Tezos token that is priced to the value as ETH, yet without its high gas prices. Unlike interacting directly with ETH, which can incur massive gas fees, ETHtz users can enjoy the low-cost gas-efficiency of the Tezos network.',
    website_link: 'https://ethtz.io',
    authors: ['Tezos Stable Technologies Ltd'],
    social_links: [
      'https://twitter.com/ETH_Tez',
      'https://github.com/StableTechnologies/ETHtz',
      'https://www.reddit.com/r/ETHtz/',
      'https://t.me/ETHtz',
    ],
    interfaces: ['FA1.2'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['Token', 'Stable'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/ethtz/ethtz_logo.png',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/ethtz/ethtz_cover.png',
    date_added: 'today',
  },
  {
    title: 'Tezotopia',
    short_description: 'Virtual world with NFT yield farming',
    full_description:
      'Tezotopia is a Tezos-based Real-Time Strategy (RTS) gaming platform that allows players to acquire land (Tezotops), items and resources. Tezotops are yield farming NFTs. Buy, Sell, and Trade Digital Territories \u0026 Build Unique Virtual Assets in Tezotopia. Battle, earn, and win prizes such as Unobtanium.',
    website_link: 'https://app.tezotopia.com/',
    authors: ['Gif.games'],
    social_links: [
      'https://t.me/gifgames',
      'https://www.instagram.com/gifdotgames/',
      'https://twitter.com/gifdotgames',
      'https://github.com/Gif-Games',
    ],
    interfaces: ['TZIP-12', 'TZIP-16', 'TZIP-21'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['NFT', 'Marketplace', 'Gaming'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tezotopia/tezotopia_logo.png',
    cover:
      'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tezotopia/tezotopia_cover.png',
    screenshots: [
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tezotopia/tezotopia_desktop_1.jpg',
      },
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tezotopia/tezotopia_desktop_2.png',
      },
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tezotopia/tezotopia_desktop_3.png',
      },
    ],
    date_added: 'today',
  },
  {
    title: 'StakerDAO',
    short_description: 'A platform for governing financial assets',
    full_description:
      'The StakerDAO community builds and manages products for on-chain governance, cross-chain synthetics, and tokenized real-world assets. StakerDAO is a new kind of organization: it is both a corporation – Staker Services Ltd based in the Cayman Islands – and a decentralized autonomous organization (DAO). The STKR equity token is built on the FA 1.x token standard on Tezos. Actions taken by StakerDAO are transparent and managed on the Tezos blockchain. Everyone can see the results of every proposal that is submitted and every vote the StakerDAO Council makes. The five members of the StakerDAO Council are elected annually through a Tezos on-chain vote of STKR token holders.',
    website_link: 'https://stakerdao.com/',
    authors: ['Staker Services Ltd'],
    social_links: [
      'https://twitter.com/stakerdao',
      'https://t.me/stakercommunity',
      'https://linkedin.com/company/stakerdao',
    ],
    interfaces: ['FA1'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['DAO', 'Token'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/stakerdao/stakerdao_logo.jpg',
    cover:
      'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/stakerdao/stakerdao_cover.png',
    screenshots: [
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/stakerdao/stakerdao_screen_1.png',
      },
    ],
    date_added: 'today',
  },
  {
    title: 'akaSwap',
    short_description: 'A friendly, open and green NFT marketplace.',
    full_description:
      'We are committed to building a simple, friendly, and open green NFT trading platform for everyone to easily create, trade, appreciate, collect, and promote various NFT valuable assets from all over the world. \nakaSwap hopes to open a new source of income for artists and provide collectors with a place to store and trade artworks. Artists can auction their creations or sell them at a customized price. \n* We recommend using Google Chrome, Mozilla Firefox or Microsoft Edge for the best experience.',
    website_link: 'https://www.akaswap.com/',
    authors: [],
    social_links: [
      'https://www.instagram.com/akaswap_com/',
      'https://twitter.com/AkaswapCom',
      'https://github.com/akaSwap',
    ],
    interfaces: ['TZIP-12'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['NFT', 'Marketplace'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/akaswap/akaswap_logo.jpg',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/akaswap/akaswap_cover.jpg',
    screenshots: [
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/akaswap/akaswap_screen_1.jpg',
      },
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/akaswap/akaswap_screen_2.jpg',
      },
      {
        type: 'mobile',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/akaswap/akaswap_mobile_1.jpg',
      },
      {
        type: 'mobile',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/akaswap/akaswap_mobile_2.jpg',
      },
    ],
    date_added: 'today',
  },
  {
    title: 'Space Farm',
    short_description: 'Token farming platform',
    full_description:
      'Stake your FLAME tokens and LP liquidity tokens to earn FLAME in our farms. Use your referral link to boost your stack.',
    website_link: 'https://flame.spacefarm.xyz/',
    authors: ['Flame DeFi'],
    social_links: [
      'https://t.me/FLAMEtokenFarm',
      'https://twitter.com/FlameDeFi',
      'https://discord.com/invite/cz4zXp7Rsh',
      'https://flamedefi.medium.com/',
    ],
    interfaces: ['TZIP-12'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['Farming'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/flame/flame_logo.jpg',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/flame/flame_cover.jpg',
    date_added: 'today',
  },
  {
    title: 'USDtez',
    short_description: 'Hard-backed USD stablecoin',
    full_description:
      'USDtez (USDtz) is the first USD stablecoin on Tezos. USDtez is fully-backed 1-1 by FIAT,  and built to the Tezos FA token standard, providing a solvent, scalable, and financial DApp programmable source of liquidity for low-fee Tezos-based asset trading. The USDtez Reserve is regularly audited but also viewable in real time by users. Its collateral is diversified amongst multiple and strictly regulated FIAT-backed assets, further strengthening its 1-1 parity with the United States Dollar (USD).',
    website_link: 'https://usdtz.com/',
    authors: ['Tezos Stable Technologies Ltd'],
    social_links: [
      'https://twitter.com/usdtz',
      'https://github.com/usdtz',
      'https://www.reddit.com/r/USDTZ/',
      'https://t.me/USDtezos',
    ],
    interfaces: ['FA1.2'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['Token', 'Stable'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/usdtz/usdtz_logo.jpg',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/usdtz/usdtz_cover.png',
    date_added: 'today',
  },
  {
    title: "Alien's Farm",
    short_description: 'The first alien yield farm on Tezos',
    full_description:
      "Alien's Farm is an open-source platform with a couple of farming products on Tezos blockchain aimed to bring fresh financial abstractions to the network and open up new economic opportunities for community members who are eager for yield mechanics.",
    website_link: 'https://aliens.farm/',
    authors: ['Degen Tech'],
    social_links: [
      'https://t.me/aliensfarm',
      'https://twitter.com/tezaliensfarm',
      'https://github.com/degentech/aliensfarm',
    ],
    interfaces: ['TZIP-12'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['Farming'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/aliensfarm/aliensfarm_logo.png',
    cover:
      'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/aliensfarm/aliensfarm_cover.png',
    screenshots: [
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/aliensfarm/aliensfarm_desktop.png',
      },
    ],
    date_added: 'today',
  },
  {
    title: 'FARM',
    short_description: 'FARMing and Rotational Airdrops',
    full_description:
      'FARM is a Tezos-based farming platform that uses staked SOIL token LP to generate FARM. FARM token is the utility token for the FARM platform. You can stake FARM LP on our website to qualify for airdrops of XTZ, Teztees, NFTs, and various other assets. You can also use FARM to farm Dos Esposas ingredients on Crunchy.network.',
    website_link: 'https://farmsoil.xyz/farm',
    authors: ['The FARM Team'],
    social_links: ['https://t.co/5ngoDYoIe9?amp=1', 'https://twitter.com/farmsomesoil'],
    interfaces: ['TZIP-12'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['Farming'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/farmsoil/farmsoil_logo.png',
    cover:
      'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/farmsoil/farmsoil_cover.png',
    date_added: 'today',
  },
  {
    title: 'Werenode',
    short_description: 'Share your own EV charging station',
    full_description:
      'Thanks to Tezos distributed ledger technologies, everybody will be able to be compensated seamlessly for the shared use of his personal charging station. Connect instantly to any EV supply equipment with your phone, just plug and charge. Ready for your clean and sustainable mobility!',
    website_link: 'https://werenode.com',
    authors: [],
    social_links: [
      'https://twitter.com/werenode',
      'https://youtu.be/Bqemw8UWK3Q',
      'https://github.com/Werenode',
      'https://www.linkedin.com/company/werenode/',
    ],
    interfaces: ['TZIP-7'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['Token'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/werenode/werenode_logo.png',
    cover:
      'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/werenode/werenode_cover.png',
    date_added: 'today',
  },
  {
    title: 'World War Tez',
    short_description: 'RPG where players battle each other',
    full_description:
      'An RPG-style dApp where players can power up, battle each other to conquer territories, earn bonuses from liquidity pool balances and equipment, and trade avatars with other players.',
    website_link: 'https://www.worldwartez.com',
    authors: ['Guts Gaming'],
    social_links: [
      'https://t.me/gutsgaming',
      'https://twitter.com/worldwartez',
      'https://github.com/guts-gaming/world-war-tez',
    ],
    interfaces: ['TZIP-12'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['Token', 'Gaming'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/worldwartez/worldwartez_logo.png',
    cover:
      'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/worldwartez/worldwartez_cover.png',
    date_added: 'today',
  },
  {
    title: 'Project Uanon',
    short_description: 'The Truth as entertainment',
    full_description:
      "Project Uanon is a dystopian cyber adventure puzzle set in the near term future. It's the first game to use Zero Knowledge cryptographic proofs to grant and distribute rewards, and prove player progress and leaderboard point rankings. Players proceed through 6 stages of the game world, called “seasons”, competing for seasonal prizes and an overall prize awarded to the first player to correctly solve all 6 seasons. In this game world, mainstream media is rarely trusted and conspiracy theories abound. Certifiable truth comes at premium value, disseminated in the form of NFT tokens called Truth Shards.",
    website_link: 'https://uanon.observer/',
    authors: ['Chain of Insight'],
    social_links: [
      'https://twitter.com/chainofinsight',
      'https://www.youtube.com/channel/UCQzxdYYHdF9bmGcElZtUcEg',
      'https://github.com/Chain-of-Insight',
      'https://www.reddit.com/user/chainofinsight',
      'https://www.linkedin.com/company/chain-of-insight',
    ],
    interfaces: ['TZIP-12'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['NFT'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/uanon/uanon_logo.png',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/uanon/uanon_cover.jpg',
    screenshots: [
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/uanon/uanon_desktop_1.png',
      },
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/uanon/uanon_desktop_2.png',
      },
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/uanon/uanon_desktop_3.png',
      },
      {
        type: 'mobile',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/uanon/uanon_mobile_1.jpg',
      },
      {
        type: 'mobile',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/uanon/uanon_mobile_2.jpg',
      },
      {
        type: 'mobile',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/uanon/uanon_mobile_3.jpg',
      },
    ],
    date_added: 'today',
  },
  {
    title: 'Bazaar',
    short_description: 'Carbon-Offset NFTs',
    full_description:
      'Bazaar Market is the first ever carbon-negative NFT Market, based on OpenMinter, an open source platform for making dApps on Tezos.',
    website_link: 'https://bazaarnft.xyz/',
    authors: [],
    social_links: [
      'https://twitter.com/BazaarNfts',
      'https://github.com/BazaarMarket/Bazaar-Market',
      'https://t.me/joinchat/L_izbzRXxLNhNTY5',
      'https://discord.gg/mnYZwv8s5a',
    ],
    interfaces: ['TZIP-12'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['NFT', 'Marketplace', 'Token'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/bazaar/bazaar_logo.png',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/bazaar/bazaar_cover.png',
    date_added: 'today',
  },
  {
    title: 'Tezos Mandala',
    short_description: 'Unique digital mandalas as NFTs',
    full_description:
      'Create your unique digital mandalas as NFTs. All mandalas are recorded in the Tezos blockchain. This makes them truly decentralized, and ever-lasting.',
    website_link: 'https://tezos-mandala.art',
    authors: ['The Buttonists'],
    social_links: ['https://t.me/buttonists'],
    interfaces: ['TZIP-12'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['NFT', 'Marketplace'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/mandala/mandala_logo.png',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/mandala/mandala_cover.png',
    date_added: 'today',
  },
  {
    title: 'TEZEX Bridge',
    short_description: 'Inter-chain token swaps',
    full_description:
      'TEZEX is a Tezos liquidity exchange expanding liquidity flow via inter-chain and intra-chain token trading. TEZEX Bridge enables cross-chain token swaps between Tezos tokens and tokens of other blockchains like Ethereum — that is, Ethereum ERC-standard tokens (e.g. ERC-20) can be swapped for Tezos FA-standard tokens (e.g. FA-1.2, FA-2.0).',
    website_link: 'https://tezex.io/',
    authors: ['Tezos Stable Technologies Ltd'],
    social_links: [
      'https://t.me/tezexofficial',
      'https://github.com/StableTechnologies/TEZEX',
      'https://www.reddit.com/r/tezosexchange/',
    ],
    interfaces: [],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['DEX', 'Cross-chain'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tezex/tezex_logo.png',
    cover: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tezex/tezex_cover.png',
    date_added: 'today',
  },
  {
    title: 'Golden Goals',
    short_description: 'Football oriented NFT marketplace',
    full_description:
      "Golden Goals is the new virtual gallery for football clubs and fan art. We believe that football is an art. Thanks to Blockchain technology, you can build your very own virtual collection of football art. You can find exclusive content from clubs and artists that you'll be able to share and trade! Official clubs account will create content, and fans/artists are able to collect it or even create NFTs associated with their favorite team. Your collection is your emotions' museum.",
    website_link: 'https://www.goldengoals.io/',
    authors: ['EuraNov'],
    social_links: [
      'https://twitter.com/goldengoals_io',
      'https://www.instagram.com/goldengoals.io/',
      'https://www.linkedin.com/company/golden-goals-io/',
    ],
    interfaces: ['TZIP-12'],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['NFT', 'Marketplace'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/goldengoals/goldengoals_logo.jpg',
    cover:
      'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/goldengoals/goldengoals_cover.png',
    date_added: 'today',
  },
  {
    title: 'TzColors',
    short_description: 'Unique colors as NFT tokens',
    full_description:
      'Get your hands on one of the 1690 unique NFT tzcolors tokens. Buy, Bid and Resell your Colors! Have fun and remeber, they are limited ;) Each color artwork is sold in an inital account. The inital account has a duration of 7 days. On completion, the highest bidder wins the color and can claim it. The reward of all initial accounts go to a specified address. An owner of a color artwork can create a new auction and specify the minimum bid amount and the auction duration. Each bid additionally extends the auction end time by 5 minutes. The highest bidder can claim the token and the previous owner can claim the reward.',
    website_link: 'https://www.tzcolors.io/',
    authors: ['AirGap'],
    social_links: [
      'https://t.me/AirGap',
      'https://www.instagram.com/airgap.it/',
      'https://twitter.com/tzcolors',
      'https://www.youtube.com/channel/UCV2_m3sCXtxLeRWrQo8uvxg',
      'https://github.com/tzcolors',
    ],
    interfaces: [],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['NFT', 'Marketplace'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tzcolors/tzcolors_logo.png',
    cover:
      'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tzcolors/tzcolors_cover.png',
    date_added: 'today',
  },
  {
    title: 'Pixel Posh',
    short_description: '999 very fancy generative pixel art portraits.',
    full_description:
      'Pixel Posh is a series of 999 very fancy generative pixel art portraits, created by Lanton Mills. Each portrait is unique. There are 37 different species and thousands of possible clothing combinations.',
    website_link: 'https://pixelpo.sh',
    authors: [],
    social_links: ['https://twitter.com/pixelposhtez'],
    interfaces: undefined,
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['NFT', 'Marketplace'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/pixelposh/pixelposh_logo.jpg',
    cover:
      'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/pixelposh/pixelposh_cover.jpg',
    screenshots: [
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/pixelposh/pixelposh_screen_1.jpg',
      },
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/pixelposh/pixelposh_screen_2.jpg',
      },
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/pixelposh/pixelposh_screen_3.jpg',
      },
      {
        type: 'mobile',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/pixelposh/pixelposh_mobile_1.jpg',
      },
      {
        type: 'mobile',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/pixelposh/pixelposh_mobile_2.jpg',
      },
      {
        type: 'mobile',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/pixelposh/pixelposh_mobile_3.jpg',
      },
    ],
    date_added: 'today',
  },
  {
    title: 'ByteBlock NFT',
    short_description: 'Empowering millions of artist through Tezos.',
    full_description:
      'byteblock.art is the first FA2 marketplace that is aiming to empower millions of artist. We are the first NFT platform on Tezos to launch NFT-as-a-Service (NaaS)',
    website_link: 'https://byteblock.art/',
    authors: ['Block and Byte Technologies'],
    social_links: [
      'https://twitter.com/ByteBlockNFT',
      'https://t.me/ByteBlockNFT',
      'https://www.instagram.com/byte.blocknft/',
      'https://www.youtube.com/channel/UCUH-7UlKvbRK4oF_-oiH18w',
    ],
    interfaces: undefined,
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['NFT', 'Marketplace'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/byteblock/byteblock_logo.jpg',
    cover:
      'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/byteblock/byteblock_cover.jpg',
    screenshots: [
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/byteblock/byteblock_screen_1.jpg',
      },
      {
        type: 'mobile',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/byteblock/byteblock_mobile_1.jpg',
      },
    ],
    date_added: 'today',
  },
  {
    title: 'TzButton',
    short_description: 'Tezos-blockchain based game',
    full_description:
      'The TzButton experiment is controlled by a smart contract deployed on the Tezos blockchain. Whenever anyone presses the button three things will happen:\n1. You will add 0.2 tez to the smart contract’s balance\n2. The address of the sender will become the leader\n3. The countdown is reset\n\nThe address that is the leader after the countdown expired will be eligible to withdraw the total balance on the smart contract.',
    website_link: 'https://tzbutton.io/',
    authors: ['AirGap'],
    social_links: [
      'https://t.me/AirGap',
      'https://www.instagram.com/airgap.it/',
      'https://twitter.com/AirGap_it',
      'https://www.youtube.com/channel/UCV2_m3sCXtxLeRWrQo8uvxg',
      'https://github.com/airgap-it/airgap-wallet',
      'https://www.reddit.com/r/AirGap',
    ],
    interfaces: [],
    isFeatured: {
      home: false,
      ecosystem: false,
      categories: false,
    },
    categories: ['Game', 'Social'],
    img: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tzbutton/tzbutton_logo.png',
    cover:
      'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tzbutton/tzbutton_cover.png',
    screenshots: [
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tzbutton/tzbutton_screen_1.png',
      },
      {
        type: 'desktop',
        link: 'https://bcd-static-assets.fra1.digitaloceanspaces.com/dapps/tzbutton/tzbutton_screen_2.png',
      },
    ],
  },
];

export default extraData;
