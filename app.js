$("#go").on("click", (event) => {

    $("#fact-list").empty();
    $("#slide1").empty();
    $("#slide2").empty();
    $("#slide3").empty();
    $("#slide4").empty();    
    $("#carousel-id").css("border", "").css("padding", "").css("background-color", "");
    event.preventDefault();
    const country = $('input[name="country"]');
    const countryTyped = country.val();
    const countryData = $.get(`https://restcountries.eu/rest/v2/name/${countryTyped}`, (data) => {
        const subregion = data[0].subregion;
        const capital = data[0].capital;
        const population = data[0].population;
        const language = data[0].languages[0].name;
        const timezone = data[0].timezones[0];
        const currencyCode = data[0].currencies[0].code;
        const currencyName = data[0].currencies[0].name;
        const currencySymbol = data[0].currencies[0].symbol;
        const flag = data[0].flag;
        const countryCode = data[0].alpha2Code;

        $("#slide2").append(`<img src="${flag}" alt=Flag of ${countryTyped} class="d-block w-100"></img>`);
        $("#fact-list").append(`<h4 class="text" id="h4-countryfacts">Country Facts</h4>`);
        $("#fact-list").append(`<li>World Region: ${subregion}</li>`);
        $("#fact-list").append(`<li>Capital: ${capital}</li>`);
        $("#fact-list").append(`<li>Population: ${population}</il>`);
        $("#fact-list").append(`<li>Native Language: ${language}</il>`);
        $("#fact-list").append(`<li>Timezone: ${timezone}</li>`);
        $("#fact-list").append(`<li>Currency: ${currencyName} (${currencySymbol}${currencyCode})</li>`);

        const capitalImages = $.get(`https://api.unsplash.com/search/photos?query=${capital}&orientation=landscape&client_id=0GTjLXehAwMxmSfFrV-PDAi35FISuLBpI2zIzpWxZD8`, (data) => {
            const randomIndex = data.results[Math.floor(Math.random() * data.results.length)];
            capitalImg = randomIndex.urls.small;
            capitalAltText = randomIndex.alt_description;
            $("#slide1").append(`<img src="${capitalImg}" alt="${capitalAltText}" class="d-block w-100"></img>`)
        });

        const countryImages = $.get(`https://api.unsplash.com/search/photos?query=local+${countryTyped}+culture&orientation=landscape&client_id=0GTjLXehAwMxmSfFrV-PDAi35FISuLBpI2zIzpWxZD8`, (data) => {
            const randomIndex = data.results[Math.floor(Math.random() * data.results.length)];
            countryImg = randomIndex.urls.small;
            countryAltText = randomIndex.alt_description;
            $("#slide3").append(`<img src="${countryImg}" alt="${countryAltText}" class="d-block w-100"></img>`)
        });

        const countryMapImages = $.get(`https://api.unsplash.com/search/photos?query=${countryTyped}+map&orientation=landscape&client_id=0GTjLXehAwMxmSfFrV-PDAi35FISuLBpI2zIzpWxZD8`, (data) => {
            const randomIndex = data.results[Math.floor(Math.random() * data.results.length)];
            countryMapImg = randomIndex.urls.small;
            countryMapAltText = randomIndex.alt_description;
            $("#slide4").append(`<img src="${countryMapImg}" alt="${countryMapAltText}" class="d-block w-100"></img>`)
        });

        const greeting = $.get(`https://fourtonfish.com/hellosalut/?cc=${countryCode}`, (data) => {
            const sayHello = data.hello;
            $("#fact-list").append(`<li>Local Greeting: ${sayHello}!</li>`);
        });

        $("#carousel-id").css("border", "groove").css("padding", "5px").css("background-color", "lightgrey");
    });
});