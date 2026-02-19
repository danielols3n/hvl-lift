import blogKickoffImage1 from "../../assets/blog-posts/190226-1.jpg";
import blogKickoffImage2 from "../../assets/blog-posts/190226-2.jpg";
import blogKickoffImage3 from "../../assets/blog-posts/190226-3.jpg";

export type BlogContentBlock =
  | string
  | {
      subtitle?: string;
      text: string;
    };

export type BlogPost = {
  slug: string;
  title: string;
  project: string;
  publishedAt: string;
  author: string;
  summary: string;
  tags: string[];
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  content: BlogContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "queen-bee-kickoff",
    title: "Kickoff week!",
    project: "Queen Bee",
    publishedAt: "2026-02-19",
    author: "Board",
    summary: "This week we kicked off our first project in Lift HVL, Queen Bee.",
    tags: ["Queen Bee", "Team 2026", "Planning"],
    images: [
      {
        src: blogKickoffImage1,
        alt: "KiCad seminar with Bawan, our hardware lead.",
        caption: "KiCad seminar with Bawan, our hardware lead.",
      },
      {
        src: blogKickoffImage2,
        alt: "Mechanical planning session for the drone swarm locking mechanism.",
        caption:
          "Mechanical had a planning session for the development of the locking mechanism for the drone swarm.",
      },
      {
        src: blogKickoffImage3,
        alt: "KiCad seminar session with the team.",
      },
    ],
    content: [
      "After several months of dedicated work from the board of Lift HVL, we are finally up and running.",
      "We founded the organization in November 2025 with a shared vision: to build something ambitious, innovative, and meaningful. After a well-deserved Christmas break, we officially launched our recruitment process, and the response exceeded our expectations.",
      "We received 32 applications from students across a wide range of study programs, including Electrical Engineering, Computer Engineering, Information Technology, Surveying and Geomatics, and more. Seeing such strong interdisciplinary interest confirmed what we had hoped: innovation thrives where different fields meet.",
      "Selecting the final team was no easy task. After careful consideration, we landed on 17 talented students representing a diverse academic background. This group will form the foundation of Lift HVL moving forward, and we could not be more excited about the team we assembled.",
      "\n",
      {
        subtitle: "Hardware: From Idea to Circuit Board",
        text: "This week marked our very first departmental meetings.",
      },
      "On Monday, the Hardware team kicked things off with an introductory course in KiCad, the software we will use to design our own custom printed circuit boards (PCBs). Developing our own electronics is a major milestone for Lift HVL. It allows us to tailor the drone’s systems exactly to our needs and gives our members hands-on experience with professional-grade tools.",
      "This is where the drone’s nervous system begins.",
      "\n",
      {
        subtitle: "Mechanical: Designing More Than Just a Frame",
        text: "On Tuesday, the Mechanical team held its first meeting of the semester.",
      },
      "Their task? Designing the drone — entirely from scratch.",
      "But this isn’t just about making something that looks good. The drone must withstand forces from both us and the universe itself. Structural integrity, vibration resistance, weight optimization, aerodynamics — everything matters.",
      "During this session, they also launched the first official task of the year: developing the locking mechanism that will attach the smaller drones to what we call “The Queen Bee.” This central drone will act as a carrier and coordination unit in our future autonomous swarm system.",
      "Designing this mechanism is both a technical and conceptual milestone. It’s the first physical link in what will eventually become a coordinated drone ecosystem.",
      "\n",
      {
        subtitle: "Software: Building the Brain",
        text: "On Wednesday, it was time for the Software team to begin.",
      },
      "Software development depends heavily on progress from Hardware, so the team discussed how to make the most of the semester while waiting for physical components to be finalized.",
      "Fortunately, Lift HVL has already initiated the order of a prototype flight computer, ensuring the Software team won’t be left idle. In parallel, they began outlining core drone functionality and system architecture.",
      "By the end of this project, we’re fairly certain there will be more than just “a few lines of code.”",
      "\n",
      {
        subtitle: "One Week In — Confidence Growing",
        text: "Even though we are only one week into the project, our confidence grows with every meeting, discussion, and sketch.",
      },
      "We have assembled a highly motivated team with impressive competence across disciplines. Just as importantly, we have gathered students who are eager to learn, collaborate, and challenge themselves.",
      "Our goal is ambitious: to develop an autonomous drone swarm by May. It won’t be easy. But with the team we now have, we truly believe it is possible.",
      "We hope you’ll follow us on our journey as Lift HVL works toward making that vision take flight.",
      "With best regards, \n The Board of Lift HVL",
    ],
  },
];
