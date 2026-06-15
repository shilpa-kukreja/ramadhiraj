export const WHATSAPP_NUMBER = "917428855574";

export const categories = [
  { id: "industrial", name: "INDUSTRIAL EMERGENCY LIGHT" },
  { id: "flame", name: "FLAME PROOF INDUSTRIAL EMERGENCY LIGHT" },
  { id: "flood", name: " FLOOD LIGHT" },
  { id: "street", name: " STREET LIGHT" },
  { id: "signboard", name: "SIGNBOARD"},
  { id: "signage", name: "SIGNAGE"}
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

/** Display labels when using the `details` object on a product */
export const SPEC_FIELD_LABELS = {
  modelName: "Model Name / Number",
  backupTime: "Backup Time",
  batteryType: "Battery Type",
  symbolType: "Symbol Type",
  operationMode: "Operation Mode",
  pictogram: "Pictogram",
  lightSource: "Light Source",
  legendcolor: "Legend Color",
  ipRating: "IP Rating",
  bodyMaterial: "Body Material",
  size: "Size",
  inputVoltage: "Input Voltage",
  cabinet: "Cabinet",
  mountingType: "Mounting Type",
  voltage: "Voltage",
  chargingTime: "Charging Time",
  usage: "Usage",
  brand: "Brand",
  ratedFrequency: "Rated Frequency",
  powerFactor: "Power Factor",
  systemPowerEfficiency: "System Power Efficiency",
  thd: "THD",
  workingHumidity: "Working Humidity",
  ledMake: "Led Make",
  luminiousEfficiency: "Luminious Efficiency",
  colorTemperature: "Color Temperature",
  cri: "CRI",
  highVoltageCutOff: "High volatge Cut Off",
  ambientTemperature: "Ambient Temperature",
  ingressProtection: "Ingress Protection",
};

function formatSpecKey(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

/**
 * Builds a list of { label, value } for the product detail page.
 * Supports two formats per product (use whichever is easier):
 *
 * 1) Object — only include fields this product has:
 *    details: { backupTime: "6-7 Hours", ipRating: "IP54" }
 *
 * 2) Array — full control of labels and order:
 *    specifications: [{ label: "Backup Time", value: "6-7 Hours" }]
 */
export function getProductSpecifications(product) {
  if (!product) return [];

  if (Array.isArray(product.specifications)) {
    return product.specifications.filter(
      (row) =>
        row?.label?.trim() && row?.value != null && String(row.value).trim(),
    );
  }

  if (product.details && typeof product.details === "object") {
    return Object.entries(product.details)
      .filter(([, value]) => value != null && String(value).trim() !== "")
      .map(([key, value]) => ({
        label: SPEC_FIELD_LABELS[key] ?? formatSpecKey(key),
        value: String(value).trim(),
      }));
  }

  const fallback = [];
  if (product.model?.trim()) {
    fallback.push({
      label: SPEC_FIELD_LABELS.modelName,
      value: product.model.trim(),
    });
  }
  if (product.specs?.trim()) {
    fallback.push({ label: "Highlights", value: product.specs.trim() });
  }
  return fallback;
}

function enrich(product, categoryId) {
  const slug = product.slug ?? `${slugify(product.name)}-${product.id}`;
  const enriched = {
    ...product,
    slug,
    category: categoryId,
    price: product.price ?? "Price on request",
    shortDescription: product.shortDescription ?? product.specs ?? "",
    longDescription: product.longDescription ?? "",
  };
  return {
    ...enriched,
    specificationList: getProductSpecifications(enriched),
  };
}

// Keys MUST match `categories[].id` exactly
const rawProducts = {
  industrial: [
    {
      id: 1,
      name: "RPS-EL (NIKAS)",
      model: "RPS-EL-401",
      image: "allproduct/1.jpeg",
      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "Industrial emergency light designed for reliable backup illumination during power failure. Suitable for factories, commercial buildings, and public facilities.",
      // Only add fields that apply — omit any you don't need
      details: {
        backupTime: "6-8 Hours",
        batteryType: "Lead Acid",
        symbolType: "Nikas",
        operationMode: "Maintained",
        lightSource: "LED",
        ipRating: "IP20",
        bodyMaterial: "Metal",
        size: "310(L)  315(H)  110(W) MM Approx.",
        inputVoltage: "220-240 V AC",
        cabinet: "CRC Powder coated",
        mountingType: "Wall Mount",
        voltage: "230v AC, 50HZ",
        chargingTime: "8 Hours",
        usage: "Application Factory, Mall, Office",
        modelName: "RPS-EL",
      },
    },

    {
      id: 2,
      name: "RPS-EL (EXIT)",
      model: "RPS-EL-401",
      specs: "6-7 Hours Backup • BIS Certified",
      image: "allproduct/2.jpeg",

      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",
      // Only add fields that apply — omit any you don't need
      details: {
        backupTime: "6-8 Hours",
        batteryType: "Lead Acid",
        symbolType: "Exit",
        operationMode: "Maintained",
        lightSource: "LED",
        ipRating: "IP20",
        bodyMaterial: "Metal",
        size: "310(L)  315(H)  110(W) MM Approx.",
        inputVoltage: "220-240 V AC",
        cabinet: "CRC Powder coated",
        mountingType: "Wall Mount",
        voltage: "230v AC, 50HZ",
        chargingTime: "8 Hours",
        usage: "Application Factory, Mall, Office",
        modelName: "RPS-EL",
      },
    },

    {
      id: 3,
      name: "RPS-EL 40W (EMERGENCY LIGHT)",
      model: "RPS-EL-401",
      specs: "6-7 Hours Backup • BIS Certified",
      image: "allproduct/3.jpeg",

      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",

      // Only add fields that apply — omit any you don't need
      details: {
        backupTime: "6-8 Hours",
        batteryType: "Lead Acid",
        symbolType: "Emergency Exit",
        operationMode: "Maintained",
        lightSource: "LED",
        ipRating: "IP20",
        bodyMaterial: "Metal",
        size: "310(L)  315(H)  110(W) MM Approx.",
        inputVoltage: "220-240 V AC",
        cabinet: "CRC Powder coated",
        mountingType: "Wall Mount",
        voltage: "230v AC, 50HZ",
        chargingTime: "8 Hours",
        usage: "Application Factory, Mall, Office",
        modelName: "RPS-EL",
      },
    },

     {
      id: 33,
      name: "RPS-EL EMERGENCY EXIT (KANNADA)",
      model: "RPS-EL-401",
      specs: "6-7 Hours Backup • BIS Certified",
      image: "allproduct/industrial/kannada.jpeg",

      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",

      // Only add fields that apply — omit any you don't need
      details: {
        backupTime: "6-8 Hours",
        batteryType: "Lead Acid",
        symbolType: "Emergency Exit",
        operationMode: "Maintained",
        lightSource: "LED",
        ipRating: "IP20",
        bodyMaterial: "Metal",
        size: "310(L)  315(H)  110(W) MM Approx.",
        inputVoltage: "220-240 V AC",
        cabinet: "CRC Powder coated",
        mountingType: "Wall Mount",
        voltage: "230v AC, 50HZ",
        chargingTime: "8 Hours",
        usage: "Application Factory, Mall, Office",
        modelName: "RPS-EL",
      },
    },

 {
      id: 34,
      name: "RPS-EL EMERGENCY EXIT (TAMIL)",
      model: "RPS-EL-401",
      specs: "6-7 Hours Backup • BIS Certified",
      image: "allproduct/industrial/tamil.jpeg",

      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",

      // Only add fields that apply — omit any you don't need
      details: {
        backupTime: "6-8 Hours",
        batteryType: "Lead Acid",
        symbolType: "Emergency Exit",
        operationMode: "Maintained",
        lightSource: "LED",
        ipRating: "IP20",
        bodyMaterial: "Metal",
        size: "310(L)  315(H)  110(W) MM Approx.",
        inputVoltage: "220-240 V AC",
        cabinet: "CRC Powder coated",
        mountingType: "Wall Mount",
        voltage: "230v AC, 50HZ",
        chargingTime: "8 Hours",
        usage: "Application Factory, Mall, Office",
        modelName: "RPS-EL",
      },
    },

     {
      id: 44,
      name: "RPS-EL EMERGENCY EXIT (ENGLISH AND HINDI)",
      model: "RPS-EL-401",
      specs: "6-7 Hours Backup • BIS Certified",
      image: "allproduct/industrial/englishhindi.png",

      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",

      // Only add fields that apply — omit any you don't need
      details: {
        backupTime: "6-8 Hours",
        batteryType: "Lead Acid",
        symbolType: "Emergency Exit",
        operationMode: "Maintained",
        lightSource: "LED",
        ipRating: "IP20",
        bodyMaterial: "Metal",
        size: "310(L)  315(H)  110(W) MM Approx.",
        inputVoltage: "220-240 V AC",
        cabinet: "CRC Powder coated",
        mountingType: "Wall Mount",
        voltage: "230v AC, 50HZ",
        chargingTime: "8 Hours",
        usage: "Application Factory, Mall, Office",
        modelName: "RPS-EL",
      },
    },


    {
      id: 4,
      name: "RPS-EL 40W (EXIT)",
      model: "RPS-EL-401",
      specs: "6-7 Hours Backup • BIS Certified",
      image: "allproduct/4.jpg",

      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",
      // Only add fields that apply — omit any you don't need
      details: {
        backupTime: "6-8 Hours",
        batteryType: "Lead Acid",
        symbolType: "Exit",
        operationMode: "Maintained",
        lightSource: "LED",
        ipRating: "IP20",
        bodyMaterial: "Metal",
        size: "310(L)  315(H)  110(W) MM Approx.",
        inputVoltage: "220-240 V AC",
        cabinet: "CRC Powder coated",
        mountingType: "Wall Mount",
        voltage: "230v AC, 50HZ",
        chargingTime: "8 Hours",
        usage: "Application Factory, Mall, Office",
        modelName: "RPS-EL",
      },
    },

    {
      id: 5,
      name: "RPS-EL 40W ",
      model: "RPS-EL-401",
      specs: "6-7 Hours Backup • BIS Certified",
      image: "allproduct/5.jpeg",

      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",
      // Only add fields that apply — omit any you don't need
      details: {
        backupTime: "6-8 Hours",
        batteryType: "Lead Acid",
        // symbolType: "Exit",
        operationMode: "Maintained",
        lightSource: "LED",
        ipRating: "IP20",
        bodyMaterial: "Metal",
        size: "310(L)  315(H)  110(W) MM Approx.",
        inputVoltage: "220-240 V AC",
        cabinet: "CRC Powder coated",
        mountingType: "Wall Mount",
        voltage: "230v AC, 50HZ",
        chargingTime: "8 Hours",
        usage: "Application Factory, Mall, Office",
        modelName: "RPS-EL 40W",
      },
    },

    // {
    //   id: 6,
    //   name: "SIGNBOARD ",
    //   model: "RPS-EL-401",
    //   specs: "6-7 Hours Backup • BIS Certified",
    //   image: "allproduct/6.jpeg",

    //   shortDescription:
    //     "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
    //   longDescription:
    //     "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",

    //   // Only add fields that apply — omit any you don't need
    //   details: {
    //     // batteryType: "Lead Acid",
    //     // symbolType: "Exit",
    //     operationMode: "Maintained",
    //     pictogram: "Customized Text",
    //     mountingType: "Wall Mount",
    //     bodyMaterial: "MS Powder Coated",
    //     legendcolor: "White",
    //     backupTime: "3 Hours",
    //     inputVoltage: "110 V AC",
    //     ipRating: "IP20",
    //     size: "350x175mm",
    //     // lightSource: "LED",

    //     // cabinet: "CRC Powder coated",

    //     // voltage: "230v AC, 50HZ",
    //     // chargingTime: "8 Hours",
    //     // usage: "Application Factory, Mall, Office",
    //     // modelName: "RPS-EL 40W",
    //   },
    // },

    // {
    //   id: 7,
    //   name: "SIGNAGE",
    //   model: "RPS-EL-401",
    //   specs: "6-7 Hours Backup • BIS Certified",
    //   image: "allproduct/7.jpeg",

    //   shortDescription:
    //     "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
    //   longDescription:
    //     "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",

    //   details: {
    //     // batteryType: "Lead Acid",
    //     // symbolType: "Exit",
    //     operationMode: "Maintained",
    //     pictogram: "Customized Text",
    //     mountingType: "Wall Mount",
    //     bodyMaterial: "Aluminium",
    //     legendcolor: "Green",
    //     backupTime: "2 Hours",
    //     inputVoltage: "230 V AC",
    //     ipRating: "IP20",
    //     size: "300x150 mm",
    //     Brand: "PFL Power Systems",
    //   },
    // },
  ],

  flame: [
    {
      id: 6,
      name: "RPS-FLP 40W (GREEN)",
      model: "RPS-EL-401",
      specs: "6-7 Hours Backup • BIS Certified",
      image: "allproduct/8.jpeg",

      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",
      // Only add fields that apply — omit any you don't need
      details: {
        backupTime: "6-8 Hours",
        batteryType: "Lead Acid",
        symbolType: "Exit",
        operationMode: "Maintained",
        lightSource: "LED",
        ipRating: "IP20",
        bodyMaterial: "Metal",
        size: "310(L)  315(H)  110(W) MM Approx.",
        inputVoltage: "220-240 V AC",
        cabinet: "CRC Powder coated",
        mountingType: "Wall Mount",
        voltage: "230v AC, 50HZ",
        chargingTime: "8 Hours",
        usage: "Application Factory, Mall, Office",
        modelName: "RPS-EL-40 ",
      },
    },

    {
      id: 7,
      name: "RPS-FLP 40W (RED)",
      model: "RPS-EL-401",
      specs: "6-7 Hours Backup • BIS Certified",
      image: "/allproduct/9.jpeg",

      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",

      // Only add fields that apply — omit any you don't need
      details: {
        backupTime: "6-8 Hours",
        batteryType: "Lead Acid",
        symbolType: "Exit",
        operationMode: "Maintained",
        lightSource: "LED",
        ipRating: "IP20",
        bodyMaterial: "Metal",
        size: "310(L)  315(H)  110(W) MM Approx.",
        inputVoltage: "220-240 V AC",
        cabinet: "CRC Powder coated",
        mountingType: "Wall Mount",
        voltage: "230v AC, 50HZ",
        chargingTime: "8 Hours",
        usage: "Application Factory, Mall, Office",
        modelName: "RPS-EL-40 ",
      },
    },

    {
      id: 8,
      name: "RPS-FLP 40W (NO DISPLAY)",
      model: "RPS-EL-401",
      specs: "6-7 Hours Backup • BIS Certified",
      image: "allproduct/10.jpeg",

      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",

      // Only add fields that apply — omit any you don't need
      details: {
        backupTime: "6-8 Hours",
        batteryType: "Lead Acid",
        symbolType: "Exit",
        operationMode: "Maintained",
        lightSource: "LED",
        ipRating: "IP20",
        bodyMaterial: "Metal",
        size: "310(L)  315(H)  110(W) MM Approx.",
        inputVoltage: "220-240 V AC",
        cabinet: "CRC Powder coated",
        mountingType: "Wall Mount",
        voltage: "230v AC, 50HZ",
        chargingTime: "8 Hours",
        usage: "Application Factory, Mall, Office",
        modelName: "RPS-EL-40 ",
      },
    },
  ],
  flood: [
    {
      id: 9,
      name: " FLOOD LIGHT 30W",
      model: "RPS-FL-100",
      image: "allproduct/flood/30.jpeg",
      shortDescription:
        "High-power LED flood light for outdoor and industrial areas.",
      longDescription:
        "Energy-efficient flood lighting for yards, warehouses, and outdoor industrial applications.",
      // Only add fields that apply — omit any you don't need
      details: {
        inputVoltage: "80V-300V AC",
        ratedFrequency: "50HZ",
        powerFactor: ">0.95",
        systemPowerEfficiency: "NA",
        thd: "25%",
        workingHumidity: "5% to 95% NON-CONDENSING",
        ledMake: "BRIDGELUX/CHANGEFANG/ EVER STAR ",
        luminiousEfficiency: ">100Lm/W (AS PER LM-80 REPORT) ",
        colorTemperature: "3000K/4000K/6500K",
        cri: "Ra >80 ",
        highVoltageCutOff: "NA ",
        ambientTemperature: "-10° to 50°C",
        ingressProtection: "IP65/IP 66/ IP AS PER IS/IEC60529-2001",
        // ratedFrequency: "50HZ",
        // backupTime: "6-8 Hours",
        // batteryType: "Lead Acid",
        // symbolType: "Exit",
        // operationMode: "Maintained",
        // lightSource: "LED",
        // ipRating: "IP20",
        // bodyMaterial: "Metal",
        // size: "310(L)  315(H)  110(W) MM Approx.",

        // cabinet: "CRC Powder coated",
        // mountingType: "Wall Mount",
        // voltage: "230v AC, 50HZ",
        // chargingTime: "8 Hours",
        // usage: "Application Factory, Mall, Office",
        // modelName: "RPS-EL-40 ",
      },
    },
     {
      id: 10,
      name: " FLOOD LIGHT 50W",
      model: "RPS-FL-100",
      image: "allproduct/flood/40.jpeg",
      shortDescription:
        "High-power LED flood light for outdoor and industrial areas.",
      longDescription:
        "Energy-efficient flood lighting for yards, warehouses, and outdoor industrial applications.",
      // Only add fields that apply — omit any you don't need
      details: {
        inputVoltage: "80V-300V AC",
        ratedFrequency: "50HZ",
        powerFactor: ">0.95",
        systemPowerEfficiency: "NA",
        thd: "25%",
        workingHumidity: "5% to 95% NON-CONDENSING",
        ledMake: "BRIDGELUX/CHANGEFANG/ EVER STAR ",
        luminiousEfficiency: ">100Lm/W (AS PER LM-80 REPORT) ",
        colorTemperature: "3000K/4000K/6500K",
        cri: "Ra >80 ",
        highVoltageCutOff: "NA ",
        ambientTemperature: "-10° to 50°C",
        ingressProtection: "IP65/IP 66/ IP AS PER IS/IEC60529-2001",
        // ratedFrequency: "50HZ",
        // backupTime: "6-8 Hours",
        // batteryType: "Lead Acid",
        // symbolType: "Exit",
        // operationMode: "Maintained",
        // lightSource: "LED",
        // ipRating: "IP20",
        // bodyMaterial: "Metal",
        // size: "310(L)  315(H)  110(W) MM Approx.",

        // cabinet: "CRC Powder coated",
        // mountingType: "Wall Mount",
        // voltage: "230v AC, 50HZ",
        // chargingTime: "8 Hours",
        // usage: "Application Factory, Mall, Office",
        // modelName: "RPS-EL-40 ",
      },
    },
     {
      id: 11,
      name: " FLOOD LIGHT 100W",
      model: "RPS-FL-100",
      image: "allproduct/flood/100.jpeg",
      shortDescription:
        "High-power LED flood light for outdoor and industrial areas.",
      longDescription:
        "Energy-efficient flood lighting for yards, warehouses, and outdoor industrial applications.",
      // Only add fields that apply — omit any you don't need
      details: {
        inputVoltage: "80V-300V AC",
        ratedFrequency: "50HZ",
        powerFactor: ">0.95",
        systemPowerEfficiency: "NA",
        thd: "25%",
        workingHumidity: "5% to 95% NON-CONDENSING",
        ledMake: "BRIDGELUX/CHANGEFANG/ EVER STAR ",
        luminiousEfficiency: ">100Lm/W (AS PER LM-80 REPORT) ",
        colorTemperature: "3000K/4000K/6500K",
        cri: "Ra >80 ",
        highVoltageCutOff: "NA ",
        ambientTemperature: "-10° to 50°C",
        ingressProtection: "IP65/IP 66/ IP AS PER IS/IEC60529-2001",
        // ratedFrequency: "50HZ",
        // backupTime: "6-8 Hours",
        // batteryType: "Lead Acid",
        // symbolType: "Exit",
        // operationMode: "Maintained",
        // lightSource: "LED",
        // ipRating: "IP20",
        // bodyMaterial: "Metal",
        // size: "310(L)  315(H)  110(W) MM Approx.",

        // cabinet: "CRC Powder coated",
        // mountingType: "Wall Mount",
        // voltage: "230v AC, 50HZ",
        // chargingTime: "8 Hours",
        // usage: "Application Factory, Mall, Office",
        // modelName: "RPS-EL-40 ",
      },
    },
     {
      id: 12,
      name: " FLOOD LIGHT 200W",
      model: "RPS-FL-100",
      image: "allproduct/flood/200.jpeg",
      shortDescription:
        "High-power LED flood light for outdoor and industrial areas.",
      longDescription:
        "Energy-efficient flood lighting for yards, warehouses, and outdoor industrial applications.",
      // Only add fields that apply — omit any you don't need
      details: {
        inputVoltage: "80V-300V AC",
        ratedFrequency: "50HZ",
        powerFactor: ">0.95",
        systemPowerEfficiency: "NA",
        thd: "25%",
        workingHumidity: "5% to 95% NON-CONDENSING",
        ledMake: "BRIDGELUX/CHANGEFANG/ EVER STAR ",
        luminiousEfficiency: ">100Lm/W (AS PER LM-80 REPORT) ",
        colorTemperature: "3000K/4000K/6500K",
        cri: "Ra >80 ",
        highVoltageCutOff: "NA ",
        ambientTemperature: "-10° to 50°C",
        ingressProtection: "IP65/IP 66/ IP AS PER IS/IEC60529-2001",
        // ratedFrequency: "50HZ",
        // backupTime: "6-8 Hours",
        // batteryType: "Lead Acid",
        // symbolType: "Exit",
        // operationMode: "Maintained",
        // lightSource: "LED",
        // ipRating: "IP20",
        // bodyMaterial: "Metal",
        // size: "310(L)  315(H)  110(W) MM Approx.",

        // cabinet: "CRC Powder coated",
        // mountingType: "Wall Mount",
        // voltage: "230v AC, 50HZ",
        // chargingTime: "8 Hours",
        // usage: "Application Factory, Mall, Office",
        // modelName: "RPS-EL-40 ",
      },
    },
  ],
  street: [
    {
      id: 13,
      name: " STREET LIGHT 30W",
      model: "RPS-SL-60",
      image: "allproduct/street/30.jpeg",
      shortDescription: "LED street light for roads and campus lighting.",
      longDescription:
        "Durable street lighting solution with weather-resistant housing for municipal and private roads.",
      specifications: [
        { label: "Model Name / Number", value: "RPS-SL-60" },
        { label: "Light Source", value: "LED" },
        { label: "IP Rating", value: "IP66" },
        { label: "Input Voltage", value: "230V AC" },
        { label: "Usage", value: "Street & Road Lighting" },
      ],

      inputVoltage: "80V-300V AC",
        ratedFrequency: "50HZ",
        powerFactor: ">0.95",
        systemPowerEfficiency: "NA",
        thd: "25%",
        workingHumidity: "5% to 95% NON-CONDENSING",
        ledMake: "BRIDGELUX/CHANGEFANG/ EVER STAR ",
        luminiousEfficiency: ">100Lm/W (AS PER LM-80 REPORT) ",
        colorTemperature: "3000K/4000K/6500K",
        cri: "Ra >80 ",
        highVoltageCutOff: "NA ",
        ambientTemperature: "-10° to 50°C",
        ingressProtection: "IP65/IP 66/ IP AS PER IS/IEC60529-2001",
    },
      {
      id: 14,
      name: " STREET LIGHT 50W",
      model: "RPS-SL-60",
      image: "allproduct/street/40.jpeg",
      shortDescription: "LED street light for roads and campus lighting.",
      longDescription:
        "Durable street lighting solution with weather-resistant housing for municipal and private roads.",
      specifications: [
        { label: "Model Name / Number", value: "RPS-SL-60" },
        { label: "Light Source", value: "LED" },
        { label: "IP Rating", value: "IP66" },
        { label: "Input Voltage", value: "230V AC" },
        { label: "Usage", value: "Street & Road Lighting" },
      ],

      inputVoltage: "80V-300V AC",
        ratedFrequency: "50HZ",
        powerFactor: ">0.95",
        systemPowerEfficiency: "NA",
        thd: "25%",
        workingHumidity: "5% to 95% NON-CONDENSING",
        ledMake: "BRIDGELUX/CHANGEFANG/ EVER STAR ",
        luminiousEfficiency: ">100Lm/W (AS PER LM-80 REPORT) ",
        colorTemperature: "3000K/4000K/6500K",
        cri: "Ra >80 ",
        highVoltageCutOff: "NA ",
        ambientTemperature: "-10° to 50°C",
        ingressProtection: "IP65/IP 66/ IP AS PER IS/IEC60529-2001",
    },
    {
      id: 15,
      name: " STREET LIGHT 100W",
      model: "RPS-SL-60",
      image: "allproduct/street/100.jpeg",
      shortDescription: "LED street light for roads and campus lighting.",
      longDescription:
        "Durable street lighting solution with weather-resistant housing for municipal and private roads.",
      specifications: [
        { label: "Model Name / Number", value: "RPS-SL-60" },
        { label: "Light Source", value: "LED" },
        { label: "IP Rating", value: "IP66" },
        { label: "Input Voltage", value: "230V AC" },
        { label: "Usage", value: "Street & Road Lighting" },
      ],

      inputVoltage: "80V-300V AC",
        ratedFrequency: "50HZ",
        powerFactor: ">0.95",
        systemPowerEfficiency: "NA",
        thd: "25%",
        workingHumidity: "5% to 95% NON-CONDENSING",
        ledMake: "BRIDGELUX/CHANGEFANG/ EVER STAR ",
        luminiousEfficiency: ">100Lm/W (AS PER LM-80 REPORT) ",
        colorTemperature: "3000K/4000K/6500K",
        cri: "Ra >80 ",
        highVoltageCutOff: "NA ",
        ambientTemperature: "-10° to 50°C",
        ingressProtection: "IP65/IP 66/ IP AS PER IS/IEC60529-2001",
    },
    {
      id: 16,
      name: " STREET LIGHT 200W",
      model: "RPS-SL-60",
      image: "allproduct/street/200.jpeg",
      shortDescription: "LED street light for roads and campus lighting.",
      longDescription:
        "Durable street lighting solution with weather-resistant housing for municipal and private roads.",
      specifications: [
        { label: "Model Name / Number", value: "RPS-SL-60" },
        { label: "Light Source", value: "LED" },
        { label: "IP Rating", value: "IP66" },
        { label: "Input Voltage", value: "230V AC" },
        { label: "Usage", value: "Street & Road Lighting" },
      ],

      inputVoltage: "80V-300V AC",
        ratedFrequency: "50HZ",
        powerFactor: ">0.95",
        systemPowerEfficiency: "NA",
        thd: "25%",
        workingHumidity: "5% to 95% NON-CONDENSING",
        ledMake: "BRIDGELUX/CHANGEFANG/ EVER STAR ",
        luminiousEfficiency: ">100Lm/W (AS PER LM-80 REPORT) ",
        colorTemperature: "3000K/4000K/6500K",
        cri: "Ra >80 ",
        highVoltageCutOff: "NA ",
        ambientTemperature: "-10° to 50°C",
        ingressProtection: "IP65/IP 66/ IP AS PER IS/IEC60529-2001",
    },
  ],
  signboard:[
       {
      id: 17,
      name: "SIGNBOARD ",
      model: "RPS-EL-401",
      specs: "6-7 Hours Backup • BIS Certified",
      image: "allproduct/6.jpeg",

      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",

      // Only add fields that apply — omit any you don't need
      details: {
        // batteryType: "Lead Acid",
        // symbolType: "Exit",
        operationMode: "Maintained",
        pictogram: "Customized Text",
        mountingType: "Wall Mount",
        bodyMaterial: "MS Powder Coated",
        legendcolor: "White",
        backupTime: "3 Hours",
        inputVoltage: "110 V AC",
        ipRating: "IP20",
        size: "350x175mm",
        // lightSource: "LED",

        // cabinet: "CRC Powder coated",

        // voltage: "230v AC, 50HZ",
        // chargingTime: "8 Hours",
        // usage: "Application Factory, Mall, Office",
        // modelName: "RPS-EL 40W",
      },
    },
       {
      id: 37,
      name: "SIGNBOARD (EMERGENCY EXIT)",
      model: "RPS-EL-401",
      specs: "6-7 Hours Backup • BIS Certified",
      image: "allproduct/signboard/1.jpeg",

      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",

      // Only add fields that apply — omit any you don't need
      details: {
        // batteryType: "Lead Acid",
        // symbolType: "Exit",
        operationMode: "Maintained",
        pictogram: "Customized Text",
        mountingType: "Wall Mount",
        bodyMaterial: "MS Powder Coated",
        legendcolor: "White",
        backupTime: "3 Hours",
        inputVoltage: "110 V AC",
        ipRating: "IP20",
        size: "350x175mm",
        // lightSource: "LED",

        // cabinet: "CRC Powder coated",

        // voltage: "230v AC, 50HZ",
        // chargingTime: "8 Hours",
        // usage: "Application Factory, Mall, Office",
        // modelName: "RPS-EL 40W",
      },
    },
  ],
  signage:[
    {
      id: 18,
      name: "SIGNAGE",
      model: "RPS-EL-401",
      specs: "6-7 Hours Backup • BIS Certified",
      image: "allproduct/7.jpeg",

      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",

      details: {
        // batteryType: "Lead Acid",
        // symbolType: "Exit",
        operationMode: "Maintained",
        pictogram: "Customized Text",
        mountingType: "Wall Mount",
        bodyMaterial: "Aluminium",
        legendcolor: "Green",
        backupTime: "2 Hours",
        inputVoltage: "230 V AC",
        ipRating: "IP20",
        size: "300x150 mm",
        Brand: "PFL Power Systems",
      },
    },
       {
      id: 38,
      name: "LEFT SIGNAGE ",
      model: "RPS-EL-401",
      specs: "6-7 Hours Backup • BIS Certified",
      image: "allproduct/signage/left.jpeg",

      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",

      details: {
        // batteryType: "Lead Acid",
        // symbolType: "Exit",
        operationMode: "Maintained",
        pictogram: "Customized Text",
        mountingType: "Wall Mount",
        bodyMaterial: "Aluminium",
        legendcolor: "Green",
        backupTime: "2 Hours",
        inputVoltage: "230 V AC",
        ipRating: "IP20",
        size: "300x150 mm",
        Brand: "PFL Power Systems",
      },
    },
       {
      id: 18,
      name: "RIGHT SIGNAGE",
      model: "RPS-EL-401",
      specs: "6-7 Hours Backup • BIS Certified",
      image: "allproduct/signage/right.jpeg",

      shortDescription:
        "Premium emergency lighting with long backup and BIS certification for commercial and industrial spaces.",
      longDescription:
        "The Twin Beam Emergency Light is specially designed for commercial and industrial safety applications. It provides high brightness illumination during power failures and ensures uninterrupted visibility in emergency situations. Built with durable materials and energy-efficient LED technology, this unit delivers 6–7 hours of reliable backup while meeting BIS certification requirements.",

      details: {
        // batteryType: "Lead Acid",
        // symbolType: "Exit",
        operationMode: "Maintained",
        pictogram: "Customized Text",
        mountingType: "Wall Mount",
        bodyMaterial: "Aluminium",
        legendcolor: "Green",
        backupTime: "2 Hours",
        inputVoltage: "230 V AC",
        ipRating: "IP20",
        size: "300x150 mm",
        Brand: "PFL Power Systems",
      },
    },
  ]
};

export const productsByCategory = Object.fromEntries(
  categories.map(({ id }) => [
    id,
    (rawProducts[id] ?? []).map((item) => enrich(item, id)),
  ]),
);

export const defaultCategoryId = categories[0]?.id ?? "industrial";

export function isValidCategoryId(categoryId) {
  return categories.some((c) => c.id === categoryId);
}

export function getProductsForCategory(categoryId) {
  return productsByCategory[categoryId] ?? [];
}

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

  return getProductsForCategory(current.category)
    .filter((item) => item.slug !== slug)
    .slice(0, limit);
}

export function getWhatsAppUrl(product) {
  const text = encodeURIComponent(
    `Hi, I am interested in ${product.name} . Please share more details.`,
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const useCases = {
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
      description: "Heavy-duty LED systems designed for industrial operations.",
      image: "/usecases/manufacturing.jpg",
    },
  ],

  light: [
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
  flame: [
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

  flood: [
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

  street: [
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
































