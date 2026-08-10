async function chargerNavbar() {
    const response = await fetch('navbar.html');
    const html = await response.text(); 
    document.getElementById('navbar-container').innerHTML = html;
}
chargerNavbar();
