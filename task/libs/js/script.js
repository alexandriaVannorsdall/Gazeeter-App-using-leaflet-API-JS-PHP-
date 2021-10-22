$(window).on('load', function () { 
    if ($('#preloader').length) {
    $('#preloader').delay(1000).fadeOut('slow', function () 
    { $(this).remove();
        }); }
    });

$('#countryCodeBtn').click(function() { 

    $.ajax({
        url: "libs/php/countryCode.php",
        type: 'POST',
        dataType:'json',
        data: {
            lat: $('#codeLat').val(),
            lng: $('#codeLng').val()
        },
        success: function (response) {
            console.log(JSON.stringify(response));

            if (response.status.name == "ok") {

                $('#txtCountry').html(result.data[0].country);

            }
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("There has been an error.");
        }
    });

});

    $('#timezoneBtn').click(function() {

    $.ajax({
        url: "libs/php/timezone.php",
        type: 'POST',
        dataType:'json',
        data: {
            lat: $('#timeLat').val(),
            lng: $('#timeLng').val()
        },
        success: function (response) {
            console.log(JSON.stringify(response));

            if (response.status.name == "ok") {

                $('#txtTimezone').html(result.data[0].timezone);

            }
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("There has been an error.");
        }
    });

});

    $('#weatherBtn').click(function() {

    $.ajax({
        url: "libs/php/weather.php",
        type: 'POST',
        dataType:'json',
        data: {
            north: $('#northWeather2').val(),
            south: $('#southWeather2').val(),
            east: $('#eastWeather2').val(),
            west: $('#westWeather2').val()

        },
        success: function (response) {
            console.log(JSON.stringify(response));

            if (response.status.name == "ok") {

                $('#txtWeather').html(result.data[0].weather);

            }
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("There has been an error.");
            },
        });

    });




