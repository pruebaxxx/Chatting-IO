function busca(e){var n=document.getElementsByClassName("conectados_lista");if(0!=e)for(t=n.length-1;t>=0;t--)e==n[t].innerHTML.substring(0,e.length)?n[t].style.display="block":n[t].style.display="none";else for(var t=n.length-1;t>=0;t--)n[t].style.display="block"}var socket=io();$(function(){function e(){var e;return e=new Date,e.toLocaleTimeString()}var n=$("#nameInput");n.focus(),$("#chat").hide(),$("#formUser").submit(function(){return $("#index").hide(),$("#chat").show(),socket.emit("username",n.val()),$("#inputMensaje").focus(),!1}),socket.on("send users",function(e){$("#lista_conectados").text(" ");for(var t=e.name.length-1;t>=0;t--)$("#lista_conectados").append("<li class='conectados_lista'>"+e.name[t]+"</li>");var s="Online ("+e.conect+")";$(".online").text(s),$(".bienvenido").text("Bienvenido "+n.val())}),setInterval(e,1e3),hora=e(),socket.on("new user",function(e){"null"!=typeof e&&$(".mensajes").append("<center><p>Se ha conectado "+e+"</p></center>")}),$("#formMensaje").submit(function(){return socket.emit("send message",$("#inputMensaje").val()),$("#inputMensaje").val(""),!1}),socket.on("show message",function(e){void 0!==e.msg&&$(".mensajes").append("<li>"+e.msg+"<p>"+hora+"</p></li>"),void 0!==e.user&&$(".mensajes").append("<center><p>"+e.user+" ha abandonado el chat</p></center>")})});