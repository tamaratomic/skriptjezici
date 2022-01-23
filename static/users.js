function init() {


    fetch('http://localhost:8001/admin/user')
    .then( res => res.json() )
    .then( data => {
        const lst = document.getElementById('users');
        lst.innerHTML = "";
        lst.innerHTML += `<tr><th> ID </th> <th> Username </th> <th> Email </th> <th> Sifra </th>
                             <th> Admin </th> <th> Moderator </th></tr>`;
        data.forEach( el => { 

    
             lst.innerHTML += `<tr> <td> ${el.id} </td> <td> ${el.username} </td> <td> ${el.email} </td>
                                 <td> ${el.sifra} </td> <td> ${el.admin} </td> <td> ${el.moderator} </td></tr>`;
           
        });
    });
}