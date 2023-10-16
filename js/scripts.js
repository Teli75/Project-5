//Get and display 12 random users
//With the information provided from The Random User Generator API, send a single request to the API, and use the response data
//to display 12 users, along with some basic information for each:
//Image
//First and Last Name
//Email
//City or location
//Refer to the mockups and the comments in the index.html file for an example of what info should be displayed on the page and
// how it should be styled.
const outerCardDiv = document.querySelector(".gallery");
//let employees;

async function getUsers(url) {
  try{
  fetch(url)
    .then(response => response.json())
    .then(data => data.results.forEach(generateCard));
} catch (error){
    console.log(error);
}
}

function generateCard(data) {
    console.log(data);
 const html = `
 <div class="card">
 <div class="card-img-container">
  <img class="card-img" src=${data.picture.large} alt="profile picture">
 </div>
 <div class="card-info-container">
 <h3 id="name" class="card-name cap">${data.name.first} ${data.name.last}</h3>
  <p class="card-text">${data.email}</p>
 <p class="card-text cap">${data.location.city}, ${data.location.state}</p>
 </div>
 </div>`;
outerCardDiv.insertAdjacentHTML("beforeend", html);
}

getUsers("https://randomuser.me/api/?results=12");

//======================================================================
const container = document.querySelector('.gallery');

container.addEventListener('click', (event) => {
    //Select the employee that was clicked
    const employeeCard = event.target.closest('.card');
    if(!employeeCard) return;

    
    const employeeName = container.document.querySelector('.card-info-container .card-name')

    console.log(employeeName);
    
});



