const selectedProfile = document.querySelectorAll('.profile');

function callback(e) {
    console.log("Clicou")
}

selectedProfile.forEach(function() {
    addEventListener('click', callback)
})






