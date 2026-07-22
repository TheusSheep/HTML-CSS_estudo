const menuabrir = document.getElementById('menu')
const menufecha = document.getElementById('menux')

menuabrir.addEventListener("click", function(){
    document.getElementById('textmenu').style.display = 'none'
    document.getElementById('option').style.display = 'flex'
    document.getElementById('menu').style.display = 'none'
    document.getElementById('menux').style.display = 'block'
    document.querySelector('header').style.flexFlow = 'column, nowrap'
})

menufecha.addEventListener("click", function(){
    document.getElementById('textmenu').style.display = ''
    document.getElementById('option').style.display = ''
    document.getElementById('menu').style.display = 'block'
    document.getElementById('menux').style.display = 'none'
})