$('.weather-form').on('submit', function (event) {
    let city = $('.city').val();
    if (city == '') {
        alert('Enter city and press ENTER ');
    }

    else {
        let API_URL = 'http://api.weatherapi.com/v1/forecast.json?key=ec780a0897154610a2890849210901&q=' + city + '&days=5';

        $.ajax({
            url: API_URL,
            beforeSend: function () {
                $('.loader').css('display', 'block');
            }
        }).done(function (allDataFromApi) {
            //console.log(allDataFromApi.current.temp_c);
            $('.loader').css('display', 'none');
            $('.data-from-api').html(`
            <div class="cont">
            <div class="info">
            Temperature in ${allDataFromApi.location.name} , ${allDataFromApi.location.country} <p> as of : ${allDataFromApi.location.localtime} <p> is :  ${allDataFromApi.current.temp_c} <sup>o</sup> C</p>
            <p> Wind: ${allDataFromApi.current.wind_kph} Km/h</p> 
            <p> Precipitation: ${allDataFromApi.current.precip_mm} mm</p>
            </div>
            <div class="icon"> 
            Condition: ${allDataFromApi.current.condition.text}
                          <img src="${allDataFromApi.current.condition.icon}" alt="Currently"> 
            </div>
            </div>
           
            `)

        }).fail(function () {
            $('.loader').css('display', 'none');
            $('.data-from-api').html(`
            <div class="error">There was an  error or the city does not exist!</div>
            
            
            `)



        })
    }


    event.preventDefault();

})
