var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dd;
(function (dd) {
    (function (ui) {
        //SOURCE based on: https://developers.google.com/youtube/iframe_api_reference?hl=de-DE
        (function (media) {
            var VideoPlayer = (function (_super) {
                __extends(VideoPlayer, _super);
                function VideoPlayer() {
                    _super.call(this);
                    this.element.addClass("dd-ui-media-video-player");

                    this._container = $("<div></div>");
                    this.element.append(this._container);
                }
                VideoPlayer.prototype.onClick = function () {
                    this.play();
                };

                VideoPlayer.prototype.play = function () {
                };

                VideoPlayer.prototype.stop = function () {
                };

                VideoPlayer.prototype.pause = function () {
                };
                return VideoPlayer;
            })(dd.ui.media.BaseMedia);
            media.VideoPlayer = VideoPlayer;
        })(ui.media || (ui.media = {}));
        var media = ui.media;
    })(dd.ui || (dd.ui = {}));
    var ui = dd.ui;
})(dd || (dd = {}));
