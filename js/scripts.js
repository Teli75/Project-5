//Get and display 12 random users
//With the information provided from The Random User Generator API, send a single request to the API, and use the response data
//to display 12 users, along with some basic information for each:
//Image
//First and Last Name
//Email
//City or location
//Refer to the mockups and the comments in the index.html file for an example of what info should be displayed on the page and
// how it should be styled.
const outerCardDiv = document.querySelector(".card");

async function getUsers(url) {
  //try{
  //const response = await fetch("https://randomuser.me/api/")
  fetch(url)
    .then(response => response.json())
    //.then(data = data.result)
    // .forEach(result => {
    //     console.log(result);
    // })
    .then(data => {
      data.results.forEach((result) => {
        console.log(result);
      });
    });
}

// .then(data => {
//     data.results.forEach(generateImage(data))
// });

//     if (!response.ok) throw new Error("Something went wrong");

//     const data = await response.json();
//     console.log(data);
//   } catch {

//}

// function generateCard(data) {
//   const html = `<div class="card-img-container">
//      <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
//                     </div>
//                     <div class="card-info-container">
//                         <h3 id="name" class="card-name cap">first last</h3>
//                         <p class="card-text">email</p>
//                         <p class="card-text cap">city, state</p>
//                     </div>
//                 </div> */

// getUsers("https://randomuser.me/api/?results=12");

// <img src='${data} alt>
// <p> First User </p>
// `;
// outerCardDiv.insertAdjacentHTML("beforeend", html);
// }
