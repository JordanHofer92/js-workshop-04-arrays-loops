function setup() {
    createCanvas(400, 400)
    background(200)
  }
  
function draw() {
    let x = 5
    let y = 20
    let count = 20
    
    for (let i = 0; i < count; i = i + 1) {
      for (let n = 0; n < count; n++) {

      rect(x, y * i, 10, 10)
      x = x + 20

    }
    x = 5
    y = 20
  }
}
  
  
    // rect(x, 10, 10, 10)
    // x = x + 20
  
    // rect(x, 10, 10, 10)
    // x = x + 20
  
    // rect(x, 10, 10, 10)
    // x = x + 20
  