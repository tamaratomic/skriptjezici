function init() {

    fetch('http://localhost:8001/admin/student')
    .then( res => res.json() )
    .then( data => {
        const lst = document.getElementById('studenti');
        lst.innerHTML = "";
        lst.innerHTML += `<tr><th> ID </th> <th> Ime </th> <th> Prezime </th>
                         <th> Email </th> <th>  Sifra </th>
                         <th> Indeks </th> <th> Smer </th> <th> Godina </th>
                         </tr>`;
        data.forEach( el => { 

    
             lst.innerHTML += `<tr> <td> ${el.id} </td> <td> ${el.ime} </td> <td> ${el.prezime} </td> 
                            <td> ${el.email} </td> <td> ${el.sifra} </td>
                            <td> ${el.indeks} </td> <td> ${el.smer} </td>
                            <td> ${el.godina} </td>
                            </tr>`;
           
        });
    });
}