function sendMail() {
    var parms = {
        name: document.getElementById("lname").value,
        email: document.getElementById("lemail").value,
        message: document.getElementById("lmessage").value,
    };
    emailjs.send("service_fbsszrs", "template_90e89xm", parms)
        .then((res) => {
            document.getElementById("lname").value = "";
            document.getElementById("lemail").value = "";
            document.getElementById("lmessage").value = "";
            console.log(res);
            alert("your message sent successfully");
        })
        .catch((err) => console.log(err));

    event.preventDefault()
}