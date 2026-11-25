/** Brand cards. Logos live in public/partners. `w` and `h` are the display size in px (from the design). */
export type Partner = {
  name: string;
  description: string;
  logo?: string;
  w?: number;
  h?: number;
};

export const PARTNERS: readonly Partner[] = [
  {
    name: "TulaPay",
    description: "TulaPay is a digital payment platform designed to simplify money transfers across multiple mobile wallets and payment networks.",
    logo: "/partners/tulapay.png",
    w: 280,
    h: 100,
  },
  {
    name: "Kasoowa",
    description: "Kasoowa FoodHub is a multi-vendor food commerce and delivery platform that connects farmers, vendors, restaurants, and consumers within a unified marketplace.",
    logo: "/partners/kasoowa.png",
    w: 300,
    h: 300,
  },
  {
    name: "SpurNation Group",
    description: "Spur Nation Group is a pan-African business incubator and ecosystem builder that provides end-to-end solutions for startups and small-to-medium enterprises.",
    logo: "/partners/spurnation.png",
    w: 300,
    h: 300,
  },
  {
    name: "Obidon Group",
    description: "Obidon Group is a Nigerian-based conglomerate with a strong presence in real estate, technology, media, and finance.",
  },
  {
    name: "Ease",
    description: "Ease is a comprehensive financial accounting platform designed to help businesses and individuals streamline their financial and accounting operations through a centralized and intelligent ecosystem.",
    logo: "/partners/ease.png",
    w: 200,
    h: 48,
  },
  {
    name: "ULodge",
    description: "ULodge is a student accommodation marketplace designed to help university students discover, compare, and secure verified housing near their campuses.",
    logo: "/partners/ulodge.png",
    w: 80,
    h: 80,
  },
  {
    name: "PayWise Mall",
    description: "PayWise Mall is an innovative e-commerce platform that combines online shopping with goal-based savings, empowering users to build financial discipline while accessing a wide range of products.",
    logo: "/partners/paywise.png",
    w: 160,
    h: 81,
  },
  {
    name: "1503 Candles",
    description: "1503 Candles is a premium lifestyle brand specializing in handcrafted scented candles designed to elevate everyday spaces through fragrance, ambiance, and thoughtful craftsmanship.",
    logo: "/partners/1503-candles.png",
    w: 120,
    h: 120,
  },
];
