// POPUP HANDLERS
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const signInPopup = document.getElementById('signInPopup');
const signUpPopup = document.getElementById('signUpPopup');
const closeSignIn = document.getElementById('closeSignIn');
const closeSignUp = document.getElementById('closeSignUp');

if(signInBtn){
    signInBtn.addEventListener('click', ()=> signInPopup.style.display='flex');
}
if(signUpBtn){
    signUpBtn.addEventListener('click', ()=> signUpPopup.style.display='flex');
}
closeSignIn.addEventListener('click', ()=> signInPopup.style.display='none');
closeSignUp.addEventListener('click', ()=> signUpPopup.style.display='none');

// Close popup when clicking outside
window.addEventListener('click', (e)=>{
    if(e.target===signInPopup) signInPopup.style.display='none';
    if(e.target===signUpPopup) signUpPopup.style.display='none';
});
