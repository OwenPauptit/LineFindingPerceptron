class Point
{
    constructor(width,height)
    {
        this.x = Math.random()*width;
        this.y = Math.random()*height;
        this.correct = "";
        
        if (M * this.x > this.y)
        {
            this.label = 1;
        }
        else{
            this.label = -1;
        }
    }

    draw(ctx)
    {
        ctx.strokeStyle="black";
        if (this.correct == "true")
        {
            ctx.fillStyle="green";
        }
        else if (this.correct == "false")
        {
            ctx.fillStyle="red";
        }
        else if (this.label == 1)
        {
            ctx.fillStyle="white";
        }
        else
        {
            ctx.fillStyle="black";
        }
        ctx.beginPath();
        ctx.arc(this.x,this.y,4,0,Math.PI*2,true);
        ctx.fill();
        ctx.stroke();

    }
}