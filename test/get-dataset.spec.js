/**
* @license get-dataset https://github.com/cosmios/get-dataset
*
* The MIT License (MIT)
*
* Copyright (c) 2014-2015 Olivier Scherrer <pode.fr@gmail.com>
*/

require("quick-dom");

var chai = require("chai");
var expect = chai.expect;
var getDataset = require("../index");

describe("get-dataset", function () {

    var dom;

    beforeEach(function () {
        dom = document.createElement("div");
        dom.setAttribute("data-plugin", "name1");
        dom.setAttribute("data-plugin-composed-name", "name2");
    });

    it("should return an object similar to a dataset", function () {
        expect(getDataset(dom)).to.eql({
            plugin: "name1",
            pluginComposedName: "name2"
        });
    });

    it("should exactly return the dataset if the browser supports it", function () {
        if (dom.dataset) {
            expect(dom.dataset).to.be(getDataset(dom));
        }
    });

});
