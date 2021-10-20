$('submit').click(function() {

    $.$.ajax({
        url: "libs/php/countryCodeTimeWeather.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#lat').val(),
            lng: $('#lng').val()
        },
        success: function (response) {
            console.log(JSON.stringfy(response));

            if (response.status.name == "ok") {

                $('#txtCountry').html(result['data'][0]['country']);
                $('#txtTimezone').html(result['data'][0]['timezone']);
                $('#txtWeather').html(result['data'][0]['weather']);

            }
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("There has been an error.");
        }
    });
});
    
