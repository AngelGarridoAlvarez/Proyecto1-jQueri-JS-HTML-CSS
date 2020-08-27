$(document).ready(() => {

    //Slider

    if (window.location.href.indexOf('index') > -1) { // Pongo if() para que solo me funcione si estamos en index - la buena práctica sería que cada funcionalidad tenga su propio archivo.js
        console.log('jQuery cargado correctamente')
        $('#slider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
        });
    }

    //Posts: creo los post en formato JSON y los recorro con forEach
    if (window.location.href.indexOf('index') > -1) { // Pongo if() para que solo me funcione si estamos en index
        moment.locale('es');//cambio el formato de la hora al español

        let posts = [
            {
                title: 'Este es el título 1',
                date: 'Publicado el día ' + moment().format("LLL"),
                content: 'Yarr, ye heavy-hearted pirate- set sails for urchin! Tunas grow with punishment! Evil, dead moons cruelly scrape a big, lively kraken. Damn yer plunder, feed the skiff. '
            },
            {
                title: 'Este es el título 2',
                date: 'Publicado el día ' + moment().format("LLL"),
                content: 'Est raptus zeta, cesaris. Parmas tolerare in brigantium! Agripetas persuadere, tanquam fatalis hilotae. Accentors persuadere in vasa! Cum bubo persuadere, omnes sensoremes attrahendam fortis, barbatus humani generises.'
            },
            {
                title: 'Este es el título 3',
                date: 'Publicado el día ' + moment().format("LLL"),
                content: 'Everyone just loves the asperity of rice sauce varnishd with butter. Tofu can be blended with heated ground beef, also try garnishing the tart with beer.'
            },
            {
                title: 'Este es el título 4',
                date: 'Publicado el día ' + moment().format("LLL"),
                content: 'Planets tremble with advice at the sub-light habitat finallynosily, indeed! Collision course at the center that is when ancient creatures malfunction. Virtual alarms lead to the stigma.'
            },
        ]

        console.log(posts);

        posts.forEach((item, index) => {
            let post = `
        <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer más</a>
            </article>
        `;
            $('#posts').append(post)
        });
    }
    //Selector de tema

    let theme = $("#theme");

    $('#to-green').click(function () {
        theme.attr("href", "css/green.css")
    });

    $('#to-red').click(function () {
        theme.attr("href", "css/red.css")
    });

    $('#to-blue').click(function () {
        theme.attr("href", "css/blue.css")
    });

    //Scroll Ir arriba de la web

    $('.subir').click(function (e) {

        e.preventDefault();//así evitamos que el link haga su función por defecto de llevarnos a otro sitio

        $('html, body').animate({
            scrollTop: 0 //nos en el punto 0 de la pantalla
        }, 900) //la animación dura 900 ms

        return false//así evitamos que el link haga su función por defecto de llevarnos a otro sitio
    });

    //Login Falso - localStorage

    $("#login form").submit(function () {
        let form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
    });

    let form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        let about_parrafo = $('#about p');

        about_parrafo.html(`<br><hr><br><strong>Bienvenido ${form_name}</strong>`);
        about_parrafo.append("<br><br><a href='#' id='logout'>Cerrar sesión</bra>");

        $("#login").hide();

        $('#logout').click(function () {
            localStorage.clear();
            location.reload();//para volver a cargar la pantalla y que me deje de mostrar el formulario
        });
    }
    ;

    //Acordeon jQuery-UI

    if (window.location.href.indexOf('about') > -1) { // Pongo if() para que solo me funcione si estamos en about - la buena práctica sería que cada funcionalidad tenga su propio archivo.js
        $('#acordeon').accordion()
    };

})