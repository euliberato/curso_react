import { useState } from 'react'

function Form() {

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuario: ${name}, foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor='name'>Nome: </label>
                    <input type='text' id='name' name='name' placeholder='Digite seu nome' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='password'>Senha: </label> 
                    <input type='password' id='password' name='password' placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <button type='submit'>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default Form