

function IsValid(){
    let email = document.querySelector(".emailForm")
    let usuario = email.value.substring(0, email.value.indexOf("@"))
    let dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length)
    let p = document.querySelector(".alert")
    if(
    (email != "") &&
    (usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1) 
    )
    {
        email.style.borderColor = "hsl(223, 100%, 88%)"
        p.style.display = "none"
        console.log(dominio)
    }
    else{
        email.style.borderColor = "hsl(354, 100%, 66%)"
        
        p.style.display = "block"
        
    }

}
function noSubmit(event){
    event.preventDefault()
    window.history.back()
    IsValid()
}