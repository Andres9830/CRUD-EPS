let clientesDefault = [{ 

    tIdentidad: "",
    numero: 1 , 
    nombre: '', 
    ciudad: "",
    direccion: "",
    cede: "",
    correo: "",
    barrio:''
},

{  tIdentidad: "",
numero: 1 , 
nombre: '', 
ciudad: "",
direccion: "",
cede: "",
correo: "",
barrio:''
},
{  tIdentidad: "",
numero: 1 , 
nombre: '', 
ciudad: "",
direccion: "",
cede: "",
correo: "",
barrio: ''
}];


setLocalClientes = (numero) => {
    localStorage.setItem("Clientes", JSON.stringify(numero));
}

//Create
crearCliente = () => {
    let tIdentidad = document.getElementById('tIdentidad').value
    let numero = parseInt(document.getElementById('numero').value);
    let nombre = document.getElementById('nombre').value;
    let ciudad = document.getElementById('ciudad').value;
    let direccion = document.getElementById('direccion').value;
    let cede = document.getElementById('cede').value;
    let correo = document.getElementById('correo').value;
    let barrio = document.getElementById('barrio').value;

    if (tIdentidad != "" && numero != "" && nombre != "" && ciudad != "" && direccion != ""&& cede != "" && correo != "" && barrio != "" ) {
        let cliente = { tIdentidad, numero, nombre, ciudad, direccion, cede, correo, barrio };

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
    var ciudad = document.getElementById('ciudad').value;
    var direccion = document.getElementById('direccion').value;
    var cede = document.getElementById('cede').value;
    var correo = document.getElementById('correo').value;
    var barrio = document.getElementById('barrio').value;

    let index = buscarCliente(parseInt(numero));
    if (index != -1) {  
        clientes[index].tIdentidad = tIdentidad;
        clientes[index].numero = numero;
        clientes[index].nombre = nombre;
        clientes[index].ciudad = ciudad;
        clientes[index].direccion = direccion;
        clientes[index].cede = cede;
        clientes[index].correo = correo;
        clientes[index].barrio = barrio;
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
    var numero = parseInt(document.getElementById('numero'))
    var nombre = document.getElementById('nombre')
    var ciudad = document.getElementById('ciudad')
    var direccion = document.getElementById('direccion')
    var cede = document.getElementById('cede')
    var correo = document.getElementById('correo')
    var barrio = parseInt(document.getElementById('barrio'))

    let index = buscarCliente(parseInt(numero));
    if (index != -1) {
        tIdentidad.value = clientes[index].tIdentidad;
        nombre.value = clientes[index].nombre;
        ciudad.value = clientes[index].ciudad;
        direccion.value = clientes[index].direccion;
        cede.value = clientes[index].cede;
        correo.value = clientes[index].correo;
        barrio.value = clientes[index].barrio;
       
        
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
        delete clientes[index].nombre;
        delete clientes[index].ciudad;
        delete clientes[index].direccion;
        delete clientes[index].cede;
        delete clientes[index].correo;
        delete clientes[index].barrio;
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
            var ciudad = clientes[i].ciudad;
            var direccion = clientes[i].direccion;
            var cede = clientes[i].cede;
            var correo = clientes[i].correo;
            var barrio = clientes[i].barrio;

            if (numero != undefined) {
                document.getElementById("tbodyCliente").innerHTML +=
                    `<tr>
                    <td>${tIdentidad}</td>
                    <td>${numero}</td>
                    <td>${nombre}</td>
                    <td>${ciudad}</td>
                    <td>${direccion}</td>
                    <td>${cede}</td>
                    <td>${correo}</td>
                    <td>${barrio}</td>
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
