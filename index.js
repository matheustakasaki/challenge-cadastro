//  Form
const form = document.querySelector('[data-form]')

console.log(form);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let nome = document.querySelector('[data-name').value
    let email = document.querySelector('[data-email').value
    let enderecoRua = document.querySelector('[data-endereco').value
    let enderecoNumero = document.querySelector('[data-numero]').value
    let endereco =  [
        enderecoRua,
        enderecoNumero
    ] ;


    let data = {
        nome,
        email,
        endereco: endereco
    }

    let convert = JSON.stringify(data)

    localStorage.setItem('lead', convert)
})


function cadastraProduto() {
    let productName = document.querySelector('[data-product-name').innerHTML
    let productValue = document.querySelector('[data-product-value').innerHTML

    let data = {
        productName,
        productValue
    }

    let convert = JSON.stringify(data)

    localStorage.setItem('produto', convert)
}