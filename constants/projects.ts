export const allProjects: any[] = [
  {
    _id: "string",
    _raw: {},
    type: "Project",
    published: false,
    winner: false,
    winnerTitle: "",
    post: "",
    title: "zkCreditScore",
    skills: ["zk SNARK", "Noir", "Vite", "jsqr"],
    description:
      "zkCreditScore is a DApp which is built during the Circuit Breaker Hackathon by ETH Global where you can prove your credit worthiness using zk proofs. The prrofs are generated using the SNARK mechanism.",
    date: "2024-02-18T00:00:00.000Z",
    url: "zk-credit-score.vercel.app/",
    repository: "0xAlphaDevs/zkCreditScore",
    body: { code: "" },
    path: "string",
    slug: "01",
  },
  {
    _id: "string",
    _raw: {},
    type: "Project",
    published: false,
    winner: false,
    winnerTitle: "",
    post: "",
    title: "SovID",
    skills: ["EVM", "ERC 721", "Wagmi", "Material Tailwind"],
    description:
      "sovID is a EVM based decentralised credential management protocol built using soul bound tokens (SBTs). We have leveraged solidity smart contracts to mint digital identities and credentials as non-transferable NFTs (SBTs).",
    date: "2024-01-31T00:00:00.000Z",
    url: "https://sov-id.vercel.app/",
    repository: "0xAlphaDevs/SovID",
    body: { code: "" },
    path: "string",
    slug: "02",
  },
  {
    _id: "string",
    _raw: {},
    type: "Project",
    published: false,
    winner: true,
    winnerTitle: "LFGHO | ETH Gobal",
    post: "https://ethglobal.com/showcase/dework-cqc5h",
    title: "DeWork",
    skills: ["DeFi | Stablecoin", "Radix UI", "Next.js 14", "Wagmi"],
    description:
      "DeWork is a decentralized freelancing platform connecting businesses and professionals leveraging the GHO stable coin for payments. | Built during LFGHO",
    date: "2024-01-16T00:00:00.000Z",
    url: "https://dework-khaki.vercel.app/",
    repository: "0xAlphaDevs/DeWork",
    body: { code: "" },
    path: "string",
    slug: "03",
  },
  {
    _id: "string",
    _raw: {},
    type: "Project",
    winner: true,
    winnerTitle: "Featured",
    post: "",
    published: false,
    title: "CredX",
    skills: ["DIDs", "DWNs", "VCs", "Recoil", "Next.js "],
    description:
      "CredX is a platform where users can own their data with Web5, can seamlessly store and share records on decentralized web nodes (DWNs) using decentralized identifiers (DIDs).CredX also allows organizations to issue secure verifiable credentials (VCs) to users and a seamless way to verify the credentials through presentation exchange.",
    date: "2023-12-24T00:00:00.000Z",
    url: "https://credx-beryl.vercel.app/",
    repository: "0xAlphaDevs/HealthX-DIF-hackathon",
    body: { code: "" },
    path: "string",
    slug: "04",
  },
  {
    _id: "string",
    _raw: {},
    type: "Project",
    winner: true,
    winnerTitle: "DIF Hackathon",
    post: "https://twitter.com/DecentralizedID/status/1753106281538461967",
    published: false,
    title: "HealthX Protocol",
    skills: ["Web5", "Decentalized Identifiers (DIDs)", "DWNs", "Radix UI"],
    description:
      "HeathX Protocol is a decntralized health record management platform built using web5.Users can own & carry their health history and seamlessly store and share medical records on decentralized web nodes (DWNs) using decentralized identifiers (DIDs). ",
    date: "2023-11-19T00:00:00.000Z",
    url: "https://healthx-ivory.vercel.app/",
    repository: "0xAlphaDevs/HealthX-DIF-hackathon",
    body: { code: "" },
    path: "string",
    slug: "05",
  },
  {
    _id: "string",
    _raw: {},
    type: "Project",
    published: false,
    winner: true,
    winnerTitle: "Encode X NEAR 2023 Hackathon",
    post: "https://twitter.com/encodeclub/status/1721543275301970365",
    title: "AI NFTs",
    skills: [
      "Near Blockchain",
      "Mintbase SDK",
      "Replicate | ControlNet AI Modal",
    ],
    description:
      "AI NFTs is platform that allows artists and AI algorithms to collaborate in the creation of unique NFT artworks. You can create art from text and scribbles using ControlNet AI modal and mint NFTs on NEAR Bloackchain. ",
    date: "2023-10-06T00:00:00.000Z",
    url: "https://ai-nfts-sooty.vercel.app/",
    repository: "0xAlphaDevs/ai-nfts-mintbase",
    body: { code: "" },
    path: "string",
    slug: "06",
  },
  {
    _id: "string",
    _raw: {},
    type: "Project",
    published: false,
    winner: true,
    winnerTitle: "The Actually Open AI Hackathon",
    post: "",
    title: "Alpha Marketplace",
    skills: [
      "Arweave",
      "Decentralized Storage",
      "GraphQL",
      "Google Cloud Vision API",
    ],
    description:
      "Alpha Marketplace is an image marketplace powered by AI image classifier and deployed on Arweave Blockchain. It also utilises Arweave's universal data license (UDL) for content monetization and custom tags for data discoverability.  ",
    date: "2023-09-15T00:00:00.000Z",
    url: "https://nrqve4t77nxkgbt5j7gchxx3qbbf3pso5x37vozdl3byxjb2qwfq.arweave.net/bGFScn_7bqMGfU_MI977gEJdvk7t9_q7I17Di6Q6hYs/",
    repository: "0xyshv/image-marketplace.git",
    body: { code: "" },
    path: "string",
    slug: "07",
  },
];

export const carouselImages: Record<string, string[]> = {
  "01": [
    "/zkCreditScore/qr_verification.jpeg",
    "/zkCreditScore/view_credit_report.jpeg",
    "/zkCreditScore/zk_snark_proof.jpeg",
    "/zkCreditScore/finance_dashboard.jpeg",
  ],
  "02": [
    "/sovid/ad1.jpeg",
    "/sovid/ad2.jpeg",
    "/sovid/ad3.jpeg",
    "/sovid/ad4.jpeg",
    "/sovid/ad5.jpeg",
    "/sovid/ad6.jpeg",
    "/sovid/ad7.jpeg",
  ],
  "03": [
    "/dework/1.png",
    "/dework/2.png",
    "/dework/3.png",
    "/dework/4.png",
    "/dework/5.png",
    "/dework/6.png",
  ],
  "04": [
    "/healthX/1.png",
    "/healthX/2.png",
    "/healthX/3.png",
    "/healthX/4.png",
    "/healthX/5.png",
    "/healthX/6.png",
  ],
  "05": [
    "/healthX/1.png",
    "/healthX/2.png",
    "/healthX/3.png",
    "/healthX/4.png",
    "/healthX/5.png",
    "/healthX/6.png",
  ],
  "06": [
    "/ainfts/1.png",
    "/ainfts/2.png",
    "/ainfts/3.png",
    "/ainfts/4.png",
    "/ainfts/5.png",
    "/ainfts/6.png",
    "/ainfts/7.png",
    "/ainfts/8.png",
    "/ainfts/9.png",
    "/ainfts/10.png",
  ],
  "07": [
    "/alpha-marketplace/1.png",
    "/alpha-marketplace/2.png",
    "/alpha-marketplace/3.png",
    "/alpha-marketplace/4.png",
  ],
  // "06": ["favicon.png", "favicon.png"],
};
