function connectUser() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var connectedUser = email + ":" + password
    var users = ["test@test.com:test", "admin@admin.com:admin","user@email.com:1234"]
    if (users.includes(connectedUser)) {
        window.location.replace("https://github.com/Rahmani-Abdelhak/Application_Gestion_Elecreseaux")
    } else {
        var alertDiv = document.querySelector('.alert-danger');
        alertDiv.style.display = 'block';
    }   
}
