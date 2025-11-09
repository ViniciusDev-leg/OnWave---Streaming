function configFeed(){
    configLoad()

    configHamburguer()

    configHeader()

    configDestaque()
}

function configHamburguer(){
    document.querySelectorAll('#container-navegacao ul a').forEach(function(elemento){
        elemento.addEventListener('click', function(){
            document.getElementById('container-navegacao').classList.toggle('active');
            document.getElementById('div-hamburguer').classList.toggle('active');
            fecharMenu()
            document.querySelector('#cima').style.opacity = '0'
            document.querySelector('#meio').style.opacity = '0'
            document.querySelector('#baixo').style.opacity = '0'
        })
    })

    document.getElementById('div-hamburguer').addEventListener('click', function(){
        this.classList.toggle('active');

        if (this.classList.contains('active')) {
            abrirMenu()

            setTimeout(function(){
                document.getElementById('container-navegacao').classList.toggle('active');
            }, 500)

            setTimeout(function(){
                document.querySelector('#baixo').style.opacity = '1'
            }, 500) 
            
            setTimeout(function(){
                document.querySelector('#meio').style.opacity = '1'
            }, 600) 
            
            setTimeout(function(){
                document.querySelector('#cima').style.opacity = '1'
            }, 700) 
            
        } else {    
            document.getElementById('container-navegacao').classList.toggle('active');
            fecharMenu()
            document.querySelector('#cima').style.opacity = '0'
            document.querySelector('#meio').style.opacity = '0'
            document.querySelector('#baixo').style.opacity = '0'
        }
    })
}

function fecharMenu(){
    document.querySelector('header').style.height = '10vh'
    document.querySelector('header').style.backdropFilter = ''
    document.querySelector('header div').style.height = '6vh'
    document.body.style.overflow = ''
}

function abrirMenu(){
    document.querySelector('header').style.height = '100vh'
    document.querySelector('header').style.backdropFilter = 'blur(10px)'
    document.querySelector('header div').style.height = '40vh'
    document.body.style.overflow = 'hidden'
}

function configHeader(){
    let scrollAlterior = window.scrollY;

    window.addEventListener('scroll', function(){
        if (scrollAlterior < window.scrollY) {
            document.getElementsByTagName('header')[0].style.top = '-10vh';
        } else { 
            document.getElementsByTagName('header')[0].style.top = '0';
        } 
        scrollAlterior = window.scrollY;          
    })
}

function configDestaque(){
    let translateContainer = -100

    const direita = document.querySelector('[src="assets/elements/icon-carrossel-direita.svg"]')
    const esquerda = document.querySelector('[src="assets/elements/icon-carrossel-esquerda.svg"]')

    direita.addEventListener('click', function(){
        if (translateContainer > -200){
            translateContainer -= 100
            document.querySelector('#section-destaque ul').style.transform = `translateX(${translateContainer}vw)`
        }
    })

    esquerda.addEventListener('click', function(){
        if (translateContainer < 0){
            translateContainer += 100
            document.querySelector('#section-destaque ul').style.transform = `translateX(${translateContainer}vw)`
        }
    })

    setInterval(function(){
        if (translateContainer > -200){
            translateContainer -= 100
        } else {
            translateContainer = 0
        }
        document.querySelector('#section-destaque ul').style.transform = `translateX(${translateContainer}vw)`
    }, 5000)
}

function configLoad(){
    document.querySelector('body').style.overflow = 'hidden'
    setTimeout(function(){
        document.getElementById('load').style.left= '-100vw'
        document.getElementById('load-camada-1').style.left= '-100vw'
        setTimeout(function(){
            document.getElementById('load').style.display = 'none'
            document.getElementById('load-camada-1').style.display = 'none'
            document.querySelector('body').style.overflow = ''
        }, 1500)
    }, 3000)
    
}