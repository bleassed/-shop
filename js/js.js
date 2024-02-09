
$(document).ready(function(){

    $('.slide-one').owlCarousel({
        loop:true, /*цикл слайдов*/
        margin:14,
        nav:false,
        autoplay:true, /*автопрокрутка вкл*/
        autoplayTimeout:7000, /*интервал прокрутки*/
        smartSpeed:1800,
        dots: false,
        touchDrag:true,
        slideTransition: 'linear',
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
      });

      $('.slide-two').owlCarousel({
        loop:true,
        margin:14,
        nav:false,
        slideTransition: 'linear',
        autoplay:true,
        autoplayTimeout:7000,
        smartSpeed:1800,
        touchDrag:true,
        rtl: true, /*справа налево*/
        dots: false,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
      });

      $('.new-item').owlCarousel({
       margin:14,
       slideTransition: 'linear',
       touchDrag:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
      });

    });


    $('.catalog').owlCarousel({
      margin: 14 ,
      slideTransition: 'linear',
      touchDrag:true,
       responsive:{
           0:{
               items:3
           },
           600:{
               items:3
           },
           1000:{
               items:3
           }
       }
     });



     $('.product-rec').owlCarousel({
        margin:10,
        slideTransition: 'linear',
        touchDrag:true,
         responsive:{
             0:{
                 items:3
             },
             600:{
                 items:4
             },
             1000:{
                 items:5
             }
         }
       });
 
   










   
   

    $(document).ready(function(){
        // Добавить плавную прокрутку до всех ссылок
        $("a").on('click', function(event) {
      
          // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
          if (this.hash !== "") {
            // Запретить поведение щелчка якоря по умолчанию
            event.preventDefault();
      
            // Хранить хэш
            var hash = this.hash;
      
            // Использование метода animate() jQuery для добавления плавной прокрутки страницы
            // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
      
              // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
              window.location.hash = hash;
            });
          } // Конец, если
        });
      });

   


