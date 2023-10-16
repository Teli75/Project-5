//Get and display 12 random users
//With the information provided from The Random User Generator API, send a single request to the API, and use the response data
//to display 12 users, along with some basic information for each:
//Image
//First and Last Name
//Email
//City or location
//Refer to the mockups and the comments in the index.html file for an example of what info should be displayed on the page and
// how it should be styled.
let employees = [];
const modalContainer = document.querySelector('.modal-container');
const outerCardDiv = document.querySelector(".gallery");
//let employees;

async function getUsers(url) {
  try {
    fetch(url);
    const response = await fetch(url);
    const data = await response.json();
    employees = data.results;
    employees.forEach(generateCard);
    //.then((response) => response.json())
    //data.results.forEach(generateCard))
  } catch (error) {
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
const container = document.querySelector(".gallery");

container.addEventListener("click", (event) => {
  //Select the employee that was clicked
  const employeeCard = event.target.closest(".card");
  if (!employeeCard) return;

  const employeeNameElement = employeeCard.querySelector(
    ".card-info-container .card-name"
  ).textContent;

  console.log(employeeNameElement);

  const employee = employees.find(
    (employee) =>
      `${employee.name.first} ${employee.name.last}` === employeeNameElement
  );

  displayEmployeesModal(employee);

});

  function displayEmployeesModal(employee){
    console.log(employee);
    const modalHTML =`
    <div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="${employee.picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${employee.name.first}</h3>
            <p class="modal-text">${employee.email}</p>
            <p class="modal-text cap">${employee.location.city}</p>
            <hr>
            <p class="modal-text">(555) 555-5555</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div>`;
    modalContainer.insertAdjacentHTML( "beforeend", modalHTML);
    
  }

