const area = document.getElementById("area")
const country = document.getElementById("country")

const temp = document.getElementById("temp")
const errorPara = document.getElementById("error")

const img = document.getElementById("img")
const inputField = document.getElementById("inputEle")

const getWeather = async () =>{
    const ApiKey = "97c24bc20b924a309f345035230707"
    const baseUrl = `http://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${inputField?.value?.toLowerCase()}&aqi=yes`
    // Rapid Api
  await axios.get(baseUrl).then((result) => {
    console.log(result?.data)
const data = result?.data
    area.innerHTML = data?.location?.name
    country.innerHTML = data?.location?.country
    temp.innerHTML = `${data?.current?.temp_c} °C`
    img.src = `${data?.current?.condition?.icon}`
    img.alt = `${data?.current?.condition?.text}`
    errorPara.innerHTML = ""
}).catch(function(error){
    console.log(error?.response?.data)
    if (error?.response?.data?.error?.message) {
        errorPara.innerHTML = error?.response?.data?.error?.message
    }

   });
setTimeout(() => {
    errorPara.innerHTML = ""
}, 3000);
}

// getWeather()