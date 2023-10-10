

window.addEventListener('DOMContentLoaded', function(){


    //TASK5
    
    const number=document.querySelector('.number')
    let selectedItem;
    const result=document.querySelector('.result')
    document.querySelector('.count-button').addEventListener('click', function(){
        let cost;
        document.querySelector('.products').querySelectorAll('option').forEach(function(item){
            if ( item.selected) {cost=item.value; selectedItem=item;}
        })
        result.value=cost*number.value;
       
    })
    document.querySelector('.clear-button').addEventListener('click', function(){
        number.value='';
        document.querySelector('.products').querySelector('option').selected=true
        console.log(document.querySelector('.products').querySelector('option'))
        result.value=''
    })
    
    


   
    //TASK6


    const fields=Array.from(document.getElementsByTagName('fieldset'))
    const btns=Array.from(document.getElementsByName('product'))
    let currentField=0;
    const numberOfservices= document.querySelector('.numberOfservices')
    form2.addEventListener('submit', function(e){
        e.preventDefault()
    })
    
    //прослушка радио-кнопок с выбором услуг
    btns.forEach(function(btn){
        btn.addEventListener('click', function(){
            fields.forEach(function(field){
                if (field.dataset.id===btn.id && !field.classList.contains('none')) {field.classList.add('none');btn.checked=false}
                else if (field.dataset.id!=btn.id) {field.classList.add('none')}
                else {
                    field.classList.remove('none')
                    currentField=field
                }
                numberOfservices.value=1;
               
            })
           
            let countOfServices=numberOfservices.value;
            let addTypePedicur=0;
            let addColorNail=0;
            
        
            const finalCost=currentField.querySelector('.final__cost').querySelector('span')
            const initialCost=currentField.querySelector('.initial__cost').querySelector('span')
            finalCost.innerText=initialCost.innerText
            const typePedicur=currentField.querySelector('.typePedicur')
            const colorsOfNail=currentField.querySelectorAll('.color')
            
    
            numberOfservices.addEventListener('input', function(){
                countOfServices=numberOfservices.value;
                finalCost.innerText=(countOfServices*addTypePedicur)+(initialCost.innerText*countOfServices)+(countOfServices*addColorNail)
            })


            currentField.addEventListener('change', function(e){
                //изменение в типе педикюра
                if (e.target==typePedicur){
                    Array.from(typePedicur).forEach(function(item){
                        if (item.selected==true)  {
                            addTypePedicur=item.value;
                            finalCost.innerText=(countOfServices*addTypePedicur)+(initialCost.innerText*countOfServices);
                        }
                      
                    })
                }
                //изменение в цвете маникюра
                if (e.target.classList.contains('color') ) {
                    addColorNail=0
                    Array.from(colorsOfNail).forEach(function(item){
                        if (item.checked) addColorNail+=Number(item.value)
                    })
                    finalCost.innerText=(countOfServices*addColorNail)+(initialCost.innerText*countOfServices);
                }
                
            })
                
    
        })
    })
    
})
    