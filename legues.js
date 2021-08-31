const showResult = document.getElementById('legue-details');
const searchField = document.getElementById('search-field');
let data = [];
// console.log(searchField)?
searchField.addEventListener('keyup',e =>{
    const searchString = e.target.value.toLowerCase();

    const searchFilter =data.leagues.filter(character =>{
        return character.strLeague.toLowerCase().includes(searchString);
    });
    displayLegue(searchFilter);

});





const searchLegue = async () =>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
    // console.log(url);
    const res = await fetch(url);
    data =await res.json();
    displayLegue(data.leagues);
}


searchLegue();
const displayLegue = leagues =>{
    const leaguesDetails = leagues.map(league =>{
        const div =document.createElement('div');
        div.classList.add('col');
        return `
        <div class="card h-100">
        
        <div class="card-body">
          <h5 class="card-title">${league.strLeague}</h5>
          <p class="card-text">${league.strLeagueAlternate}</p>
        </div>
      </div>`
    })
    .join('');
    showResult.innerHTML =leaguesDetails;
}

// const displayLegue = leagues =>{
//     const showResult = document.getElementById('legue-details');
//     leagues.forEach(league =>{
//         const div =document.createElement('div');
//         div.classList.add('col');
//         div.innerHTML = `
//         <div class="card h-100">
        
//         <div class="card-body">
//           <h5 class="card-title">${league.strLeague}</h5>
//           <p class="card-text">${league.strLeagueAlternate}</p>
//          </div>
//        </div>
//         `
//         showResult.appendChild(div);
//     })
// }
