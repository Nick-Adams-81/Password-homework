var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
var num = '1234567890'
var sym = '!@#$%^&*()_+'

var charNum = document.querySelector('#charNum')
var numBox = document.querySelector('#num')
var symBox = document.querySelector('#sym')
var submit = document.querySelector('#Submit')
var yourPw = document.querySelector('#yourPw')
var copyPw = document.querySelector('#copyPw')




submit.addEventListener('click', function(){
    var characters = char;
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';

    yourPw.value = password(charNum.value, characters)
})



function password(l, characters){
    var pwd = ''
    for( var i = 0; i < l; i++){
        pwd += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return pwd;
}


copyPw.addEventListener('click', function(){
    
    
    alert('Password copied to clipboard!')
})