function init() {

    console.log('log in')
    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();
        console.log("u funkciji");
        const data = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };

        console.log(data);
        if(data.email != "" && data.password != ""){
        fetch('http://127.0.0.1:9000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( el => {
                if (el.msg) {
                    console.log(el.msg);
                    alert(el.msg);
                } else {
                    console.log("u elsuu");
                    document.cookie = `token=${el.token};SameSite=Lax`;
                    window.location.href = 'http://127.0.0.1:8000/admin';
                }
            });
        }else{
            alert("Invalid credentials");
            return;
        }
    });

}