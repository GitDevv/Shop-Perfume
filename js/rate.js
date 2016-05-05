

jQuery(document).ready(function(){

jQuery(".productRate").hover (
function(){
	jQuery(this).append("<span></span>");
},
function()
{
	jQuery(this).find("span").remove();
});


var rating;

jQuery(".productRate").mousemove (
function(e){
	if (!e) e = window.event;
 	if (e.pageX){
	       x = e.pageX;
	        } else if (e.clientX){
	        x = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
	     
	    }
	    var posLeft = 0;
	    var obj = this;
	   while (obj.offsetParent)
	    {
	        posLeft += obj.offsetLeft;
	        obj = obj.offsetParent;
	    }
	    var offsetX = x-posLeft,
			modOffsetX = 5*offsetX%this.offsetWidth;
			rating = parseInt(5*offsetX/this.offsetWidth);

		if(modOffsetX > 0) rating+=1;
		
		jQuery(this).find("span").eq(0).css("width",rating*18+"px");
		jQuery(this).find("div").eq(0).css("width",rating*18+"px");
});
 

});