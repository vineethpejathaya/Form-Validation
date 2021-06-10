
 const form = document.querySelector('form');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const password = document.getElementById('password');
 const confirmPassword =document.getElementById('confirm-password');

const inputArray =[username,email,password,confirmPassword]
 form.addEventListener('submit', function(e)
 {
    e.preventDefault();
    checkForMandatory(inputArray) ;
    checkForMinMax(username, 3,9);
    checkForMinMax(password,3,8);
    emailValidator(email);
    passwordValidator(password,confirmPassword);
 })


 const checkForMandatory = function(inputArray) 
 {
      inputArray.forEach((input)=> 
      {
          if (input.value ==='')
          {
              showError(input,`${message(input)} is required`);
          }
          else
          {
              showSuccess(input);
          }
      });
 };


const message= function(input){

 const error = input.id.replace(/-p/,' P');
 return error.charAt(0).toUpperCase() + error.slice(1);
};

const showError = function (input,text)
{    
     const formControl =input.parentElement;
     formControl.className ='form-control error';
     formControl.querySelector('small').innerHTML = text;
};

const showSuccess = function (input)
{
   const formControl =input.parentElement;
   formControl.className = 'form-control success';
};

const emailValidator = function validateEmail(input) 
{
    if(input.value !=='')
    {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if( re.test(String(input.value).toLowerCase()))
        {
            showSuccess(input);
        }
        else
        {
            showError(input, 'Email id is not valid');
        }
    }
};


 const checkForMinMax= function(input, min, max)
 {         
     if(input.value !=='')
     {
          if(input.value.length < min)
          {   
              showError(input, `${message(input)} length should be between ${min} and ${max}`);
              
          }
          else if(input.value.length > max)
          {
              showError(input, `${message(input)} length should be between ${min} and ${max}`);
          }
     }
 };

 const passwordValidator = function (input1, input2)
 {
        if(input1.value !=='' && input2.value !=='')
        {
            if(input1.value === input2.value)
            {
                showSuccess(input2);
                showSuccess(input1);
            }
            else
            {
                showError(input2, "password and confirm password didn't match");
            }
          
        }
 };
