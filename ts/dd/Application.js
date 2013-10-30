var dd;
(function (dd) {
    var Application = (function () {
        function Application() {
            //            if (!navigator.device)
            //                document.addEventListener("deviceready", () => this.handleDeviceReady());
            //            else
            this.handleDeviceReady();
        }
        Application.prototype.handleDeviceReady = function () {
            if ($("#test-panel").length > 0)
                new dd.panels.TestPanel();
        };
        return Application;
    })();
    dd.Application = Application;
})(dd || (dd = {}));

$(window).ready(function () {
    new dd.Application();
});
