var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getInstance = function () {
        if (this.me) {
            return this.me;
        }
        this.me = new Logger();
        return this.me;
    };
    Logger.prototype.accederSistema = function () {
        //return this.logger;
        console.log("Bienvenido");
    };
    return Logger;
}());
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
