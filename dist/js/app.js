const profileLinks = document.querySelectorAll(".profile__link");
const profileContents = document.querySelectorAll(".profile__content");

runProfile();

function runProfile() {
  profileLinks.forEach(function(profileLink) {
    profileLink.addEventListener("click", function() {
      removeActiveShow(profileLinks, "active-profile");
      this.classList.add("active-profile");
      const content = document.querySelector(`#${this.id}-content`);
      removeActiveShow(profileContents, "show");
      content.classList.add("show");
    });
  });
}

function removeActiveShow(x, z) {
  x.forEach(y => {
    y.classList.remove(z);
  });
}

// animated counter

const videos = document.querySelector("#videos");
const subscibers = document.querySelector("#subscibers");
const views = document.querySelector("#views");
const dailySubs = document.querySelector("#dailySubs");

//counter constractor
function counters(limit, target) {
  let i = 0;
  this.limit = limit;
  this.target = target;
  this.startCounter = setInterval(() => {
    if (i <= limit) {
      target.innerHTML = i++;
    } else {
      clearInterval();
    }
  }, 10 / 1000);
}

function skillbar(css, html, js, php, ps, ai, xd) {
  this.css = css;
  this.html = html;
  this.js = js;
  this.php = php;
  this.ps = ps;
  this.ai = ai;
  this.xd = xd;
  this.createSkillBar = function() {
    let skillArray = [
      "HTML",
      "CSS",
      "Javascript",
      "PHP",
      "Photoshop",
      "Illustrator",
      "XD"
    ];

    let percent = [
      this.html,
      this.css,
      this.js,
      this.php,
      this.ps,
      this.ai,
      this.xd
    ];

    let html = "";

    for (let i = 0; i <= skillArray; i++) {
      html = `
      <div class="skill-group">
        <p>${skillArray[i]}</p>
        <div class="bar">
          <div class="bar-percent" style="width=${percent[i]}"></div>
        </div>
      </div>`;
    }

    document.querySelector(".skill-wrapper").innerHTML += html;
  };
}

let monmon = new skillbar();
document.querySelector("#tab-4").addEventListener("click", function() {
  monmon.createSkillBar(54, 76, 34, 86, 23, 54);
});

//SCROLL MAGIC
var controller = new ScrollMagic.Controller();
// create a scene
new ScrollMagic.Scene({
  // duration: 100, // the scene should last for a scroll distance of 100px
  // offset: 50 // start this scene after scrolling for 50px
  triggerElement: "#counter_block",
  triggerHook: 0.95,
  reverse: false
})
  .on("start", function() {
    let objvideos = new counters(76, videos);
    let objsubscribers = new counters(435, subscibers);
    let objviews = new counters(500, views);
    let objdailySubs = new counters(100, dailySubs);
  })
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller); // assign the scene to the controller
