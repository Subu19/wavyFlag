const c = document.getElementById('preTag');
var f = 0.100;
var incriment= f;


function animation(){
    c.innerHTML = '';
    var l1 = 0;
    var l2 = 6;

    for (let i = 0; i < 35; i+=2 ) {
        var newText = [];
        l1+=1;
        newText.push("@");  
        for (let x = 0; x < l1; x++) {
            newText.push("#");
            
        }
        newText.push("@");  
        l1+=1
        newText.push(`\n`);
        c.innerHTML += newText.join("");
        
            l1 += Math.sin(l1*0.1 + incriment);
        
    }
    incriment +=f;

    for (let i = 5; i < 35; i+=2 ) {
        var newText = [];
        l2+=1;
        newText.push("@");  
        for (let x = 0; x < l2; x++) {
            newText.push("#");
            
        }
        newText.push("@");  
        l2+=1
        newText.push(`\n`);
        c.innerHTML += newText.join("");
        
        l2 += Math.sin(l2*0.1 + incriment);
        
    }
    incriment +=f;
    
}
setInterval(() => {
    animation();
}, 50);

