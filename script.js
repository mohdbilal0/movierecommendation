const m = new movies_graph();


m.add_movie("RRR", ["action", "drama", "history"]);
m.add_movie("KGF", ["action", "thriller"]);
m.add_movie("Pushpa", ["action", "drama"]);               
m.add_movie("Bahubali", ["action", "fantasy"]);           
m.add_movie("Drishyam", ["thriller", "crime"]);            
m.add_movie("Andhadhun", ["thriller", "mystery"]);        
m.add_movie("Uri", ["war", "drama"]);                     
m.add_movie("Tanhaji", ["history", "action"]);            
m.add_movie("War", ["action", "romance"]);               
m.add_movie("Kabir Singh", ["romance", "drama"]);        
m.add_movie("Jersey", ["sports", "family"]);             
m.add_movie("Chhichhore", ["comedy", "family"]);          
m.add_movie("3 Idiots", ["comedy", "friendship"]);       
m.add_movie("PK", ["comedy", "social"]);                  
m.add_movie("Raazi", ["war", "thriller"]);                
m.add_movie("Queen", ["comedy", "romance"]);              
m.add_movie("Padmaavat", ["history", "romance"]);        
m.add_movie("Bajrangi Bhaijaan", ["drama", "family"]);   
m.add_movie("Sanju", ["biography", "drama"]);             
m.add_movie("Vikram Vedha", ["thriller", "crime"]);       
m.add_movie("Sooryavanshi", ["action", "drama"]);    
m.add_movie("Sarkar", ["political", "crime"]);  



if (main && !document.getElementById("watched")) {

    m.movies.forEach((movie, i) => {
        main.innerHTML += `
        <div class="card">
            <h1>
                <span class="material-icons">movie</span>
                <span class="movie">${movie}</span>
            </h1>
            <p>${m.features[i].join(" · ")}</p>
        </div>
        `;
    });


    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            const movie = card.querySelector(".movie").innerText;
            localStorage.setItem("watched", movie);
            window.location.href = "recommend.html";
        });
    });
}


const watchedContainer = document.getElementById("watched");
const recommendContainer = document.getElementById("container");

if (watchedContainer && recommendContainer) {
    const watched = localStorage.getItem("watched");
    const index = m.movies.indexOf(watched);


    if (index !== -1) {
        watchedContainer.innerHTML += `
        <div class="card">
            <h1>
                <span class="material-icons">movie</span>
                <span>${m.movies[index]}</span>
            </h1>
            <p>${m.features[index].join(" · ")}</p>
        </div>
        `;
    }


    const recommendations = m.watch(watched);

    recommendations.forEach(movie => {
        const i = m.movies.indexOf(movie);
        recommendContainer.innerHTML += `
        <div class="card">
            <h1>
                <span class="material-icons">movie</span>
                <span>${movie}</span>
            </h1>
            <p>${m.features[i].join(" · ")}</p>
        </div>
        `;
    });
}

