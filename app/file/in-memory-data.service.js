"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var file = [
            { filename: "sample 1.txt" },
            { filename: "sample 2.txt" },
            { filename: "sample 3.txt" }
        ];
        return { file: file };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
