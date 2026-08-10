async function chargerCv(){
    try {
        const response = await fetch('../JSON/index.json');
        const data = await response.json();

       const experiences = data.experiences;

       const titreExperiences= document.getElementById('titreExperiences');
       titreExperiences.textContent = experiences.titre;

       const sousTitreExperiences= document.getElementById('sousTitreExperiences');
       sousTitreExperiences.textContent = experiences.sous_titre;

       const descriptionExperiences = document.getElementById('descriptionExperiences');
       descriptionExperiences.textContent = experiences.description;

       const contact= experiences.contact;
        
       const conteneurSidebar = document.getElementById('cv-sidebar');

        const colonneSidebar = document.createElement('div');
        colonneSidebar.classList.add('colonne-sidebar');
        conteneurSidebar.appendChild(colonneSidebar);

        const photoSidebar = document.createElement('img');
        photoSidebar.classList.add('photo-profil-sidebar');
        photoSidebar.src = contact.photo;
        photoSidebar.alt = `${contact.prenom} ${contact.nom}`;
        colonneSidebar.appendChild(photoSidebar);
         
        const denominationSidebar = document.createElement('div');
        denominationSidebar.classList.add('denomination-sidebar');
        denominationSidebar.textContent = ` ${contact.prenom.toUpperCase()} ${contact.nom}`;
        colonneSidebar.appendChild(denominationSidebar); 

        const posteSidebar = document.createElement('div');
       posteSidebar.classList.add('poste-sidebar');
       posteSidebar.textContent = contact.poste;
       colonneSidebar.appendChild(posteSidebar);
 
       const statutSidebar = document.createElement('div');
       statutSidebar.classList.add('statut-sidebar');
       statutSidebar.textContent = contact.statut;
       colonneSidebar.appendChild(statutSidebar);

       const categorieSidebar = document.createElement('div');
       categorieSidebar.classList.add('categorie-sidebar');
       categorieSidebar.textContent = contact.categorie;
       colonneSidebar.appendChild(categorieSidebar);
 
       const emailSidebar = document.createElement('a');
       emailSidebar.classList.add('email-sidebar');
       emailSidebar.href = `mailto:${contact.email}`;
       emailSidebar.innerHTML = `<i class="fa-regular fa-envelope"></i> ${contact.email}`;
       colonneSidebar.appendChild(emailSidebar);
 
       const telephoneSidebar = document.createElement('div');
       telephoneSidebar.classList.add('telephone-sidebar');
       telephoneSidebar.innerHTML = `<i class="fa-solid fa-mobile-screen"></i> ${contact.telephone}`;
       colonneSidebar.appendChild(telephoneSidebar);
 
       const localisationSidebar = document.createElement('div');
       localisationSidebar.classList.add('localisation-sidebar');
       localisationSidebar.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${contact.localisation}`;
       colonneSidebar.appendChild(localisationSidebar);

        const reseaux = experiences.social_link;

        const categorieReseaux = document.createElement("div");
        categorieReseaux.classList.add("categorie-sidebar");
        categorieReseaux.textContent = reseaux.categorie;
        colonneSidebar.appendChild(categorieReseaux);

    
        for (const reseau of reseaux.resaux) {
            const lien = document.createElement("a");
            
            
            lien.href = reseau.lien.startsWith('http') ? reseau.lien : `https://${reseau.lien}`;
            lien.target = "_blank";
            lien.rel = "noopener noreferrer";
            lien.classList.add("reseau-sidebar");

            
            const nomMinuscule = reseau.nom.toLowerCase();
            if (nomMinuscule === "github") {
                lien.innerHTML = `<i class="fa-brands fa-github"></i> GitHub`;
            } else if (nomMinuscule === "linkedin") {
                lien.innerHTML = `<i class="fa-brands fa-linkedin"></i> LinkedIn`;
            } else {
                lien.textContent = reseau.nom;
            }

            colonneSidebar.appendChild(lien);
        }
      
        

const boutonCv = document.createElement("button");

boutonCv.classList.add("bouton-cv");
boutonCv.textContent = "Télécharger mon CV";

colonneSidebar.appendChild(boutonCv);

boutonCv.addEventListener("click", function(){
    window.open("../Documents/CV_Quentin_BANCE.pdf", "_blank");
});
    
       const detailsExperiences= experiences.liste;
       const conteneurCv = document.getElementById('cv-parcours');

        const categorieExperiences = document.createElement('div');
       categorieExperiences.classList.add('categorie-experiences');
       categorieExperiences.textContent = experiences.categorie;
       conteneurCv.appendChild(categorieExperiences);

       for (const detailsExp of detailsExperiences){
            const colonneExperiences = document.createElement('div');
            colonneExperiences.classList.add('colonne-experiences');
 

            const dateExperiences = document.createElement('div');
            dateExperiences.classList.add('date-experiences');
            dateExperiences.textContent = detailsExp.date;
            colonneExperiences.appendChild(dateExperiences);  

            const posteExperiences = document.createElement('div');
            posteExperiences.classList.add('poste-experiences');
            posteExperiences.textContent = detailsExp.poste;
            colonneExperiences.appendChild(posteExperiences);

            const entrepriseExperiences = document.createElement('div');
            entrepriseExperiences.classList.add('entreprise-experiences');
            entrepriseExperiences.textContent = detailsExp.entreprise;
            colonneExperiences.appendChild(entrepriseExperiences);

            const villeExperiences = document.createElement('div');
            villeExperiences.classList.add('ville-experiences');
            villeExperiences.textContent = detailsExp.ville;
            colonneExperiences.appendChild(villeExperiences);

            const missionsExperiences = document.createElement('ul');
            missionsExperiences.classList.add('missions-experiences');
            colonneExperiences.appendChild(missionsExperiences);

            for (const mission of detailsExp.missions){
                const ligneMission = document.createElement('li');
                ligneMission.textContent = mission;
                missionsExperiences.appendChild(ligneMission);
            }


             conteneurCv.appendChild(colonneExperiences);
              
       }

    

    } catch (error) {
        console.error("Impossible de charger le CV :", error);
    }
}

chargerCv();