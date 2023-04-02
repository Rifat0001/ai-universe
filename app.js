// start loader
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove("d-none")
    }
    else {
        loaderSection.classList.add("d-none")
    }
}
// call spinner
toggleSpinner(true);

// Fetching tools onload
const fetchTools = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then((res) => res.json())
        .then((data) => {
            showTools(data.data)
        })
}

// Display Tools
const showTools = (data) => {
    const toolsContainer = document.getElementById("tools-container");
    const sortCard = data.tools;
    sortCard.slice(0, 6).forEach((singleTools) => {
        toolsContainer.innerHTML += `
          <div class="col">
          <div class="card h-100 shadow border-0 p-3">
            <img src="${singleTools.image}" class="card-img-top rounded-3" alt="..." width="437px" height="300px">
            <div class="card-body">
              <h5 class="card-title">Features</h5>
              <p class="card-text">
                  <ol class="px-3 m-0">
                  <li class="${singleTools.features[0] === undefined ? 'd-none' : ''}">${singleTools.features[0]}</li>
                  <li class="${singleTools.features[1] === undefined ? 'd-none' : ''}">${singleTools.features[1]}</li>
                  <li class="${singleTools.features[2] === undefined ? 'd-none' : ''}">${singleTools.features[2]}</li>
                  <li class="${singleTools.features[3] === undefined ? 'd-none' : ''}">${singleTools.features[3]}</li>
                  <li class="${singleTools.features[4] === undefined ? 'd-none' : ''}">${singleTools.features[4]}</li>
                  </ol>
              </p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center bg-white">
              <div>
                  <h5 class="card-title">${singleTools.name}</h5>
                  <div class="d-flex align-items-center gap-2">
                      <i class="fa-regular fa-calendar-days"></i>
                      <p class="m-0 p-0">${singleTools.published_in}</p>
                  </div>
              </div>
              <span>
                  <button class="btn bg-danger-subtle rounded-circle"><i class="fa-solid fa-arrow-right text-danger" onclick="fetchToolsDetail('${singleTools.id}')" data-bs-toggle="modal"
                  data-bs-target="#exampleModal"></i></button>
              </span>
            </div>
          </div>
        </div>
          `
    })


    const seeMore = document.getElementById('see-more');
    if (data.tools.length < 6) {

        seeMore.classList.add("d-none");
    }
    else {
        seeMore.classList.remove("d-none");
    }
    // stop loader
    toggleSpinner(false);
};

// loading sort tools
const loadingSortTools = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then((res) => res.json())
        .then((data) => {
            showSortTools(data.data)
        })
}

// sort by date show tools
const showSortTools = (data) => {
    const toolsContainer = document.getElementById("tools-container");
    toolsContainer.innerHTML = '';
    const sortCard = data.tools;
    customSort = (a, b) => {
        const dataA = new Date(a.published_in);
        // console.log(dataA)
        const dataB = new Date(b.published_in);
        // console.log(dataB)
        if (dataA > dataB) {
            return 1;
        }
        else if (dataA < dataB) {
            return -1;
        }
        else {
            return 0;
        }
    }
    sortCard.slice(0, 6).sort(customSort).forEach((singleTools) => {
        toolsContainer.innerHTML += `
          <div class="col">
          <div class="card h-100 shadow border-0 p-3">
            <img src="${singleTools.image}" class="card-img-top rounded-3" alt="..." width="437px" height="300px">
            <div class="card-body">
              <h5 class="card-title">Features</h5>
              <p class="card-text">
                  <ol class="px-3 m-0">
                  <li class="${singleTools.features[0] === undefined ? 'd-none' : ''}">${singleTools.features[0]}</li>
                  <li class="${singleTools.features[1] === undefined ? 'd-none' : ''}">${singleTools.features[1]}</li>
                  <li class="${singleTools.features[2] === undefined ? 'd-none' : ''}">${singleTools.features[2]}</li>
                  <li class="${singleTools.features[3] === undefined ? 'd-none' : ''}">${singleTools.features[3]}</li>
                  <li class="${singleTools.features[4] === undefined ? 'd-none' : ''}">${singleTools.features[4]}</li>
                  </ol>
              </p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center bg-white">
              <div>
                  <h5 class="card-title">${singleTools.name}</h5>
                  <div class="d-flex align-items-center gap-2">
                      <i class="fa-regular fa-calendar-days"></i>
                      <p class="m-0 p-0">${singleTools.published_in}</p>
                  </div>
              </div>
              <span>
                  <button class="btn bg-danger-subtle rounded-circle"><i class="fa-solid fa-arrow-right text-danger" onclick="fetchToolsDetail('${singleTools.id}')" data-bs-toggle="modal"
                  data-bs-target="#exampleModal"></i></button>
              </span>
            </div>
          </div>
        </div>
          `
    })
    const seeMore = document.getElementById('see-more');
    if (data.tools.length < 6) {

        seeMore.classList.add("d-none");
    }
    else {
        seeMore.classList.remove("d-none");
    }
    // stop loader
    toggleSpinner(false);
};

