function TestNumber(){

    let snt = document.getElementById("number").value;

    snt = parseInt(snt);
    console.log(snt);

    

    for(let j = snt; j >= 2;j--){
        let isSu = true;
        let i = 2;
        while(i <= Math.sqrt(j)){
            if (j % i == 0){
                isSu = false;
                break;
            }
            i++;
        }
    
        if(isSu){
            console.log( j + " la so nt");
        }
    }
}


