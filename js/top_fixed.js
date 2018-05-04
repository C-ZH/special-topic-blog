$(function(){
　//$(window).load(function(){
　　$(window).bind('scroll resize', function(){
　	　var $this = $(this);
　　  var $this_Top=$this.scrollTop();

　　  if($this_Top > 200){
		$('#nav2').show();
　　　  $('#nav2').stop().animate({opacity:"1"});
　　  }
　　  if($this_Top < 200){
		$('#nav2').hide();
		$('#nav2').stop().animate({opacity:"0"});
	  }
　  }).scroll();
  //});
});
