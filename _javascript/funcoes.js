function mudaFoto(foto) {
    document.getElementById("icone").src = foto;
}

function trocaFoto(foto) {
    let conteudo = document.getElementById('conteudo')
    
    if (conteudo.offsetWidth < 742){
        document.getElementById('mao').src = '_imagens/mao1.png'
    }
}