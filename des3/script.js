    const filme = {
        nome:'',
        ano: '',
        diretor: '',
        genero: '',
        personagem:{
            a1: '',
            p1: '',
            a2: '',
            p2: '',
        }

    }

function validar(){

    filme.nome = document.querySelector('#movie').value
    filme.ano = document.querySelector('#ano').value
    filme.diretor = document.querySelector('#dir').value
    filme.genero = document.querySelector('#gen').value
    
    filme.personagem.a1 = document.querySelector('#actor').value
    filme.personagem.p1 = document.querySelector('#paper').value
    filme.personagem.a2 = document.querySelector('#actor2').value
    filme.personagem.p2 = document.querySelector('#paper2').value

    res = document.querySelector('#res')
    res.innerHTML = `<hr>
                    <p>filme: ${filme.nome} 
                    <p>ano de lançamento: ${filme.ano} 
                    <p>diretor: ${filme.diretor} 
                    <p>genero: ${filme.genero}
                    <hr>`
    res.innerHTML += `${filme.personagem.a1} faz ${filme.personagem.p1}<p>
                    ${filme.personagem.a2} faz ${filme.personagem.p2}  `

}