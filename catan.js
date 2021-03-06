catan={}
catan.div=document.getElementById('catanCalc')
catan.vals=[]

catan.plot=(id="dicePlot")=>{
    /*
    let trace={
        x: catan.vals,
        type: 'histogram',
        //binsz:1
    }
    */
    let xx = [2,3,4,5,6,7,8,9,10,11,12]
    let yy = xx.map(n=>{
        return catan.vals.filter(xi=>xi==n).length
    })
    let sum = catan.vals.length
    let trace = {
        x: xx.map(xi=>xi.toString()),
        y: yy,
        //mode: 'lines+markers+text',
        text:yy.map(yi=>` ${(Math.round(100*yi/sum))} %`),
        textposition: 'auto',
        type: 'bar'
    }
    let expected = {
        x:xx,
        y:xx.map(xi=>sum*Math.abs(6-Math.abs(xi-7))/36),
        mode:'lines',
        opacity:0.5,
        line:{
            color:'red',
            dash: 'dot'
        }

    }
    //console.log(trace)
    let layout = {
        width:500,
        height:500,
        showlegend: false,
        xaxis: {
            showgrid: true,
            tickmode: "array",
            tickvals:xx,
            ticktext:xx.map(xi=>xi.toString())
            //range: [2, 12]
        },
        yaxis: {
            showgrid: true
        }
    }
    Plotly.newPlot(document.getElementById(id),[trace,expected],layout,{staticPlot: true,displayModeBar: false})
}

if(catan.div){
    let h='<div id="diceRes"></div>'
    h+='<div id="dicePlot" width="500px">'
    h+='<a href="https://github.com/jonasalmeida/catan" target="_bank">code</a>'
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
            console.log(catan.vals)
            catan.plot()
        }
        if(dv.textContent=='undo'){
            dv.onclick=(ev)=>{
                catan.vals.pop()
                console.log(catan.vals)
                catan.plot()
            }
        }
    })
    catan.plot()
}