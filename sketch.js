var player, playerImage, background1, background1Image
var invGround;
var playerClimb

function preload() {
    playerWalk = loadAnimation("PNG/Rogue/Walk/walk1.png",
        "PNG/Rogue/Walk/walk2.png",
        "PNG/Rogue/Walk/walk3.png",
        "PNG/Rogue/Walk/walk4.png", "PNG/Rogue/Walk/walk5.png", "PNG/Rogue/Walk/walk5.png")

    background1Image = loadImage("PNG/City2.png")
    playerClimb = loadAnimation("PNG/Rogue/Climb/climb1.png")
}

function setup() {
    createCanvas(800, 500);

    background1 = createSprite(400, 50)
    background1.addImage(background1Image)
    background1.scale = 1

    invGround = createSprite(400, 450, 800, 10)
    invGround.visible = false

    player = createSprite(80, 350, 50, 50);
    player.addAnimation("walk", playerWalk)
    player.addAnimation("climb", playerClimb)
    player.scale = 1.5
        //player.debug = true
    player.setCollider("circle", -20, 20, 30)
    background1.velocityX = -2
}



function draw() {
    background("lightBlue")
        //jump
    if (keyDown("space")) {
        player.velocityY = -20
        player.changeAnimation("climb")

    } else {
        player.changeAnimation("walk")

    }
    // gravity
    player.velocityY += 0.8

    player.collide(invGround)
        // scroll background
    if (background1.x < 100) {
        background1.x = 400
    }

    drawSprites();
}