const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const remember = document.querySelector("input[type='checkbox']");

const message = document.createElement("p");

message.style.marginTop = "15px";
message.style.fontWeight = "bold";
message.style.textAlign = "center";

form.appendChild(message);


// LOAD SAVED EMAIL
window.onload = function () {

    const savedEmail = localStorage.getItem("savedEmail");

    if (savedEmail) {

        email.value = savedEmail;
        remember.checked = true;

    }

};


// FORM SUBMIT
form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (email.value === "" || password.value === "") {

        message.style.color = "yellow";
        message.innerText = "⚠ Please fill all fields";

    }

    else if (password.value.length < 6) {

        message.style.color = "orange";
        message.innerText = "🔒 Password must be at least 6 characters";

    }

    else {

        message.style.color = "lightgreen";
        message.innerText = "✅ Login Successful";


        // SAVE EMAIL
        if (remember.checked) {

            localStorage.setItem("savedEmail", email.value);

        }

        else {

            localStorage.removeItem("savedEmail");

        }


        setTimeout(() => {

            alert("Welcome to UIET Portal 🚀");

        }, 1000);

    }

});