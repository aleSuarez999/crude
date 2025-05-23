document.addEventListener("DOMContentLoaded", () => {
    const series = localStorage.getItem("series");
    const seriesJSON = JSON.parse(series);

    const div = document.createElement("div")

    seriesJSON.forEach(({id, image, tittle, year, gender, director, country, sinopsis}) => {
        const card = `
            <div class="card mb-3">
                        <img src="${image}" alt="${title}">
                        <div class="pl-3">
                            <div>
                                <h3> ${title}(${year}): </h3>
                                <span>${gender} - "${director}" - ${country}</span>
                                <p>${sinopsis}</p>
                            </div>
                        </div>
                    </div>`

            div.innerHTML = div.innerHTML.concat(card)
       
    });
        const seriesContainer = document.getElementById("series_container")

        if (seriesContainer){
            seriesContainer.innerHTML = div;
        }

})