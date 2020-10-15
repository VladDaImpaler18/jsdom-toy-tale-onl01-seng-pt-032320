let addToy = false;
const toyCollection = document.getElementById("toy-collection");
const toyName = document.querySelectorAll("input.input-text")[0];
const toyUrl = document.querySelectorAll("input.input-text")[1];

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  document.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = {
      [name]: toyName.value,
      [image]: toyUrl.value,
      //[likes]: "0"
    };
    createCard(formData);
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    }
    e.target.reset();
  });
});

function createCard(object){
  const div = document.createElement("div");
    div.className = "card";
  const nameNode = document.createElement("h2");
    nameNode.textContent = object.name;
  const img = document.createElement("img");
    img.className = "toy-avatar";
    img.src = object.image;
  const likePart = document.createElement("p");
    likePart.textContent = `${object.likes} likes`;
  const likeButton = document.createElement("BUTTON");
    likeButton.className = "like-btn";
    likeButton.textContent = "Like <3";
    div.appendChild(nameNode);
    div.appendChild(img);
    div.appendChild(likePart);
    div.appendChild(likeButton);

    toyCollection.appendChild(div);
}