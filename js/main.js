var app = (()=> {
    var public = {};
    var pantalla = document.getElementById("pantalla");
    var mini = document.getElementById("mini")
    var main = document.getElementById("main")
    var jimi = document.getElementById("jimi")
    var accionTecla = {}
    let left = 0
    var nivel;
    var ubicacion = []
    var move = false
    var caida = true
    var moveBoo = false
    var habMana = true
    var body = document.body
    var x=0, y=0
    var saveObj = 0
    var vatime = 5;
    var tras = {x: 0, z: 0, tele: false, info: 1, guardar: 0}
    public.mens = false
    var bloqueos = []
    var hab=objetos[0], obj=objetos[0]
    var ultiActivate = false
    let xScreen = 0;
    var restore = 0
    public.mensaje = (textos=["..."], locker=false)=> {
        if (public.mens){
            return
        }
        var a = accionTecla.KeyX_Down
        var t = document.createElement("div")
        t.classList.add("texter")
        body.appendChild(t)
        var i = 0
        var texto = textos[i];
        t.innerHTML = texto+" <br> <i> Preciona x para continuar </i>"
        accionTecla.KeyX_Down = ()=> {
            i++
            if (i < textos.length) {
                texto = textos[i];
                t.innerHTML = texto+" <br> <i> Preciona x para continuar </i>"
            } else {
                t.remove()
                lock = locker
                public.mens = false
                accionTecla.KeyX_Down = a
                afterMessage()
            }
        }
    }
    public.actualizar = (nombre)=> {
        if (hab.tipo == 4) {
            hab.caract(gamer, 1)
        }
        if (hab.caract.fun) {
            hab.caract.fun(null)
        }
        gamer.ultiComb = null
        gamer.ultiTime = null
        jimi.innerHTML = ""
        tras.guardar = 0
        gamer = Object.assign(gamer, personajes[nombre])
        if(gamer.clan)
        gamer.tipos = tipos(gamer.clan)
        loadSystem(personajes[nombre])
        jugador.firstChild.src = galeria[gamer.sprs].normal
        img.firstChild.src = galeria[gamer.sprs].normal
        gamer.stat = Object.assign({}, personajes[nombre].stat)
        gamer.poderes = [gamer.poderes[0], gamer.poderes[1], gamer.poderes[2]]
        gamer.salud = gamer.vida
        hab = objetos[gamer.hab]
        gamer.nombre = nombre
        gamer.estado = 0
        gamer.count = [0, 0, 0]
        gamer.combCount = 0
        powImage()
        if (gamer.w) {
            jugador.style.width = gamer.w+"px"
        }
        if (gamer.h) {
            jugador.style.height = gamer.h+"px"
        }
        buffRestore()

        if (obj.tipo == 1) {
            var keys = Object.keys(obj.caract)
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                gamer.stat[key] *= obj.caract[key]
            }
        }
        if (hab.tipo == 1) {
            var keys = Object.keys(hab.caract)
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                gamer.stat[key] *= hab.caract[key]
               
            }
        }
    }
    var gamer = {
        nombre: "normie",
        exp: 0,
        restore: 5,
        stund: false,
        regen: 1,
        nivel: 0,
        estado: 0,
        objetos: [4, 2],
        obj: 0,
        x: 30,
        y: 650,
        pisar: true,
        atack: false,
        vida: 100,
        salud: 100,
        tiempo: -1,
        ataques: 0,
        hab: 1,
        combCount: 0,
        activate: false,
        personajes: ["normie", "hania"],
        buffs: {
            vel: 1,
            atq: 1,
            shield: 1,
            vat: 1,
            salto: 1,
            caida: 1,
            visible: 1,
            def: 1,
            crit: 1,
            inmune: 1,
            regen: 1,
            res: 1,
            raf: 1
        },
        potens: [],
        timer: 0,
        tipos: {},
        stat: {},
        poderes: [0, 1],
        sprs: 0,
        count: [0, 0, 0],
        flags: []
    }
    var criaturas = []
    var mods = []
    var saltos = true
    var save = localStorage.getItem("save")
    var save2 = localStorage.getItem("crias")
    if (save) {
        gamer = Object.assign(gamer, JSON.parse(save))
        gamer.personajes.push("marinette")
        
    }
    if (save2) {
        save2 = JSON.parse(save2) 
        for (let i = 0; i < save2.length; i++) {
            const datos = save2[i];
            // especie = [especie, salud, obj, nombre, nivel]
            aggCria(datos)

        }
    }
    function aggCria(datos) {
        let especie = entidades[datos[0]]
            if (especie[4]) {
                if (datos[4] >= especie[4].nivel) {
                    datos[0] = especie[4].evo
                    especie = entidades[especie[4].evo]
                }
            }
            let cria = {
                vida: especie[0].vida || 10,
                salud: datos[1],
                obj: datos[2],
                alias: datos[3],
                stat: {
                    vel: especie[0].vel || 1,
                    salto: especie[0].salto || 1,
                    caida: especie[0].caida || 1,
                    def: especie[0].def || 1,
                    atq: especie[0].atq || 1,
                    color: especie[0].color || "white",
                    raf: especie[0].raf || 1,
                    res: especie[0].res || 1,
                },
                regen: especie[0].regen || 1,
                hab: especie[0].hab || 0,
                tipos: especie[1],
                sprs: especie[2],
                poderes: especie[3],
                exp: datos[4],
                especie: datos[0],
                h: especie[0].h || 100,
                w: especie[0].w || 50,
            }
            if (especie[0].infante) {
                cria.stat.infante = true
            }

            criaturas.push(cria)
    }
    if (gamer.nivel == 0) {
        lock = true
        pantalla.remove();
        mini.remove()
        var texto = [
            "Preciona este texto para continuar",
            
        ];
        var i = 0;
        var nodo = document.createElement("h1")
        nodo.innerHTML = texto[i]
        main.append(nodo)
        nodo.onclick = ()=> {
            i++
            if(i < texto.length)
            nodo.innerHTML = texto[i]
            else {
                nodo.remove()
                main.append(mini, pantalla)
                lock = false
            }
        }
        gamer.nivel = 1
        localStorage.setItem("save",JSON.stringify(gamer))
    }
    let gw, gh
    if (gamer.w) {
        gw = gamer.w
    }
    if (gamer.h) {
        gh = gamer.h
    }
    var print = cambiarPantalla("Preciona cualquier lugar para comenzar")
    print.classList.add("inicio")
    print.onclick = ()=> {
        print.remove()
        main.style.display = "block"
    }
    var jugador = persona("blue", galeria[gamer.sprs].normal, gh, gw)
    var vida = document.createElement("div")
    var alive = document.createElement("div")
    vida.classList.add("vida")
    alive.classList.add("alive")
    var img = creacion({tag: "img", src: galeria[gamer.sprs].normal})
    
    img.classList.add("mirarImg")
    mini.appendChild(img)
    vida.appendChild(alive)
    mini.appendChild(vida)
    var info = document.createElement("div")
    var estado = document.createElement("div")
    var informe = document.createElement("div")
    info.classList.add("info")
    info.append(estado, informe)
    informe.classList.add("informe")
    estado.innerText = "Estado: "+ nombreEstado[gamer.estado]
    informe.innerText = desEstado[gamer.estado]
    mini.appendChild(info)

    var charge1 = document.createElement("div")
    var charge2 = document.createElement("div")
    var charge3 = document.createElement("div")

    vida.append(charge1, charge2, charge3)
    var atack = document.getElementById("move1")
    var especial = document.getElementById("move2")
    var third = document.getElementById("move4")
    var ulti = document.getElementById("move3")
    var extra = document.getElementById("move5")
    levelLoad(0)
    
    function cargaDem() {
        let d = poderes[gamer.poderes[0]].count || 5
        atack.animate([
            {backgroundColor: "rgba(114, 114, 114, 0.445)"},
            {backgroundColor: "rgba(5, 72, 255, 0.445)"}
        ], {
            fill: "forwards",
            duration: d*1000,
            iterations: 1
        })
        atack.style.boxShadow = ""
    }
    function cargaDom(node = especial, i = 1) {
        let d = poderes[gamer.poderes[i]].count || 5
        node.animate([
            {backgroundColor: "rgba(114, 114, 114, 0.445)"},
            {backgroundColor: "rgba(5, 72, 255, 0.445)"}
        ], {
            fill: "forwards",
            duration: d*1000,
            iterations: 1
        })
        node.style.boxShadow = ""
    }
    function cargaDim() {
        let d = gamer.ultiTime || 20
        ulti.animate([
            {backgroundColor: "rgba(114, 114, 114, 0.445)"},
            {backgroundColor: "rgba(5, 72, 255, 0.445)"}
        ], {
            fill: "forwards",
            duration: d*1000,
            iterations: 1
        })
        ulti.style.boxShadow = ""
    }
    
    
    // despues de cargar el nivel
    window.onkeydown = teclaAbajo;
    window.onkeyup = teclaArriba;
    var teclas = {
        left: false,
        top: false,
        right: false,
        down: false,
    };
    accionTecla.ArrowLeft_Down = ()=> {
        if (lock || gamer.movBoo || gamer.stund) {
            return
        }
        //gamer.x -= gamer.stat.vel * 10
        jugador.firstChild.style.transform = "rotateY(180deg)"
        x = 0-((gamer.stat.vel*gamer.buffs.vel)*20)
        if (!teclas.left) {
            if (move == true) {
                moveBoo = true
            }
            move = true
            teclas.left = true
        }
    }
    accionTecla.ArrowRight_Down = ()=> {
        if (lock || gamer.movBoo || gamer.stund) {
            return
        }
        //gamer.x += gamer.stat.vel * 10
        jugador.firstChild.style.transform = ""
        x = ((gamer.stat.vel*gamer.buffs.vel)*20)
        if (!teclas.right) {
            if (move == true) {
                moveBoo = true
            }
            move = true
            teclas.right = true
        }
        
    }
    accionTecla.ArrowRight_Up = ()=> {
        if (lock) {
            return
        }
        x = 0
        if (moveBoo) {
            moveBoo = false
        } else
        move = false
        pasos = 0
        teclas.right = false

    }
    accionTecla.ArrowLeft_Up = ()=> {
        x = 0
        if (moveBoo) {
            moveBoo = false
        } else
        move = false
        pasos = 0
        teclas.left = false
    }
    accionTecla.ArrowUp_Down = ()=> {
        if (lock || gamer.movBoo) {
            return
        }
        if (saltos == true)  {
            //gamer.y -= 120
            y = 0-((gamer.stat.vel*gamer.buffs.vel)*20)
            if (!teclas.top) {
                if (move == true) {
                    moveBoo =true
                }
                move = true       
                teclas.top = true
            }
            
        } else {
            y = 0
        }
    }
    accionTecla.ArrowUp_Up = ()=> {
        y = 0
        if (moveBoo) {
            moveBoo = false
        } else
        move = false
        teclas.top = false
    }
    accionTecla.ArrowDown_Down = ()=> {
        if ((lock == false || gamer.movBoo)) {
            if (caida) {
                if (!teclas.down) {
                    if (move == true) {
                        moveBoo =true
                    }
                    move = true  
                    y = ((gamer.stat.vel*gamer.buffs.vel)*20)
                    teclas.down = true
                }
                
            }
        }
    }
    accionTecla.ArrowDown_Up = ()=> {
        y = 0
        if (moveBoo) {
            moveBoo = false
        } else
        move = false
        teclas.down = false
    }
    var teclaA = 0
    var teclaS = 0
    var salMax = document.getElementById("salMax")
    accionTecla.KeyA_Down = ()=> {
        if(lock == false){
            aggCount("z")
            if (poderes[gamer.poderes[0]].carga && gamer.count[1]>=poderes[gamer.poderes[1]].count && teclaS == 0) {
                if (teclaA == 0) {
                    let sA = setInterval(() => {
                        teclaA++
                        salMax.parentElement.style.display = "block"
                        if(teclaA <= 100){
                            salMax.style.width = teclaA+"%"

                        } else {
                            teclaA = 1
                            
                        }
                        
                    }, poderes[gamer.poderes[0]].carga*100);
                    accionTecla.KeyA_Up =()=> {
                        if (teclaA > 0) {
                            atackGamer(0, teclaA)
                            salMax.parentElement.style.display = "none"
                            window.clearInterval(sA)
                            teclaA = 0
                            accionTecla.KeyA_Up = null
                        }
                    }
                }
            } else if(teclaS == 0)
            atackGamer(0, 10)
        }
    }
    accionTecla.KeyS_Down = ()=> {
        if(lock == false){
            aggCount("x")
            if (poderes[gamer.poderes[1]].carga && gamer.count[1]>=poderes[gamer.poderes[1]].count && teclaA== 0) {
                if (teclaS == 0) {

                    let sS = setInterval(() => {
                        teclaS++
                        salMax.parentElement.style.display = "block"
                        if (teclaS <= 100)
                        salMax.style.width = teclaS+"%"
                        else {
                            teclaS = 1
                        }
                    }, poderes[gamer.poderes[1]].carga*100);
                    accionTecla.KeyS_Up =()=> {
                        if (teclaS > 0) {
                            atackGamer(1, teclaS)
                            salMax.parentElement.style.display = "none"
                            window.clearInterval(sS)
                            teclaS = 0
                            accionTecla.KeyS_Up = null

                        }
                    }
                }
            } else if(teclaA == 0)
            atackGamer(1, 10)
        }
    }
   
    var especiale = 1
    accionTecla.KeyF_Down = ()=> {
        if (lock == false) {
            if (vatime <= veltime) {
                veltime = 0;
                
            } else {
                return
            }
            if (tras.info == 2 && gamer.canal.mana) {
                if (habMana == true) {
                    var mejora = gamer.canal.mejora || "regen"
                    var poder = {
                        damage: gamer.canal.damage || 0,
                        distancia: gamer.canal.dis || 5,
                        estado: {[mejora]: (gamer.canal.poten || 2), timer: 10},
                        mana: gamer.canal.mana2 || 20,
                        tele: gamer.canal.tele || 0,
                        vis: visses[0]
                    }
                    poder.anim = poderes[1].anim
                    if (gamer.canal.especial && gamer.mana > poder.mana) {
                        especiale++
                        if (especiale%2 == 0) {
                            for (let i = 0; i < gamer.canal.especial.length; i+=2) {
                                const element = gamer.canal.especial[i];
                                let increment = gamer.canal.especial[i+1]
                                
                                if(typeof(increment) == "string")
                                gamer[element] = parseFloat(increment)
                                if (typeof(increment) == "number")
                                gamer[element] *= increment
                                if (typeof(increment) == "object") {
                                    if(Array.isArray(increment) == true) {
                                        for (let j = 0; j < increment.length; j++) {
                                            const e = increment[j];
                                            let m = parseFloat(e) || e
                                            if (m >= 0) {
                                                if(typeof(e) == "string")
                                                gamer[element][j] = parseFloat(e)
                                                if (typeof(e) == "number")
                                                gamer[element][j] *= e
                                            }
                                        }
                                    } else
                                    gamer[element] = Object.assign(gamer[element], increment) 
                                }
                                
                            }
                            
                        } else {
                            resetChara()
                        }
                        cargaDem()
                        cargaDom()
                        powImage()
                    }
                    ataque(gamer, false, poder)
                    habMana = false
                    extra.style.backgroundColor = ""
                    var timeout = (gamer.canal.count * 100) || 20000
                    extra.style.boxShadow = ""

                    extra.animate([
                        {backgroundColor: ""},
                        {backgroundColor: "rgba(5, 72, 255, 0.445)"}
                    ], {
                        duration: timeout
                    })
                    var sMana = setTimeout(() => {
                        habMana = true
                        window.clearTimeout(sMana)
                        extra.style.backgroundColor = "rgba(5, 72, 255, 0.445)"
                        extra.style.boxShadow = "0px -5px 10px 0px blue"
                    }, timeout);
                    
                }
            }
            if (tras.info == 3 && gamer.canal.tanques) {
                let cero = 0
                if (gamer.tanque > 0 && !gamer.canal.assing) {
                    if (gamer.carga[gamer.tanque] < gamer.canal.carga[gamer.tanque]) {
                        cero = gamer.carga[gamer.tanque]
                        gamer.carga[gamer.tanque] = 0
                        gamer.tanque--
                    }
                }
                if (gamer.carga[gamer.tanque] >= gamer.canal.carga[gamer.tanque]) {
                    let poder = poderes[gamer.canal.efectos[gamer.tanque]]
                    ataque(gamer, false, poder)
                    gamer.carga[gamer.tanque] = cero
                    if (gamer.tanque > 0) {
                        gamer.tanque --
                    }
                }
            }
            if (tras.tele == true && tras.info == 0) {
                tras.tele = false
                tras.info = tras.guardar
                a()
                var t = setTimeout(() => {
                    gamer.x = tras.x
                    gamer.y = tras.y
                    xScreen = window.innerWidth*0.45
                    moveScreen(0-(gamer.x-xScreen))
                    move = true
                    verificar()
                    
                    a("reverse") 
                    window.clearTimeout(t)
                }, 200);
                function a(dir="normal") {
                    jugador.animate([
                        {padding: "0px", backgroundColor: gamer.stat.color},
                        {padding: "100px", backgroundColor: gamer.stat.color, margin: "-100px"},
                        {padding: "0px", backgroundColor: gamer.stat.color},
                        
                    ], {
                        iterations: 1,
                        duration: 200,
                        direction: dir
                    })
                }
            }
            

        }
    }
    accionTecla.KeyD_Down =  ()=> {
        if ((gamer.poderes[2] && gamer.poderes[2] > 0)) {
                
            if (!velA ) {
                jugador.firstChild.src = galeria[gamer.sprs].extra || galeria[gamer.sprs].basico
                if (gamer.count[2] >= (poderes[gamer.poderes[2]].count || 5)) {
                    ataque(gamer, false, poderes[gamer.poderes[2]])
                    gamer.count[2] = 0
                    
                }
            }

        }
    }
    accionTecla.KeyC_Down = ()=> {
        if (!lock) {
            if (ultiActivate) {
                jugador.firstChild.src = galeria[gamer.sprs].ulti
                ataque(gamer, false, 0, true)
                ulti.style.boxShadow = ""
                ulti.style.backgroundColor = "rgba(140, 140, 140, 0.6)"
                ultiActivate = false
                gamer.combCount = 0
            }
        }
    }
    function aggCount() {
        if (gamer.ultiComb) {
            let prom = (((60* gamer.combCount)/gamer.ultiComb)/100)
            if (gamer.combCount >= gamer.ultiComb) {
                ulti.style.boxShadow = "0px -5px 10px 0px blue"
                ultiActivate = true
            } else if (gamer.combCount > 0)
            ulti.style.backgroundColor = "rgba(5, 72, 255, "+prom+")"
            
        }
    }
    accionTecla.KeyE_Down = ()=> {
        xScreen = window.innerWidth*0.45
        moveScreen(0-(gamer.x-xScreen))
        segX = 0
    }
    var inMenu = false
    function resetChara() {
        lock = true
        if (gamer.estado > 0) {
            oldStat = 0
        } 
        gamer = Object.assign(gamer, personajes[gamer.nombre])
        if(gamer.clan)
        gamer.tipos = tipos(gamer.clan)
        gamer.stat = Object.assign({}, gamer.stat)
        gamer.poderes = [personajes[gamer.nombre].poderes[0], 
        personajes[gamer.nombre].poderes[1], personajes[gamer.nombre].poderes[2]]
        gamer.obj = saveObj
        hab = objetos[gamer.hab]
        obj = objetos[gamer.obj]
        gamer.cria = false
        jugador.style.width = (personajes[gamer.nombre].w || 50)+"px"
        jugador.style.height = (personajes[gamer.nombre].h || 100)+"px" 
        jugador.style.marginTop = (100 - (personajes[gamer.nombre].h || 100))+"px"
        obj1()
        buffRestore()
        loadSystem()
        powImage()
        lock = false
    }
    function powImage() {
        var pows = [
            poderes[gamer.poderes[0]],
            poderes[gamer.poderes[1]],
            ultis[gamer.ulti],
            poderes[gamer.poderes[1]]
        ]
        var nodos = [
            atack, especial, ulti, third
        ]
        let imge = "img/buffs/basico.png"
        for (let i = 0; i < pows.length; i++) {
            const pow = pows[i];
            if (pow.distancia > 6) {
                imge = simbols.shot
            }
            if (pow.tele > 0) {
                imge = simbols.dash
            }
            if (pow.tele == 2 || pow.bomba) {
                imge = simbols.area
            }
            if (pow.damage < 1 && !pow.bomba && pow.efecto) {
                imge = simbols.pain
            }
            if (pow.damage < 1 && !pow.bomba && pow.estado) {
                imge = simbols.buff
            }
            nodos[i].style.backgroundImage = "url("+imge+")"
        }
    }
    accionTecla.KeyQ_Down = ()=> {
        if (inMenu == false && lock == false ) {
            if (gamer.cria) {
                resetChara()
                if (gamer.jVida) {
                    gamer.vida = gamer.jVida
                    gamer.salud = gamer.jSalud
                    gamer.jVida = false
                }
                gamer.cria = false
            }
            mini.style.overflowY = "scroll"
            inMenu = true
            lock = true
            x = 0
            mini.innerHTML = ""
            var menu_letra = creacion({tag: "h1", class:"menu", style:{}})
            menu_letra.innerText = "Biyous"
            mini.appendChild(menu_letra)
            if (criaturas.length > 0) {
                // codigo para ver las criaturas
                for (let i = 0; i < criaturas.length; i++) {
                    const cria = criaturas[i];
                    let mensaje = creacion({tag:"div", class:"objeto", style:{}})
                    mensaje.innerHTML = cria.alias+" <p> Especie: "+save2[i][0]+"<br> \n\
                    Atq: "+((cria.stat.atq).toString()).substring(0, 4)+"<br> \n\
                    Def: "+((cria.stat.def).toString()).substring(0, 4)+"<br> \n\
                    Raf: "+((cria.stat.raf).toString()).substring(0, 4)+"<br> \n\
                    Res: "+((cria.stat.res).toString()).substring(0, 4)+"<br> \n\
                    Vel: "+((cria.stat.vel).toString()).substring(0, 4)+"<br> \n\
                    Hab: "+objetos[cria.hab].hab+"<br>"+objetos[cria.hab].desc+" <br>\n\
                    Obj: "+objetos[cria.obj].nombre+"<br>"+objetos[cria.obj].descripcion+"</p>"
                    mini.appendChild(mensaje)
                    mensaje.onclick = ()=> {
                        if (cria.salud <= 0) {
                            return
                        }
                        dataCriaLoad(i)
                        accionTecla.KeyQ_Down()
                    }
                }
            } else {
                var mensaje = creacion({tag:"div", class:"objeto", style:{}})
                mensaje.innerHTML = "No tienes Biyous. <p> Puedes capturar Biyous si equipas los objetos debidos </p>"
                
                mini.appendChild(mensaje)

            }
        } else if (inMenu == true) {
            mini.style.overflowY = ""
            lock = false
            inMenu = false
            mini.innerHTML = ""
            mini.append(img, vida, info)

        }
    }
    function dataCriaLoad(i) {
        const cria = criaturas[i]
        gamer.sprs = cria.sprs
        jugador.style.width = cria.w+"px"
        jugador.style.height = cria.h+"px"
        jugador.style.marginTop = (100 - cria.h)+"px"
        gamer.poderes = cria.poderes
        gamer.stat = cria.stat
        saveObj = gamer.obj
        gamer.obj = cria.obj
        gamer.hab = cria.hab
        gamer.i = i
        hab = objetos[gamer.hab]
        obj = objetos[gamer.obj]
        gamer.cria = true
        gamer.biyou = i
        obj1()
        powImage()
        return cria        
    }
    function loadSystem(mod = personajes[gamer.nombre]) {
        charge1.style.width = ""
        charge2.style.width = ""
        charge3.style.width = ""

        charge1.style.display = ""
        charge2.style.display = ""
        charge3.style.display = ""

        charge1.style.background = ""
        charge2.style.background = ""
        charge3.style.background = ""

        charge1.style.marginLeft = ""
        charge2.style.marginLeft = ""
        charge3.style.marginLeft = ""

        extra.style.boxShadow = ""
        extra.style.backgroundColor = ""
        gamer.mana = false
        gamer.tanques = false
        gamer.canal = {}
        tras.info = 0
        if (mod.sistema == 1) {
            tras.info = 2
            gamer.canal = mod.canal
            gamer.mana = mod.canal.mana || mod.vida
            charge2.style.display = "none"
            charge3.style.display = "none"
            charge1.style.width = "100%"
            charge1.style.background = gamer.stat.color
            extra.style.backgroundColor = "rgba(5, 72, 255, 0.445)"
            extra.style.boxShadow = "0px -5px 10px 0px blue"
        }
        if (mod.sistema == 2 || mod.sistema == 3) {
            gamer.canal = mod.canal
            tras.info = 3
            gamer.tanque = 0
            gamer.tanques = mod.canal.tanques
            gamer.carga = [0, 0, 0]
            if (mod.canal.tanques.length == 1) {
                charge2.style.display = "none"
                charge3.style.display = "none"
                charge1.style.width = "90%"
            }
            if (mod.canal.tanques.length == 2) {
                charge3.style.display = "none"
                charge1.style.width = "45%"
                charge1.style.width = "45%"
            }
        }
        if (tras.info > 0) {
            extra.parentElement.style.display = ""
        } else {
            extra.parentElement.style.display = "none"
        }
        if (mod.poderes[2]) {
            third.parentElement.style.display = ""
        } else {
            third.parentElement.style.display = "none"
        }
        var array = [
            "img/buffs/string.png",
            "img/buffs/extra.png",
            "img/buffs/mana.png",
            "img/buffs/combo.png",
        ]
        extra.style.backgroundImage = "url("+array[tras.info]+")"

    }
    accionTecla.KeyW_Down = ()=> {
        if (inMenu == false && lock == false) {
            mini.style.overflowY = "scroll"
            inMenu = true
            lock = true
            x = 0
            mini.innerHTML = ""
            var menu_letra = creacion({tag: "h1", class:"menu", style:{}})
            menu_letra.innerText = "Menu"
            var stats = creacion({tag:"div", class:"objeto", style:{}})
            var sAtq = ((100*gamer.stat.atq)/maxStats.atq)
            var sDef = ((100*gamer.stat.def)/maxStats.def)
            var sRaf = ((100*gamer.stat.raf)/maxStats.raf)
            var sRes = ((100*gamer.stat.res)/maxStats.res)
            var sVel = ((100*gamer.stat.vel)/maxStats.vel)

            var cAtq = gamer.stat.color;
            var cDef = gamer.stat.color;
            var cRaf = gamer.stat.color;
            var cRes = gamer.stat.color;
            var cVel = gamer.stat.color; 

            if (sAtq > 100) {
                sAtq -= 100
                cAtq += "; box-shadow: 2px 2px 1px 2px rgb(120 250 200)"
            }
            if (sDef > 100) {
                sDef -= 100
                cDef += "; box-shadow: 2px 2px 1px 2px rgb(120 250 200)"
            }
            if (sRaf > 100) {
                sRaf -= 100
                cRaf += "; box-shadow: 2px 2px 1px 2px rgb(120 250 200)"
            }
            if (sRes > 100) {
                sRes -= 100
                cRes += "; box-shadow: 2px 2px 1px 2px rgb(120 250 200)"
            }
            if (sVel > 100) {
                sVel -= 100
                cVel += "; box-shadow: 2px 2px 1px 2px rgb(120 250 200)"
            }

            if (sAtq > 100) {
                sAtq -= 100
                cAtq += "; box-shadow: 2px 2px 1px 2px rgb(250 150 200)"
            }
            if (sDef > 100) {
                sDef -= 100
                cDef += "; box-shadow: 2px 2px 1px 2px rgb(250 150 200)"
            }
            if (sRaf > 100) {
                sRaf -= 100
                cRaf += "; box-shadow: 2px 2px 1px 2px rgb(250 150 200)"
            }
            if (sRes > 100) {
                sRes -= 100
                cRes += "; box-shadow: 2px 2px 1px 2px rgb(250 150 200)"
            }
            if (sVel > 100) {
                sVel -= 100
                cVel += "; box-shadow: 2px 2px 1px 2px rgb(250 150 200)"
            }

            stats.innerHTML = "Estadisticas. <div class='p'>\n\
            Atq. Fisico: <div><div style='width:"+sAtq+"%; background-color: "+cAtq+"'></div></div><br> \n\
            Def. fisica: <div><div style='width:"+sDef+"%; background-color: "+cDef+"'></div></div><br> \n\
            Pod. Rafaga: <div><div style='width:"+sRaf+"%; background-color: "+cRaf+"'></div></div><br> \n\
            Def. Rafaga: <div><div style='width:"+sRes+"%; background-color: "+cRes+"'></div></div><br> \n\
            .Velocidad.: <div><div style='width:"+sVel+"%; background-color: "+cVel+"'></div></div><br> \n\
            Hab: "+hab.hab+"<br>"+hab.desc+"</div>"
            mini.append(menu_letra, stats) 
            var obje = creacion({tag:"div", class:"objeto", style:{}})
            let objeto = objetos[gamer.obj]
            obje.innerHTML = "Objeto equipado<p> "+objeto.nombre+": "+objeto.descripcion+" </p>"
            if (gamer.obj > 0) {
                mini.append(obje)
            }
            obje.onclick = ()=> {
                if (gamer.objetos.indexOf(0) > -1) {
                    gamer.objetos[gamer.objetos.indexOf(0)] = gamer.obj
                } else {
                    gamer.objetos.push(gamer.obj)
                }
                if (obj.tipo == 1) {
                    var keys = Object.keys(obj.caract)
                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
                        gamer.buffs[key] /= obj.caract[key]
                    }
                }
                gamer.obj = 0
                obj = objetos[0]
                accionTecla.KeyW_Down()
            }

            for (let i = 0; i < gamer.objetos.length; i++) {
                const objeto_index = gamer.objetos[i];
                let objeto = objetos[objeto_index]
                let nodo = creacion({tag:"div", class:"objeto", style:{}})
                nodo.innerHTML = objeto.nombre+"<p> "+objeto.descripcion+" </p>"
                nodo.onclick = ()=> {
                    if (gamer.obj > 0) {
                        gamer.objetos[i] = gamer.obj
                        gamer.obj = objeto_index
                    } else {
                        gamer.obj = objeto_index
                        gamer.objetos[i] = 0
                    }
                    obj = objeto
                    saveObj = gamer.obj
                    if (gamer.cria) {
                        dataCriaLoad(gamer.biyou)
                    } else 
                    gamer = Object.assign({}, gamer, personajes[gamer.nombre])
                    if (obj.tipo == 1) {
                        var keys = Object.keys(obj.caract)
                        for (let i = 0; i < keys.length; i++) {
                            const key = keys[i];
                            gamer.buffs[key] *= obj.caract[key]
                        }
                    }
                    if (obj.tipo == 3) {
                        var keys = Object.keys(obj.caract)
                        for (let i = 0; i < keys.length; i++) {
                            const key = keys[i];
                            if (key == "salud") {
                                gamer[key] *= obj.caract[key]
                            } else
                            gamer[key] = obj.caract[key]
                        }
                        obj = objetos[0]
                        gamer.obj = 0
                    }
                    accionTecla.KeyW_Down()
                }
                if (objeto_index > 0) {
                    mini.appendChild(nodo)
                }
                
            }
        } else if (inMenu == true) {
            mini.style.overflowY = ""
            lock = false
            inMenu = false
            mini.innerHTML = ""
            mini.append(img, vida, info)
        }
    }
    accionTecla.KeyZ_Down = ()=> {
        if (lock == false) {
            aggCount("B")
            atackGamer(2)
        }
    }
    accionTecla.KeyX_Down = ()=> {
        if (lock == false) {
            accion()
        }
    }
    var veltime = 5;
    function atackGamer(num, carga) {
        if (!velA && vatime <= veltime && !gamer.stund) {
            var n = ["basico", "especial", "ataque"]
            jugador.firstChild.src = galeria[gamer.sprs][n[num]] || galeria[gamer.sprs].basico
            ataque(gamer, false, num, false, 0, 0, null, carga)
            veltime = 0;
        }
        
    }
    function moveScreen(newleft) {
        if (left == newleft) {
            return
        }
        pantalla.animate([
            {marginLeft: left+"px"},
            {marginLeft: newleft+"px"}
        ], {iterations: 1, duration:100, fill:"forwards"})
        var t = setTimeout(() => {
            pantalla.style.marginLeft = newleft+"px"
            left = newleft
            window.clearTimeout(t)      
        }, 90);
        if (hab.tipo == 5) {
            hab.caract(gamer)
        }
        if (obj.tipo == 5) {
            obj.caract(gamer)
        }
    }
    // metodos
    function cambiarPantalla(texto) {
        var pant = document.createElement("div")
        pant.innerHTML = texto
        body.appendChild(pant)
        main.style.display = "none"
        return pant
    }
