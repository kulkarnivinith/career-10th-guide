const careerData = {
  science: [
    { title: "Doctor", desc: "Study MBBS and work in healthcare." },
    { title: "Engineer", desc: "Specialize in fields like Computer, Mechanical, Civil etc." },
    { title: "Scientist", desc: "Research in Physics, Chemistry, Biology, and more." },
    { title: "Pharmacist", desc: "Work in drug development and medicine distribution." },
    { title: "Pilot", desc: "Fly commercial or defense aircraft." },
    { title: "Biotechnologist", desc: "Work with living systems and organisms." },
    { title: "Data Analyst", desc: "Use data and math to solve problems." },
    { title: "Forensic Expert", desc: "Assist in solving crimes using science." },
    { title: "Veterinarian", desc: "Treat animals medically." },
    { title: "Environmental Scientist", desc: "Work on saving nature and climate." }
  ],
  commerce: [
    { title: "Chartered Accountant", desc: "Manage and audit financial records." },
    { title: "Banker", desc: "Work in financial institutions." },
    { title: "Business Analyst", desc: "Help companies improve processes." },
    { title: "Stock Broker", desc: "Trade stocks and give investment advice." },
    { title: "Economist", desc: "Study and analyze economic data." },
    { title: "Digital Marketer", desc: "Promote brands online using digital tools." },
    { title: "Company Secretary", desc: "Ensure company compliance and administration." },
    { title: "Tax Consultant", desc: "Guide clients with tax saving and filing." },
    { title: "Finance Manager", desc: "Handle budgets and finance strategies." },
    { title: "Entrepreneur", desc: "Start and run your own business." }
  ],
  arts: [
    { title: "Journalist", desc: "Report news and write articles." },
    { title: "Psychologist", desc: "Study human behavior and mental health." },
    { title: "Teacher", desc: "Educate students in various subjects." },
    { title: "Lawyer", desc: "Practice law and represent clients." },
    { title: "Actor", desc: "Work in films, TV or theatre." },
    { title: "Graphic Designer", desc: "Create visual concepts and graphics." },
    { title: "Historian", desc: "Study and analyze past events." },
    { title: "Social Worker", desc: "Support people and communities." },
    { title: "Fashion Designer", desc: "Design clothes and accessories." },
    { title: "Author", desc: "Write books, novels or poems." }
  ],
  vocational: [
    { title: "Electrician", desc: "Install and fix electrical systems." },
    { title: "Plumber", desc: "Work with water and piping systems." },
    { title: "Chef", desc: "Cook professionally in restaurants." },
    { title: "Beautician", desc: "Provide skincare and grooming services." },
    { title: "Tailor", desc: "Design and stitch clothes." },
    { title: "Automobile Technician", desc: "Repair and maintain vehicles." },
    { title: "Welder", desc: "Join metals for buildings or products." },
    { title: "Carpenter", desc: "Make and repair furniture or woodwork." },
    { title: "Photographer", desc: "Capture moments with a camera." },
    { title: "Baker", desc: "Create cakes, bread, and sweets." }
  ]
};

function showCareers(stream) {
  const careerList = careerData[stream];
  const container = document.getElementById("careers");
  container.innerHTML = ""; // Clear previous

  careerList.forEach(career => {
    const card = document.createElement("div");
    card.className = "career-card";
    card.innerHTML = `<strong>${career.title}</strong><p>${career.desc}</p>`;
    container.appendChild(card);
  });
}
