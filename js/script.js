var rellax = new Rellax();

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

var helloSir = document.querySelector('.hello-sir');
var count = document.querySelector('.count');
var header = document.querySelector('.header');
var cardLeft = document.querySelectorAll('.card-left');
var cardRight = document.querySelectorAll('.card-right');
var myMainProfile = document.querySelector('.my-main-profile');
var viewBtn = document.querySelectorAll('.viewBtn');
var scrollTop = document.querySelector('.scroll-top');


var waypoint = new Waypoint({
    element: document.getElementById('project'),
    handler: function(direction) {
        if(direction == 'down'){
            cardLeft.forEach(el => {
                el.classList.add('animate__animated','animate__slideInLeft')
            })
            cardRight.forEach(el => {
                el.classList.add('animate__animated','animate__slideInRight');
            })
        }else{
            cardLeft.forEach(el => {
                el.classList.remove('animate__animated','animate__slideInLeft')
            })
            cardRight.forEach(el => {
                el.classList.remove('animate__animated','animate__slideInRight');
            })
        }
    }
},{
    offset: '100%'
})

viewBtn.forEach(el => {
    el.addEventListener('click',function(e){
        var current = e.target.parentNode.parentNode.parentNode;
        if(current.classList.contains('animate__animated')){
            current.classList.remove('animate__animated');
        }
    })
})

var waypoints = $('#skill').waypoint({
    handler: function(direction) {
    if(direction == 'down'){
        progressLoading();
        specialCount();
    }else{
        progressLoading();
    }
}
})

var waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        if(direction == 'down'){
            header.classList.add('my-header');
            header.classList.remove('animate__animated','animate__slideInDown');
            helloSir.classList.remove('animate__animated','animate__slideInLeft');
            myMainProfile.classList.remove('animate__animated','animate__slideInRight');
            scrollTop.classList.add('scroll-top-block');
            scrollTop.classList.add('animate__slideInDown');
        }else{
            header.classList.remove('my-header');
            header.classList.add('animate__animated','animate__slideInDown');
            helloSir.classList.add('animate__animated','animate__slideInLeft');
            myMainProfile.classList.add('animate__animated','animate__slideInRight');
            scrollTop.classList.remove('scroll-top-block');
            scrollTop.classList.remove('animate__slideInDown');
        }
    }
},{
    offset: '100%'
})

function checkIt(){
    setTimeout(() => {
        if($('.hello-sir').hasClass('animate__animated')){
            $('.hello-sir').removeClass('animate__animated');
        }
    },500);
}

var waypoints = $('#about').waypoint({
    handler: function(direction) {
    if(direction == 'up'){
        checkIt();
    }
}
})

function specialCount() {
    $('.skill-box-head').counter({
        countFrom: '0',
        duration: '5000'
    });
}

function progressLoading(){
    setTimeout(function() {
        $('.progress .my-progress-bar').each(function() {
            var me = $(this);
            var perc = me.attr("data-percentage");
            var current_perc = 0;

            var progress = setInterval(function() {
                if (current_perc >= perc) {
                    clearInterval(progress);
                } else {
                    current_perc += 1;
                    me.css('width', (current_perc) + '%');
                }
                me.text((current_perc) + '%');
            }, 50);
        });
    },300);
}

var typed = new Typed('.about-type', {
    strings: [
        'Web Developer,',
        ' and UI/UX Designer.'
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
    // smartBackspace: true // Default value
});

var typed = new Typed('.type', {
    strings: [
        'Designer,',
        ' Developer',
        'Freelance Developer based in Myanmar.'
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
    // smartBackspace: true // Default value
});

ScrollReveal({
    origin : 'left',
    distance : '50px',
    duration : 2000,
    reset : true
}).reveal('.my-work-img',{
    interval : 200
});

ScrollReveal({
    origin : 'top',
    distance : '50px',
    duration : 2000,
    reset : true
}).reveal('.contact-me',{
    interval : 200
});

ScrollReveal({
    origin : 'left',
    distance : '50px',
    duration : 3000,
    reset : true
}).reveal('.two-year-img',{
    interval : 200
});