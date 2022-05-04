function start() {
    if (hero.left < window.innerWidth && hero.top == 10 ) {
        hero.getMoveRight();
    }
    if (hero.left==1210 ) {hero.getMoveDown()}
    if (hero.top == 610) { hero.getMoveLeft()}
    if (hero.left == 10) {hero.getMoveTop()}
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
}

start();
