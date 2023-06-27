const valorInicial = document.getElementById('valorInicial')
const valorFinal = document.getElementById('valorFinal')
const btnCalcular = document.getElementById('btnCalcular')
const card = document.getElementsByClassName('card')[0]
const cardFooter = document.createElement('div')

btnCalcular.addEventListener('click', () => {
    const sub1 = Number(valorFinal.value) - Number(valorInicial.value)
    const sub2 = Number(sub1) / Number(valorInicial.value)

    const resultado = Number(sub2) * 100

    cardFooter.className = 'card-footer'

    if (valorInicial.value == '' || valorFinal.value == '') {
        cardFooter.innerHTML = 'Preencha todos os campos'
        return
    }
    cardFooter.innerHTML = `O aumento em porcentagem foi de ${resultado.toFixed(2)}`

    card.appendChild(cardFooter)
})