$(document).ready(function(){var e,r=function(){$("#sparkline1").sparkline([0,23,43,35,44,45,56,37,40],{type:"line",width:"100%",height:"165",chartRangeMax:50,lineColor:"#ddd",fillColor:"rgba(221, 221, 221, 0.3)",highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)"}),$("#sparkline1").sparkline([25,23,26,24,25,32,30,24,19],{type:"line",width:"100%",height:"165",chartRangeMax:40,lineColor:"#fe6271",fillColor:"rgba(254, 98, 113, 0.3)",composite:!0,highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)"}),$("#sparkline2").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"bar",height:"165",barWidth:"10",barSpacing:"3",barColor:"#fe6271"}),$("#sparkline3").sparkline([20,40,30,10],{type:"pie",width:"165",height:"165",sliceColors:["#fe6271","#fe8995","#ffa3ac","#ffb4bc"]}),$("#sparkline4").sparkline([0,23,43,35,44,45,56,37,40],{type:"line",width:"100%",height:"165",chartRangeMax:50,lineColor:"#fe6271",fillColor:"transparent",highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)"}),$("#sparkline4").sparkline([25,23,26,24,25,32,30,24,19],{type:"line",width:"100%",height:"165",chartRangeMax:40,lineColor:"#ddd",fillColor:"transparent",composite:!0,highlightLineColor:"rgba(0,0,0, .1)",highlightSpotColor:"rgba(0,0,0, .2)"}),$("#sparkline6").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"bar",height:"165",barWidth:"10",barSpacing:"3",barColor:"#dddddd"}),$("#sparkline6").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"line",width:"100%",height:"165",lineColor:"#fe6271",fillColor:"transparent",composite:!0,highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)"})},l=function(){var r,l=-1,o=-1,a=0,t=[];$("html").mousemove(function(i){var e=i.pageX,r=i.pageY;-1<l&&(a+=Math.max(Math.abs(e-l),Math.abs(r-o))),l=e,o=r});var h=function(){var i=(new Date).getTime();if(r&&r!=i){var e=Math.round(a/(i-r)*1e3);t.push(e),30<t.length&&t.splice(0,1),a=0,$("#sparkline5").sparkline(t,{tooltipSuffix:" pixels per second",type:"line",width:"100%",height:"165",chartRangeMax:50,lineColor:"#fe6271",fillColor:"rgba(254, 98, 113, 0.3)",highlightLineColor:"rgba(254, 98, 11, .1)",highlightSpotColor:"rgba(254, 98, 11, .2)"})}r=i,setTimeout(h,500)};setTimeout(h,500)};r(),l(),$(window).resize(function(i){clearTimeout(e),e=setTimeout(function(){r(),l()},300)})});