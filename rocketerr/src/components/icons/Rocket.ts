import { gsap } from "gsap";
import { random } from "gsap/gsap-core";

export interface Coordinates {
  x: number;
  y: number;
}

export class Rocket {

  private static SPEED_FACTOR = 0.05;
  private pos: Coordinates = {x: 0, y: 0};
  private lastDelta: Coordinates = {x: 0, y: 0};
  private dt: number = 0.05;
  private readonly rocket: HTMLElement|null;
  private readonly trails: HTMLElement|null;
  private readonly flame: HTMLElement|null;
  private readonly sparks: HTMLCollectionOf<Element>;

  private readonly xSet: Function;
  private readonly ySet: Function;

  constructor(){
    this.sparks = document.getElementsByClassName("spark");
    this.rocket = document.getElementById("rocketgroup");
    this.trails = document.getElementById("trail");
    this.flame = document.getElementById("flame");
    this.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    gsap.set("#rocketgroup", {xPercent: -50, yPercent: -1});

    this.xSet = gsap.quickSetter(this.rocket, "x", "px");
    this.ySet = gsap.quickSetter(this.rocket, "y", "px");
  }

  setPosition(target: Coordinates){
    this.dt = 1.0 - Math.pow(1.0 - Rocket.SPEED_FACTOR, gsap.ticker.deltaRatio());
    const delta = this.getDelta(target);
    this.pos.x += delta.x * this.dt;
    this.pos.y += delta.y * this.dt;
    this.xSet(this.pos.x);
    this.ySet(this.pos.y);
  }

  render(target: Coordinates){
    const delta = this.getDelta(target);
    this.renderRocket(delta);
    this.renderTrails(delta);
    this.renderFlame(delta);
    this.renderSparks()
  }

  renderRocket(delta: Coordinates){
    this.xSet(this.pos.x);
    this.ySet(this.pos.y);
    if(Math.abs(this.lastDelta.x - delta.x) > 0.01 || Math.abs(this.lastDelta.y - delta.y) > 0.01) {
      const rotation = Math.atan2(delta.x, -delta.y);
      gsap.set(this.rocket, { rotation: rotation + "_rad" });
      this.lastDelta.x = delta.x;
      this.lastDelta.y = delta.y;
    }
  }

  renderFlame(delta: Coordinates){
    const flame_scale = (Math.log(Math.abs(delta.x) * this.dt) < 0.5) ? 1 : Math.log(Math.abs(delta.x) * this.dt);
    gsap.to(this.flame, {scaleY: flame_scale, duration: 0.5})
  }

  renderTrails(delta: Coordinates){
    const trail_paths = this.trails?.children
    const trail_scale = (Math.log(Math.abs(delta.x) * this.dt) < 0.3) ? 0.3 : Math.log(Math.abs(delta.x) * this.dt);
    if(trail_paths){
      for(let i = 0; trail_paths.length > i; i++){
        gsap.to(trail_paths[i], {scaleY: trail_scale, duration: 0.5});
      }
    }
  }

  renderSparks(){
    const index = random(0, this.sparks.length -1, 1);
    gsap.to(this.sparks[index], {
      scale: random(0, 1, 1),
      autoAlpha: 1,
      duration: 0.3,
    });
  }

  getDelta(target: Coordinates){
    const x = target.x - this.pos.x;
    const y = target.y - this.pos.y;
    return {x, y};
  }
}