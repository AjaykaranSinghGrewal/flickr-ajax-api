$(document).ready(function(){
   /*$('button').click(function(){
       $('button').removeClass('selected');
       $(this).addClass("selected");*/
    
    $('form').submit(function(event){
        event.preventDefault();
        var $searchField = $('#inputText');
       
       var apiString = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
       var animal = $searchField.val();
       
       var flickerOptions = {
           tags: animal,
           format: "json"
       };
       
       function displayPhotos(dataArray){
           var photoHTML = '<div class="row text-center text-lg-left">';
           
           $.each(dataArray.items, function(i, photo){
              photoHTML += '<div class="col-lg-3 col-md-4 col-xs-6">';
              photoHTML += '<a href = "' +photo.link+ '" class = "d-block mb-4 h-100">';
              photoHTML += '<img src="' +photo.media.m+ '" class="img-fluid img-thumbnail"></a></div>';
           });
           photoHTML += '</div>'
           $('#photos').html(photoHTML);
       }
       $.getJSON(apiString, flickerOptions, displayPhotos);
   }); 
    
});