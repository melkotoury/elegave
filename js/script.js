 (function() {
            function addEventListener(element, event, handler) {
                if (element.addEventListener) {
                    element.addEventListener(event, handler, false);
                } else if (element.attachEvent) {
                    element.attachEvent('on' + event, handler);
                }
            }

            function maybePrefixUrlField() {
                if (this.value.trim() !== '' && this.value.indexOf('http') !== 0) {
                    this.value = "http://" + this.value;
                }
            }

            var urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]');
            if (urlFields && urlFields.length > 0) {
                for (var j = 0; j < urlFields.length; j++) {
                    addEventListener(urlFields[j], 'blur', maybePrefixUrlField);
                }
            } /* test if browser supports date fields */
            var testInput = document.createElement('input');
            testInput.setAttribute('type', 'date');
            if (testInput.type !== 'date') {

                /* add placeholder & pattern to all date fields */
                var dateFields = document.querySelectorAll('.mc4wp-form input[type="date"]');
                for (var i = 0; i < dateFields.length; i++) {
                    if (!dateFields[i].placeholder) {
                        dateFields[i].placeholder = 'YYYY-MM-DD';
                    }
                    if (!dateFields[i].pattern) {
                        dateFields[i].pattern = '[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])';
                    }
                }
            }

        })(); 
jQuery(document).ready(function($) {

     
            $('#welcome').parallax("50%", 0.4);
            $('#calltoaction').parallax("50%", 0.4);
            $(".project-gallery").slick({
                dots: true,
                autoplay: true,
                autoplaySpeed: parseInt(7) * 1000,
                arrows: false,
                pauseOnHover: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 979,
                    settings: {
                        slidesToShow: 1,
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }]
            });

            $(".testimonial-slider").slick({
                dots: true,
                autoplay: true,
                autoplaySpeed: parseInt(7) * 1000,
                arrows: false,
                pauseOnHover: true,
                infinite: true,
                slidesToShow: parseInt(3),
                slidesToScroll: parseInt(3),
                responsive: [{
                    breakpoint: 979,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }]
            });

            $(".clients-slider").slick({
                dots: false,
                autoplay: true,
                autoplaySpeed: parseInt(3) * 1000,
                arrows: false,
                pauseOnHover: true,
                infinite: true,
                slidesToShow: parseInt(6),
                slidesToScroll: parseInt(1),
                responsive: [{
                    breakpoint: 979,
                    settings: {
                        slidesToShow: 3,
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }]
            });

            $('.counter').counterUp({
                delay: 50, // The delay in which the stats counter will start 
                time: 2000 // The speed by which the stats counter counts up (in milliseconds)
            });
    
     // Changing the defaults
        window.sr = ScrollReveal({
            reset: false
        });
        // Customizing a reveal set
        sr.reveal('.page-template-template-home .hero .col-md-12 > div', {
            duration: 900,
            delay: 50,
            origin: 'bottom',
            distance: '20px',
            scale: 1,
            easing: 'linear',
            viewFactor: 0.25
        }, 150);
        sr.reveal('.page-template-template-home .features .feature', {
            duration: 900,
            delay: 50,
            origin: 'bottom',
            distance: '20px',
            scale: 1,
            easing: 'linear',
            viewFactor: 0.25
        }, 150);
        sr.reveal('.page-template-template-home .project-single .project', {
            duration: 900,
            delay: 50,
            origin: 'bottom',
            distance: '20px',
            scale: 1,
            easing: 'linear',
            viewFactor: 0.25
        }, 150);
        sr.reveal('.page-template-template-home .projects-grid .grid', {
            duration: 900,
            delay: 50,
            origin: 'bottom',
            distance: '20px',
            scale: 1,
            easing: 'linear',
            viewFactor: 0.25
        }, 150);
        sr.reveal('.page-template-template-home .services .service', {
            duration: 900,
            delay: 50,
            origin: 'bottom',
            distance: '20px',
            scale: 1,
            easing: 'linear',
            viewFactor: 0.25
        }, 150);
        sr.reveal('.page-template-template-home .pts .pt', {
            duration: 900,
            delay: 50,
            origin: 'bottom',
            distance: '20px',
            scale: 1,
            easing: 'linear',
            viewFactor: 0.25
        }, 150);
        sr.reveal('.page-template-template-home .team .member', {
            duration: 900,
            delay: 50,
            origin: 'bottom',
            distance: '20px',
            scale: 1,
            easing: 'linear',
            viewFactor: 0.25
        }, 150);
        sr.reveal('.page-template-template-home .blog article', {
            duration: 900,
            delay: 50,
            origin: 'bottom',
            distance: '20px',
            scale: 1,
            easing: 'linear',
            viewFactor: 0.25
        }, 150);
    
        });
    

   
       