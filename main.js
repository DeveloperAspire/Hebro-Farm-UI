var menu= document.getElementById('menu-icon');
    var menuList= document.getElementById('menu-list')
    var cancel= document.getElementById('cancel')

    menu.addEventListener("click" , function(){
      menuList.classList.add('showlist')
    }
    );

    cancel.addEventListener('click', function(){
      menuList.classList.remove('showlist')
    })



   

    