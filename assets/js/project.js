AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Habit-tracker project (vue.js)",
    cardImage: "assets/images/project-page/3.png",
    Previewlink: "assets/images/project-page/6.png",
  },
  {
    title: "Ostad Yar website ui/ux-flutter",
    cardImage: "assets/images/project-page/24.png",
    Previewlink: "assets/images/project-page/24.png",
  },
  {
    title: "Ostad Yar Application  ui/ux-flutter",
    cardImage: "assets/images/project-page/26.png",
    Previewlink: "assets/images/project-page/26.png",
  },
  {
    title: "Changing parts of Jopopel site (vue.js)",
    cardImage: "assets/images/project-page/9.png",
    Previewlink: "https://jopapel.com/",
  },
  {
    title: "Time site (html,css,js)",
    cardImage: "assets/images/project-page/22.png",
    Previewlink: "assets/images/project-page/22.png",
  },
  {
    title: "the human body's 3D scan application (ui/ux)",
    cardImage: "assets/images/project-page/11.png",
    Previewlink:"assets/images/project-page/11.png",
  },
  {
    title: "the Virtual fitting room (ui/ux)",
    cardImage: "assets/images/project-page/12.png",
    Previewlink: "https://lebasinno.com/",
  },
  {
    title: " lebasinno website (ui/ux)",
    cardImage: "assets/images/project-page/13.png",
    Previewlink: "https://lebasinno.com/",
  },
  {
    title: "Designing a order form for Iran Talent company (photoshop,illustrator)",
    cardImage: "assets/images/project-page/1page.jpg",
    Previewlink: "assets/images/project-page/2page.jpg",
  },
  {
    title: "Designing business card and Poster for Raf company (photoshop)",
    cardImage: "assets/images/project-page/14.jpg",
    Previewlink: "assets/images/project-page/16.jpg",
  },
  {
    title: "Designing business card and Poster for Lebasinno (photoshop)",
    cardImage: "assets/images/project-page/15.png",
    Previewlink: "assets/images/project-page/2.jpg",
  },
  {
    title: "Designing Billboard for Mihan ice cream (photoshop)",
    cardImage: "assets/images/project-page/6.jpg",
    Previewlink: "assets/images/project-page/6.jpg",
  },
  {
    title: "Creating an image (photoshop)",
    cardImage: "assets/images/project-page/5.jpg",
    Previewlink: "assets/images/project-page/4.jpg",
  },
  {
    title: "Designing images for the IraniKalanet website (photoshop)",
    cardImage: "assets/images/project-page/11.jpg",
    Previewlink: "assets/images/project-page/10.jpg",
  },
  {
    title: "Designing Jopopel cartoon packaging (photoshop)",
    cardImage: "assets/images/project-page/19.jpg",
    Previewlink: "assets/images/project-page/19.jpg",
  },
];

const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, description }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
