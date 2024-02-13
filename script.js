async function fetchWheatherData(cityName){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a8382d4592e130ac6bf49da3d5e8cb50`;
    const response = await fetch(url)
    const data = await response.json();
    console.log(data)
}


function fetchCity(){
    let cityName = document.getElementById("city_name");
    if(cityName.value===""){
        alert("Enter a City name");
    }
    else{
        fetchWheatherData(cityName.value);
        cityName.value="";
    }
}