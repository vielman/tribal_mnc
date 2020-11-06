var contenido = document.querySelector('#contenido');
function traer(){
    var search = document.getElementById("search").value;
    if (!search == ''){
        fetch('http://localhost:3000/search/'+search)
        .then(res => res.json())
        .then(data => {
            if (data.data.length === 0){
                alert('No se encontraron resultado para su búsqueda');
            } else {
                tabla(data);
            } 
        })   
    } else {
        alert('Debe ingresar un texto');
    }
}

function tabla(datos){
    console.log(datos);
    contenido.innerHTML = ``;
    var i = 1;
    for (let valor of datos.data){
        contenido.innerHTML += `
        <tr>
            <th scope="row">${i}</th>
            <td>${valor.type}</td>
            <td>${valor.artist}</td>
            <td>${valor.name}</td>
            <td><img src="${valor.description}" width="100" class="img-thumbnail"></td>
        </tr>
        `;
        i+=1
    }
    
}