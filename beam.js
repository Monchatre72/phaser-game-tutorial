class Beam extends Phaser.GameObjects.Sprite{
  constructor(scene,side){
    if(side=="right"){
    var x=scene.player.x-25;}
    if(side=="left"){
    var x=scene.player.x+24;}


    var y=scene.player.y-15;
  super(scene,x,y,"missile1");
     scene.add.existing(this);

  this.play("beamfire");
  scene.physics.world.enableBody(this);
  this.body.velocity.y=-250;
      scene.projectiles.add(this);
  }


    update(){

      // 3.4 Frustum culling
      if(this.y < 0){
        this.destroy();
      }
    }

  }
