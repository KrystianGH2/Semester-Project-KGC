const cards = document.querySelector(".cards");

const url = "https://funny-recipe.flywheelsites.com/wp-json/wp/v2/posts?_embed";

const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("keyup", (event) => {
  let searchValue = event.target.value;
  fetchData(searchValue);
});

async function fetchData(searchValue = "") {
  try {
    const data = await fetch(url);
    const response = await data.json();

    const filteredResponse = response.filter(function (response) {
      return response.title.rendered.includes(searchValue);
    });
    cards.innerHTML = "";
    for (let i = 0; i < filteredResponse.length; i++) {
      const featuredImage =
        filteredResponse[i]._embedded["wp:featuredmedia"][0].media_details.sizes
          .medium.source_url;

      cards.innerHTML += `
      <div class = "card-content"> 
      <a href="details.html?id=${filteredResponse[i].id}" ><div class="content"> <img class ="cardImg"src="${featuredImage}" style=""></div> </a>
      <div class="title"><a href="details.html?id=${filteredResponse[i].id}"> ${filteredResponse[i].title.rendered}</a>  </div>
      </div>          
      
      `;
    }
  } catch (err) {
    if(err) 
      return cards.innerHTML = `
      <div>There has been an error processing</div>`
    
  }
}

fetchData();


