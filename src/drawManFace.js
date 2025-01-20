function drawManFace() {
    console.log("hello");
    gl.clearColor(0.7, 0.7, 0.7, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    const baseColor = [0.0, 0.0, 0.0, 1.0];
    const eyeWhites = [1.0, 1.0, 1.0, 1.0];
    const size = 30;
    const centerX = 0.0
    const centerY = 0.0;

    let centerSquare = new Point();
    centerSquare.position = [centerX, -0.8];
    centerSquare.color = baseColor;
    centerSquare.size = size;
    g_shapesList.push(centerSquare);

    let LTriangle1 = new Triangle();
    LTriangle1.position = [-0.675, -0.875];
    LTriangle1.color = baseColor;
    LTriangle1.size = size;
    LTriangle1.rotation = Math.PI/2;
    g_shapesList.push(LTriangle1);

    let RTriangle1 = new Triangle();
    RTriangle1.position = [0.375, -0.725];
    RTriangle1.color = baseColor;
    RTriangle1.size = size;
    RTriangle1.rotation = -Math.PI/2;
    g_shapesList.push(RTriangle1);

    let RTriangle2 = new Triangle();
    RTriangle2.position = [0.525, -0.725];
    RTriangle2.color = baseColor;
    RTriangle2.size = size;
    RTriangle2.rotation = Math.PI/2;
    g_shapesList.push(RTriangle2);

    let RTriangle3 = new Triangle();
    RTriangle3.position = [0.525, -0.575];
    RTriangle3.color = baseColor;
    RTriangle3.size = size;
    RTriangle3.rotation = -Math.PI/2;
    g_shapesList.push(RTriangle3);

    let RTriangle4 = new Triangle();
    RTriangle4.position = [0.675, -0.575];
    RTriangle4.color = baseColor;
    RTriangle4.size = size;
    RTriangle4.rotation = Math.PI/2;
    g_shapesList.push(RTriangle4);

    let dimpleS = new Point();
    dimpleS.position = [0.85, -0.5];
    dimpleS.color = baseColor;
    dimpleS.size = 25;
    g_shapesList.push(dimpleS);

    let dimpleT = new Triangle();
    dimpleT.position = [0.91, -0.43675];
    dimpleT.color = baseColor;
    dimpleT.size = 25;
    dimpleT.rotation = Math.PI/2;
    g_shapesList.push(dimpleT);

    let dimpleT2 = new Triangle();
    dimpleT2.position = [0.785, -0.56325];
    dimpleT2.color = baseColor;
    dimpleT2.size = 25;
    dimpleT2.rotation = -Math.PI/2;
    g_shapesList.push(dimpleT2);



    let LSquare1 = new Point();
    LSquare1.position = [-0.15, -0.8];
    LSquare1.color = baseColor;
    LSquare1.size = size;
    g_shapesList.push(LSquare1);

    let LSquare2 = new Point();
    LSquare2.position = [-0.3, -0.8];
    LSquare2.color = baseColor;
    LSquare2.size = size;
    g_shapesList.push(LSquare2);

    let LSquare3 = new Point();
    LSquare3.position = [-0.45, -0.8];
    LSquare3.color = baseColor;
    LSquare3.size = size;
    g_shapesList.push(LSquare3);

    let LSquare4 = new Point();
    LSquare4.position = [-0.6, -0.8];
    LSquare4.color = baseColor;
    LSquare4.size = size;
    g_shapesList.push(LSquare4);

    let RSquare1 = new Point();
    RSquare1.position = [.15, -0.8];
    RSquare1.color = baseColor;
    RSquare1.size = size;
    g_shapesList.push(RSquare1);

    let RSquare2 = new Point();
    RSquare2.position = [0.3, -0.8];
    RSquare2.color = baseColor;
    RSquare2.size = size;
    g_shapesList.push(RSquare2);



    let LEBS1 = new Point();
    LEBS1.position = [-0.70, .8];
    LEBS1.color = baseColor;
    LEBS1.size = size;
    g_shapesList.push(LEBS1);

    let LEBS2 = new Point();
    LEBS2.position = [-0.55, .8];
    LEBS2.color = baseColor;
    LEBS2.size = size;
    g_shapesList.push(LEBS2);

    let LEBS3 = new Point();
    LEBS3.position = [-0.40, .8];
    LEBS3.color = baseColor;
    LEBS3.size = size;
    g_shapesList.push(LEBS3);

    let LEBT3 = new Triangle();
    LEBT3.position = [-0.325, .875];
    LEBT3.color = baseColor;
    LEBT3.size = size;
    LEBT3.rotation = -Math.PI/2;
    g_shapesList.push(LEBT3);

    let LEBT1 = new Triangle();
    LEBT1.position = [-0.775, 0.725];
    LEBT1.color = baseColor;
    LEBT1.size = size;
    LEBT1.rotation = Math.PI/2;
    g_shapesList.push(LEBT1);

    let LEBT2 = new Triangle();
    LEBT2.position = [-0.925, 0.725];
    LEBT2.color = baseColor;
    LEBT2.size = size;
    LEBT2.rotation = -Math.PI/2;
    g_shapesList.push(LEBT2);



    let REBT1 = new Triangle();
    REBT1.position = [0.325, .725];
    REBT1.color = baseColor;
    REBT1.size = size;
    REBT1.rotation = Math.PI/2;
    g_shapesList.push(REBT1);

    let REBT2 = new Triangle();
    REBT2.position = [0.175, .725];
    REBT2.color = baseColor;
    REBT2.size = size;
    REBT2.rotation = -Math.PI/2;
    g_shapesList.push(REBT2);

    let REBT3 = new Triangle();
    REBT3.position = [0.775, .725];
    REBT3.color = baseColor;
    REBT3.size = size;
    REBT3.rotation = 0;
    g_shapesList.push(REBT3);

    let REBS2 = new Point();
    REBS2.position = [0.40, .8];
    REBS2.color = baseColor;
    REBS2.size = size;
    g_shapesList.push(REBS2);

    let REBS3 = new Point();
    REBS3.position = [0.55, .8];
    REBS3.color = baseColor;
    REBS3.size = size;
    g_shapesList.push(REBS3);

    let REBS4 = new Point();
    REBS4.position = [0.70, .8];
    REBS4.color = baseColor;
    REBS4.size = size;
    g_shapesList.push(REBS4);

    
    let LES1 = new Point();
    LES1.position = [-0.7, 0.35];
    LES1.color = baseColor;
    LES1.size = size;
    g_shapesList.push(LES1);

    let LES2 = new Point();
    LES2.position = [-0.55, 0.35];
    LES2.color = baseColor;
    LES2.size = size;
    g_shapesList.push(LES2);

    let LES3 = new Point();
    LES3.position = [-0.4, 0.35];
    LES3.color = baseColor;
    LES3.size = size;
    g_shapesList.push(LES3);

    let LES4 = new Point();
    LES4.position = [-0.7, 0.2];
    LES4.color = baseColor;
    LES4.size = size;
    g_shapesList.push(LES4);

    let LES5 = new Point();
    LES5.position = [-0.55, 0.2];
    LES5.color = baseColor;
    LES5.size = size;
    g_shapesList.push(LES5);

    let LES6 = new Point();
    LES6.position = [-0.4, 0.2];
    LES6.color = baseColor;
    LES6.size = size;
    g_shapesList.push(LES6);


    let RES1 = new Point();
    RES1.position = [0.7, 0.35];
    RES1.color = baseColor;
    RES1.size = size;
    g_shapesList.push(RES1);

    let RES2 = new Point();
    RES2.position = [0.55, 0.35];
    RES2.color = baseColor;
    RES2.size = size;
    g_shapesList.push(RES2);

    let RES3 = new Point();
    RES3.position = [0.4, 0.35];
    RES3.color = baseColor;
    RES3.size = size;
    g_shapesList.push(RES3);

    let RES4 = new Point();
    RES4.position = [0.7, 0.2];
    RES4.color = baseColor;
    RES4.size = size;
    g_shapesList.push(RES4);

    let RES5 = new Point();
    RES5.position = [0.55, 0.2];
    RES5.color = baseColor;
    RES5.size = size;
    g_shapesList.push(RES5);

    let RES6 = new Point();
    RES6.position = [0.4, 0.2];
    RES6.color = baseColor;
    RES6.size = size;
    g_shapesList.push(RES6);

    let RES7 = new Point();
    RES7.position = [0.25, 0.2];
    RES7.color = eyeWhites;
    RES7.size = size;
    g_shapesList.push(RES7);

    let RET1 = new Triangle();
    RET1.position = [0.325, 0.275];
    RET1.color = eyeWhites;
    RET1.size = size;
    RET1.rotation = Math.PI/2;
    g_shapesList.push(RET1);

    let RET2 = new Triangle();
    RET2.position = [0.775, 0.275];
    RET2.color = eyeWhites;
    RET2.size = size;
    RET2.rotation = -Math.PI/2;
    g_shapesList.push(RET2);

    let RET3 = new Triangle();
    RET3.position = [0.775, 0.275];
    RET3.color = eyeWhites;
    RET3.size = size;
    RET3.rotation = 0;
    g_shapesList.push(RET3);

    let LET1 = new Triangle();
    LET1.position = [-0.325, 0.275];
    LET1.color = eyeWhites;
    LET1.size = size;
    LET1.rotation = -Math.PI/2;
    g_shapesList.push(LET1);

    let LET2 = new Triangle();
    LET2.position = [-0.775, 0.275];
    LET2.color = eyeWhites;
    LET2.size = size;
    LET2.rotation = Math.PI/2;
    g_shapesList.push(LET2);

    let LET3 = new Triangle();
    LET3.position = [-0.325, 0.275];
    LET3.color = eyeWhites;
    LET3.size = size;
    LET3.rotation = 0;
    g_shapesList.push(LET3);

    let LET4 = new Triangle();
    LET4.position = [-0.775, 0.275];
    LET4.color = eyeWhites;
    LET4.size = size;
    LET4.rotation = -2*Math.PI/2;
    g_shapesList.push(LET4);


    
    

    renderAllShapes();
}

document.getElementById('drawManFace').onclick = drawManFace;
