function configHome(){
    Array.from(document.getElementsByTagName("img"))
    .forEach(elemento => {
        elemento.addEventListener("click", function(){
            adicionarGradienteAoBackground(elemento)
            mostrarFormularioDeLogin(elemento)
        })
    })
}

function adicionarGradienteAoBackground(elemento){
    if(elemento.src.includes("tipo1.png")){
        document.body.style.background = 
            "linear-gradient(to left,rgb(135, 96, 130),rgb(0, 0, 0))"
    }else if(elemento.src.includes("tipo2.png")){
        document.body.style.background = 
            "linear-gradient(to left,rgb(130, 54, 54),rgb(0, 0, 0))"
    }else if(elemento.src.includes("tipo3.png")){
        document.body.style.background = 
            "linear-gradient(to left,rgb(106, 54, 130),rgb(0, 0, 0))"
    }else if(elemento.src.includes("tipo4.png")){
        document.body.style.background = 
            "linear-gradient(to left,rgb(130, 117, 54),rgb(0, 0, 0))"
    }else if(elemento.src.includes("tipo5.png")){
        document.body.style.background = 
            "linear-gradient(to left,rgb(63, 54, 130),rgb(0, 0, 0))"
    }
}

function mostrarFormularioDeLogin(elemento){
    document.getElementsByTagName("div")[0].className = "inativo"
    document.getElementsByTagName("form")[0].className = ""

    if(elemento.src.includes("tipo1.png")){
        document.getElementsByTagName("span")[0].innerText = "User 1"

    }else if(elemento.src.includes("tipo2.png")){
        document.getElementsByTagName("span")[0].innerText = "User 2"

    }else if(elemento.src.includes("tipo3.png")){
        document.getElementsByTagName("span")[0].innerText = "User 3"

    }else if(elemento.src.includes("tipo4.png")){
        document.getElementsByTagName("span")[0].innerText = "User 4"

    }else if(elemento.src.includes("tipo5.png")){
        document.getElementsByTagName("span")[0].innerText = "User 5"

    }

    configLogin();
}

function configLogin(){
    const inputs = document.getElementsByTagName('input')

    for(let i = 0; i < inputs.length; i++){
        inputs[i].addEventListener('input', function() {
            if (this.value.length >= 1 && inputs[i + 1]) {
                inputs[i + 1].focus();
            } else if (this.value.length >= 1 && !inputs[i + 1]){
                window.location.href = "paginas/feed.html"
            }
        });

        inputs[i].addEventListener('keydown', function(event) {
            if (event.key === 'Backspace' && this.value.length === 0 && inputs[i - 1]) {
                inputs[i - 1].focus();
            }
        });
    }
}