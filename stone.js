class Stone{
	constructor(x,y,width,height)
	{
	var options={
      restitution: 0.8,
	  friction: 0.9,
	  density: 12,
	}
	this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			fill("black");
			rect(0, 0, this.width, this.height);
			pop()
	}

}




