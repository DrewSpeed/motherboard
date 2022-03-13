var searchFormEl = $("#search-form");
var searchInputEl = $("#search-bar");
const cardRowEl = $("#card-row")

searchFormEl.on("submit", function(event) {
    event.preventDefault();
    // remove suggestions or lyrics

    term = searchInputEl.val().trim();
    // run getSuggestions and delete input value
    if (term) {
        getResults();
        searchInputEl.val("");
    }else {
        return;
    }
});

getResults = (formData = {}) => {
    let queryUrl = '/api/location';

    fetch(queryUrl)
        .then(response => {
            if (!response.ok) {
                return alert('Error: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            data.data.forEach((restaurant) => {
                printResults(restaurant);
            })
        })
}

const printResults = resultArr => {
    console.log(JSON.stringify(resultArr.Park));
    var kidScore = 0;
        if (resultArr.Park === 1) {
        var parkTrue='Yes';
        kidScore += 1;
    } else if (resultArr.Park === 0) {
        kidScore +=0;
        var parkTrue = 'No';
    }
    if (resultArr.KidsMenu === 1) {
        var menuTrue='Yes';
        kidScore += 1;
    } else if (resultArr.KidsMenu === 0) {
        var menuTrue='No';
        kidScore +=0;
    }
    if (resultArr.GenderNeutralRestroom === 1) {
        var GenderNeutral='Yes';
        kidScore += 1;
    } else if (resultArr.GenderNeutralRestroom === 0) {
        var GenderNeutral='No';
        kidScore +=0;
    }
    if (resultArr.HighChair === 1) {
        var HighChair = 'Yes';
        kidScore += 1;
    } else if (resultArr.HighChair === 0) {
        var HighChair = 'No';
        kidScore +=0;
    }
    if (resultArr.GoodForGroups === 1) {
        var Groups = 'Yes'
        kidScore += 1;
    } else if (resultArr.GoodForGroups === 0) {
        var Groups = 'No';
        kidScore +=0;
    }
    if (resultArr.OutdoorSeating === 1) {
        var Outdoor = 'Yes';
        kidScore += 1;
    } else if (resultArr.OutdoorSeating === 0) {
        var Outdoor = 'No';
        kidScore +=0;
    }
    if (resultArr.WheelchairAccessible === 1) {
        var Wheelchair = 'Yes';
        kidScore += 1;
        console.log(kidScore);
    } else if (resultArr.WheelchairAccessible === 0) {
        var Wheelchair = 'No';
        kidScore +=0;
        console.log(kidScore);
    }
    const cardHTML =`
    <div class="col-md-4">
        <div class="card my-3" id="${resultArr.RestaurantId}">
         <h3 class="card-header">${resultArr.Name}</h3>
         <p class="card-text px-3">${resultArr.Price}</p>
         <p class="card-text px-3">${resultArr.Hours}</p>
         <p class="card-text px-3">${resultArr.Address}</p>
         <p class="card-text px-3">Health Score:${resultArr.HealthScore}</p>
         <p class="card-text px-3"><b>Wheelchair Accessible: </b> ${Wheelchair}</p>
         <p class="card-text px-3"><b>Outdoor Seating: </b> ${Outdoor}</p>
         <p class="card-text px-3"><b> Good for Groups: </b> ${Groups}</p>
         <p class="card-text px-3"><b> High Chair Available: </b> ${HighChair}</p>
         <p class="card-text px-3"><b> Private Restroom: </b> ${GenderNeutral}</p>
         <p class="card-text px-3"><b> Kids Menu? </b> ${menuTrue}</p>
         <p class="card-text px-3"><b> Nearby Park? </b> ${parkTrue}</p>
         <h4 class ="card-text text-right px-3 py-2">${kidScore}/7</h4>
        </div>
    </div>`

    cardRowEl.append(cardHTML);

    $(`#${resultArr.RestaurantId}`).on("click", console.log(resultArr.RestaurantId));


}