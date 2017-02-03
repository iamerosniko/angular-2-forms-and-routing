"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var files = [
            { filename: "image 12.png" },
            { filename: "image 12.png" },
            { filename: "image 12.png" }
        ];
        return { files: files };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
