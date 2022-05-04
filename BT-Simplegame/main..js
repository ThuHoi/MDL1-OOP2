class  Hero {
    image
    top
    left
    size
    speed
    constructor(image, top, left, size,speed) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
        this.speed = speed;

    }
 getHeroElement() {
     return '<img width="' + this.size + '"' +
         ' height="' + this.size + '"' +
         ' src="' + this.image + '"' +
         ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
 }
 getMoveRight() {
         this.left += this.speed;
 }
 getMoveLeft() {
         this.left -=  this.speed;
 }
 getMoveDown() {
         this.top +=  this.speed;
 }
getMoveTop() {
        this.top -=  this.speed;
}
}
 let speed1 = +prompt("Nhập tốc độ bạn muốn")
let hero = new Hero('naruto.jpg',10,10,200,speed1 )
