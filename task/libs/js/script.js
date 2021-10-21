$(':countryCodeBtn').click(function() {

    $.ajax({
        url: "libs/php/countryCode.php",
        type: 'POST',
        dataType:'json',
        data: {
            lat: $('#lat').val(),
            lng: $('#lng').val()
        },
        success: function (response) {
            console.log(JSON.stringfy(response));

            if (response.status.name == "ok") {

                $('#txtCountry').html(result['data'][0]['country']);

            }
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("There has been an error.");
        }
    });

});

    $(':timezoneBtn').click(function() {

    $.ajax({
        url: "libs/php/timezone.php",
        type: 'POST',
        dataType:'json',
        data: {
            lat: $('#lat').val(),
            lng: $('#lng').val()
        },
        success: function (response) {
            console.log(JSON.stringfy(response));

            if (response.status.name == "ok") {

                $('#txtTimezone').html(result['data'][0]['timezone']);

            }
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("There has been an error.");
        }
    });

});

    $(':weatherBtn').click(function() {

    $.ajax({
        url: "libs/php/weather.php",
        type: 'POST',
        dataType:'json',
        data: {
            north: $('#north').val(),
            south: $('#south').val(),
            east: $('#east').val(),
            west: $('#west').val()

        },
        success: function (response) {
            console.log(JSON.stringfy(response));

            if (response.status.name == "ok") {

                $('#txtWeather').html(result['data'][0]['weather']);

            }
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("There has been an error.");
        },
    });

});
    
