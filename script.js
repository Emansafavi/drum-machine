const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

function triggerPad(pad) {
  const audio = pad.querySelector(".clip");
  audio.currentTime = 0;
  audio.play();
  display.innerText = pad.id;
}
pads.forEach((pad) => {
  const audio = pad.querySelector(".clip");

  // picking the file name to display without the extention via a little regex showoff :)
  const fileName = decodeURIComponent(audio.src.split("/").pop())
  pad.id = fileName.replace(/\.[^/.]+$/,"")
  pad.addEventListener("click", () => {
    console.log("You clicked me!");
    triggerPad(pad);
    pad.classList.add("drum-pad-click");
    setTimeout(() => {
      pad.classList.remove("drum-pad-click");
    }, 60);
  });
});
document.addEventListener("keydown", (event) => {
  const keyboard = event.key.toLowerCase();
  const what = document.getElementById(`${keyboard.toUpperCase()}`);
  console.log(`you clicked ${keyboard}`);
  if (what === null) return;
  triggerPad(what.parentElement);
  what.parentElement.classList.add("drum-pad-click");
  setTimeout(() => {
    what.parentElement.classList.remove("drum-pad-click");
  }, 60);
});
