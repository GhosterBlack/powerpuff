var personajes = {
    normie: {
        vida: 100,
        clan: "perdido",
        rol: "habil",
        grupo: "Clan",
        sistema: 1,
        edad: 18,
        canal: {mana: 100, charge: 2, mejora: "atq", dis: 5, tele: 2, mana2: 40, poten: 4, nombre: "Energia pura",
        especial:[
            "buffs", {
                caida: 0.1,
                salto: 1.9
            },
            "timer", "50"
        ], count: 10
        
        },
        stat: {
            vel: 1,
            salto: 1,
            caida: 1,
            def: 2,
            atq: 2.8,
            color: "blue",
            raf: 1,
            res: 1.6,
            should: true
        },
        poderes: [0, 1],
        basico: {
            damage: 30,
            distancia: 3,
            tipo: 0,
            combi: 3,
            estado: {vel: 1.5, timer: 3},
            anim: poderes[1].anim,
            vis: poderes[1].vis
        },
        hab: 20,
        sprs: 0,
        ultiComb: 8,
        ulti: 0,
    },
    hania: {
        vida: 100,
        clan: "bailarin",
        rol: "habil",
        grupo: "Tribu",
        sistema: 2,
        edad: 16,
        canal: {tanques:[1], carga: [5], efectos: [26]},
        stat: {
            vel: 1.5,
            salto: 1.5,
            caida: 1.5,
            def: 1.5,
            atq: 2.8,
            color: "aqua",
            raf: 1,
            res: 2
        },
        basico: {
            damage: 30,
            distancia: 3,
            tipo: 0,
            combi: 3,
            estado: {vat: 1.5, timer: 3},
            anim: poderes[1].anim,
            vis: poderes[1].vis,
            class: 2,
            transis: visses[4]
        },
        poderes: [12, 13, 11],
        hab: 17,
        sprs: 8,
        ultiComb: 8,
        ulti: 0,
    },
    phantom: {
        vida: 140,
        clan: "espectro",
        rol: "especial",
        grupo: "Clan",
        sistema: 1,
        edad: 28,
        canal: {mana: 120, charge: 3, mejora:"visible", dis: -4, tele: 1, mana2: 80, poten: 0.9, nombre: "¿Me temes?",
        especial: [
            "buffs", {
                raf: 2.5,
                vel: 2,
                vat: 2
            },
            "timer", "200"
        ]},
        stat: {
            vel: 1.2,
            salto: 1,
            caida: 1,
            def: 1.5,
            atq: 1,
            color: "yellow",
            raf: 2.7,
            res: 2.2
        },
        basico: {
            damage: 30,
            distancia: 7,
            robo: 10,
            raf: true,
            res: true,
            anim: "<div class='medialuna' style='color: black; margin-top: 25px'></div>",
            vis: visses[0],
            combo: 5,
            efecto: {estado: 5, tiempo: 50},
            tipo: 15
        },
        poderes: [9, 10],
        hab: 7,
        restore: 3,
        sprs: 7,
        ultiTime: 30,
        ulti: 3,
    },
    silver: {
        vida: 110,
        clan: "domador",
        rol: "tirador",
        grupo: "Tribu",
        sistema: 2,
        edad: 17,
        canal: {tanques: [2, 2, 2], carga: [5, 8, 10], efectos: [27, 28, 29], color:"250, 100, 250, "},
        stat: {
            vel: 1.5,
            salto: 1,
            caida: 0.7,
            def: 1.8,
            atq: 3.2,
            color: "silver",
            raf: 2,
            res: 2
        },
        poderes: [6, 7],
        hab: 5,
        sprs: 5,
        basico: {
            damage: 30,
            distancia: 4,
            tipo: 0,
            anim: poderes[1].anim,
            vis: poderes[1].vis
        },
        ultiTime: 25,
        ulti: 1,
    },

    marinette: {
        vida: 80,
        clan: "sastre",
        rol: "tanque",
        grupo: "Aldea",
        sistema: 2,
        edad: 25,
        canal: {tanques: [1, 1, 1], carga: [2, 4, 6], efectos: [20, 21, 22], color:"255, 0, 0, "},
        stat: {
            vel: 0.8,
            salto: 1,
            caida: 1,
            def: 3,
            atq: 2.3,
            color: "rgb(50, 50, 50)",
            raf: 1,
            res: 3.8
        },
        poderes: [8, 3],
        basico: {
            damage: 30,
            tipo: 10,
            distancia: 4,
            anim: "<img src='img/objs/aguja.png' style='margin-top: 25px'>",
            vis: [{width: "0px"}, {width: "70px"}],
            combo: 5,
            efecto: {atq: 0.85, def: 0.85, timer: 1.5},
            vel: 70
        },
        hab: 6,
        sprs: 6,
        ultiTime: 20,
        ulti: 2,
    },

    anderson: {
        vida: 115,
        clan: "guerrero",
        rol: "tanque",
        grupo: "Academia",
        sistema: 2,
        edad: 29,
        canal: {tanques: [3, 3, 3], carga: [2, 4, 6], efectos: [23, 30, 31], color:"255, 20, 20, "},
        stat: {
            vel: 0.8,
            salto: 1,
            caida: 1,
            def: 3.8,
            atq: 1.9,
            color: "white",
            raf: 1.5,
            res: 3.8
        },
        poderes: [2, 14],
        basico: {
            damage: 20,
            distancia: 3,
            combi: 3,
            estado: {atq: 1.5, timer: 1},
            anim: "<div style='background-color: rgba(250, 190, 100, 0.9); margin-top: 100px' class='medialuna'></div>",
            vis: visses[0],
            class: 2,
            transis: visses[5]
        },
        hab: 10,
        sprs: 9,
        ultiTime: 15,
        ulti: 4,
        regen: 2
    },
    leonard: {
        vida: 115,
        clan: "guerrero",
        rol: "tirador",
        grupo: "Academia",
        sistema: 1,
        edad: 21,
        canal: {mana: 200, mejora: "vat", mana2: 0.1, charge: 10, nombre: "Municion", especial: [
            "salud", 1.5,
            "buffs", {
                caida: 0.1
            },
            "timer", "30"

        ]},
        stat: {
            vel: 2,
            salto: 2,
            caida: 1,
            def: 1.3,
            atq: 2.1,
            color: "white",
            raf: 2,
            res: 1.3
        },
        poderes: [15, 16],
        hab: 12,
        sprs: 10,
        ultiTime: 24,
        basico: {
            damage: 1,
            distancia: 8,
            combi: 20,
            estado: {vat: 1.3, timer: 2},
            anim: "<div style='background-color: gray; width: 10px; height: 5px; margin-top: 50px; border: solid 1px black'></div>",
            vis: [],
            rapido: 3,
            x: 1.5,
            mana: 1
        },
        ulti: 6,
        
    },
    gus: {
        vida: 115,
        clan: "bailarin",
        grupo: "Tribu",
        sistema: 2,
        edad: 22,
        rol: "fisico",
        canal: {tanques:[1], carga: [5], efectos: [26]},
        stat: {
            vel: 1.3,
            salto: 1,
            caida: 1,
            def: 2.5,
            atq: 2.5,
            color: "skyblue",
            raf: 1,
            res: 2.5
        },
        poderes: [17, 18, 25],
        hab: 13,
        sprs: 11,
        ultiComb: 10,
        basico: {
            damage: 30,
            distancia: 3,
            combi: 10,
            estado: {crit: 1.5, timer: 3},
            anim: "<div style='background-color: transparent;' class='medialuna'></div>",
            vis: visses[0],
            class: 2,
            transis: visses[5]
        },
        ulti: 5,
    },
    isabella: {
        clan: "angel",
        rol: "especial",
        grupo: "Clan",
        vida: 100,
        sistema: 1,
        edad: 19,
        canal: {mana: 100, mejora: "regen", mana2: 20, charge: 5, nombre: "Don celestial", especial: [
            "poderes", ["34", "35"],
            "stat", {
                def: 1.5,
                res: 3,
                caida: 0.5,
                raf: 2.4
            }
        ]},
        stat: {
            vel: 1.5,
            salto: 2,
            caida: 1,
            def: 3,
            atq: 1,
            color: "pink",
            raf: 2.5,
            res: 1.5
        },
        sprs: 12,
        poderes: [32, 33],
        hab: 18,
        ultiTime: 20,
        ulti: 7,
        basico: {
            damage: 30,
            distancia: 7,
            combo: 5,
            efecto: {vel: 0.9},
            anim: "<div class='shadow' style='color: pink'>",
            vis: visses[0],
            raf: true,
            res: true,
        }
    },
    ismael: {
        clan: "angel",
        rol: "fisico",
        grupo: "Ex-Clan",
        vida: 100,
        edad: 25,
        sistema: 2,
        canal: {tanques: [6, 7], carga: [7, 4], efectos: [24, 39], color: "40, 40, 40, ", assign: true},
        stat: {
            vel: 1.3,
            salto: 1,
            caida: 1,
            def: 2.7,
            atq: 2.8,
            color: "black",
            raf: 1,
            res: 1.7,

        },
        sprs: 12,
        poderes: [36, 38],
        hab: 19,
        ultiTime: 25,
        ulti: 8,
        basico: {
            damage: 30,
            distancia: 4,
            combo: 5,
            efecto: {vel: 0.9},
            anim: "<div style='background-color: transparent; color: black' class='medialuna'></div>",
            vis: visses[0],
            class: 3,
            transis: visses[5],
            combi: 5,
            estado: {atq: 1.2, raf: 1.2}
        }
    },

    killian: {
        clan: "tovar",
        rol: "tanque",
        grupo: "Familia",
        vida: 100,
        sistema: 0,
        edad: 21, 
        //canal: {tanques: [6, 7, 1], carga: [3, 3, 10], efectos: [42, 43, 44], color: "255, 255, 255, ", assign: true},
        stat: {
            vel: 1.6,
            salto: 2,
            caida: 2,
            def: 3.8,
            atq: 2.5,
            color: "white",
            raf: 1,
            res: 3,
    
        },
        sprs: 12,
        poderes: [42, 43, 44],
        hab: 21,
        ultiTime: 30,
        ulti: 10,
        basico: {
            damage: 15,
            distancia: 4,
            anim: "<div style='background-color: transparent; color: white' class='medialuna'></div>",
            vis: visses[0],
            combi: 3,
            estado: {crit: 1.5, atq: 1.4, timer: 1.3}
        }
    },
    lisa: {
        clan: "navarro",
        rol: "tirador",
        grupo: "Familia",
        vida: 100,
        edad: 27,
        sistema: 1,
        canal: {mana: 100, mejora: "vat", mana2: 20, charge: 10, nombre: "Nubes", especial: [
            "buffs", {caida: 2},
            "timer", 50   
        ]
        },
        stat: {
            vel: 1.5,
            salto: 0.7,
            caida: 1.2,
            def: 1.4,
            atq: 2.8,
            color: "rgb(100, 200, 255)",
            raf: 2.4,
            res: 1.5,

        },
        sprs: 12,
        poderes: [47, 46],
        hab: 22,
        ultiTime: 25,
        ulti: 11,
        basico: {
            damage: 30,
            distancia: 7,
            combo: 5,
            efecto: {vel: 0.9, timer: 0.9},
            anim: "<div style='background-color: transparent; color: white' class='medialuna'></div>",
            vis: visses[0],
        }
    },
    bastian: {
        clan: "sastre",
        rol: "habil",
        grupo: "Aldea",
        vida: 70,
        edad: 17,

        stat: {
            vel: 1.8,
            salto: 1,
            caida: 1,
            def: 1.2,
            atq: 2,
            color: "rgb(40, 40, 40)",
            raf: 1,
            res: 1.2,

        },
        sprs: 12,
        poderes: [50, 51, 52],
        hab: 23,
        ultiTime: 25,
        ulti: 12,
        basico: {
            damage: 30,
            distancia: 4,
            anim: "<img src='img/objs/aguja.png' style='margin-top: 25px;'>",
            vis: [{width: "0px"}, {width: "80px"}],
            combi: 3,
            estado: {crit: 2}
        }
    },
    Alya: {
        clan: "sastre",
        rol: "asistente",
        grupo: "Aldea",
        vida: 80,
        edad: 22,
        sistema: 1,
        canal: {mana: 100, mejora: "regen", mana2: 40, charge: 15, nombre: "Buen hilo", especial: [
            "buffs", {caida: 2},
            "timer", 50   
        ]
        },
        stat: {
            vel: 2,
            salto: 1,
            caida: 1.8,
            def: 1.8,
            atq: 1,
            color: "violet",
            raf: 2.2,
            res: 1.8,

        },
        sprs: 12,
        poderes: [53, 54],
        hab: 24,
        ultiTime: 25,
        ulti: 13,
        basico: {
            damage: 30,
            distancia: 7,
            combo: 5,
            efecto: {vel: 0.9, timer: 0.9},
            anim: "<div style='background-color: transparent; color: white' class='medialuna'></div>",
            vis: visses[0],
        }
    },
}
function tipos(tipo) {
    var tips = {
        vital: t([0], [1], [11, 10]),
        espectro: t([10, 3], [8, 2, 0], [6, 5, 11, 13], [1, 9]),
        sastre: t([10, 9], [2, 3], [11, 14], [0, 1]),
        monstruo: t([0, 1], [8, 9, 13], [7, 10, 1]),
        bailarin: t([12, 0, 7], [1, 6, 7], [5, 14, 15], [13]),
        guerrero: t([8, 1, 9], [12, 14], [15, 10]),
        perdido: t([0], [], [], [2, 7, 10]),
        domador: {
            tipo: [0, 13],
            debil: [4, 5, 6],
            resis: [11, 1],
            inmune: [14, 3]
        },
        angel: t([2, 11, 12, 14], [15, 9, 3, 5], [10, 1, 11]),
        tovar: t([0, 1, 12], [14, 12], [5, 6, 15, 10]),
        torrente: t([4, 5], [13, 6], [5, 3, 7]),
        navarro: t([2, 5], [3, 8], [7, 1, 0], [15])

    }
    return tips[tipo]
    function t(tipo=[0], debil=[], resis=[], inmune=[]) {
        return {tipo:tipo, debil:debil, resis:resis, inmune:inmune}
    }
}
/* 
 Tipos:
 
*/
var Tipos = [
    "Vitalidad", // 0
    "Fortaleza", // 1
    "Luz", // 2
    "Humo", // 3
    "Liquido", // 4
    
    "Calor", // 5
    "Frio", // 6
    "Sonido", // 7
    "Mineral", // 8
    "Metalico", // 9
    "Fobia", // 10
    "Mental", // 11
    "Emocional", // 12
    "Natural", // 13
    "Mitico", // 14
    "Maldad", // 15
]
var entidades = {
    // stats, tipos, sprite, poderes, evols
    hiperaton: [
        {
            vel: 2,
            obj: 4,
            color: "white",
            hab: 16,
            h: 70
        },
        {
            tipo: [0],
            debil: [1],
            inmune: [10]
        },
        3,
        [5, 0]
    ],

    groquem: [
        {
            vida: 50,
            def: 2,
            vel: 0.5,
            atq: 1,
            hab: 14,
            color: "brown",
            h: 120

        },
        {
            tipo: [8, 13],
            debil: [6, 3],
            resis: [2]
        },
        2,
        [0,4]
    ],
    vendedor: [
        {
            vida: 10000,
            def: 1000,
            res: 1000,
            obj: 1,
            objProb: 10
        },{},4,[0,0]
    ],
    bagstone: [
        {
            vida: 10000,
            def: 1,
            res: 1,
        },{},4,[0,0]
    ],
    hogro: [
        {vida:20, def: 1, vel: 0.7, atq: 2, obj: 1, hab: 1, color: "white"}, 
        {tipo: [0, 1], debil: [8, 9]}, 1, [0, 2]
    ],
    hyper: [
        {
            vel: 2,
            def: 4,
            vida: 100,
            color: "white",
            h: 150,
            atq: 1.2,
            res: 3,
            obj: 16,
            objProb: 10,
            hab: 16,
            vis: 500,
            dis: 150
        },
        {
            tipo: [0],
            debil: [1],
            inmune: [10]
        },
        3,
        [5, 12, 27, 28]
    ],
    
}
function bp(nombre) {
    for (let i = 0; i < poderes.length; i++) {
        const poder = poderes[i];
        if (poder.nombre == nombre) {
            return i
        }
    }
}
var maxStats = {
    vel: 3,
    salto: 3,
    caida: 1,
    def: 5,
    atq: 4,
    raf: 4,
    res: 5
}
var historias = {
    normie: [
        "Es el ultimo miembro de un clan que se pensaba extinto. Uno de los antecesores del hoy conocido como clan bailarin",
        "Su forma de batalla revala que en su tiempo su clan se dedicaba al manejo de la energia para la potenciacion fisica",
        "No hay muchos datos de él. Solo llego un día al valle de los sueños y no hay mucho mas.",
        "Un dia caminando por el prado, Normie se encontro con una muchacha que practicaba de una forma peculiar una que le parecia familiar",
        "La chica se llamaba Hania, Normie se intereso tanto por ella que le propuso entrenar juntos y enseñarle su tecnica mas fuerte",
        "Asi fue como Normie y Hania empezaron a entrenar juntos."
    ],
    hania: [
        "Es hermana de Gus, un exhiliado de la tribu bailarín.",
        "Por culpa del exhilio de su hermano mayor Hania tuvo que hacer frente a la vida practicamente sola y hacerse cargo de su hermana menor.",
        "Sin embargo Hania nunca perdio la esperanza ni la sonrisa, ni se volvio una amargada.",
        "A pesar de su buena actitud cuando se reencontro con su hermano le fue dificil perdonarlo por que sentia que este las habia abandonado",
        "Con el tiempo Gus logro que Hania lo perdonara, luego de eso los tres hermanos se fueron del territorio de la tribu",
        "Entrenaron juntos hasta el dia que a Gus lo reclutaron como miembro de la academia de la guerra."
    ],
    phantom: [
        "Su clan es conocido por asimilarse a la escencia del propio Necrorus. Estar cerca de él puede causar pesadillas",
        "Se conoce las habilidades fantasmagoricas de este clan, sin embargo Phantom nunca logro dominar el estado fantasmal que caracteriza a su clan",
        "A pesar de esta desventaja Phantom desarrollo su propia tecnica unica, una habilidad que lo destaca de entre cualquier espectro",
        "El humo de Phantom es letal, causa envenenamiento a quien lo inhale.",
        "Phantom ademas aprendio a alimentarse del dolor que causa su veneno."
    ],
    silver: [
        "Silver es un domador, como a cualquiera de su tribu le encantan los animales y los Biyous",
        "El llevaba una vida normal y tranquila en su villa, sin embargo un día una gran bestia que ningun domador pudo controlar acabo con su hogar",
        "La mayoria de los domadores murieron en ese acontecimiento, cuando la academia de la guerra se entero de lo que ocurrio en lugar de ayudarlo dandole un hogar lo proclamaron un Cyanuro",
        "Un cyanuro es un hanyou que perdio todo y que por el dolor de la perdida se deja controlar por la energia, terminando en convertirse en un montruo de destruccion y venganza",
        "Es de entender que se le cazara al proclamarsele cyanuro, pero Silver nunca perdio el control, tuvo que escapar de la guardia real.",
        "Termino por esconderse en el valle de los sueños, donde concio a Normie y a Hania.",
        ".",
        "Por cierto la bestia que acabo con su pueblo, no fue controlada, fue eliminada a manos de Silver."
    ],
    marinette: [
        "Marinette era una niña muy animada, siempre sonreia y se reia por todo, corria de un lado a otro en su villa.",
        "Amaba a su madre aunque esta mujer no fuera la mejor cumpliendo con su rol materno.",
        "La señora podia dejar días a su hija sola en la casa por ir a buscar marido. Marinette tenia que aprender a hacer las cosas por su cuenta",
        "Un dia la madre de la niña, consiguio por fin un hombre. Marinette se alegro por su madre pues era lo que ella tanto habia querido",
        "Pero la salud mental de este hombre era cuestionable, pues sentia celos de la hija de su mujer, tanto asi que hizo que la madre echara a Marinette de su hogar",
        "Ahora la niña tenia que vagar por las calles",
        "Fue entonces que se convirtio en una Sastre. Al vagar por las calles encontro la aldea de los sastres.",
        "En ella seria feliz, pues bien se sabe que los sastres acojen bien a quienes han sido abandonados",
        "Tambien en esta aldea Marinette hallaria el amor, se casaria y tendria su familia...",
        "Solo para que mas tarde un hombre misterioso asesinara a dicha familia en frente de Marinette",
        "Esto fue la gota que colmo el vaso, Marinette descargo toda su rabia e ira contenida de una vez, liberando mil sombras en una sola orden.", 
        "ese dia las sombras pelearon por ella."
    ],
    anderson: [
        "Es un guerrero exhiliado de la academia de la guerra. Al enterarse de la corrupcion que en ella había, Anderson decidio dejar su puesto y aceptar el exhilio",
        "Penso que la corte consideraria que su expulsion seria suficiente castigo, pero no contaba con que lo condenarian a muerte.",
        "Como hanyou entrenado en el arte del mineral, Anderson no dejaria que lo ejecutasen sin haber cometido ningun pecado",
        "Causo un gran terremoto y destruyo el edificio de la corte.",
        "Luego de eso escapo y se dirigio al valle de las sombras, en camino contrario al valle de los sueños.",
        "Sin embargo, la guardia real mando a uno de sus miembros a eliminar a anderson, cuando este le hizo frente, no logro atravesar su gran defensa y callo ante sus inumerables ataques de tierra",
        "A pesar de todo Anderson poseia el corazon de un noble, no mato a su atacante sino que le concedio la oportunidad de aliarse con él.",
        "Asi los dos fueron rumbo al valle de los sueños."
    ],
    leonard: [
        "Fue conocido en la corte como 'El hanyou sin poder'. Leonard era incapaz de de usar los movimientos de piedras, tierra o si quiera podia invocar el filo de una espada.",
        "por mucho tiempo se le considero un humano que generaba katsu hanyou y ya, puesto que no podia controlar ese katsu y requeria de un humano para usar el katsu humano.",
        "A pesar de eso, en la academia de la guerra no hay solo hanyous, tambien hay humanos, por eso fue entranado como miembro de la academia.",
        "Eso no evito que tanto sus compañeros hanyous como humanos le rechazaran por no poder controlar su katsu como los hanyous y por no generar el katsu humano.",
        "Leonard era un caso singular sin duda, pero aprendio muy rapido a disparar y moverse rapido, muy pronto se convirtio en uo de los soldados mas vitales de la realeza.",
        "Un día, en una revision medica de rutina, la doctora sustituta, una miembro de la aldea Sastre, atendio a Leonard y descubrio que el aprendio a usar su katsu para potenciar su capacidad de aprendizaje",
        "Gracias a ella, Leonard recupero la esperanza y poco a poco descubrio como controlar por completo su katsu, aun asi no dejo su rifle y su escopeta atras.",
        "Un dia, la corte le pidio que casace a un exhiliado, y así lo hizo. Sin embargo el tipo al que le pidieron que case era el mismisimo Anderson, uno de sus heroes.",
        "Al perder contra el y escuchar su historia, se unio a su lado y viajo con el al valle de los sueños"
    ],
    gus: [
        "Gus fue exhiliado de su tribu por no acatar las ordenes que se le dio. El pensaba que la academia de guerra era un grupo de personas honorables",
        "Con ese pensamiento abandono su tribu y presento su solicitud a la academia para formar parte de las lineas de la corte",
        "Los bailarines eran conocidos por ser como los jitanos de los hanyous, siempre llendo de aquí para alla, esto hizo que la guardia real dudara de el",
        "Pero al cabo de un rato, al demostrarle su lealtad y sobre todo su efectividad, Gus fue aceptado como miembro de la realeza.",
        "Sin embargo no duro mucho para que se diera cuenta que su amada academia no era mas que un monton de matones y maleantes",
        "Aun asi no perdio la esperanza de que todo cambiara. Lo enviaron a una mision para eliminar a unos desertores",
        "Cuando encontro a uno de ellos, que parecia confiar mucho en su defensa Gus no tardo en bajarlo de su nube con unos pocos pasos no solo traspazo su defensa sino que lo dejo medio muerto",
        "Sin embargo se dio cuenta que estaba siendo apuntado por otro de los desertores, justo antes de ser aniquilado pudo oir la voz de su hermana",
        "Una voz que penso que nunca volveria a oir, cuando el tirador oyo esta voz bajo su arma. Hania no tardo en hacerse notar.",
        "Gus tambien bajo las armas... Luego de eso, Anderson, el desertor que casi mata Gus, le explico por que habia abandonado la academia",
        "La noticia fue como un golpe bajo para Gus, quien de inmediato tambien deserto de la Academia"
    ],
    isabella: [
        "En el mundo celestial donde viven los conocidos Angeles, Isabella es conocida por ser la mujer mas fuerte entre todos los angeles. Nacio con una habilidad unica, podia controlar el Katsu puro de los angeles y el katsu normal de los humanos",
        "Con esta facultad unica poseia una dualidad especial sin duda. Un dia, una extraña grieta rompio el espacio en el universo angelical, esto tomo por sorpresa a todos los angeles \n\
        quienes asumiero que lo que salia de ella era un hijo de necrorus.",
        "Al no conocer el poder de este, enviaron a su guerrera mas fuerte, Isabella. La batalla contra este ser fue muy larga y consumio mucho a la angel.",
        "Cuando estaba a punto de perder, su hermano Ismael se interpuso contra el golpe de gracia. Este ataque consumio la puresa de Ismael y lo convirtio en un Hanyou impuro que el propio universo rechazo, en tanto esto sucedio \n\
        tanto Ismael como la criatura que atacaba a Isabella fueron enviados al mundo humano",
        "Isabella baja constantemente a este mundo a visitar a su hermano y a vigilar que esa cosa que lo mancho no se salga de control."
    ]
}
const clases = {
    tanque: "No suelen golpear muy fuerte por si solos pero aguantan bien el daño. Si una batalla se alarga mucho confia en cambiar a uno de ellos para no perder la partida.",
    asistente: "No golpean fuerte ni son buenos aguantando daño, pero sus habilidades surten efecto aun si estan fuera de combate, cambiar a un asistente no crea tiempo de recarga al cambio.",
    habil: "Basan su eficacia en sus habilidades, suele tener habilidades de movimiento que les permiten escapar en caso de nececitarlo o alcanzar a algun enemigo. No tienen mucha distancia \n\
     en sus ataques basicos por lo que dependen de sus habilidades",
    tirador: "Sus ataques basicos y a veces sus habilidades golpean a distancia considerable, suelen causar mucho daño pero tener muy poca resistencia, es muy bueno para pasar niveles, pero \n\
    se cuidadoso al usarlo contra jefes.",
    especial: "Suelen usar el daño rafaga para sus ataques, tienen distancia en muchas ocaciones y aguantan bien, pero solo por uno de los dos lados. Al tener buena defensa fisica tendran baja defensa rafaga \n\
    o biceversa, usalos en niveles donde los enemigos usen un solo tipo de daño.",
    fisico: "Golpean a los rivales usando daño fisico, tienen buena distancia con sus habilidades y aguanta bien. Usalos contra jefes para derrotarlos mas rapidamente."
}