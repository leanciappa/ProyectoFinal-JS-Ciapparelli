gestiones = {};
let cont=0;

let btnAgregarGestion = document.getElementById("btn1")
btnAgregarGestion.addEventListener("click", imprimirGestionDOM)
function imprimirGestionDOM(){
    let cliente = document.getElementById("cliente").value;
    gestiones.cliente = cliente;
    let cuit = document.getElementById("cuit").value;
    gestiones.cuit = cuit;
    let certificado = document.getElementById("certificado").value;
    gestiones.certificado = certificado;
    let marca = document.getElementById("marca").value;
    gestiones.marca = marca;
    let modelo = document.getElementById("modelo").value;
    gestiones.modelo = modelo;
    let origen = document.getElementById("origen").value;
    gestiones.origen = origen;
    let descripcion = document.getElementById("descripcion").value;
    gestiones.descripcion = descripcion;
    let vencimiento = document.getElementById("vencimiento").value;
    gestiones.vencimiento = vencimiento;
    let gestion = document.getElementById("gestion").value;
    gestiones.gestion = gestion
    let estado = document.getElementById("estado").value;
    gestiones.estado = estado
    cont++;
    gestiones.id = cont;
    document.getElementById("tbody").innerHTML += `
        <tr id="${gestiones.id}">
        <td>Body 1</td>
        <td>Body 2</td>
        <td>Body 2</td>
        <td>Body 2</td>
        <td>Body 2</td>
        <td>Body 2</td>
        <td>Body 2</td>
        <td>Body 2</td>
        <td>Body 2</td>
        <td>Body 2</td>
        <td class="table-dark">
            <button type="button" class="btn btn-secondary m-2 p-1" id="btn2">Quitar</button>
        </td>
        </tr>`;
    
    console.log(gestiones);
}

let btnRemoverGestion = document.getElementById("btn2");
btnRemoverGestion.addEventListener("click", removerGestionDOM);


function removerGestionDOM (){
    let 
}