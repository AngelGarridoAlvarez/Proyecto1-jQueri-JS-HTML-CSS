$(document).ready(() => {

    //Slider

    console.log('jQuery cargado correctamente')
    $('#slider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
    });

    //Posts

    let posts = [
        {
            title: 'Este es el título 1',
            date: new Date(),
            content: 'Yarr, ye heavy-hearted pirate- set sails for urchin! Tunas grow with punishment! Evil, dead moons cruelly scrape a big, lively kraken. Damn yer plunder, feed the skiff. '
        },
        {
            title: 'Este es el título 2',
            date: new Date(),
            content: 'Est raptus zeta, cesaris. Parmas tolerare in brigantium! Agripetas persuadere, tanquam fatalis hilotae. Accentors persuadere in vasa! Cum bubo persuadere, omnes sensoremes attrahendam fortis, barbatus humani generises.'
        },
        {
            title: 'Este es el título 3',
            date: new Date(),
            content: 'Everyone just loves the asperity of rice sauce varnishd with butter. Tofu can be blended with heated ground beef, also try garnishing the tart with beer.'
        },
        {
            title: 'Este es el título 4',
            date: new Date(),
            content: 'Planets tremble with advice at the sub-light habitat finallynosily, indeed! Collision course at the center that is when ancient creatures malfunction. Virtual alarms lead to the stigma.'
        },
    ]

    console.log(posts);
})