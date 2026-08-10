

async function chargerPortfolio(){
    try {
         const response = await fetch('JSON/index.json')

        if (!response.ok){
   throw new Error(`HTTP error! Status: ${response.status}`);
    }
       
        const data = await response.json()

        //Section hero
        const hero = data.infos_perso;
        const heroProfilPic = document.getElementById('photo-profil');
        heroProfilPic.src = hero.photo;
        const heroIntro = document.getElementById('intro-hero');
        heroIntro.textContent = hero.intro;
        const heroNom = document.getElementById('nom-hero');
        heroNom.textContent = hero.nom;
        const heroTitre = document.getElementById('titre-hero');
        heroTitre.textContent = hero.titre;
        const heroDescription = document.getElementById('description-hero');
        heroDescription.textContent = hero.description;

         const heroSocial = document.getElementById('hero-social');

        for (const item of hero.liens) {
            const lien = document.createElement("a");

            lien.href = item.nom === "Email" ? `mailto:${item.lien}` : item.lien;
            if (item.nom !== "Email") {
                lien.target = "_blank";
                lien.rel = "noopener noreferrer";
            }
            lien.setAttribute("aria-label", item.nom);

            lien.innerHTML = `<i class="${item.icone}"></i>`;

            heroSocial.appendChild(lien);
        }

        //Section A-propos
        const aPropos = data.a_propos;
        const AProposTitre = document.getElementById('titre-aPropos');
        AProposTitre.innerHTML = `<i class="${aPropos.icone}"></i> ${aPropos.titre}`;
        const AProposSousTitre = document.getElementById('sous-titre-aPropos');
        AProposSousTitre.textContent = aPropos.sousTitre;
        const AProposDescription = document.getElementById('description-aPropos');
         AProposDescription.textContent = aPropos.description;

        //Section Formation + statut + licalisation
        //Formation
        const infoPro = data.infoFormation;
        const infoProLabel = document.getElementById('formation-Pro');
        infoProLabel.innerHTML = `<i class="${infoPro.icone}"></i> ${infoPro.label}`;
        const infoProEcole = document.getElementById('ecole');
        infoProEcole.textContent = infoPro.ecole;
         const infoProAnnee = document.getElementById('anneeScolaire');
        infoProAnnee.textContent = infoPro.annee;
        //Statut
        const statutPro = data.infoStatut;
        const statutProLabel = document.getElementById('statutProCategorie');
        statutProLabel.textContent = statutPro.label;
        const statutProValeur = document.getElementById('statutProActuel');
        statutProValeur.textContent = statutPro.valeur;
        const statutProDetail = document.getElementById('dispoPro');
        statutProDetail.textContent = statutPro.details;
        const  statutMobilite = document.getElementById('mobilite');
        statutMobilite.textContent = statutPro.mobilite;

        //Localisation
        const localisationActuelle = data.infoLocalisation;
        const localisationLabel = document.getElementById('localisationCategorie');
        localisationLabel.textContent = localisationActuelle.label;
        const villeActuelle = document.getElementById('VilleActuelle');
        villeActuelle.textContent = localisationActuelle.valeur;
        const Permis = document.getElementById('permis');
        Permis.textContent = localisationActuelle.details;

        //Section compétences
        const competencesActuelles = data.competences_section;

        const titreCompetences =document.getElementById('titreCompetences');
        titreCompetences.innerHTML = `<i class="${competencesActuelles.icone}"></i> ${competencesActuelles.titre}`;

        const competences = document.getElementById('liste-competences');
        for (const item of competencesActuelles.liste){
            const newCompetences = document.createElement('p');
            newCompetences.innerHTML = `<i class="${item.icone}" style="color: ${item.couleur}"></i> ${item.nom}`;
            competences.appendChild(newCompetences);
        }


    
    }catch(error){
        console.error("Impossible de charger le Portfolio :", error);
    }
   
}

 chargerPortfolio();

async function chargerProjetsIndex() {
    try {
        const response = await fetch('JSON/index.json');
        const data = await response.json();
        const projects = data.projets.projects; 
        const conteneur = document.getElementById('liste-projets-index');

        for (const project of projects) {
            const carte = document.createElement('div');
            carte.classList.add('carte-projet-index');

            carte.innerHTML = `
                <h3>${project.nom.toUpperCase()}</h3>
                <img src="${project.icone}" alt="${project.nom}" class="img-projet-index">
            `;

            conteneur.appendChild(carte);
        }
    } catch (error) {
        console.error("Erreur :", error);
    }
}

chargerProjetsIndex();

   
        

    

 
