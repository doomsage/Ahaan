// Smooth scroll
document.getElementById("scrollBtn").onclick = () => {
  document.getElementById("about").scrollIntoView({behavior:"smooth"});
};

// Age calculation
const dob = new Date("2015-10-01");
const today = new Date();
let age = today.getFullYear() - dob.getFullYear();
if (today < new Date(today.getFullYear(), 9, 1)) age--;
document.getElementById("age").textContent = age;

// Birthday countdown
let nextBirthday = new Date(today.getFullYear(), 9, 1);
if(today > nextBirthday) nextBirthday.setFullYear(today.getFullYear()+1);

const diff = nextBirthday - today;
const days = Math.floor(diff / (1000*60*60*24));
document.getElementById("countdown").textContent = days + " days";

// Skill animation
window.addEventListener("load", ()=>{
  document.querySelectorAll(".fill").forEach(bar=>{
    bar.style.width = bar.dataset.width;
  });
});

// Reveal on scroll
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el=>{
  observer.observe(el);
});

// Gallery modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".gallery img").forEach(img=>{
  img.onclick = ()=>{
    modal.style.display="flex";
    modalImg.src = img.src;
  };
});

document.getElementById("closeModal").onclick = ()=>{
  modal.style.display="none";
};

// Copy UID
document.getElementById("copyUID").onclick = ()=>{
  const uid = document.getElementById("uidText").textContent;
  navigator.clipboard.writeText(uid);
  alert("UID Copied!");
};

// Theme toggle
document.getElementById("themeToggle").onclick = ()=>{
  document.body.classList.toggle("dark");
};
const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

  const update = ()=>{

    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText = Math.ceil(current + increment);

      setTimeout(update,20);

    } else {

      counter.innerText = target;

    }

  };

  update();

});