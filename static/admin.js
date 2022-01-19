function init() {
    document.getElementById('studenti').addEventListener('click', e => {
        e.preventDefault();
        console.log("u funkciji");

        window.location.href = 'http://127.0.0.1:8000/studenti';
                
            
    });
}