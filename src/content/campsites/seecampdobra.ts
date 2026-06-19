import type { CampsiteConfig } from "../types";

const IMG = "/campsites/seecampdobra";

const seecampdobra: CampsiteConfig = {
  name: "Seecamp Dobra",
  shortName: "Seecamp",
  slug: "seecampdobra",
  ort: "Franzen am Stausee Dobra",
  region: "Waldviertel, Niederösterreich",
  heroVariant: "center",
  brandKind: "Camping am See",
  see: "Stausee Dobra",
  regionLong: "Waldviertel · Niederösterreich · Österreich",

  claim: "Nordisches Flair am Stausee Dobra",
  claimEmphasis: "Stausee Dobra",
  emailDetail: "euer Stausee, der an skandinavische Fjorde erinnert",
  intro:
    "Tief im Waldviertel, rund 75 Minuten von Wien, liegt das Seecamp Dobra direkt am Ufer des fjordartigen Stausees — sauberes Wasser, dichte Wälder und ein Platz, der fast jeden Stellplatz mit Seeblick verwöhnt.",

  logo: { src: `${IMG}/logo-f5466980c1.png`, alt: "Seecamp Dobra Logo" },

  statement: {
    text: "Nahezu jeder Platz verwöhnt dich mit direktem Seeblick — und abends mit Sonnenuntergängen über dem Wasser.",
    emphasis: "direktem Seeblick",
  },

  pillars: [
    {
      title: "Direkt am Stausee",
      text: "Dein Stellplatz liegt am Ufer des Stausees Dobra — Wasser, Wald und Ruhe direkt vor dem Vorzelt.",
      image: { src: `${IMG}/gallery-b5e5ce5917.webp`, alt: "Stellplätze am Ufer des Stausees Dobra" },
    },
    {
      title: "Die Ruine über dem See",
      text: "Am Fuß der Burgruine Dobra, einer der größten Burgen Niederösterreichs, schlägst du dein Lager auf.",
      image: { src: `${IMG}/gallery-ca8fd7d7f8.webp`, alt: "Burgruine Dobra über dem Stausee mit Campingplatz" },
    },
    {
      title: "Nordisches Flair",
      text: "Verzweigte Buchten und klares Wasser lassen den Stausee an skandinavische Fjorde denken.",
      image: { src: `${IMG}/gallery-69c3e8a059.webp`, alt: "Fjordartiger Stausee Dobra zwischen bewaldeten Hügeln" },
    },
  ],

  usps: [
    "Direkt am Stausee Dobra",
    "Stellplätze mit Seeblick",
    "Boots- & E-Bike-Verleih",
    "Seeterrasse vor Ort",
    "Top-Revier für Raubfische",
  ],

  trust: {
    heading: "Waldviertel von seiner stillsten Seite",
    headingEmphasis: "stillsten Seite",
    intro:
      "Sauberes Wasser, dichte Nadelwälder und klare Nächte: Hier gibt die Natur den Takt an. Ob mit Zelt, Van oder Wohnwagen — abseits vom Massentourismus findest du Platz zum Durchatmen.",
  },

  awards: [],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-1933817e1c.webp`, alt: "Seecamp Dobra am Ufer des Stausees mit Bootssteg" },
  },

  breather: {
    image: { src: `${IMG}/gallery-5560574ffc.webp`, alt: "Sternenhimmel über der Ruine Dobra am Stausee" },
    line: "Nächte, in denen die Milchstraße über der Ruine Dobra steht.",
  },

  camping: {
    heading: "Camping am Stausee Dobra",
    intro:
      "Vom terrassierten Stellplatz bis zur weiten Lagerwiese — nicht parzelliert, mit Strom und Wasser in der Nähe und dem See als Nachbarn.",
    features: [
      {
        title: "Seecamp — Plätze mit Seeblick",
        text: "Terrassenförmig angelegte Stellplätze mit Strom und Wasser in der Nähe — nahezu jeder mit Blick über den See.",
        image: { src: `${IMG}/gallery-7e90b2e888.webp`, alt: "Terrassierte Stellplätze am Seecamp Dobra im Abendlicht" },
      },
      {
        title: "Lagerwiese für Gruppen",
        text: "Große, nicht parzellierte Lichtung zwischen Seecamp und Ruinencamp — beliebt bei Familien und Gruppen.",
        image: { src: `${IMG}/gallery-d36fbf362b.webp`, alt: "Lagerwiese am Seecamp Dobra mit Zelten und Wohnwagen" },
      },
      {
        title: "Zeltwiese am Seeufer",
        text: "Viel Platz fürs Zelt, nahe am Wasser und nicht parzelliert — bau dein Lager auf, wie es dir gefällt.",
        image: { src: `${IMG}/gallery-6302a3a170.webp`, alt: "Zeltwiese am Ufer des Stausees Dobra" },
      },
      {
        title: "Eigene Liegewiese",
        text: "Die hauseigene Liegewiese am Stausee lädt zum Sonnen, Baden und Verweilen direkt am Wasser ein.",
        image: { src: `${IMG}/gallery-cfc373f9e9.webp`, alt: "Liegewiese am Stausee Dobra mit Wildblumen" },
      },
      {
        title: "Bootsverleih am Platz",
        text: "SUPs, Kanus, Kajaks sowie Ruder- und Tretboote bekommst du unkompliziert direkt am Campingplatz.",
        image: { src: `${IMG}/gallery-f3ccff6e5c.webp`, alt: "Kanus und Boote am Steg des Stausees Dobra" },
      },
      {
        title: "E-Bike-Verleih",
        text: "Moderne E-Bikes leihst du direkt vor Ort — ideal für entspannte Touren auf den Wald- und Radwegen.",
        image: { src: `${IMG}/activity-aa46da6ccc.webp`, alt: "E-Bike-Verleih am Ufer des Stausees Dobra" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Tag am Wasser, Abend am Feuer",
    intro:
      "Angeln, Paddeln, Wandern oder die Ruine erklimmen — rund um den Stausee Dobra findest du dein Tempo.",
    items: [
      {
        title: "Angeln am Stausee",
        text: "Hecht, Zander, Barsch — der Dobra zählt zu Europas besten Raubfischrevieren. Karten an der Rezeption.",
        image: { src: `${IMG}/hero-8d42e32403.webp`, alt: "Angler mit Zander am Stausee Dobra" },
      },
      {
        title: "Raus aufs Wasser",
        text: "Mit SUP, Kanu oder Ruderboot erkundest du die verzweigten Buchten des Stausees in deinem Tempo.",
        image: { src: `${IMG}/gallery-73dfcddf0e.webp`, alt: "Blick vom Boot über den Stausee Dobra im Abendrot" },
      },
      {
        title: "Burgruine Dobra",
        text: "Erklimm die Mauern für den Blick über den See — vom Burgareal saust der rund 400 m lange Big Fly hinaus.",
        image: { src: `${IMG}/hero-d981651c54.webp`, alt: "Burgruine Dobra auf dem Felsvorsprung über dem See" },
      },
      {
        title: "Wandern & Ausflüge",
        text: "Wald- und Wanderwege, der Lohnbachfall oder das Stift Zwettl liegen für Ausflüge gleich um die Ecke.",
        image: { src: `${IMG}/gallery-fb18a61249.webp`, alt: "Stiller Stausee Dobra im Waldviertel" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Stausee",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Von Wien rund 75 Minuten Fahrtzeit, ab St. Pölten etwa 45 — über Krems ins Waldviertel nach Franzen.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächste Bahnhöfe im Raum Horn und Zwettl; das letzte Stück an den See am besten mit dem Auto.",
      },
    ],
  },

  galerie: {
    heading: "Seecamp Dobra in Bildern",
    headingEmphasis: "in Bildern",
    intro:
      "Natur pur, entspannte Tage am See und besondere Abende fernab vom Alltag — ein paar Eindrücke vom Stausee Dobra.",
    tag: "Mai bis Oktober",
    moreCount: 20,
    images: [
      { src: `${IMG}/gallery-92b20ba9c5.webp`, alt: "Sonnenuntergang über dem Camp am Stausee Dobra" },
      { src: `${IMG}/gallery-ddb4a65a67.webp`, alt: "Wohnwagen am Ufer des Stausees Dobra im Morgenlicht" },
      { src: `${IMG}/gallery-79ac24098f.webp`, alt: "Abendrot über dem Stausee Dobra" },
      { src: `${IMG}/hero-04a3dc9aba.webp`, alt: "Vater und Tochter beim Angeln am Stausee Dobra" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Stausee",
    headingEmphasis: "am Stausee",
    intro:
      "Sag uns Zeitraum und Personen — wir melden uns persönlich mit deiner Verfügbarkeit am Seecamp Dobra.",
    pricesArePlaceholder: false,
    priceNote:
      "Preise pro Nacht und Stellplatz, zzgl. Ortstaxe (ab € 2,50 p. P.) — Erwachsene € 8, Kinder 6–15 J. ab € 5,50; am Seecamp ist Strom inkludiert.",
    highlight: {
      title: "Länger bleiben, weniger zahlen",
      text: "Ab 7 Nächten 10 %, ab 14 Nächten 20 % Ermäßigung — gültig in allen Saisonen.",
    },
    categories: [
      { id: "seecamp-wohnwagen", label: "Stellplatz Wohnwagen", perNight: 28.7, perExtraGuest: 8 },
      { id: "seecamp-wohnmobil", label: "Wohnmobil, Van & Bus", perNight: 24.7, perExtraGuest: 8 },
      { id: "zeltwiese", label: "Zeltplatz", perNight: 15.7, perExtraGuest: 8 },
      { id: "lagerwiese", label: "Lagerwiese (Zelt)", perNight: 14, perExtraGuest: 8 },
    ],
  },

  kontakt: {
    coords: { lat: 48.615314, lng: 15.39164, approx: true },
    tel: "+43 660 551 78 50",
    telHref: "tel:+436605517850",
    mail: "office@seecampdobra.at",
    facebook: "https://www.facebook.com/profile.php?id=61585062572548",
    adresse: "Reichhalms 33 · 3594 Franzen · Niederösterreich",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Liegewiese", href: "#camping" },
    ]},
    { label: "Erleben", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default seecampdobra;
