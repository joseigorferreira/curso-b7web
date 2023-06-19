function clicou() {

    let cep = document.querySelector('#cep').value;

    console.log(cep);

    fetch(`http://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {return response.json()})
        .then((json) => {
            alert(`${json.logradouro}, ${json.bairro} - ${json.localidade} - ${json.uf}`);
        })
}


document.querySelector("#botao").addEventListener('click', clicou);