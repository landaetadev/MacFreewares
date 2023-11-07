const vIdIconApple = document.getElementById('icoLogoApple');
const vNavBar = document.querySelector("nav");
const vNavBarText = document.querySelectorAll('nav ul li a');
const vClassPortada = document.querySelector('.classPortada');
const vClassSection = document.querySelector('.classSection');


vIdIconApple.addEventListener('click', () => {
    vNavBar.classList.toggle('classNavWidth');
    
    for (var i=0; i < vNavBarText.length; i++) {
        vNavBarText[i].classList.toggle('classNavTextSize');
    }

    vClassPortada.classList.toggle('classPortadaWidth');
    vClassSection.classList.toggle('classSectionWidth');

});