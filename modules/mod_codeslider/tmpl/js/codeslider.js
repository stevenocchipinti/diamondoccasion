/* Copyright http://codematrix.ru/ Alex Voloh*/
/* License: GNU/GPL v.2 or later */
/* Non-commercial */
function GallerySize(){jQuery(".codegallery").css({"height":jQuery(".codeimage:first img").height(),"width":jQuery(".codeimage:first img").width()});jQuery(".codeimage").width(jQuery(".codegallery").width());jQuery(".carousel").css("width",jQuery(".codeimage").width()*jQuery(".codeimage").length)};jQuery(document).ready(function(){jQuery("body").attr("onload","GallerySize()");jQuery(".codeimage:first").addClass("active-image");jQuery(".imgtooltip div").text(jQuery(".active-image img").attr("alt"));function forward(){var stopped=jQuery(".carousel").width()-jQuery(".codeimage:first").width();var stopped=stopped*(-1);var scrollStep=jQuery(".codeimage:first").width();if(jQuery(".carousel").css("marginLeft")!=stopped+"px"){jQuery(".carousel").animate({"marginLeft":"-="+scrollStep},codeparams.animtime,function(){jQuery(this).stop(true);jQuery(".active-image").removeClass("active-image").next().addClass("active-image");jQuery(".imgtooltip div").text(jQuery(".active-image img").attr("alt"))})}else{jQuery(".carousel").animate({"marginLeft":"0px"},codeparams.animtime*2,function(){jQuery(this).stop(true);jQuery(".active-image").removeClass("active-image");jQuery(".codeimage:first").addClass("active-image");jQuery(".imgtooltip div").text(jQuery(".active-image img").attr("alt"))})}};function backward(){var stopped=jQuery(".carousel").width()-jQuery(".codeimage:first").width();var stopped=stopped*(-1);var scrollStep=jQuery(".codeimage:first").width();if(jQuery(".carousel").css("marginLeft")!="0px"){jQuery(".carousel").animate({"marginLeft":"+="+scrollStep},codeparams.animtime,function(){jQuery(this).stop(true);jQuery(".active-image").removeClass("active-image").prev().addClass("active-image");jQuery(".imgtooltip div").text(jQuery(".active-image img").attr("alt"))})}else{jQuery(".carousel").animate({"marginLeft":stopped+"px"},codeparams.animtime*2,function(){jQuery(this).stop(true);jQuery(".active-image").removeClass("active-image");jQuery(".codeimage:last").addClass("active-image");jQuery(".imgtooltip div").text(jQuery(".active-image img").attr("alt"))})}};if(codeparams.autoscroll==1){var cycle=setInterval(forward,codeparams.scrollspeed);jQuery(".codegallery").hover(function(){clearInterval(cycle);cycle=""},function(){cycle=setInterval(forward,codeparams.scrollspeed)})}jQuery(".nextimage").click(function(){forward()});jQuery(".previmage").click(function(){backward()});if(codeparams.imgtool==1){jQuery(".codegallery").hover(function(){jQuery(".imgtooltip").stop(true).css({"display":"block"}).animate({"opacity":"1","height":"10%"},400);jQuery(".imgtooltip div").stop(true).animate({"opacity":"1"},600)},function(){jQuery(".imgtooltip div").stop(true).animate({"opacity":"0",},400);jQuery(".imgtooltip").stop(true).animate({"opacity":"0","height":"0px"},600)})}jQuery(".codeimage img").each(function(){if(jQuery(this).attr("data-href")){jQuery(this).css("cursor","pointer");jQuery(this).click(function(){if(codeparams.linktarget==1){window.open(jQuery(this).attr("data-href"))}else{window.location=jQuery(this).attr("data-href")}})}})});