// loading more tools
const loadMoreTools = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then((res) => res.json())
        .then((data) => {
            // fetchData = data.data;
            showMoreTools(data.data)
        })
}

// displaying more tools
const showMoreTools = (data) => {
    // capture categories container to append all the category links
    const toolsContainer = document.getElementById("tools-container");
    const seeMore = document.getElementById('see-more');
    if (data.tools.length < 6) {

        seeMore.classList.remove("d-none");
    }
    else {
        seeMore.classList.add("d-none");
    }

    const sortCard = data.tools;
    customSort = (a, b) => {
        const dataA = new Date(a.published_in);
        // console.log(dataA)
        const dataB = new Date(b.published_in);
        // console.log(dataB)
        if (dataA > dataB) {
            return 1;
        }
        else if (dataA < dataB) {
            return -1;
        }
        else {
            return 0;
        }
    }
    sortCard.slice(6, 12).sort(customSort).forEach((singleTools) => {
        toolsContainer.innerHTML += `
              <div class="col">
              <div class="card h-100 shadow border-0 p-3">
                <img src="${singleTools.image}" class="card-img-top rounded-3" alt="..." width="437px" height="300px">
                <div class="card-body">
                  <h5 class="card-title">Features</h5>
                  <p class="card-text">
                      <ol class="px-3 m-0">
                      <li class="${singleTools.features[0] === undefined ? 'd-none' : ''}">${singleTools.features[0]}</li>
                      <li class="${singleTools.features[1] === undefined ? 'd-none' : ''}">${singleTools.features[1]}</li>
                      <li class="${singleTools.features[2] === undefined ? 'd-none' : ''}">${singleTools.features[2]}</li>
                      <li class="${singleTools.features[3] === undefined ? 'd-none' : ''}">${singleTools.features[3]}</li>
                      <li class="${singleTools.features[4] === undefined ? 'd-none' : ''}">${singleTools.features[4]}</li>
                      </ol>
                  </p>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center bg-white">
                  <div>
                      <h5 class="card-title">${singleTools.name}</h5>
                      <div class="d-flex align-items-center gap-2">
                          <i class="fa-regular fa-calendar-days"></i>
                          <p class="m-0 p-0">${singleTools.published_in}</p>
                      </div>
                  </div>
                  <span>
                      <button class="btn bg-danger-subtle rounded-circle"><i class="fa-solid fa-arrow-right text-danger" onclick="fetchToolsDetail('${singleTools.id}')" data-bs-toggle="modal"
                      data-bs-target="#exampleModal"></i></button>
                  </span>
                </div>
              </div>
            </div>
              `
    })

};

// fetching tools detail
const fetchToolsDetail = (id) => {
    let url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => showToolsDetail(data.data));
};

