
var canvas: HTMLCanvasElement | null 
var image: HTMLImageElement | null
var context:CanvasRenderingContext2D | null | undefined
var gameMap: Array<Array<TempProp>>
var gameOver: boolean
var currentShape: Shape
var nextShape: Shape
var score: number
var initialTwoDArr: Array<Array<TempProp>>
var squareCountX:number
var squareCountY:number

const imageSquareSize:number = 24
const size:number = 40
const framePerSecond:number = 24
const gameSpeed:number = 5
const whiteLineThickness:number = 4

interface TempProp {
  imageX: number
  imageY: number
}

interface InitialTwoDArrProp {
  tempArray: TempProp[]
}


class Shape {

  imageX: number
  imageY: number
  template: Array<Array<number>>

  constructor(
    imageX: number,
    imageY: number,
    template: Array<Array<number>>
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
  new Shape(0, 72, [
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

const update = () => {}

const drawBackground = () => {
  if (!canvas) return
  drawRect(0, 0, canvas.width, canvas.height, "#bca0dc")
  for (let i = 0; i < squareCountX + 1; i++) {
    drawRect(size * i - whiteLineThickness, 0, whiteLineThickness, canvas.height, "white")
  }
  for (let i = 0; i < squareCountY + 1; i++) {
    drawRect(0, size * i - whiteLineThickness, canvas.width , whiteLineThickness, "white")
  }
}

const drawSquares = () => {}
const drawCurrentShape = () => {}
const drawNextShape = () => {}
const drawGameOver = () => {}

const draw = () => {
  if (!context || !canvas) return
  context.clearRect(0, 0, canvas.width, canvas.height)
  drawBackground()
  drawSquares()
  drawCurrentShape()
  drawNextShape()
  if (gameOver) {
    drawGameOver()
  }
}


const getRandomShape = (): Shape => {
  return Object.create(shapes[Math.floor(Math.random() * shapes.length)])
}

const reestVars = () => {
  initialTwoDArr = []
  for (let i = 0; i < squareCountY; i++) {
    var temp:TempProp[] = []
    for (let j = 0; j < squareCountX; j++) {
      temp.push({ imageX: -1, imageY: -1})
    }
    initialTwoDArr.push(temp)
  }
  score = 0
  gameOver = false
  currentShape = getRandomShape()
  nextShape = getRandomShape()
  gameMap = initialTwoDArr
}

window.onload = () => {
  canvas  = document.querySelector("#playField")
  image = document.querySelector("#image")
  if (canvas) {
    context = canvas.getContext("2d")
    squareCountX = canvas.width / size
    squareCountY = canvas.height / size
  }
}

const gameLoop = () => {
  setInterval(update, 1000 / gameSpeed)
  setInterval(draw, 1000 / framePerSecond)
}

gameLoop()
