export function classNames(...classes: unknown[]) {
  return classes.filter(Boolean).join(" ");
}
interface FeaturedType {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}
interface PagesType {
  name: string;
  href: string;
}
interface CategoriesType {
  name: string;
  featured: FeaturedType[];
}

interface Category {
  name: string;
  href: string;
  imageSrc: string;
}

interface Collections extends Category {
  imageAlt: string;
  description: string;
}

interface Navigation {
  categories: CategoriesType[];
  pages: PagesType[];
}

export const currencies: string[] = ["CAD", "USD", "AUD", "EUR", "GBP"];
export const navigation: Navigation = {
  categories: [
    {
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg",
          imageAlt:
            "Model opening tan leather long wallet with credit card pockets and cash pouch.",
        },
      ],
    },
    {
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
          imageAlt:
            "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};
export const categories: Category[] = [
  {
    name: "clothings",
    href: "/products",
    imageSrc: require("../assets/images/man.jpg"),
  },
  // {
  //   name: "Women",
  //   href: "#",
  //   imageSrc: require("../assets/images/woman.jpg"),
  // },
  // {
  //   name: "Kids",
  //   href: "#",
  //   imageSrc: require("../assets/images/kid.jpg"),
  // },

  {
    name: "Accessories",
    href: "/products",
    imageSrc: require("../assets/images/accessory.jpg"),
  },
  {
    name: "Others",
    href: "/products",
    imageSrc: require("../assets/images/shoe.jpg"),
  },
];
export const collections: Collections[] = [
  {
    name: "Handcrafted Collection",
    href: "#",
    imageSrc: require("../assets/images/feature2.jpg"),
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
  },
  {
    name: "Organized Desk Collection",
    href: "#",
    imageSrc: require("../assets/images/feature4.jpg"),
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
  },
  {
    name: "Focus Collection",
    href: "#",
    imageSrc: require("../assets/images/feature3.jpg"),
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Be more productive than enterprise project managers with a single piece of paper.",
  },
];
export const footerNavigation = {
  shop: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  account: [
    { name: "Manage Account", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
    { name: "Redeem a Gift Card", href: "#" },
  ],
  connect: [
    { name: "Contact Us", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Pinterest", href: "#" },
  ],
};

export const contentSectionData = [
  {
    title: "Simple productivity",
    description:
      "Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles.",
    imageUrl: require("../assets/images/feature1.jpg"),
    button: "focus",
    href: "#",
  },
  {
    title: "Simple productivity",
    description:
      "Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles.",
    imageUrl: require("../assets/images/feature3.jpg"),
    link: "",
    button: "focus",
    href: "#",
  },
];
