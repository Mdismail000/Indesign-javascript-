var openDocument = app.activeDocument;

var fillLayer = openDocument.layers[0];

var newDocument = app.documents.add();
newDocument.name = "mdismail000";

var pages = newDocument.pages;
var layers = newDocument.layers;

var pageItems = newDocument.pageItems;

var pageItemOne = pageItems[1];
$.writeln(pageItemOne);
var swatches = app.swatches;

for(var i = 0; i < swatches.length; i++) {
    $.writeln(swatches[i]);
    }
//pageItemOne.fillColor = swatches[0];

var newPage = pages.add();
var newLayer = newDocument.layers.add();
newLayer = "My new layer";

var rectangleLayer = newPage.rectangles.add(newLayer);

$.writeln(pages);
$.writeln(layers);

var titleTextFrame = newPage.textFrames.add(newLayer);
titleTextFrame.contents = "indesign javascript";
titleTextFrame.geometricBounds = [3, 3, 10, 50];

var contentTextFrame = newPage.textFrames.add(newLayer);
var generatedContents = generateContents(300);
contentTextFrame.contents = generatedContents;
contentTextFrame.geometricBounds = [10, 3, 50, 48];

