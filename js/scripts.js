let employees = [];
const body = document.querySelector("body");
const outerCardDiv = document.querySelector(".gallery");

/**
 * Fetches data from api
 * @param {api} url
 */
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

/**
 * Generates employee info on card div
 * @param {json object} data
 */
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

//Displays modal when card is selected
container.addEventListener("click", (event) => {
  //Select the employee that was clicked
  const employeeCard = event.target.closest(".card");
  if (!employeeCard) return;

  const employeeNameElement = employeeCard.querySelector(
    ".card-info-container .card-name"
  ).textContent;

  const employee = employees.find(
    (employee) =>
      `${employee.name.first} ${employee.name.last}` === employeeNameElement
  );
  displayEmployeesModal(employee);
});

function formatDate(employee){
  const employeeDOBJSON = employee.dob.date.toString();
  const employeeDOB = new Date(employeeDOBJSON);
  return formattedDate = `${
    employeeDOB.getMonth() + 1
  }\/${employeeDOB.getDate()}\/${employeeDOB.getFullYear()}`;
}
function formatNumber(employee){
  console.log('entering formatNumber');
   // const employeePhoneNumber = employee.phone.split('');
    //if (employeePhoneNumber.map(number => {if (typeof(number) === 'number'
   const excludeNumbers = employee.phone.replace(/\D/g, '');
   const formmattedPhoneNumber = excludeNumbers.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
   return formmattedPhoneNumber
}


/**
 * Provides innerHTML for the modal div
 * @param {json object} employee = json object
 */
function displayEmployeesModal(employee) {
  //Used date method to format date
 


  const modalHTML = `
    <div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="${employee.picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${employee.name.first}</h3>
            <p class="modal-text">${employee.email}</p>
            <p class="modal-text cap">${employee.location.city}</p>
            <hr>
            <p class="modal-text">${formatNumber(employee)}</p>
            <p class="modal-text">${employee.location.street.number}, ${employee.location.street.name}, ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}</p>
            <p class="modal-text">Birthday: ${formatDate(employee)} </p>
            
        </div>
    </div>`;
  //<p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
  body.insertAdjacentHTML("beforeend", modalHTML);

  const modalButton = document.querySelector("#modal-close-btn");

  //Removes created modal when close button is clicked
  modalButton.addEventListener("click", (event) => {
    console.log(event.target);
    console.log("this button is being clicked");
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.remove();
  });
}
