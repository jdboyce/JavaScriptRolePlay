












(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();





// CANVAS

//***************************************************************************


var canvas = document.getElementById("canvas"),

    ctx = canvas.getContext("2d"),
    width = 1000,
    height = 500,
    player = {
                x: width - 983,
                y: height - 15,
                width: 5,
                height: 5,
                speed: 3,
                velX: 0,
                velY: 0,
                jumping: false,
                grounded: false
            },

    keys = [],

    

    friction = 0.8,
    gravity = 0.3;



var zombies = [];

var boxes = [];


//***************************************************************************











// DIMENSIONS AND PLATFORMS (X = H, Y = V)

//***************************************************************************



//**************************
// LEFT WALL

boxes.push({
    x: 0,
    y: 100,
    width: 10,
    height: height
});

//**************************




//**************************
// GROUND

boxes.push({
    x: 0,
    y: height - 2,
    width: width,
    height: 50
});

//**************************




//**************************
// RIGHT WALL

boxes.push({
    x: width - 10,
    y: 0,
    width: 50,
    height: height
});

//**************************




//**************************
//PLATFORMS

boxes.push({   // bottom box
    x: 30, //h
    y: 450, //v
    width: 300,
    height: 50
});

boxes.push({   // middle box
    x: 370,
    y: 400,
    width: 400,
    height: 10
});

boxes.push({ // top middle
    x: 90,
    y: 350,
    width: 250,
    height: 10
});

boxes.push({ // top
    x: 400,
    y: 300,
    width: 400,
    height: 20
});


//***************************************************************************







canvas.width = width;
canvas.height = height;




function update()
        {
        // check keys
        if (keys[38] || keys[32] || keys[87]) {
            // up arrow or space
            if (!player.jumping && player.grounded) {
                player.jumping = true;
                player.grounded = false;
                player.velY = -player.speed * 2;
            }
        }
        if (keys[39] || keys[68]) {
            // right arrow
            if (player.velX < player.speed) {
                player.velX++;
            }
        }
        if (keys[37] || keys[65]) {
            // left arrow
            if (player.velX > -player.speed) {
                player.velX--;
            }
        }




    player.velX *= friction;
    player.velY += gravity;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "gray";
    ctx.beginPath();
    



    player.grounded = false;

    for (var i = 0; i < boxes.length; i++) {
        ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
        
        var dir = colCheck(player, boxes[i]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
    
    if(player.grounded){
         player.velY = 0;
    }
    
    player.x += player.velX;
    player.y += player.velY;









//*************************************************************************

// Player Attributes

    ctx.fill();
    ctx.fillStyle = "green";
    ctx.fillRect(player.x, player.y, player.width, player.height);

//*************************************************************************







    requestAnimationFrame(update);
}

function colCheck(shapeA, shapeB) {



    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),




        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;




    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision

    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) 

    {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;s
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});


window.addEventListener("load", function () {
    update();
});