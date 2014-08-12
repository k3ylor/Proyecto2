


function saveStudent() {
    // obtener datos del form
    //var name = document.getElementById('first_name').value,
     //   last_name = document.getElementById('last_name').value;

    // jquery way:
    var name = $('#nameUser').val(),
        last_name = $('#lastNameUser').val();


    // crear objeto estudiante
    var user = { "name": name, "last_name": last_name };
    
    // leer los estudiantes de localstorage
    var users = JSON.parse(localStorage.getItem('Users'));
    if (users === null) {
        users = [];
    }

    // agregar el estudiante
    users.push(user);

    // volver guardar en localstoraage
    localStorage.setItem('users',JSON.stringify(users));
}