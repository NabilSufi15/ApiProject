$('#btnRun').click(function () {

    $.ajax({
        url: "libs/php/getPostalCodes.php",
        type: 'POST',
        dataType: 'json',
        data: {
            postalCode: 'B20'
        },
        success: function (result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#results').html(result['data'][0]['placeName']);
                console.log("work")
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            // your error code
            console.log(jqXHR, textStatus, errorThrown);
            console.log("Postal code not working")
        }
    });


});

$('#btnRun2').click(function () {

    $.ajax({
        url: "libs/php/getOcean.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: '40.78343',
            lng: '-43.96625'
        },
        success: function (result) {

            console.log(result);
            console.log("works")

            if (result.status.name == "ok") {

                $('#results2').html(result['data']['name']);

            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            // your error code
            console.log(jqXHR, textStatus, errorThrown);
            console.log("ocean not working")
        }
    });


});

$('#btnRun3').click(function () {

    $.ajax({
        url: "libs/php/getWeather.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: '52.4',
            lng: '1.89'
        },
        success: function (result) {

            console.log(result);
            console.log("works")

            if (result.status.name == "ok") {

                $('#results3').html(result['data']['stationName']);

            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            // your error code
            console.log(jqXHR, textStatus, errorThrown);
            console.log("weather not working")
        }
    });


});