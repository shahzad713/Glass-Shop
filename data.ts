import {
  Layers,
  Grid,
  Shield,
  Umbrella,
  Sofa,
  Building2,
  Wrench,
  Hammer,
  Maximize,
  Wind,
  Sun,
  Lock,
  Droplets,
  Lightbulb,
  Store,
  AlignJustify,
  Paintbrush,
  MoveHorizontal,
  ShieldCheck,
  BoxSelect,
  VolumeX,
  Sparkles,
  Factory,
  Home,
  Circle,
  Key,
} from "lucide-react";
import { ServiceItem, ProjectItem, TeamMember, ProductItem } from "./types";

// --- SERVICES (40 Items) ---
export const services: ServiceItem[] = [
  // Glass & Mirrors
  {
    id: "g1",
    title: "Office Glass Partitions",
    category: "Glass & Mirrors",
    description: "Soundproof, 12mm toughened glass cabins for modern offices.",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    icon: BoxSelect,
  },
  {
    id: "g2",
    title: "Shower Glass Enclosures",
    category: "Glass & Mirrors",
    description: "Custom frameless shower cabins with anti-scale coating.",
    imageUrl:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    icon: Droplets,
  },
  {
    id: "g3",
    title: "12mm Toughened Glass",
    category: "Glass & Mirrors",
    description: "High-safety tempered glass for shop fronts and doors.",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    icon: Shield,
  },
  {
    id: "g4",
    title: "Laminated Safety Glass",
    category: "Glass & Mirrors",
    description: "Double-layer safety glass for banks and high-security areas.",
    imageUrl:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
    icon: ShieldCheck,
  },
  {
    id: "g5",
    title: "LED Bathroom Mirrors",
    category: "Glass & Mirrors",
    description: "Smart touch-sensor LED mirrors for luxury bathrooms.",
    imageUrl:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
    icon: Lightbulb,
  },
  {
    id: "g6",
    title: "Frameless Glass Doors",
    category: "Glass & Mirrors",
    description:
      "Minimalist patch-fitting glass doors for commercial entryways.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    icon: Maximize,
  },
  {
    id: "g7",
    title: "Retail Shop Fronts",
    category: "Glass & Mirrors",
    description: "Floor-to-ceiling glass display windows for malls in DHA.",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    icon: Store,
  },
  {
    id: "g8",
    title: "Glass Balcony Railings",
    category: "Glass & Mirrors",
    description: "Modern glass railings with stainless steel fittings.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
    icon: AlignJustify,
  },
  {
    id: "g9",
    title: "Glass Table Tops",
    category: "Glass & Mirrors",
    description: "Custom cut, beveled edge glass tops for dining tables.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1674935640317-919c9f9f91ea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Layers,
  },
  {
    id: "g10",
    title: "Decorative Etched Glass",
    category: "Glass & Mirrors",
    description: "Laser-etched and frosted designs for privacy and art.",
    imageUrl:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop",
    icon: Paintbrush,
  },

  // Aluminum & Steel
  {
    id: "a1",
    title: "Aluminum Sliding Windows",
    category: "Aluminum & Steel",
    description: "Smooth sliding aluminum windows for residential villas.",
    imageUrl: "https://shorturl.at/u86un",
    icon: MoveHorizontal,
  },
  {
    id: "a2",
    title: "Heavy Duty Aluminum Doors",
    category: "Aluminum & Steel",
    description: "Robust aluminum doors for high-traffic areas.",
    imageUrl: "https://shorturl.at/wHqUo",
    icon: Grid,
  },
  {
    id: "a3",
    title: "Steel Safety Grills",
    category: "Aluminum & Steel",
    description: "Decorative and secure steel grills for windows.",
    imageUrl:
      "https://mccoymart.com/post/wp-content/webp-express/webp-images/uploads/30-07-24-Window-Featutre-850x400.jpg.webp",
    icon: ShieldCheck,
  },
  {
    id: "a4",
    title: "Staircase Railings",
    category: "Aluminum & Steel",
    description: "SS and Aluminum railings for stairs and terraces.",
    imageUrl:
      "https://images.unsplash.com/photo-1668911492597-aa358934d750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3RhaXJjYXNlJTIwUmFpbGluZ3N8ZW58MHx8MHx8fDA%3D",
    icon: AlignJustify,
  },
  {
    id: "a5",
    title: "Automated Main Gates",
    category: "Aluminum & Steel",
    description: "Remote-controlled steel and aluminum main gates.",
    imageUrl:
      "https://i.pinimg.com/1200x/1d/5c/a1/1d5ca1acfd875bce71a897b5bfa48f27.jpg",
    icon: Key,
  },
  {
    id: "a6",
    title: "Structural Steel Framing",
    category: "Aluminum & Steel",
    description: "Heavy steel support structures for large glass facades.",
    imageUrl:
      "https://i.pinimg.com/736x/67/f7/77/67f7779a66ca4f30f89877cb47ea8091.jpg",
    icon: Hammer,
  },
  {
    id: "a7",
    title: "Aluminum Kitchen Cabinets",
    category: "Aluminum & Steel",
    description: "Termite-proof, long-lasting aluminum kitchen fittings.",
    imageUrl:
      "https://i.pinimg.com/1200x/05/5e/40/055e40745711375a6f090af96af9b082.jpg",
    icon: BoxSelect,
  },
  {
    id: "a8",
    title: "Aluminum Office Partitions",
    category: "Aluminum & Steel",
    description: "Modular aluminum partitions with glass inserts.",
    imageUrl:
      "https://i.pinimg.com/736x/99/08/25/9908256f57e8df7b37302e330865c1b4.jpg",
    icon: Grid,
  },

  // UPVC
  {
    id: "u1",
    title: "UPVC Sliding Windows",
    category: "UPVC Solutions",
    description: "Energy-saving UPVC windows perfect for Lahore weather.",
    imageUrl:
      "https://i.pinimg.com/736x/a8/64/b9/a864b9a9741a7004118939f288d3e541.jpg",
    icon: MoveHorizontal,
  },
  {
    id: "u2",
    title: "UPVC Casement Windows",
    category: "UPVC Solutions",
    description: "Airtight windows offering maximum noise reduction.",
    imageUrl:
      "https://i.pinimg.com/736x/59/20/5b/59205b948a690826c7bdf18ea7bcf575.jpg",
    icon: Maximize,
  },
  {
    id: "u3",
    title: "UPVC French Doors",
    category: "UPVC Solutions",
    description: "Stylish double doors opening to patios or balconies.",
    imageUrl:
      "https://i.pinimg.com/1200x/ce/81/57/ce815782ee293ef7106b1347f77b181b.jpg",
    icon: Grid,
  },
  {
    id: "u4",
    title: "Wood-Finish UPVC",
    category: "UPVC Solutions",
    description: "UPVC frames with realistic wooden texture laminates.",
    imageUrl:
      "https://i.pinimg.com/736x/55/ab/12/55ab12609d45d22744106e16278b8952.jpg",
    icon: Layers,
  },
  {
    id: "u5",
    title: "Soundproof Glazing",
    category: "UPVC Solutions",
    description: "Double glazed UPVC units for silence in busy areas.",
    imageUrl:
      "https://i.pinimg.com/736x/58/56/ac/5856acde351a06a6d745533ec49abd85.jpg",
    icon: VolumeX,
  },

  // Fiberglass
  {
    id: "f1",
    title: "Car Parking Sheds",
    category: "Fiberglass Solutions",
    description: "Durable fiberglass parking shades for homes and offices.",
    imageUrl:
      "https://i.pinimg.com/736x/51/4d/4e/514d4e73bf6e3c2a6897d3d807b4a873.jpg",
    icon: Umbrella,
  },
  {
    id: "f2",
    title: "Rooftop Fiber Shelters",
    category: "Fiberglass Solutions",
    description: "Weatherproof fiber rooms for rooftop storage or sitting.",
    imageUrl:
      "https://i.pinimg.com/1200x/c0/ec/20/c0ec204cc7c6470c104ef59276f3f3c5.jpg",
    icon: Home,
  },
  {
    id: "f3",
    title: "Industrial Fiber Roofing",
    category: "Fiberglass Solutions",
    description: "Translucent roofing sheets for factories and warehouses.",
    imageUrl:
      "https://i.pinimg.com/736x/57/34/a7/5734a78346191d1d374a6a3c7d00cdf2.jpg",
    icon: Factory,
  },
  {
    id: "f4",
    title: "Fiberglass Domes",
    category: "Fiberglass Solutions",
    description: "Architectural domes for mosques and entrance halls.",
    imageUrl:
      "https://i.pinimg.com/1200x/a9/2f/9a/a92f9ac6b7f2c82ff88843212681f40b.jpg",
    icon: Circle,
  },
  {
    id: "f5",
    title: "Fiber Water Tank Covers",
    category: "Fiberglass Solutions",
    description: "Hygienic and durable covers for concrete water tanks.",
    imageUrl:
      "https://i.pinimg.com/1200x/54/62/da/5462da19c6841e5c354dfed8a0fa1e4a.jpg",
    icon: Droplets,
  },

  // Interior & Advanced
  {
    id: "i1",
    title: "Decorative Wall Paneling",
    category: "Interior & Decorative",
    description: "Padded fabric and cotton wall panels for bedrooms.",
    imageUrl:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    icon: Sofa,
  },
  {
    id: "i2",
    title: "Window Blinds",
    category: "Interior & Decorative",
    description: "Roller, vertical, and venetian blinds for windows.",
    imageUrl:
      "https://i.pinimg.com/1200x/f5/fd/97/f5fd97a15877231744df4fd612212b76.jpg",
    icon: AlignJustify,
  },
  {
    id: "i3",
    title: "Spider Glazing Systems",
    category: "Advanced Solutions",
    description: "Seamless glass curtain walls using spider fittings.",
    imageUrl:
      "https://i.pinimg.com/736x/85/bd/05/85bd05343f29c606f4f93eb35926a777.jpg",
    icon: Building2,
  },
  {
    id: "i4",
    title: "Glass Skylights",
    category: "Advanced Solutions",
    description: "Natural light solutions with structural glass roofs.",
    imageUrl:
      "https://i.pinimg.com/1200x/41/26/fc/4126fc8f6519a443dcac8d40d0792040.jpg",
    icon: Sun,
  },
  {
    id: "i5",
    title: "Automatic Sliding Doors",
    category: "Advanced Solutions",
    description: "Sensor-operated glass doors for malls and hospitals.",
    imageUrl:
      "https://i.pinimg.com/1200x/19/99/69/19996938e9d13287fec718d520bf229e.jpg",
    icon: MoveHorizontal,
  },
  {
    id: "i6",
    title: "ACP Cladding",
    category: "Advanced Solutions",
    description: "Aluminum Composite Panels for modern building exteriors.",
    imageUrl:
      "https://i.pinimg.com/736x/70/42/a4/7042a44b592c2b3fb96bbb16b3e28dc2.jpg",
    icon: Layers,
  },

  // Repair
  {
    id: "r1",
    title: "Emergency Glass Repair",
    category: "Repair & Maintenance",
    description: "24/7 replacement of broken windows and doors.",
    imageUrl:
      "https://i.pinimg.com/1200x/8c/2d/64/8c2d64cd0c8d5faebae29dad5e303dbb.jpg",
    icon: Wrench,
  },
  {
    id: "r2",
    title: "Door Closer Fixing",
    category: "Repair & Maintenance",
    description: "Repair and adjustment of floor springs and door closers.",
    imageUrl:
      "https://i.pinimg.com/1200x/f8/e7/6a/f8e76a8b771896d625d6591908726be9.jpg",
    icon: Wrench,
  },
  {
    id: "r3",
    title: "Window Leakproofing",
    category: "Repair & Maintenance",
    description: "Silicon sealing to prevent water and dust leakage.",
    imageUrl:
      "https://i.pinimg.com/1200x/8b/6e/07/8b6e070d7b6ec46100b1f8c493ddc57b.jpg",
    icon: Droplets,
  },
  {
    id: "r4",
    title: "Glass Polishing",
    category: "Repair & Maintenance",
    description: "Removal of scratches and stains from existing glass.",
    imageUrl:
      "https://i.pinimg.com/1200x/ab/69/87/ab698708c151ec303c67ae2f5a4e5b8b.jpg",
    icon: Sparkles,
  },
];

