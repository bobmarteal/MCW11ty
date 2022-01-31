// Scripts for MCW Hopefully very short
jQuery(document).ready(function ($) {
    $('.animated').css('opacity', 0);
    $('.animated').waypoint(function (direction) {
        $(this.element).addClass('fadeIn');
        console.log('far out');
    }, {
        offset: '80%'
    });

    $(document).ready(function () {
      $('.popup-gallery').each(function(){
        $(this).magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
              return item.el.attr('title') + '<small>photo by Miles Marteal</small>';
            }
          }
        });
      });
        // $('.popup-gallery').magnificPopup({
        //     delegate: 'a',
        //     type: 'image',
        //     tLoading: 'Loading image #%curr%...',
        //     mainClass: 'mfp-img-mobile',
        //     gallery: {
        //         enabled: true,
        //         navigateByImgClick: true,
        //         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        //     },
        //     image: {
        //         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        //         titleSrc: function (item) {
        //             return item.el.attr('title') + '<small>photo by Miles Marteal</small>';
        //         }
        //     }
        // });
    });

    $(document).ready(function () {
        $('.big-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small>photo by Miles Marteal</small>';
                }
            }
        });
    });


});

