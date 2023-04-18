// const { edukasi } = require("../lib/restapi-org")

// const { tools } = require("../lib/restapi-org")

{/* <li class="has-sub">
    <a class="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#app"
        aria-expanded="false" aria-controls="app">
        <i class="mdi mdi-pencil-box-multiple"></i>
        <span class="nav-text">App</span> <b class="caret"></b>
    </a>

    <ul class="collapse " id="app" data-parent="#sidebar-menu">
        <div class="sub-menu">
            <li class="">
                <a class="sidenav-item-link" href="chat.html">
                    <span class="nav-text">Chat</span>
                </a>
            </li>
        </div>
    </ul>
</li> */}

const menu = [
    {
        icon: "",
        name: "asupan",
        items: [
            {
                name: "bocil",
                url: "/api/asupan/Bocil"
            },
            {
                name: "geayubi",
                url: "/api/asupan/geayubi"
            },
            {
                name: "gheayubi",
                url: "/api/asupan/gheayubi"
            },
            {
                name: "hijaber",
                url: "/api/asupan/hijaber"
            },
            {
                name: "santuy",
                url: "/api/asupan/santuy"
            },
            {
                name: "rikagusriani",
                url: "/api/asupan/rikagusriani"
            },
            {
                name: "random",
                url: "/api/asupan/random"
            }
        ]
    },
    {
        icon: "",
        name: "image",
        items: [
            {
                name: "cogan",
                url: "/api/image/cogan"
            },
            {
                name: "cecan",
                url: "/api/image/cecan"
            },
            {
                name: "aesthetic",
                url: "/api/image/aesthetic"
            },
            {
                name: "anjing",
                url: "/api/image/anjing"
            },
            {
                name: "antiwork",
                url: "/api/image/antiwork"
            },
            {
                name: "blackpink",
                url: "/api/image/blackpink"
            },
            {
                name: "boneka",
                url: "/api/image/boneka"
            },
            {
                name: "cecan",
                url: "/api/image/cecan"
            },
            {
                name: "cosplay",
                url: "/api/image/cosplay"
            },
            {
                name: "dadu",
                url: "/api/image/dadu"
            },
            {
                name: "justina",
                url: "/api/image/justina"
            },
            {
                name: "kayes",
                url: "/api/image/kayes"
            },
            {
                name: "kpop",
                url: "/api/image/kpop"
            },
            {
                name: "kucing",
                url: "/api/image/kucing"
            },
            {
                name: "mobil",
                url: "/api/image/mobil"
            },
            {
                name: "notnot",
                url: "/api/image/notnot"
            },
            {
                name: "profil",
                url: "/api/image/profil"
            },
            {
                name: "rose",
                url: "/api/image/rose"
            },
            {
                name: "ryujin",
                url: "/api/image/ryujin"
            },
            {
                name: "wallhp",
                url: "/api/image/wallhp"
            },
            {
                name: "wallml",
                url: "/api/image/wallml"
            }
        ]
    },
    {
        icon: "",
        name: "sfw",
        items: [
            {
                name: "milf",
                url: "/api/sfw/milf"
            },
            {
                name: "loli",
                url: "/api/sfw/loli"
            },
            {
                name: "neko",
                url: "/api/sfw/neko"
            },
            {
                name: "hubsu",
                url: "/api/sfw/hubsu"
            },
            {
                name: "shota",
                url: "/api/sfw/shota"
            },
            {
                name: "waifu",
                url: "/api/sfw/waifu"
            }
        ]
    },
    {
        icon: "",
        name: "islamic",
        items: [
            {
                name: "al-quran",
                url: "/api/islamic/al-quran"
            },
            {
                name: "al-quran",
                desc: "params ayat 1-114",
                url: "/api/islamic/al-quran/1"
            },
            {
                name: "asmaul husna",
                desc: "params ayat 1-99",
                url: "/api/islamic/asmaul_husna"
            },
            {
                name: "kisah nabi",
                desc: "params nama nabi adam-muhammad",
                url: "/api/islamic/kisahnabi"
            }
        ]
    },
    {
        icon: "",
        name: "edukasi",
        items: [
            {
                name: "covidworld",
                url: "/api/edukasi/covidworld"
            },
            {
                name: "infogempa",
                url: "/api/edukasi/infogempa/"
            }
        ]
    },
    {
        icon: "",
        name: "tools",
        items: [
            {
                name: "Ip",
                url: "/api/tools/ip"
            },
            {
                name: "Ip Lookup",
                desc: "params ip ex: 8.8.8.8",
                url: "/api/tools/ip/8.8.8.8"
            },
            {
                name: "stalk ff",
                desc: "query id ex: 2637837475",
                url: "/api/tools/stalkff?id=2637837475"
            }
        ]
    }
]

