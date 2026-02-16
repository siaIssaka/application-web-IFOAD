(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(window).width() > 992) {
            if ($(this).scrollTop() > 45) {
                $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
            } else {
                $('.sticky-top .container').removeClass('shadow-sm').css('max-width', $('.topbar .container').width());
            }
        } else {
            $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 0,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });



    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });

    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

   


})(jQuery);
document.addEventListener("DOMContentLoaded", function () { var dateElement = document.getElementById("dateActuelle"); if (dateElement) { var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; var today = new Date(); dateElement.textContent = today.toLocaleDateString('fr-FR', options); } });


   // ===============================
// Affichage dynamique des champs
// ===============================
function afficherChamps() {

    let choix = document.getElementById("fonction").value;
    let champs = document.getElementById("champs");
    champs.innerHTML = "";

    if (choix === "addition" || choix === "multiplication") {
        champs.innerHTML = `
            <input type="number" id="a" class="form-control mb-2" placeholder="Premier nombre">
            <input type="number" id="b" class="form-control" placeholder="Deuxième nombre">
        `;
    }

    else if (choix === "carre" || choix === "racine" || choix === "aire") {
        champs.innerHTML = `
            <input type="number" id="a" class="form-control" placeholder="Entrez un nombre">
        `;
    }

    else if (choix === "moyenne") {
        champs.innerHTML = `
            <input type="number" id="a" class="form-control mb-2" placeholder="Nombre 1">
            <input type="number" id="b" class="form-control mb-2" placeholder="Nombre 2">
            <input type="number" id="c" class="form-control" placeholder="Nombre 3">
        `;
    }

    else if (choix === "equation") {
        champs.innerHTML = `
            <input type="number" id="a" class="form-control mb-2" placeholder="Coefficient a">
            <input type="number" id="b" class="form-control mb-2" placeholder="Coefficient b">
            <input type="number" id="c" class="form-control" placeholder="Coefficient c">
        `;
    }
}


// ===============================
// Fonction principale de calcul
// ===============================
function calculer() {

    let choix = document.getElementById("fonction").value;
    let resultat = document.getElementById("resultat");

    resultat.style.display = "block";
    resultat.className = "alert mt-4 text-center fw-bold";

    if (!choix) {
        resultat.classList.add("alert-danger");
        resultat.innerHTML = "Veuillez choisir une fonction.";
        return;
    }

    let res;

    try {

        // ------------------
        // ADDITION
        // ------------------
        if (choix === "addition") {

            let a = parseFloat(document.getElementById("a").value);
            let b = parseFloat(document.getElementById("b").value);

            if (isNaN(a) || isNaN(b)) throw "Champ vide";

            res = a + b;
        }

        // ------------------
        // MULTIPLICATION
        // ------------------
        else if (choix === "multiplication") {

            let a = parseFloat(document.getElementById("a").value);
            let b = parseFloat(document.getElementById("b").value);

            if (isNaN(a) || isNaN(b)) throw "Champ vide";

            res = a * b;
        }

        // ------------------
        // CARRE
        // ------------------
        else if (choix === "carre") {

            let a = parseFloat(document.getElementById("a").value);

            if (isNaN(a)) throw "Champ vide";

            res = a * a;
        }

        // ------------------
        // RACINE
        // ------------------
        else if (choix === "racine") {

            let a = parseFloat(document.getElementById("a").value);

            if (isNaN(a)) throw "Champ vide";
            if (a < 0) throw "Nombre négatif impossible";

            res = Math.sqrt(a);
        }

        // ------------------
        // MOYENNE
        // ------------------
        else if (choix === "moyenne") {

            let a = parseFloat(document.getElementById("a").value);
            let b = parseFloat(document.getElementById("b").value);
            let c = parseFloat(document.getElementById("c").value);

            if (isNaN(a) || isNaN(b) || isNaN(c)) throw "Champ vide";

            res = (a + b + c) / 3;
        }

        // ------------------
        // AIRE DU CERCLE
        // ------------------
        else if (choix === "aire") {

            let a = parseFloat(document.getElementById("a").value);

            if (isNaN(a)) throw "Champ vide";

            res = Math.PI * a * a;
        }

        // ------------------
        // EQUATION 2nd DEGRE
        // ------------------
        else if (choix === "equation") {

            let A = parseFloat(document.getElementById("a").value);
            let B = parseFloat(document.getElementById("b").value);
            let C = parseFloat(document.getElementById("c").value);

            if (isNaN(A) || isNaN(B) || isNaN(C)) throw "Champ vide";
            if (A === 0) throw "Ce n'est pas une équation du second degré";

            let delta = B * B - 4 * A * C;

            if (delta < 0) {
                res = "Pas de solution réelle";
            }
            else if (delta === 0) {
                res = "Une solution : " + (-B / (2 * A));
            }
            else {
                let x1 = (-B + Math.sqrt(delta)) / (2 * A);
                let x2 = (-B - Math.sqrt(delta)) / (2 * A);
                res = "Deux solutions : " + x1 + " et " + x2;
            }
        }

        resultat.classList.add("alert-success");
        resultat.innerHTML = "Résultat : " + res;

    } catch (error) {

        resultat.classList.add("alert-danger");
        resultat.innerHTML = "Erreur : " + error;
    }
}


