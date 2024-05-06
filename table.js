function validateForm() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let address = document.getElementById("address").value;
  let email = document.getElementById("email").value;
  if (name == "") {
    alert("name is required");
    return false;
  }
  if (age == "") {
    alert("age is required");
    return false;
  }
  if (address == "") {
    alert("address is required");
    return false;
  }
  if (email == "") {
    alert("email is required");
    return false;
  }
}

function showData() {
  let peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  let html = "";
  peopleList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.age + "</td>";
    html += "<td>" + element.address + "</td>";
    html += "<td>" + element.email + "</td>";
    html += "</tr>  ";
  });
  document.querySelector("#croudTable tbody").innerHTML = html;
}
document.onload = showData();
function AddData() {
  if (validateForm() == true) {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let peopleList;
    if (localStorage.getItem(peopleList) == null) {
      peopleList = [];
    } else {
      peopleList = JSON.parse(localStorage.getItem(peopleList));
    }
    peopleList.push({
      name: name,
      age: age,
      address: address,
      email: email,
    });
    peopleList.setItem("peopleList", JSON.stringify(peopleList));
    showData();
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
  }
}
