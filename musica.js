const botaoPlayPause = window.document.getElementById('play-pause'); /*chamei play pra dentro do javascript com nome botaoplay*/
const proxima = window.document.getElementById('proximo')
const voltar = window.document.getElementById('anterior')
const nomeMusica = window.document.getElementById('musica')

const audioMusica = window.document.getElementById('audio-musica') /* chamei a tag audio pelo id*/


const numeroMusicas = 3;
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
    botaoPlayPause.classList.remove('bi-pause-circle-fill') 

    botaoPlayPause.classList.add('bi-play-circle-fill')
    
}

/* vamos fazer uma outra funcao, pra quer fazr outra ffuncao, pra ela agregar a funcao de pausar e de tocar*/
function tocarOuPausar(){
    if(taTocando === 0){ /* caso ele nao esteja tocando ela vai tocar*/
        tocarFaixa(); /* chamando a funcao de tocar*/
        /* vamos atualizar com um valor de 1 , pra ele ficar com 1 na variavel que esta rolando no momento*/
        taTocando = 1 /* atualizei*/
    }else { /* se nao vou colocar ela pra pausar,se no caso ela estiver tocando*/
        pausarFaixa(); /* funcao de pausar*/
        
        taTocando = 0;
    }
    /* com iss dentro dessa funcao consigo pausar e da play*/
} 
/* vamos criar uma função proxima faixa*/
function trocarNomeFaixa(){
    var musica1 = "fazendo falta/Dor desse amor"
    var musica2 = 'Patio do posto'
    var musica3 = 'rancorosa'
    var NomeMusical = [ ,musica1,musica2,musica3]
    nomeMusica.innerHTML = `${NomeMusical[musicaAtual]}`
}
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
    trocarNomeFaixa()
    
}
function voltarFaixar(){
    if(musicaAtual === 1 ){
        musicaAtual = numeroMusicas
    }else(
        musicaAtual--
    )
    audioMusica.src =`./books/${musicaAtual}.mp3` 
    tocarFaixa();
    taTocando = 0
    trocarNomeFaixa()
}

botaoPlayPause.addEventListener('click', tocarOuPausar)/* forma feita pelo addEventListener*/
/* fiz a chamada do audio pelo botao play com addeventlister*/
/* adicionei a funcao aqui dentro desse evento de tocar ou pausar , eu nao passei as outra funções, somente a de tocarOuPausar*/

proxima.addEventListener('click',proximaFaixa)

voltar.addEventListener('click',voltarFaixar)