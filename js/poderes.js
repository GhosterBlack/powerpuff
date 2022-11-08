
var visses= [
    [
        {height: "0px"},
        { height: "50px"}
    ],
    [
        {height: "0px"},
        {height: "100px"}
    ],
    [
        {height: "0px", marginTop: "0px"},
        {height: "250px", marginTop: "-125px"}
    ],
    [ // 3
        {transform: "rotate(0deg)", color: "black"},
        {transform: "rotate(90deg)", color: "white"}
    ],
    [ // 4
        {transform: "rotate(0deg)"},
        {transform: "rotate(360deg)"},
        {transform: "rotate(0deg)"},
        {transform: "rotate(360deg)"},
        {transform: "rotate(0deg)"},
        {transform: "rotate(360deg)"}
    ],
    [ // 5
        {transform: "rotate(-90deg)", color: "black"},
        {transform: "rotate(180deg)", color: "white"}
    ],
    [ // 6
        {marginTop: "100px"},
        {marginTop: "-100px"}
    ],
    [// 7
        {height: "250px"},
        {height: "200px"}
    ],
    [ // 8
        {transform: "rotate(-90deg)", color: "red"},
        {transform: "rotate(180deg)", color: "yellow"}
    ],
]
var Basico = {
    damage: 20,
    distancia: 3,
    tipo: 0,
    
}
var poderes = [
    { //0
        nombre: "Golpe protagonista",
        damage: 50,
        distancia: 6,   
        tipo: 0,
        count: 3,
        estado: {atq: 1.3, timer: 3},
        tele: 1,

    },
    { //1
        nombre: "Patada de aire",
        damage: 60,
        distancia: 6,
        count: 3,
        efecto: {vel: 0.7, timer: 1.5},
        tipo: 1,
        tele: 4,
        anim: "<div style='color: white;' class='medialuna'></div>",
        vis: visses[0],
    },
    { //2
        nombre: "Voy por ti",
        damage: 50,
        distancia: 7,
        count: 3,
        estado: {poderes: [45, -1], timer: 1.2},
        //efecto: {vel: 0.1, timer: 2},
        tipo: 1,
        tele: 1,
        trans: 1,
        trapX: 30,
        distance: 3,
    },
    { //3
        nombre: "Estoy aqui...",
        damage: 40,
        distancia: 6,
        tipo: 10,
        //anim: "<div style='background-color: rgba(10, 10, 10, 0.651); width: 50px; height: 50px; margin-top: 100px'></div>",
        anim: "<img src='img/objs/sombra.png' style='height: 20px; margin-top: 100px; width: 10px'>",
        vis: visses[0],
        class: 1,
        count: 4,
        efecto: {vel: 0.5, def:0.5, timer: 0.7},
        tele: 2,
        x: -10,
        inicio: {
            damage: 40,
            distancia: -4,
            tipo: 10,
            anim: "<img src='img/objs/sombra.png' style='height: 20px; margin-top: 100px; width: 10px'>",
            vis: visses[0],
            class: 1,
            count: 4,
            efecto: {vel: 0.5, def:0.5, timer: 0.7},
            trans: 1
        }
    },
    { //4
        nombre: "Rotacion",
        damage: 70,
        distancia: 6,
        tipo: 8,
        tele: 1,
        count: 9,
        efecto: {def: 0.75, timer: 10},
        anim: "<img src='img/sprite2/especial.png' style='height: 100px'>",
        class: 2,
        transis: visses[4],
        stund: 0.8
    },
    { //5
        nombre: "Mordisco",
        damage: 30,
        distancia: 4,
        tipo: 0,
        count: 2,
        estado: {crit: 1.5, timer: 3},
        stund: 1.2,
        anim: "<div class='medialunan' style='color: purple'></div>",
        vis: visses[0]
    },
    { //6
        nombre: "Hiperaton",
        damage: 40,
        distancia: 8,
        tipo: 13,
        combo: 2,
        efecto: {vel: 0.7, timer: 1.4},
        robo: 50,
        anim: "<img src='img/sprite3/basico.png'>",
        vis: visses[1],
        boom: {
            damage: 0,
            distancia: 1,
            tiempo: 30,
            anim: "<img src='img/sprite3.png' style='height: 70%'>",
            vis: visses[1],
            block: {
                damage: 20,
                distancia: 2,
                efecto: {vel: 0.7, timer: 1.4},
                anim: "<img src='img/sprite3/basico.png'>",
                vis: visses[1],
                tipo: 8
            },
            x: -1
        }
    },
    { // 7
        nombre: "Hogro",
        damage: 60,
        distancia: 7,
        tipo: 13,
        combo: 3,
        anim: "<img src='img/sprite1/especial.png'>",
        vis: visses[1],
        distance: 2,
        trapX: 20,
        boom: {
            damage: 0,
            distancia: 1,
            tiempo: 40,
            anim: "<img src='img/sprite1.png' style='height: 70%'>",
            vis: visses[1],
            efecto: {vel: 0.75, timer: 3},
            stund: 2,
            distance: 2,
            trapX: 20,
        }
    },
    { // 8
        nombre: "Cuidado con las agujas",
        damage: 65,
        distancia: 4,
        tipo: 15,
        efecto: {obj: 0},
        count: 3,
        anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px'></div>",
        vis: visses[1],
        class: 2,
        transis: visses[3],
        x: 3,
        block: {
            damage: 95,
            distancia: -3,
            tipo: 9,
            efecto: {atq: 0.5, timer: 10},
            anim: "<img src='img/objs/aguja.png' style=' filter: drop-shadow(2px 4px 6px red);'>",
            vis: [{width: "0px"}, {width: "100px"}],
            trans: 1,
        }
    },
    { // 9
        nombre: "¿Estas bien?",
        damage: 50,
        distancia: 8,
        tipo: 10,
        count: 2,
        efecto: {res: 0.75, vel:0.3, timer: 1.3},
        anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px black; color: black'></div>",
        vis: visses[1],
        raf: true,
        res: true
    },
    {// 10
        nombre: "¿Hay alguien ahi?",
        damage: 60,
        distancia: 9,
        tipo: 3,
        count: 2,
        anim: "<div style='background-color: rgba(195, 207, 19, 0.438);' class='circle'></div>",
        vis: visses[0],
        estado: {regen: 2, timer: 8},
        robo: 30,
        raf: true,
        res: true,
        
    },
    {// 11
        nombre: "AAAAHHHHHH!!!!",
        damage: 20,
        distancia: 7,
        tipo: 7,
        anim: "<div style='color: yellow;' class='medialuna'></div>",
        vis: visses[0],
        count: 1,
        boom: true,
        bomba: {
            damage: 40,
            distancia: 8,
            anim: "<div style='color: yellow; width: 100px' class='medialuna'></div>",
            vis: visses[1],
            tipo: 7,
            boom: true,
            bomba: {
                damage: 65,
                distancia: 8,
                anim: "<div style='color: yellow; width: 250px' class='medialuna'></div>",
                vis: visses[2],
                estado: {atq: 2.5, timer: 1.2},
                efecto: {atq: 0.75, def: 0.5, timer: 1.2},
                tipo: 7,
                class: 2,
                transis: visses[4],
                trans: 3
            },
            class: 2,
            transis: visses[4]
        },
        class: 2,
        transis: visses[4]
    },
    {// 12
        nombre: "Me gustan los abrazos",
        damage: 50,
        distancia: 6,
        tipo: 12,
        count: 3,
        efecto: {vel: 0.75, atq: 0.75},
        tele: 1
    },
    {// 13
        nombre: "¡DANZA DE ESPADAS!",
        damage: 60,
        distancia: -5,
        tipo: 0,
        count: 12,
        estado: {estado: 3, tiempo: 20},
        tele: 4,
        anim: "<img src='img/espada.png' style='height: 100px'>",
        vis: visses[0],
        block: true,
        bomba: {
            damage: 50,
            distancia: 10,
            tipo: 0,
            efecto: {vel: 0.7, vat: 0.7, timer: 1},
            anim: "<img src='img/espada.png' style='height: 100px'>",
            vis: visses[0],
            trans: 5
        },
    },
    {// 14
        nombre: "¡A donde vas!",
        damage: 70,
        distancia: 6,
        tipo: 8,
        count: 2,
        res: true,
        estado: {atq: 1.5, timer: 6, regen: 1.5},
        //anim: "<div style='background-color:rgba(180, 168, 6, 0.8); border: solid 1px red; width: 50px; height: 50px; margin-top: 100px'></div>",
        anim: "<div style='color: yellow; margin-top: 100px' class='medialuna'></div>",
        vis: visses[1], 
        class: 1,
        trans: 3
    },
    { // 15
        nombre: "Prudencia",
        damage: 0,
        distancia: -4,
        tipo: 0,
        count: 6,
        estado: {vat: 2, timer: 5, visible: 0.9},
        efecto: {vel: 0.1, timer: 0.4},
        tele: 1,
        distance: 2,
        trapX: 50,
        trapY: 15,
        vel: 100,
        mana: 50

    },
    { // 16
        nombre: "Super disparo",
        damage: 10,
        distancia: 8,
        tipo: 9,
        count: 4,
        raf: true,
        efecto: {def: 0.5, res: 0.5, timer: 4},
        anim: "<img src='img/objs/bala.png' style='height:20px'>",
        vis: visses[0],
        mana: 80,
        carga: 0.5,
        rapido: "0,4",
        x: 2,
        mana: 10
    },
    { // 17
        nombre: "Daga brutal",
        damage: 55,
        distancia: 5,
        tipo: 9,
        count: 6,
        efecto: {def: 0.75, timer: 4},
        estado: {timer: 4, vat: 2},
        anim: "<img src='img/objs/daga.png'>",
        vis: visses[0],
        class: 2,
        transis: visses[4],
        bomba: {
            damage: 40,
            distancia: -5,
            tipo: 9,
            robo: 50,
            anim: "<img src='img/objs/daga.png'>",
            vis: visses[0],
            class: 2,
            transis: visses[4],
        }
    },
    { // 18
        nombre: "Paso espada",
        damage: 35,
        distancia: 5,
        tipo: 0,
        count: 10,
        estado: {estado: 3, crit: 1.5, tiempo: 6, timer: 6},
        tele: 1,
        anim: "<div style='background-color: transparent;' class='medialuna'></div>",
        vis: visses[1],
        class: 2,
        transis: visses[5]
    },
    { // 19
        damage: 0,
        distancia: 1,
        tipo: 0
    },
    { // 20
        nombre: "¡Alejate!",
        damage: 40,
        distancia: 7,
        tipo: 9,
        robo: 70,
        anim: "<img src='img/objs/aguja.png' style='margin-top: 25px; filter: drop-shadow(2px 4px 6px violet)'>",
        vis: [{width: "0px"}, {width: "100px"}],
        count: 4,
        distance: 1,
        trapX: 200

    },
    { // 21
        nombre: "¡Te lo advierto!",
        damage: 10,
        rapido: 10,
        x: -2,
        tipo: 9,
        anim: "<img src='img/objs/aguja.png' style='margin-top: 25px; filter: drop-shadow(2px 4px 6px violet)'>",
        vis: [{width: "0px"}, {width: "100px"}],
        distancia: 10,
        count: 13,
        vel: 80,
        efecto: {vel: 0.8}
    },
    { // 22
        nombre: "¡Te arrepentiras!",
        tipo: 10,
        damage: 80,
        distancia: 10,
        rapido: 3,
        x: -3,
        estado: {res: 4, def: 4, timer: 4},
        count: 15,
        anim: "<img src='img/objs/fantasma.png'>",
        vis: visses[2]
    },
    { // 23
        nombre: "Te hare temblar",
        tipo: 8,
        damage: 60,
        distancia: 5,
        count: 8,
        efecto: {vel: 0.5, vat: 0.5, timer: 10},
        bomba: {
            tipo: 8,
            damage: 40,
            distancia: 5,
            efecto: {vel: 0.75, vat: 0.75},
            anim: "<div style='color: yellow; margin-top: 100px' class='medialuna'></div>",
            vis: visses[0], 
        },
        anim: "<div style='color: yellow; margin-top: 100px' class='medialuna'></div>",
        vis: visses[0], 
    },
    { // 24
        nombre: "Espada santa",
        tipo: 9,
        damage: 80,
        distancia: 5,
        count: 15,
        bomba: {
            tipo: 9,
            damage: 60,
            distancia: -4,
            esfecto: {def: 0.75, res: 0.75},
            anim: "<div style='background-color: transparent;' class='medialuna'></div>",
            vis: visses[1],
            class: 2,
            transis: visses[5],
            raf: true
        },
        anim: "<div style='background-color: transparent;' class='luna'></div>",
        vis: visses[1],
        class: 2,
        transis: visses[5],
        tele: 1
    },
    { // 25
        nombre: "Tambores",
        tipo: 7,
        damage: 0,
        distancia: 3,
        count: 15,
        anim: "<div style='color: white; margin-top: 100px' class='medialuna'></div>",
        vis: visses[1], 
        class: 3,
        transis: visses[5],
        tele: 1,
        estado: {def: 0.1, res: 0.1, atq: 9, raf: 9, crit: 7, timer: 6},
        tele: 4
    },
    { // 26
        nombre: "flagelo de ira",
        tipo: 12,
        damage: 60,
        distancia: 6,
        count: 20,
        anim: "<div style='background-color:rgba(255, 10, 10, 0.4); width: 50px; height: 50px; margin-top: 100px; border-radius: 10px'></div>",
        vis: visses[0],
        class: 1,
        estado: {estado: 1, tiempo: 20},
        trans: 6,
        inicio: {
            tipo: 12,
            damage: 50,
            distancia: -6,
            count: 20,
            anim: "<div style='background-color:rgba(255, 10, 10, 0.2); width: 50px; height: 50px; margin-top: 100px; border-radius: 10px'></div>",
            vis: visses[0],
            class: 1,
            trans: 6,
            block: {
                damage: 40,
                trans: 2,
                distancia: 4,
                anim: "<div style='color: orange' claas='shadow circle'> </div>",
                tipo: 5,
                vis: visses[1],
                trapX: 10,
                distance: 2
            },
            x: -3
        },
        block: {
            damage: 40,
            trans: 2,
            distancia: 4,
            anim: "<div style='color: orange' claas='shadow circle'> </div>",
            tipo: 5,
            vis: visses[1],
            trapX: 30,
            distance: 2
        },
        x: -3
    },
    { // 27
        nombre: "Azote vital",
        tipo: 0,
        damage: 75,
        distancia: 6,
        count: 8,
        efecto: {res: 0.75, vel:0.3, timer: 3},
        anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
        vis: visses[1],
        boom: {
            distancia: 4,
            damage: 0,
            anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: purple'></div>",
            vis: visses[0],
            block: {
                distancia: 1,
                damage: 0,
                estado: {estado: 6, tiempo: 4}
            }
        },
        raf: true,
        res: true
    },
    { // 28
        nombre: "Hiper rayo",
        tipo: 0,
        damage: 150,
        distancia: 10,
        count: 12,
        trans: 5,
        estado: {regen: 0.75, raf: 2, timer: 5},
        anim: "<div style='background-color:rgba(255, 255, 255, 0.2); width: 50px; height: 50px; margin-top: 25px; border-radius: 10px'></div>",
        vis: visses[0],
        raf: true,
        res: true,
        class: 3,
        transis: [{
            backgroundColor: "white"
        }, {
            backgroundColor: "black"
        }, {
            backgroundColor: "white"
        }
        ]
    },
    { // 29
        nombre: "Incyanurisacion",
        tipo: 15,
        damage: 0,
        distancia: 8,
        count: 18,
        estado: {estado: 6, tiempo: 5, visible: 0.9, timer: 8},
        stund: 3,
        anim: "<div style='color: purple; margin-top: 100px; background: rgba(250, 100, 250, 0.6)' class='medialuna'></div>",
        vis: visses[1], 
        class: 1
    },
    { // 30
        nombre: "Alto ahi",
        tipo: 8,
        damage: 10,
        distancia: 6,
        count: 8,
        efecto: {vel: 0.6, vat: 0.6, timer: 2},
        trans: 1,
        bomba: {
            tipo: 8,
            damage: 60,
            distancia: -2,
            anim: "<div style='background-color: transparent;' class='luna'></div>",
            vis: visses[1],
            class: 2,
            transis: visses[8],
            trans: 2,
            distance: 2,
            trapX: 20
        },
        anim: "<div style='background-color:rgba(255, 255, 255, 0.2); width: 50px; height: 50px; margin-top: 100px; border-radius: 10px'></div>",
        vis: visses[0],
        class: 1
    },
    { // 31
        nombre: "¡Sismo!",
        tipo: 8,
        damage: 30,
        distancia: 3,
        count: 8,
        bomba: {
            tipo: 8,
            damage: 60,
            distancia: 6,
            anim: "<div style='color: yellow; margin-top: 100px' class='medialuna'></div>",
            vis: visses[1],
            bomba: {
                tipo: 8,
                damage: 100,
                distancia: -9,
                anim: "<div style='color: yellow; margin-top: 100px' class='luna'></div>",
                vis: visses[1],
                trans: 7,
                class: 1
            } ,
            class: 1,
            trans: 4
        },
        anim: "<div style='color: yellow; margin-top: 100px' class='medialuna'></div>",
        vis: visses[0],
        class: 1, 
        trans: 1
    },
    { // 32
        nombre: "Rafaga terrenal",
        tipo: 12,
        damage: 10,
        rapido: 3,
        count: 6,
        tele: 2,
        raf: true,
        res: true,
        anim: "<div style='background-color: transparent;' class='medialuna'></div>",
        vis: visses[0],
        class: 2,
        transis: visses[8],
        estado: {vat: 1.4, timer: 2},
        distancia: 4
    },
    { // 33
        nombre: "Vientos de la verdad",
        tipo: 13,
        damage: 50,
        count: 7,
        raf: true,
        res: true,
        boom: true,
        y: -3,
        bomba: {
            damage: 60,
            tipo: 2,
            raf: true,
            res: true,
            estado: {raf: 3, timer: 2, vat: 2},
            anim: "<div class='shadow' style='color: white'></div> ",
            trans: 2,
            distancia: 4,
            moveY: 1,
            moveX: 0.1,
            vis: visses[1],
            vel: 100,
            stund: 1
        },
        efecto: {vel: 0.7, timer: 1.4},
        anim: "<div class='tornado'><div></div> <div></div> <div></div> <div></div> </div>",
        distancia: 6,
        vel: 70
    },
    {// 34
        nombre: "Luz sobrecargada",
        tipo: 2,
        damage: 0,
        count: 5,
        raf: true,
        distancia: "6,10",
        x: -2,
        bomba: {
            damage:0,
            tipo: 2,
            efecto: {vel: 0.9, timer: 1},
            distancia: 1,
            x: -2,
            boom: {
                damage: 120,
                distancia: 3,
                tipo: 2,
                trans: 2,
                raf: true,
                anim: "<div style='color: pink; width: 250px' class='medialuna'></div>",
                vis: visses[2],
                class: 2,
                transis: visses[4],
                block: {
                    distancia: 1,
                    estado: {count: [0, 100]},
                    damage: 0
                }
            },
            anim: "<div style='color: violet; background-color: rgba(230, 180, 230, 0.8); border-radius: 100px; width: 200px'></div> ",
            vis: visses[1],
            tiempo: 20
        },
        anim: "<div class='medialuna' style='color: purple'></div> ",
        vis: visses[0],
        carga: 0.3
    },
    {// 35
        nombre: "Burbuja temporal",
        tipo: 14,
        damage: 40,
        count: 4,
        raf: true,
        res: true,
        distancia: 6,
        x: -1,
        bomba: {
            damage: 20,
            distancia: 3,
            trans: 1,
            efecto: {vel: 0.1, vat: 0.1, timer: 2},
            tipo: 14,
            bomba: {
                damage: 10,
                distancia: -3,
                tipo: 14,
                mana: 0,
                raf: true,
                res: true,
            },
            anim: "<div style='color: pink; background-color: rgba(230, 180, 230, 0.8); border-radius: 100px'></div> ",
            vis: visses[1],
            class: 1,
            mana: 0,
            raf: true,
            res: true,
        },
        anim: "<div class='shadow medialuna' style='color: purple; border-radius:100%'></div> ",
        vis: visses[0]
    },
    { // 36
        nombre: "Cadenas condena",
        tipo: 10,
        damage: 30,
        count: 3,
        distancia: 6,
        distance: 3,
        trapX: -20,
        tele: 2,
        anim: "<div style='background-color: black; height: 10px' ></div>",
        class: 1,
        estado: {poderes: [37, -1], timer: 1.4},
        stund: 0.6

    },
    {// 37
        nombre: "Espada condena",
        tipo: 10,
        damage: 40,
        count: 0.1,
        distancia: 6,
        tele: 1,
        robo: 100,
        anim: "<div style='background-color: transparent;' class='medialuna'></div>",
        vis: visses[1],
        class: 2,
        transis: visses[5],
    },
    { // 38
        nombre: "Estocada divina",
        tipo: 2,
        damage: 70,
        distancia: 5,
        efecto: {vel: 0.8, def: 0.8, timer: 1.2},
        anim: "<div style='background-color: transparent; color: black' class='medialuna'></div>",
        vis: visses[0],
        class: 3,
        transis: [{
            color: "white"
        }, {
            color: "black"
        }, {
            color: "white"
        }],
        count: 3,
        
    },
    {// 39
        nombre: "Maldicion extraña",
        tipo: 10,
        damage: 80,
        raf: true,
        res: true,
        distancia: 10,
        trans: 7,
        efecto: {vel: 0.1, timer: 2},
        vel: 70,
        rapido: 3,
        anim: "<div style='background-color: transparent;' class='medialuna'></div>",
        vis: visses[0],
        class: 2,
        transis: [{
            color: "black"
        }, {
            color: "white"
        }, {
            color: "black"
        }],
        count: 10
    },
    { //40
        nombre: "Golpe protagonista",
        damage: 50,
        distancia: 6,   
        tipo: 0,
        count: 3,
        estado: {atq: 1.5, timer: 3},
        tele: 1,
        distance: 3,
        trapX: 30,
        stund: 1,
        block: {
            damage: 50,
            distancia: -6,   
            tipo: 0,
            count: 3,
            estado: {atq: 1.5, timer: 3},
            tele: 1,
            distance: 3,
            trapX: 30,
            stund: 1,
        }
    },
    { //41
        nombre: "Patada de aire",
        damage: 0,
        distancia: 6,
        count: 3,
        efecto: {vel: 0.5, timer: 2},
        stund: 0.5,
        tipo: 1,
        tele: 4,
        anim: "<div style='color: white;' class='medialuna'></div>",
        vis: visses[0],
        bomba: {
            damage: 60,
            distancia: -6,
            tipo: 1,
            anim: "<div style='color: white;' class='medialuna'></div>",
            vis: visses[0],
        },
        block: {
            damage: 0,
            distancia: 4,
            count: 3,
            efecto: {vel: 0.5, timer: 2},
            stund: 0.5,
            tipo: 1,
            anim: "<div style='color: white;' class='medialuna'></div>",
            vis: visses[0],
            bomba: {
                damage: 60,
                distancia: -11,
                tipo: 1,
                anim: "<div style='color: white;' class='medialuna'></div>",
                vis: visses[0],
            },
        },
    },
    {//42
        nombre: "Hermano de la nacion",
        damage: 30,
        distancia: 5,
        count: 4,
        estado: {vel: 1.5, atq: 1.5, timer: 2},
        efecto: {vel: 0.9, timer: 0.5},
        bomba: {
            damage: 70,
            distancia: 4,
            distance: 3,
            trapX: 20,
            efecto: {vel: 0.5, timer: 5},
            anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
            vis: visses[1],
            vel: 70,
            trans: 2,
            stund: 1.5
            
        },
        x: -3,
        tele: 1
    },
    {//43
        nombre: "Corazon del niño guerrero",
        damage: 10,
        distancia: 5,
        count: 6,
        estado: { timer: 5, vat: 1.5},
        mana: 30,
        tele: 1,
        block: {
            damage: 20,
            estado: {inmune: 0.9, vel: 1.1, timer: 5},
            anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
            vis: visses[1],
            efecto: {vel: 0.8, timer: 0.5},
            distancia: 4,
            x: -3,
            stundSelf: true,
            block: { // 2
                damage: 25,
                distancia: 4,
                x: -3,
                estado: {vel: 1.1, timer: 4},
                anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
                vis: visses[1],
                efecto: {vel: 0.8, timer: 0.5},
                stundSelf: true,
                block: { // 3
                    damage: 30,
                    distancia: 4,            
                    estado: {vel: 1.1, timer: 4},
                    anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
                    vis: visses[1],
                    efecto: {vel: 0.8, timer: 0.5},
                    x: -3,
                    stundSelf: true,

                    block: { // 4
                        damage: 40,
                        distancia: 4,            
                        estado: {vel: 1.1, timer: 4},
                        anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
                        vis: visses[1],
                        efecto: {vel: 0.8, timer: 0.5},
                        x: -3,
                        stundSelf: true,
                        
                        block: { // 5
                            damage: 50,
                            distancia: 4,            
                            estado: {vel: 1.1, timer: 4},
                            anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
                            vis: visses[1],
                            efecto: {vel: 0.8, timer: 0.5},
                            x: -3,
                            stundSelf: true,

                            block: { //6
                                damage: 60,
                                distancia: 4,            
                                estado: {vel: 1.1, timer: 4},
                                anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
                                vis: visses[1],
                                efecto: {vel: 0.8, timer: 0.5},
                                x: -3,
                                stundSelf: true,

                                block: {
                                    damage: 80,
                                    distancia: 4,            
                                    estado: {vel: 1.1, timer: 4},
                                    anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
                                    vis: visses[1],
                                    efecto: {vel: 0.8, timer: 0.5},
                                    x: -3,
                                    stundSelf: true,

                                }
                            }
                        }
                    }
                }
            }
        },
        x: -3,
    },
    {// 44
        nombre: "Logro de vida",
        damage: 0,
        distancia: 1,
        count: 3,
        estado: {atq: 1.5, vat: 3, salto: 1.5, timer: 2},
        anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: blue'></div>",
        vis: visses[1],
        mana: 20
    },
    {// 45
        nombre: "Hacia arriba",
        damage: 50,
        distancia: 4,
        count: 0.3,
        anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px'></div>",
        vis: visses[1],
        class: 2,
        transis: visses[3],
        efecto: {vel: 0.1, timer: 1.2},
        stund: 0.5
    },
    { //46
        nombre: "Pared celeste",
        damage: 0,
        distancia: "2,12",
        count: 4,
        anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px'></div>",
        vis: visses[0],
        boom: {
            damage: 1,
            distancia: 2,
            trans: 2,
            vel: 10,
            anim: "<div style='background-color: white; width: 50px'></div>",
            vis: visses[2],
            distance: 3,
            trapX: 10,
            tiempo: 40,
            tamY: 100
        },
        carga: 0.5,
        mana: 20
    },
    {//47
        nombre: "Tecnica de la familia",
        damage: "20,120",
        distancia: "6,12",
        count: 5,
        anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px'></div>",
        vis: visses[0],
        efecto: {vel: 0.7, timer: 0.9},
        carga: 0.25,
        mana: 10
    },
    { //48
        nombre: "Pared celeste",
        damage: 0,
        distancia: "2,12",
        count: 4,
        anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px'></div>",
        vis: visses[0],
        boom: {
            damage: 10,
            distancia: 2,
            trans: 2,
            vel: 10,
            anim: "<div style='background-color: navy; width: 50px'></div>",
            vis: visses[2],
            distance: 3,
            trapX: 10,
            tiempo: 60,
            tamY: 100,
            stund: 1.2
        },
        carga: 0.3,
        mana: 20
    },
    {//49
        nombre: "Tecnica de la familia",
        damage: "20,120",
        distancia: "6,12",
        count: 5,
        anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px'></div>",
        vis: visses[0],
        efecto: {vel: 0.7, timer: 0.9},
        mana: 10,
        rapido: 4,
        carga: 0.6
    },
    {//50
        nombre: "Rapidoooo",
        damage: 50,
        tipo: 10,
        distancia: 6,
        count: 5,
        tele: 1,
        x: 2,
        block: {
            damage: 70,
            tipo: 10,
            trans: 2,
            distancia: 5,
            distance: 1,
            trapX: 10,
            block: {
                damage: 0,
                distancia: 1,
                estado: {count: [1, 1]}
            },
            anim: "<img src='img/objs/aguja.png' style='margin-top: 25px; filter: drop-shadow(2px 4px 6px violet)'>",
            vis: [{width: "0px"}, {width: "100px"}],
        },

    },
    {//51
        nombre: "Estas en mi zona",
        distancia: "1,8",
        damage: 0,
        tipo: 10,
        count: 10,
        mana: 10,
        boom: {
            damage: 10,
            tipo: 10,
            distancia: 2,
            anim: "<div style='background-color:rgba(0, 0, 0, 0.6); width: 300px; height: 50px; margin-top: 100px; border-radius: 10px'></div>",
            tiempo: 100,
            block: {
                damage: 0,
                distancia: 1,
                efecto: {vel: 0.8},
                tipo: 10,
                estado: {count:[0, 1]}
            },
            tamX: 100,
            tamY: 50,
            trans: 2,
            robo: 100
        },
        anim: "<div style='background-color:rgba(0, 0, 0, 0.6); width: 50px; height: 50px; margin-top: 100px; border-radius: 10px'></div>",
        vis: visses[0],
        carga: 0.3,
    },
    {//52
        nombre: "Ven aqui!",
        damage: 20,
        distancia: 8,
        count: 8,
        anim: "<div style='background-color: black; height: 10px' ></div>",
        class: 1,
        tipo: 10,
        distance: 3,
        trapX: -30
    },
    {//53
        nombre: "Costura perfecta",
        damage: 20,
        distancia: 6,
        count: 10,
        descripcion: "Lanza dos agujas en direcciones opuestas que empujan a los enemigos y les causan daño \n\
        ademas restaura vida a ella y a los aliados de equipo y disminuye el proximo tiempo de cambio de personaje.",
        inicio: {
            damage: 20,
            distancia: -6,
            distance: 6,
            trapX: 30,
            stund: 1,
            trans: 6,
            anim: "<img src='img/objs/aguja.png' style='margin-top: 25px; filter: drop-shadow(2px 4px 6px violet)'>",
            vis: [{width: "0px"}, {width: "100px"}],

        },
        distance: 6,
        anim: "<img src='img/objs/aguja.png' style='margin-top: 25px; filter: drop-shadow(2px 4px 6px violet)'>",
        vis: [{width: "0px"}, {width: "100px"}],
        trapX: 30,
        stund: 1,
        trans: 6,
        fun: (gamer)=> {
            app.keyQ2 = 10
            gamer.salud += gamer.vida*0.2
            for (let i = 0; i < gamer.vidas.length; i++) {
                if (gamer.vidas[i] + gamer.vida*0.2 < personajes[gamer.equipo[i]].vida) {
                    gamer.vidas[i] += gamer.vida*0.2;
                    
                } else {
                    gamer.vidas[i] =  personajes[gamer.equipo[i]].vida
                }
                
            }
        }
    },
    {//54
        nombre: "Centinelas sombra",
        damage: 0,
        distancia: 5,
        count: 7,
        anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px black'></div>",
        vis: visses[0],
        boom: {
            damage: 10,
            distancia: 2,
            trans: 2,
            vel: 10,
            anim: "<img src='img/objs/fantasma.png'>",
            vis: visses[1],
            distance: 3,
            trapX: 10,
            tiempo: 60,
            tamY: 50,
        },
        mana: 20,
        inicio: {
            damage: 0,
            distancia: -5,
            count: 4,
            anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px black'></div>",
            vis: visses[0],
            boom: {
                damage: 10,
                distancia: -2,
                trans: 2,
                vel: 10,
                anim: "<img src='img/objs/fantasma.png'>",
                vis: visses[1],
                distance: 3,
                trapX: 10,
                tiempo: 60,
                tamY: 50,
            },
            mana: 0.1
        }
    }
]
/* 
Tipos:
 0) Vitalidad
 1) Fortaleza
 2) Luz
 3) Humo
 4) Liquido
 5) Calor
 6) Frio
 7) Sonido
 8) Mineral
 9) Metalico
 10) Fobia
 11) Mental
 12) Emocional
 13) Natural,
 14) Mitico,
 15) Maldad
*/
// vis es la animacion de aparecer 
// Tipos de objetos
/*
    0) No hace nada
    1) Aumenta una caracteristica
    2) Interviene en el sistema de combate como atacante
    3) Se usa una vez y modifica algo del usuario
    4) Se usa para el intercambio de otros objetos
    5) Proporciona una funcion que se ejecuta con cada pantallazo
    6) Interviene en el sistema de combate como defensor
*/
// obj.length: 6
var signos = {
    vel: "<div style='background-color: rgba(120, 250, 200)' class='signo'>Vel</div>",
    atq: "<div style='background-color: rgba(255, 120, 100)' class='signo'>Atq</div>",
    shield: "<div style='background-color: rgba(120, 220, 255)' class='signo'>Escudo</div>",
    vat: "<div style='background-color: rgba(120, 200, 255)' class='signo'>V. atq</div>",
    salto: "<div style='background-color: rgba(220, 250, 220)' class='signo'>Recarga</div>",
    caida: "<div style='background-color: rgba(190, 250, 210)' class='signo'>Mana</div>",
    visible: "<div style='background-color: rgba(120, 200, 200)' class='signo'>Ojo</div>",
    def: "<div style='background-color: rgba(120, 250, 150)' class='signo'>Def</div>",
    crit: "<div style='background-color: rgba(255, 0, 0)' class='signo'>P. Crit</div>",
    inmune: "<div style='background-color: rgba(250, 250, 250)' class='signo'>Inm</div>",
    regen: "<div style='background-color: rgba(120, 250, 120)' class='signo'>Regen</div>",
    res: "<div style='background-color: rgba(120, 150, 200)' class='signo'>Def. Raf</div>",
    raf: "<div style='background-color: rgba(220, 100, 250)' class='signo'>Raf</div>",
}

