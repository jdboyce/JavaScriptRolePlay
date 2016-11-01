












(function ()
    {
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
                x: width - 970,
                y: height - 35,
                width: 5,
                height: 5,
                speed: 3,
                velX: 0,
                velY: 0,
                jumping: false,
                grounded: false
            },

    zom = {
        x: 110, //h
        y: 250, //v
        width: 10,
        height: 10,
        zomspeed: 3,
        zomvelX: 0,
        zomvelY: 0,
        zomjumping: false,
        zomgrounded: false
      },

    keys = [],

    

    friction = 0.8,
    gravity = 0.3;




  

// var zombies = [];

var boxes = [];




//***************************************************************************











// DIMENSIONS AND PLATFORMS (X = H, Y = V)

//***************************************************************************



//**************************
// LEFT WALL

boxes.push({
    x: 0,
    y: 0,
    width: 20,
    height: height
});

//**************************




//**************************
// GROUND

boxes.push({
    x: 0,
    y: height - 20,
    width: width,
    height: 50
});

//**************************




//**************************
// RIGHT WALL

boxes.push({
    x: width - 20,
    y: 0,
    width: 50,
    height: height
});

//**************************




//**************************
//PLATFORMS

boxes.push({   // bottom box
    x: 100, //h
    y: 450, //v
    width: 300,
    height: 50
});

boxes.push({   // middle box
    x: 380,
    y: 395,
    width: 400,
    height: 10
});

boxes.push({ // top middle
    x: 90,
    y: 340,
    width: 250,
    height: 10
});

boxes.push({ // top
    x: 400,
    y: 282,
    width: 100,
    height: 20
});


//***************************************************************************










 
// ZOMBIE DEMENSIONS

//***************************************************************************









// zombies.push({   // bottom box
//     x: 110, //h
//     y: 250, //v
//     width: 10,
//     height: 10
//     // speed: 3,
//     // velX: 0,
//     // velY: 0,
//     // grounded: false



// });

// zombies.push({   // middle box
//     x: 180,
//     y: 295,
//     width: 10,
//     height: 10
//     // speed: 3,
//     // velX: 0,
//     // velY: 0,
//     // grounded: false
// });








canvas.width = width;
canvas.height = height;




function update()

        {

 // CHECK KEYS PRESSED

//***************************************************************************
        

        // up arrow or space
        if (keys[38] || keys[32] || keys[87]) {
            
            if (!player.jumping && player.grounded) {
                player.jumping = true;
                player.grounded = false;
                player.velY = -player.speed * 2.5;
            }
        }

          // right arrow
        if (keys[39] || keys[68]) {
          
            if (player.velX < player.speed) {
                player.velX++;
            }
        }


        // left arrow
        if (keys[37] || keys[65]) {
            
            if (player.velX > -player.speed) {
                player.velX--;
            }
        }

        player.velX *= friction;
        player.velY += gravity;



        // player.grounded = false;



//***************************************************************************
        















 // BOXES / PLATFORMS

//***************************************************************************
        

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "gray";
        ctx.beginPath();



        for (var i = 0; i < boxes.length; i++)
            {
                ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
                
                var dir = colCheck(player, boxes[i]);

                if (dir === "l" || dir === "r")
                    {
                        player.velX = 0;
                        player.jumping = false;
                    }

                else if (dir === "b")
                    {
                    player.grounded = true;
                    player.jumping = false;
                    }

                else if (dir === "t")
                    {
                        player.velY *= -1;
                    }

                }










//*************************************************************************









// PLAYER ATTRIBUTES

//*************************************************************************



        if(player.grounded)
        {
            player.velY = 0;
        }
    
        player.x += player.velX;
        player.y += player.velY;

        ctx.fill();
        ctx.fillStyle = "green";
        ctx.fillRect(player.x, player.y, player.width, player.height);



//*************************************************************************









// ZOMBIES

//*************************************************************************

      //   zom = {
      //   x: 110, //h
      //   y: 250, //v
      //   width: 10,
      //   height: 10
      //   speed: 3,
      //   velX: 0,
      //   velY: 0,
      //   jumping: false,
      //   grounded: false
      // };



        ctx.fillStyle = "red";
        ctx.fillRect(zom.x, zom.y, zom.width, zom.height);

        zom.zomgrounded = false;

    for (var i = 0; i < boxes.length; i++)
            {
                ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
                
                var dir = colCheck(zom, boxes[i]);

                if (dir === "l" || dir === "r")
                    {
                        zom.zomvelX = 0;
                        zom.zomjumping = false;
                    }

                else if (dir === "b")
                    {
                    zom.zomgrounded = true;
                    zom.zomjumping = false;
                    }

                else if (dir === "t")
                    {
                        zom.zomvelY *= -1;
                    }




            }


        if(zom.zomgrounded)
        {
            zom.zomvelY = 0;
        }
    
        zom.x += zom.zomvelX;
        zom.y += zom.zomvelY;


        // for (var i = 0; i < zombies.length; i++) 
        // {
        // ctx.fillStyle = "black";
        // ctx.fillRect(zombies[i].x, zombies[i].y, zombies[i].width, zombies[i].height);
        // // player.velX *= friction;
        // // player.velY += gravity;
        // };



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




    // if the x and y vector are less than the half width or half height, then we must be inside the object, causing a collision

    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) 

    {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);

        if (oX >= oY)
        {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } 

        else {
            if (vX > 0) 
            {
                colDir = "l";
                shapeA.x += oX;
            }
            else
            {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;//s
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

