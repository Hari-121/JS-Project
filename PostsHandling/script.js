let posts = JSON.parse(localStorage.getItem("posts")) || [
    { id: 1, title: "Daily JS News" },
    { id: 3, title: "Daily Python News" },
    { id: 4, title: "Daily AI News" },
    { id: 5, title: "Daily HTML News" }
];

window.onload = function () {
   
var tableBody = document.querySelector("#iposts tbody");

var row = "";
posts.forEach(post=>{
 row += `<tr> 
            <td> ${post.id}</td>
            <td> ${post.title}</td>
            </tr>`;

});
tableBody.innerHTML =row

}

function addPost(event) {
    event.preventDefault();
    
    let id = document.getElementById("postId").value;
    let title = document.getElementById("postTitle").value;


    posts.push({ id: Number(id), title: title });
    localStorage.setItem("posts", JSON.stringify(posts));

    window.location.href = "index.html";
}