var objetos = [
    { // 0
        nombre: "Nada",
        descripcion: "No tiene nada",
        hab: "Ninguna",
        desc: "No hace nada.",
        tipo: 0,
        caract: {}
    },
    { // 1
        nombre: "Martillo",
        descripcion: "Un martillo que aumenta mucho el ataque del usuario pero baja su Vel.",
        hab: "Piel gruesa",
        desc: "La piel del portador es tan grueza que aumenta su ataque pero baja su velocidad.",
        tipo: 1,
        caract: {atq: 2.5, vel: 0.75},
    },
    { // 2
        nombre: "Lapizlasuli",
        descripcion: "Es una piedra azul que activa el estado Agil por 30 seg.",
        hab: "Agilidad",
        desc: "Al tener poca vida activa el estado Agil.",
        tipo: 3,
        caract: {estado: 2, tiempo: 300},
    },
    { // 3
        nombre: "Escudo de hierro",
        descripcion: "Un escudo que te permite aguantar mejor los golpes mientras mas vida tengas",
        hab: "Hierro celestial",
        desc: "Aguantas mejor los golpes mientras mas vida tengas",
        tipo: 6,
        caract: {shield: 30, def: 5}
    },
    { // 4
        nombre: "Moneda de oro",
        descripcion: "Puedes cambiarla por alguna cosa.",
        hab: "Astucia",
        desc: "Es probable encontrar objetos al caminar.",
        tipo: 4,
        caract: (gamer)=> {
            if (aleatorio(0, 100) <= 1) {
                var obj = aleatorio(1, objetos.length-1)
                if (objetos[obj].costo <= 1 || !objetos[obj].costo) {
                    gamer.objetos.push(obj)
                    return gamer
                }
            }
        },
        valor: 1
    },
    { // 5
        nombre: "Lanza",
        descripcion: "Una lanza que permite atravezar a los enemigos con poderes",
        hab: "Ojo de halcon",
        desc: "Los ataques atraviezan a los enemigos",
        tipo: 2,
        caract: {trans: true, stap: 1}
    },
    { // 6
        nombre: "Binoculares",
        descripcion: "Un par de binoculares que te permiten ver que enemigos tienen objetos y que tan fuertes son los enemigos",
        hab: "Puedo verte",
        desc: "Permite al portador ver que enemigos tienen objetos, tambien saber que tan peligroso es",
        tipo: 5,
        caract: ()=> {
            for (let i = 0; i < app.mods.length; i++) {
                const mod = app.mods[i];
                if (mod.stat) {
                    if (mod.stat.obj) {
                        let m = "drop-shadow(2px 4px 6px rgba(6, 255, 255, 0.845))"
                        var total = (mod.stat.vel+1) + mod.stat.def + (mod.stat.atq+2) + (mod.stat.raf+2) + mod.stat.res
                        if (total > 10) {
                            m = "drop-shadow(2px 4px 6px rgba(6, 255, 20, 0.845))"
                        }
                        if (total > 14) {
                            m = "drop-shadow(2px 4px 6px rgba(6, 20, 255, 0.845))"
                        }
                        if (total > 18) {
                            m = "drop-shadow(2px 4px 6px rgba(255, 100, 6, 0.845))"
                        }
                        if (total > 20) {
                            m = "drop-shadow(2px 4px 6px rgba(255, 6, 6, 0.845))"
                        }
                        mod.spr.animate([
                            {filter: "drop-shadow(2px 4px 6px rgba(6, 255, 255, 0))"},
                            {filter: m},
                            {filter: "drop-shadow(2px 4px 6px rgba(6, 255, 255, 0))"}
                        ], {
                            duration: 3000,
                            iteration: 1
                        })
                    }
                }
            }
        },
        costo: 2
    },
    { // 7
        nombre: "Esmeralda",
        descripcion: "Una linda gema que cuesta mucho",
        hab: "¿Puedes verme?",
        desc: "Al desplazarce obtiene buffs de velocidad de atq y movimiento y se vuelve invisible por un tiempo",
        tipo: 4,
        caract:  (gamer=app.gamer, act = 0)=>{
            if (act == 1 || act == 2) {
                gamer.basico.damage = 30
                if (gamer.src) {
                    del(gamer.src)
                } else {
                    del()
                }
            }  else if (act == 0) 
            if (gamer.transparencia >= 50) {
                
                gamer.buffs.vel *= 1.5
                gamer.buffs.vat *= 1.5
                gamer.buffs.visible = 0.9
                gamer.timer = 50
                gamer.transparencia = 1
                if(gamer.basico.damage < 75)
                gamer.basico.damage += 5
                if (gamer.transparencia1 >= 4) {
                    gamer.basico.estado = {estado: 7, tiempo: 10}
                    gamer.basico.combi = 5
                }
                var array = [
                    {filter: "none"},
                    {filter: "drop-shadow(10px 10px 6px purple)"},
                    {filter: "none"}
                ]
                if (!gamer.spr) {
                    change()
                } 
            } else if(gamer.transparencia) {
                gamer.transparencia++
            
            } else {
                gamer.transparencia = 1
                gamer.transparencia1 = 0

            }
            function change(a=app.jugador) {
                gamer.transparencia1++
                a.animate(array, {
                    iteration: 1,
                    duration: 1000
                })
                if (gamer.transparencia1 == 1) {
                    a.appendChild(document.createElement("br"))
                }
                if (gamer.transparencia1 <= 4) {
                    var b = document.createElement("div")
                    b.classList.add("transparencia")
                    a.appendChild(b)
                } else {
                    var b = a.querySelectorAll(".transparencia")
                    for (let i = 0; i < b.length; i++) {
                        const element = b[i];
                        element.style.backgroundColor = "yellow"
                    }
                }
            }
            function del(a = app.jugador) {
                var b = a.querySelectorAll(".transparencia")
                var br = a.querySelector("br")
                if(br)
                br.remove()
                for (let i = 0; i < b.length; i++) {
                    const element = b[i];
                    element.remove()
                }
                gamer.transparencia = null
            }
        },
        valor: 2
    },
    { // 8
        nombre: "Piedra abizal",
        descripcion: "Un extraño mineral que permite entrar en estado fantasmal por 10 seg.",
        hab: "Engaño de muerte",
        desc: "Entra en estado fantasmal al tener poca salud",
        tipo: 3,
        caract: {estado: 4, tiempo: 100},
        costo: 2
    },
    { // 9
        nombre: "Capucha protectora",
        descripcion: "Una capucha que te protege de los golpes, mientras mas fuertes sean mas sera tu resistencia",
        hab: "Fortaleza",
        desc: "Aguantas mejor los golpes mas fuertes",
        tipo: 6,
        caract: {shield: 5, def: 30},

    },
    { // 10
        nombre: "Escudo de oro",
        descripcion: "Un escudo hecho de oro que aumenta tu defensa mientras mas ataque tengas",
        hab: "Firmeza",
        desc: "Aumenta tu defensa al tener mas ataque",
        tipo: 6,
        caract: {shield: 5, atq: 50},
        costo: 2
    },
    { // 11
        nombre: "Escudo de piedra",
        descripcion: "Un escudo hecho de piedra que aumenta la def del usuario pero baja su vel",
        hab: "Grasa muscular",
        desc: "aumenta la def del usuario pero baja su vel",
        tipo: 1,
        caract: {def: 2.5, vel: 0.75},
    },
    { // 12
        nombre: "Daga de asesino",
        descripcion: "La tipica daga que suelen comprar los asesinos, aumentara tu atq al tener mas vel de atq",
        hab: "Frenesí",
        desc: "Cuando tienes mas vel de atq aumentas tu atq",
        tipo: 2,
        caract: {stap:1, stapPlus:3, antiShield:1}
    },
    { // 13
        nombre: "Espada oxidada",
        descripcion: "Una espada vieja y oxidada que aumenta el daño infligido mientras menos defensa se tenga",
        hab: "Impetu nocivo",
        desc: "Por cada punto reducido de defensa se aumenta el daño infligido al enemigo",
        tipo: 2,
        caract: {damage: 3, damagePlus:1}
    },
    { // 14
        nombre: "Armadura de combate",
        descripcion: "Una armadura que te permite aguantar mejor los golpes mientras menos vida tengas",
        hab: "Robustez",
        desc: "Aguantas mejor los golpes mientras menos vida tengas",
        tipo: 6,
        caract: {antiShield: 30, def: 5}
    },
    { // 15
        nombre: "Botiquin",
        descripcion: "Una caja con los implementos de primeros auxilios y un frasco de energia para los hanyous",
        hab: "Cura natural",
        desc: "Al tener poca vida recupera ps",
        tipo: 3,
        caract: {salud: 3}
    },
    { // 16
        nombre: "Daga de diente",
        descripcion: "Una daga que inlige mas daño al tener la velocidad baja.",
        hab:"Agallas",
        desc: "Si se le baja la velocidad aumenta el daño que inlige",
        tipo: 2,
        caract: {damage: 4, damagePlus:1.2}
    },
    { // 17
        nombre: "Jade",
        descripcion: "Una piedra usada para hacer amuletos que le permite a quien la lleve tener un escudo mientras mas velocidad de ataque tenga",
        hab: "Escudo de baile",
        desc: "Mientras mas vel de movimiento y ataque tenga obtendra un escudo mayor",
        tipo: 6,
        caract: {sVel: 20, sVat: 30}
    },
    { // 18
        nombre: "Arpa magnifica",
        descripcion: "Un arpa cuyo sonido baja la defensa rafaga del enemigo y disminuye el tiempo de recarga de las habilidades del portador",
        hab: "Piel mitica",
        desc: "Baja la defensa rafaga del enemigo y disminuye el tiempo de recarga de alguna habilidad del usuario",
        tipo: 2,
        caract: {combo: {res: 0.9}, combi: {salto: 1.3}} 
    },
    { // 19
        nombre: "Armadura maldita",
        descripcion: "Cada golpe dado por el portador aumenta su defensa rafaga y aumenta la vel de ataque, ademas roba vida",
        hab: "Sello de maldicion",
        desc: "Con cada golpe, el usuario aumentara su velocidad de ataque y su defensa rafaga, y le roba vida al enemigo",
        tipo: 2,
        caract: {combi: {res: 1.2, vat: 1.5, timer: 5}, robo: 30, antiShield: 6, shieldPlus: 10}
    },
    { // 20
        nombre: "Llave",
        descripcion: "Una llave que abre puertas",
        hab: "Tecnica carrera",
        desc: "Al correr llena una barra que al estar completa cambia sus ataques y los potencia",
        tipo: 4,
        valor: 0,
        caract: (gamer=app.gamer, act=0)=> {
            var total = 30
            if (act == 0) {
                if (gamer.carrera) {
                    if (gamer.carrera > total && !gamer.carreraStat) {
                        gamer.carreraNodo.firstChild.style.backgroundColor = "white"
                        gamer.poderes = [40, 41]
                        gamer.ulti = 9
                        gamer.stat.vel *= 2
                        gamer.carreraStat = true
                    } else if(!gamer.carreraStat) {
                        gamer.carrera ++
                        gamer.carreraNodo.firstChild.style.width = ((gamer.carrera*100)/total)+"%"
                    }
                } else {
                    if (gamer.spr) {
                        agg(gamer.spr)
                    } else {
                        agg()
                    }
                    gamer.carrera = 1
                }
            } else if (act > 2 && gamer.carreraNodo) {
                gamer.carrera = 1
                gamer.carreraNodo.firstChild.style.backgroundColor = gamer.stat.color
                if (gamer.carreraStat) {
                    if (gamer.estado == 0) {
                        estados[0](gamer)
                        app.obj1()
                    } else
                    gamer.stat.vel /= 2
                    gamer.carreraStat = false
                    gamer.poderes = [0, 1]
                    gamer.ulti = 0
                }
                

            } 
            if (act == 1) {
                if(gamer.carreraNodo)
                gamer.carreraNodo.remove()
                gamer.poderes = [0, 1]
                gamer.carreraStat = null
                gamer.carrera = null
                gamer.carreraNodo = null
                
            }
            function agg(a=app.jugador) {
                var nodo = document.createElement("div")
                var carga = document.createElement("div")
                nodo.classList.add("vid")
                carga.classList.add("sal")
                gamer.carreraNodo = nodo
                nodo.appendChild(carga)
                a.appendChild(nodo)
                carga.style.backgroundColor = gamer.stat.color

            }
        }
    },
    {//21
        nombre: "Armadura de valiente",
        descripcion: "Una coraza que te permite recistir mejor los golpes mientras mas ataque tengas",
        hab: "Niño guerrero",
        desc: "Aguanta mejor los golpes al tener mas ataque",
        tipo: 6,
        caract: {sAtq: 25, atq: 25}
    },
    {//22
        nombre: "Arco pesado",
        descripcion: "Aumenta el indice de golpe critico a costa de su defensa fisica",
        hab: "Arqueria",
        desc: "baja su defensa fisica, pero aumenta su critico. Ademas gana cargas con cada ataque que realice. al completar 4 cambia sus habilidades",
        tipo: 1,
        caract: {def: 0.75, crit: 4, fun: (atacker=app.gamer, defender, pow) => {
            if (!atacker) {
               del() 
            }
            if (!defender && pow.count) {
                if (atacker.arco >= 5) {
                    atacker.arco = 1
                    atacker.poderes = [47, 46]
                    del()
                }
            }
            if (defender) {
                if (atacker.arco > 0) {
                    if (atacker.arco >= 5) {
                        atacker.poderes = [49, 48]
                        atacker.count = [100, 100, 0]

                    }
                    atacker.arco++
                    if (!atacker.spr) {
                        change()
                    } else {
                        change(atacker.spr)
                    }
                } else {
                    atacker.arco = 1
                }
                var array = [
                    {filter: "none"},
                    {filter: "drop-shadow(10px 10px 6px #428bca)"},
                    {filter: "none"}
                ]
                function change(a=app.jugador) {
                    a.animate(array, {
                        iteration: 1,
                        duration: 1000
                    })
                    if (atacker.arco == 1) {
                        a.appendChild(document.createElement("br"))
                    }
                    if (atacker.arco <= 5) {
                        var b = document.createElement("div")
                        b.classList.add("arco")
                        a.appendChild(b)
                    } else {
                        var b = a.querySelectorAll(".arco")
                        for (let i = 0; i < b.length; i++) {
                            const element = b[i];
                            element.style.backgroundColor = "white"
                        }
                    }
                }
            }
            function del(a = app.jugador) {
                var b = a.querySelectorAll(".arco")
                var br = a.querySelector("br")
                if(br)
                br.remove()
                for (let i = 0; i < b.length; i++) {
                    const element = b[i];
                    element.remove()
                }
            }
        }}
    },
    { //23
        nombre: "Guadaña de hierro",
        descripcion: "Una guadaña que aumenta la potencia de los golpes criticos",
        hab: "Te dolera mas a ti que a mi",
        desc: "Aumenta la potencia de los golpes criticos",
        tipo: 2,
        caract: {crit:7, stap: 7}
    },
    {//24
        nombre: "Hijo de sombras",
        descripcion: "Un hilo que enlaza a los rivales y les roba velocidad de ataque",
        hab: "Costura de heridas",
        tipo: 7,
        desc: "Aumenta la vida de los aliados al estar fuera del campo",
        caract: {vat: 1.5},
        obj: (gamer=app.gamer, mods=[])=> {
            for (let i = 0; i < mods.length; i++) {
                const mod = mods[i];
                if (mod.maldad) {
                    mod.buffs.vat *= 0.85
                    gamer.buffs.vat *= 1.1
                }
            }
        },
        fun: (gamer)=> {
            if (gamer.costura) {
                if (gamer.costura > 50) {
                    for (let i = 0; i < gamer.vidas.length; i++) {
                        if (gamer.vidas[i] < personajes[gamer.equipo[i]].vida) {
                            gamer.vidas[i] += personajes[gamer.equipo[i]].vida*0.1
                        }
                    }
                    gamer.costura = 1
                } else 
                gamer.costura++
            } else {
                gamer.costura = 1
            }
        }
    }
]

