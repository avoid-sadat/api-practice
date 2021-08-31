const showResult =document.getElementById('team-details');
const searchField =document.getElementById('search-field');
let data =[];
searchField.addEventListener('keyup',e =>{
    const searchText = e.target.value.toLowerCase();

    const searchFilter  = data.sports.filter(character =>{
        return character.strSport.toLowerCase().includes(searchText);
    });
    displayTeam(searchFilter);
});
const searchFootball =async () =>{
    
    const url = `https://www.thesportsdb.com/api/v1/json/1/all_sports.php?`;
   const getresponse =await fetch(url);
    data = await getresponse.json();
    displayTeam(data.sports);
}


// const displayTeam = teams =>{
//     // console.log(teams);
    
//     const displayResult = teams.map(team =>{
//         //  const div = document.createElement('div');
//         //  div.classList.add('col');
//           return   `
        
//           <div class="col">
//          <div class="card h-100">
//          <img src="${team.image}" class="card-img-top" alt="...">
//          <div class="card-body">
//            <h5 class="card-title">${team.name}</h5>
//            <p class="card-text">${team.house}</p>
//          </div>
//        </div>
       
//         `
//         showResult.appendChild(div);
//     });
    
//     searchFootball();
// }
const displayTeam = (teams) => {
    const div = document.createElement('div');
    div.classList.add('col');
    const htmlString = teams
        .map((team) => {
            return `
            <div class="card h-100">
            <img src="${team.strSportThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${team.strSport}</h5>
              <p class="card-text">${team.strSportDescription.slice(0,250)}</p>
            </div>
          </div>
               
              
            
        `;
        })
        .join('');
    showResult.innerHTML = htmlString;
};
searchFootball();