console.log("app is running");




$("#go").on("click", (event) => {
    console.log("Go button was clicked!");
    event.preventDefault();
    const country = $('input[name="country"]');
    const countryTyped = country.val();
    const countryData = $.get(`https://restcountries.eu/rest/v2/name/${countryTyped}`, (data) => {
        const capital = data[0].capital;
        console.log(capital);
        const language = data[0].languages[0].name;
        console.log(language);
        const currencyCode = data[0].currencies[0].code;
        console.log(currencyCode);
        const currencyName = data[0].currencies[0].name;
        console.log(currencyName);
        const flag = data[0].flag;
        console.log(flag);
        $("#button-one").append(`<img class="images" id="flag-img" src="${flag}"></img>`);
        
        const capitalImages = $.get(`https://api.unsplash.com/search/photos?query=${capital}&client_id=0GTjLXehAwMxmSfFrV-PDAi35FISuLBpI2zIzpWxZD8`, (data) => {
            const randomIndex = data.results[Math.floor(Math.random() * data.results.length)];
            capitalImg = randomIndex.urls.small;
            $("#button-two").append(`<img class="images" id="capital-img" src="${capitalImg}"></img>`)
        });

        const countryImages = $.get(`https://api.unsplash.com/search/photos?query=${countryTyped}+map&client_id=0GTjLXehAwMxmSfFrV-PDAi35FISuLBpI2zIzpWxZD8`, (data) => {
            const randomIndex = data.results[Math.floor(Math.random() * data.results.length)];
            countryImg = randomIndex.urls.small;
            $("#button-three").append(`<img class="images" id="country-img" src="${countryImg}"></img>`)
        });
    });
});