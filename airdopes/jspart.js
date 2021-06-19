var c=0;
console.log("JS is connected");
window.addEventListener('scroll',function(){
    if(window.scrollY>=860 &&c==0)
    {   
        c=1;
        $('.introduction h1').animate({fontSize:130},500);
        $('.introduction h3').animate({fontSize:90},500);
    }
    if(window.scrollY<860 && c==1)
    {
        c=0;
        $('.introduction h1').animate({fontSize:90},500);
        $('.introduction h1').animate({fontSize:60},500);
    }
});
$(document).ready(function() {
    $('#mainimg').mouseenter(function(){
        $('.bodd').animate({backgroundColor:"#ffe609",backgroundImage: "download.svg"},500);
        console.log("ok");
    });
    $('#mainimg').mouseleave(function(){
        $('.bodd').animate({backgroundColor:"#000000", backgroundImage: "download.svg"},500);
        console.log("left");
    });
    var b=0;
    $('.navlink').mouseenter(function(){
        enter($(this));
        b=1;
    });
    $('.navlink').mouseleave(function(){
        leave($(this));
        b=0;
    });
    $('.navlinkSpecial').mouseenter(function(){
        enterSpc($(this));
        b=1;
    });
    $('.navlinkSpecial').mouseleave(function(){
        leaveSpc($(this));
        b=0;
    });
});
function enter(a){
    a.animate({fontSize:20,backgroundColor: "#c70f0f", borderRadius:30},500);
}
function enterSpc(a){
    a.animate({fontSize:20, backgroundColor: "#80ff00",color:'#000000',borderRadius:30},500);
}
function leaveSpc(a){
    a.animate({fontSize:15, backgroundColor: "#000000",color:'#ffffff'},500);
}
function leave(a){
    a.animate({fontSize:15, backgroundColor: "#000000"},500);
}