const vNavBar = document.querySelector("nav");
const vClassPortada = document.querySelector('.classPortada');
const vClassSection = document.querySelector('.classSection');

const vShowMenu = document.querySelector(".classShowMenu");
var vMakeMenuHTML = ``;
const vShowApps = document.querySelector(".classSection");
const vFolderLogosApps = './assets/images/apps/';
var vMakeAppsHTML = ``;

//SHOW APPS
fetch('./js/JSONnav.json')
.then(response => response.json())
.then(JSONData => {
	ReadTable(JSONData);
});

function ReadTable(JSONData) {

	for (var vJSONi = 0; vJSONi < JSONData.length; vJSONi++) {

		vMakeMenuHTML += '<li>'
        if (vJSONi == 0){
            vMakeMenuHTML += `<svg class="icoLogo" id="icoLogoApple">`
            vMakeMenuHTML += `<use href="./assets/images/icons.svg#${JSONData[vJSONi].icoSeccion}">`
            vMakeMenuHTML += `</svg>`
        }else{
            vMakeMenuHTML += `<a href="${JSONData[vJSONi].linkSeccion}" title="${JSONData[vJSONi].txtSeccion}">`
            vMakeMenuHTML += `<svg class="icoLogo">`
            vMakeMenuHTML += `<use href="./assets/images/icons.svg#${JSONData[vJSONi].icoSeccion}">`
            vMakeMenuHTML += `</svg> ${JSONData[vJSONi].txtSeccion}`
            vMakeMenuHTML += `</a>`
        }
        vMakeMenuHTML += '</li>'

        if (JSONData[vJSONi].apps.length > 0) {
            vMakeAppsHTML += `<div class="classSectionApps">`
            vMakeAppsHTML += `<h3 id="id${JSONData[vJSONi].txtSeccion}">${JSONData[vJSONi].txtSeccion}</h3>`
            vMakeAppsHTML += `<div class="classApps">`

            for (var vNumApp = 0; vNumApp < JSONData[vJSONi].apps.length; vNumApp++) {
                
                vMakeAppsHTML +=         `<div class="classApp">`
                vMakeAppsHTML +=             `<a href="${JSONData[vJSONi].apps[vNumApp].linkApp}" target="_blank">`
                vMakeAppsHTML +=                `<img src="${vFolderLogosApps}${JSONData[vJSONi].apps[vNumApp].logoApp}" alt="${JSONData[vJSONi].apps[vNumApp].nombreApp}">`
                vMakeAppsHTML +=                 `<h4>${JSONData[vJSONi].apps[vNumApp].nombreApp}</h4>`
                vMakeAppsHTML +=             `</a>`
                vMakeAppsHTML +=         `</div>`
                
            }
            vMakeAppsHTML += `</div>`
            vMakeAppsHTML += `</div>`
        }
        
	}

    vShowMenu.innerHTML = vMakeMenuHTML;
    vShowApps.innerHTML = vMakeAppsHTML;

    const vNavBarText = document.querySelectorAll('nav ul li a');
    const vIdIconApple = document.getElementById('icoLogoApple');
    vIdIconApple.addEventListener('click', () => {
        vNavBar.classList.toggle('classNavWidth');
        
        for (var i=0; i < vNavBarText.length; i++) {
            vNavBarText[i].classList.toggle('classNavTextSize');
        }
    
        vClassPortada.classList.toggle('classPortadaWidth');
        vClassSection.classList.toggle('classSectionWidth');
    
    });
}