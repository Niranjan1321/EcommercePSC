document.querySelector('#formBox').addEventListener('submit', myFunc);

var newApplications;

if(JSON.parse(localStorage.getItem('Applications')) === null){
newApplications = [];
}
else{
    newApplications = JSON.parse(localStorage.getItem('Applications'));
}
function myFunc(){

    event.preventDefault();
    console.log("I am here");
    var newData = {
        name : document.querySelector('#name').value,
        email : document.querySelector('#email').value,
        role : document.querySelector('#role').value,
        salary : document.querySelector('#salary').value
    }

    newApplications.push(newData);
    
    console.log(newApplications);

    localStorage.setItem('Applications', JSON.stringify(newApplications));

    alert('Application submitted Successfully');

}