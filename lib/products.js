export const WHATSAPP_NUMBER = "917480035754";

export const categories = [
  { id: "emergency", name: "Emergency Lights" },
  { id: "exit", name: "Exit Signs" },
  { id: "industrial", name: "Industrial LED" },
  { id: "rechargeable", name: "Rechargeable" },
  { id: "hazardous", name: "Hazardous Area" },
];

export function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getProductImageSrc(image) {
  if (!image) return "/product/1.png";
  if (image.startsWith("http") || image.startsWith("/")) return image;
  return `/${image}`;
}

function enrich(product, categoryId) {
  const slug = product.slug || slugify(product.name);
  return {
    ...product,
    slug,
    category: categoryId,
    price: product.price ?? "Price on request",
    shortDescription: product.shortDescription ?? product.specs,
    longDescription:
      product.longDescription ??
      `The ${product.name} (Model: ${product.model}) is engineered by Ramadhiraj Power Systems for industrial safety and reliability. ${product.specs}. Suitable for commercial buildings, factories, warehouses, and other facilities that require dependable lighting performance and compliance with Indian safety standards.`,
  };
}

const rawProducts = {
  emergency: [
    {
      id: 1,
      name: "Twin Beam Emergency Light",
      model: "RPS-EL-401",
      specs: "6-7 Hours Backup • BIS Certified",
      image: "product/1.png",
      price: "₹4,999",
      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",
    },
    {
      id: 2,
      name: "Round Emergency Light",
      model: "RPS-EL-402",
      specs: "5 Hours Backup • IP54 Rated",
      image: "product/2.png",
      price: "₹3,499",
    },
    {
      id: 3,
      name: "Central Battery System",
      model: "RPS-CBS-500",
      specs: "10 Hours Backup • Industrial Grade",
      image: "product/5.png",
      price: "₹24,999",
    },
    {
      id: 4,
      name: "Compact Emergency Unit",
      model: "RPS-CU-220",
      specs: "Compact Design • High Efficiency",
      image: "product/7.png",
      price: "₹2,999",
    },
  ],
  exit: [
    {
      id: 5,
      name: "LED Exit Sign Board",
      model: "RPS-EX-201",
      specs: "2 Hours Backup • BIS Certified",
      image: "product/8.png",
      price: "₹2,499",
    },
    {
      id: 6,
      name: "Photoluminescent Exit Sign",
      model: "RPS-EX-202",
      specs: "Glow in Dark • Eco Friendly",
      image: "product/9.png",
      price: "₹1,899",
    },
    {
      id: 7,
      name: "LED Arrow Exit Sign",
      model: "RPS-EX-203",
      specs: "Directional • Double Sided",
      image: "product/11.png",
      price: "₹2,799",
    },
    {
      id: 8,
      name: "Slim Exit Panel",
      model: "RPS-EX-250",
      specs: "Ultra Slim • Long Life",
      image: "product/12.png",
      price: "₹3,199",
    },
  ],
  industrial: [
    {
      id: 9,
      name: "High Bay LED Light",
      model: "RPS-HB-150",
      specs: "150W • IP65 Rated",
      image:
        "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop",
      price: "₹8,999",
    },
    {
      id: 10,
      name: "Flood Light LED",
      model: "RPS-FL-100",
      specs: "100W • Wide Angle",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
      price: "₹6,499",
    },
    {
      id: 11,
      name: "Street Light LED",
      model: "RPS-SL-60",
      specs: "60W • IP66 Protection",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
      price: "₹5,999",
    },
    {
      id: 12,
      name: "Industrial Ceiling Light",
      model: "RPS-IC-88",
      specs: "Heavy Duty • Energy Efficient",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
      price: "₹4,499",
    },
  ],
  rechargeable: [
    {
      id: 13,
      name: "Rechargeable Search Light",
      model: "RPS-SL-10W",
      specs: "Portable • High Backup",
      image:
        "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=1200&auto=format&fit=crop",
      price: "₹3,299",
    },
    {
      id: 14,
      name: "LED Work Light",
      model: "RPS-WL-20",
      specs: "20W • Magnetic Base",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
      price: "₹2,799",
    },
    {
      id: 15,
      name: "Portable Emergency Lantern",
      model: "RPS-PL-5",
      specs: "USB Charging • Lightweight",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      price: "₹1,999",
    },
    {
      id: 16,
      name: "Rechargeable LED Torch",
      model: "RPS-RT-18",
      specs: "Fast Charging • Compact",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
      price: "₹1,499",
    },
  ],
  hazardous: [
    {
      id: 17,
      name: "Flame Proof LED Light",
      model: "RPS-FP-50",
      specs: "Zone 1 & 2 • Ex d Certified",
      image:
        "https://images.unsplash.com/photo-1516321310764-8d4d3c0f1d5d?q=80&w=1200&auto=format&fit=crop",
      price: "₹12,999",
    },
    {
      id: 18,
      name: "Hazardous Area Exit Light",
      model: "RPS-HEX-20",
      specs: "Zone 2 • IECEx",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
      price: "₹9,999",
    },
    {
      id: 19,
      name: "Hazardous Area Batten",
      model: "RPS-HB-30",
      specs: "Corrosion Resistant • 30W",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
      price: "₹7,499",
    },
    {
      id: 20,
      name: "Explosion Proof Unit",
      model: "RPS-EP-90",
      specs: "Heavy Duty • Industrial Safety",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      price: "₹15,999",
    },
  ],
};

