$(window).on('load', function () { 
    if ($('#preloader').length) {
    $('#preloader').delay(1000).fadeOut('slow', function () 
    { $(this).remove();
        }); }
    });

$('#countryCodeBtn').click(function() { 

    var $txtCountry = $('#textCountry');

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

                $('#txtCountry').html(response.data.countryCode);
                   
            }
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("There has been an error.");
        }
    });

});

    $('#timezoneBtn').click(function() {

        var $txtTimezone = $('#txtTimezone');

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

                $('#txtTimezone').html(response.data.timezone);
                    
            }
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("There has been an error.");
        }
    });

});

    $('#oceanBtn').click(function() {

        var $txtOcean = $('txtOcean');

    $.ajax({
        url: "libs/php/ocean.php",
        type: 'POST',
        dataType:'json',
        data: {
            lat: $('#oceanLat').val(),
            lng: $('#oceanLng').val()

        },
        success: function (response) {
            console.log(JSON.stringify(response));

            if (response.status.name == "ok") {

                $('#txtOcean').html(response.data.ocean);
                    
            }
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("There has been an error.");
            },
        });

    });




