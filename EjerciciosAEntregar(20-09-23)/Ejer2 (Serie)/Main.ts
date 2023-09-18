import { Serie } from "./Serie";

let TheSerialKiller = new Serie("juan y amigos", 2017, 40, 2, true);

TheSerialKiller.verEpisodio();
TheSerialKiller.verEpisodio();
console.log(`te faltan ver ${TheSerialKiller.episodiosPorVer()} episodios`)
TheSerialKiller.serieVista();
TheSerialKiller.toString();

