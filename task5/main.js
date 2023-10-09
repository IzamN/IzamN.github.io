window.addEventListener('DOMContentLoaded', function() {
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
})