var callendo = false
    function verificar() {
        
        left = parseFloat(pantalla.style.marginLeft) || 0
        var block = false
        var clases = ubicacion[Math.round(gamer.y+90)]
        var paredes = bloqueos[Math.round(gamer.y+50)]
        var blocks = ubicacion[Math.round(gamer.y)]
        if (blocks) {
            blocks = ubicacion[Math.round(gamer.y)][Math.round(gamer.x+24)]
            if (blocks) {
                if (blocks.includes("bloque")) {
                    gamer.y += 20
                    saltos = false
                }
            }
        }

        if (paredes) {
            var dire = 50
            if (x < 0) {
                dire = 0
            }
            paredes = bloqueos[Math.round(gamer.y+50)][Math.round(gamer.x+dire)]

        }   
        
        if (paredes) {
            if (paredes.includes(true)) {
                if (dire == 1 || dire == 2) {
                    gamer.y -= y
                } else
                gamer.x -= x
    
    
                block = true
            }
        }
        if (clases) {
            clases = ubicacion[Math.round(gamer.y+90)][Math.round(gamer.x+24)]
            if (clases) {
                var ind = []
                if (clases.length > 1) {
                    for (let c = 0; c < clases.length; c++) {
                        const element = clases[c];
                        if (nombreEstado.includes(element)) {
                            ind.push(element)
                        }
                    }
                }
                if (clases.includes("piso")) {
                    if (callendo) {
                        y = 0;
                        x = 0;
                        move = false
                        callendo = false
                    }
                    if (clases.includes("bordeTop")) {
                        saltos = false
                        if(y < 0)
                        y = 0
                    } else {
                        saltos = true
                    }
                    if (clases.includes("bordeMid")) {
                        caida = false
                        if(y > 0)
                        y = 0
                    } else {
                        caida = true
                    }
                } else {
                    y = 70
                    x = 0
                    move = true
                    callendo = true

                }
                if (clases.includes("meta")) {
                   gamer.nivel += 1
                   levelLoad(0)
                   localStorage.setItem("save", JSON.stringify(gamer)) 
                }
                if (clases.includes("teleport")) {
                    levelLoad(gamer.nivel)
                }
                if (clases.includes("Auch")) {
                    gamer.tiempo = 10
                    gamer.salud -= 10
                }
                if (clases.includes("accion")) {
                    acciones[clases[2]](gamer, mods, 0)
                }
                if (clases.includes("wrap")) {
                    levelLoad(clases[2])
                    gamer.x = niveles[clases[2]].x || 100
                    gamer.y = niveles[clases[2]].y || 400
                    
                }
                if (clases.includes("load")) {
                    main.style.display = "none"
                    body.append(print)
                    levelLoad(clases[2])
                    gamer.x = niveles[clases[2]].x || 100
                    gamer.y = niveles[clases[2]].y || 400
                }
                if (ind.length > 0) {
                    for (let k = 0; k < ind.length; k++) {
                        const element = ind[k];
                        gamer.estado = nombreEstado.indexOf(element)
                        
                    }
                }

            } 
        } else {
            y = 70
            x = 0
            move = true
            callendo = true
        }
        var num = window.innerWidth-100
        if (!gamer.x < 100) {
            if (x < 0 && block == false && move == true) {
                xScreen += x

                if (xScreen < num*0.2) {
                    accionTecla.KeyE_Down()
                }
            }
        }
        if (!(gamer.x > nivel.largo-100)){
            if (x > 0 && block == false && move == true) {
                xScreen += x
                if (xScreen > num*0.9) {
                    accionTecla.KeyE_Down()

                    
                }
            }
        }
        
        if (gamer.y > 800) {
            gamer.y = 800
        }
        var promedio = (gamer.salud * 100) / gamer.vida
        if (gamer.cria) {
            promedio = (criaturas[gamer.i].salud * 100) / criaturas[gamer.i].vida 

        }
        let sobre = 0
        if (promedio > 100) {
            sobre = promedio - 100
            promedio = 100
        }
        alive.style.width = promedio+"%"
        if (gamer.salud <= 0) {
            main.style.display = "none"
            var pant = document.createElement("div")
            pant.style.color = "white";
            pant.style.width = "100%"
            pant.style.marginLeft = ""
            pant.innerHTML = "<h1 style='text-align: center'> Perdiste </h1>"
            var boton = document.createElement("input")
            boton.type = "button"
            boton.value = "Reiniciar"
            boton.classList.add("perder")
            boton.onclick = ()=> {
                location.reload()
            }
            pant.append(boton)
            window.clearInterval(set)
            window.clearInterval(set2)
            body.append(pant)
            estado.innerText = "Estado: Destruido"
            informe.innerText = "Fuiste derrotado, pero no te rindas..."

        } 
        if (gamer.cria && criaturas[gamer.i].salud <= 0) {
            restore = gamer.restore
            if (inMenu) {
                accionTecla.KeyQ_Down()
            }
            accionTecla.KeyQ_Down()
        }
        if (promedio <= 50) {
            alive.style.backgroundColor = "yellow"
        } 
        if (promedio <= 25) {
            alive.style.backgroundColor = "red"
            if (hab.tipo == 3) {
                var keys = Object.keys(hab.caract)
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    if (key == "salud") {
                        if(restore >= gamer.restore)
                        gamer[key] *= hab.caract[key]
                    } else
                    gamer[key] = hab.caract[key]

                }
            }
        }
        if (promedio > 50) {
            alive.style.backgroundColor = "rgb(128, 255, "+(100+sobre)+")"
        }
        if (gamer.mana && !gamer.canal.tanques) {
            var prom = (gamer.mana * 100) / (gamer.canal.mana || gamer.vida)
            if (prom > 100) {
                prom = 100
            }
            charge1.style.width = prom+"%"
            charge1.style.marginLeft = (0-(100-prom))+"%"
        }  
        

    }
    function teclaAbajo(key) {
        var tecla = key.code
        
        if (accionTecla[tecla+"_Down"]) {
            accionTecla[tecla+"_Down"]()
        }
    }
    function teclaArriba(key) {
        var tecla = key.code;
        
        if (accionTecla[tecla+"_Up"]) {
            accionTecla[tecla+"_Up"]()
        }
    }
    function levelLoad(n) {
        pantalla.innerHTML = ""
        ubicacion = []
        mods = []
        bloqueos = []
        nivel = niveles[n]
        gamer.x = nivel.x || 100
        gamer.y = nivel.y || 650
        move = true
        pantalla.style.marginLeft = "0px"
        moveScreen(100)
        pantalla.style.backgroundColor = nivel.color
        if (nivel.image) {
            pantalla.style.backgroundImage = "url("+nivel.image+")"
            
        }
        pantalla.style.width = nivel.largo+"px"

        for (let i = 0; i < nivel.pisos.length; i++) {
            const element = nivel.pisos[i];
            var color = nivel.piso
            let height = element[1]
            if (element[4] && element[4] != "") {
                color = element[4]
            }
            var nodo = piso(element[0], element[1], element[2], element[3], color);
            var clase = "piso"
            if (element[5]) {
                nodo.classList.add(element[5])
                clase = element[5]
            }
            for (let h = 0; h < height; h++) {
                if (!ubicacion[element[2]+h]) {
                    ubicacion[element[2]+h] = []
                }
                for (let j = 0; j < element[0]; j++) {
                   
                    if (ubicacion[element[2]+h][element[3]+j]) {
                        ubicacion[element[2]+h][element[3]+j].push(clase)
                        
                    } else {
                        ubicacion[element[2]+h][element[3]+j] = [clase]
                    }
                    if (clase != "piso") {
                        ubicacion[element[2]+h][element[3]+j].push("piso")
                        
                    }
                    if (h < 70) {
                        ubicacion[element[2]+h][element[3]+j].push("bordeTop")
                    } 
                    if (h > height-70) {
                        ubicacion[element[2]+h][element[3]+j].push("bordeMid")
                    }
                    if (clase == "accion") {
                        if(element[5])
                        ubicacion[element[2]+h][element[3]+j][2] = element[6] 
                        else
                        ubicacion[element[2]+h][element[3]+j][2] = 0
                    }
                    if (clase == "wrap" || clase == "load") {
                        if(element[6]) {
                            ubicacion[element[2]+h][element[3]+j][2] = element[6]
                        } else 
                        ubicacion[element[3]+h][element[3]+j][2] = 0

                    }
                    
                }
                

                
            }

            pantalla.append(nodo)
        }
       
        for (let i = 0; i < nivel.npcs.length; i++) {
            const modInfo = nivel.npcs[i];
            let mod = npc(modInfo[0], modInfo[1], modInfo[2], modInfo[3], modInfo[4], modInfo[5])
            mod.spr.setAttribute("mod", i)
            mod.ofMove = 0
            pantalla.appendChild(mod.spr)
            let pasos = 0
            mod.restore = 0
            var atackMod = []
            let sMods = setInterval(() => {
                if(mod.stat.salud < mod.stat.vida)
                mod.restore += 0.1
                if (lock == false) {
                    for (let a = 0; a < mod.poderes.length; a++) {
                        mod.count[a] += 0.1*mod.buffs.salto
                    }

                    let paredes = bloqueos[Math.round(mod.y+50)]
                    if (paredes && mod.ofMove > 1) {
                        paredes = bloqueos[Math.round(mod.y+50)][Math.round(mod.x+24)]
                        if (paredes) {
                            let modDirec = -1
                            if ( mod.x-mod.pasoX < 0) {
                                modDirec = 1
                            }
                            mod.x -= 50*modDirec
                        }
                    }
                    let clases = Math.round(mod.y+100)
                        
                        if (clases) {
                            clases = ubicacion[Math.round(mod.y+100)][Math.round(mod.x+24)]
                            mod.pisar = false
                            if (clases) {
                                if (clases.includes("piso")) {
                                    mod.pisar = true
                                } 
                            } 
                        } else {
                            mod.pisar = false
                        }
                        if (mod.pisar == false) {
                            mod.y += 70
                        }
                        if (mod.y > 800) {
                            mod.stat.salud = 0
                        }
                        if (mod.x <= 100) {
                            mod.x = 100
                        }
                        if (mod.x >= nivel.largo-100) {
                            mod.x = nivel.largo-100
                        }
                    if (!mod.movBoo && !mod.stund) {
                        mod.ofMove++
                        atackMod = movs[mod.tipo](mod)
                        if (!atackMod) {
                            atackMod = [false, false]
                        }
                    }
                    if (mod.x != mod.pasoX || mod.y != mod.pasoY) {
                        mod.spr.animate([
                            {left: mod.pasoX+"px", top: mod.pasoY+"px"},
                            {left: mod.x+"px", top: mod.y+"px"}
                        ],
                            {
                                duration: 100,
                                iterations: 1,
                                fill: "forwards"
                            }
                        )
                        if (mod.x-mod.pasoX < 0) {
                                
                            mod.spr.firstChild.style.transform = "rotateY(180deg)"
                        } else {
                            mod.spr.firstChild.style.transform = ""
                        }
                        if (mod.x-mod.pasoX != 0) {
                            pasos++
                            mod.spr.firstChild.src = mod.sprs.mover[pasos%2]
                            
                        } else {
                            mod.spr.firstChild.src = mod.sprs.normal
                        }
                        
                        mod.pasoX = mod.x
                        mod.pasoY = mod.y
                        
                        
                        mod.buffs.inmune = 1
                        
                    }
                    if (mod.maldad && atackMod.includes(true) && !mod.stund) {
                        if (mod.atack == false) {
                            mod.spr.firstChild.src = mod.sprs.basico
                            ataque(mod, true, atackMod.indexOf(true))
                            mod.atack = true
                            
                        }
                    }
                    if (mod.restore >= mod.stat.restore && mod.stat.salud < mod.stat.vida) {
                        mod.stat.salud += (mod.buffs.regen*mod.stat.regen)*0.1
                    }
                    let limpiar = true
                    if (mod.potens.length > 0) {
                        for (let i = 0; i < mod.potens.length; i++) {
                            const potencia = mod.potens[i];
                            if (potencia.aply == false) {
                                let keys = Object.keys(potencia);
                                for (let j = 0; j < keys.length; j++) {
                                    const key = keys[j];
                                    if (mod.buffs[key]) {
                                        if (key == "poderes") {
                                            mod.buffs.poderes = potencia.poderes
                                        } else
                                        mod.buffs[key] *= potencia[key]
                                    }
                                }
                                potencia.aply = true
                                potencia.fin = false
                                limpiar = false
                                potencia.timer -= 0.1
                                if (i < mod.potens.length-1) {
                                    mod.potens[i+1] += 2
                                }
                            } else {
                                if (potencia.timer <= 0 && !potencia.fin) {
                                    let keys = Object.keys(potencia);
                                    for (let j = 0; j < keys.length; j++) {
                                        const key = keys[j];
                                        if (mod.buffs[key]) {
                                            if (key == "poderes") {
                                                mod.buffs.poderes = [-1, -1]
                                            } else
                                            mod.buffs[key] /= potencia[key]
                                        }
                                    }
                                    potencia.fin = true

                                } else if (!potencia.fin) {
                                    limpiar = false
                                    potencia.timer -= 0.1
                                }
                            }
                        }
                        if (limpiar) {
                            mod.potens = []
                            if(mod.estado == 0)
                            mod.timer = 1
                        }
                    }
                    if (mod.buffs.visible < 1) {
                        mod.spr.style.visibility = "hidden"
                    } else {
                        mod.spr.style.visibility = ""
                    }
                    if (mod.tiempo >= 0) {
                        mod.tiempo--
                        if (mod.tiempo == 0) {
                            mod.estado = 0
                        }
                    }
                    if (mod.timer > 0) {
                        mod.timer--
                        if (mod.timer == 0) {
                            mod.buffs =  {
                                vel: 1,
                                atq: 1,
                                shield: 1,
                                vat: 1,
                                salto: 1,
                                caida: 1,
                                visible: 1,
                                def: 1,
                                crit: 1,
                                inmune: 1,
                                regen: 1,
                                res: 1,
                                raf: 1,
                                poderes: [-1, -1]
                            }
                        }
                    }
                    if (mod.oldStat != mod.estado){
                        mod = estados[mod.estado](mod);
                        mod.oldStat = mod.estado
                    }
                    if (mod.barraVida) {
                        
                        var por = (mod.stat.salud * 100) / mod.stat.vida
                            if (por > 100) {
                                por = 100
                            }
                        mod.barraVida.firstChild.style.width = por+"%"
                    }
                    if (mod.stat.salud <= 0 || !mod.stat.salud) {
                        // eventos de muerte
                        if (mod.barraVida) {
                            mod.barraVida.firstChild.style.width = 0+"%"
                        }
                        mod.spr.firstChild.src = mod.sprs.perder
                        mod.spr.style.marginTop = "60px"
                        if (mod.stat.obj > 0 && mod.y > 0) {
                            var k = gamer.objetos.indexOf(0)
                            if (k > -1) {
                                gamer.objetos[k] = mod.stat.obj
                            } else {
                                gamer.objetos.push(mod.stat.obj)
                            }
                        }
                        
                        let d = setTimeout(() => {
                            mod.maldad = false
                            mod.spr.remove()
                            window.clearTimeout(d)
                        }, 500);
                        window.clearInterval(sMods)
                    }
                    
                }
            }, 100);

        }
        for (let i = 0; i < nivel.carteles.length; i++) {
            const cartel = nivel.carteles[i];
            var tag = "div"
            if (cartel[4].charAt(0) == "!") {
                tag = "img"
            }
            var val = cartel[4].substring(1)
            let nodo = creacion({tag:tag, style:{
                width:cartel[0]+"px", 
                height:cartel[1]+"px", 
                left: cartel[2]+"px", 
                top:cartel[3]+"px",
            }, class: "cartel"})
            nodo.style.zIndex = cartel[8]
            if (tag == "div") {
                nodo.style.backgroundColor = val
            } else {
                nodo.src = val
            }
            var width = cartel[0]
            var height = cartel[1]
            if (width < 100) {
                width = 100
            }
            if (height < 50) {
                height = 50
            }
            if (cartel[5]) {
                for (let h = 0; h < cartel[1]; h++) {
                    if (!ubicacion[cartel[3]+h]) {
                        ubicacion[cartel[3]+h] = []
                    }
                    if (!bloqueos[cartel[3]+h]) {
                        bloqueos[cartel[3]+h] = []
                    }
                    for (let j = 0; j < cartel[0]; j++) {
                        
                        if (ubicacion[cartel[3]+h][cartel[2]+j]) {
                            ubicacion[cartel[3]+h][cartel[2]+j].push("piso")
                            
                        } else {
                            ubicacion[cartel[3]+h][cartel[2]+j] = ["piso"]
                        }
                        if (bloqueos[cartel[3]+h][cartel[2]+j]) {
                            bloqueos[cartel[3]+h][cartel[2]+j].push(true)
                            
                        } else {
                            bloqueos[cartel[3]+h][cartel[2]+j] = [true]
                        }
                        
                    }
                    
    
                    
                }
            }
            if (cartel[7]) {
                let acct = {
                    x: cartel[2],
                    y: cartel[3],
                    w: width,
                    h: height,
                    cartel: true,
                    accion: cartel[6],
                    puerta: cartel[9] || false
                }
                mods.push(acct)
            }
            pantalla.append(nodo)
        }
        pantalla.appendChild(jugador)
        jugador.style.top = gamer.y+"px";
        jugador.style.left = gamer.x+"px"
        if (hab.tipo == 4) {
            hab.caract(gamer, 1)
            obj1()
        }
        resetChara()
        move = false
        moveBoo = false
        especiale =1
        public.mods = mods
        //console.log(ubicacion)
    }
    function buffRestore () {
        gamer.potens = []
        gamer.buffs =  {
            vel: 1,
            atq: 1,
            shield: 1,
            vat: 1,
            salto: 1,
            caida: 1,
            visible: 1,
            def: 1,
            crit: 1,
            inmune: 1,
            regen: 1,
            res: 1,
            raf: 1,
            poderes: [-1, -1],
            
        }
    }
    function obj1() {
        if (obj.tipo == 1) {
            var keys = Object.keys(obj.caract)
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                gamer.buffs[key] *= obj.caract[key]
            }
        }
        if (hab.tipo == 1) {
            var keys = Object.keys(hab.caract)
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                gamer.buffs[key] *= hab.caract[key]
            }
        }
    }
    var movs = [
        function () {//0
            return [false]
        },
        function (mod) {//1
            var r = [false, false]
            if (!mod.movBoo) {
                if (mod.ofMove%(mod.pasos*2) < mod.pasos) {
                    mod.x -= (mod.stat.vel*mod.buffs.vel)*10
                    if(gamer.buffs.visible >= 1)
                    r = [false, true]
                }
                if (mod.ofMove%(mod.pasos*2) >= mod.pasos ) {
                    mod.x += (mod.stat.vel*mod.buffs.vel)*10
                    if(gamer.buffs.visible >= 1)
                    r = [true, false]
                }
                
            }
            return r
        },
        function (mod) {//2
            var r = [false, false]
            if (mod.count[1] >= poderes[mod.poderes[1]].count) {
                r = [false, true]
                
            } 
            if (!mod.movBoo) {
                if (gamer.x < mod.x+(mod.pasos)*10 && gamer.x > mod.x-(mod.pasos)*10) {
                    if (gamer.x - mod.x < 0) {
                        mod.x -= (mod.stat.vel*mod.buffs.vel)*10
                    } else  {
                        mod.x += (mod.stat.vel*mod.buffs.vel)*10
                    }
                    if(gamer.buffs.visible >= 1)
                    r = [true, false]
                }
            }
            return r
        },
        function (mod) {//3
            var r = [false, false]
            if (!mod.movBoo && gamer.buffs.visible >= 1) {
                if (gamer.x < mod.x+(mod.pasos)*10 && gamer.x > mod.x-(mod.pasos)*10) {
                    if (gamer.x - mod.x < 0) {
                        mod.x -= (mod.stat.vel*mod.buffs.vel)*10
                    } else  {
                        mod.x += (mod.stat.vel*mod.buffs.vel)*10
                    }
                }
                if (mod.count[1] >= poderes[mod.poderes[1]].count && ((gamer.x - mod.x > 50) || (mod.x - gamer.x > 50)) ) {
                    r = [false, true]
                } else {
                    r = [true, false]
                }
            } else if(!mod.movBoo) {
                r = movs[1](mod)
            }
            return r 
        },
        function (mod) {//4
            var r = [false, false, false, false]
            if (!mod.cargaHab) {
                mod.count[3] = 100
                mod.cargaHab = true
            }
            if (!mod.movBoo) {
                if (gamer.x < mod.x+(mod.pasos)*10 && gamer.x > mod.x-(mod.pasos)*10) {
                    if ((gamer.x > mod.x+(mod.pasos*5) || gamer.x < mod.x-(mod.pasos*5)) && gamer.buffs.visible >= 1) {
                        if (mod.count[3] >= poderes[mod.poderes[3]].count) {
                            r[3] = true
                        } else {
                            r[2] = true
                        }
                        if (mod.x - gamer.x > 0) {
                            mod.x -= 1
                        } else {
                            mod.x += 1
                        }
                        if ((gamer.x > mod.x+(100) || gamer.x < mod.x-(100))) {
                            r[2] = true
                            r[0] = false
                            r[1] = false
                        }
                    } else {
                        r = movs[2](mod)
                        r.push(false)
                        r.push(false)
                    }
    
                }
                
            }
            return r 
        },
        function (mod) {
           
        }
        
    ]
    function npc(tipo, especie, x=0, y=0, pasos=10, maldad=false) {
        var especies = {}
        let nuevas = Object.keys(entidades)
        for (let i = 0; i < nuevas.length; i++) {
            const nueva = nuevas[i];
            especies[nueva] = nuevaEspecie(entidades[nueva][0], entidades[nueva][1])
        }
        var poderes = poder(especie)
        function poder (especie) {
            var r = entidades[especie][3]
            if (!r) {
                r = [0, 0]
            }
            return r
        }
        var entidad = {
            tipo: tipo,
            especie: especie,
            tipos: especies[especie][1],
            stat: especies[especie][0],
            stund: false,
            buffs: {
                vel: 1,
                atq: 1,
                shield: 1,
                vat: 1,
                salto: 1,
                caida: 1,
                visible: 1,
                def: 1,
                crit: 1,
                inmune: 1,
                regen: 1,
                res: 1,
                raf: 1,
                poderes: [-1, -1]
            },
            potens: [],
            timer: 0,
            x: x,
            y: y,
            estado: 0,
            oldStat: 0,
            count: [0, 0],
            pasoX: x,
            pasoY: y,
            saltos: 1,
            tiempo: -1,
            pisar: true,
            atack: false,
            ataques: 0,
            pasos: pasos,
            maldad: maldad,
            poderes: poderes,
            spr: persona("", galeria[entidades[especie][2]].normal, entidades[especie][0].h, entidades[especie][0].w),
            sprs: galeria[entidades[especie][2]]
        }
        entidad.spr.style.left = x + "px"
        entidad.spr.style.top = y + "px"
        if (maldad) {
            var vid = document.createElement("div")
            vid.classList.add("vid")
            var sal = document.createElement("div")
            sal.classList.add("sal")
            vid.appendChild(sal)
            entidad.spr.appendChild(vid)
            entidad.barraVida = vid
        }
        if (entidad.stat.sistema > 0) {
            entidad.canal = entidad.stat.canal
            if (entidad.stat.sistema == 1) {
                entidad.mana = entidad.canal.mana
            }
            else if(entidad.stat.sistema == 2) {
                entidad.tanque = 0
                entidad.tanques = entidad.canal.tanques
                entidad.carga = [0, 0, 0]
            }
        }
        mods.push(entidad)
        return entidad
        function nuevaEspecie(prop={}, prop2={}) {
            var retorno = {
                vida: 10,
                salud: 1,
                vel: 1,
                atq: 1,
                def: 1,
                obj: 0,
                salto: 1,
                caida: 1,
                vis: 100,
                dis: 200,
                hab: 0,
                objProb: 5,
                restore: 3,
                regen: 1,
                res: 1,
                raf: 1,
                sistema: 0,
                canal: {}
            }
            var retorno2 = {
                tipo: [0],
                debil: [1],
                resis: [2],
                inmune: [],
            }
            retorno = Object.assign({}, retorno, prop);
            retorno2 = Object.assign({}, retorno2, prop2);
            if (retorno.obj > 0) {
                if (aleatorio(0, 10) > retorno.objProb) {
                    retorno.obj = 0
                }
            }
            var obj = objetos[retorno.obj]
            var hab = objetos[retorno.hab]
            if (obj.tipo == 1) {
                var keys = Object.keys(obj.caract)
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    retorno[key] *= obj.caract[key]
                }
            }
            if (hab.tipo == 1) {
                var keys = Object.keys(hab.caract)
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    retorno[key] *= hab.caract[key]
                }
            }
            
            if (retorno.salud < retorno.vida)
            retorno.salud = retorno.vida
            return [retorno, retorno2]
        }
        
    }
    function persona(color, src, h, w) {
        var nodo 
        var style = {
            position: "absolute"
        }
        if (src) {
            nodo = creacion({
                tag: "img",
                src: src,
                style: style,
                class: "persona"
            })
        }
        else {
            nodo = creacion({
                style: style,
                class: "persona"
            })
            nodo.style.backgroundColor = color;
        }
        if (w) {
            nodo.style.width = w+"px"
        }
        if (h) {
            nodo.style.height = h+"px"
            nodo.style.marginTop = (100-h)+"px"
        }
        return nodo
    }
    function piso(width, height, top=790, left=0, color = "green") {
        
        var pis = {
            class: "piso",
            style: {
                width: width+"px",
                height: height+"px",
                position: "absolute",
                top: top+"px",
                left: left+"px"
            }
        }
        var nodo = creacion(pis);
        if (color.charAt(0) == "!") {
            nodo.style.backgroundImage = "url("+color+")"
        } else {
            nodo.style.backgroundColor = color
        }
        return nodo
    }

    function creacion(pro = {tag: "div"})  {
        var prop = {
            tag: "div",
            src: "",
            alt: "",
            class: "nodo",
            style: {
               
                position: "absolute"
            }
        }
        pro = Object.assign({}, prop, pro)

        // pro es propiedades
        var nodo = document.createElement(pro.tag);
        if (pro.src != "") {
            var parent = document.createElement("div")
            parent.append(nodo)
            nodo.src = pro.src;
            nodo.alt = pro.alt;
            nodo = parent
        }
        nodo.classList.add(pro.class)
        var keys = Object.keys(pro.style);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            nodo.style[key] = pro.style[key]
        }
        return nodo;
    }
    var oldStat = 0
    function accion() {
        var direc = -50
        if (jugador.firstChild.style.transform != "") {
            direc = 50
        }
        var xMove = (gamer.x-direc)
        var yMove = gamer.y
        for (let j = 0; j < mods.length; j++) {
            const mod = mods[j];
            if (mod.cartel) {
                if ((mod.x+mod.w >= xMove && mod.x-mod.w <= xMove) && (mod.y+mod.h >= yMove && mod.y-mod.h <= yMove)) {
                    if (lock == false) {
                        if (mod.puerta) {
                            lock = true
                            public.mensaje(["Se necesita una llave para seguir"])

                        }
                        else {
                            acciones[mod.accion](gamer, mods, j)
                        }
                        x = 0
                        move = false
                        moveBoo = false
                    }
                }
                continue
            }
            if ((mod.x-50 <= xMove && mod.x+50 >= xMove) && (mod.y+100 >= yMove && mod.y-100 <= yMove)) {
                if (mod.maldad == false) {
                    if (lock == false) {
                        acciones[nivel.npcs[j][6]](gamer, mods, j)
                        x = 0
                        move = false
                        moveBoo = false
                    }
                    
                } 
            }
        }
    }
    function ataque(atacker = gamer, enemy, val, ulti=false, xm = 0, ym= 0, start, carga=10) {
        let poder, trans, rapido = 1
        if (enemy && val > 2) {
            poder = poderes[atacker.poderes[val]]
            val = 1
        }
        if (typeof(val) == "object") {
            poder = val;
            if(!poder.combi && !poder.combo)
            val = -1
            else
            val = 2
            if(carga == -1) {
                rapido = 0
                carga = 10
            }
            if (ulti == 2) {
                ulti = false
                trans = true
            }
        }
        if (ulti){
            poder = ultis[atacker.ulti]
            atacker.atack = 4
        }
        else {
            if (val != 2 && val > -1) {
                let count = -1
                if (!poder && !ulti){
                if(!atacker.buffs.poderes)
                    poder = poderes[atacker.poderes[val]]
                    else {
                        poder = poderes[atacker.buffs.poderes[val]] || poderes[atacker.poderes[val]]
                    
                        if (atacker.stat.should || poder.should) {
                            count = -2
                            atacker.buffs.poderes[val] = -1
                        }
                    }
                }
                if(count == -1)
                count = poder.count || 5
                if (atacker.count[val] < count) {
                    if(!enemy)
                    return
                    else
                    poder = atacker.basico || Basico
                }
                if(!atacker.mana)
                atacker.count[val] = 0
            } else if(val > -1) {
                poder = atacker.basico || Basico
            }
            atacker.atack = val+1
            if (val < 0 && trans == true)
            trans = false
        } 
        if (poder.trans || ulti) {
            trans = true
        }
        let mana = poder.mana || ((poder.damage+(poder.distancia*10))/2)*0.2
        if (mana < 0) {
            mana *= -1
        }
        if (atacker.mana && (val < 2 || poder.mana)) {

            if (mana > atacker.mana) {
                poder = poderes[19]
            } else{
                atacker.mana -= mana
                if(val < 2)
                atacker.count[val] = 0
            }
        } else if (poder.mana) {
            damage *= 0.5
        }
        if (typeof(poder.rapido) == "string") {
            let r = rango(poder.rapido, carga)
            rapido *= Math.round(r)
        } else 
        rapido *= poder.rapido
        if (poder.damage <= 0) {
            trans = true
        }
        let xmove = poder.x || 1
        let ymove = poder.y || 0
        if (rapido > 0) {
            for (let i = 0; i < rapido; i++) { 
                let zq = Object.assign({}, poder)
                zq.distancia += i+1+xmove
                ataque(atacker, enemy, zq, ulti, (xmove*(i+1))*50, (ymove*(i+1))*50, null, -1)
            }
        }
        let critico = (()=> {
            let r = aleatorio(atacker.buffs.crit, 11)
            if (r > 8) {
                return 3
            }
            return 1
        })()
        var spr = jugador
        var direc = 1
        var stundSelf = poder.stundSelf
        if (stundSelf) {
            atacker.stund = true
        }
        if (enemy) {
            spr = atacker.spr
            
        }
        if (spr.firstChild.style.transform != "") {
            direc = -1
        }
        //let xsave = atacker.x
        let xMove = atacker.x+(xm*direc)
        if (poder.inicio) {
            ataque(atacker, enemy, poder.inicio, false, xmove, ymove)
        }
        let distancia
        let yMove = atacker.y+(ym)
        if (start) {
            xMove = start[0]+(xm*direc)
            yMove = start[1]+(ym)
        }
        if (typeof(poder.distancia) == "string") {
            let r = rango(poder.distancia, carga)
            distancia = r
        } else
        distancia = poder.distancia
        var stap = 1
        var damage = 1
        var combo = {}
        var hb = hab
        var ob = obj
        var antiShield = 0
        let dam = atacker.stat.atq*atacker.buffs.atq
        if (poder.raf) {
            dam = atacker.stat.raf*(atacker.buffs.raf || 1)
        }
        if (enemy) {
            hb = objetos[atacker.stat.hab]
            ob = objetos[atacker.stat.obj]
        } else {
            segX = 0
        }
        
        if (distancia < 0) {
            distancia = Math.abs(distancia)
            direc -= (direc*2)
        }
        let cincuenta = poder.vel || 50
        let avance = (cincuenta)
        let robo = poder.robo || 0
        
        let combi = {}
        avance *= direc
        if (hb.tipo == 2) {
            change(Object.assign({stap:0, damage:0, combo:{}, distancia:0, trans:trans, antiShield: 0}, hb.caract))
        }
        if(hb.caract)
        if (hb.caract.fun) {
            hb.caract.fun(atacker, null, val)
        }
        if (ob.tipo == 2) {
            change(Object.assign({stap:0, damage:0, combo:{}, distancia:0, trans:trans, antiShield: 0}, ob.caract))
        }
        function change(obj={stap:0, damage:0, combo:{}, distancia:0, trans:trans, antiShield, combi}) {
            var val = [0, 
                atacker.buffs.vat,
                atacker.buffs.atq, 
                atacker.buffs.def, 
                atacker.buffs.vel,
                atacker.buffs.raf,
                atacker.buffs.res,
                atacker.buffs.crit,
                (stap*10),
                damage,

            ]
            var ass = [
                0, 
                atacker.stat.vat, //1
                atacker.stat.atq, //2
                atacker.stat.def, //3
                atacker.stat.vel, //4
                atacker.stat.raf, //5
                atacker.stat.res, //6
                atacker.stat.crit, //7
                (stap*10), //8
                damage //9
            ]
            if(obj.stap > 0){
                let uper = obj.stapPlus || 0 
                stap *= ((val[obj.stap]+uper)/10)+1
            }
            if(obj.damage > 0){
                let uper = obj.damagePlus || 1 
                damage *= ((ass[obj.damage]*uper)-(ass[obj.damage]*val[obj.damage]))+1
            }
            if(obj.antiShield > 0){
                let uper = obj.shieldPlus || 0 
                antiShield += val[obj.antiShield]+uper
            }
            if (obj.avance > 0) {
                let uper = obj.avanceUper || 0 
                avance *= val[obj.avance]+uper
            }
            if (obj.dam > 0) {
                dam *= val[obj.dam]
            }
            if (obj.crit > 0) {
                if (critico > 1) {
                    critico += val[obj.crit]
                }
            }
            if (obj.robo > 0) {
                robo += obj.robo
            }
            if (obj.count) {
                atacker.count[obj.count[0]] += obj.count[1]
            }
            if(obj.combo.length > 0)
            combo = Object.assign(combo, obj.combo)
            if (obj.combi) {
                combi =  Object.assign(combi, obj.combi)
            }
            distancia += (obj.distancia*direc)
            trans = obj.trans

        }
        if (poder.antiShield) {
            antiShield = damage * (poder.antiShield/100)
            damage -= antiShield
        }
        verCarga(val+6)
        if (hb.tipo == 4) {
            hb.caract(atacker, val+4)
        }
        function verCarga(i, a=atacker) {
            if (a.tanques) {
                if (a.canal.assign) {
                    let index = a.tanques.indexOf(i)
                    if (index >= 0 ) {
                        a.carga[index]++
                        a.tanque = index
                    }
                } else {

                    let index = a.tanques[a.tanque]
                    if (index == i) {
                        a.carga[a.tanque]++
                        if (a.carga[a.tanque] >= a.canal.carga[a.tanque] && a.tanque <  a.canal.carga.length-1 ) {
                            a.tanque++
                        }
                    } 
                }
                
            }
        }
        if (atacker.ataques > 0 || val < 2) {
            if (poder.efecto) {
                if (atacker.ataques%poder.combo == 0 || val < 2) {
                    combo = Object.assign({}, poder.efecto)
                }
            }
            if (poder.estado) {
                if (atacker.ataques%poder.combi == 0 || val < 2) {
                    let o = Object.assign(combi, poder.estado)
                    if (!o.timer) {
                        o.timer = 5
                    }
                    o.aply = false
                    atacker.potens.push(o)
                    if (o.estado) {
                        atacker.estado = poder.estado.estado
                        atacker.tiempo = poder.estado.tiempo*10
                    } 
                    if (o.count) {
                        atacker.count[o.count[0]] += o.count[1] 
                    }
                    verCarga(3)
                }
            }
        }
        if (atacker.tipos.tipo.includes(poder.tipo)) {
            stap *= 1.2
        }
        if (typeof(poder.damage) == "string") {
            let r = rango(poder.damage, carga)
            damage *= (r*dam)*stap
        } else
        damage *= (poder.damage * dam)*stap
        damage *= critico
        if (Math.abs(avance) > 100) {
            avance *= 0.7
            if (Math.abs(avance) > 130) {
                antiShield += Math.abs(avance*0.01)
                avance *= 0.7
            }
        }
        let nodo
        if (poder.anim) {
            nodo = document.createElement("div")
            nodo.classList.add("div")
            nodo.innerHTML = poder.anim
            nodo.style.left = xMove +"px"
            nodo.style.top = yMove + "px"
            pantalla.append(nodo)
            nodo.firstChild.animate(poder.vis, {
                iterations: 1,
                duration: 100,
                fill: "forwards"
            })
            if (direc < 0) {
                nodo.style.transform = "rotateY(180deg)"

            }
        }
        if (poder.duplex) {
            ataque(atacker, enemy, poder.duplex, 2, (xmove)*50, (ymove)*50)
            
        }
        let i = 0
        let tiempo = poder.tiempo || 0
        let tiempoBoo = false
        let tamX = poder.tamX || 30
        let tamY = poder.tamY || 50
        let sAtack = setInterval(() => {
            if (atacker.stat.salud <= 0 || atacker.salud <= 0) {
                i = distancia
            }
            if (lock == true) {
                return
            }
            if (!tiempoBoo) {
                if (!poder.moveX) {
                    xMove += Math.round(avance)
                } else {
                    xMove += Math.round(avance*poder.moveX)
                }
                if (poder.moveY) {
                    yMove += Math.round((avance*direc)*poder.moveY) 
                }
                i++
                
            }
            if (tiempoBoo) {
                tiempo--
                i = distancia-1
                if (tiempo <= 0) {
                    i = distancia
                }
            }
            
            if (gamer.salud <= 0) {
                window.clearInterval(sAtack)
                if (nodo) {
                    nodo.remove()
                }
                
            }
            if (i < distancia) {
                if (poder.tele && !(poder.rapido && rapido ==0)) {
                    if (!enemy) {
                        dash = true
                        move = true
                    }
                    let z = 60*(direc*-1)
                    let m = avance
                    
                    if (poder.tele == 2) {
                        trans = true
                    }
                    if (poder.tele == 1) {
                        atacker.stund = true
                        if (enemy) {
                            atacker.x += m
                        } else {
                            x = m
                        }
                        atacker.buffs.inmune = 0

                    }
                    if (poder.tele == 2 && i >= distancia-2) {
                        if (xMove > 0 && xMove < nivel.largo) {
                            atacker.x = xMove
                            if (!enemy) {
                                x = m
                            }
                            
                        }
                    }
                    if (poder.tele == 3 && i >= distancia-1) {
                        if (enemy) {
                            atacker.y = yMove
                            atacker.x = xMove
                        } else {
                            tras.y = yMove
                            tras.x = xMove
                            tras.tele = true
                            if(tras.guardar == 0)
                            tras.guardar = tras.info
                            tras.info = 0
                        }

                    }
                    if (!enemy && i >= distancia-1) {
                        moveBoo = false
                        move = false
                        dash = false
                    }
                    if (poder.tele == 4) {
                        atacker.stund = true
                        if (enemy) {
                            atacker.x -= m
                        } else {
                            x = 0-(m)
                            z *= -1
                        }
                        atacker.buffs.inmune = 0
                    }
                    let spr = atacker.spr
                    if (!enemy) {
                        spr = jugador
                        velDat = m
                    } 
                    if (!enemy && i >= distancia-1) {
                        x = 0
                        
                    }
                    if (i >= distancia-1) {
                        atacker.buffs.inmune = 1
                        atacker.stund = false
                    }
                    if (poder.tele != 3 && poder.tele != 2) {
                        if (i == 1) {
                            spr.animate([
                                {boxShadow: "0px 0px 0px 0px "+atacker.stat.color},
                                {boxShadow: (z*2)+"px 0px 100px 10px  "+atacker.stat.color},
        
                            ], {
                                duration: 100*distancia,
                                iterations: 1,
                                fill: "backwards"
                            })
                            
                        }
                    }
                }
                if (nodo) {
                    
                    switch (poder.class) {
                        case 1:
                            nor()
                            break;
                        case 2:
                            if (i == 1) {
                                nodo.firstChild.animate(poder.transis, {
                                    iterations: 1,
                                    fill: "forwards",
                                    duration: ((100)*distancia)
                                }) 
                            }
                            defal()  
                            break;
                        case 3:
                            if (i == 1) {
                                nodo.firstChild.animate(poder.transis, {
                                    iterations: 1,
                                    fill: "forwards",
                                    duration: ((100)*distancia)
                                }) 
                            }
                            nor()
                            break;
                        case 4:
                            nodo.firstChild.animate(poder.transis, {
                                iterations: 1,
                                fill: "forwards",
                                duration: 100
                            }) 
                            defal() 
                            break;
                        case 5:
                            nodo.firstChild.animate(poder.transis, {
                                iterations: 1,
                                fill: "forwards",
                                duration: 100
                            }) 
                            nor()
                        default:
                            defal()
                            break;
                    }
                    function nor() {
                        if (!nodo.firstChild.style.width) {
                            nodo.firstChild.style.width = "100px"
                        }
                        if ( direc < 0) {
                            avance = Math.abs(avance)
                            nodo.animate([
                                {marginLeft: "-"+nodo.firstChild.style.width},
                                {marginLeft: "-"+(parseFloat(nodo.firstChild.style.width)+(avance))+"px"}
                            ], {
                                iterations: 1,
                                fill: "forwards",
                                duration: 100
                            })   
                        }
                        nodo.firstChild.animate([
                            {width: nodo.firstChild.style.width},
                            {width: (parseFloat(nodo.firstChild.style.width)+(avance))+"px"}
                        ], {
                            iterations: 1,
                            fill: "forwards",
                            duration: 100
                        })   
                        nodo.firstChild.style.width = (parseFloat(nodo.firstChild.style.width)+(avance))+"px"
                        avance *= direc
                    }
                    function defal() {
                        nodo.animate([
                            {left: nodo.style.left, top: (nodo.style.top || yMove),},
                            {left: xMove+"px", top: yMove+"px"}
                        ], {
                            iterations: 1,
                            fill: "forwards",
                            duration: 100/atacker.buffs.vat
                        })   
                        nodo.style.left = xMove+"px"
                        nodo.style.top = yMove+"px"
                    }
                }
                if (enemy) {

                    if ((gamer.x-tamX <= xMove && gamer.x+tamX >= xMove) && (gamer.y+tamY >= yMove && gamer.y-tamY <= yMove)) {
                       
                        atacker.restore = 0 
                        restore = 0
                        atacker.ataques++
                        
                        var leave = leaves(gamer.tipos, gamer.buffs.inmune)
                        var def = gamer.stat.def*gamer.buffs.def
                        if (poder.res) {
                            def = gamer.stat.res*gamer.buffs.res
                        }
                        var shield = 5 + (gamer.salud * (gamer.buffs.shield-1))
                        if (hab.tipo == 6) {
                            cange(Object.assign({leave:1, def:0, shield:0}, hab.caract), gamer)
                        }
                        if (hb.caract.fun) {
                            hb.caract.fun(atacker, gamer)
                        }
                        if (obj.tipo == 6) {
                            cange(Object.assign({leave:1, def:0, shield:0}, obj.caract), gamer)
                        }
                        if (objetos[gamer.hab].tipo == 4) {
                            objetos[gamer.hab].caract(gamer, 2)
                        }
                        damage /= (def)
                        damage /= shield
                        damage *= leave
                        antiShield *= leave
                        
                        if (gamer.cria) {
                            criaturas[gamer.i].salud -= damage
                            criaturas[gamer.i].salud -= antiShield
                        } else {
                            gamer.salud -= damage
                            gamer.salud -= antiShield
                        }
                        if(robo > 0)
                        atacker.stat.salud += damage* (robo/100)
                        if (critico > 1 && leave > 0) {
                            body.animate([
                                {backgroundColor: ""},
                                {backgroundColor: "red"},
                                {backgroundColor: ""}
                            ], {duration: 900, iterations: 1})
                        }
                        verificar()
                        if (poder.distance) {
                            eMove(gamer, poder.distance, (poder.trapX || 0), (poder.trapY || 0))
                        }
                        nerf()
                        if (!trans) {
                            atacker.atack = 0
                            if (poder.tele == 1 || poder.tele == 4 || stundSelf) {
                                atacker.stund = false
                            }
                            window.clearInterval(sAtack)
                            if (nodo) {
                                nodo.remove()
                            }
                            if (poder.bomba && !poder.block) {
                                ataque(atacker, enemy, poder.bomba, 2, (xmove)*50, (ymove)*50, [xMove, yMove])
                            }
                            if (typeof(poder.block) == "object") {
                                ataque(atacker, enemy, poder.block, 2, (xmove)*50, (ymove)*50, [xMove, yMove])
                            }
                        } else if (poder.block) {
                            if (typeof(poder.block) == "object") {
                                ataque(atacker, enemy, poder.block, 2, (xmove)*50, (ymove)*50, [xMove, yMove])
                            }
                        }
                        
                    }
                    
                } else {
                    for (let j = 0; j < mods.length; j++) {
                        const mod = mods[j];
                        if ((mod.x-tamX <= xMove && mod.x+tamX >= xMove) && (mod.y+tamY >= yMove && mod.y-tamY <= yMove) && !mod.cartel) {
                            if(mod.stat.salud > 0) {
                                if (gamer.ultiComb) {
                                    gamer.combCount++
                                }
                                restore = 0
                                mod.restore = 0
                                atacker.ataques++
                                var def = mod.stat.def * mod.buffs.def 
                                if (poder.res) {
                                    def = mod.stat.res * mod.buffs.res
                                }
                                var shield = 5 + (mod.stat.salud * (mod.buffs.shield - 1))
                                var leave = leaves(mod.tipos, mod.buffs.inmune)
                                hb = objetos[mod.stat.hab]
                                ob = objetos[mod.stat.obj]
                                if (hb.tipo == 6) {
                                    cange(Object.assign({leave:1, def:0, shield:0}, hb.caract), mod)
                                }
                                if (ob.tipo == 6) {
                                    cange(Object.assign({leave:1, def:0, shield:0}, ob.caract), mod)
                                }
                                if (hab.caract.fun) {
                                    hab.caract.fun(gamer, mod)
                                }
                                if (hb.tipo == 4) {
                                    hb.caract(mod, 2)
                                }
                                damage /= def 
                                damage *= leave
                                damage /= shield
                                if (mod.especie == "bagstone") {
                                    var color = "white"
                                    if (critico > 1) {
                                        color = "red"
                                    }
                                    mod.spr.innerHTML += "<i style='color: "+color+"; text-shadow: 1px 1px 1px black'> "+(damage)+"</i>"
                                    var t = setTimeout(() => {
                                        var iss = mod.spr.querySelectorAll("i");
                                        for (let index = 0; index < iss.length; index++) {
                                            const l = iss[index];
                                            l.remove()
                                        }
                                        window.clearTimeout(t)
                                    }, 1000);
                                } else {
                                    mod.stat.salud -= damage
                                    mod.stat.salud -= antiShield

                                }
                                if(robo > 0 && gamer.salud+(damage* (robo/100)) < gamer.vida)
                                atacker.salud += damage* (robo/100)
                                else if (robo > 0)
                                atacker.salud = atacker.vida

                               // mod.spr.style.filter = "drop-shadow(2px 4px 6px red)"
                                if (poder.distance) {
                                    eMove(mod, poder.distance, (poder.trapX || 0), (poder.trapY || 0))
                                }
                                nerf(mod)
                                let col = "rgba(200, 170, 60, 0.8)"
                                if (critico > 1 && leave > 0) {
                                    col = "rgba(250, 150, 60, 0.8)"
                                }
                                mod.spr.firstChild.animate([
                                    {backgroundColor: "rgba(0, 0, 0, 0)"},
                                    {backgroundColor: col},
                                    {backgroundColor: "rgba(0, 0, 0, 0)"}
                                ], {
                                    iterations: 1,
                                    duration: 500
                                })
                                if (!trans) {
                                    atacker.atack = 0
                                    if (dash || stundSelf) {
                                        gamer.stund = false
                                        dash = false
                                    }
                                    window.clearInterval(sAtack)
                                    if (nodo) {
                                        nodo.remove()
                                    }
                                    if (poder.bomba && !poder.block) {
                                        ataque(atacker, enemy, poder.bomba, 2, (xmove)*50, (ymove)*50, [xMove, yMove])
                                    }
                                    if (typeof(poder.block) == "object") {
                                        ataque(atacker, enemy, poder.block, 2, (xmove)*50, (ymove)*50, [xMove, yMove])
                                    }
                                    if (poder.tele > 0) {
                                        x = 0
                                        move = false
                                        moveBoo = false
                                    }
                                }else if (poder.block) {
                                    if (typeof(poder.block) == "object") {
                                        ataque(atacker, enemy, poder.block, 2, (xmove)*50, (ymove)*50, [xMove, yMove])
                                    }
                                }

                            }
                        }
                    }
                }
                function nerf(defender = gamer) {
                    
                    if (poder.stund) {
                        defender.stund = true
                        var spr = defender.spr
                        if (!spr) {
                            spr = jugador
                        }
                        spr.style.backgroundColor = "rgba(230, 250, 150, 0.5)"
                        var sStund = setTimeout(() => {
                            defender.stund = false
                            spr.style.backgroundColor = ""
                            window.clearTimeout(sStund)
                        }, poder.stund * 1000);
                    }
                    if(damage > 0)
                    verCarga(1, defender)
                    var key = Object.keys(combo)
                    if ((key.length > 0)) {
                        
                        if (defender.personajes) {
                            if(combo.obj)
                            defender.obj = combo.obj
    
                            if (combo.hab == -1)
                            defender.hab = atacker.stat.hab
    
                            if (combo.hab == -2)
                            atacker.stat.hab = defender.hab
                            if (combo.hab >= 0)
                            defender.hab = combo.hab
    
                            hab = objetos[defender.hab]
                            obj = objetos[defender.obj]
                            buffRestore()
                            obj1()
                        } else {
                            if(combo.obj)
                            defender.stat.obj = combo.obj
    
                            if (combo.hab == -1)
                            defender.stat.hab = atacker.hab
    
                            if (combo.hab == -2)
                            atacker.hab = defender.stat.hab
                            if (combo.hab >= 0)
                            defender.stat.hab = combo.hab
    
                            hab = objetos[atacker.hab]
                            obj = objetos[atacker.obj]
                            buffRestore()
                            obj1()
                        }
                        if (!combo.timer) {
                            combo.timer = 5
                        }
                        if (combo.estado) {
                            defender.estado = combo.estado
                            defender.tiempo = combo.tiempo
                        }
                        combo.aply = false
                        verCarga(4, defender)
                        defender.potens.push(combo)
                    } 
                    if (shield > 5) {
                        if (enemy) {
                            jugador.animate([
                                {backgroundColor: ""},
                                {backgroundColor: "silver"},
                                {backgroundColor: ""},
                            ], {
                                duration: 1000,
                                iterations: 1
                            })
                        } else {
                            defender.spr.animate([
                                {backgroundColor: ""},
                                {backgroundColor: "silver"},
                                {backgroundColor: ""},
                            ], {
                                duration: 1000,
                                iterations: 1
                            })
                        }
                    }
                    if (combo.count) {
                        let code = combo.count[0]
                        if (code == "random") {
                            code = aleatorio(0, atacker.poderes.length)
                        }
                        atacker.count[code] += combo.count[1] 
                    }
                }
                function cange(obj={leave:1, def:0, shield:0}, mod) {
                    if (obj.atq) {
                        def *= (mod.buffs.atq*(obj.atq/100)+1)
                    }
                    if (obj.vel) {
                        def *= (mod.buffs.vel*(obj.vel/100)+1)
                    }
                    if (obj.vat) {
                        def *= (mod.buffs.vat*(obj.vat/100)+1)
                    }
                    if (obj.raf) {
                        def *= (mod.buffs.raf*(obj.raf/100)+1)
                    }

                    if (obj.sAtq) {
                        shield *= (mod.buffs.atq*(obj.sAtq/100)+1)
                    }
                    if (obj.sVel) {
                        shield *= (mod.buffs.vel*(obj.sVel/100)+1)
                    }
                    if (obj.sVat) {
                        shield *= (mod.buffs.vat*(obj.sVat/100)+1)
                    }
                    if (obj.sRaf) {
                        shield *= (mod.buffs.raf*(obj.sRaf/100)+1)
                    }
                    leave /= obj.leave
                    def += (obj.def*10)/damage
                    if(enemy){
                        let fi = ((mod.salud * 100)/mod.vida)
                        if (fi < 90) {
                            fi *= (obj.shield)/100
                        }
                        shield += fi * (obj.shield)/100
                    }
                    else{
                        let fi = ((mod.stat.salud * 100)/mod.stat.vida)
                        if (fi < 90) {
                            fi *= (obj.shield)/100
                        }
                        shield += fi * (obj.shield)/100
                    }

                    if (obj.antiShield) {
                        if(enemy)
                        shield += obj.antiShield / ((mod.salud * 100)/mod.vida)
                        else
                        shield += obj.antiShield / ((mod.stat.salud * 100)/mod.stat.vida)
                    }
                    
                    
                }
            } else {
                if (tiempo == 0) {
                    atacker.atack = 0
                    if (stundSelf) {
                        atacker.stund = false
                    }
                    window.clearInterval(sAtack)
                    if (poder.bomba && !poder.boom) {
                        ataque(atacker, enemy, poder.bomba, 2, xmove*50, (ymove)*50, [xMove, yMove])
                    }
                    if (typeof(poder.boom) == "object") {
                        ataque(atacker, enemy, poder.boom, 2, (xmove)*50, (ymove)*50, [xMove, yMove])
                    }
                    if (nodo) {
                        nodo.remove()
                    }
                } else {
                    tiempoBoo = true
                    
                }
            }
            if (poder.trans) {
                damage *= 0.9
            }
            
        }, (100));
        function leaves(mod, inmune) {
            atacker.atack = 0
            var leave = 1
            if (mod.debil.includes(poder.tipo)) {
                leave = 1.2
            }
            if (mod.resis.includes(poder.tipo)) {
                leave = 0.8
            }
            if (mod.inmune.includes(poder.tipo)) {
                leave = 0.5
            }
            if (inmune < 1) {
                leave = 0
                antiShield = 0
            } else {
                verCarga(2)
            }
            if (poder.trans && i < poder.trans) {
                damage *= 2
            }
            
            return leave
        }
        function eMove(mod, d=1, vx=70, vy=0) {
            mod.movBoo = true
            if (!enemy) {
                let i = 0
                var e = setInterval(() => {
                    if (i >= d) {
                        mod.movBoo = false
                        window.clearInterval(e)
                    }
                    mod.x += (vx*direc)
                    mod.y += (vy*-1)
                    i++;
                }, 100);
            } else {
               let i = 0
               var e = setInterval(() => {
                    if (i >= d) {
                        mod.movBoo = false
                        window.clearInterval(e)
                    }
                    x = (vx*direc)
                    y = vy*-1
                    personMove()
                    i++
               }, 100);
            }
        }
    }
