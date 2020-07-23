const pontosArea = document.getElementById('pontos');
let pontos = 0;
pontosArea.innerHTML = `Pontos: ${pontos}`;
function addBalao() {
	const personagem = document.createElement("img");
	const imgs = Math.floor(Math.random() * 7);
	const imgX = Math.floor(Math.random() * 400);
	const imgY = Math.floor(Math.random() * 500);
	personagem.setAttribute("src", `img/${imgs}.png`);
	personagem.setAttribute("onclick", `estourar(this)`);
	personagem.setAttribute("style", `top:${imgY}px;left:${imgX}px;`);
	document.body.appendChild(personagem);
}
function estourar(elemento) {
	pontosArea.innerHTML = `Pontos: ${pontos+=1}`;
	document.body.removeChild(elemento);
}
function resetar() {
	setInterval(addBalao, 1000);
}