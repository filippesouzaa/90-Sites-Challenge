const profileId1 = document.getElementById('profilePhoto1');
const profileId2 = document.getElementById('profilePhoto2');
const profileId3 = document.getElementById('profilePhoto3');
const profileId4 = document.getElementById('profilePhoto4');

const profileIdName1 = document.getElementById('profileName1');
const profileIdName2 = document.getElementById('profileName2');
const profileIdName3 = document.getElementById('profileName3');
const profileIdName4 = document.getElementById('profileName4');


function clicou1() {
    profileIdName1.classList.add('activeName');
    profileId1.classList.add('activePhoto');
}

function saiu(){
    profileIdName1.classList.remove('activeName');
    profileId1.classList.remove('activePhoto');
}


function clicou2() {
    profileIdName2.classList.add('activeName');
    profileId2.classList.add('activePhoto');
}

function saiu2(){
    profileIdName2.classList.remove('activeName');
    profileId2.classList.remove('activePhoto');
}


profileId1.addEventListener('mouseenter', clicou1);
profileId1.addEventListener('mouseleave', saiu);

profileId2.addEventListener('mouseenter', clicou2);
profileId2.addEventListener('mouseleave', saiu2);



// const selectedProfile = document.querySelectorAll('.profileImage');

// function callback(){
//     console.log("Clicou!");
// }

// selectedProfile.forEach(function() {
//     addEventListener('click', callback)
// })





// const selectedProfile = document.querySelectorAll('.profileName');

// function activeName(){
//     console.log("cLICOU")
//     for(var i = 0; i < selectedProfile.length; i++){
//         selectedProfile[i].classList.add('activeName');
//     }
// }


// selectedProfile.forEach(() =>{
//     addEventListener('mouseover', activeName);
// })

