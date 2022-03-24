controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`bullet`, gun_man, -100, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let gun_man: Sprite = null
scene.setBackgroundColor(7)
gun_man = sprites.create(assets.image`gun man`, SpriteKind.Player)
let soldier = sprites.create(assets.image`soldier`, SpriteKind.Enemy)
controller.moveSprite(gun_man)
