

let funcionPredeterminada = () =>{
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        let valorPorHora = parseFloat(document.getElementById('valorPorHora').value)


        let interfazHoras = parseFloat(document.getElementById('interfazHoras').value)
        let testingHoras = parseFloat(document.getElementById('testingHoras').value)


        let resultado = (interfazHoras * valorPorHora) + (testingHoras * valorPorHora)

        document.getElementById('valorTotal').value = resultado
      })

}