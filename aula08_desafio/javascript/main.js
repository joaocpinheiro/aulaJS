




(function(){
    var $menu = document.querySelector('html')
    var $icon = document.querySelector('.header-nav__hamburgger')

    $menu.classList.remove('no-js')
    $menu.classList.add('js')

    $icon.addEventListener('click', function(){
        $menu.classList.toggle('menu-opened')
    })

    
    
})()

