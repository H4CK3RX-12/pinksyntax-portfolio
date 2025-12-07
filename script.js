// Highlight active nav link
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});




// ========== RANDOM IDEA GENERATOR (Facts page) ==========
const ideaBtn = document.getElementById("ideaBtn");
const ideaText = document.getElementById("ideaText");

if (ideaBtn && ideaText) {
  const ideas = [
    "Code for 20 minutes, then reward yourself with anime.",
    "Clean up your project folders so you feel like a real dev.",
    "Write down 3 project ideas you want to build in the future.",
    "Learn 1 new CSS trick and test it on this site.",
    "Study a bit, then listen to music and daydream future you.",
    "Redesign one section of this site to look even cooler.",
    "Take a short break, drink water, then come back and fix one tiny thing.",
    "Write a mini story about future you as an anime character.",
    "Pick one song and make it the 'theme song' for today.",
    "Add one new fun fact about yourself to this page."
  ];

  ideaBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    ideaText.textContent = ideas[randomIndex];
  });
}



