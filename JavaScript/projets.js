async function chargerProjets(){
    try {
        const response = await fetch('JSON/index.json')

        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json()

        const projets = data.projets;

        const titreProjet = document.getElementById('titreProjet');
        titreProjet.textContent = projets.titre;

        const projects = projets.projects;
        const conteneurProjects = document.getElementById('liste-Projets');

        const deviconMap = {
            "HTML": "devicon-html5-plain colored",
            "CSS": "devicon-css3-plain colored",
            "JavaScript": "devicon-javascript-plain colored",
            "PHP": "devicon-php-plain colored"
        };

        for (const project of projects){

            const colonneProjet = document.createElement('div');
            colonneProjet.classList.add('colonne-project');

            const titreProject = document.createElement('h3');
            titreProject.classList.add('titre-project');
            titreProject.innerHTML = `${project.nom.toUpperCase()}`;
            colonneProjet.appendChild(titreProject);

            const ligneProjet = document.createElement('div');
            ligneProjet.classList.add('ligne-project');
            colonneProjet.appendChild(ligneProjet);

            const iconeProjet = document.createElement('img');
            iconeProjet.classList.add('icone-project');
            iconeProjet.src = project.icone;
            iconeProjet.alt = project.nom;
            ligneProjet.appendChild(iconeProjet);

            const contenuProjet = document.createElement('div');
            contenuProjet.classList.add('contenu-project');
            ligneProjet.appendChild(contenuProjet);

            const listeProjet = document.createElement('ul');
            listeProjet.classList.add('liste-details-projet');

            for (const detail of project.details){
                const element = document.createElement('li');
                element.textContent = detail;
                listeProjet.appendChild(element);
            }
            contenuProjet.appendChild(listeProjet);

            const liensProjet = document.createElement('div');
            liensProjet.classList.add('liens-project');
            contenuProjet.appendChild(liensProjet);

            const lienGithub = document.createElement('a');
            lienGithub.classList.add('lien-github');
            lienGithub.href = project.lien_github;
            lienGithub.target = '_blank';
            lienGithub.textContent = 'GitHub';
            liensProjet.appendChild(lienGithub);

            const lienInternet = document.createElement('a');
            lienInternet.classList.add('lien-internet');
            lienInternet.href = project.lien_internet;
            lienInternet.target = '_blank';
            lienInternet.textContent = 'Voir en ligne';
            liensProjet.appendChild(lienInternet);

             const listeLanguages = document.createElement('div');
            listeLanguages.classList.add('liste-languages-projet');

            for (const language of project.languages){
                const badgeLanguage = document.createElement('span');
                badgeLanguage.classList.add('badge-language');

                const iconeLanguage = document.createElement('i');
                iconeLanguage.className = deviconMap[language] || '';
                iconeLanguage.title = language;
                badgeLanguage.appendChild(iconeLanguage);

                listeLanguages.appendChild(badgeLanguage);
                listeLanguages.appendChild(document.createTextNode(' '));
            }
            contenuProjet.appendChild(listeLanguages);

            conteneurProjects.appendChild(colonneProjet);

        }
        

    }catch(error){
        console.error("Impossible de charger les projets :", error);
    }

}

chargerProjets();