// --- PROJECTS (20 Items) ---
export const projects: ProjectItem[] = [
  {
    id: "p1",
    title: "Bahria Town Luxury Villa",
    location: "Bahria Town, Sector C",
    description: "Full exterior spider glazing and aluminum windows.",
    fullDescription:
      "A modern 1-kanal villa requiring complete exterior glazing. We installed 12mm tempered spider glass for the main facade and soundproof UPVC windows for all bedrooms.",
    client: "Mr. Usman Tariq",
    date: "March 2024",
    servicesUsed: ["Spider Glazing", "UPVC Windows", "Glass Railings"],
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-60c37c66321e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p2",
    title: "Corporate Office Interiors",
    location: "DHA Phase 6, Lahore",
    description: "12mm glass partitions and automated doors.",
    fullDescription:
      "Designed and installed frameless glass partitions for a software house. Included automated sensor doors for the main entrance and frosted films for meeting rooms.",
    client: "TechSolutions Pvt Ltd",
    date: "January 2024",
    servicesUsed: ["Glass Partitions", "Automatic Doors", "Frosted Film"],
    imageUrl:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p3",
    title: "Emporium Mall Facade",
    location: "Johar Town, Lahore",
    description: "Curtain wall system and ACP cladding repair.",
    fullDescription:
      "Maintenance and panel replacement for the exterior curtain wall system, ensuring safety and restoring the pristine look of the mall.",
    client: "Nishat Group",
    date: "December 2023",
    servicesUsed: ["ACP Cladding", "Curtain Wall", "Maintenance"],
    imageUrl:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p4",
    title: "Askari 11 Apartments",
    location: "Askari 11, Lahore",
    description: "UPVC windows installation for 50+ units.",
    fullDescription:
      "Large scale project involving the supply and installation of energy-efficient UPVC sliding windows for a new apartment block.",
    client: "Army Housing",
    date: "November 2023",
    servicesUsed: ["UPVC Windows", "Mosquito Nets"],
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p5",
    title: "MM Alam Road Boutique",
    location: "Gulberg, Lahore",
    description: "Decorative mirrors and frameless shop front.",
    fullDescription:
      "High-end retail fit-out featuring 12mm clear tempered glass shop front and custom-cut decorative mirrors for the interior.",
    client: "Sapphire Retail",
    date: "October 2023",
    servicesUsed: ["Shop Fronts", "Decorative Mirrors"],
    imageUrl:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p6",
    title: "Industrial Fiber Shed",
    location: "Sundar Industrial Estate",
    description: "Heavy-duty fiberglass roofing for warehouse.",
    fullDescription:
      "Fabrication and installation of a 5000 sq.ft fiberglass shed structure for raw material storage protection against rain and sun.",
    client: "Packages Ltd",
    date: "September 2023",
    servicesUsed: ["Fiberglass Sheds", "Steel Fabrication"],
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p7",
    title: "University Campus Glazing",
    location: "Bhira University, Lahore",
    description: "Structural steel and glass corridors.",
    fullDescription:
      "Connecting two academic blocks with a modern steel and glass covered walkway.",
    client: "Bhira University Admin",
    date: "August 2023",
    servicesUsed: ["Structural Steel", "Laminated Glass"],
    imageUrl:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p8",
    title: "Winterland Park",
    location: "Bahria Town, Lahore",
    description: "Specialized thermal glass installations.",
    fullDescription:
      "Installation of specialized multi-layered insulated glass units to maintain sub-zero temperatures inside the park.",
    client: "Winterland Management",
    date: "July 2023",
    servicesUsed: ["Insulated Glass", "Thermal Break Aluminum"],
    imageUrl:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p9",
    title: "Ary Studios Soundproofing",
    location: "Bahria Town, Lahore",
    description: "Acoustic glass paneling for studios.",
    fullDescription:
      "High-performance acoustic glazing to ensure complete sound isolation for recording studios.",
    client: "ARY Network",
    date: "June 2023",
    servicesUsed: ["Acoustic Glass", "Aluminum Partitions"],
    imageUrl:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p10",
    title: "Motorway Toll Plaza",
    location: "Lahore-Islamabad Motorway",
    description: "Steel structure and glass canopy.",
    fullDescription:
      "Heavy steel fabrication and toughened glass canopy installation for toll booths.",
    client: "NHA",
    date: "May 2023",
    servicesUsed: ["Steel Fabrication", "Toughened Glass"],
    imageUrl:
      "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p11",
    title: "Valencia Town Residence",
    location: "Valencia Town, Lahore",
    description: "Complete UPVC window solution.",
    fullDescription:
      "Replaced old aluminum windows with modern, energy-efficient UPVC sliding windows.",
    client: "Mrs. Farida Khan",
    date: "April 2023",
    servicesUsed: ["UPVC Windows"],
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p12",
    title: "Zaitoon Colony Commercial",
    location: "Zaitoon Colony",
    description: "Aluminum cladding and glass facade.",
    fullDescription:
      "Modernization of a commercial plaza face with silver ACP cladding and blue reflective glass.",
    client: "Zaitoon Developers",
    date: "March 2023",
    servicesUsed: ["ACP Cladding", "Reflective Glass"],
    imageUrl:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p13",
    title: "Fazaia Housing Gym",
    location: "Fazaia Housing, Lahore",
    description: "Large mirrors and shower partitions.",
    fullDescription:
      "Installed wall-to-wall gym mirrors and glass shower enclosures in the changing rooms.",
    client: "Fazaia Club",
    date: "February 2023",
    servicesUsed: ["Wall Mirrors", "Shower Cabins"],
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p14",
    title: "Lake City Villa",
    location: "Lake City, Lahore",
    description: "Custom fiberglass car parking shed.",
    fullDescription:
      "Designed a cantilever fiberglass shed for 3 cars matching the house aesthetics.",
    client: "Mr. Sohail",
    date: "January 2023",
    servicesUsed: ["Fiberglass Shed"],
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p15",
    title: "DHA Raya Golf Club",
    location: "DHA Raya",
    description: "Glass railings for clubhouse terrace.",
    fullDescription:
      "Premium 12mm tempered glass railings with seamless floor mounting for unobstructed views.",
    client: "DHA Management",
    date: "December 2022",
    servicesUsed: ["Glass Railings"],
    imageUrl:
      "https://images.unsplash.com/photo-1599309927702-869c9b54c868?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p16",
    title: "Medical Center Entrance",
    location: "Johar Town",
    description: "Automatic sliding glass doors.",
    fullDescription:
      "Installed hygiene-friendly touchless automatic sliding doors for the main patient entrance.",
    client: "Doctors Hospital",
    date: "November 2022",
    servicesUsed: ["Automatic Doors"],
    imageUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p17",
    title: "Model Town House",
    location: "Model Town, Lahore",
    description: "Skylight installation in courtyard.",
    fullDescription:
      "Structural glass skylight to cover the central courtyard while allowing natural light.",
    client: "Mr. Nadeem",
    date: "October 2022",
    servicesUsed: ["Skylights", "Structural Glazing"],
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p18",
    title: "Bahria Orchard Mosque",
    location: "Bahria Orchard",
    description: "Fiberglass dome and window grills.",
    fullDescription:
      "Fabrication of a decorative fiberglass dome and aluminum safety grills for windows.",
    client: "Mosque Committee",
    date: "September 2022",
    servicesUsed: ["Fiberglass Dome", "Safety Grills"],
    imageUrl:
      "https://images.unsplash.com/photo-1557053503-0c252e5c8093?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p19",
    title: "Packages Mall Kiosks",
    location: "Walton Road",
    description: "Glass display counters.",
    fullDescription: "UV bonded glass display counters for jewelry kiosks.",
    client: "Various Tenants",
    date: "August 2022",
    servicesUsed: ["UV Bonding", "Display Glass"],
    imageUrl:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p20",
    title: "State Life Building",
    location: "Davis Road",
    description: "Office aluminum partitioning.",
    fullDescription:
      "Renovation of an entire floor with powder-coated aluminum partitions.",
    client: "State Life",
    date: "July 2022",
    servicesUsed: ["Aluminum Partitions"],
    imageUrl:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=800&auto=format&fit=crop",
  },
];

