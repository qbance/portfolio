async function chargerCompetences(){
    try {
        const response = await fetch('../JSON/index.json')

        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json()

        const competences = data.competences;

        // Titre
        const titre = document.getElementById('titre');
        titre.textContent = competences.titre;

        // Liste des compétences
        const skills = competences.skills;
        const conteneurSkills = document.getElementById('liste-skills');

        for (const skill of skills) {

            const colonne = document.createElement('div');
            colonne.classList.add('colonne-skill');

            const titreSkill = document.createElement('h3');
            titreSkill.classList.add('titre-skill');
            titreSkill.innerHTML = `<i class="${skill.icone}"></i> ${skill.nom.toUpperCase()}`;
            colonne.appendChild(titreSkill);

            const liste = document.createElement('ul');
            liste.classList.add('liste-details-skill');

            for (const detail of skill.details) {
                const item = document.createElement('li');
                item.innerHTML = `<span class="puce">|_</span> ${detail}`;
                liste.appendChild(item);
            }

            colonne.appendChild(liste);
            conteneurSkills.appendChild(colonne);
        }

    }catch(error){
        console.error("Impossible de charger les compétences :", error);
    }

}

chargerCompetences();