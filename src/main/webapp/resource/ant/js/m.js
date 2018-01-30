var $container = document.getElementById("container");
var width = $container.clientWidth, height= $container.clientHeight;

function main(){
    var canvas = document.getElementById("container");
    var ctx = canvas.getContext("2d");
    var gradient = ctx.createLinearGradient(0,0,0, 170);
    gradient.addColorStop(0, 'rgba(255, 231, 220, 1)');
    gradient.addColorStop(1, 'rgba(255, 196, 204, 1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

main();