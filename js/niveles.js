var niveles = [
    {
        
        color: "skyblue",
        piso: "green",
        largo: 8000,
        pisos: [
            [8000, 400, 400, 0],
            [200, 200, 400, 3000, "black", "load", 1]

        ],
        npcs: [
            [0, "vendedor", 1400, 630, 0, false, 1],
            [0, "vendedor", 2200, 630, 0, false, 9],
            [0, "vendedor", 2400, 630, 0, false, 10],
            [0, "bagstone", 700, 500, 0, false, 0]
            
        ],
        carteles: [
            //[Ancho, alto, posX, posY, #paraColor/!paraSrc, pasable?, accion, accionable?, profundidad]
           
            [100, 100, 550, 630, "!img/objs/baul.png", true, 5, true, 1],
            

        ]
    },
    {
        color: "brown",
        piso: "rgb(150, 100, 100)",
        largo: 6000,
        pisos: [
            [6000, 400, 400, 0],
            [200, 200, 400, 5600, "black", "wrap", 2]


        ],
        npcs: [
            [1, "hiperaton", 1400, 500, 100, true, 0],
            [1, "hiperaton", 2200, 610, 100, true, 0],
            [2, "hiperaton", 2400, 540, 100, true, 0],
            [2, "hiperaton", 2500, 530, 100, true, 0],
            [2, "hiperaton", 2600, 620, 100, true, 0],
            [2, "hiperaton", 2500, 630, 100, true, 0],
            [3, "groquem", 3000, 500, 60, true, 0],
            [3, "groquem", 3200, 600, 60, true, 0],
            [3, "groquem", 3400, 630, 60, true, 0],


        ],
        carteles: [
            //[Ancho, alto, posX, posY, #paraColor/!paraSrc, pasable?, accion, accionable?, profundidad, puerta]
            [500, 100, 2000, 400, "#gray", true, 0, false, 0],
            [500, 100, 2000, 700, "#gray", true, 0, false, 0],
            [100, 300, 2700, 500, "#gray", true, 0, false, 0],
            


        ]
    },
    {//2
        color: "brown",
        piso: "rgb(150, 100, 100)",
        largo: 1000,
        x: 300,
        y: 0,
        pisos: [
            [1000, 400, 400, 0],


        ],
        npcs: [
            [4, "hyper", 900, 500, 100, true, 0]


        ],
        carteles: [
            //[Ancho, alto, posX, posY, #paraColor/!paraSrc, pasable?, accion, accionable?, profundidad, puerta]
                        

        ]
    }
]
var lock = false

