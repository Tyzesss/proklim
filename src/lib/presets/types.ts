export type GalleryItem = {
  image: string;
  alt: string;
};

export type ReviewItem = {
  name: string;
  text: string;
};

export type SitePreset = {
  id: string;
  label: string;
  siteName: string;
  companyLegalName: string;
  siteCity: string;
  cityLocative: string;
  siteDefaultUrl: string;
  email: string;
  phoneDisplay: string;
  phoneE164: string;
  address: string;
  addressStreet: string;
  addressCity: string;
  addressPostal: string;
  mapsQuery: string;
  nip: string;
  regon: string;
  siteTitle: string;
  siteKeywords: string;
  ogImage: string;
  gallery: GalleryItem[];
  reviews: ReviewItem[];
};
