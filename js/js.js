$(function(){
				imgLength=$(".product li").length;  
				imgWidth=$(".product li").width(); 
				$(".product").width(imgLength*imgWidth); 
				for(i=1;i<=imgLength;i++){
					$(".page").append("<span></span>");  
				}
				$(".page span:first").addClass("current2"); 
				$(".page span").mouseover(function(){
					$(this).addClass("current2").siblings(".page span").removeClass("current2");
					aa=$(this).index();
					$(".product").stop().animate({left:"-"+(imgWidth*aa)},1000)});

				function scrolls1(){
					bbb=$(".current2").index();
					if(bbb==imgLength-1){
						bbbindex=0;
						}
					else{
						bbbindex=bbb+1;	
						}
					$(".page span").eq(bbbindex).triggerHandler("mouseover");
					}
				int=setInterval(scrolls1,3000);
				$(".second-wrap").mouseover(function(){clearInterval(int);})
						  .mouseout(function(){
						  	int=setInterval(scrolls1,3000);
			});
			});


$(function(){
  for(var i=1;i<=$("#carousel ul li").length;i++){
	$("#carousel .C_wraper p").append("<span></span>");
  };
  $("#carousel span:first").addClass("current");
  $("#carousel span").click(function(){
    var aaa=$(this).index();
	$(this).addClass("current").siblings("span").removeClass("current");
	$("#carousel li").eq(aaa).stop().fadeIn().siblings("li").hide();
  })

      function scrolls(){
        if($("#carousel span:last").hasClass("current")){
         var next=0;
       }else{
         var next=$(".current").index()+1;
       }
       $("#carousel span").eq(next).triggerHandler("click"); 
     };
     niahoa=setInterval(scrolls,2000);
});


$(function(){
		$nihao=$(window).height();
		$("#carousel li,#carousel ul,.C_wraper").css("height",$nihao);
		$(".carouselp").css("height","0px")
	})



$(function(){
  $(".tab_head li").mouseover(function(){
	$(this).addClass("li").siblings("li").removeClass("li");
	index=$(this).index();
	$(this).parent(".tab_head").siblings(".tab").children("li").eq(index).show().siblings("li").hide();
   })
  $(".tab_head a").mouseover(function(){
    $(this).addClass("a").parents("li").siblings("li").children("a").removeClass("a");
	index=$(this).index();
	$(this).parent(".tab_head").siblings(".tab").children("li").eq(index).show().siblings("li").hide();
  });
});
$(function(){
	$('#dowebok').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7','page8','page9','footer'],
		menu: '#menu',
	});
});
