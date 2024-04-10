let body =  document.querySelector('body');
let h1 = document.querySelector('h1');

body.addEventListener('click',(e)=>{
    for(let i = 0; i < 50 ; i++){
        //create spark
        let spark = document.createElement('i');
     
        spark.style.top = (event.clientY - body.offsetTop) + 'px';
        spark.style.left = (event.clientX - body.offsetLeft) + 'px';
        let randomX = (Math.random() - 0.5 ) * window.innerWidth / 1.5;
        let randomY = (Math.random() - 0.5 ) * window.innerHeight / 1.5;
       
       spark.style.setProperty('--randomX',randomX +'px');
       spark.style.setProperty('--randomY',randomY +'px');

       //spark Size

       let randomSize = Math.random() * 30 + 2;

       spark.style.width = randomSize + 'px';
       spark.style.height = randomSize + 'px';

       // duration
       let duration = Math.random()*2 + 0.8;
       spark.style.animation = `animate ${duration}s ease-out forwards`;

       //colors
       let colors = ['#f4034c','#fff','#ffeb3b','#03a9f4','#d35400','#27ae60','#9b59b6','#78e08f','#82ccdd'];
       let randomColor = colors[Math.floor(Math.random()*colors.length)];

       spark.style.background = randomColor;
       h1.style.background = randomColor;
       body.appendChild(spark);
        //remove child
        setTimeout(()=>{
            spark.remove()
        },2000)
    }
})