async function readPosts() {
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Carregando...'

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');

    let jsons = await response.json();

    let h1Posts = document.createElement('h1');

    postArea.innerHTML = ''

    for (let json of jsons){
        let postHtml = `<div><h1>${json.title}</h1>${json.body}</hr></div>`;
        postArea.innerHTML += postHtml;
    }

}

readPosts();