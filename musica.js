const botaoPlayPause = window.document.getElementById('play-pause'); /*chamei play pra dentro do javascript com nome botaoplay*/
const proxima = window.document.getElementById('proximo') // cahmada do botao proximo
const voltar = window.document.getElementById('anterior') // chamando o botao anterior
const nomeMusica = window.document.getElementById('musica') // chamando os nomes das musicas 
const imagen = window.document.getElementById('photo') // chamado as fotos
const corpo = window.document.getElementById('corpo')
const audioMusica = window.document.getElementById('audio-musica') /* chamei a tag audio pelo id*/


const numeroMusicas = 3; /* quantidade de musicas */
/*vamos fazer assim para a musica tocando 1 ,caso nao 0*/
let taTocando = 0;

let musicaAtual = 1;/* por que criamos isso , pq nossa musica começa pela 1*/
/* criando um funcao pra tocar a musicas do  meu app de musica web*/
function tocarFaixa(){ /* criei uma funcao tocarfaixa*/

    audioMusica.play() /* aqui to pegando minha tag audio e mandando ela dar play*/
    /* agora vamos colocar o bota de pause quando tiver tocando a musica ,para quando eu quiser pausar volrar pra o botao de play*/
    /* como eu faço pra acessar as clases pra trocar o que tem dentro ,usa o ClassList*/
    /* funcao claaslist remove , vai remover o que tem dentro
    add vai adicioanr outra class que tem dentro*/
    botaoPlayPause.classList.remove/* nao vem com o primeiro bi 'bi bi-sem esse primeiro bi*/('bi-play-circle-fill') /* removendo */
    botaoPlayPause.classList.add('bi-pause-circle-fill')/* adicionado*/
}
/* vou criar uma outra funcao para pausar a musica */
function pausarFaixa(){ /* funcao de pause*/
    audioMusica.pause(); /* mandando a musica pausar*/
    /* aqui vai ser a mesma coisa do primeiro ,so que vai colcoar em botao de play quano estiver parado*/
    botaoPlayPause.classList.remove('bi-pause-circle-fill') /* remove a tecla de pause */

    botaoPlayPause.classList.add('bi-play-circle-fill') /* colcoar a tecla play*/
    
}

/* vamos fazer uma outra funcao, pra quer fazr outra ffuncao, pra ela agregar a funcao de pausar e de tocar*/
function tocarOuPausar(){
    if(taTocando === 0){ /* caso ele nao esteja tocando ela vai tocar*/
        tocarFaixa(); /* chamando a funcao de tocar*/
        /* vamos atualizar com um valor de 1 , pra ele ficar com 1 na variavel que esta rolando no momento*/
        taTocando = 1 /* atualizei*/
    }else { /* se nao vou colocar ela pra pausar,se no caso ela estiver tocando*/
        pausarFaixa(); /* funcao de pausar*/
        
        taTocando = 0;/* colando pra zero ,pos nao esta tocando*/
    }
    /* com iss dentro dessa funcao consigo pausar e da play*/
} 
/* criando uma funcao para troca o nome das musica*/
function trocarNomeFaixa(){ /* criando uma funcao para troca o nome assim que trocar de faixa*/
/* primeiro criando um array para fazer a contagem */
    /*coloquei em um object o name(nome da musica) e o imagem(as imagens da musica)*/
    var musica1 ={ //musica 1 nome e imagem
        name:"Tô Fazendo falta/Dor desse amor" ,
        imagem: src = 'images/Fazendo-falta.jpg' /* criei essa tag var imagem pra passar uma src */,
        background: backgroundImage = 'url(images/Fazendo-falta.jpg)' 
    } 
    var musica2 ={ // mesmo procedimento do primeiro
        name:'Patio do posto',
        imagem: src = 'images/patio-posto.jpg',
        background : backgroundImage = 'url(images/patio-posto.jpg)'
    } 
    var musica3 ={ //mesmo do primeiro
        name:'Rancorosa',
        imagem: src = 'images/rancorosa.jpg',
        background : backgroundImage = 'url(images/rancorosa.jpg)'
    } 
    // dei uma virgula a mais pq nao contamos zero nesse 
    var NomeMusical = [ ,musica1.name,musica2.name,musica3.name] //coloquei os nome das musicas dentro do array
    var Photo = [,musica1.imagem,musica2.imagem,musica3.imagem] // as fotos dentro de array tambem
    var degrade = [,musica1.background,musica2.background,musica3.background]
    nomeMusica.innerHTML = `${NomeMusical[musicaAtual]}` /* aqui so faço trocar dos nomes*/
    imagen.src = Photo[musicaAtual] // fiz um id na imagem do html e chamei pra e depois fiz as trocas da imagens com musical atual
    corpo.style.transition = 'all 1s ease'
    corpo.style.backgroundImage = degrade[musicaAtual]
    
    
    
}

/* vamos criar uma função proxima faixa*/
function proximaFaixa(){
    /*se por acaso eu estive no ultimo capilo quero que volte pro primeiro*/
    if(musicaAtual === numeroMusicas){ /* vou fazer ele voltar pro capitulo 1*/
        musicaAtual = 1/* caso esta na ultima faixa*/
    }else {
    musicaAtual++ /* seu to na musica 1 , caso queria passar pra proxima faixa */ 
    /*musica ++ vai colocando sempre mais 1 nela*/
    }
    audioMusica.src = `./books/${musicaAtual}.mp3` /* aqui é chamando as faixas pra acessar*/
    
    /* quando eu avançar  a musica ja quero que toque*/
    tocarFaixa();
    taTocando = 1; /* colocar o 1 pq mesmo que ele ja esta com 1 ela vai substituir pleo 1 tambem*/
    /* pq quando estive tocando precisa esta no 1 */
    trocarNomeFaixa(); /* adicionei aqui pra fazer a chamda das troca de faixa*/
    
}
function voltarFaixar(){ /* mesmo exemplo de cima , so fiz fazer alguns exemplos*/
    if(musicaAtual === 1 ){
        musicaAtual = numeroMusicas
    }else(
        musicaAtual--
    )
    audioMusica.src =`./books/${musicaAtual}.mp3` 
    tocarFaixa(); /* aqui tambem super importante colcoar o taTocando =0 pra ficar sicronizado com o tocaou pausar*/
    taTocando = 0
    trocarNomeFaixa() /* adicionei aqui pra fazer a chamda das troca de faixa*/
}

botaoPlayPause.addEventListener('click', tocarOuPausar)/* forma feita pelo addEventListener*/
/* fiz a chamada do audio pelo botao play com addeventlister*/
/* adicionei a funcao aqui dentro desse evento de tocar ou pausar , eu nao passei as outra funções, somente a de tocarOuPausar*/

proxima.addEventListener('click',proximaFaixa) /* chamanda o click da funcao de avançar proxima musica */

voltar.addEventListener('click',voltarFaixar) /* chamda a funcao de troca ora tras*/