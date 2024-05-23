const botaoPlayPause = window.document.getElementById('play-pause'); /*chamei play pra dentro do javascript com nome botaoplay*/
const audioMusica = window.document.getElementById('audio-musica') /* chamei a tag audio pelo id*/

const numeroMusicas = 3;
/*vamos fazer assim para a musica tocando 1 ,caso nao 0*/
let taTocando = 0;
/* criando um funcao pra tocar a musicas do  meu app de musica web*/
function tocarFaixa(){ /* criei uma funcao tocarfaixa*/

    audioMusica.play() /* aqui to pegando minha tag audio e mandando ela dar play*/
}
/* vou criar uma outra funcao para pausar a musica */
function pausarFaixa(){ /* funcao de pause*/
    audioMusica.pause() /* mandando a musica pausar*/

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
botaoPlayPause.addEventListener('click', tocarOuPausar)/* forma feita pelo addEventListener*/
/* fiz a chamada do audio pelo botao play com addeventlister*/
/* adicionei a funcao aqui dentro desse evento de tocar ou pausar , eu nao passei as outra funções, somente a de tocarOuPausar*/