export const productsByCategory = Object.fromEntries(
  Object.entries(rawProducts).map(([categoryId, items]) => [
    categoryId,
    items.map((item) => enrich(item, categoryId)),
  ]),
);

export function getAllProducts() {
  return Object.values(productsByCategory).flat();
}

export function getProductBySlug(slug) {
  return getAllProducts().find((product) => product.slug === slug);
}

export function getCategoryName(categoryId) {
  return categories.find((c) => c.id === categoryId)?.name ?? "Products";
}

export function getRelatedProducts(slug, limit = 4) {
  const current = getProductBySlug(slug);
  if (!current) return [];

  return productsByCategory[current.category]
    .filter((item) => item.slug !== slug)
    .slice(0, limit);
}

export function getWhatsAppUrl(product) {
  const text = encodeURIComponent(
    `Hi, I am interested in ${product.name} (${product.model}). Please share more details.`,
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const useCases = {
  emergency: [
    {
      id: 1,
      name: "Commercial Buildings",
      description:
        "Emergency lighting systems for offices, malls, and commercial complexes.",
      image: "/industries/banner.png",
    },
    {
      id: 2,
      name: "Hospitals",
      description:
        "Critical backup lighting solutions ensuring uninterrupted visibility.",
      image: "/usecases/hospital.jpg",
    },
    {
      id: 3,
      name: "Factories",
      description:
        "Industrial emergency lighting for worker safety during power failures.",
      image: "/usecases/factory.jpg",
    },
  ],
  exit: [
    {
      id: 1,
      name: "Airports",
      description:
        "High-visibility exit guidance systems for emergency evacuation.",
      image: "/usecases/airport.jpg",
    },
    {
      id: 2,
      name: "Hotels",
      description:
        "Stylish and compliant exit signage for hospitality environments.",
      image: "/usecases/hotel.jpg",
    },
  ],
  industrial: [
    {
      id: 1,
      name: "Warehouses",
      description:
        "Energy-efficient industrial LED lighting for large storage spaces.",
      image: "/usecases/warehouse.jpg",
    },
    {
      id: 2,
      name: "Manufacturing Plants",
      description:
        "Heavy-duty LED systems designed for industrial operations.",
      image: "/usecases/manufacturing.jpg",
    },
  ],
  rechargeable: [
    {
      id: 1,
      name: "Outdoor Operations",
      description:
        "Portable rechargeable lighting for remote industrial tasks.",
      image: "/usecases/outdoor.jpg",
    },
    {
      id: 2,
      name: "Maintenance Teams",
      description:
        "Compact and durable lights for inspection and repair teams.",
      image: "/usecases/maintenance.jpg",
    },
  ],
  hazardous: [
    {
      id: 1,
      name: "Oil & Gas Plants",
      description:
        "Explosion-proof lighting solutions for hazardous environments.",
      image: "/usecases/oilgas.jpg",
    },
    {
      id: 2,
      name: "Chemical Industries",
      description:
        "Corrosion-resistant lighting engineered for chemical zones.",
      image: "/usecases/chemical.jpg",
    },
  ],
};
