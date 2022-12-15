console.log(window.innerWidth);


if(window.innerWidth > 800) {
    const api_keys = '132c4819a3edd9d062256ad974f08b29'
    let map = document.getElementsByClassName('map')[0];
    let namess = document.querySelectorAll('.pointer');
    let tdEls = document.querySelectorAll('.cell');
    let box =document.createElement('div');
    map.append(box);
    box.setAttribute('style', `width:100px; height:100px; position:absolute; left:0; top:0; background-color:rgba(0,0,0,0.5); display:none; box-shadow: 0px 0px 20px black`);
    let x, y = 0 ;
    window.addEventListener('mousemove',(e) =>{
        x = e.pageX+10;
        y = e.pageY+20;
        box.style.left=`${x}px`;
        box.style.top=`${y}px`;
    })
    console.log(tdEls);
    tdEls.forEach(e=>{
        e.classList.add('blank');
    })
    namess.forEach(e=>{
        e.classList.remove('blank');
    })
    let blanks = document.querySelectorAll('.blank');
    console.log(blanks);
    
    namess.forEach(e =>{
        e.addEventListener('mouseover',()=>{
            console.log(e.dataset.itemtype);
            city=e.dataset.itemtype
            const apiCall =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_keys}&lang=kr`
            fetch(apiCall).then(function(res){
            return res.json();
            }).then(function(data){
             let weather = data.weather[0];
             let weather1;
             if(weather.main=="Clear"||weather.main=="Clouds"||weather.main=="Rain"||weather.main=="Snow"||weather.main=="Thunderstorm"||weather.main=="drizzle") {
             weather1=weather.main;
             }else {
              weather1 = 'etc';
             }
            box.style.backgroundImage =`url(./src/images/${weather1}.svg)`
            box.style.backgroundColor ='lightblue'
            box.style.display='block'
            })
           
        })
        e.addEventListener('mouseout',()=>{
            box.style.display='none';
        })
    })
    
    blanks.forEach(e=>{
        e.addEventListener("mouseover",()=>{
        box.style.display='none'
    })
    })
    document.getElementsByTagName('body')[0].addEventListener('mouseover',()=>{
        box.style.display='none'
    })
}
