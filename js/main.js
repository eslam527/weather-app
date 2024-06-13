// var nav=document.querySelector('#nav')
// console.log(nav);
// window.scroll=function(){
//     if (window.scrollY > 0) {
//         // nav.classList.add("color-two");
//         // nav.classList.remove("background-color");
//         nav.classList.add('color-two')

//     } 
//     else {
//         nav.classList.add('background-color')

//         // nav.classList.add("background-color");
//         // nav.classList.remove("color-two");
//     }
// }

 let body =document.querySelector('#body')
 console.log(body);
let theLocation =[];

async function two(city){
   let bigData= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c89e93f3165e4d8fbb9142141241306&q=07112$${city}&days=3`)
  let theLocation = await bigData.json()
    display(theLocation)};
two()


let searchInput =document.querySelector('.searsh input')
searchInput.addEventListener('input',function(e){
  two(e.target.value)
})


console.log(theLocation);
function display(arr){
    body.innerHTML =`
              <div class="row p-3 g-5 mt-4" id="body justify-content-center">
            <div class="col-sm12 col-md-4 colorOne">
              <p>
                <div class="date d-flex justify-content-between p-1">
                    <div class="day">${arr.forecast.forecastday[0].date}</div>
                </div>
                <span class="city my-3 ps-2 d-inline-block fw-bold">${arr.location.name}</span>
                <div class="weatherInfo">
                    <div class="degre fs-1 p-1">
                        ${arr.current.feelslike_c}o
                    </div>
                </div>
                <div class="weatherCodition p-1">
                <img src="${arr.current.condition.icon}" alt="">
                    <span class="d-block mt-2 fw-bold">  ${arr.current.condition.text}</span>
                </div>
                <div class="info mt-3">
                    <span class="mx-2"><img class="p-1" src="icon-umberella.png" alt="">${arr.current.uv}%</span>
                    <span class="mx-2"><img class="p-1" src="icon-wind.png" alt="">${arr.current.wind_kph}</span>
                    <span class="mx-2"><img class="p-1" src="icon-compass.png" alt="">${arr.current.wind_dir}</span>
                </div>
              </p>
            </div>
            <div class="col-sm12 col-md-4 colorTwo">
                <div class="day text-center pt-4">${arr.forecast.forecastday[1].date}</div>
                <div class="codition d-flex flex-column text-center mt-3">
                <div class="icon"><img src="${arr.forecast.forecastday[1].day.condition.icon}" class="w-25" alt=""></div>
                          <span class="degry max py-2 fs-3">
                         ${arr.forecast.forecastday[1].day.maxtemp_c}o

                          </span>
                          <span class="degry min py-1 fs-4 ">
                        ${arr.forecast.forecastday[1].day.mintemp_c}o


                          </span>
                          <span class="info py-1 fw-bold ">
                    <span class="d-block mt-2 fw-bold">  ${arr.forecast.forecastday[1].day.condition.text}</span>
                          </span>
                </div>
            </div>
            <div class="col-sm12 col-md-4 colorThree">
                <div class="day text-center pt-4">${arr.forecast.forecastday[2].date}</div>
                <div class="codition d-flex flex-column text-center mt-3">
                <div class="icon"><img src="${arr.forecast.forecastday[2].day.condition.icon}" class="w-25" alt=""></div>
                          <span class="degry max py-2 fs-3">
                        ${arr.forecast.forecastday[2].day.maxtemp_c}o


                          </span>
                          <span class="degry min py-1 fs-4">
                        ${arr.forecast.forecastday[2].day.mintemp_c}o


                          </span>
                          <span class="info py-1 fw-bold ">
                    <span class="d-block mt-2 fw-bold">  ${arr.forecast.forecastday[2].day.condition.text}</span>
                          </span>
                </div>
            </div>

          </div>
    
    `


}

