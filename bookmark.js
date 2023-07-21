var bookMarksData = JSON.parse(localStorage.getItem('bList')) || [];

console.log(bookMarksData);

function loadBookMarks(){

    document.querySelector('#tBody').innerHTML = "";

   bookMarksData.forEach(bookMarks => {
    
    var tr = document.createElement('tr');

    var td1 = document.createElement('td');
    td1.innerText = bookMarks.name;

    var td2 = document.createElement('td');
    td2.innerText = bookMarks.email;
    
    var td3 = document.createElement('td');
    td3.innerText = bookMarks.role;
    
    var td4 = document.createElement('td');
    td4.innerText = bookMarks.salary;

    var td5 = document.createElement('td')
    td5.innerText = "Remove";
    td5.style.color = 'blue';
    td5.style.cursor = 'pointer';
    td5.addEventListener('click', function(e, i){

        bookMarksData.splice(i, 1);
        localStorage.setItem('bList', JSON.stringify(bookMarksData));
        alert('BookMark Removed successfully');
        window.location.reload();

    })

    tr.append(td1, td2, td3, td4, td5);

    document.querySelector('tBody').append(tr);

   });
}

window.addEventListener('load', function(){

    loadBookMarks();

});