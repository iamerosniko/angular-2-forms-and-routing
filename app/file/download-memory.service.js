"use strict";
var DownloadMemoryService = (function () {
    function DownloadMemoryService() {
    }
    DownloadMemoryService.prototype.createDb = function () {
        var download = [
            { filename: "Image 12.png", filePath: "C://Users//alverer//Documents//GitHub//ng2-api//solution//ng2-api//supload" },
            { filename: "Image 37.png", filePath: "C://Users//alverer//Documents//GitHub//ng2-api//solution//ng2-api//upload" }
        ];
        return { download: download };
    };
    return DownloadMemoryService;
}());
exports.DownloadMemoryService = DownloadMemoryService;