// ala     

var ultis = [
    { // 0
        nombre: "Impulso vital devastador",
        damage: 120,
        distancia: 10,
        tipo: 0,
        combi: 1,
        estado: {estado: 2, tiempo: 10},
        tele: 1,
        anim: "<div style='background-color:rgba(255, 255, 255, 0.2); width: 50px; height: 50px; margin-top: 100px; border-radius: 10px'></div>",
        vis: visses[0],
        class: 1
    },
    { // 1
        nombre: "Ira de la naturaleza extrema",
        damage: 160,
        distancia: 13,
        tipo: 13,
        anim: "<img src='img/copyman/ultiMove.png'>",
        vis: visses[2]
    },
    { // 2
        nombre: "¡No te temo!",
        damage: 90,
        distancia: 13,
        tipo: 10,
        combo: 1,
        efecto: {obj: 0},
        combi: 1,
        tele: 3,
        estado: {estado: 4, tiempo: 20},
        anim: "<div class='shadow' style='color: black; background-color: rgba(0, 0, 0, 0.6)'></div>",
        vis: visses[2],
        class: 1

    },
    { // 3
        nombre: "¿Puedes respirar?",
        damage: 150,
        distancia: 4,
        tipo: 3,
        combi: 1,
        estado: {raf: 1.5, timer: 5},
        efecto: {estado: 5, tiempo: 10},
        anim: "<div class='luna shadow' style='color: black; background-color:rgba(0, 0, 0, 0.5)'></div>",
        vis: visses[2],
        class: 1
    },
    { // 4
        nombre: "Golpe formido destructor",
        damage: 140,
        distancia: 5,
        tipo: 8,
        combi: 1,
        estado: {estado: 1, tiempo: 10, atq: 1.5, timer: 3},
        anim: "<div class='luna' style='color: red; background-color: orange; transform: rotate(-90deg); margin-top: 40px'></div>",
        vis: visses[7],
        class: 4,
        transis: visses[7]
    },
    { // 5
        nombre: "Imagen de la ira",
        damage: 140,
        distancia: 6,
        tipo: 12,
        combi: 1,
        estado: {estado: 1, tiempo: 10, def: 0.75, timer: 3},
        anim: "<div style='background-color: transparent;' class='luna'><img src='img/objs/daga.png' style='width: 80px'></div>",
        vis: visses[1],
        class: 2,
        transis: visses[8],
    },
    {// 6
        nombre: "Francotirador",
        damage: 100,
        distancia: 16,
        tipo: 9,
        combi: 1,
        estado: {estado: 1, tiempo: 10, vat: 1.5, timer: 3},
        anim: "<img src='img/objs/bala.png'>",
        vis: visses[0],
        rapido: 3,
        x: 3,
    },
    { // 7
        nombre: "Luz divina aniquiladora",
        damage: 50,
        distancia: 10,
        y: -3,
        x: -1,
        tipo: 2,
        efecto: {vel: 0.5},
        raf: true,
        res: true,
        block: {
            damage: 130,
            distancia: 4,
            tipo: 2,
            moveY: 1,
            moveX: 0.01,
            estado: {raf: 1.5, def: 1.2, res: 1.2, timer: 6},
            anim: "<div class='shadow' style='color: white'></div> ",
            trans: 2,
            moveY: 1,
            moveX: 0.1,
            vis: visses[1],
            vel: 100,
            mana: 0.1,
            raf: true,
            res: true,
        },
        anim: "<div style='height: 10px; box-shadow: 0px 10px 30px 10px white; background-color: white; margin-top: 100px'> </div>",
        class: 1
    },
    {// 8
        nombre: "Condena perpetua",
        damage: 80,
        tipo: 10,
        distancia: 8,
        boom: {
            damage: 80,
            distancia: -5,
            trans: 2,
            distance: 2,
            trapX: 20,
            tipo: 5,
            anim: "<div class='circle' style='background: linear-gradient(rgba(255, 0, 0, 0.281), rgba(255, 166, 0, 0.315)); box-shadow: 0px 0px 50px 50px orange'> </div>",
            vis: visses[2],
            class: 1
        },
        anim: "<div style='width:20px; height: 5px; background-color: black'> </div>"
    },
    {// 9
        nombre: "Impulso vital devastador",
        damage: 150,
        tipo: 0,
        distancia: 9,
        vel: 70,
        anim: "<div style='background-color:rgba(255, 255, 255, 0.2); width: 50px; height: 50px; margin-top: 100px; border-radius: 10px'></div>",
        vis: visses[0],
        class: 1,
        tele: 2,
        estado: {estado: 2, tiempo: 10},
        distance: 3,
        trapX: 30,
        stund: 2
    },
    { // 10
        nombre: "Desarrollo del guerrero",
        damage: 30,
        distancia: 8,
        count: 6,
        estado: {atq: 1.5, timer: 7, vat: 1.5, vel: 1.5},
        mana: 30,
        tele: 1,
        distance: 4,
        trapX: 20,
        bomba: {
            damage: 50,
            estado: {vel: 1.1, timer: 4},
            anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
            vis: visses[1],
            efecto: {vel: 0.8, timer: 0.5},
            distancia: 4,
            x: -3,
            stund: 3,
            stundSelf: true,
            bomba: { // 2
                damage: 60,
                distancia: 4,
                x: -3,
                estado: {vel: 1.2, timer: 4},
                anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
                vis: visses[1],
                efecto: {vel: 0.8, timer: 0.5},
                stundSelf: true,
                
                bomba: { // 3
                    damage: 30,
                    distancia: 4,            
                    estado: {vel: 1.2, timer: 4},
                    anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
                    vis: visses[1],
                    efecto: {vel: 0.8, timer: 0.5},
                    x: -3,
                    stundSelf: true,

                    bomba: { // 4
                        damage: 70,
                        distancia: 4,            
                        estado: {vel: 1.2, timer: 4},
                        anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
                        vis: visses[1],
                        efecto: {vel: 0.8, timer: 0.5},
                        x: -3,
                        stundSelf: true,

                        bomba: { // 5
                            damage: 80,
                            distancia: 4,            
                            estado: {vel: 1.2, timer: 4},
                            anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
                            vis: visses[1],
                            efecto: {vel: 0.8, timer: 0.5},
                            x: -4,
                            stundSelf: true,
                            stund: 3,
                            bomba: { //6
                                damage: 90,
                                distancia: 4,            
                                estado: {vel: 1.2, timer: 4},
                                anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
                                vis: visses[1],
                                efecto: {vel: 0.8, timer: 0.5},
                                x: -4,
                                stundSelf: true,
                                bomba: {
                                    damage: 100,
                                    distancia: 6,            
                                    estado: {vel: 1.3, timer: 4},
                                    anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
                                    vis: visses[1],
                                    class: 1,
                                    efecto: {vel: 0.8, timer: 0.5},
                                    stundSelf: true,
                                    stund: 1.5,
                                    vel: 100

                                }
                            }
                        }
                    }
                }
            }
        },
        x: -3,
    },
    {//11
        nombre: "Nubarron",
        damage: 0,
        distancia: 7,
        boom: {
            damage: 0,
            efecto: {vel: 0.9, timer: 0.3},
            block: {
                damage: 100,
                distancia: 2,
                anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: yellow'></div>",
                vis: visses[1],
                mana: 0.1

            },
            x: -3,
            distancia: 10,
            vel: 50,
            tamX: 100,
            anim: "<div class='circle' style='background: linear-gradient(white, gray); box-shadow: 0px 0px 10px 10px yellow; margin-top: -150px; width: 300px'> </div>",
            vis: visses[1],
            boom: {
                damage: 0,
                efecto: {vel: 0.9, timer: 0.3},
                block: {
                    damage: 100,
                    distancia: 2,
                    anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: yellow'></div>",
                    vis: visses[1],
                    mana: 0.1

                },
                x: -3,
                distancia: -10,
                vel: 50,
                tamX: 100,
                anim: "<div class='circle' style='background: linear-gradient(white, gray); box-shadow: 0px 0px 10px 10px yellow; margin-top: -150px; width: 300px'> </div>",
                vis: visses[1],
            }
            
        },
        anim: "<div class='luna' style='box-shadow: 10px 0px 10px 1px; color: white'></div>",
        vis: visses[1],
    },
       {//12
        nombre: "No lo esperabas eh",
        distancia: 5,
        damage: 0,
        tipo: 10,
        boom: {
            damage: 10,
            tipo: 10,
            distancia: 2,
            anim: "<div style='background-color:rgb(0, 0, 0); width: 600px; height: 50px; margin-top: 100px; border-radius: 10px'></div>",
            tiempo: 100,
            block: {
                damage: 0,
                distancia: 1,
                efecto: {vel: 0.8},
                tipo: 10,
                estado: {count:[0, 1]}
            },
            tamX: 200,
            tamY: 50,
            trans: 2,
            robo: 100,
            stund: 5
        },
        anim: "<div style='background-color:rgb(0, 0, 0); width: 50px; height: 50px; margin-top: 100px; border-radius: 10px'></div>",
        vis: visses[0],
        carga: 0.3,
    },
    {// 13
        nombre: "¡Fuera de aqui!",
        damage: 90,
        tipo: 10,
        distance: 10,
        trapX: 30,
        distancia: 7,
        boom: {
            damage: 20,
            distancia: 2,
            trans: 2,
            vel: 10,
            anim: "<img src='img/objs/fantasma.png'>",
            vis: visses[2],
            distance: 3,
            trapX: 10,
            tiempo: 80,
            tamY: 100,
            stund: 1
        },
        anim: "<img src='img/objs/aguja.png'>",
        inicio: {
            damage: 45,
            tipo: 10,
            distance: 10,
            trapX: 30,
            distancia: -7,
            trans: 7,
            anim: "<img src='img/objs/aguja.png'>",
            boom: {
                damage: 20,
                distancia: -2,
                trans: 2,
                vel: 10,
                anim: "<img src='img/objs/fantasma.png'>",
                vis: visses[2],
                distance: 3,
                trapX: 10,
                tiempo: 80,
                tamY: 100,
                stund: 1
            },
        }
    }
]
var nombreEstado = [
    "Normal", // 0
    "Gerra", // 1
    "Agil", // 2
    //"Curacion",
    "Fuerte", // 3
    "Fantasmal", // 4
    "Envenenado", // 5
    "Cyanuro", // 6
    "Espectral" // 7
]
var desEstado = [
    "Esta normal, sin ninguna mejora",
    "Aumenta la defensa base y el ataque base del usuario, ademas le aplica un buff de aumento de critico",
    "Aumenta tu velocidad, disminuye el tiempo de carga de las habilidades y carga mas rapido tanto el mana como la vida",
    //"Restaura vida continuamente",
    "Aumenta la fuerza del usuario",
    "Aumenta el ataque, aumenta mucho la recarga de vida, ademas aumenta tu velocidad.",
    "Disminuye tu defensa fisica, y defensa rafaga, agrega el efecto caida pesada y te quita un salto.",
    "Disminuye las defensas pero aumenta mucho la capacidad ofensiva del usuario.",
    "Aumenta mucho el poder rafaga, ademas se libra de cualquier efecto de control mientras dure el estado."
]
var estados = [
    function (mod) {
        if (!mod) {
            mod = app.gamer
        }
        mod.regen = 1
        var spr = mod.spr
        if (!spr && !mod.cria) {
            spr = app.jugador
            mod.stat = Object.assign(app.gamer.stat, personajes[app.gamer.nombre].stat)
            mod.poderes = [personajes[app.gamer.nombre].poderes[0], 
            personajes[app.gamer.nombre].poderes[1], personajes[app.gamer.nombre].poderes[2]]
        } else {
            mod.stat = Object.assign(mod.stat, entidades[mod.especie][0])
            mod.poderes = [entidades[mod.especie][3][0], entidades[mod.especie][3][1],
            entidades[mod.especie][3][2],]
        }
        spr.style.filter = "none"
        return mod
        /* var stat = Object.keys(gamer.stat)
        for (let i = 0; i < stat.length; i++) {
            const element = stat[i];
            gamer.stat[element] = 1
        } */
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 10px 16px red)"
        mod.stat.def *= 2
        mod.stat.atq *= 1.5
        mod.buffs.crit *= 1.5
        
        return mod
    },
    function (mod) {
      mod = estados[0](mod)
      var node = retMast(mod)
      mod = node[0]
      var spr = node[1]
      spr.style.filter = "drop-shadow(2px 4px 6px blue)"
      mod.stat.vel *= 2.5 
      mod.stat.caida *= 0.5
      mod.stat.salto *= 2 
      return mod
    },
    /* function () {
        estados[0]()
        if (gamer.salud >= gamer.vida) {
            gamer.estado = 0
        } else{
            let s = setInterval(() => {
            jugador.style.filter = "drop-shadow(2px 4px 6px green)"
            let i = 0
            gamer.tiempo = 1000
            if (i <= 10) {
                if (gamer.salud >= gamer.vida) {
                    gamer.estado = 0

                    window.clearInterval(s)
                } else
                gamer.salud += gamer.vida*0.1
                verificar()
            } else {
                gamer.estado = 0
                window.clearInterval(s)
            }
            i ++
        }, 100);}
    }, */
    function (mod) {
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 4px 6px aqua)"
        mod.buffs.atq *= 2.5
        mod.buffs.vel *= 1.5
        mod.timer = mod.tiempo 
        return mod
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 4px 6px black)"
        mod.stat.atq *= 2 
        mod.stat.caida *= 0.2
        if(mod.spr)
        mod.stat.regen *= 3
        else
        mod.regen *= 3
        mod.stat.vel *= 1.5
        return mod
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 4px 6px purple)"
        mod.stat.def *= 0.5 
        mod.stat.caida *= 1.5
        mod.stat.salto *= 0.5 
        mod.stat.res *= 0.5
        if (mod.spr) {
            mod.stat.salud *= 0.8
        } else {
            mod.salud *= 0.8
        }
        return mod
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "hue-rotate(45deg) brightness(1.5) drop-shadow(2px 4px 6px purple)"
        mod.stat.def *= 0.1 
        mod.stat.atq *= 9
        mod.stat.raf *= 9 
        mod.stat.res *= 0.1
        return mod
    },
    function (mod) {
        mod = estados[0](mod)
        var node = retMast(mod)
        mod = node[0]
        var spr = node[1]
        spr.style.filter = "drop-shadow(2px 4px 6px gray)"
        mod.stat.raf *= 2
        var s = setInterval(() => {
            if (gamer.timer < 0.1) {
                window.clearInterval(s)
            }
            mod.stund = false
            if (mod.buffs.vel < 1) {
                mod.buffs.vel = 1
            }
        }, 100);
        return mod
    },
]
function retMast(mod) {
    if (!mod) {
        mod = app.gamer
    }
    var spr = mod.spr
        if (!spr) {
            spr = app.jugador
        }
    return [mod, spr]
}   