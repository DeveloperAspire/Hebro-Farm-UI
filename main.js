var menu= document.getElementById('menu-icon');
    var menuList= document.getElementById('menu-list')
    var cancel= document.getElementById('cancel')
    
    var contactNav=document.getElementById('contact-nav')
    var serviceNav=document.getElementById('service-nav')
    var aboutNav=document.getElementById('about-nav')

    menu.addEventListener("click" , function(){
      menuList.classList.add('showlist')
    }
    );

    cancel.addEventListener('click', function(){
      menuList.classList.remove('showlist')
    });

    contactNav.addEventListener('click', function(){
      menuList.classList.remove('showlist')
    });

    serviceNav.addEventListener('click', function(){
      menuList.classList.remove('showlist')
    });

    aboutNav.addEventListener('click', function(){
      menuList.classList.remove('showlist')
    });




   

    