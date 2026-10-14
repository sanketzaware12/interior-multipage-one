/* ===== EDIT YOUR BUSINESS DETAILS HERE (all pages read from this file) ===== */
window.SITE = {
  brand: "AURELLE", brandSub: "INTERIORS",
  tagline: "Quietly luxurious interiors, designed around the way you live.",
  phone: "+91 00000 00000",            // placeholder - replace
  whatsapp: "910000000000",            // country code + number, digits only - replace
  waText: "Hello Aurelle Interiors, I would like to discuss an interior design project.",
  email: "hello@your-domain.com",      // placeholder - replace
  address: "Studio address line, City, State, PIN (placeholder)",
  hours: "Mon - Sat: 10:00 - 18:30 | Sunday: by appointment",
  mapQuery: "Pimpri-Chinchwad, Maharashtra, India", // change to your studio address for the contact-page map
  social: { instagram: "https://instagram.com/", facebook: "https://facebook.com/", pinterest: "https://pinterest.com/", linkedin: "https://linkedin.com/" },
  formEndpoint: "",   // optional: Formspree / API URL. Empty = enquiry opens in WhatsApp
  heroVideo: "",      // optional: "assets/videos/hero.mp4"
  stats: [[120,"+","Projects completed"],[12,"","Years of practice"],[35,"+","Design partners"],[98,"%","Client satisfaction"]],
  testimonials: [
    ["Sample testimonial - replace with a real client review. Describe the project, the process and the result.","Client name","Residential project"],
    ["Sample testimonial - replace with a real client review about communication, timelines and finish quality.","Client name","Kitchen renovation"],
    ["Sample testimonial - replace with a real client review about the design experience and the final space.","Client name","Office interior"],
    ["Sample testimonial - replace with a real client review about how the team handled the budget and details.","Client name","Bedroom makeover"],
    ["Sample testimonial - replace with a real client review about the overall result and what stood out.","Client name","Living room design"]
  ],
  team: [["Team member","Principal Designer","photo-1573496359142-b8d87734a5a2"],["Team member","Senior Interior Designer","photo-1560250097-0b93528c311a"],["Team member","Project Manager","photo-1580489944761-15a19d654956"],["Team member","Design Associate","photo-1507003211169-0a1dd7228f2d"]],
  img: function (p, w) { return "https://images.unsplash.com/" + p + "?auto=format&fit=crop&q=70&w=" + (w || 1000); },
  projects: [
    {t:"Linen & Light Residence",c:"residential",l:"Residential",s:"wide",i:"photo-1600607687939-ce8a6c25118c"},
    {t:"The Quiet Lounge",c:"living",l:"Living Room",s:"tall",i:"photo-1631679706909-1844bbd07221"},
    {t:"Sage Bedroom Suite",c:"bedroom",l:"Bedroom",s:"std",i:"photo-1616594039964-ae9021a400a0"},
    {t:"Oak & Stone Kitchen",c:"kitchen",l:"Kitchen",s:"wide",i:"photo-1556909114-f6e7ad7d3136"},
    {t:"Studio Workspace",c:"commercial",l:"Commercial",s:"std",i:"photo-1497215728101-856f4ea42174"},
    {t:"Gallery Living Room",c:"living",l:"Living Room",s:"std",i:"photo-1583847268964-b28dc8f51f92"},
    {t:"Soft Neutral Retreat",c:"bedroom",l:"Bedroom",s:"tall",i:"photo-1598928506311-c55ded91a20c"},
    {t:"Courtyard Villa",c:"residential",l:"Residential",s:"std",i:"photo-1600566753190-17f0baa2a6c3"},
    {t:"Modern Galley Kitchen",c:"kitchen",l:"Kitchen",s:"std",i:"photo-1565538810643-b5bdb714032a"},
    {t:"Warm Minimal Lounge",c:"living",l:"Living Room",s:"wide",i:"photo-1554995207-c18c203602cb"},
    {t:"Terrace Residence",c:"residential",l:"Residential",s:"std",i:"photo-1600573472550-8090b5e0745e"},
    {t:"Linen Master Suite",c:"bedroom",l:"Bedroom",s:"wide",i:"photo-1600121848594-d8644e57abab"},
    {t:"Open Plan Kitchen",c:"kitchen",l:"Kitchen",s:"tall",i:"photo-1556912172-45b7abe8b7e1"},
    {t:"Executive Office",c:"commercial",l:"Commercial",s:"wide",i:"photo-1524758631624-e2822e304c36"},
    {t:"Cafe Lounge Interior",c:"commercial",l:"Commercial",s:"std",i:"photo-1604328698692-f76ea9498e76"},
    {t:"Serene Living Suite",c:"living",l:"Living Room",s:"std",i:"photo-1618220179428-22790b461013"}
  ],
  services: [
    ["Residential Interior Design","Complete home interiors, from concept to handover, tuned to your routine.","photo-1600566753086-00f18fb6b3ea","fa-house"],
    ["Living Room Design","Layered, comfortable living spaces with considered furniture and lighting.","photo-1618220179428-22790b461013","fa-couch"],
    ["Bedroom Interior Design","Restful bedrooms built on texture, storage and soft, calm palettes.","photo-1616137466211-f939a420be84","fa-bed"],
    ["Modular Kitchen Design","Efficient, beautifully detailed kitchens with durable finishes.","photo-1600607688969-a5bfcd646154","fa-kitchen-set"],
    ["Office & Commercial Interiors","Workspaces and studios that reflect your brand and support focus.","photo-1600047509807-ba8f99d2cdde","fa-building"],
    ["Space Planning & Furniture Layout","Smart layouts that improve flow, light and everyday usability.","photo-1600585154363-67eb9e2e2099","fa-ruler-combined"],
    ["Renovation & Interior Styling","Refresh existing rooms with new finishes, furniture and accessories.","photo-1600210491892-03d54c0aaf87","fa-paint-roller"],
    ["Material, Lighting & Colour Consultation","Expert guidance on palettes, finishes and lighting layers.","photo-1560185007-cde436f6a4d0","fa-lightbulb"]
  ]
};
