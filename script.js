const displayScreen = document.querySelector(".screen");
const form = document.querySelector(".form-tag");
const fullName = document.querySelector("#fullName");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const gender = document.querySelector("#gender");
const dateOfBirth = document.querySelector("#date");
const country = document.querySelector("#country");
const phoneNumber = document.querySelector("#phone");
const password = document.querySelector("#password");
const submitBTN = document.querySelector("#submit");
const tableContainer = document.getElementById("table-container");

const namePrt = document.querySelector(".nameprt");
const agePrt = document.querySelector(".ageprt");
const emailPrt = document.querySelector(".emailprt");
const genderPrt = document.querySelector(".genderprt");
const datePrt = document.querySelector(".dateprt");
const statePrt = document.querySelector(".stateprt");
const phonePrt = document.querySelector(".phoneprt");

const detailsSort = (z) => {
  z.preventDefault();
  const userDetails = {
    userName: fullName.value,
    age: age.value,
    email: email.value,
    gender: gender.value,
    date: dateOfBirth.value,
    state: country.value,
    phone: phoneNumber.value,
  };

  namePrt.innerHTML = userDetails.userName;
  agePrt.textContent = userDetails.age;
  emailPrt.innerHTML = userDetails.email;
  genderPrt.innerHTML = userDetails.gender;
  datePrt.innerHTML = userDetails.date;
  statePrt.innerHTML = userDetails.state;
  phonePrt.innerHTML = userDetails.phone;
  return userDetails;
  // saveData();
};

submitBTN.addEventListener("click", detailsSort);

// const container = document.querySelector(".container");
// function saveData() {
//   localStorage.setItem("data", tableContainer.innerHTML);
// }
// function showData() {
//   tableContainer.innerHTML = localStorage.getItem("data");
// }
// showData();
