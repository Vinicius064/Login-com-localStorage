class Bd{
	constructor(nome,email,senha,confirmSenha){
		this.array = [nome,email,senha,confirmSenha]
		if(localStorage.getItem('id') == null) {
			localStorage.setItem('id', 0)
		}
	}
	gravar(){
		let id = parseInt(localStorage.getItem('id')) +1
		localStorage.setItem(id , JSON.stringify(this.array));
		localStorage.setItem('id', id)
	}
	validar(){
		for(let i = 1; i <= localStorage.getItem('id'); i++){
			let email = JSON.parse(localStorage.getItem(i))
			console.log(email[1])
			if(email[1] == this.array[1]){
				return false
			}
		}
		return true
	}
}
document.getElementById('cadastrar').addEventListener('click', ()=>{
	let nome = document.getElementById('nome').value
	let email = document.getElementById('email').value
	let senha = document.getElementById('senha').value
	let confirmSenha = document.getElementById('confirmSenha').value
	let bd = new Bd(nome,email,senha,confirmSenha)
	if(senha != confirmSenha){
		alert('Senhas diferentes')
	}
	else if (nome == '' || email == '' || senha =='' || confirmSenha =='') {
		alert('Todos os campos devem ser preenchidos')
	}
	else if(email.includes('@')){
		if(bd.validar() == true){
			bd.gravar()
			alert('Cadastro realizado com sucesso')
			window.location.href = 'index.html'
		}
		else{
			alert('Email já cadastrado')
		}
	}
	else{
		alert('Insira um Email válido')
	}
})