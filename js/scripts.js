$(document).ready(function() {
            
    /* Carousel related */
    // Make carousel cycling faster
    $('#MyCarousel').carousel({ interval: 2000 });
    
    // Pause/Play button for carousel 
    $('#CarouselButton').click(function() {
        if ($('#CarouselButton').children('span').hasClass('fa-pause')) {
            $('#MyCarousel').carousel('pause');
            $('#CarouselButton').children('span').removeClass('fa-pause');
            $('#CarouselButton').children('span').addClass('fa-play');
        }
        else if ($('#CarouselButton').children('span').hasClass('fa-play')) {
            $('#MyCarousel').carousel('cycle');
            $('#CarouselButton').children('span').removeClass('fa-play');
            $('#CarouselButton').children('span').addClass('fa-pause');
        }
    })
    
    /* Login Modal */
    $('#LoginSpan').click(function() {
        $('#LoginModal').modal('show')
    })
    
    /* Reserve Table Modal */
    $('#ReserveTableButton').click(function() {
        $('#ReserveTableModal').modal('show')
    })
})