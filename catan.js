catan={}
catan.div=document.getElementById('catanCalc')
catan.vals=[]

if(catan.div){
    let h='<div id="diceRes"></div>'
    h+=''
    catan.div.innerHTML=h
    // create dice result table
    let div = document.getElementById('diceRes')
    const ii = [...Array(12)]
    ii.forEach((_,i)=>{
        let j=i+2
        let dv = document.createElement('div')
        div.appendChild(dv)
        dv.innerHTML=j>12? 'undo' : j
        dv.id=`val_${j}`
        dv.onclick=(ev)=>{
            catan.vals.push(j)
            console.log(dv,catan.vals)
        }
    })
}