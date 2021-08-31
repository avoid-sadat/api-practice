const weatherSearch = ()=>{
    const getData = document.getElementById('city-search')
    const getText = getData.value
    // console.log(getText)
    getData.value=''

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${getText}&appid=eb6671ecd09f72204e2186123ac35969`
    fetch(url)
    .then(res => res.json())
    .then(data => diplayResult(data))
}

const diplayResult = result =>{
    console.log(result)
    const searchresult = document.getElementById('weather-details')
   searchresult.textContent=''
        const div =document.createElement('div')
        div.innerHTML=`
        <img src="https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" alt="">
                <h1>${result.name}</h1>
                <h3><span>${result.main.temp}</span>&deg;C</h3>
                <h1 class="lead">${result.weather[0].main}</h1>
        `
        searchresult.appendChild(div)
  
    
    
}