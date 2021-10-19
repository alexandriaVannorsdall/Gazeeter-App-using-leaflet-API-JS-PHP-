$('submit').click(function() {

    $.$.ajax({
        url: "libs/php/countryCodeTimeWeath.php",
        type: "POST",
        dataType: 'json',
        data: "data",
        success: function (response) {
            
        }
    });
});
    
