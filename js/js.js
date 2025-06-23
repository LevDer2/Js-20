const gallery = document.querySelector('.gallery');

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    gallery.scrollBy({
      left: 300
    });
  }

  if (event.key === 'ArrowLeft') {
    gallery.scrollBy({
      left: -300
    });
  }
});

// task 2

const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const createButton = document.querySelector('[data-action="render"]');
const deleteButton = document.querySelector('[data-action="destroy"]')
const boxes = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes)

function createBoxes(amount) {
  amount = Number(input.value)
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement("div")
    element.style.width = `${size}px`
    element.style.height = `${size}px`
    element.style.backgroundColor = color()
    element.style.margin = "10px"
    boxes.appendChild(element)
    size += 10
  }
}

function color() {
  let r = Math.floor(Math.random()*256)
  let g = Math.floor(Math.random()*256)
  let b = Math.floor(Math.random()*256)
  return `rgb(${r}, ${g}, ${b})`
}

deleteButton.addEventListener("click", destroyBoxes)

function destroyBoxes() {
  boxes.innerHTML = "";
}