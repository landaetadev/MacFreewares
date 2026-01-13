(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d=document.querySelector("nav"),u=document.querySelector(".classPortada"),p=document.querySelector(".classSection"),f=document.querySelector(".classShowMenu");var n="";const g=document.querySelector(".classSection"),h="./assets/images/apps/",l="./assets/images/icons.svg#";var i="";fetch("/MacFreewares/JSONnav.json").then(s=>{if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return s.json()}).then(s=>{m(s)}).catch(s=>{console.error("Error cargando JSONnav.json:",s)});function m(s){s.sort((o,e)=>o.linkSeccion.localeCompare(e.linkSeccion)),s.forEach((o,e)=>{n+="<li>",e==0?n+=`
      <svg id="icoLogoApple">
        <use href="${l}${o.icoSeccion}">
      </svg>
      `:n+=`
      <a href="#${o.linkSeccion}" title="${o.txtSeccion}">
        <svg class="icoLogo">
          <use href="${l}${o.icoSeccion}">
        </svg> ${o.txtSeccion}
      </a>
      `,n+="</li>",o.apps.length>0&&(i+=`
      <div class="classSectionApps">
        <h3 id="${o.linkSeccion}">${o.txtSeccion}</h3>
        <div class="classApps">
      `,o.apps.sort((t,r)=>t.nombreApp.localeCompare(r.nombreApp)),o.apps.forEach(t=>{i+=`
          <div class="classApp">
            <a href="${t.linkApp}" target="_blank">
              <img src="${h}${o.txtFolder}/${t.logoApp}" alt="${t.nombreApp}">
              <h4>${t.nombreApp}</h4>
            </a>
          </div>`}),i+=`
        </div>
      </div>
      `)}),f.innerHTML=n,g.innerHTML=i;const c=document.querySelectorAll("nav ul li a");document.querySelector("#icoLogoApple").addEventListener("click",()=>{d.classList.toggle("classNavWidth"),c.forEach(o=>{o.classList.toggle("classNavTextSize")}),u.classList.toggle("classPortadaWidth"),p.classList.toggle("classSectionWidth")})}
