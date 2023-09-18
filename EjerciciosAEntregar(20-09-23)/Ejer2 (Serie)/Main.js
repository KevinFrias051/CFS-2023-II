"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Serie_1 = require("./Serie");
var TheSerialKiller = new Serie_1.Serie("juan y amigos", 2017, 40, 2, true);
TheSerialKiller.verEpisodio();
console.log("te faltan ver ".concat(TheSerialKiller.episodiosPorVer(), " episodios"));
TheSerialKiller.serieVista();
TheSerialKiller.toString();
//console.log(TheSerialKiller);
