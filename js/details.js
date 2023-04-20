const myUrlValues = window.location.search;
const params = new URLSearchParams(myUrlValues);
const postId = params.get("id");
const cards = document.querySelector(".cards");

const url =
  "https://funny-recipe.flywheelsites.com/wp-json/wp/v2/posts/" + postId;

async function fetchPostDetails() {
  const cards = document.querySelector(".cards");

  try {
    const data = await fetch(url);
    const response = await data.json();
    // console.log(response);
    const loading = document.querySelector("#loading-wrapper");
    loading.innerHTML = "";

    cards.innerHTML += `
            <div class="title">${response.title.rendered}</div>
            <div class="content">${response.content.rendered}</div>

            <div class="postDate">Date created: <small>${response.date_gmt}</small></div>
            `;
  } catch (e) {
    console.log(e);
  }
}

fetchPostDetails();

const commentForm = document.querySelector("#commentForm");
const postButton = document.querySelector(".postButton");
const commentInput = document.querySelector("#commentInput");
const commentSection = document.querySelector("#commentSection");
const comments = [];

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const commentText = commentInput.value;
  commentInput.value = "";

  const newComment = {
    text: commentText,
    timeStamp: new Date().toISOString(),
  };

  comments.push(newComment);
  renderedComments();

  console.log(newComment);
});

const renderedComments = () => {
  commentSection.innerHTML = "";

  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    const postComments = document.createElement("div");
    postComments.innerHTML = `
    <p class="commentText">${comment.text}</p>
    <small class="commentTimeStamp">${comment.timeStamp}</small>
    `;
    commentSection.appendChild(postComments);
  }
  if(commentSection !== "") {
    commentSection.style.display = "flex";
  }
};
