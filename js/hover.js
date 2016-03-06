$(function(){
     $('#herbtea img').hover(function(){
         console.log(this);
        $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
          },
          function(){
             if (!$(this).hasClass('currentPage')) {
             $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
        }
   });
});
