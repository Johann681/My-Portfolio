export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#project" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const projects = [
  {
    id: 1,
    title: "Vanilla Portfolio to Explore",
    des: "Explore the fundamentals of web development with a vanilla HTML, CSS, and JavaScript portfolio.",
    img: "/p1.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://johann681.github.io/Adekola-s-portfolio-/",
  },
  {
    id: 2,
    title: "Ecommerce App",
    des: "A feature-rich eCommerce platform built with Next.js, TypeScript, and Tailwind CSS.",
    img: "/p2.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://ecommerce-website-pr12.vercel.app/",
  },
  {
    id: 3,
    title: "A1 Movies",
    des: "A movie streaming and search app that lets users explore movies and watch trailers.",
    img: "/p3.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://movie-land-4jcf.vercel.app/",
  },
  {
    id: 4,
    title: "Weather App",
    des: "A weather app that allows users to check the weather forecast for any location using real-time data.",
    img: "/p4.jpg", // Replace with the actual image path for the weather app
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://wheather-app-eta-eight.vercel.app/"
  },
  {
    id: 5,
    title: "School Website",
    des: "A dynamic website designed for a school, featuring an interactive layout, class schedules, and event updates.",
    img: "/p5.jpg", // Replace with the actual image path for the school website
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://johann681.github.io/Greater-Access-Schools/", // Update with your actual GitHub link
  },
  {
    id: 6,
    title: "3D Interactive Gaming Website",
    des: "A fully interactive 3D website created using Three.js, where users can explore and interact with 3D models.",
    img: "/p6.jpg", // Replace with the actual image path for the 3D website
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://arcane-gaming.vercel.app/"
  }
];


export const testimonials = [
  {
    quote:
      "Working with Adekola was a game-changer for our business. His attention to detail and ability to bring our vision to life was beyond impressive. Highly recommended!",
    name: "Adekola",
    title: "CEO of BrightWave Solutions",
  },
  {
    quote:
      "Batman's strategic thinking and problem-solving skills are unmatched. He brings a level of precision and efficiency that makes any project a success.",
    name: "Batman",
    title: "Tech Vigilante at Gotham Innovations",
  },
  {
    quote:
      "Philosopher Yarosh brings a unique perspective to every project, blending deep wisdom with technical excellence. A true master of his craft.",
    name: "Philosopher Yarosh",
    title: "Visionary Thinker at MetaMind Labs",
  },
  {
    quote:
      "Gabriel’s ability to transform ideas into reality is truly remarkable. His creativity and dedication make him an invaluable asset to any team.",
    name: "Gabriel",
    title: "Lead Designer at Celestial Creations",
  },
  {
    quote:
      "Adekola’s work speaks for itself. His passion for web development is evident in every project he touches. If you're looking for quality, Adekola is the one to trust.",
    name: "Tengen",
    title: "COO at Visionary Designs",
  },
];



export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },

  {
    id: 3,
    img: "/link.svg",
  },
];