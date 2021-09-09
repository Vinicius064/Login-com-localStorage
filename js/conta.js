let usuario = localStorage.getItem('usuário')
for(let i = 1; i <= localStorage.getItem('id'); i++){
	let x = JSON.parse(localStorage.getItem(i))
	console.log(usuario, x)
	if(usuario == x[1]){
		document.getElementById('nome').innerHTML = `Seja bem vindo(a) ${x[0]}`
	}
}