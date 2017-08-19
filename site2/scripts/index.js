        $(document).ready(function (){
            $("#scrollBtn1").click(function (){
                $('html, body').animate({
                    scrollTop: $("#mainContent").offset().top
                }, 1000);
            });
        });
