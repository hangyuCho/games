
var canvas: HTMLCanvasElement | null = document.querySelector("#playField")
var image: HTMLImageElement | null = document.querySelector("#image")
var context:CanvasRenderingContext2D | null | undefined = canvas?.getContext("2d")
var imageSquareSize:number = 24
var size:number = 40
var framePerSecond:number = 24
var gameSpeed:number = 5

class Block {

  imageX: number
  imageY: number
  template: any[]

  constructor(
    imageX: number,
    imageY: number,
    template: any[]
  ) {
    this.imageX = imageX
    this.imageY = imageY
    this.template = template

    const clickButton = () => {}
    const clickLeft = () => {}
    const clickRight = () => {}
    const moveLeft = () => {}
    const moveRight = () => {}
    const moveButton = () => {}
    const changeRotation =() => {}

  }

}

const shapes = [
  new Block(0, 72, [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1]
  ]),
]

const drawRect = (
  x: number, 
  y: number, 
  width: number, 
  height: number, 
  color: string | CanvasGradient | CanvasPattern
) => {
  if (!context) return
  context.fillStyle = color
  context.fillRect(x, y, width, height)
}

const gameLoop = () => {
  setInterval(update, 1000 / gameSpeed)
  setInterval(draw, 1000 / framePerSecond)
}

const update = () => {}

const drawBackground = () => {
  if (!canvas) return
  drawRect(0, 0, canvas.width, canvas.height, "#bca0dc")
}

const draw = () => {
  if (!context || !canvas) return
  context.clearRect(0, 0, canvas.width, canvas.height)
  drawBackground()
}

window.onload = () => {
  canvas  = document.querySelector("#playField")
  image = document.querySelector("#image")
  context = canvas?.getContext("2d")
}
gameLoop()
