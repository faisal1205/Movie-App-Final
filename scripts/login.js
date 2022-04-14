

document.querySelector("form").addEventListener("submit",loginFunction)

function loginFunction()
{
    event.preventDefault()
    console.log("in")

    let form = document.getElementById("form")
    let Email = form.email.value
    let Password = form.password.value

    var userInfo = JSON.parse(localStorage.getItem("userInfo"))
    console.log(userInfo.password)
    if(Email == userInfo.email && Password== userInfo.password)
    {
window.location.href="index.html"
    }
    else{
        alert("Invalid Credentials")
    }

    form.email.value = ""      //does the work of reloading
    Password = form.password.value = ""
}