const menus = {
    asupan: [
        {
            name: "bocil",
            url: "/api/asupan/Bocil"
        },
        {
            name: "geayubi",
            url: "/api/asupan/geayubi"
        },
        {
            name: "gheayubi",
            url: "/api/asupan/gheayubi"
        },
        {
            name: "hijaber",
            url: "/api/asupan/hijaber"
        },
        {
            name: "santuy",
            url: "/api/asupan/santuy"
        },
        {
            name: "rikagusriani",
            url: "/api/asupan/rikagusriani"
        },
        {
            name: "random",
            url: "/api/asupan/random"
        }
    ],
    randomimage: [
        {
            name: "cogan",
            url: "/api/image/cogan"
        },
        {
            name: "cecan",
            url: "/api/image/cecan"
        },
        {
            name: "aesthetic",
            url: "/api/image/aesthetic"
        },
        {
            name: "anjing",
            url: "/api/image/anjing"
        },
        {
            name: "antiwork",
            url: "/api/image/antiwork"
        },
        {
            name: "blackpink",
            url: "/api/image/blackpink"
        },
        {
            name: "boneka",
            url: "/api/image/boneka"
        },
        {
            name: "cecan",
            url: "/api/image/cecan"
        },
        {
            name: "cosplay",
            url: "/api/image/cosplay"
        },
        {
            name: "dadu",
            url: "/api/image/dadu"
        },
        {
            name: "justina",
            url: "/api/image/justina"
        },
        {
            name: "kayes",
            url: "/api/image/kayes"
        },
        {
            name: "kpop",
            url: "/api/image/kpop"
        },
        {
            name: "kucing",
            url: "/api/image/kucing"
        },
        {
            name: "mobil",
            url: "/api/image/mobil"
        },
        {
            name: "notnot",
            url: "/api/image/notnot"
        },
        {
            name: "profil",
            url: "/api/image/profil"
        },
        {
            name: "rose",
            url: "/api/image/rose"
        },
        {
            name: "ryujin",
            url: "/api/image/ryujin"
        },
        {
            name: "wallhp",
            url: "/api/image/wallhp"
        },
        {
            name: "wallml",
            url: "/api/image/wallml"
        }
    ],
    sfwimage: [
        {
            name: "milf",
            url: "/api/sfw/milf"
        },
        {
            name: "loli",
            url: "/api/sfw/loli"
        },
        {
            name: "neko",
            url: "/api/sfw/neko"
        },
        {
            name: "hubsu",
            url: "/api/sfw/hubsu"
        },
        {
            name: "shota",
            url: "/api/sfw/shota"
        },
        {
            name: "waifu",
            url: "/api/sfw/waifu"
        }
    ],
    islamic: [
        {
            name: "al-quran",
            url: "/api/islamic/al-quran"
        },
        {
            name: "al-quran ayat",
            desc: "params ayat 1-114",
            url: "/api/islamic/al-quran/1"
        },
        {
            name: "asmaul husna",
            desc: "params ayat 1-99",
            url: "/api/islamic/asmaul_husna"
        },
        {
            name: "asmaul husna 1-99",
            desc: "params ayat 1-99",
            url: "/api/islamic/asmaul_husna/1"
        },
        {
            name: "kisah nabi",
            desc: "params nama nabi adam-muhammad",
            url: "/api/islamic/kisahnabi/adam"
        }
    ],
    edukasi: [
        {
            name: "covidworld",
            url: "/api/edukasi/covidworld"
        },
        {
            name: "infogempa",
            url: "/api/edukasi/infogempa/"
        }
    ],
    tools:  [
        {
            name: "Ip",
            url: "/api/tools/ip"
        },
        {
            name: "Ip Lookup",
            desc: "params ip ex: 8.8.8.8",
            url: "/api/tools/ip/8.8.8.8"
        },
        {
            name: "stalk ff",
            desc: "query id ex: 2637837475",
            url: "/api/tools/stalkff?id=2637837475"
        }
    ]
}

