$(document).ready(function(){
  $("#diet").click(function(){
    $(".wrapper").css("background-color","#0c0f12");
    $(this).animate({
      bottom: 40
    },1000)
  })
  $("#zero").click(function(){
    $(".wrapper").css("background-color","#aeb2b5");
    $(this).animate({
      bottom: 40
    },1000)
  })
  $("#normal").click(function(){
    $(".wrapper").css("background-color","#0c8aeb");
    $('#normal').animate({
      bottom: 40
    },1000)
  })
  $("#diet").mouseleave(function(){
    $('.wrapper').css('background-color','#c203fc');
    $(this).animate({
      bottom: 0
    },300)
  })
    $("#zero").mouseleave(function(){
      $('.wrapper').css('background-color','#c203fc');
      $(this).animate({
        bottom: 0
      },300)
    })
    $("#normal").mouseleave(function(){
      $('.wrapper').css('background-color','#c203fc');
      $(this).animate({
        bottom: 0
      },300)
    })
  })
