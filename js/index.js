const vNavBar = document.querySelector("nav");
const vClassPortada = document.querySelector('.classPortada');
const vClassSection = document.querySelector('.classSection');

const vShowMenu = document.querySelector(".classShowMenu");
var vMakeMenuHTML = ``;
const vShowApps = document.querySelector(".classSection");
const vFolderLogosApps = './assets/images/apps/';
const vFileIcons = './assets/images/icons.svg#';
var vMakeAppsHTML = ``;

//SHOW APPS
fetch('./js/JSONnav.json')
.then(response => response.json())
.then(JSONData => {
	ReadTable(JSONData);
});

function ReadTable(JSONData) {

  //Ordena alfabeticamente las secciones de apps
  JSONData.sort((a,b) => a.linkSeccion.localeCompare(b.linkSeccion));

	for (var vJSONi = 0; vJSONi < JSONData.length; vJSONi++) {

    vMakeMenuHTML += '<li>'
    if (vJSONi == 0){
      vMakeMenuHTML += `
      <svg id="icoLogoApple">
        <use href="${vFileIcons}${JSONData[vJSONi].icoSeccion}">
      </svg>
      `
    }else{
      vMakeMenuHTML += `
      <a href="#${JSONData[vJSONi].linkSeccion}" title="${JSONData[vJSONi].txtSeccion}">
        <svg class="icoLogo">
          <use href="${vFileIcons}${JSONData[vJSONi].icoSeccion}">
        </svg> ${JSONData[vJSONi].txtSeccion}
      </a>
      `
    }
    vMakeMenuHTML += '</li>'

    if (JSONData[vJSONi].apps.length > 0) {
      vMakeAppsHTML += `
      <div class="classSectionApps">
        <h3 id="${JSONData[vJSONi].linkSeccion}">${JSONData[vJSONi].txtSeccion}</h3>
        <div class="classApps">
      `

      //Ordena alfabeticamente las apps de cada seccion del JSON
      JSONData[vJSONi].apps.sort((a,b) => a.nombreApp.localeCompare(b.nombreApp));

      for (var vNumApp = 0; vNumApp < JSONData[vJSONi].apps.length; vNumApp++) {
        vMakeAppsHTML += `
        <div class="classApp">
          <a href="${JSONData[vJSONi].apps[vNumApp].linkApp}" target="_blank">
            <img src="${vFolderLogosApps}${JSONData[vJSONi].txtFolder}/${JSONData[vJSONi].apps[vNumApp].logoApp}" alt="${JSONData[vJSONi].apps[vNumApp].nombreApp}">
            <h4>${JSONData[vJSONi].apps[vNumApp].nombreApp}</h4>
          </a>
        </div>`
      }
      vMakeAppsHTML += `
        </div>
      </div>
      `
    }
	}

  vShowMenu.innerHTML = vMakeMenuHTML;
  vShowApps.innerHTML = vMakeAppsHTML;

  const vNavBarText = document.querySelectorAll('nav ul li a');
  const vIdIconApple = document.querySelector('#icoLogoApple');
  vIdIconApple.addEventListener('click', () => {
    vNavBar.classList.toggle('classNavWidth');
    
    for (var i=0; i < vNavBarText.length; i++) {
      vNavBarText[i].classList.toggle('classNavTextSize');
    }

    vClassPortada.classList.toggle('classPortadaWidth');
    vClassSection.classList.toggle('classSectionWidth');
  
  });
}