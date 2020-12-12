console.log("app is running");




$("#go").on("click", (event) => {
    console.log("Go button was clicked!");
    event.preventDefault();
    const country = $('input[name="country"]');
    const countryTyped = country.val();
    const countryData = $.get(`https://restcountries.eu/rest/v2/name/${countryTyped}`, (data) => {
        const subregion = data[0].subregion;
        console.log(subregion);    
        const capital = data[0].capital;
        console.log(capital);
        const population = data[0].population;
        console.log(population);
        const language = data[0].languages[0].name;
        console.log(language);
        const timezone = data[0].timezones[0];
        console.log(timezone);  
        const currencyCode = data[0].currencies[0].code;
        console.log(currencyCode);
        const currencyName = data[0].currencies[0].name;
        console.log(currencyName);
        const currencySymbol = data[0].currencies[0].symbol;
        console.log(currencySymbol);
        const flag = data[0].flag;
        console.log(flag);
        $("#slide2").append(`<img src="${flag}" alt=Flag of ${countryTyped} class="carousel-images"></img>`);
        $("#fact-list").append(`<h4 class="text" id="h4-countryfacts">Country Facts</h4>`);
        $("#fact-list").append(`<li>World Region: ${subregion}</li>`);
        $("#fact-list").append(`<li>Capital: ${capital}</li>`);
        $("#fact-list").append(`<li>Population: ${population}</il>`);
        $("#fact-list").append(`<li>Native Language: ${language}</il>`);
        $("#fact-list").append(`<li>Timezone: ${timezone}</li>`);
        $("#fact-list").append(`<li>Currency: ${currencyName} (${currencySymbol}${currencyCode})</li>`);

        const capitalImages = $.get(`https://api.unsplash.com/search/photos?query=${capital}&client_id=0GTjLXehAwMxmSfFrV-PDAi35FISuLBpI2zIzpWxZD8`, (data) => {
            const randomIndex = data.results[Math.floor(Math.random() * data.results.length)];
            capitalImg = randomIndex.urls.small;
            capitalAltText = randomIndex.alt_description;
            $("#slide1").append(`<img src="${capitalImg}" alt="${capitalAltText}" class="carousel-images"></img>`)
        });

        const countryImages = $.get(`https://api.unsplash.com/search/photos?query=${countryTyped}+map&client_id=0GTjLXehAwMxmSfFrV-PDAi35FISuLBpI2zIzpWxZD8`, (data) => {
            const randomIndex = data.results[Math.floor(Math.random() * data.results.length)];
            countryImg = randomIndex.urls.small;
            countryAltText = randomIndex.alt_description;
            $("#slide3").append(`<img src="${countryImg}" alt="${countryAltText}" class="carousel-images"></img>`)
        });
    });
});