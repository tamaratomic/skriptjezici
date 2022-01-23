function init() {

    fetch('http://localhost:8001/admin/asistent')
    .then( res => res.json() )
    .then( data => {
        const lst = document.getElementById('asistenti');
        lst.innerHTML = "";
        lst.innerHTML += `<tr><th> ID </th> <th> Ime </th> <th> Prezime </th> <th> Prosecna ocena </th></tr>`;
        data.forEach( el => { 

    
             lst.innerHTML += `<tr> <td> ${el.id} </td> <td> ${el.ime} </td> <td> ${el.prezime} </td>  <td> ${el.prosecnaOcena} </td></tr>`;
           
        });
    });
}