var afterMessage = ()=> {}
// acct.length = 7
// elemento 5 es para la seleccion de personaje
var acciones = [
    function () { //0
        lock = false
    },
    function () { // 1
        lock = true
        if(app.gamer.objetos.length > 0){
            app.mensaje(["Hola, tengo un martillo, si tienes algo de valor puedo cambiartelo por eso"], true)
            afterMessage = ()=> {
                tienda(1)
                afterMessage = ()=> {}
            }
        } else {
            app.mensaje(["Hola que tal."])
        }
    },
    function () { // 2
        app.gamer.x += 100
        
        
    },
    function () { // 3
        lock = true
        if (!app.gamer.flags[1]) {
            app.giveItem(20)
            app.mensaje(["Has coseguido una llave"])
            app.gamer.flags[1] = 1

        }
    },
    function () { // 4
        lock = true
        app.mensaje([
            "Los npc de intercambio tendran siempre listos algo que intercambiar",
            "Puedes preguntarle cuantas veces quieras, recuerda que si pierdes, perderas todo tu inventario",
            "Podras encontrar monedas de oro y cosas de mas valor en masmorras, tambien en cofres",
            "Algunos objetos valen mas que otros asi que ten cuidado que ofreces"
        ])
    },
    function () { // 5
        lock = true
        var scroll = document.createElement("div")
        scroll.classList.add("scroll")
        document.body.appendChild(scroll)
        var tabla = document.createElement("table")
        var fila = document.createElement("tr")
        tabla.appendChild(fila)
        var input = document.createElement("input")
        input.type = "button"
        input.value = "X"
        
        input.onclick = ()=> {
            tabla.remove()
            lock = false
        }
        fila.append(input)
        var nombres = Object.keys(personajes)
        var celdas = 5
        for (let i = 0; i < nombres.length; i++) {
            if (celdas > 4) {
                fila = document.createElement("tr")
                tabla.appendChild(fila)
                celdas = 0
            }
            const nombre = nombres[i];
            let propiedades = personajes[nombre]
            let td = document.createElement("td")
            let nodo = document.createElement("div")
            td.append(nodo)
            nodo.classList.add("perfil")
            let img2 = document.createElement("img")
            img2.src = galeria[propiedades.sprs].normal
            nodo.appendChild(img2)
            fila.appendChild(td)
            celdas++
            nodo.onclick =()=> {
                if (app.gamer.personajes.includes(nombre) == false && false) {
                    return
                }
                tabla.style.display = "none"
                var t = document.createElement("table")
                var f = document.createElement("tr")
                t.appendChild(f)
                var inp = document.createElement("input")
                inp.type = "button"
                inp.value = "X"
                
                inp.onclick = ()=> {
                    t.remove()
                    tabla.style.display = ""
                    lock = false
                }
                f.append(inp)
                f = document.createElement("tr")
                t.appendChild(f)
                var celda = document.createElement("td")
                // celda 1. Poderes y explicacion de estos
                let pan = document.createElement("div")
                pan.classList.add("pan2")
                let spanel = document.createElement("div")
                spanel.classList.add("pan2")
                celda.appendChild(pan)
                celda.appendChild(spanel)
                var text = document.createElement("div")
                pan.appendChild(text)
                text.innerHTML = "Rol: "+propiedades.rol+"<br>"+clases[propiedades.rol]
                let habilidades = [
                    poderes[propiedades.poderes[0]],
                    poderes[propiedades.poderes[1]],
                    propiedades.basico || Basico,
                    ultis[propiedades.ulti],
                    poderes[propiedades.poderes[2]],
                ]
                let teclas = [
                    "A - Habilidad", "S - Habilidad", "Z - Basico", "C - Definitiva", "D - Habilidad"
                ]
                if(propiedades.canal){
                    if (propiedades.canal.efectos) {
                        for (let i = 0; i < propiedades.canal.efectos.length; i++) {
                            const efecto = poderes[propiedades.canal.efectos[i]];
                            let datos = "F - "
                            switch (propiedades.canal.tanques[i]) {
                                case 1:
                                    datos += "Al recibir daño "
                                    break;
                                case 2:
                                    datos += "Al infligir daño "
                                    break;
                                case 3:
                                    datos += "Al aumentar algun stat "
                                    break
                                case 4:
                                    datos += "Al disminuir algun stat "
                                    break
                                case 5: 
                                    datos += "Al usar "+poderes[propiedades.poderes[2]].nombre+" "
                                    break
                                case 6: 
                                    datos += "Al usar "+poderes[propiedades.poderes[0]].nombre+" "
                                    break
                                case 7: 
                                    datos += "Al usar "+poderes[propiedades.poderes[1]].nombre+" "
                                    break
                                default:
                                    datos += "Extra "
                                    break;
                            }
                            datos += propiedades.canal.carga[i]+" veces"
                            teclas.push(datos)
                            habilidades.push(efecto)
                        }
                    }
                    if (propiedades.canal.mana) {
                        var mejora = propiedades.canal.mejora || "regen"
                        var poder = {
                            damage: propiedades.canal.damage || 0,
                            distancia: propiedades.canal.dis || 5,
                            estado: {[mejora]: (propiedades.canal.poten || 2), timer: 10},
                            mana: propiedades.canal.mana2 || 20,
                            tele: propiedades.canal.tele || 0,
                            nombre: propiedades.canal.nombre || "Efecto de mana",
                            especial: propiedades.canal.especial 
                        }
                        teclas.push("F - Mana")
                        habilidades.push(poder)
                    }
                }
                for (let k = 0; k < habilidades.length; k++) {
                    const habi = habilidades[k];
                    if (habi) {
                        let nod = document.createElement("div")
                        spanel.appendChild(nod)
                        nod.classList.add("poderVer")
                        nod.innerHTML = teclas[k]+"<br>"+(habi.nombre || "basico")
                        nod.onclick = ()=> {
                            if (habi.descripcion) {
                                pan.innerHTML = habi.descripcion
                            } else
                            acc(habi)
                        }

                        function acc (hab = habi, a) {
                            if (!a) {
                                pan.innerHTML = ""
                            } else {
                                pan.innerHTML += "<br><br>"
                            }
                            let comentario = "Inflige "+hab.damage+" puntos de daño "
                            
                            let clase = "Golpe "
                            
                            
                            if (!hab.raf) {
                                clase += "/ Daño Fisico"
                            } else {
                                clase += "/ Daño Rafaga"
                            }
                            if (hab.rapido && hab.damage > 0) {
                                clase += "/ Consecutivo"
                                comentario = "Dispara "+hab.rapido+" ataques infliguiendo "+hab.damage+" puntos de daño "
                            }
                            if (hab.res) {
                                comentario += "rafaga al enemigo "
                            } else {
                                comentario += "fisico al enemigo "
                            }
                            if (hab.damage < 1) {
                                clase = "Beneficio "
                                comentario = "No inflige daño"
                            }
                            if (hab.stund > 0) {
                                clase += "/ control"
                                comentario += " Evita que el enemigo se mueva o ataque por "+hab.stund+" segundos"
                            }
                            if (hab.stundSelf == true) {
                                comentario += " Mientras dura la habilidad el usuario no podra moverse"
                            }
                            if (hab.distance > 0) {
                                if(!hab.stund)
                                clase += "/ control"
                                comentario += " Empuja al rival que alcance"
                                
                            }
                            if(propiedades.canal) {
                                if (hab.mana && propiedades.canal.mana) {
                                    comentario += " Consume "+hab.mana+" de mana"
                                } else if (propiedades.canal.mana && k != 2) {
                                    comentario += " Consume "+(((hab.damage+(hab.distancia*10))/2)*0.2)+" de mana"

                                }

                            }
                            if (hab.distancia > 6 && !hab.tele && hab.damage > 0) {
                                clase += "/ Distancia "
                            }
                            if (hab.tele == 1) {
                                clase += "/ Impulso "
                            }
                            if (hab.tele == 2) {
                                clase += "/ Parpadeo "
                            }
                            if (hab.tele == 3) {
                                clase += "/ Teletransporte "
                                comentario += " y adquiere una habilidad extra al precionar F, se puede teletransportar al lugar en que el ataque finalizo"
                            }
                            if (hab.tele == 4) {
                                clase += "/ impulso inverso "
                            }
                            if (hab.distancia < 0) {
                                clase += "/ Hacia atras "
                            }
                            if (hab.robo) {
                                clase += "/ Robo de vida "
                                comentario += " Un "+hab.robo+"% del daño causado es obtenido como vida al usuario"
                            }
                            if (hab.estado) {
                                clase += "/ Mejora"
                                agg()
                            }
                            if (hab.efecto) {
                                clase += "/ Desventaja"
                                agg("enemigo", "efecto", "combo")

                            }
                            if (hab.trans) {
                                clase += "/ Daño explosivo"
                            }
                            var poderesReview = []
                            if (hab.especial) {
                                clase += "/ efecto unico"
                                comentario +=" "
                                var s = {
                                    salud: "salud", // string o Int
                                    hab: "Habilidad pasiva", // String o int
                                    poderes: "Habilidad", // array
                                    canal: "Efecto de mana", // objeto
                                    stat: "Estadisticas", // objeto
                                    estado: "Estado", // String, array
                                    buffs: "Potensiaciones de caracteristica", //  objeto
                                    basico: "Habilidad basica", // objeto
                                    ulti: "Habilidad definitiva", // String
                                    ultiComb: "Recarga de la definitiva", // String o int
                                    count: "Recarga de la habilidad", // array
                                    mana: "mana", // String o int
                                    vel:"Velocidad de Movimiento", 
                                    atq: "Ataque fisico", 
                                    def: "Defensa fisica", 
                                    raf: "Ataque rafaga", 
                                    res: "Defensa rafaga", 
                                    salto: "Tiempo de enfriamiento de habilidades", 
                                    caida: "Tiempo de enfriamiento de recuperacion de vida", 
                                    shield: "Escudo", 
                                    vat: "Velocidad de Ataque", 
                                    crit: "Probabilidad de critico", 
                                    visible: "Invisibilidad", 
                                    regen: "Regeneracion de Salud",
                                    inmune: "Inmunidad a golpes",

                                }
                                var especial = hab.especial
                                for (let i = 0; i < especial.length; i+=2) {
                                    const element = especial[i];
                                    const increment = especial[i+1]
                                    if (!s[element]) {
                                        continue
                                    }
                                    let ser = increment+ "los puntos de "
                                    if (element == "hab") {
                                        ser = objetos[increment].hab+"("+objetos[increment].desc+") la "
                                    }
                                    if (element == "estado") {
                                        ser = nombreEstado[increment] + " el "
                                    }
                                    if (element == "ulti") {
                                        ser = ultis[increment].nombre + " la "
                                    }

                                    if (typeof(increment) == "string") {
                                        comentario += " Cambia a "+ser+s[element]
                                    }
                                    if (typeof(increment) == "number") {
                                        let nom = " Aumenta "
                                        if (increment < 1) {
                                            nom = " Disminuye "
                                        }
                                        comentario += nom+"los puntos de "+s[element]+" en "+increment
                                    }
                                    if (typeof(increment) == "object") {
                                        if (Array.isArray(increment) == true) {
                                            for (let j = 0; j < increment.length; j++) {
                                                let e = increment[j]; 
                                                let m = parseFloat(e) || e
                                                if (element == "poderes" && m >= 0) {
                                                    ser = " Cambia a "+ poderes[e].nombre+" la "+(j+1)+"° "+s[element]
                                                    poderesReview.push(poderes[e])
                                                }
                                                if (element == "count" && m >= 0) {
                                                    if (typeof(e) == "string") {
                                                        ser = " Cambia el tiempo de "+s[element]+" "+(j+1)+" a "+e+"s "
                                                    } else {
                                                        let aumenta = " Aumenta"
                                                        let count = (e-1)*100
                                                        if (e < 1) {
                                                            aumenta = " Disminuye"
                                                            count = e*100
                                                        }
                                                        ser = aumenta+" el tiempo de "+s[element]+" "+(j+1)+" en "+(count)+"%"

                                                    }
                                                }
                                                comentario += ser
                                            }
                                        } else {
                                            if (element == "stat" || element == "buffs") {
                                                let incremen = Object.keys(increment)
                                                comentario += " Se modifican las "+s[element]+" de la siguiente forma:"
                                                for (let i = 0; i < incremen.length; i++) {
                                                    const e = incremen[i];
                                                    stat = increment[e];
                                                    comentario += "<br> - "+s[e]+": "+stat
                                                }
                                                comentario += "<br>"
                                            } else {
                                                poderesReview.push(increment)
                                            }
                                        }
                                    }
                                    
                                }
                                
                            }
                            
                            let tipo = Tipos[hab.tipo] || " - "
                            if (!a)
                            pan.innerHTML += teclas[k]+"<br> "+clase+" / <div class='tipos "+tipo+"'>"+tipo+"</div> <br>"
                            else 
                            pan.innerHTML += a+"<br> "+clase+" / <div class='tipos "+tipo+"'>"+tipo+"</div> <br>"

                            if(hab.nombre && k != 3)
                            pan.innerHTML += "<br> Tiempo de recarga: "+(hab.count || 5)+"s"+"<br>"
                            pan.innerHTML += comentario
                            if (poderesReview.length > 0) {
                                for (let i = 0; i < poderesReview.length; i++) {
                                    const review = poderesReview[i];
                                    acc(review, "Cambio de poder ("+review.nombre+")")
                                }
                            }
                            function agg(usuario = "usuario", nombre = "estado", combi="combi") {
                                comentario += " "
                                let timer = hab[nombre].timer || 5
                                let tiempo = hab[nombre].tiempo || 10
                                let s = {
                                    vel:"la Velocidad de Movimiento", 
                                    atq: "el Ataque fisico", 
                                    def: "la Defensa fisica", 
                                    raf: "el Ataque rafaga", 
                                    res: "la Defensa rafaga", 
                                    salto: "el Tiempo de carga", 
                                    caida: "el Limite de regeneracion", 
                                    shield: "el Escudo", 
                                    vat: "la Velocidad de Ataque", 
                                    crit: "la Probabilidad de critico", 
                                    visible: "Invisibilidad", 
                                    regen: "la Regeneracion de Salud",
                                    inmune: "Inmunidad a golpes",
                                }
                                var key = Object.keys(hab[nombre])
                                let boo = false
                                if (hab[combi] && k != 3) {
                                    comentario += "Al acertar "+hab[combi]+" golpes "
                                }
                                for (let j = 0; j < key.length; j++) {
                                    let k = key[j]
                                    let sk = s[k]
                                    
                                    let estado = hab[nombre][key[j]];
                                    if (sk && (k == "visible" || k == "inmune")) {
                                        if (j > 0) {
                                            comentario += " "
                                        }
                                        boo = true
                                        comentario += "Agrega " +sk +" al "+usuario+". "
                                    } else if (sk) {
                                        if (j > 0) {
                                            comentario += " "
                                        }
                                        boo = true
                                        let pal = "Aumenta"
                                        if (estado < 1) {
                                            estado = 10 - (estado*10)
                                            pal = "Disminuye"
                                        }
                                        comentario += pal+" en "+estado+" "+sk+" del "+usuario

                                    }
                                }
                                if (boo)
                                comentario += " por "+timer+"s"
                                if (hab[nombre].estado) {
                                    comentario += " El "+usuario+" entra en estado "+nombreEstado[hab[nombre].estado]+" por "+tiempo+"s"
                                }

                            }
                            if (hab.inicio) {
                                acc(hab.inicio, "Efecto adicional")
                            }
                            if (hab.duplex) {
                                acc(hab.duplex, "Efecto adicional")
                            }
                            if (hab.bomba) {
                                if(hab.boom)
                                acc(hab.bomba, "Efecto posterior a golpear a un enemigo")
                                else if (hab.block)
                                acc(hab.bomba, "Efecto posterior si no golpea a un enemigo")
                                else
                                acc(hab.bomba, "Efecto posterior")
                            }
                            if (typeof(hab.block) == "object") {
                                acc(hab.block, "Efecto posterior a golpear a un enemigo")
                            }
                            if (typeof(hab.boom) == "object") {
                                acc(hab.boom, "Efecto posterior si no golpea a un enemigo")
                            }
                            
                        }
                    }
                }


                f.appendChild(celda)
                var celda = document.createElement("td")
                // celda 2. Imagen del personaje, habilidad y clan. Click aqui para seleccionar
                let p = document.createElement("p")
                p.innerHTML = "<i class='mayus'>"+nombre+"</i><br>"
                let clan = "Clan"
                if (propiedades.grupo) {
                    clan = propiedades.grupo
                }
                if(propiedades.clan)
                p.innerHTML += "Provinencia: "+clan+" <span class='mayus "+propiedades.clan+"'>"+propiedades.clan+"</span> <br> "
                p.innerHTML += "Habilidad pasiva: "+objetos[propiedades.hab].hab+" ("+objetos[propiedades.hab].desc+")"
                p.classList.add("pDatos")
                var div = document.createElement("div")
                div.classList.add("selected")
                var img = document.createElement("img")
                img.src = galeria[propiedades.sprs].normal
                div.appendChild(img)
                celda.append(p, div)
                f.appendChild(celda)
                div.onclick = ()=> {
                    if (app.gamer.equipo.includes(nombre)) {
                        app.gamer.equipo[app.gamer.equipo.indexOf(nombre)] = app.gamer.nombre
                    }
                    app.actualizar(nombre)
                    inp.click()
                    input.click()
                }
                var celda = document.createElement("td")
                // celda 3. Estadisticas e historia
                var text = document.createElement("div")
                text.classList.add("pan2")
                celda.appendChild(text)
                text.innerHTML = "Edad: "+propiedades.edad+" <br> Rol: "+propiedades.rol+" <br>"
                if (historias[nombre]) {
                    let historia = historias[nombre]
                    for (let i = 0; i < historia.length; i++) {
                        const linea = historia[i];
                        let p = document.createElement("p")
                        p.textContent = linea
                        text.append(p)
                    }
                }
                var key = Object.keys(propiedades.stat)
                let array = {
                    vel: "Desplazamiento",
                    salto: "Velocidad de ataque",
                    def: "Defensa fisica",
                    atq: "Ataque fisico",
                    raf: "Ataque rafaga",
                    res: "Defensa rafaga"
                }
                for (let j = 0; j < key.length; j++) {
                    const k = key[j];
                    let stat = propiedades.stat[k]
                    let name = array[k]
                    if (name) {
                        let nodo = document.createElement("div")
                        nodo.innerHTML = name+"<br>"
                        let total = document.createElement("div")
                        total.classList.add("estad")
                        let progre = document.createElement("div")
                        progre.style.width = ((100 * stat)/maxStats[k])+"%"
                        progre.style.backgroundColor = propiedades.stat.color
                        nodo.appendChild(total)
                        total.appendChild(progre)
                        celda.appendChild(nodo)
                    }
                }
                let usar = document.createElement("div");
                usar.classList.add("botonMenu");
                usar.innerHTML = "Usar",
                usar.onclick = div.onclick
                let agregar = document.createElement("div");
                agregar.classList.add("botonMenu");
                if(!app.gamer.equipo.includes(nombre))
                agregar.innerHTML = "Agregar al equipo"
                else
                agregar.innerHTML = "Sacar del equipo"
                agregar.onclick = ()=> {
                    if (app.gamer.equipo.length < 3 && !app.gamer.equipo.includes(nombre) && app.gamer.nombre != nombre) {
                        app.gamer.equipo.push(nombre)
                        app.gamer.vidas.push(propiedades.vida)
                        inp.click()
                        lock = true
                    } else if (app.gamer.equipo.includes(nombre)) {
                        app.gamer.equipo.splice(app.gamer.equipo.indexOf(nombre), 1)
                        inp.click()
                        lock = true
                    }
                }
                celda.appendChild(usar)
                celda.appendChild(agregar)
                f.appendChild(celda)
                scroll.append(t)
            }
            if (app.gamer.personajes.includes(nombre) == false) {
                nodo.classList.add("bloqueado")
            }
        }

        scroll.appendChild(tabla)

    },
    function () { // 6
        lock = true
        app.mensaje([
            "En el baul de adelante podras cambiar de personaje",
            "Ademas puedes revisar las estadisticas y el modo de juego de cada personaje"
        ])
    },
    function () { // 7
        lock = true
        var nivelesDesk = [
            ["Bienvenido, ¿que bug te a comido?"], 
            [
                "Si te posicionas en el piso de mas adelante te transportaras al lugar de la mision",
                "Cada vez que termines una mision regresaras al valle de los sueños, por lo que podras comprar los articulos necesarios o cambiar de personaje",
                "Este letrero se actualizara con cada mision para darte detalles de esta",
                "Para esta primera se recomienda usar un personaje con buena movilidad"
            ]
        ]
        app.mensaje(nivelesDesk[app.gamer.nivel])
    },
    function () { // 8
        lock = true
        app.mensaje([
            "Lo que veras mas adelante es el mercado, hay gente que te puede ofrecer diversa variedad de objetos",
            "Recuerda que debes tener algo de valor para comprarles"
        ])
    },
    function () { // 9
        lock = true
        var i = aleatorio(1, 5)
        if (i == 4) {
            i++
        }
        if(app.gamer.objetos.length > 0){
            app.mensaje([
                "Hola, tengo un "+objetos[i].nombre+", si tienes algo de valor puedo cambiartelo por eso",
                objetos[i].descripcion
        ], true)
            afterMessage = ()=> {
                tienda(i)
                afterMessage = ()=> {}
            }
        } else {
            app.mensaje(["Hola que tal."])
        }
    },
    function () { // 10
        lock = true
        var i = aleatorio(6, 10)
        if (i == 7) {
            i = 9
        }
        console.log(i)
        if(app.gamer.objetos.length > 0){
            app.mensaje([
                "Hola, tengo un "+objetos[i].nombre+", si tienes algo de valor puedo cambiartelo por eso",
                objetos[i].descripcion
        ], true)
            afterMessage = ()=> {
                tienda(i)
                afterMessage = ()=> {}
            }
        } else {
            app.mensaje(["Hola que tal."])
        }
    }
]
function miniCreator(x, y) {
    var mini = document.createElement("div")
    mini.classList.add("mini")
    document.getElementById("pantalla").appendChild(mini);
    var info = document.createElement("div")
    info.classList.add("info")
    mini.appendChild(info)
    mini.style.left = x+"px"
    mini.style.top =  y+"px"
    return info

}
function tienda(i) {
    var caract = objetos[i]
    var a = false
    for (let h = 0; h < app.gamer.objetos.length; h++) {
        const obj = app.gamer.objetos[h];
        let element = objetos[obj]
        if (element.tipo == 4) {
            if (caract.costo <= element.valor || !caract.costo) {
                var prom = prompt("Quieres usar "+element.nombre+" para comprar "+caract.nombre+" \n 1) si \n 2) no")
                if (prom != "1") {
                    continue
                }
                app.gamer.objetos[h] = i
                a = true
                app.mensaje(["Ten aqui tienes."])
                h = app.gamer.objetos.length
            } 

        }
    }
    console.log(a)
    if (a == false) {
        app.mensaje(["No tienes nada que intercambiar."])
    }
}
