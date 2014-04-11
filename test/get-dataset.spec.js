/**
* @license get-dataset https://github.com/cosmios/get-dataset
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/

require("quick-dom");

var getDataset = require("../index");

describe("get-dataset", function () {

    var dom;

    beforeEach(function () {
        dom = document.createElement("div");
        dom.setAttribute("data-plugin1", "name1");
        dom.setAttribute("data-plugin2", "name2");
    });

    it("should be a function", function () {
        expect(typeof getDataset).toBe("function");
    });

    it("should return an object similar to a dataset", function () {
        var dataset = getDataset(dom);
        expect(typeof dataset).toBe("object");
        expect(dataset.plugin1).toBe("name1");
        expect(dataset.plugin2).toBe("name2");
    });

    it("should exactly return the dataset if the browser supports it", function () {
        if (dom.dataset) {
            dom.dataset.plugin1 = "browser supports dataset";
            var dataset = getDataset(dom);
            expect(dataset.plugin1).toBe("browser supports dataset");
        }
    });

});
