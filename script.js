function gerar(){
    
    var num = document.querySelector('#num')
    var tabuada;
    var i;
    var test = document.querySelector('#mydiv')
    test.innerHTML = ''
   
    if(num.value.length == 0){
        window.alert('Escreve um número, rapaz...')
    }else
    for(var i = 1; i <= 10;i++){
       tabuada = i*(num.value)
       test = document.createElement("P")
       test.innerHTML += `${i} x ${num.value} = ${tabuada} `
    test.innertext
       document.getElementById('mydiv').appendChild(test)
       document.getElementById('mydiv').style.textAlign = 'center'
       document.getElementById('mydiv').style.padding = '30px'
  
       
   }
}