function rango(texto, valor) {
    let min = parseFloat(texto)
    let max = parseFloat(texto.substring(texto.indexOf(",")+1))
    if (valor > 100) {
        return max
    }
    let prom = (valor * max) / 100
    if (prom < min) {
        return min
    }
    return prom

}
// set interval
let segX = 0
var pasos = 0
    var set = setInterval(() => {
        if (lock == false && gamer) {
            if (veltime < vatime) {
                veltime += (gamer.stat.salto * gamer.buffs.vat)
            }
            if (gamer.salud < gamer.vida)
            restore += 0.1 / (gamer.stat.caida / gamer.buffs.caida)
            let c1 = poderes[gamer.poderes[0]].count || 5
            let c2 = poderes[gamer.poderes[1]].count || 5
            let c3 = poderes[gamer.poderes[2]]
            if (c1 > gamer.count[0]) {
                if (gamer.count[0] == 0) {
                    cargaDem()
                }
                gamer.count[0] += 0.1*gamer.buffs.salto
            } else {
                atack.style.boxShadow = "0px -5px 10px 0px blue"
            }
            if (c2 > gamer.count[1]) {
                if (gamer.count[1] == 0) {
                    cargaDom()
                }
                gamer.count[1] += 0.1*gamer.buffs.salto
            }  else {
                especial.style.boxShadow = "0px -5px 10px 0px blue"
            }
            if (c3) {
                c3 = c3.count
                if (c3 > gamer.count[2]) {
                    if (gamer.count[2] == 0) {
                        cargaDom(third, 2)
                    }
                    gamer.count[2] += 0.1*gamer.buffs.salto
                } else {
                    third.style.boxShadow = "0px -5px 10px 0px blue"
                }
            } 
            if (gamer.ultiTime) {
                if (gamer.ultiTime > gamer.combCount) {
                    if (gamer.combCount == 0) {
                        cargaDim()
                    }
                    gamer.combCount += 0.1*gamer.buffs.salto
                } else {
                    ulti.style.boxShadow = "0px -5px 10px 0px blue"
                    ultiActivate = true
                }
            }
            if (oldStat != gamer.estado){
                gamer.oldStat = oldStat
                estado.innerText = "Estado: "+nombreEstado[gamer.estado]
                informe.innerText = desEstado[gamer.estado]
                gamer = Object.assign(gamer, estados[gamer.estado](gamer))

                oldStat = gamer.estado
            }
            
            if (gamer.tiempo > 0) {
                gamer.tiempo--
                if (gamer.tiempo == 0) {
                    gamer.estado = 0
                }
            }
            if (gamer.potens.length > 0) {
                var limpiar = true
                for (let i = 0; i < gamer.potens.length; i++) {
                    const potencia = gamer.potens[i];
                    if (potencia.aply == false) {
                        let keys = Object.keys(potencia);
                        for (let j = 0; j < keys.length; j++) {
                            const key = keys[j];
                            if (gamer.buffs[key]) {
                                if (key == "poderes") {
                                    gamer.buffs.poderes = potencia.poderes
                                }else{
                                    gamer.buffs[key] *= potencia[key]
                                    var nodo = document.createElement("div")
                                    var duration = (potencia.timer*1000) || 5000 
                                    nodo.innerHTML = signos[key]
                                    if (potencia[key] < 1 && key != "caida") {
                                        nodo.firstChild.style.border = "1px solid red"
                                    }
                                    jimi.insertBefore(nodo, jimi.firstChild)
                                    nodo.animate([
                                        {filter: "opacity(1)"},
                                        {filter: "opacity(0)"},
                                    ], {duration: duration})
                                    var t = setTimeout(() => {
                                        nodo.remove()
                                        window.clearTimeout(t)
                                    }, duration);
                                }

                            }
                        }
                        potencia.fin = false
                        potencia.aply = true
                        limpiar = false
                        if (i < gamer.potens.length-1) {
                            gamer.potens[i+1].timer += 2
                        }
                    } else {
                        if (potencia.timer <= 0 && !potencia.fin) {
                            let keys = Object.keys(potencia);
                            for (let j = 0; j < keys.length; j++) {
                                const key = keys[j];
                                if (gamer.buffs[key]) {
                                    if (key == "poderes")
                                    gamer.buffs.poderes = [-1, -1]
                                    else
                                    gamer.buffs[key] /= potencia[key]
                                }
                            }
                            potencia.fin = true
                            limpiar = false
                        } else if (!potencia.fin){
                            
                            limpiar = false
                            potencia.timer -= 0.1
                        }
                    }
                }
                
                if (limpiar == true) {
                    jimi.innerHTML = ""
                    gamer.potens = []
                    if (gamer.estado == 0)
                    gamer.timer = 1
                }
                
            }
            if (gamer.timer > 0) {
                gamer.timer--
                if (gamer.timer == 0) {
                    buffRestore()
                    obj1()
                }
            }
            segX += 1
            if (segX >= 30) {
                xScreen = window.innerWidth*0.45
                moveScreen(0-(gamer.x-xScreen))
                gamer.ataques = 0
                segX = 0
            }
            
        }
        if (restore >= gamer.restore && gamer.salud < gamer.vida) {
            gamer.salud += (gamer.buffs.regen*gamer.regen)*0.5
            verificar()
        }
        if ((gamer.mana < gamer.canal.mana) && !gamer.tanques ) {
            gamer.mana += (gamer.canal.charge || 1) * (1/(gamer.stat.caida*gamer.buffs.caida))*0.1
            verificar()

        }
    }, 100);
    let velA = false
    let dash = false
    var set2 = setInterval(() => {
        if (gamer.buffs.visible < 1) {
            jugador.firstChild.style.filter = "opacity(0.5)"
        } else {
            jugador.firstChild.style.filter = ""
        }
        if ((x < 0 && gamer.x < 100) || (x > 0 && gamer.x > nivel.largo - 100)) {
            move = false
            moveBoo = false
        }
        if (move == true && lock == false && (gamer.stund == false || dash == true)) {
            segX = 0
            if (Math.abs(x) > 70) {
                x*= 0.7
                gamer.buffs.crit += Math.abs(x*0.001)
                if (Math.abs(x) > 100) {
                    gamer.buffs.shield += Math.abs(x*0.001)
                    x = 100
                }
            }
            personMove()
            if ((x != 0 && !gamer.atack) || (y != 0 && !gamer.atack)) {
                if(x < 0 || y < 0)
                jugador.firstChild.src = galeria[gamer.sprs].mover[pasos%2]
                if (x > 0 || y > 0) {

                    jugador.firstChild.src = galeria[gamer.sprs].mover[Math.abs((pasos%2)-1)]
                }
                pasos++
            }
            if (gamer.atack > 0) {
                if (gamer.atack == 1) {
                    jugador.firstChild.src = galeria[gamer.sprs].basico
                    
                } else if (gamer.atack == 2) {
                    jugador.firstChild.src = galeria[gamer.sprs].especial
                } else {
                    jugador.firstChild.src = galeria[gamer.sprs].ulti

                }
            }   
            if (hab.tipo == 4) {
                hab.caract(gamer)
               
            }
            verificar()
        } else if(lock == false) {
            velA = false
            if(y == 0)
            jugador.firstChild.src = galeria[gamer.sprs].normal
            if (y > 0)
            jugador.firstChild.src = galeria[gamer.sprs].salto
            if (y < 0)
            jugador.firstChild.src = galeria[gamer.sprs].caida
            if (gamer.atack > 0) {
                if (gamer.atack == 1) {
                    jugador.firstChild.src = galeria[gamer.sprs].basico
                    
                } else if (gamer.atack == 2) {
                    jugador.firstChild.src = galeria[gamer.sprs].especial
                } else if(gamer.atack == 3) {
                    jugador.firstChild.src = galeria[gamer.sprs].ataque || galeria[gamer.sprs].basico
                } else if(gamer.atack == 4) {
                    jugador.firstChild.src = galeria[gamer.sprs].ulti
                }
                velA = true
            }

        } 
        if (gamer.canal.tanques) {
            var alts = [charge1, charge2, charge3]
            var color = gamer.canal.color || "250, 200, 120, "
            for (let i = 0; i < gamer.tanques.length; i++) {
                const element = gamer.carga[i];
                let prom2 = (((element * 100) / gamer.canal.carga[i])/100)
                alts[i].style.backgroundColor = "rgba("+color+prom2+")"
                if (prom2*100 >= 100) {
                    alts[i].style.backgroundColor = gamer.stat.color
                } 
                
            }
        }
    }, 100);
    public.giveChara = (personaje)=> {
        gamer.personajes.push(personaje)
        public.mensaje(["Has obtenido a "+personaje+" como personaje jugable"])
    }
    public.giveItem = (item, number=1) => {
        if (item > 0) {
            for (let o = 0; o < number; o++) {
                let cero = gamer.objetos.indexOf(0)
                if (cero > -1) {
                    gamer.objetos[cero] = item
                } else {
                    gamer.objetos.push(item)
                }
            }
        }
    }
    function personMove() {
        jugador.animate([
            {left: (gamer.x)+"px"},
            {left: (gamer.x+x)+"px"}
        ], {
            duration: 100,
            iterations: 1,
            fill: "forwards"
        })
        jugador.animate([
            {top:gamer.y+"px"},
            {top:(gamer.y+y)+"px"}
        ], {
            duration: 100,
            iterations: 1,
            fill: "forwards"
        })
        gamer.x += x
        gamer.y += y
    }
    public.mods = mods
    public.teclas = accionTecla
    public.gamer = gamer
    public.jugador = jugador
    public.obj1 = obj1
    return public
    
})()
function aleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }