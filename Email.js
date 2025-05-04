function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "vishu45@gmail.com",
        Password: "xyz@6789",
        To: 'abc@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiery",
        Body: "Name" + document.getElementById("name").value + "<br> Email" + document.getElementById("email").value + "<br> Phone Number" + document.getElementById("phone").value + "<br> Message" + document.getElementById("message").value
    }).then(
        message => alert("Message sent Succesfully")
    );
}