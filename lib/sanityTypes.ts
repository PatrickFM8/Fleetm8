interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Author {
  _type: "reference";
  _ref: string;
  name: string;
}

export interface Post extends SanityBody {
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  description: string;
  body: [object];
  mainImage: Image;
  author: Author;
  categories: [string];
  hidden: boolean;
}

export interface Feature extends SanityBody {
  title: string;
  subtitle: string;
  image: Image;
  summary: string;
  buttonText: string;
  linkToBuild: string;
  imageAlignment: "left" | "right";
}

export interface HeroSection extends Feature {}

export interface Navitems extends SanityBody {
  title: string;
  url: string;
  hidden: boolean;
}

export interface Testimonials extends SanityBody {
  name: string;
  description: string;
  image: Image;
  hidden: boolean;
}

export interface Faqs extends SanityBody {
  question: string;
  answer: string;
  hidden: boolean;
}
