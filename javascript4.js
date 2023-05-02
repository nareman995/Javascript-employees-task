var btn = document.getElementById('btn1');
btn.addEventListener('click', Read_data);
function Read_data()
{
    fetch('./emp_data.json')
    .then((response) => response.json())
    .then(data => {return data.employee.map(item => drp_list1.appendChild(new Option(item.firstName+' '+item.lastName, item.id)).cloneNode(true));})
        //console.log(`${data.employee[0].firstName} ${data.employee[0].lastName}`);
}

let selectedd = document.getElementById("drp_list1");
selectedd.onchange=function()
{
    document.getElementById("output").innerHTML = "";
    let selected_id=selectedd.value;
fetch('./emp_data.json').then(response => response.json())
.then(data => {
  output.innerHTML += data.employee[selected_id-1].firstName + "<br>";
  output.innerHTML += data.employee[selected_id-1].lastName + "<br>";
  output.innerHTML += data.employee[selected_id-1].job_position;
})
}


var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', clear_table);
function clear_table() 
{
        var i, L = drp_list1.options.length - 1;
        for(i = L; i >= 0; i--) {
           drp_list1.remove(i);
        }
        document.getElementById("output").innerHTML = "";   
}