// --- TEAM (10 Items) ---
export const team: TeamMember[] = [
  {
    id: "t1",
    name: "Usman Ali",
    role: "CEO & Founder",
    bio: "25 years of leadership in Pakistan’s glass and aluminum industry. Expert in large-scale commercial facades.",
    imageUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "t2",
    name: "Ahmed Raza",
    role: "Project Director",
    bio: "Civil engineer specializing in structural glazing and high-rise installations in Bahria Town.",
    imageUrl:
      "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "t3",
    name: "Bilal Khan",
    role: "Head of Fabrication",
    bio: "Master craftsman in aluminum and steel joinery with 15 years of hands-on experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "t4",
    name: "Zainab Bibi",
    role: "Interior Design Lead",
    bio: "Creative visionary for decorative glass, wall paneling, and modern residential interiors.",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "t5",
    name: "Imran Sheikh",
    role: "Site Supervisor (DHA)",
    bio: "Ensures quality control and timely delivery for all our DHA and Cantt projects.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "t6",
    name: "Rashid Mehmood",
    role: "Senior Technician",
    bio: "Specialist in automatic door systems and sensor glass installations.",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "t7",
    name: "Kashif Bhatti",
    role: "Fiberglass Specialist",
    bio: "Expert in molding and installing fiberglass sheds and industrial roofing.",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "t8",
    name: "Noman Tariq",
    role: "Safety Officer",
    bio: "Certified safety professional ensuring zero accidents on all high-rise sites.",
    imageUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "t9",
    name: "Ali Hassan",
    role: "Sales Manager",
    bio: "The friendly face connecting clients with the perfect glass solutions for their homes.",
    imageUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "t10",
    name: "Fahad Mustafa",
    role: "Logistics Coordinator",
    bio: "Manages the safe transport of fragile glass and heavy steel to sites across Lahore.",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  },
];

