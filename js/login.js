function validar(email, senha){
	for(let i = 1; i<=localStorage.getItem('id'); i++){
		let x = JSON.parse(localStorage.getItem(i))
		if(x[1] == email && x[2] == senha){
			return true
		}
	}
	return false
}
document.getElementById('logar').addEventListener('click', ()=>{
	var email = document.getElementById('email').value
	var senha = document.getElementById('senha').value
	if(email == '' || senha == ''){
		alert('Preencha todos os campos')
	}
	else if(validar(email, senha) == true){
		localStorage.setItem('usuário', email)
		window.location.href = 'conta.html'
	}
	else{
		alert('Email ou senha inválidos')
	}
})