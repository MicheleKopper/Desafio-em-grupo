function expandirImagem(elemento) {
    const classeExpandido = 'expandido';
    const atualmenteExpandido = document.querySelector(`.${classeExpandido}`);
    
    if (atualmenteExpandido && atualmenteExpandido !== elemento) {
        atualmenteExpandido.classList.remove(classeExpandido);
    }
    
    elemento.classList.toggle(classeExpandido);
}
