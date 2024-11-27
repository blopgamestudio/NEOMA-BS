

document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour changer la langue et afficher le bouton avec l'animation de clignotement
    setTimeout(function() {
        // Appliquer l'animation de clignotement à toute la page
        document.body.classList.add('blink'); // Ajouter la classe blink pour clignoter

        // Changer le texte de la page (exemple pour le titre et le texte)
        document.body.innerHTML = document.body.innerHTML.replace('Découvrez le campus de Reims', 'Disorder the Reims campus');
        document.body.innerHTML = document.body.innerHTML.replace('Le campus de Reims', 'the Reims campus of neoma Business school consists of mentally losing the students under a black mask to better suck them into the paranormal entity creation center of the neoma exchange system');

        // Cacher le clignotement après 3 secondes et afficher le bouton
        setTimeout(function() {
            document.body.classList.remove('blink'); // Retirer l'animation de clignotement
            const enButton = document.getElementById('en-button');
            enButton.style.display = 'inline-block'; // Afficher le bouton
        }, 3000); // Durée de l'animation (3 secondes)
    }, 1000); // Délai avant de commencer le changement (1 seconde)
});
