/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Omari Hopkins",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Omari Hopkins",
    type: "website",
    url: "https://github.com/OmariHop",
  },
};

//Home Page
const greeting = {
  title: "Omari Hopkins",
  logo_name: "Welcome to my Portfilio Website",
  nickname: "He/Him",
  subTitle:
    "Current student at the University of Central Florida pursuing a bachelors degree in Computer Science",
  resumeLink:
    "https://docs.google.com/document/d/1qIXvdw3O_gnCwcp0atYFAHUm8WoqOrU56x1lRdyFIZE/edit",
  portfolio_repository: "https://github.com/OmariHop",
  githubProfile: "https://github.com/OmariHop",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/OmariHop",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/omari-hopkins-381a37263/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:OmariHop@knights.ucf.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Software Development",
      skills: [
        " Experience working in an undergraduate research lab that specializes in assitive technologies for individuals with visual, auditory, and other impairments",
        " Participated in multiple hackathons and group projects in a collaborative setting",
        " Involved in multiple programming related organizations such as KnightHacks and the National Society of Black Engineers",
      ],
      softwareSkills: [],
    },
    {
      title: "Languages and Frameworks",
      skills: [
        " Built a responsive website front end using React.js",
        " Devloped a window tool in Python whilst utilizing OpenWeather API in order to display the current weather statistics in the greater Orlando Area",
        " Currently working on working with AI for real-time object detection and distance calculation",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {},
        },
        {
          skillName: "C Programming",
          fontAwesomeClassname: "teenyicons:c-outline",
          style: {
            color: "green",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "University of Central Florida",
      subtitle: "BS in Computer Science",
      alt_name: "IIITDM Kurnool",
      duration: "2021 - Spring 2025",
      descriptions: [
        "Currently obtaining a BS in Computer Science, involved in multiple student organizations",
        "Have taken classes that revolve around learning the basics in Python, Java, and C whilst also digesting the fundamental data structures in all of them",
      ],
      website_link: "https://www.ucf.edu/",
    },
    {
      title: "Monarch High School",
      subtitle: "HS Diploma",
      duration: "2017 - 2021",
      descriptions: [
        "Obtained a High School Diploma whilst acheiivng a 4.5 GPA as a Dual Enrollment Student",
        "Awards: AP Scholar, Top 10% in graduating class, involved in multiple student organizations",
      ],
      website_link: "https://www.browardschools.com/monarch",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Related Work Experience",
  description:
    "Below is a list of my previous and current work experince pertaining to the umbrella of Computer Science",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Undergraduate Research Assistant",
          company: "WEAR LAB AT UCF",
          company_url: "http://mae.ucf.edu/joonpark/",
          logo_path: "1597641882360.jpg",
          duration: "February 2023 - Present",
          location: "Orlando, FL",
          description:
            "Conducted research on relevant technologies such as machine learning, object detection, and distance calculation to inform software design and development.",
          color: "#0879bf",
        },
        {
          title: "High School Teacher's Assistant",
          company: "Monarch High School",
          company_url: "https://monarchaice.weebly.com/how-to-apply.html",
          logo_path: "Monarch_High_Shield.jpg",
          duration: "Aug 2019 - Dec 2019",
          location: "Coconut Creek, FL",
          description:
            "Assisted the head of the IT department with the design of the school’s Cambridge program website.",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here are a list of projects I have completed via hackathons, group, and solo work",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "unnamed (6).jpg",
    description:
      "Below is my resume and any other social platforms to contact me. Thank you!",
  },
  blogSection: {},
  addressSection: {},
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
