const item = document.getElementById("item");
const menu = document.getElementById("menu");
const itemIn = document.getElementById("itemIn");
// const itemIn = document.getElementById("itemIn");

// item.addEventListener("click", () => {
//   itemIn.animate(
//     {
//       opacity: [1,0],
//       filter: ["blur(0)","blur(2)"]
//     },
//     {
//       fill: "forwards",
//       duration: 300
//     }
//   );
// });

item.onclick = () => {
  itemIn.classList.toggle("hidden");
}

