"use strict";
const fila = document.querySelector(".contenedor-carousel");
const peliculas = document.querySelectorAll(".pelicula");
const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");

flechaDerecha.addEventListener("click", () => {
	fila.scrollLeft += fila.offsetWidth;
	const indicadorActivo = document.querySelector(".indicadores .activo");
	if (indicadorActivo.nextSibling) {
		indicadorActivo.nextSibling.classList.add("activo");
		indicadorActivo.classList.remove("activo");
	}
});
flechaIzquierda.addEventListener("click", () => {
	fila.scrollLeft -= fila.offsetWidth;
	const indicadorActivo = document.querySelector(".indicadores .activo");
	if (indicadorActivo.previousSibling) {
		indicadorActivo.previousSibling.classList.add("activo");
		indicadorActivo.classList.remove("activo");
	}
});

const numeroPaginas = Math.ceil(peliculas.length / 5);
for (let index = 0; index < numeroPaginas; index++) {
	const indicador = document.createElement("button");
	document.querySelector(".indicadores").appendChild(indicador);
	if (index == 0) {
		indicador.classList.add("activo");
	}
	indicador.addEventListener("click", (e) => {
		fila.scrollLeft = index * fila.offsetWidth;
		document
			.querySelector(".indicadores .activo")
			.classList.remove("activo");
		e.target.classList.add("activo");
	});
}

peliculas.forEach((pelicula) => {
	pelicula.addEventListener("mouseenter", (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
			elemento.classList.add("hover");
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
});
// button:active {
//     outline: none;
//     border: none;
// }