// displaying tools detail
const showToolsDetail = (toolsDetail) => {
    document.getElementById("modal-body").innerHTML = `
      <div class="row row-cols-1 row-cols-md-2 g-4 align-items-center justify-content-center">
    <div class="col">
      <div class="card bg-danger-subtle border-3 border-danger h-100">
        <div class="card-body f-flex flex-column align-items-center p-4">
          <p class="card-text fw-bold">${toolsDetail.description}</p>
          <div class="d-flex gap-3 justify-content-between align-items-center flex-column flex-md-row">
              <div class="p-4 bg-white rounded text-center text-success fw-bold">
                  <span>${toolsDetail.pricing ? toolsDetail.pricing[0].price : "Free of cost/"}</span>
                  <span>${toolsDetail.pricing ? toolsDetail.pricing[0].plan : "Basic"}</span>
              </div>
              <div class="p-4 bg-white rounded text-center text-warning fw-bold">
                  <span>${toolsDetail.pricing ? toolsDetail.pricing[1].price : "Free of cost/"}</span>
                  <span>${toolsDetail.pricing ? toolsDetail.pricing[1].plan : "Pro"}</span>
              </div>
              <div class="p-4 bg-white rounded text-center text-danger fw-bold">
                  <span>${toolsDetail.pricing ? toolsDetail.pricing[2].price : "Free of cost/"}</span>
                  <span>${toolsDetail.pricing ? toolsDetail.pricing[2].plan : "Enterprise"}</span>
              </div>
          </div>
          <div class="d-flex justify-content-between gap-3 py-4">
              <div>
                  <h5>Features</h5>
                  <ul>
                      <li>${toolsDetail.features["1"].feature_name}</li>
                      <li>${toolsDetail.features["2"].feature_name}</li>
                      <li>${toolsDetail.features["3"].feature_name}</li>
                      <li class ="${toolsDetail.features["4"] ? '' : 'd-none'}">Machine learning</li>
                  </ul>
              </div>
              <div>
                  <h5>Integrations</h5>
                  <ul>
                    ${toolsDetail.integrations ? `<li>${toolsDetail.integrations && toolsDetail.integrations[0] ? toolsDetail.integrations[0] : ``}</li>
                    <li class="${toolsDetail.integrations && toolsDetail.integrations[1] === undefined ? 'd-none' : ''}">${toolsDetail.integrations && toolsDetail.integrations[1] ? toolsDetail.integrations[1] : ''}</li>
                    <li class="${toolsDetail.integrations && toolsDetail.integrations[2] === undefined ? 'd-none' : ''}">${toolsDetail.integrations && toolsDetail.integrations[2] ? toolsDetail.integrations[2] : ''}</li>
                    <li class="${toolsDetail.integrations && toolsDetail.integrations[3] === undefined ? 'd-none' : ''}">${toolsDetail.integrations && toolsDetail.integrations[3] ? toolsDetail.integrations[3] : ''}</li>
                    <li class="${toolsDetail.integrations && toolsDetail.integrations[4] === undefined ? 'd-none' : ''}">${toolsDetail.integrations && toolsDetail.integrations[4] ? toolsDetail.integrations[4] : ''}</li>` : 'No data Found'}
                  </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100 p-4 border-0 shadow">
        <div>
          <img src="${toolsDetail.image_link[0] ? toolsDetail.image_link[0] : "No Image Found"}" class="card-img-top" alt="...">
          <span class =" btn btn-danger position-absolute top-10 end-70 ${toolsDetail.accuracy.score === null ? 'd-none' : ''}">${(toolsDetail.accuracy.score * 100) + "% Accuracy"}</span>
        </div>
        <div class="card-body text-center">
          <h5 class="card-title">${toolsDetail.input_output_examples ? toolsDetail.input_output_examples[0].input : "Can you give any example?"}</h5>
          <p class="card-text">${toolsDetail.input_output_examples ? toolsDetail.input_output_examples[0].output : "No! Not Yet! Take a break!!!"}</p>
        </div>
      </div>
    </div>
  </div>
      `;
};

fetchTools();
