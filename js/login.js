document.getElementById('btn-login').addEventListener('click',function(event){
   event.preventDefault(); // vejal
   
   const phoneNumber=document.getElementById('phone-number').value;
//    console.log(phoneNumber);
    const pinNumber=document.getElementById('pin-number').value;
    // demo
    if(phoneNumber==='01703035415' && pinNumber==='98765')
    {
     alert('congratulation!!!');
     window.location.href='homepage.html'
    }
    else{
        alert('Wrong phone nymber or pin.Please enter correct phone and pin!!!');
    }
})