menus = document.querySelectorAll('.menu');

for(let menu of menus){
    menu.querySelector('h2').addEventListener('click',function(e){
        const cur_submenu = this.parentElement.querySelector('.submenu');
        if(cur_submenu.style.display === 'block'){
            cur_submenu.style.display = 'none';
        } else{
            for(let menu of menus){
                menu.querySelector('.submenu').style.display ='none';
            }
            cur_submenu.style.display = 'block';          
        }
    })
}