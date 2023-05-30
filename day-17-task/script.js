
var value = document.querySelector('.value'); 

setTimeout(()=>{
    value.innerText = '10';
    setTimeout(()=>{
        value.innerText = '09';
        setTimeout(()=>{
            value.innerText = '08'
            setTimeout(()=>{
                value.innerText = '07';
                setTimeout(()=>{
                    value.innerText = '06';
                    setTimeout(()=>{
                        value.innerText = '05';
                        setTimeout(()=>{
                            value.innerText = '04';
                            setTimeout(()=>{
                                value.innerText = '03';
                                setTimeout(()=>{
                                    value.innerText = '02';
                                    setTimeout(()=>{
                                        value.innerText = '01';
                                        setTimeout(()=>{
                                            value.innerText = 'Happy Indepedance Day';
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)