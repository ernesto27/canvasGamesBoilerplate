var spriteObject =
{
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 32,
  sourceHeight: 32,
  width: 32,
  height: 32,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  visible: true,
  
  //Getters
  centerX: function()
  {
    return this.x + (this.width / 2);
  },
  centerY: function()
  {
    return this.y + (this.height / 2);
  },
  halfWidth: function()
  {
    return this.width / 2;
  },
  halfHeight: function()
  {
    return this.height / 2;
  }
};
