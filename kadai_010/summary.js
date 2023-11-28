let ncolor = 0;
let ntarget = 0;
$(function(){

    $('#change-color').on('click', function(){
        if( ncolor == 0){
            $('#target').css('color', 'red');
            ncolor++;
        }else{
            $('#target').css('color', 'black');
            ncolor = 0;
        }   
    });

    $('#change-text').on('click', function(){
        if(ntarget == 0){
            $('#target').text('Hello!');
            ntarget++;
        }else{
            $('#target').text('こんにちは!');
            ntarget = 0;    
        }
    });

    $('#fade-out').on('click', function(){
        $('#target').fadeOut();

    });

    $('#fade-in').on('click', function(){
        $('#target').fadeIn();
    });
});