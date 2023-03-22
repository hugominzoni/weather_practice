const search = document.querySelector('#search-bar')
const button = document.querySelector('#search-btn')
const tempBox = document.querySelector('.temp')
const feelsLike = document.querySelector('.feels h1')
const currentBox = document.querySelector('.current')
const temp = document.querySelector('.current h3')
const condition = document.querySelector('.condition')


button.addEventListener('click', goSearch)
document.addEventListener('keydown', pressBTN)

function pressBTN(e){
	if(e.key === "Enter"){
		goSearch()
	}
}

function goSearch(){
	tempBox.classList.remove('hidden')
	currentBox.classList.remove('hidden')
	condition.classList.remove('hidden')



    let city = search.value
    const APIkey = "489e230382d0a0ab4bb03e610a9bb0d0"
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${APIkey}`)
	.then(res => res.json())
	.then(data => {
        feelsLike.textContent = parseInt(data.main.feels_like)
        temp.textContent = parseInt(data.main.temp)
        condition.textContent = data.weather[0].description
	})
	.catch(err => {
		console.log(`error ${err}`)
	});
}