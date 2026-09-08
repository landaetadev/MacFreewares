const vNavBar = document.querySelector("nav");
const vPortada = document.querySelector('.cPortada');

const vShowMenu = document.querySelector(".cShowMenu");
let vMakeMenuHTML = ``;

const vShowApps = document.querySelector(".cSection");
const vFolderLogosApps = './assets/images/apps/';
const vDirIcons = "./assets/images/icons/NavMenu.svg#";
let vMakeAppsHTML = ``;

// Carga JSON compatible con GitHub Pages y localhost
fetch(`${import.meta.env.BASE_URL}JSONnav.json`)
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  })
  .then(JSONData => {
    ReadTable(JSONData);
  })

function ReadTable(JSONData) {

  //Ordena alfabeticamente las secciones de apps
  JSONData.sort((a,b) => a.linkSeccion.localeCompare(b.linkSeccion));
  
  JSONData.forEach((vJSON, index) => {
    vMakeMenuHTML += '<li>'
    if (index == 0) {
      vMakeMenuHTML += /* HTML */ `
        <svg id="icoLogoApple">
          <use href="${vDirIcons}${vJSON.icoSeccion}">
        </svg>
      `
    } else {
      vMakeMenuHTML += /* HTML */ `
        <a href="#${vJSON.linkSeccion}" title="${vJSON.txtSeccion}">
          <svg class="icoLogo">
            <use href="${vDirIcons}${vJSON.icoSeccion}">
          </svg> ${vJSON.txtSeccion}
        </a>
      `
    }
    vMakeMenuHTML += '</li>'

    if (vJSON.apps.length > 0) {
      vMakeAppsHTML += /* HTML */ `
        <div class="cSectionApps" id="${vJSON.linkSeccion}">
          <div class="cSectionTitle">
            <svg>
              <use href="${vDirIcons}${vJSON.icoSeccion}">
            </svg>
            <h3>${vJSON.txtSeccion}</h3>
          </div>
        <div class="cApps">
      `

      //Ordena alfabeticamente las apps de cada seccion del JSON
      vJSON.apps.sort((a,b) => a.nombreApp.localeCompare(b.nombreApp));

      vJSON.apps.forEach(vApp => {
        vMakeAppsHTML += /* HTML */ `
          <a href="${vApp.linkApp}" target="_blank">
            <picture class="classCardImage">
              <source srcset="${vFolderLogosApps}${vJSON.txtFolder}/${vApp.logoApp}.avif" type="image/avif" />
              <img src="${vFolderLogosApps}${vJSON.txtFolder}/${vApp.logoApp}.webp" alt="${vApp.nombreApp}">
            </picture>
            <h4>${vApp.nombreApp}</h4>
          </a>
        `;
      });
      vMakeAppsHTML += /* HTML */ `
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
    vNavBar.classList.toggle('cNavWidth');
    
    vNavBarText.forEach(e => {
      e.classList.toggle('cNavTextSize');
    });

    vPortada.classList.toggle('cPortadaWidth');
    vShowApps.classList.toggle('cSectionWidth');
  
  });
}