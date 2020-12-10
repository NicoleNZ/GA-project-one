console.log("app is running");




$("#go").on("click", (event) => {
    console.log("Go button was clicked!");
    event.preventDefault();
    const $country = $('input[name="country"]');
    const $countryTyped = $country.val();
    const countryData = $.get(`https://restcountries.eu/rest/v2/name/${$countryTyped}`, (data) => {
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

    });
    //$("#result").append(capital);
});

const countryImages = $.get(`https://api.unsplash.com/photos`, (data) => {
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

});