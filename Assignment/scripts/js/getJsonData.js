$(document).ready(function () {
    //Ajax get data from data.json
    $.getJSON('model/data.json', function (data) {
        // get the home page data
        var homePage = data.pages.find(page => page.id === 'Home-Page');

        // check if the home page exists
        if (homePage) {
            // get the content of the home page
            var homeTop = homePage.content[0];

            // append the home page data to the home page
            $('#home_title').html("<h2>" + homeTop.header + "</h2>");
            $('#home_subtitle').html("<h3>" + homeTop.subheader + "</h3>");
            $('#home_des').html("<p>" + homeTop.paragraph + "</p>");

            // get the cards content
            var cards = homePage.content[1].cards;
            // loop through all cards and append them to the home-card-row
            cards.forEach(function (card) {
                if (card.title === 'Coca Cola') {
                    $('#title_left').html("<h3>" + card.title + "</h3>");
                    $('#txt_left').html("<p>" + card.text + "</p>");
                    $('#img_left').attr('src', card.image);
                    $('#link_left').html("<a href='" + card.link + "'>Find out More</a>");
                } else if (card.title === 'Sprite') {
                    $('#title_mid').html("<h3>" + card.title + "</h3>");
                    $('#txt_mid').html("<p>" + card.text + "</p>");
                    $('#img_mid').attr('src', card.image);
                    $('#link_mid').html("<a href='" + card.link + "'>Find out More</a>");
                } else if (card.title === 'Dr Pepper') {
                    $('#title_right').html("<h3>" + card.title + "</h3>");
                    $('#txt_right').html("<p>" + card.text + "</p>");
                    $('#img_right').attr('src', card.image);
                    $('#link_right').html("<a href='" + card.link + "'>Find out More</a>");;
                }
            });
        } else { console.log('Home page not found'); }

        // get the sprite page data
        var spritePage = data.pages.find(page => page.id === 'Sprite-Page');

        // check if the sprite page exists
        if (spritePage) {
            // get the sprite x3d content
            var spriteX3d = spritePage.content[0];
            //set the sprite x3d content
            $('#inline_s_sprite').attr('url', spriteX3d.model);

            // get the sprite gallery content
            var spriteGallery = spritePage.content[1];
            //set the sprite gallery content
            $('#gallery_s_title').html("<h3>" + spriteGallery.header + "</h3>");
            $('#gallery_s_des').html("<p>" + spriteGallery.description + "</p>");


            // get the sprite card content
            var spriteCard = spritePage.content[2];
            //set the sprite card content
            $('#card_s_title').html("<h3>" + spriteCard.header + "</h3>");
            $('#card_s_txt').html("<p>" + spriteCard.paragraph + "</p>");
            $('#card_s_link').html("<a href='" + spriteCard.link + "'>Find out More</a>");

            //get the sprite caption content
            var spriteCaption = spritePage.content[3];
            //set the sprite caption content
            $('#model-cap').html("<p>" + spriteCaption.caption + "</p>");
            $('#model-look').html("<h4>" + spriteCaption.description + "</h4>");
        } else { console.log('Sprite page not found'); }

        // get the coke page data
        var cokePage = data.pages.find(page => page.id === 'Coke-Page');

        // check if the coke page exists
        if (cokePage) {
            // get the coke x3d content
            var cokeX3d = cokePage.content[0];
            //set the coke x3d content
            $('#inline_c_sprite').attr('url', cokeX3d.model);

            // get the coke gallery content
            var cokeGallery = cokePage.content[1];
            //set the coke gallery content
            $('#gallery_c_title').html("<h3>" + cokeGallery.header + "</h3>");
            $('#gallery_c_des').html("<p>" + cokeGallery.description + "</p>");


            // get the coke card content
            var cokeCard = cokePage.content[2];
            //set the coke card content
            $('#card_c_title').html("<h3>" + cokeCard.header + "</h3>");
            $('#card_c_txt').html("<p>" + cokeCard.paragraph + "</p>");
            $('#card_c_link').html("<a href='" + cokeCard.link + "'>Find out More</a>");
        } else { console.log('Coke page not found'); }
    });
});
