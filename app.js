const toggle = document.querySelector(".toggle")
const menuDashboard = document.querySelector(".menu-dashboard")
const iconoMenu = toggle.querySelector("i")
const enlacesMenu = document.querySelectorAll(".enlace")



toggle.addEventListener("click", () => {
    menuDashboard.classList.toggle("open")

    if(iconoMenu.classList.contains("bx-menu")){
        iconoMenu.classList.replace("bx-menu", "bx-x")
    }else {
        iconoMenu.classList.replace("bx-x", "bx-menu")
    }
})

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menuDashboard.classList.add("open")
        iconoMenu.classList.replace("bx-menu", "bx-x")
    })
})

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2f88e9bdc2mshd15e433348e2758p102d05jsnc5b2471cd33c',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};



async function getCountry(){
    let contenedor = document.querySelector('.contenedor');
    let IngresaPais = document.querySelector('.pais').value;

    const response = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${IngresaPais}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    console.log(JSON.stringify(response))
    let divMostrar = document.createElement('div');
    contenedor.appendChild(divMostrar);
    divMostrar.innerHTML = `<h1 class='PRUEBA1'>${IngresaPais}</h1>
    <div'>
    <p>${response[0].population}</p>
    </div>`;
    //PROBLEMAS CON EL CONSUMO DE LA API
}


