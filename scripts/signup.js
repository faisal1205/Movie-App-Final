

document.querySelector("form").addEventListener("submit",signUp)

function signUp()
{
    event.preventDefault()
    console.log("in")

    let form = document.getElementById("sform")

    let Name=form.name.value
    let Mobile=form.mobile.value
    let Email=form.email.value
    let Password=form.password.value
    // console.log(Name,Email)
if(Name =="" || Mobile =="" ||  Email =="" || Password ==""  )
{
    alert("Please Fill All Details")
}
else{
    function sData(n,m,e,p)
    {
       this.name = n;
       this.mobile = m;
       this.email = e;
       this.password = p;

    }

    var U1 = new sData(Name,Mobile,Email,Password)
  
  
    localStorage.setItem("userInfo",JSON.stringify(U1))
  
}
document.querySelector("#name").value = ""   //does the work of reloading
document.querySelector("#mobile").value  = ""
document.querySelector("#email").value  = ""
document.querySelector("#password").value = ""
}