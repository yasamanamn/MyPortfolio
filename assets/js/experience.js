AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Graphic designer",
    cardImage: "assets/images/experience-page/4.png",
    place: "Iranikala",
    time: "(May 2020 - September 2021)",
    desp: "<li>Collaborated with cross-functional teams to ensure designs met business objectives and delivered results.</li> <li>Completed final touches for projects, ensuring all designs were print-ready and met client specifications.</li> <li>Developed creative designs for print materials, enhancing the visual appeal of the brand and increasing customer engagement.</li>",
  },
  {
    title: "Front end Developer/ UI&UX/ Graphic Desingner",
    cardImage: "assets/images/experience-page/5.png",
    place: "Payam Avaran",
    time: "(January 2022 - May 2023)",
    desp:"<li>Developed complex web applications with modern, user-friendly UI, using Vue.js, HTML, and CSS for Jopapel.com.</li><li>Created 3D UI/UX for the virtual try-on for clothing</li><li>Used UI/UX expertise on the lebasinno.com site, identifying issues, analyzing information, and providing solutions to problems.</li><li>Created attractive videos, animations, and logo motions, enhancing the visual appeal of the brand and increasing customer engagement</li>",
  },
  {
    title: "Front end internship",
    cardImage: "assets/images/experience-page/6.PNG",
    place: "Part Company",
    time: "(July 2023 - September 2023)",
    desp: "<li>Proficient in Vue.js framework with a comprehensive understanding of all its rules and guidelines for front-end development.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);



