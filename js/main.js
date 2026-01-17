document.addEventListener('DOMContentLoaded', function () {


    /*=================================================
          カレンダー　アコーディオン
    ===================================================*/

    // $('.short').on('click', function () {

    //     var $short = $(this);
    //     var $full = $short.next('.full');

    //     $full.slideToggle(500);

    //     if ($short.hasClass('close')) {
    //         $short.removeClass('close');
    //         $short.slideDown(300);
    //     } else {
    //         $short.addClass('close');
    //         $short.slideUp(300);
    //     }
    // });

    const calendar = document.querySelectorAll('.calendar-item');

    calendar.forEach(calendar => {
        const trigger = calendar.querySelector('.accordion-trigger');

        trigger.addEventListener('click', () => {
            calendar.classList.toggle('open');

            trigger.setAttribute('aria-expanded',
                calendar.classList.contains('open') ? 'true' : 'false'
            );

        });
    });


});