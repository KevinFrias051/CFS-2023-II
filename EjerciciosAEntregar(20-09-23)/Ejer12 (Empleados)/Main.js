"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gerente_1 = require("./gerente");
var trabajador_1 = require("./trabajador");
var empleadoTemporal_1 = require("./empleadoTemporal");
var Lucas = new gerente_1.Gerente("Lucas", "Fava", 350000, "Salud");
var Kevin = new trabajador_1.Trabajador("Kevin", "Frias", 250000, 150);
var Ayelen = new empleadoTemporal_1.EmpleadoTemporal("Ayelen", "Porqueres", 200000, 100, "septiembre 21,2023");
Lucas.asignarTarea(Ayelen, "Ponete a programar");
Kevin.solicitarDiaLibre("18 septiempre 2023");
Lucas.reducirSalario(Kevin, 5);
Lucas.aumentarSalario(Ayelen, 5);
Ayelen.verificarVencimientoContrato("septiembre 20,2023");
