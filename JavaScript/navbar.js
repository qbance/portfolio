async function chargerNavbar() {
    const response = await fetch('navbar.html');
    const html = await response.text(); // .text() au lieu de .json(), puisque c'est du HTML brut
    document.getElementById('navbar-container').innerHTML = html;
}
chargerNavbar();