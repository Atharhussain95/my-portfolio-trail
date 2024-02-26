function loader(){
  var tl = gsap.timeline()

tl.from(".loader span",{
  x:100,
  duration:1.2,
  stagger:.03,
  delay:.1
})
tl.to(".loader span",{
  x:-100,
  duration:.6,
  opacity:0,
  stagger:.03
})
tl.to('.loader',{
  duration:.5,
  opacity:0,
  display:"none"
})

}
loader()

//time
function time() {
    function updateLiveTime() {
    
        const currentDate = new Date();
      
        // Format the time as per your requirement
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const formattedTime = `${hours}:${minutes}`;
        const liveTimeElement = document.getElementById("live-time");
        if (liveTimeElement) {
          liveTimeElement.textContent = `MY LOCAL TIME ${formattedTime}`;
        }
      }
      
      updateLiveTime();
      setInterval(updateLiveTime, 1000);
    }

    gsap.from(".reveal", {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.4, 
      ease: "power2.out",
      delay: 3.3, 
  });

 // GSAP animation with pop-up effect
 gsap.from(".logo a", { opacity: 0, y: -50, scale: 0.5, duration: 1, delay: 4.0, ease: "back.out(1.7)" });
 gsap.from(".non-vis a", { opacity: 0, y: -50, scale: 0.5, duration: 1, delay: 5, ease: "back.out(1.7)" });

 
 


 



//loader();
time();
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// // Disable right-click on the page
// document.addEventListener('contextmenu', function (e) {
//   e.preventDefault();
// });

// // Disable text selection (works in most browsers)
// document.addEventListener('selectstart', function (e) {
//   e.preventDefault();
// });


function Music(){

// Audio

let soundButton = document.querySelector('.soundbutton'),
audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
soundButton.classList.toggle('paused')
audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
audio.pause()
}



}

Music();

///Menu


document.addEventListener("DOMContentLoaded", () => {
  const revealerNav = window.revealer({
    revealElementSelector: ".nav-js",
    options: {
      anchorSelector: ".nav-btn-js",
    },
  });

  const actionBtn = document.querySelector(".nav-btn-js");
  actionBtn.addEventListener("click", () => {
    if (!revealerNav.isRevealed()) {
      revealerNav.reveal();
      actionBtn.setAttribute("data-open", true);
    } else {
      revealerNav.hide();
      actionBtn.setAttribute("data-open", false);
    }
  });
});




// const hoverSound = document.getElementById('hoverSound');
// const menuItem = document.querySelector('.header__menu-item a');

// menuItem.addEventListener('mouseenter', () => {
//   hoverSound.play();
// });

// // Optional: Pause the sound when the mouse leaves the menu item
// menuItem.addEventListener('mouseleave', () => {
//   hoverSound.pause();
//   hoverSound.currentTime = 0; // Reset the audio to the beginning
// });



gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2",
            start: "top center",
            toggleActions: "play none none reverse",
        },
    });

    // Animation for the top border
    tl.from(".page2-top-border", { width: 0, duration: 1 });

    // Animation for the text
    tl.from(".btm-text span", {
        opacity: 0,
        y: 50,
        stagger: 0.1, // Adjust the stagger value to control the timing between letters
        duration: 1,
    }, "-=0.5");
});




