
const searchField = document.getElementById('search-field');
// console.log(searchField);
let data =[];
searchField.addEventListener('keyup',e =>{
  // console.log(e.target.value);
  const searchString = e.target.value.toLowerCase();
  const search = data.filter(character =>{
    return character.toLowerCase().includes(search);
  });
  searchFootball(searchString);
  // console.log(searchString);
})
// // const searchData = searchField.value;
// let res =[];
// searchField.addEventListener('keyup', (e) =>{
//     // console.log(e.target.value);
//     const searchString = e.target.value.toLowerCase();
//     const search = res.find(character =>{
//        return character.sports.toLowerCase().includes(search);
//     });
//     searchFootball(searchString);
//     // console.log(searchString);
// });
// const searchText = searchField.value;
// searchField.value = '';
const searchFootball =async () =>{
    
  // const searchField = document.getElementById('search-field');
  // const searchData = searchField.value;
  // searchField.value ='';
    const url = `https://www.thesportsdb.com/api/v1/json/1/all_sports.php`;
   const getresponse =await fetch(url);
   let data = await getresponse.json();
   displayTeam(data.sports);
    // .then(res => res.json())
    // .then(data => displayTeam(data.sports))
    // console.log(url);
}
searchFootball();

const displayTeam = teams =>{
    console.log(teams);
    const showResult =document.getElementById('team-details')
    const showTeam = teams;
    // console.log(showTeam);
    for(team of showTeam){
        // console.log(team.strFormat);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${team.strSportThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${team.strSport}</h5>
          <p class="card-text">${team.strSportDescription.slice(0,250)}</p>
        </div>
      </div>
        `
        showResult.appendChild(div);
    }
   
}