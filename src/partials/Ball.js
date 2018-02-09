import { SVG_NS } from '../settings';
export default class Ball {
  constructor(radius, boardWidth, boardHeight, x, y) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.x = x;
    this.y = y;
    this.direction = 1;

    this.reset();
  }

  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;

    this.vy = 0;
    // a number between -5 and 5, based on this.vy
    // this guarantees that vy is large, vx is small (vice versa)
    while( this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  render(svg, player1, player2){
      //draw ball
    let circle = document.createElementNS(SVG_NS, 'circle');
    circle.setAttributeNS(null, 'r', this.radius),
    circle.setAttributeNS(null, 'fill', 'white'),
    circle.setAttributeNS(null, 'cx', (this.boardWidth/2)),
    circle.setAttributeNS(null, 'cy', (this.boardHeight/2));
    svg.appendChild(circle);
  }

}