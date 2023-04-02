function dataLoad() {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data.tools))
}

function displayData(values) {
    const container = document.getElementById('api-container');
    values.slice(0, 6).forEach(value => {
        console.log(value)

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
        <div class="card h-100 shadow border-0 p-3">
          <img src="${value.image}" class="card-img-top rounded-3" alt="..." width="437px" height="300px">
          <div class="card-body">
            <h5 class="card-title">Features</h5>
            <p class="card-text">
            <ol class="px-3 m-0">
            <li class="${value.features[0] === undefined ? 'd-none' : ''}">${value.features[0]}</li>
            <li class="${value.features[1] === undefined ? 'd-none' : ''}">${value.features[1]}</li>
            <li class="${value.features[2] === undefined ? 'd-none' : ''}">${value.features[2]}</li>
            <li class="${value.features[3] === undefined ? 'd-none' : ''}">${value.features[3]}</li>
            <li class="${value.features[4] === undefined ? 'd-none' : ''}">${value.features[4]}</li>
            </ol>
            </p>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center bg-white">
            <div>
                <h5 class="card-title">${value.name}</h5>
                <div class="d-flex align-items-center gap-2">
                    <i class="fa-regular fa-calendar-days"></i>
                    <p class="m-0 p-0">${value.published_in}</p>
                </div>
            </div>
            <span>
                <button class="btn bg-danger-subtle rounded-circle"><i class="fa-solid fa-arrow-right text-danger" onclick="fetchToolsDetail('${value.id}')" data-bs-toggle="modal"
                data-bs-target="#exampleModal"></i></button>
            </span>
          </div>
        </div>
      </div>
        `
        container.appendChild(div);
    })

}
dataLoad();