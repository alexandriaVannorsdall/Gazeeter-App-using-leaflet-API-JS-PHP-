$(window).on('load', function () { 
    if ($('#preloader').length) {
    $('#preloader').delay(1000).fadeOut('slow', function () 
    { $(this).remove();
        }); }
    });

    $("#countryCodeBtn").on("click", function () {
        $.ajax({
          url: "libs/php/countryCode.php",
          type: "POST",
          dataType: "json",
          data: {
            lat: $("#codeLat").val(),
            lng: $("#codeLng").val(),
          },
          success: function (result) {
            console.log(JSON.stringify(result));
      
            if (result.status.name == "ok") {
              $("#txtCountry").html(result["data"][0]);
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
          },
        });
      });
      

      $("#timezoneBtn").on("click", function () {
        $.ajax({
          url: "libs/php/timezone.php",
          type: "POST",
          dataType: "json",
          data: {
            lat: $("#timeLat").val(),
            lng: $("#timeLng").val(),
          },
          success: function (result) {
            console.log(JSON.stringify(result));
      
            if (result.status.name == "ok") {
              $("#txtTimezone").html(result["data"][0]);
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
          },
        });
      });
      

      $("#oceanBtn").on("click", function () {
        $.ajax({
          url: "libs/php/ocean.php",
          type: "POST",
          dataType: "json",
          data: {
            lat: $("#oceanLat").val(),
            lng: $("#oceanLng").val(),
          },
          success: function (result) {
            console.log(JSON.stringify(result));
      
            if (result.status.name == "ok") {
              $("#txtOcean").html(result["data"][0]);
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
          },
        });
      });
      




