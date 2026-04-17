import blogKickoffImage1 from "../../assets/blog-posts/190226-1.jpg";
import blogKickoffImage2 from "../../assets/blog-posts/190226-2.jpg";
import blogKickoffImage3 from "../../assets/blog-posts/190226-3.jpg";

import blogWorkshopImage1 from "../../assets/blog-posts/240326-1.jpg";
import blogWorkshopImage2 from "../../assets/blog-posts/240326-2.jpg";
import blogWorkshopImage3 from "../../assets/blog-posts/240326-3.jpg";
import blogWorkshopImage4 from "../../assets/blog-posts/240326-4.jpg";
import blogWorkshopImage5 from "../../assets/blog-posts/240326-5.jpg";
import blogWorkshopImage6 from "../../assets/blog-posts/240326-6.jpg";

import blogAscendImage1 from "../../assets/blog-posts/170426-1.jpg";
import blogAscendImage2 from "../../assets/blog-posts/170426-2.jpg";
import blogAscendImage3 from "../../assets/blog-posts/170426-3.jpg";
import blogAscendImage4 from "../../assets/blog-posts/170426-4.jpg";
import blogAscendImage5 from "../../assets/blog-posts/170426-5.jpg";
import blogAscendImage6 from "../../assets/blog-posts/170426-6.jpg";
import blogAscendImage7 from "../../assets/blog-posts/170426-7.jpg";
import blogAscendImage8 from "../../assets/blog-posts/170426-8.jpg";
import blogAscendImage9 from "../../assets/blog-posts/170426-9.jpg";

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
  {
    slug: "workshop-march-2026",
    title: "Our first workshop!",
    project: "Queen Bee",
    publishedAt: "2026-03-24",
    author: "Board",
    summary: "This week we held our first workshop for the Queen Bee project, covering hardware, mechanical, and software topics.",
    tags: ["Queen Bee", "Workshop"],
    images: [
      {
        src: blogWorkshopImage3,
        alt: "Our first 3D print.",
        caption: "Mechanical team celebrating the success of our first 3D print.",
      },
      {
        src: blogWorkshopImage5,
        alt: "All three groups working across disciplines during the workshop.",
      },
      {
        src: blogWorkshopImage1,
        alt: "Software started working with serial communication between the flight computer and a companion computer.",
        caption: "Software started working with serial communication between the flight computer and a companion computer.",
      },
      {
        src: blogWorkshopImage2,
        alt: "Bawan, hardware lead, giving a summary of what the hardware team has accomplished so far.",
        caption: "Bawan, hardware lead, giving a summary of what the hardware team has accomplished so far.",
      },
      {
        src: blogWorkshopImage4,
        alt: "All teams working together.",
      },
      {
        src: blogWorkshopImage6,
        alt: "And, of course, we had to order pizza for our first workshop!",
        caption: "And, of course, we had to order pizza for our first workshop!",
      },
    ],
    content: [
      "Workshop with Lift – March 18 🚀",
      "On Wednesday, March 18, Lift held a new workshop where all teams gathered to share progress and continue working on our project.",
      "We started the day with short presentations from each team, where everyone showed what they had been working on since last time. It is clear that the project is beginning to take shape!",
      "🔌 Hardware has continued searching for components and completed a full parts list for the components needed for our own PCB. This marks an important step forward in development.",
      "💻 Software has focused on communication between the Pixhawk 6C board and a companion computer, represented by a Raspberry Pi 5. In addition, they have worked on simulation and testing of Pixhawk, and developed a dummy AI model that can recognize, among other things, Fanta, salt, and french fries seasoning.",
      "🛠️ Mechanical has started work on the 3D model of “The Queen Bee”, while also test-printing a hexacopter to verify design and concepts.",
      "The workshop ended with pizza and some mingling, and it was clear that everyone was happy to be able to work together across the teams. It is so fun to see how the project is evolving, and we look forward to the continuation!",
      "All in all, a productive workshop with good progress in all teams – we look forward to seeing how the project develops further!",
      "We are now taking a well deserved Easter break, but we will be back at it after the holidays. We hope you will follow us on our journey as we continue to develop our drone swarm project.",
      "With best regards, \n The Board of Lift HVL",
    ],
  },
  {
    slug: "visit-to-ascend-ntnu",
    title: "Visit to Ascend NTNU",
    project: "Lift HVL",
    publishedAt: "2026-04-17",
    author: "Board",
    summary: "Thursdag 16th of April, Lift HVL had the opportunity to visit Ascend NTNU, a student organization at NTNU that focuses on developing autonomous drones.",
    tags: ["Ascend NTNU", "Lift HVL"],
    images: [
      {
        src: blogAscendImage1,
        alt: "View from the plane window on the way to Trondheim.",
        caption: "On our way to Trondheim — the journey begins!",
      },
      {
        src: blogAscendImage2,
        alt: "Lift HVL members getting a tour of Ascend NTNU's workshop.",
        caption: "Getting a tour of Ascend NTNU's impressive workshop facilities.",
      },
      {
        src: blogAscendImage3,
        alt: "A team member giving a thumbs up holding a Monster energy drink.",
        caption: "Erlend was very happy to be at Ascend NTNU — and even happier to find a Monster energy drink in their fridge!",
      },
      {
        src: blogAscendImage4,
        alt: "Ascend NTNU members working at their computers in the team room.",
        caption: "A glimpse into Ascend NTNU's busy team room.",
      },
      {
        src: blogAscendImage5,
        alt: "Two members posing in front of Ascend NTNU's large autonomous drone.",
        caption: "Standing next to Ascend NTNU's impressive autonomous drone.",
      },
      {
        src: blogAscendImage6,
        alt: "Close-up of Ascend NTNU's autonomous drone showing the carbon fiber frame, electronics, and orange 3D-printed parts.",
      },
      {
        src: blogAscendImage7,
        alt: "The main building of NTNU in Trondheim.",
        caption: "The main building of NTNU in Trondheim.",
      },
      {
        src: blogAscendImage8,
        alt: "Three Lift HVL members walking in Trondheim city centre.",
        caption: "Exploring Trondheim after a great visit.",
      },
      {
        src: blogAscendImage9,
        alt: "Nidaros Cathedral in Trondheim on a sunny day.",
        caption: "A quick stop at the magnificent Nidaros Cathedral.",
      },
    ],
    content: [
      "Visit to Ascend NTNU 🚁",
      "On Thursday, April 16, Lift had the opportunity to visit Ascend NTNU, a student organization at NTNU that focuses on developing autonomous drones. The visit was a great opportunity for our team to learn from their experiences and gain insights into the development of autonomous drone technology.",
      "We started the day early at around 6:30 am, with a flight from Bergen to Trondheim. After arriving in Trondheim, we were warmly welcomed by the Ascend NTNU team and given a tour of their impressive workshop facilities. It was inspiring to see the space where they design, build, and test their drones.",
      "After some few hours of touring and visiting their workshop and office, we had a great lunch together with the Ascend NTNU team. It was a great opportunity to get to know each other and exchange ideas about our respective projects.",
      "After the lunch, we walked down to the old office of Ascend NTNU, where they store all their old drones and projects. It was fascinating to see the evolution of their designs and the different approaches they have taken over the years.",
      "From there, we walked towards the city centre to find a nice place to sit down and wait for our flight back to Bergen. We had to stop for a quick visit to the Nidaros Cathedral, which is a must-see when in Trondheim. ",
      "The team from Lift HVL enjoyed some hours in the sun at a café before we headed back to the airport to catch our flight back to Bergen.",
      "We had a fantastic day visiting Ascend NTNU and learning from their experiences. It was inspiring to see the work they have done and the progress they have made in developing autonomous drones. We are grateful for the opportunity to visit them and look forward to continuing to learn from their work as we develop our own drone swarm project.",
    ],
  },
];
