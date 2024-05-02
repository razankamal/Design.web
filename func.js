function registration() { 


    var FristName= document.getElementById("FristnName").value; 
    var LastName= document.getElementById("LastName").value;  
    var email= document.getElementById("email").value; 
    var password= document.getElementById("password").value;    
     
   
    var letters = /^[A-Za-z]+$/; 
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    var password_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/; 

    if(FristName=='') 
    { 
        alert('Please enter your name'); 
    } 
    else if(!letters.test(name)) 
    { 
        alert('Name field required only alphabet characters'); 
    } 
    else if(LastName==''){
        alert('Please enter your name'); 
    } 
    else if(!letters.test(name)) 
    { 
        alert('Name field required only alphabet characters');
    }
    else if(email=='') 
    { 
        alert('Please enter your user email id'); 
    } 
    else if (!filter.test(email)) 
    { 
        alert('Invalid email'); 
    } 


    else if(password=='') 
    { 
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');    } 
    
       
    else if(document.getElementById("password").value.length < 9) 
    { 
        alert ('Password minimum length is 9'); 
    } 
    else if(document.getElementById("password").value.length > 18) 
    { 
        alert ('Password max length is 18'); 
}   
    else 
    {                          
        alert('Thank You for Login & You are Redirecting to Campuslife Website'); 
            
           window.location = "welcome.html";  
    } 
}
const FristName = document.getElementById('FristName')
const LastName = document.getElementById('LastName')
const email = document.getElementById('Email')
const Password = document.getElementById('password')
const errorElement = document.getElementById('error')

form.addEventListener('Register',(e)=>{
    let messages =[]
    if(FristName.value ===''||FristName.value ==null){
        messages.push('FristName is required')
    }
    if (Password.value.length >=6){
       messages.push('password must be longer than 6 characters')        
        
    }
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText = message.join(' , ')    
}

})
