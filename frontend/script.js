$(() => {
    // VERDOPPLUNG
    $('#button').on('click', () => {
        const wert = $('#eingabe').val();
        $.ajax({
            type: "POST",
            url: "http://localhost:3333/verdoppeln",
            data: {
                "wert": wert,
                "von": "frontend"
            },
            dataType: 'JSON',
            crossDomain: true,
            error: (error) => {
                console.log('error', error);
            },
            success: (response) => {
                $('#b').html(response.wert);
                console.log(response);
            }
        });


        console.log('button clicked');
    });


    // Gallerie

    $('#load_gallery').on('click', () => {

        $.ajax({
            type: "POST",
            url: "http://localhost:3333/gallery",
            data: {},
            dataType: 'JSON',
            crossDomain: true,
            error: (error) => {
                console.log('error', error);
            },
            success: (response) => {
                for (let i = 0; i < response.gallery.length; i++) {
                    const container = $('<div>');
                    const imgElement = $('<img>');
                    const pElement = $('<p>');
                    pElement.html(response.gallery[i].title)
                    container.append(imgElement);
                    container.append(pElement);
                    imgElement.attr('src', response.gallery[i].src);
                    imgElement.attr('class', 'bild');
                    imgElement.attr('id', 'bild_' + i);
                    $('#gallery').append(container);
                }
            }
        });
    });

});