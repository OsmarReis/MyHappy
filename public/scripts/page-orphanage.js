const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-15.8578298,-47.96107592], 15);

// create tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create marker
L.marker([-15.8578298,-47.96107592], { icon })
.addTo(map)

/* image gallery */

function selectImages(event) {
    const button = event.currentTarget

    // Remove as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {button.classList.remove("active")})
    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    // atualizar o container images
    imageContainer.src = image.src 
    // adciciona class active para o currentTarget button
    button.classList.add('active')
    console.log(buttons)
}


