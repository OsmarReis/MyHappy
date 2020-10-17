// create map
const map = L.map("mapid").setView([-15.8578298, -47.96107592], 15);

// create tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;
  // remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo field
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector("#images");
  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // check if field is empty if it's true don't clone it
  const input = newFieldContainer.children[0]
  if(input.value == "") {
      return 
  }

  // clean field before cloning it
  input.value = ""

  // adicionar clone ao container de #images
  container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll(".new-upload")

    if(fieldsContainer.length <= 1) {
        // clean field content
        span.parentNode.children[0].value = ""
        return 
    }

    // delete field
    span.parentNode.remove();
}

//yes & no change
function toggleSelect(event) {
    // remove class .active from clicked button
    document.querySelectorAll('.button-select button')
    .forEach((button) => {button.classList.remove('active')})
    // put class .active on the clicked button 
    const button = event.currentTarget
    button.classList.add('active')

    // verify if it's yes or no

    // update input hidden with selected value
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value   
}