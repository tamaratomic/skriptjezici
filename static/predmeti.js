function init() {

    console.log('u inituuuu');

    fetch('http://localhost:8001/admin/predmet')
    .then( res => res.json() )
    .then( data => {
        const lst = document.getElementById('predmeti');
        lst.innerHTML = "";
        lst.innerHTML += `<tr><th> ID </th> <th> Naziv </th> <th> Broj ESP poena </th> <th> Opis </th> <th> Prosecna ocena </th></tr>`;
        data.forEach( el => {     
             lst.innerHTML += `<tr> <td> ${el.id} </td> <td> ${el.naaziv} </td> <td> ${el.brojESPPoena} </td> <td> ${el.opis} </td> <td> ${el.prosecnaOcena} </td></tr>`;
        });
    });

    document.getElementById('id').addEventListener('input', e =>{
        fetch('http://localhost:9000/predmeti/' + document.getElementById('id').value)
        .then( res => res.json() )
        .then( book => {
            document.getElementById('bName').value = book.name;
            document.getElementById('bAuthor').value = book.author;
            document.getElementById('bDescription').value = book.description;
            document.getElementById('uname').value = book.userId;
        });
    });

}