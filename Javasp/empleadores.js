

let clientesDefault = [{ 

    tIdentidad: "",
    numero: 1 , 
    empresa: '', 
    ciudad: "",
    direccion: "",
    regimen: "",
    correo: "",
    codigo:1
},

{  tIdentidad: "",
numero: 1 , 
empresa: '', 
ciudad: "",
direccion: "",
regimen: "",
correo: "",
codigo:1
},
{  tIdentidad: "",
numero: 1 , 
empresa: '', 
ciudad: "",
direccion: "",
regimen: "",
correo: "",
codigo: 1
}];


setLocalClientes = (numero) => {
    localStorage.setItem("Clientes", JSON.stringify(numero));
}

//Create
crearCliente = () => {
    let tIdentidad = document.getElementById('tIdentidad').value
    let numero = parseInt(document.getElementById('numero').value);
    let empresa = document.getElementById('empresa').value;
    let ciudad = document.getElementById('ciudad').value;
    let direccion = document.getElementById('direccion').value;
    let regimen = document.getElementById('regimen').value;
    let correo = document.getElementById('correo').value;
    let codigo = document.getElementById('codigo').value;

    if (tIdentidad != "" && numero != "" && empresa != "" && ciudad != "" && direccion != ""&& regimen != "" && correo != "" && codigo != "" ) {
        let cliente = { tIdentidad, numero, empresa, ciudad, direccion, regimen, correo, codigo };

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
    var empresa = document.getElementById('empresa').value;
    var ciudad = document.getElementById('ciudad').value;
    var direccion = document.getElementById('direccion').value;
    var regimen = document.getElementById('regimen').value;
    var correo = document.getElementById('correo').value;
    var codigo = document.getElementById('codigo').value;

    let index = buscarCliente(parseInt(numero));
    if (index != -1) {  
        clientes[index].tIdentidad = tIdentidad;
        clientes[index].numero = numero;
        clientes[index].empresa = empresa;
        clientes[index].ciudad = ciudad;
        clientes[index].direccion = direccion;
        clientes[index].regimen = regimen;
        clientes[index].correo = correo;
        clientes[index].codigo = codigo;
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
    var empresa = document.getElementById('empresa')
    var ciudad = document.getElementById('ciudad')
    var direccion = document.getElementById('direccion')
    var regimen = document.getElementById('regimen')
    var correo = document.getElementById('correo')
    var codigo = parseInt(document.getElementById('codigo'))

    let index = buscarCliente(parseInt(numero));
    if (index != -1) {
        tIdentidad.value = clientes[index].tIdentidad;
        empresa.value = clientes[index].nombre;
        ciudad.value = clientes[index].ciudad;
        direccion.value = clientes[index].direccion;
        regimen.value = clientes[index].regimen;
        correo.value = clientes[index].correo;
        codigo.value = clientes[index].codigo;
       
        
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
        delete clientes[index].empresa;
        delete clientes[index].ciudad;
        delete clientes[index].direccion;
        delete clientes[index].regimen;
        delete clientes[index].correo;
        delete clientes[index].codigo;
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
            var empresa = clientes[i].empresa;
            var ciudad = clientes[i].ciudad;
            var direccion = clientes[i].direccion;
            var regimen = clientes[i].regimen;
            var correo = clientes[i].correo;
            var codigo = clientes[i].codigo;

            if (numero != undefined) {
                document.getElementById("tbodyCliente").innerHTML +=
                    `<tr>
                    <td>${tIdentidad}</td>
                    <td>${numero}</td>
                    <td>${empresa}</td>
                    <td>${ciudad}</td>
                    <td>${direccion}</td>
                    <td>${regimen}</td>
                    <td>${correo}</td>
                    <td>${codigo}</td>
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