function menuss() {
    for (var e of menus.randomimage){
        // Random Img
        randomimage.innerHTML += `<li class="">
        <a class="sidenav-item-link" href="${e.url.trim()}">
          <span class="nav-text">${e.name.trim()}</span>
        </a>
      </li>`
    }
    for (var e of menus.asupan){
        // Random Asupan
        asupan.innerHTML += `<li class="">
        <a class="sidenav-item-link" href="${e.url.trim()}">
          <span class="nav-text">${e.name.trim()}</span>
        </a>
      </li>`
    }
    for (var e of menus.sfwimage){
        // Sfw Img
        sfw.innerHTML += `<li class="">
        <a class="sidenav-item-link" href="${e.url.trim()}">
          <span class="nav-text">${e.name.trim()}</span>
        </a>
      </li>`
    }
    for (var e of menus.islamic){
        // Islamic
        islamic.innerHTML += `<li class="">
        <a class="sidenav-item-link" href="${e.url.trim()}">
          <span class="nav-text">${e.name.trim()}</span>
        </a>
      </li>`
    }
    for (var e of menus.edukasi){
        // edukasi
        edukasi.innerHTML += `<li class="">
        <a class="sidenav-item-link" href="${e.url.trim()}">
          <span class="nav-text">${e.name.trim()}</span>
        </a>
      </li>`
    }
    for (var e of menus.tools){
        // Tools
        tools.innerHTML += `<li class="">
        <a class="sidenav-item-link" href="${e.url.trim()}">
          <span class="nav-text">${e.name.trim()}</span>
        </a>
      </li>`
    }
}

menuss()

// for (var e of menu) {
//     coder = `<li class="has-sub">
//     <a class="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#${e.name.trim()}"
//         aria-expanded="false" aria-controls="app">
//         <i class="mdi mdi-pencil-box-multiple"></i>
//         <span class="nav-text">${e.name.trim()}</span> <b class="caret"></b>
//     </a>
//         %items$
//     </li>
// `;
//     item_coder = "";
//     for (var ee of e.items) {
//         item_coder += ` <ul class="collapse " id="${e.name.trim()}" data-parent="#sidebar-menu">
//         <div class="sub-menu"><li class="">
//         <a class="sidenav-item-link" href="${ee.url.trim()}">
//             <span class="nav-text">${ee.name.trim()}</span>
//         </a>
//     </li></div>
//     </ul>`;
//     }

//     document.getElementById('menuh').innerHTML += coder.replace('%items$', item_coder);
// }


// for (var e of menu) {
//     coder = `<li class="has-sub">
//     <a class="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#${e.name.trim()}"
//         aria-expanded="false" aria-controls="app">
//         <i class="mdi mdi-pencil-box-multiple"></i>
//         <span class="nav-text">${e.name.trim()}</span> <b class="caret"></b>
//     </a>
//     <ul class="collapse " id="${e.name.trim()}" data-parent="#sidebar-menu">
//     <div class="sub-menu">
//     %itemsl$
//     </div>
// </ul>
//     </li>
// `;
//     item_coder = "";
//     // console.log(`#${e.name.trim()}`)
//     for (var ee of e.items) {
//         item_coder += `<li class="">
//         <a class="sidenav-item-link" href="${ee.url.trim()}">
//             <span class="nav-text">${ee.name.trim()}</span>
//         </a>
//     </li>`;
//     }

//     document.getElementById('menuh').innerHTML += coder.replace('%itemsl$', item_coder);
// }