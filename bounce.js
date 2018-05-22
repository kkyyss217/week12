var b;
var balls=[];
var count=20;
var canvas;
var RC;

function Ball(width,height){
    this.width=width;
    this.height=height;
    this.x=parseInt(Math.random() * width);
    this.y=parseInt(Math.random() * height);
    this.radius=5+parseInt(Math.random() * 10);
    this.color="#fff";
    this.x_speed=2+parseInt(Math.random() * 5);
    this.y_speed=this.x_speed;
    
    this.update=function(){
        if(this.x>(this.width-this.radius))
            this.x_speed=this.x_speed * -1;
        if(this.x<this.radius)
            this.x_speed=this.x_speed * -1;
        this.x+=this.x_speed;

        if(this.y>(this.height-this.radius))
            this.y_speed=this.y_speed * -1;
        if(this.y<this.radius)
            this.y_speed=this.y_speed * -1;
        this.y+=this.y_speed;
    }
}


window.onload=function(){
    canvas= document.getElementById("mycanvas");
    for(x=0; x<10; x++){//x<count
        balls.push(new Ball(canvas.width,canvas.height));
    }
    setTimeout(movie,100/3)
}



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function setRandomColor() {
    $("#Ball").css("background-color", getRandomColor());
  }

function movie(){
    let ctx=canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    

    for(x=0; x<10; x++){ //x<balls[x].length
        ctx.beginPath();
        ctx.arc(balls[x].x,balls[x].y,balls[x].radius,0,2*Math.PI); //Math.PI = 반원
        ctx.stroke();
        ctx.fillstyle=balls[x].color;
        ctx.fill();
        balls[x].update();
    }
    mycanvas.addEventListener("mousemove",function(){
        RC = 'rgb(' + (Math.floor(Math.random() * 256)) 
            + ',' + (Math.floor(Math.random() * 256)) 
            + ',' + (Math.floor(Math.random() * 256)) + ')';
        for(x=0; x<10; x++){
            balls[x].color=RC;
            ctx.fillstyle=balls[x].color;   
            ctx.fill();  
        }
    });
    setTimeout(movie,100/3)
}