// --- PRODUCTS (8 Items) ---
export const products: ProductItem[] = [
  {
    id: "prod1",
    name: "Tempered Glass 12mm",
    category: "Glass",
    specs: "12mm thickness, impact resistant",
    description: "High-grade safety glass for partitions and doors.",
    imageUrl:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "prod2",
    name: "Aluminum Sliding Profile",
    category: "Aluminum",
    specs: "Series 2000, Powder Coated",
    description: "Durable aluminum profiles for window fabrication.",
    imageUrl:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "prod3",
    name: "UPVC Window Frame",
    category: "UPVC",
    specs: "Double Glazed Ready, White",
    description: "Energy efficient frames ensuring thermal insulation.",
    imageUrl:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "prod4",
    name: "Fiberglass Sheet",
    category: "Fiberglass",
    specs: "2mm - 5mm, UV Protected",
    description: "Corrugated and plain sheets for roofing.",
    imageUrl:
      "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "prod5",
    name: "Spider Fittings (SS)",
    category: "Hardware",
    specs: "304 Grade Stainless Steel",
    description: "Heavy duty fittings for structural glazing.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "prod6",
    name: "Door Closer Machine",
    category: "Hardware",
    specs: "Hydraulic, Floor Spring",
    description: "Smooth operating machines for glass doors.",
    imageUrl:
      "https://images.unsplash.com/photo-1589820296156-2454bb8a6d54?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "prod7",
    name: "Frosted Glass Film",
    category: "Decorative",
    specs: "Self-adhesive, Patterned",
    description: "Privacy films for office partitions.",
    imageUrl:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "prod8",
    name: "Silicon Sealant",
    category: "Adhesives",
    specs: "Weatherproof, Clear/Black",
    description: "Industrial grade sealant for glass waterproofing.",
    imageUrl:
      "https://images.unsplash.com/photo-1632924154823-74b971a07014?q=80&w=800&auto=format&fit=crop",
  },
];
