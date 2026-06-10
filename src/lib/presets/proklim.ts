import type { SitePreset } from "./types";

export const proklimPreset: SitePreset = {
  id: "proklim",
  label: "PROKLIM",
  siteName: "PROKLIM",
  companyLegalName: "PROKLIM Artur Krychowski",
  siteCity: "Pruszków i Warszawa",
  cityLocative: "w Pruszkowie",
  siteDefaultUrl: "https://proklim.pl",
  email: "kontakt@proklim.pl",
  phoneDisplay: "517 339 359",
  phoneE164: "+48517339359",
  address: "ul. Lipowa 9, 05-800 Pruszków",
  addressStreet: "ul. Lipowa 9",
  addressCity: "Pruszków",
  addressPostal: "05-800",
  mapsQuery: "PROKLIM Artur Krychowski, ul. Lipowa 9, Pruszków",
  nip: "",
  regon: "",
  siteTitle: "PROKLIM – montaż i serwis klimatyzacji Pruszków | rekuperacja",
  siteKeywords:
    "klimatyzacja Pruszków, montaż klimatyzacji Warszawa, serwis klimatyzacji, rekuperacja Pruszków, naprawa klimatyzacji, PROKLIM Artur Krychowski",
  ogImage: "/logo-full.png",
  serviceAreas: [
    "Warszawa",
    "Pruszków",
    "Piaseczno",
    "Wołomin",
    "Legionowo",
    "Otwock",
    "Marki",
    "Ząbki",
  ],
  googlePlaceId: "ChIJ51gIKjA1GUcRtxjuF_TBSaA",
  googleReviewsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ51gIKjA1GUcRtxjuF_TBSaA",
  googleWriteReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ51gIKjA1GUcRtxjuF_TBSaA",
  gallery: [
    {
      image: "/gallery/realizacja-dom.png",
      alt: "Montaż jednostki zewnętrznej klimatyzacji na elewacji nowoczesnego domu — realizacja PROKLIM",
    },
    {
      image: "/gallery/realizacja-dach.png",
      alt: "Instalacja klimatyzacji GREE na ścianie szczytowej przy dachu — realizacja PROKLIM",
    },
    {
      image: "/gallery/realizacja-daikin.png",
      alt: "Podwójny montaż jednostek zewnętrznych Daikin na elewacji domu — realizacja PROKLIM",
    },
  ],
  reviews: [
    {
      name: "Dariusz Tulczyński",
      text: "Bardzo polecam Panów serwisu od Pana Artura Krychowskiego. Szybki i bardzo sprawny przegląd klimy w mieszkaniu.",
      source: "google",
      rating: 5,
      publishedAt: "2026-02-23T07:32:48+01:00",
      relativeTime: "kilka tygodni temu",
    },
    {
      text: "Klima zamontowana błyskawicznie. Ekipa pana Artura to profesjonaliści w każdym calu. Właściciel konkretny, terminowy i rzeczowy. W 100% polecam.",
      source: "google",
      rating: 5,
    },
    {
      text: "Jesteśmy bardzo zadowoleni! Polecamy Pana Artura — profesjonalnie, fachowo, szybko, czysto i elegancko. Klimatyzacja świetnie się sprawdza. Pan Artur zna się na rzeczy!",
      source: "google",
      rating: 5,
    },
  ],
};
