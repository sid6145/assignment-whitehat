const svg = document.querySelector("svg");

const svgns = "http://www.w3.org/2000/svg";

const rectangles = (height, width, num) => {

let newRect = document.createElementNS(svgns, "rect");
var x = 10, y = 10, h = height, w = width
for(let i = 0; i < num; i ++){
    let newRect = document.createElementNS(svgns, "rect");

    newRect.setAttribute("x", x);
    newRect.setAttribute("y", y);
    newRect.setAttribute("width", w);
    newRect.setAttribute("height", h);
    newRect.setAttribute("fill", `rgba(128, 0, 128, 0.2)`);

    x = x + 10
    y = y + 10
    h = h - 20
    w = w - 20
    svg.appendChild(newRect);
}

}


rectangles(250, 250, 5)