
var x = 10;


function prepareBinding() {    
    //$( "#test_button" ).bind( "click", function() { my_alert('text 2');});
    $( "#saveUser" ).click(function() { 
        saveStudent();
        console.log('Student was added');
        
    });

    $( "#delete_button" ).click(function() { 
        console.log('llamando delete');
        var id = $(this).data('cedula');
        deleteStudent(id);
    });
    var nombre = 'Bladimir';
    var cedula = '20569805'

    var table = "<table> <tr><th>Name</th><th>Cedula</th></tr><tr><td>" +
                nombre+"</td><td>"+cedula+"</td></tr></table>";
    $('#table_wrapper').html(table);

}

function saveStudent() {
    // obtener datos del form
    //var name = document.getElementById('first_name').value,
     //   last_name = document.getElementById('last_name').value;

    // jquery way:
    var name = $('#nameUser').val(),
        last_name = $('#lastNameUser').val();
        id = $('#idUser').val();
        rol = $('#rolUser').val();
        email = $('emailUser').val();


    // crear objeto estudiante
    var user = { "name": name, "last_name": last_name, "id":id,"rol":rol, "email":email };
    
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