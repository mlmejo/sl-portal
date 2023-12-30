document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch("http://127.0.0.1:8000/api-token-auth/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }).then(function (response) {
            if (! response.ok) {
                alert('Invalid username or password. Please try again.');
                return;
            }

            return response.json();
        }).then(function (data) {
            localStorage.setItem('token', data.token);
            window.location.href = "index.html";
        });

        // if (username === 'admin' && password === '123') {
        //     window.location.href = 'index.html';
        // } else {
        //     alert('Invalid username or password. Please try again.');
        // }
    });
});
