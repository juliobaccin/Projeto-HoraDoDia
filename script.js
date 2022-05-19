function carregar() {
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var roda = window.document.getElementById('rodape')
    var cabe = window.document.getElementById('cabeça')
    var data = new Date()
    var hora = data.getHours()
    var minut = data.getMinutes()
    msg.innerHTML = `Agora é ${hora}:${minut} minutos`
    if (hora >= 0 && hora < 12) {
        msg2.innerHTML = 'Bom dia!'
        img.src = 'imagens/manha.png'
        document.body.style.background = '#fceabb'

    } else if (hora >= 12 && hora < 18) {
        msg2.innerHTML = 'Boa tarde!'
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#5F6364'
        roda.style.color = '#748BAA'
        cabe.style.color = '#748BAA'
        msg2.addEventListener('mouseover', function(){
            msg2.style.background = '#8094AC'
        })
        msg2.addEventListener('mouseout', function(){
            msg2.style.background = 'white'
        })
        
    } else {
        msg2.innerHTML = 'Boa noite!'
        img.src = 'imagens/noite.png'
        document.body.style.background = '#1E72B0'
        roda.style.color = '#08426C'
        cabe.style.color = '#08426C'
        msg2.addEventListener('mouseover', function(){
            msg2.style.background ='#005786ab' 
        })
        msg2.addEventListener('mouseout', function(){
            msg2.style.background = 'white'
        })
    }
}