initialApi = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=';
apiNashville = '&latitude=36.1627&longitude=86.7816';
var searchFormEl = $("#search-form");
var searchInputEl = $("#search-bar");




searchFormEl.on("submit", function(event) {
    event.preventDefault();
    // remove suggestions or lyrics

    term = searchInputEl.val().trim();
    // run getSuggestions and delete input value
    if (term) {
        getSuggestions(term)
        searchInputEl.val("");
    }else {
        return;
    }
})

// var myHeaders = new Headers();

// myHeaders.set('Authorization', 'Bearer dborrInvNM6w6NMd9Mr8qd6r4BAb-KvcvvKY9BtHtz2UjeILKYjoG_hTM5x6An9U9Neg2TIvpgsXjXXAXV618qRiYbzLPVoSvkyGt-bPX9Tr0jENsRuKWV6uISctYnYx')
// myHeaders.set('Access-Control-Allow-Origin', '*')



getSuggestions = async function(searchTerm) {
    // format suggestion api url
    var suggestion = initialApi + searchTerm + apiNashville;
    await fetch(suggestion, {
        method: "GET",
        headers: {
            "Authorization": `Bearer dborrInvNM6w6NMd9Mr8qd6r4BAb-KvcvvKY9BtHtz2UjeILKYjoG_hTM5x6An9U9Neg2TIvpgsXjXXAXV618qRiYbzLPVoSvkyGt-bPX9Tr0jENsRuKWV6uISctYnYx`
        }
    })
    .then(function(response) {
        //request was successful
        //if (response.ok) {
                console.log(response.json())}
        )
};