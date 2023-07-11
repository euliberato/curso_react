import Button from "./evento/Button"

function Evento(){

    function meuEvento() {
        console.log(`Ativado com sucesso.`)
    }

    function segundoEvento(){
        console.log('Segundo evento ativado.')
    }

    return (
        <div>
            <p>Clique para ativar um evento:</p>
            <Button event={meuEvento} text="Eu sou o texto do componente Button"/>
            <Button event={segundoEvento} text="Eu sou o texto do componente Button"/>
        </div>
    )
}

export default Evento