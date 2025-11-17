function banana(){
    var a= 5
    document.getElementById("cars").innerHTML=a*a
}
var cheese=document.getElementById("sparks").innerHTML
            alert("The First Heading is "+cheese)
            function kkk(e){
             e.preventDefault()
             const Name=document.getElementById("Name").value
                const email=document.getElementById("Email").value
                const pass=document.getElementById("Password").value
                const message=document.getElementById("message")
                let msg=""
                if (Email==="") {
                    msg="enter the email"
                    message.style.color="red"
                } else if(Password===""){
                    msg="atleast 8 chars are required" 
                    message.style.color="red"

                }
                else if (Name==="") {
                    msg="Enter your name monkey"
                    message.style.color="red"
                    
                }
                else{
                    msg="login succesful"
                    message.style.color="green"
                }
                 message.innerHTML=msg
                
            }