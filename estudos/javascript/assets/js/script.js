async function clicou() {

    fetch(`http://viacep.com.br/ws/61920540/json/`)
        .then((response) => {return response.json()})
        .then((json) => {
            alert(`${json.logradouro}, ${json.bairro} - ${json.localidade} - ${json.uf}`);
        })
        .catch(() => {
            alert("Deu erro na requisição");
        });
}


document.querySelector("#botao").addEventListener('click', clicou);