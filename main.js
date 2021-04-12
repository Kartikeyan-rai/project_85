var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rover_height =70;
var rover_width = 120;
var nasa_img=["Rd4458874d9785db83ae5062a8686f223.jfif"];
random_number=Math.floor(Math.random()*4);console.log(random_number);
var background_img = nasa_img
var car_img = "pixlr-bg-result (1).png";
var car_img1 = "pixlr-bg-result.png";
var car_x = 10;
var car_y = 10;
var car1_x = 10;
var car1_y = 100;
var win = win()  
function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground;
    background_imgtag.src = background_img;
    car_imgtag = new Image();
    car_imgtag1 = new Image();
    car_imgtag.onload = uploadrover;
    car_imgtag1.onload = uploadrover1;
    car_imgtag.src = car_img;
    car_imgtag1.src = car_img1;
}
function uploadbackground() { ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height); }
function uploadrover() { ctx.drawImage(car_imgtag, car_x, car_y, rover_width, rover_height); }
function uploadrover1() { ctx.drawImage(car_imgtag1, car1_x, car1_y, rover_width, rover_height); }
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{var keypress=e.keyCode;
    if (keypress=='38'){up();console.log(keypress);console.log("up")};
    if (keypress=='40'){down();console.log(keypress);console.log("down")};
    if (keypress=='37'){left();console.log(keypress);console.log("left")}
    if (keypress=='39'){right();console.log(keypress);console.log("right")}
    if (keypress=='87'){up1();console.log(keypress);console.log("up1")}
    if (keypress=='65'){left1();console.log(keypress);console.log("left1")}
    if (keypress=='83'){down1();console.log(keypress);console.log("down1")}
    if (keypress=='68'){right1();console.log(keypress);console.log("right1")}
}
function up()
{
    if(car_y>=0){car_y=car_y-10 ;uploadbackground(); uploadrover(); }
}
function down()
{
    if(car_y<=500){car_y=car_y+10 ;uploadbackground(); uploadrover(); }
}
function left()
{
    if(car_x>=0){car_x=car_x-10 ;uploadbackground(); uploadrover(); }
}
function right()
{
    if(car_x<=800){car_x=car_x+10 ;uploadbackground(); uploadrover(); }
}
function up1()
{
    if(car1_y>=0){car1_y=car1_y-10 ;uploadbackground(); uploadrover1(); }
}
function down1()
{
    if(car1_y<=500){car1_y=car1_y+10 ;uploadbackground(); uploadrover1(); }
}
function left1()
{
    if(car1_x>=0){car1_x=car1_x-10 ;uploadbackground(); uploadrover1(); }
}
function right1()
{
    if(car1_x<=800){car1_x=car1_x+10 ;uploadbackground(); uploadrover1(); }
}
function win()
{
    if(car_x > 800 )
    {console.log("Lamborgini Won")
    document.getElementById("game_status").innerHTML="Player 1 Won!!"}
}
function win1()
{
    if(car1_x > 800 )
    {console.log("Bugtti Won")
    document.getElementById("game_status").innerHTML="Player 2 Won!!"}

}