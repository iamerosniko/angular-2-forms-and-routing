"use strict";
var DownloadMemoryService = (function () {
    function DownloadMemoryService() {
    }
    DownloadMemoryService.prototype.createDb = function () {
        var download = [
            { filename: "image.png" },
            { filename: "image.png" },
            { filename: "image.png" }
        ];
        return { download: download };
    };
    return DownloadMemoryService;
}());
exports.DownloadMemoryService = DownloadMemoryService;
