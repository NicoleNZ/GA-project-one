
const onButtonClick = (event) => {
    event.preventDefault();
    const $country = $('input[name="country"]');
    $country.val();
    console.log("val: ", $country.val())
};


$('#button-two').on("click", () => {
console.log("Capital button clicked");
const countryData = $.get(`https://restcountries.eu/rest/v2/name/`, (data) => {
    console.log(data);
    // countryTyped = data.capital;
    //const language = data.languages.name; 
    //const flag = data.flag;
    //console.log(capital);
    //console.log(language);
    //console.timeLog(flag);  

    });
});