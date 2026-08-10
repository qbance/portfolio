

async function chargerProfil(){
    try {
         const response = await fetch('../JSON/index.json')

        if (!response.ok){
   throw new Error(`HTTP error! Status: ${response.status}`);
    }
       
        const data = await response.json()
       
        //Titre + Sous -titre

        const profilPerso = data.profil_section;
        const titreProfil = document.getElementById('titre-profil');
        titreProfil.textContent = profilPerso.titre;
        const SousTitreProfil = document.getElementById('sousTitre-profil');
        SousTitreProfil.innerHTML = `<span class="kw">function</span> <span class="fn">formationWeb</span>() {<br />  <span class="obj">console</span>.<span class="meth">log</span><span class="par">(</span><span class="str">"${profilPerso.sousTitre}"</span><span class="par">)</span><span class="synt">;</span><br />}`;

        const conteneurSites = document.getElementById('liste-sites');
        for (const site of profilPerso.sites) {
            const section = document.createElement('section');
            section.innerHTML = `
                <p class="entete-site">${site.entete}</p>
                <img src="${site.photo}" alt="${site.nom}">
                <h3>${site.nom}</h3>
                <p>${site.description}</p>
                `;
        conteneurSites.appendChild(section);   
        }

        const profilEcole = data.profil_ecole;
        const titreEcole = document.getElementById('titre-ecole');
        titreEcole.innerHTML = `<span class="kw">function</span> <span class="fn">presentationEcole</span>() {<br />  <span class="obj">console</span>.<span class="meth">log</span><span class="par">(</span><span class="str">"${profilEcole.titre}"</span><span class="par">)</span><span class="synt">;</span><br />}`;
        
        const conteneurEcole = document.getElementById('liste-ecole');
        for (const ecole of profilEcole.ecole) {
            const sectionEcole = document.createElement('section');
            sectionEcole.innerHTML = `
            <p class="entete-ecole">${ecole.entete}</p>
            <img src="${ecole.photo}" alt="${ecole.nom}">
            <h3>${ecole.nom}</h3>
            <p>${ecole.description}</p>
            `
            conteneurEcole.appendChild(sectionEcole);
        }

        const profilPassions = data.profil_passion;
        const titrePassions = document.getElementById('titre-passions');
        titrePassions.innerHTML = `<span class="kw">function</span> <span class="fn">presentationPassions</span>() {<br />  <span class="obj">console</span>.<span class="meth">log</span><span class="par">(</span><span class="str">"${profilPassions.titre}"</span><span class="par">)</span><span class="synt">;</span><br />}`;
        
        const conteneurPassions = document.getElementById('liste-passions');
        for (const passions of profilPassions.passion){
            const sectionPassions = document.createElement('section');
            sectionPassions.innerHTML=`
            <p class="entete-passions">${passions.entete}</p>
            <img src="${passions.photo}" alt ="${passions.nom}">
            <h3>${passions.nom}</h3>
            <p>${passions.description}</p>
            `
        conteneurPassions.appendChild(sectionPassions);
        }

    }catch(error){
        console.error("Impossible de charger le Profil :", error);
    }
   
}

 chargerProfil();