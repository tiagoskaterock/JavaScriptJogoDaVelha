let vez = 'o';
let jogando = true;

function atualizar_placar() {
    if (vez == 'o') {
        mostra_o_no_placar();
    }
    else {
        mostra_x_no_placar();
    } 
    troca_vez();
}

function mostra_x_no_placar() {
    mostra_de_volta_no_placar();
    $('.placar .img').attr('src', 'x.jpg');
}

function mostra_o_no_placar() {
    mostra_de_volta_no_placar();
    $('.placar .img').attr('src', 'o.png');
}

function mostra_nada_no_placar() {
    $('.placar .img').css("visibility", "hidden");
}

function mostra_de_volta_no_placar() {
    $('.placar .img').css("visibility", "visible");
}

function troca_vez() {
    if (vez == 'o') {
        vez = 'x';
    }
    else {
        vez = 'o';
    }
}

function verificar_campeao() {
    let a1 = $('.a1').attr('data-marcado');
    let a2 = $('.a2').attr('data-marcado');
    let a3 = $('.a3').attr('data-marcado');

    let b1 = $('.b1').attr('data-marcado');
    let b2 = $('.b2').attr('data-marcado');
    let b3 = $('.b3').attr('data-marcado');

    let c1 = $('.c1').attr('data-marcado');
    let c2 = $('.c2').attr('data-marcado');
    let c3 = $('.c3').attr('data-marcado');

    let final = false;
    let vencedor = '';

    // primeira linha
    if (a1 != "" && a2 != "" && a3 != "") {
        if (a1 == a2 && a2 == a3) {
            final = true;
            vencedor = a1;
            // alert('linha 1');
        }
        
    }
    
    // segunda linha
    if (b1 != "" && b2 != "" && b3 != ""){
        if (b1 == b2 && b2 == b3) {
            final = true;
            vencedor = b1;
            // alert('linha 2');
        }
        
    }
        
    // terceira linha
    if (c1 != "" && c2 != "" && c3 != ""){
        if (c1 == c2 && c2 == c3) {
            final = true;
            vencedor = c1;
            // alert('linha 3');
        }
        
    }
    
    // primeira coluna
    if (a1 != "" && b1 != "" && c1 != ""){
        if (a1 == b1 && b1 == c1) {
            final = true;
            vencedor = a1;
            // alert('coluna 1');
        }
        
    }
        
    // segunda coluna
    if (a2 != "" && b2 != "" && c2 != ""){
        if (a2 == b2 && b2 == c2) {
            final = true;
            vencedor = a2;
            // alert('coluna 2');
        }
        
    }

    // terceira coluna
    if (a3 != "" && b3 != "" && c3 != ""){
        if (a3 == b3 && b3 == c3) {
            final = true;
            vencedor = a3;
            // alert('coluna 3');
        }
        
    }
    
    // transversal noroeste sudeste
    if (a1 != "" && b2 != "" && c3 != ""){
        if (a1 == b2 && b2 == c3) {
            final = true;
            vencedor = a1;
            // alert('trasnversal 1');
        }
        
    }
    
    // transversal sudoeste nordeste 
    if (a3 != "" && b2 != "" && c1 != ""){
        if (a3 == b2 && b2 == c1) {
            final = true;
            vencedor = a3;
            // alert('trasnversal 2');
        }
        
    }

    // empate
    if (a1 != '' && a2 != '' && a3 != '' && b1 != '' && b2 != '' && b3 != '' && c1 != '' && c2 != '' && c3 != '' && vencedor == '') {
        $('.titulo').html("Empate");
        final = true;
        mostra_nada_no_placar();
    }
    
    if (final && vencedor != '') {
        jogando = false; 

        $('.titulo').html("Vencedor");

        if (vencedor == 'o') {
            mostra_o_no_placar();
        }
        else {
            mostra_x_no_placar();
        }  
        
        
        
        // alert('Acabou! ' + vencedor + ' venceu!');
    }
}

function limpa_tudo() {
    $('.area').html('');
    $('.area').attr('data-marcado', '');
}

function reinicia() {
    limpa_tudo();
    jogando = true;
    $('.titulo').html("É a vez de:");
}


$(function() {

    atualizar_placar();

    $('.reinicia').bind('click', function(){
        reinicia();
    });

    $('.area').bind('click', function(){                  

        if ($(this).find('img').length == 0) {

            if (jogando) {
                atualizar_placar();

                if (vez == 'o') {
                    $(this).html("<img src='o.png' border='0' height='50'>");                
                    $(this).attr('data-marcado', 'o');               
                }
                else {
                    $(this).html("<img src='x.jpg' border='0' height='50'>");
                    $(this).attr('data-marcado', 'x');  
                }      
            }
                      
        }

        if (jogando) {
            verificar_campeao(); 
        }                   

    });

});