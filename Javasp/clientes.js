

let clientesDefault = [{ 

    tIdentidad: "",
    numero: 1113434532 , 
    nombre: 'Sanchez', 
    fechaHora: "",
    especialista: "" },

{   tIdentidad: "",
    numero: 1113434532 , 
    nombre: 'Sanchez', 
    fechaHora: "",
    especialista: "" },

{   tIdentidad: "",
    numero: 1113434532 , 
    nombre: 'Sanchez', 
    fechaHora: "",
    especialista: "" }];


setLocalClientes = (nombre) => {
    localStorage.setItem("Clientes", JSON.stringify(nombre));
}

//Create
crearCliente = () => {
    let tIdentidad = document.getElementById('tIdentidad').value
    let numero = parseInt(document.getElementById('numero').value);
    let paciente = document.getElementById('nombre').value;
    let fechaHora = document.getElementById('fechaHora').value;
    let especialista = document.getElementById('especialista').value;

    if (tIdentidad != "" && numero != "" && paciente != "" && fechaHora != "" && especialista != "") {
        let cliente = { tIdentidad, numero, paciente, fechaHora, especialista };

        if (localStorage.getItem("Clientes") === null) {
            let clientes = clientesDefault;
            clientes.push(cliente);
            setLocalClientes(clientes);

        } else {
            let clientes = JSON.parse(localStorage.getItem("Clientes"));
            clientes.push(cliente);
            setLocalClientes(clientes);

        }
        document.getElementById("formClientes").reset();
        swal("Listo!", "Cliente creado con exito!", "success");

    }
    else {
        document.getElementById("formClientes").reset();
        swal("Upps!", "Ingresa todos los campos !!", "error");
    }
    listarClientes();

}

//Update
function editarClienteById() {
    var tIdentidad = document.getElementById('tIdentidad').value;
    var numero = document.getElementById('numero').value;
    var nombre = document.getElementById('nombre').value;
    var fechaHora = document.getElementById('fechaHora').value;
    var especialista = document.getElementById('especialista').value;

    let index = buscarCliente(parseInt(numero));
    if (index != -1) {  
        clientes[index].tIdentidad = tIdentidad;
        clientes[index].nombre = nombre;
        clientes[index].fechaHora = fechaHora;
        clientes[index].especialista = especialista;
        setLocalClientes(clientes);
        listarClientes();
        limpiarClientes();
        swal("Listo!", "Registro ha sido actualizado !", "success");
    }
    else
    swal("Upps!", "Cliente no encontrado !", "error");
}


// Read
function mostrarClienteId() {
    var tIdentidad = document.getElementById('tIdentidad').value;
    var numero = document.getElementById('numero');
    var nombre = document.getElementById('nombre');
    var fechaHora = document.getElementById('fechaHora');
    var especialista = document.getElementById('especialista');

    let index = buscarCliente(parseInt(numero));
    if (index != -1) {
        tIdentidad.value = clientes[index].tIdentidad;
        nombre.value = clientes[index].nombre;
        fechaHora.value = clientes[index].fechaHora;
        especialista.value = clientes[index].especialista;
        
    }
    else {
        limpiarClientes();
        swal("Upps!", "Cliente no encontrado !", "error");
    }
}


//Delete
function eliminarClienteById() {
    var numero = document.getElementById('numero').value;

    let index = buscarCliente(parseInt(numero));
    if (index != -1) {
        delete clientes[index].tIdentidad;
        delete clientes[index].numero;
        delete clientes[index].paciente;
        delete clientes[index].fechaHora;
        delete clientes[index].especialista;
        setLocalClientes(clientes);
        listarClientes();
        limpiarClientes();
        swal("Listo!", "Cliente numero:" + numero + " eliminado con exito !", "success");
    }
    else {
        limpiarClientes();
        swal("Upps!", "Cliente no encontrado !", "error");
    }
}


// Print
function listarClientes() {
    let clientes = JSON.parse(localStorage.getItem("Clientes"));

    if (clientes != null) {
        document.getElementById("tbodyCliente").innerHTML = "";

        for (let i = 0; i < clientes.length; i++) {
            var tIdentidad = clientes[i].tIdentidad;
            var numero = clientes[i].numero;
            var nombre = clientes[i].nombre;
            var fechaHora = clientes[i].fechaHora;
            var especialista = clientes[i].especialista;

            if (numero != undefined) {
                document.getElementById("tbodyCliente").innerHTML +=
                    `<tr>
                    <td>${tIdentidad}</td>
                    <td>${numero}</td>
                    <td>${nombre}</td>
                    <td>${fechaHora}</td>
                    <td>${especialista}</td>
                </tr>`
            }
        }
    }
}
//<Search
function buscarCliente(pid) {
    clientes = JSON.parse(localStorage.getItem("Clientes"));
    index = clientes.findIndex(obj => obj.numero == pid);
    console.log("index:" + index)
    return index;
    /*
        var id = pid;
        index=-1;
        for (let item in clientes) {
            if (id == clientes[item].id) {
                index=id;
            }
        }
        console.log("index:"+index)
        return index;
    */
}

//Limpiar
function limpiarClientes() {
    document.getElementById("formClientes").reset();
}

/* ################################################ * */
/* ################################################ * */


loadApp = () => {
    listarClientes();
}


//swal("Listo!", "Cliente creado con exito!", "success");
//swal("Upps!", "Cliente creado con exito!", "error");
// "warning", "error", "success" and "info".

