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
fetch('/JSONnav.json')
.then(response => response.json())
.then(JSONData => {
	ReadTable(JSONData);
});

function ReadTable(JSONData) {

  //Ordena alfabeticamente las secciones de apps
  JSONData.sort((a,b) => a.linkSeccion.localeCompare(b.linkSeccion));
  
  JSONData.forEach((vJSON, index) => {
    vMakeMenuHTML += '<li>'
    if (index == 0){
      vMakeMenuHTML += `
      <svg id="icoLogoApple">
        <use href="${vFileIcons}${vJSON.icoSeccion}">
      </svg>
      `
    }else{
      vMakeMenuHTML += `
      <a href="#${vJSON.linkSeccion}" title="${vJSON.txtSeccion}">
        <svg class="icoLogo">
          <use href="${vFileIcons}${vJSON.icoSeccion}">
        </svg> ${vJSON.txtSeccion}
      </a>
      `
    }
    vMakeMenuHTML += '</li>'

    if (vJSON.apps.length > 0) {
      vMakeAppsHTML += `
      <div class="classSectionApps">
        <h3 id="${vJSON.linkSeccion}">${vJSON.txtSeccion}</h3>
        <div class="classApps">
      `

      //Ordena alfabeticamente las apps de cada seccion del JSON
      vJSON.apps.sort((a,b) => a.nombreApp.localeCompare(b.nombreApp));

      vJSON.apps.forEach(vApp => {
        vMakeAppsHTML += `
          <div class="classApp">
            <a href="${vApp.linkApp}" target="_blank">
              <img src="${vFolderLogosApps}${vJSON.txtFolder}/${vApp.logoApp}" alt="${vApp.nombreApp}">
              <h4>${vApp.nombreApp}</h4>
            </a>
          </div>`;
      });
      vMakeAppsHTML += `
        </div>
      </div>
      `
    }
    
  });

  vShowMenu.innerHTML = vMakeMenuHTML;
  vShowApps.innerHTML = vMakeAppsHTML;

  const vNavBarText = document.querySelectorAll('nav ul li a');
  const vIdIconApple = document.querySelector('#icoLogoApple');
  vIdIconApple.addEventListener('click', () => {
    vNavBar.classList.toggle('classNavWidth');
    
    vNavBarText.forEach(e => {
      e.classList.toggle('classNavTextSize');
    });

    vClassPortada.classList.toggle('classPortadaWidth');
    vClassSection.classList.toggle('classSectionWidth');
  
  });
}