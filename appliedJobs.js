
var appliedJobs = JSON.parse(localStorage.getItem('Applications'));

var bookMarksList = JSON.parse(localStorage.getItem('bList')) || [] ;

function table(appliedJobs){

    document.querySelector('#tBody').innerHTML = "";

    appliedJobs.forEach(Jobs => {

    var tr = document.createElement('tr');

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');

    td1.innerText = Jobs.name;
    td2.innerText = Jobs.email;
    td3.innerText = Jobs.role;
    td4.innerText = Jobs.salary;
    td5.innerText = 'BookMark';

    tr.append(td1, td2, td3, td4, td5);
    document.querySelector('#tBody').append(tr);

    td5.style.color = 'blue';
    td5.style.cursor = 'pointer';

    td5.addEventListener('click', function(){

        bookMarksList.push(Jobs);
        localStorage.setItem('bList', JSON.stringify(bookMarksList));
        alert('BookMark added successfully');

    })
    
    });
}

window.addEventListener('load', function(){
    table(appliedJobs);
});

function filterSalary(){

    var applicants = JSON.parse(localStorage.getItem('Applications'));
    var filterValue;

        if(document.querySelector('#bySalary').value === 'none')

        {
            filterValue = applicants;
        }

        if(document.querySelector('#bySalary').value === 'lessthen50000'){

            filterValue = applicants.filter(function(applicants){

                if(applicants.salary<=50000){
                    return true;
                }
                else{
                    return false;
                }
            });

        }

        if(document.querySelector('#bySalary').value === 'lessthen70000'){

            filterValue = applicants.filter(function(applicants){

                if(applicants.salary<70000){
                    return true;
                }
                else{
                    return false;
                }
            });

        }

    table(filterValue);

}

function filterName(){

    var order = document.querySelector('#byName').value;

        if(order === 'asc'){

            appliedJobs.sort(function(a, b){

                if(a.name>b.name){
                    return 1;
                }
                else if (a.name<b.name){
                    return -1;
                }
                else{
                    return 0;
                }
            });
        }

        if(order === 'desc'){

            appliedJobs.sort(function(a, b){

                if(a.name<b.name){
                    return 1;
                }
                else if (a.name>b.name){
                    return -1;
                }
                else{
                    return 0;
                }
            });
        }

        table(appliedJobs);
    }


function filterRole(){

    var selectedRole = document.querySelector('#byRole').value;

    console.log(selectedRole);

    var applicants = JSON.parse(localStorage.getItem('Applications'));

    console.log(applicants);

    var result = applicants.filter(function(a) {
        return a.role === selectedRole;
    });

    table(result);
}



