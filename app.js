function dataLoad() {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data.tools))
}

function displayData(values) {
    const container = document.getElementById('api-container');

    values.forEach(value => {
        console.log(value)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card">
                    <img src="${value.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                </div>
        `
        container.appendChild(div);
    })

}
dataLoad();