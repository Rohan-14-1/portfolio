const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            successMsg.style.display = "block";
            form.reset();
        } else {
            alert("Failed to send message.");
        }
    })
    .catch(() => {
        alert("Error sending message.");
    });
});