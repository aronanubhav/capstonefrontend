function sentiment() {  
  alert(1);
  const scriptURL = "https://script.google.com/macros/s/AKfycbwsgByBBfnpbZUDAyhTn46Q6Ird-K98lQg7WgEHKqHKuwX3TKY/exec"	
  const form = document.forms['sentiment_analyser']
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    setInterval(function(){ d=new Date();console.log(d.getTime()); }, 5000000);
    alert ('Now you can add data to AWS database'); 
})
}

function commit_db(){
  const form = document.forms['sentiment_analyser']
const scriptURL = "https://script.google.com/macros/s/AKfycbwUqKeoBErbpt9--odqjQwEZPSGfnc6jf6dHVJ9_OquiUR-ZSk/exec";
form.addEventListener('submit', e => {
    e.preventDefault();  
    fetch(scriptURL);
})
    alert ('Data added to database'); 
}
