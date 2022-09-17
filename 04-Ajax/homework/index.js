$('#boton').click(()=>{
    $.get('http://localhost:5000/amigos', data => {
        let ul = document.querySelector('#lista');
        ul.innerHTML = ''
        data.forEach(element => {
            let li = document.createElement('li')
            li.innerHTML = element.name + " X"
            ul.appendChild(li)
        });
        $('img').remove()
    })
})

$('#search').click(()=>{
    let inpt = document.querySelector('#input');
    let id = inpt.value
    $.get(`http://localhost:5000/amigos/${id}`, data => {
        let span = document.querySelector('#amigo');
        span.innerHTML = data.name
    })
})

$('#delete').click(()=>{
    let inpt = document.querySelector('#inputDelete');
    let id = inpt.value
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success: function (result) {
            let span = document.querySelector('#success');
            span.innerHTML = 'Tu amigo fue borrado con exito'
        }
    })
})