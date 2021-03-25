class throw {
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: pointB,
            stiffness: 0.04,
            length: 10
        }
    
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }
attach(body){
    this.stone.bodyA=body
}

    fly(){
        this.stone.bodyA = null;
    }

}