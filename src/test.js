    const Function = async ()=>{
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=828b5c16d63f6c2ca6a33524e780d7ba`;
    const response = await fetch(apiUrl);
    const data =  response.json();
    data.then((result)=>{
        console.log(result.main.temp)
    })
    }
    Function();