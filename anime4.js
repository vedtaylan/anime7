(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"anime4_atlas_1", frames: [[0,0,2048,2048]]},
		{name:"anime4_atlas_2", frames: [[0,0,1024,2048]]},
		{name:"anime4_atlas_3", frames: [[0,0,1024,1024],[-657111452,3,-1040187284,-788529043]]},
		{name:"anime4_atlas_4", frames: [[0,0,1024,1024],[-657111452,3,-1040187284,-788529043]]},
		{name:"anime4_atlas_5", frames: [[-657111452,3,-1040187284,-788529043],[0,0,1024,1024]]},
		{name:"anime4_atlas_6", frames: [[-657111452,3,-1040187284,-788529043],[0,0,1024,1024]]},
		{name:"anime4_atlas_7", frames: [[-657111452,3,-1040187284,-788529043],[0,0,1024,1024]]},
		{name:"anime4_atlas_8", frames: [[-657111452,3,-1040187284,-788529043],[0,0,1024,1024]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Image = function() {
	this.initialize(ss["anime4_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.initialize(ss["anime4_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.initialize(ss["anime4_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.initialize(ss["anime4_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_4 = function() {
	this.initialize(ss["anime4_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_5 = function() {
	this.initialize(ss["anime4_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_6 = function() {
	this.initialize(ss["anime4_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.initialize(ss["anime4_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsGMHIAA4NIYNAAIAAYNg");
	mask.setTransform(77.525,77.525);

	// Layer_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.1514,0.1514);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,155.1,155.1), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgjtAjuMAAAhHbMBHbAAAMAAABHbg");
	mask_1.setTransform(228.625,228.625);

	// Layer_3
	this.instance_1 = new lib.Image_7();
	this.instance_1.setTransform(0,0,0.4466,0.4466);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0,457.3,457.3), null);


(lib.ClipGroup_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A9hdiMAAAg7DMA7DAAAMAAAA7Dg");
	mask_2.setTransform(188.95,188.975);

	// Layer_3
	this.instance_2 = new lib.Image_6();
	this.instance_2.setTransform(0,0,0.3691,0.3691);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, new cjs.Rectangle(0,0,377.9,378), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgtWAtXMAAAhatMBatAAAMAAABatg");
	mask.setTransform(290.3,290.3);

	// Layer_3
	this.instance = new lib.Image_5();
	this.instance.setTransform(0,0,0.2835,0.2835);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,580.6,580.6), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Aucc5MAAAg5xIc4AAMAAAA5xg");
	mask_1.setTransform(92.45,184.9);

	// Layer_3
	this.instance_1 = new lib.Image_4();
	this.instance_1.setTransform(0,0,0.1806,0.1806);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,184.9,369.8), null);


(lib.ClipGroup_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AozI0IAAxnIRnAAIAARng");
	mask_3.setTransform(56.4,56.4);

	// Layer_3
	this.instance_3 = new lib.Image_3();
	this.instance_3.setTransform(0,0,0.1102,0.1102);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_3, new cjs.Rectangle(0,0,112.8,112.8), null);


(lib.ClipGroup_0_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AogIhIAAxBIRBAAIAARBg");
	mask_4.setTransform(54.45,54.45);

	// Layer_3
	this.instance_4 = new lib.Image_2();
	this.instance_4.setTransform(0,0,0.1063,0.1063);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_4, new cjs.Rectangle(0,0,108.9,108.9), null);


(lib.ClipGroup_0_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AsyMzIAA5lIZlAAIAAZlg");
	mask_5.setTransform(81.9,81.9);

	// Layer_3
	this.instance_5 = new lib.Image_1();
	this.instance_5.setTransform(0,0,0.16,0.16);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_5, new cjs.Rectangle(0,0,163.8,163.8), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoSI2QjdjPgXkuIAAhxQAWkpDYjOQDZjPEsgIIAlAAQCbAFCNA9QCIA9BoBrQBoBrA6CJQA6COAACaQABCdg+CRQg6CLhrBrQhsBriMA6QiPA+idgBQkyABjgjRg");
	mask.setTransform(77.45,77.45);

	// Layer_3
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(77.5,77.5,1,1,0,0,0,77.5,77.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,154.9,154.9), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgN4Ag5Qmbitk7k8Qk9k8iumbQizmoAAnRQAAnQCzmoQCumbE9k7QE7k9GbiuQGoizHQAAQHQAAGpCzQGaCuE9E9QE8E7CtGbQC0GoAAHQQAAHRi0GoQitGbk8E8Qk9E8maCtQmpC0nQAAQnQAAmoi0g");
	mask_1.setTransform(228.5,228.5);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_0_1();
	this.instance_1.setTransform(228.7,228.7,1,1,0,0,0,228.7,228.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,457,457), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrdiQl5gJlXiYQlMiTj+kEQkAkFiLlPQiRlbAAl7QABl/CUlfQCQlTEFkGQEFkGFUiPQFfiVGAAAQF6AAFcCRQFOCLEFD/QEED/CTFMQCYFXAJF5IAABYQgJF0iTFSQiQFIj+D+Qj9D+lICPQlTCTlzAJg");
	mask_2.setTransform(188.95,188.975);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_0_2();
	this.instance_2.setTransform(189,189,1,1,0,0,0,189,189);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,377.9,378), null);


(lib.ClipGroup_0_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AogUKQj7hqjCjCQjBjChrj7QhukFAAkcQAAkcBukEQBrj8DBjBQDCjCD7hqQEEhuEcAAQEdAAEEBuQD7BqDCDCQDCDBBqD8QBuEEAAEcQAAEdhuEEQhqD7jCDCQjCDCj7BqQkEBukdAAQkcAAkEhug");
	mask_6.setTransform(191.2,189.55);

	// Layer_3
	this.instance_6 = new lib.ClipGroup_1();
	this.instance_6.setTransform(290.3,290.3,1,1,0,0,0,290.3,290.3);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_6, new cjs.Rectangle(51.2,49.6,280,280), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EgtWAtXMAAAhatMBatAAAMAAABatg");
	mask_3.setTransform(290.3,290.3);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_0_6();
	this.instance_3.setTransform(290.3,290.3,1,1,0,0,0,290.3,290.3);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,580.6,580.6), null);


(lib.ClipGroup_0_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AlgNEQijhEh+h+Qh9h+hFijQhHipAAi4QAAi4BHioQBFijB9h9QB+h+CjhFQCphHC3gBQC4ABCqBHQCiBFB+B+QB+B9BECjQBHCoABC4QgBC4hHCpQhECjh+B+Qh+B+iiBEQiqBHi4AAQi3AAiphHg");
	mask_7.setTransform(91.55,91.6);

	// Layer_3
	this.instance_7 = new lib.ClipGroup_1_1();
	this.instance_7.setTransform(92.5,184.9,1,1,0,0,0,92.5,184.9);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_7, new cjs.Rectangle(0.8,0.9,181.5,181.5), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Aucc5MAAAg5xIc4AAMAAAA5xg");
	mask_4.setTransform(92.45,184.9);

	// Layer_3
	this.instance_4 = new lib.ClipGroup_0_7();
	this.instance_4.setTransform(92.5,184.9,1,1,0,0,0,92.5,184.9);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,184.9,369.8), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AmIGJQijijAAjmQAAjlCjijQCjiiDlAAQDmAACjCiQCjCjAADlQAADmijCjQiiCijnAAQjlAAijiig");
	mask_5.setTransform(56.475,56.475);

	// Layer_3
	this.instance_5 = new lib.ClipGroup_0_3();
	this.instance_5.setTransform(56.4,56.4,1,1,0,0,0,56.4,56.4);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0.9,1,111.19999999999999,111), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("Al7F7QididABjeQgBjdCdidQCdidDeAAQDeAACdCdQCeCdAADdQAADeieCdQidCdjeAAQjeAAididg");
	mask_6.setTransform(54.25,54.475);

	// Layer_3
	this.instance_6 = new lib.ClipGroup_0_4();
	this.instance_6.setTransform(54.5,54.5,1,1,0,0,0,54.5,54.5);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0.6,0.9,107.30000000000001,107.19999999999999), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("Ak5LnQiRg9hvhwQhwhvg9iRQhAiWAAikQAAijBAiVQA9iSBwhvQBvhwCRg8QCWhACjAAQCkAACWBAQCRA8BwBwQBvBvA9CSQBACVAACjQAACkhACWQg9CRhvBvQhwBwiRA9QiWA/ikAAQijAAiWg/g");
	mask_7.setTransform(81.875,81.9);

	// Layer_3
	this.instance_7 = new lib.ClipGroup_0_5();
	this.instance_7.setTransform(81.9,81.9,1,1,0,0,0,81.9,81.9);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(1.2,1.3,161.4,161.2), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(77.5,77.5,1,1,0,0,0,77.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,155.1,155.1), null);


(lib.kisi9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(82.55,82.55,0.3606,0.3606,0,0,0,229,229);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi9, new cjs.Rectangle(0,0,164.9,164.9), null);


(lib.kisi8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(55.5,55.45,1,1,0,0,0,56.4,56.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi8, new cjs.Rectangle(-0.9,-0.9,112.9,112.80000000000001), null);


(lib.kisi6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_5();
	this.instance.setTransform(91.7,184.05,1,1,0,0,0,92.5,184.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi6, new cjs.Rectangle(-0.8,-0.8,184.9,369.8), null);


(lib.kisi5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(159.8,160.9,0.6683,0.6683,0,0,0,290.3,290.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi5, new cjs.Rectangle(-34.2,-33.1,388,388), null);


(lib.kisi4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_8();
	this.instance.setTransform(59.65,59.6,0.7396,0.7396,0,0,0,81.9,81.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi4, new cjs.Rectangle(-0.9,-0.9,121.2,121.10000000000001), null);


(lib.kisi3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(63,63.05,0.3331,0.3331,0,0,0,189.2,189.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi3, new cjs.Rectangle(0,0,125.9,125.9), null);


(lib.kisi2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_7();
	this.instance.setTransform(70,69.65,1.2993,1.2993,0,0,0,54.5,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi2, new cjs.Rectangle(-0.8,-1.1,141.5,141.5), null);


(lib.kisi1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(77.5,77.5,1,1,0,0,0,77.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi1, new cjs.Rectangle(0,0,155.1,155.1), null);


(lib.kisi10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.kisi6();
	this.instance.setTransform(91.7,184.1,1,1,0,0,0,91.7,184.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi10, new cjs.Rectangle(-0.8,-0.8,184.9,369.8), null);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.kisi9();
	this.instance.setTransform(249.7,239.2,0.0443,0.0443,0,0,0,79.1,79.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({regX:82.4,regY:82.4,scaleX:0.0508,scaleY:0.0508,x:249.95,y:239.4},0).wait(1).to({scaleX:0.0575,scaleY:0.0575,x:250.05,y:239.45},0).wait(1).to({scaleX:0.0645,scaleY:0.0645,x:250.15},0).wait(1).to({scaleX:0.0717,scaleY:0.0717,x:250.25,y:239.55},0).wait(1).to({scaleX:0.0791,scaleY:0.0791,x:250.35,y:239.6},0).wait(1).to({scaleX:0.0867,scaleY:0.0867,x:250.5,y:239.65},0).wait(1).to({scaleX:0.0945,scaleY:0.0945,x:250.65,y:239.75},0).wait(1).to({scaleX:0.1025,scaleY:0.1025,x:250.75,y:239.8},0).wait(1).to({scaleX:0.1107,scaleY:0.1107,x:250.85},0).wait(1).to({scaleX:0.1192,scaleY:0.1192,x:251,y:239.9},0).wait(1).to({scaleX:0.1279,scaleY:0.1279,x:251.2,y:240},0).wait(1).to({scaleX:0.1368,scaleY:0.1368,x:251.3,y:240.05},0).wait(1).to({scaleX:0.1459,scaleY:0.1459,x:251.45,y:240.1},0).wait(1).to({scaleX:0.1552,scaleY:0.1552,x:251.6,y:240.2},0).wait(1).to({scaleX:0.1647,scaleY:0.1647,x:251.75,y:240.25},0).wait(1).to({scaleX:0.1744,scaleY:0.1744,x:251.9,y:240.35},0).wait(1).to({scaleX:0.1844,scaleY:0.1844,x:252.1,y:240.45},0).wait(1).to({scaleX:0.1946,scaleY:0.1946,x:252.25,y:240.55},0).wait(1).to({scaleX:0.2049,scaleY:0.2049,x:252.4,y:240.6},0).wait(1).to({scaleX:0.2155,scaleY:0.2155,x:252.55,y:240.65},0).wait(1).to({scaleX:0.2263,scaleY:0.2263,x:252.75,y:240.75},0).wait(1).to({scaleX:0.2374,scaleY:0.2374,x:252.9,y:240.85},0).wait(1).to({scaleX:0.2486,scaleY:0.2486,x:253.1,y:240.95},0).wait(1).to({scaleX:0.2601,scaleY:0.2601,x:253.3,y:241.05},0).wait(1).to({scaleX:0.2717,scaleY:0.2717,x:253.5,y:241.15},0).wait(1).to({scaleX:0.2836,scaleY:0.2836,x:253.65,y:241.2},0).wait(1).to({scaleX:0.2957,scaleY:0.2957,x:253.85,y:241.3},0).wait(1).to({scaleX:0.308,scaleY:0.308,x:254.1,y:241.45},0).wait(1).to({scaleX:0.3206,scaleY:0.3206,x:254.25,y:241.5},0).wait(1).to({scaleX:0.3333,scaleY:0.3333,x:254.45,y:241.6},0).wait(1).to({scaleX:0.3463,scaleY:0.3463,x:254.7,y:241.75},0).wait(1).to({scaleX:0.3594,scaleY:0.3594,x:254.85,y:241.8},0).wait(1).to({scaleX:0.3728,scaleY:0.3728,x:255.1,y:241.9},0).wait(1).to({scaleX:0.3864,scaleY:0.3864,x:255.35,y:242.05},0).wait(1).to({scaleX:0.4002,scaleY:0.4002,x:255.55,y:242.2},0).wait(1).to({scaleX:0.4142,scaleY:0.4142,x:255.8,y:242.3},0).wait(1).to({scaleX:0.4285,scaleY:0.4285,x:256,y:242.35},0).wait(1).to({scaleX:0.4429,scaleY:0.4429,x:256.25,y:242.5},0).wait(1).to({scaleX:0.4576,scaleY:0.4576,x:256.45,y:242.6},0).wait(1).to({scaleX:0.4725,scaleY:0.4725,x:256.7,y:242.75},0).wait(1).to({scaleX:0.4876,scaleY:0.4876,x:256.9,y:242.8},0).wait(1).to({scaleX:0.5029,scaleY:0.5029,x:257.2,y:243},0).wait(1).to({scaleX:0.5184,scaleY:0.5184,x:257.45,y:243.1},0).wait(1).to({scaleX:0.5341,scaleY:0.5341,x:257.7,y:243.2},0).wait(1).to({scaleX:0.5501,scaleY:0.5501,x:258,y:243.35},0).wait(1).to({scaleX:0.5662,scaleY:0.5662,x:258.2,y:243.45},0).wait(1).to({scaleX:0.5826,scaleY:0.5826,x:258.45,y:243.6},0).wait(1).to({scaleX:0.5966,scaleY:0.5966,x:258.7,y:243.7},0).wait(13));

	// Layer_1
	this.instance_1 = new lib.kisi3();
	this.instance_1.setTransform(246.2,238.75,0.0339,0.0339,0,0,0,60.6,62);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1).to({regX:62.9,regY:62.9,scaleX:0.0416,scaleY:0.0416,x:245.15,y:239.6},0).wait(1).to({scaleX:0.0495,scaleY:0.0495,x:244.05,y:240.5},0).wait(1).to({scaleX:0.0576,scaleY:0.0576,x:242.95,y:241.45},0).wait(1).to({scaleX:0.066,scaleY:0.066,x:241.75,y:242.4},0).wait(1).to({scaleX:0.0746,scaleY:0.0746,x:240.55,y:243.35},0).wait(1).to({scaleX:0.0834,scaleY:0.0834,x:239.3,y:244.35},0).wait(1).to({scaleX:0.0924,scaleY:0.0924,x:238,y:245.35},0).wait(1).to({scaleX:0.1016,scaleY:0.1016,x:236.75,y:246.4},0).wait(1).to({scaleX:0.111,scaleY:0.111,x:235.4,y:247.5},0).wait(1).to({scaleX:0.1207,scaleY:0.1207,x:234.05,y:248.55},0).wait(1).to({scaleX:0.1305,scaleY:0.1305,x:232.65,y:249.65},0).wait(1).to({scaleX:0.1406,scaleY:0.1406,x:231.25,y:250.8},0).wait(1).to({scaleX:0.1509,scaleY:0.1509,x:229.8,y:251.95},0).wait(1).to({scaleX:0.1614,scaleY:0.1614,x:228.3,y:253.15},0).wait(1).to({scaleX:0.1721,scaleY:0.1721,x:226.85,y:254.4},0).wait(1).to({scaleX:0.183,scaleY:0.183,x:225.25,y:255.6},0).wait(1).to({scaleX:0.1942,scaleY:0.1942,x:223.7,y:256.85},0).wait(1).to({scaleX:0.2055,scaleY:0.2055,x:222.1,y:258.15},0).wait(1).to({scaleX:0.2171,scaleY:0.2171,x:220.45,y:259.45},0).wait(1).to({scaleX:0.2289,scaleY:0.2289,x:218.8,y:260.75},0).wait(1).to({scaleX:0.2409,scaleY:0.2409,x:217.1,y:262.1},0).wait(1).to({scaleX:0.2531,scaleY:0.2531,x:215.4,y:263.5},0).wait(1).to({scaleX:0.2656,scaleY:0.2656,x:213.65,y:264.9},0).wait(1).to({scaleX:0.2782,scaleY:0.2782,x:211.9,y:266.35},0).wait(1).to({scaleX:0.2911,scaleY:0.2911,x:210.05,y:267.8},0).wait(1).to({scaleX:0.3041,scaleY:0.3041,x:208.25,y:269.3},0).wait(1).to({scaleX:0.3174,scaleY:0.3174,x:206.35,y:270.75},0).wait(1).to({scaleX:0.3309,scaleY:0.3309,x:204.45,y:272.25},0).wait(1).to({scaleX:0.3447,scaleY:0.3447,x:202.55,y:273.85},0).wait(1).to({scaleX:0.3586,scaleY:0.3586,x:200.55,y:275.4},0).wait(1).to({scaleX:0.3727,scaleY:0.3727,x:198.6,y:277},0).wait(1).to({scaleX:0.3871,scaleY:0.3871,x:196.55,y:278.65},0).wait(1).to({scaleX:0.4017,scaleY:0.4017,x:194.5,y:280.25},0).wait(1).to({scaleX:0.4165,scaleY:0.4165,x:192.45,y:281.95},0).wait(1).to({scaleX:0.4315,scaleY:0.4315,x:190.35,y:283.65},0).wait(1).to({scaleX:0.4467,scaleY:0.4467,x:188.2,y:285.35},0).wait(1).to({scaleX:0.4621,scaleY:0.4621,x:186,y:287.1},0).wait(1).to({scaleX:0.4778,scaleY:0.4778,x:183.8,y:288.85},0).wait(1).to({scaleX:0.4936,scaleY:0.4936,x:181.55,y:290.65},0).wait(1).to({scaleX:0.5097,scaleY:0.5097,x:179.3,y:292.45},0).wait(1).to({scaleX:0.526,scaleY:0.526,x:177.05,y:294.3},0).wait(1).to({scaleX:0.5425,scaleY:0.5425,x:174.65,y:296.15},0).wait(1).to({scaleX:0.5592,scaleY:0.5592,x:172.3,y:298.05},0).wait(1).to({scaleX:0.5761,scaleY:0.5761,x:169.95,y:299.95},0).wait(1).to({scaleX:0.5933,scaleY:0.5933,x:167.55,y:301.9},0).wait(1).to({scaleX:0.6107,scaleY:0.6107,x:165.1,y:303.85},0).wait(1).to({scaleX:0.6282,scaleY:0.6282,x:162.6,y:305.85},0).wait(1).to({scaleX:0.646,scaleY:0.646,x:160.15,y:307.85},0).wait(1).to({scaleX:0.664,scaleY:0.664,x:157.6,y:309.85},0).wait(1).to({scaleX:0.6823,scaleY:0.6823,x:155,y:311.95},0).wait(1).to({scaleX:0.7007,scaleY:0.7007,x:152.4,y:314},0).wait(1).to({scaleX:0.7193,scaleY:0.7193,x:149.8,y:316.15},0).wait(1).to({scaleX:0.7382,scaleY:0.7382,x:147.2,y:318.25},0).wait(1).to({scaleX:0.7573,scaleY:0.7573,x:144.5,y:320.45},0).wait(1).to({scaleX:0.7644,scaleY:0.7644,x:143.5,y:321.25},0).wait(17));

	// Layer_1
	this.instance_2 = new lib.kisi5();
	this.instance_2.setTransform(247.15,234.55,0.041,0.041,0,0,0,99.9,97.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(1).to({regX:93.6,regY:93.6,scaleX:0.0461,scaleY:0.0461,x:246.55,y:233.25},0).wait(1).to({scaleX:0.0514,scaleY:0.0514,x:246.3,y:232.15},0).wait(1).to({scaleX:0.0568,scaleY:0.0568,x:246,y:231},0).wait(1).to({scaleX:0.0623,scaleY:0.0623,x:245.75,y:229.85},0).wait(1).to({scaleX:0.068,scaleY:0.068,x:245.4,y:228.6},0).wait(1).to({scaleX:0.0739,scaleY:0.0739,x:245.1,y:227.35},0).wait(1).to({scaleX:0.0799,scaleY:0.0799,x:244.75,y:226.1},0).wait(1).to({scaleX:0.086,scaleY:0.086,x:244.45,y:224.8},0).wait(1).to({scaleX:0.0923,scaleY:0.0923,x:244.1,y:223.45},0).wait(1).to({scaleX:0.0987,scaleY:0.0987,x:243.75,y:222.1},0).wait(1).to({scaleX:0.1053,scaleY:0.1053,x:243.4,y:220.7},0).wait(1).to({scaleX:0.112,scaleY:0.112,x:243.05,y:219.25},0).wait(1).to({scaleX:0.1189,scaleY:0.1189,x:242.7,y:217.8},0).wait(1).to({scaleX:0.1259,scaleY:0.1259,x:242.3,y:216.3},0).wait(1).to({scaleX:0.1331,scaleY:0.1331,x:241.9,y:214.75},0).wait(1).to({scaleX:0.1404,scaleY:0.1404,x:241.5,y:213.2},0).wait(1).to({scaleX:0.1479,scaleY:0.1479,x:241.1,y:211.65},0).wait(1).to({scaleX:0.1555,scaleY:0.1555,x:240.7,y:210},0).wait(1).to({scaleX:0.1633,scaleY:0.1633,x:240.3,y:208.35},0).wait(1).to({scaleX:0.1712,scaleY:0.1712,x:239.85,y:206.65},0).wait(1).to({scaleX:0.1793,scaleY:0.1793,x:239.45,y:205},0).wait(1).to({scaleX:0.1875,scaleY:0.1875,x:239,y:203.2},0).wait(1).to({scaleX:0.1958,scaleY:0.1958,x:238.55,y:201.45},0).wait(1).to({scaleX:0.2043,scaleY:0.2043,x:238.1,y:199.65},0).wait(1).to({scaleX:0.213,scaleY:0.213,x:237.6,y:197.8},0).wait(1).to({scaleX:0.2218,scaleY:0.2218,x:237.1,y:195.9},0).wait(1).to({scaleX:0.2307,scaleY:0.2307,x:236.65,y:194},0).wait(1).to({scaleX:0.2398,scaleY:0.2398,x:236.15,y:192.05},0).wait(1).to({scaleX:0.2491,scaleY:0.2491,x:235.65,y:190.1},0).wait(1).to({scaleX:0.2585,scaleY:0.2585,x:235.15,y:188.1},0).wait(1).to({scaleX:0.268,scaleY:0.268,x:234.65,y:186.1},0).wait(1).to({scaleX:0.2777,scaleY:0.2777,x:234.15,y:184},0).wait(1).to({scaleX:0.2875,scaleY:0.2875,x:233.6,y:181.9},0).wait(1).to({scaleX:0.2975,scaleY:0.2975,x:233.05,y:179.8},0).wait(1).to({scaleX:0.3077,scaleY:0.3077,x:232.5,y:177.65},0).wait(1).to({scaleX:0.3179,scaleY:0.3179,x:231.95,y:175.45},0).wait(1).to({scaleX:0.3284,scaleY:0.3284,x:231.4,y:173.25},0).wait(1).to({scaleX:0.339,scaleY:0.339,x:230.85,y:171},0).wait(1).to({scaleX:0.3497,scaleY:0.3497,x:230.25,y:168.7},0).wait(1).to({scaleX:0.3605,scaleY:0.3605,x:229.65,y:166.4},0).wait(1).to({scaleX:0.3716,scaleY:0.3716,x:229.1,y:164.05},0).wait(1).to({scaleX:0.3827,scaleY:0.3827,x:228.45,y:161.65},0).wait(1).to({scaleX:0.3941,scaleY:0.3941,x:227.9,y:159.3},0).wait(1).to({scaleX:0.4055,scaleY:0.4055,x:227.25,y:156.8},0).wait(1).to({scaleX:0.4171,scaleY:0.4171,x:226.6,y:154.35},0).wait(1).to({scaleX:0.4289,scaleY:0.4289,x:226,y:151.85},0).wait(1).to({scaleX:0.4408,scaleY:0.4408,x:225.35,y:149.3},0).wait(1).to({scaleX:0.4529,scaleY:0.4529,x:224.7,y:146.75},0).wait(1).to({scaleX:0.4651,scaleY:0.4651,x:224.05,y:144.15},0).wait(1).to({scaleX:0.4736,scaleY:0.4736,x:223.6,y:142.35},0).wait(19));

	// Layer_1
	this.instance_3 = new lib.kisi10();
	this.instance_3.setTransform(249.2,240.3,0.041,0.041,0,0,0,78,87.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regX:90.8,regY:90.8,scaleX:0.0475,scaleY:0.0475,x:251.4,y:240.6},0).wait(1).to({scaleX:0.0541,scaleY:0.0541,x:253.1,y:240.8},0).wait(1).to({scaleX:0.0609,scaleY:0.0609,x:254.9,y:241.05},0).wait(1).to({scaleX:0.0678,scaleY:0.0678,x:256.7,y:241.25},0).wait(1).to({scaleX:0.075,scaleY:0.075,x:258.6,y:241.45},0).wait(1).to({scaleX:0.0823,scaleY:0.0823,x:260.5,y:241.7},0).wait(1).to({scaleX:0.0897,scaleY:0.0897,x:262.45,y:241.95},0).wait(1).to({scaleX:0.0974,scaleY:0.0974,x:264.5,y:242.2},0).wait(1).to({scaleX:0.1052,scaleY:0.1052,x:266.55,y:242.4},0).wait(1).to({scaleX:0.1132,scaleY:0.1132,x:268.65,y:242.7},0).wait(1).to({scaleX:0.1214,scaleY:0.1214,x:270.75,y:242.9},0).wait(1).to({scaleX:0.1298,scaleY:0.1298,x:273,y:243.2},0).wait(1).to({scaleX:0.1383,scaleY:0.1383,x:275.2,y:243.45},0).wait(1).to({scaleX:0.147,scaleY:0.147,x:277.5,y:243.75},0).wait(1).to({scaleX:0.1559,scaleY:0.1559,x:279.8,y:244},0).wait(1).to({scaleX:0.1649,scaleY:0.1649,x:282.15,y:244.25},0).wait(1).to({scaleX:0.1741,scaleY:0.1741,x:284.6,y:244.55},0).wait(1).to({scaleX:0.1835,scaleY:0.1835,x:287.05,y:244.85},0).wait(1).to({scaleX:0.1931,scaleY:0.1931,x:289.6,y:245.2},0).wait(1).to({scaleX:0.2028,scaleY:0.2028,x:292.1,y:245.45},0).wait(1).to({scaleX:0.2128,scaleY:0.2128,x:294.7,y:245.75},0).wait(1).to({scaleX:0.2228,scaleY:0.2228,x:297.4,y:246.1},0).wait(1).to({scaleX:0.2331,scaleY:0.2331,x:300.05,y:246.4},0).wait(1).to({scaleX:0.2436,scaleY:0.2436,x:302.8,y:246.75},0).wait(1).to({scaleX:0.2542,scaleY:0.2542,x:305.6,y:247.1},0).wait(1).to({scaleX:0.265,scaleY:0.265,x:308.4,y:247.4},0).wait(1).to({scaleX:0.2759,scaleY:0.2759,x:311.3,y:247.75},0).wait(1).to({scaleX:0.287,scaleY:0.287,x:314.2,y:248.1},0).wait(1).to({scaleX:0.2984,scaleY:0.2984,x:317.2,y:248.5},0).wait(1).to({scaleX:0.3098,scaleY:0.3098,x:320.2,y:248.85},0).wait(1).to({scaleX:0.3215,scaleY:0.3215,x:323.25,y:249.2},0).wait(1).to({scaleX:0.3333,scaleY:0.3333,x:326.35,y:249.55},0).wait(1).to({scaleX:0.3453,scaleY:0.3453,x:329.5,y:249.95},0).wait(1).to({scaleX:0.3575,scaleY:0.3575,x:332.7,y:250.3},0).wait(1).to({scaleX:0.3699,scaleY:0.3699,x:335.95,y:250.75},0).wait(1).to({scaleX:0.3824,scaleY:0.3824,x:339.2,y:251.1},0).wait(1).to({scaleX:0.3951,scaleY:0.3951,x:342.5,y:251.5},0).wait(1).to({scaleX:0.408,scaleY:0.408,x:345.95,y:251.9},0).wait(1).to({scaleX:0.421,scaleY:0.421,x:349.35,y:252.35},0).wait(1).to({scaleX:0.4342,scaleY:0.4342,x:352.85,y:252.75},0).wait(1).to({scaleX:0.4476,scaleY:0.4476,x:356.3,y:253.15},0).wait(1).to({scaleX:0.4612,scaleY:0.4612,x:359.9,y:253.6},0).wait(1).to({scaleX:0.475,scaleY:0.475,x:363.5,y:254.05},0).wait(1).to({scaleX:0.4889,scaleY:0.4889,x:367.15,y:254.45},0).wait(1).to({scaleX:0.503,scaleY:0.503,x:370.8,y:254.9},0).wait(1).to({scaleX:0.5172,scaleY:0.5172,x:374.55,y:255.35},0).wait(1).to({scaleX:0.5317,scaleY:0.5317,x:378.4,y:255.8},0).wait(1).to({scaleX:0.5463,scaleY:0.5463,x:382.2,y:256.25},0).wait(1).to({scaleX:0.5611,scaleY:0.5611,x:386.05,y:256.75},0).wait(1).to({scaleX:0.576,scaleY:0.576,x:390,y:257.2},0).wait(1).to({scaleX:0.5912,scaleY:0.5912,x:394,y:257.7},0).wait(1).to({scaleX:0.6065,scaleY:0.6065,x:397.95,y:258.15},0).wait(1).to({scaleX:0.622,scaleY:0.622,x:402,y:258.6},0).wait(1).to({scaleX:0.6253,scaleY:0.6253,x:402.95,y:258.75},0).wait(20));

	// Layer_1
	this.instance_4 = new lib.kisi8();
	this.instance_4.setTransform(251.75,236.85,0.0326,0.0326,0,0,0,53.7,53.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(1).to({regX:55.6,regY:55.5,scaleX:0.0414,scaleY:0.0414,x:252.45,y:238},0).wait(1).to({scaleX:0.0505,scaleY:0.0505,x:253.1,y:239.1},0).wait(1).to({scaleX:0.0599,scaleY:0.0599,x:253.85,y:240.25},0).wait(1).to({scaleX:0.0694,scaleY:0.0694,x:254.5,y:241.45},0).wait(1).to({scaleX:0.0793,scaleY:0.0793,x:255.25,y:242.7},0).wait(1).to({scaleX:0.0894,scaleY:0.0894,x:255.95,y:243.95},0).wait(1).to({scaleX:0.0997,scaleY:0.0997,x:256.75,y:245.25},0).wait(1).to({scaleX:0.1103,scaleY:0.1103,x:257.55,y:246.5},0).wait(1).to({scaleX:0.1212,scaleY:0.1212,x:258.35,y:247.85},0).wait(1).to({scaleX:0.1323,scaleY:0.1323,x:259.15,y:249.3},0).wait(1).to({scaleX:0.1436,scaleY:0.1436,x:260.05,y:250.65},0).wait(1).to({scaleX:0.1552,scaleY:0.1552,x:260.9,y:252.1},0).wait(1).to({scaleX:0.1671,scaleY:0.1671,x:261.75,y:253.6},0).wait(1).to({scaleX:0.1792,scaleY:0.1792,x:262.65,y:255.1},0).wait(1).to({scaleX:0.1916,scaleY:0.1916,x:263.55,y:256.65},0).wait(1).to({scaleX:0.2042,scaleY:0.2042,x:264.5,y:258.25},0).wait(1).to({scaleX:0.2171,scaleY:0.2171,x:265.45,y:259.8},0).wait(1).to({scaleX:0.2302,scaleY:0.2302,x:266.45,y:261.4},0).wait(1).to({scaleX:0.2436,scaleY:0.2436,x:267.45,y:263.1},0).wait(1).to({scaleX:0.2572,scaleY:0.2572,x:268.45,y:264.75},0).wait(1).to({scaleX:0.2711,scaleY:0.2711,x:269.45,y:266.55},0).wait(1).to({scaleX:0.2852,scaleY:0.2852,x:270.5,y:268.3},0).wait(1).to({scaleX:0.2996,scaleY:0.2996,x:271.55,y:270.1},0).wait(1).to({scaleX:0.3142,scaleY:0.3142,x:272.65,y:271.9},0).wait(1).to({scaleX:0.3291,scaleY:0.3291,x:273.75,y:273.7},0).wait(1).to({scaleX:0.3442,scaleY:0.3442,x:274.9,y:275.6},0).wait(1).to({scaleX:0.3596,scaleY:0.3596,x:276,y:277.5},0).wait(1).to({scaleX:0.3753,scaleY:0.3753,x:277.15,y:279.5},0).wait(1).to({scaleX:0.3912,scaleY:0.3912,x:278.35,y:281.45},0).wait(1).to({scaleX:0.4073,scaleY:0.4073,x:279.55,y:283.45},0).wait(1).to({scaleX:0.4237,scaleY:0.4237,x:280.75,y:285.5},0).wait(1).to({scaleX:0.4404,scaleY:0.4404,x:282,y:287.6},0).wait(1).to({scaleX:0.4573,scaleY:0.4573,x:283.3,y:289.7},0).wait(1).to({scaleX:0.4745,scaleY:0.4745,x:284.55,y:291.8},0).wait(1).to({scaleX:0.4919,scaleY:0.4919,x:285.8,y:293.95},0).wait(1).to({scaleX:0.5095,scaleY:0.5095,x:287.15,y:296.2},0).wait(1).to({scaleX:0.5275,scaleY:0.5275,x:288.5,y:298.35},0).wait(1).to({scaleX:0.5456,scaleY:0.5456,x:289.8,y:300.65},0).wait(1).to({scaleX:0.564,scaleY:0.564,x:291.15,y:302.95},0).wait(1).to({scaleX:0.5827,scaleY:0.5827,x:292.55,y:305.25},0).wait(1).to({scaleX:0.6016,scaleY:0.6016,x:293.95,y:307.6},0).wait(1).to({scaleX:0.6208,scaleY:0.6208,x:295.35,y:310},0).wait(1).to({scaleX:0.6402,scaleY:0.6402,x:296.8,y:312.4},0).wait(1).to({scaleX:0.6599,scaleY:0.6599,x:298.3,y:314.9},0).wait(1).to({scaleX:0.6799,scaleY:0.6799,x:299.75,y:317.35},0).wait(1).to({scaleX:0.7001,scaleY:0.7001,x:301.2,y:319.85},0).wait(1).to({scaleX:0.7205,scaleY:0.7205,x:302.75,y:322.4},0).wait(1).to({scaleX:0.7412,scaleY:0.7412,x:304.3,y:324.95},0).wait(1).to({scaleX:0.7621,scaleY:0.7621,x:305.8,y:327.55},0).wait(1).to({scaleX:0.7833,scaleY:0.7833,x:307.4,y:330.15},0).wait(1).to({scaleX:0.8048,scaleY:0.8048,x:309,y:332.85},0).wait(1).to({scaleX:0.8265,scaleY:0.8265,x:310.6,y:335.55},0).wait(1).to({scaleX:0.8484,scaleY:0.8484,x:312.2,y:338.3},0).wait(1).to({scaleX:0.8684,scaleY:0.8684,x:313.75,y:340.75},0).wait(16));

	// Layer_1
	this.instance_5 = new lib.kisi2();
	this.instance_5.setTransform(244.8,234.75,0.0404,0.0404,0,0,0,70.5,70.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).wait(1).to({regX:69.7,regY:69.6,scaleX:0.0467,scaleY:0.0467,x:244.5,y:236.55},0).wait(1).to({scaleX:0.0532,scaleY:0.0532,x:244.3,y:238.5},0).wait(1).to({scaleX:0.0599,scaleY:0.0599,x:244.05,y:240.5},0).wait(1).to({scaleX:0.0667,scaleY:0.0667,x:243.8,y:242.55},0).wait(1).to({scaleX:0.0737,scaleY:0.0737,x:243.55,y:244.65},0).wait(1).to({scaleX:0.081,scaleY:0.081,x:243.3,y:246.85},0).wait(1).to({scaleX:0.0884,scaleY:0.0884,x:243,y:249.05},0).wait(1).to({scaleX:0.096,scaleY:0.096,x:242.75,y:251.35},0).wait(1).to({scaleX:0.1038,scaleY:0.1038,x:242.5,y:253.65},0).wait(1).to({scaleX:0.1118,scaleY:0.1118,x:242.2,y:256.05},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:241.9,y:258.5},0).wait(1).to({scaleX:0.1283,scaleY:0.1283,x:241.6,y:261},0).wait(1).to({scaleX:0.1369,scaleY:0.1369,x:241.3,y:263.6},0).wait(1).to({scaleX:0.1456,scaleY:0.1456,x:241,y:266.2},0).wait(1).to({scaleX:0.1546,scaleY:0.1546,x:240.65,y:268.85},0).wait(1).to({scaleX:0.1637,scaleY:0.1637,x:240.3,y:271.6},0).wait(1).to({scaleX:0.1731,scaleY:0.1731,x:240,y:274.4},0).wait(1).to({scaleX:0.1826,scaleY:0.1826,x:239.65,y:277.2},0).wait(1).to({scaleX:0.1923,scaleY:0.1923,x:239.3,y:280.15},0).wait(1).to({scaleX:0.2021,scaleY:0.2021,x:238.95,y:283.05},0).wait(1).to({scaleX:0.2122,scaleY:0.2122,x:238.6,y:286.1},0).wait(1).to({scaleX:0.2225,scaleY:0.2225,x:238.2,y:289.2},0).wait(1).to({scaleX:0.233,scaleY:0.233,x:237.85,y:292.3},0).wait(1).to({scaleX:0.2436,scaleY:0.2436,x:237.5,y:295.5},0).wait(1).to({scaleX:0.2545,scaleY:0.2545,x:237.1,y:298.75},0).wait(1).to({scaleX:0.2655,scaleY:0.2655,x:236.7,y:302.1},0).wait(1).to({scaleX:0.2767,scaleY:0.2767,x:236.3,y:305.4},0).wait(1).to({scaleX:0.2881,scaleY:0.2881,x:235.9,y:308.85},0).wait(1).to({scaleX:0.2998,scaleY:0.2998,x:235.45,y:312.3},0).wait(1).to({scaleX:0.3116,scaleY:0.3116,x:235.05,y:315.85},0).wait(1).to({scaleX:0.3235,scaleY:0.3235,x:234.6,y:319.4},0).wait(1).to({scaleX:0.3357,scaleY:0.3357,x:234.2,y:323.05},0).wait(1).to({scaleX:0.3481,scaleY:0.3481,x:233.75,y:326.8},0).wait(1).to({scaleX:0.3606,scaleY:0.3606,x:233.3,y:330.55},0).wait(1).to({scaleX:0.3734,scaleY:0.3734,x:232.8,y:334.35},0).wait(1).to({scaleX:0.3863,scaleY:0.3863,x:232.4,y:338.25},0).wait(1).to({scaleX:0.3994,scaleY:0.3994,x:231.9,y:342.15},0).wait(1).to({scaleX:0.4128,scaleY:0.4128,x:231.4,y:346.15},0).wait(1).to({scaleX:0.4263,scaleY:0.4263,x:230.95,y:350.15},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:230.45,y:354.25},0).wait(1).to({scaleX:0.4538,scaleY:0.4538,x:229.95,y:358.45},0).wait(1).to({scaleX:0.4679,scaleY:0.4679,x:229.45,y:362.65},0).wait(1).to({scaleX:0.4822,scaleY:0.4822,x:228.95,y:366.9},0).wait(1).to({scaleX:0.4967,scaleY:0.4967,x:228.4,y:371.25},0).wait(1).to({scaleX:0.5104,scaleY:0.5104,x:227.9,y:375.35},0).wait(21));

	// Layer_1
	this.instance_6 = new lib.kisi1();
	this.instance_6.setTransform(250.15,239.15,0.0254,0.0254,0,0,0,74.9,74.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).wait(1).to({regX:77.5,regY:77.5,scaleX:0.0349,scaleY:0.0349,x:251.3,y:237.95},0).wait(1).to({scaleX:0.0448,scaleY:0.0448,x:252.45,y:236.7},0).wait(1).to({scaleX:0.055,scaleY:0.055,x:253.7,y:235.4},0).wait(1).to({scaleX:0.0654,scaleY:0.0654,x:254.9,y:234.05},0).wait(1).to({scaleX:0.0762,scaleY:0.0762,x:256.2,y:232.7},0).wait(1).to({scaleX:0.0873,scaleY:0.0873,x:257.5,y:231.3},0).wait(1).to({scaleX:0.0986,scaleY:0.0986,x:258.85,y:229.85},0).wait(1).to({scaleX:0.1103,scaleY:0.1103,x:260.25,y:228.35},0).wait(1).to({scaleX:0.1223,scaleY:0.1223,x:261.7,y:226.85},0).wait(1).to({scaleX:0.1346,scaleY:0.1346,x:263.15,y:225.3},0).wait(1).to({scaleX:0.1472,scaleY:0.1472,x:264.6,y:223.65},0).wait(1).to({scaleX:0.1601,scaleY:0.1601,x:266.1,y:222.05},0).wait(1).to({scaleX:0.1733,scaleY:0.1733,x:267.7,y:220.4},0).wait(1).to({scaleX:0.1868,scaleY:0.1868,x:269.25,y:218.6},0).wait(1).to({scaleX:0.2006,scaleY:0.2006,x:270.9,y:216.9},0).wait(1).to({scaleX:0.2147,scaleY:0.2147,x:272.6,y:215.1},0).wait(1).to({scaleX:0.2291,scaleY:0.2291,x:274.3,y:213.25},0).wait(1).to({scaleX:0.2438,scaleY:0.2438,x:276.05,y:211.4},0).wait(1).to({scaleX:0.2588,scaleY:0.2588,x:277.8,y:209.45},0).wait(1).to({scaleX:0.2741,scaleY:0.2741,x:279.65,y:207.5},0).wait(1).to({scaleX:0.2897,scaleY:0.2897,x:281.45,y:205.5},0).wait(1).to({scaleX:0.3057,scaleY:0.3057,x:283.35,y:203.5},0).wait(1).to({scaleX:0.3219,scaleY:0.3219,x:285.3,y:201.4},0).wait(1).to({scaleX:0.3384,scaleY:0.3384,x:287.25,y:199.35},0).wait(1).to({scaleX:0.3553,scaleY:0.3553,x:289.25,y:197.2},0).wait(1).to({scaleX:0.3724,scaleY:0.3724,x:291.25,y:194.95},0).wait(1).to({scaleX:0.3899,scaleY:0.3899,x:293.3,y:192.75},0).wait(1).to({scaleX:0.4076,scaleY:0.4076,x:295.45,y:190.5},0).wait(1).to({scaleX:0.4257,scaleY:0.4257,x:297.55,y:188.2},0).wait(1).to({scaleX:0.444,scaleY:0.444,x:299.7,y:185.85},0).wait(1).to({scaleX:0.4627,scaleY:0.4627,x:301.9,y:183.5},0).wait(1).to({scaleX:0.4816,scaleY:0.4816,x:304.2,y:181.1},0).wait(1).to({scaleX:0.5009,scaleY:0.5009,x:306.45,y:178.6},0).wait(1).to({scaleX:0.5204,scaleY:0.5204,x:308.8,y:176.15},0).wait(1).to({scaleX:0.5403,scaleY:0.5403,x:311.1,y:173.55},0).wait(1).to({scaleX:0.5605,scaleY:0.5605,x:313.5,y:171.05},0).wait(1).to({scaleX:0.581,scaleY:0.581,x:315.9,y:168.4},0).wait(1).to({scaleX:0.6017,scaleY:0.6017,x:318.4,y:165.8},0).wait(1).to({scaleX:0.6228,scaleY:0.6228,x:320.85,y:163.05},0).wait(1).to({scaleX:0.6442,scaleY:0.6442,x:323.45,y:160.4},0).wait(1).to({scaleX:0.6659,scaleY:0.6659,x:325.95,y:157.6},0).wait(1).to({scaleX:0.6879,scaleY:0.6879,x:328.55,y:154.8},0).wait(1).to({scaleX:0.7102,scaleY:0.7102,x:331.25,y:151.95},0).wait(1).to({scaleX:0.7213,scaleY:0.7213,x:332.55,y:150.55},0).wait(19));

	// Layer_1
	this.instance_7 = new lib.kisi4();
	this.instance_7.setTransform(247.95,238.2,0.041,0.041,0,0,0,61,58.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).wait(1).to({regX:59.7,regY:59.6,scaleX:0.0548,scaleY:0.0548,x:246.1,y:237.85},0).wait(1).to({scaleX:0.069,scaleY:0.069,x:244.3,y:237.45},0).wait(1).to({scaleX:0.0835,scaleY:0.0835,x:242.45,y:237.1},0).wait(1).to({scaleX:0.0985,scaleY:0.0985,x:240.6,y:236.65},0).wait(1).to({scaleX:0.1137,scaleY:0.1137,x:238.6,y:236.3},0).wait(1).to({scaleX:0.1294,scaleY:0.1294,x:236.65,y:235.85},0).wait(1).to({scaleX:0.1455,scaleY:0.1455,x:234.55,y:235.4},0).wait(1).to({scaleX:0.1619,scaleY:0.1619,x:232.45,y:235},0).wait(1).to({scaleX:0.1787,scaleY:0.1787,x:230.3,y:234.5},0).wait(1).to({scaleX:0.1959,scaleY:0.1959,x:228.15,y:234.1},0).wait(1).to({scaleX:0.2135,scaleY:0.2135,x:225.9,y:233.55},0).wait(1).to({scaleX:0.2314,scaleY:0.2314,x:223.6,y:233.1},0).wait(1).to({scaleX:0.2498,scaleY:0.2498,x:221.25,y:232.65},0).wait(1).to({scaleX:0.2685,scaleY:0.2685,x:218.9,y:232.1},0).wait(1).to({scaleX:0.2875,scaleY:0.2875,x:216.45,y:231.6},0).wait(1).to({scaleX:0.307,scaleY:0.307,x:214,y:231.1},0).wait(1).to({scaleX:0.3268,scaleY:0.3268,x:211.45,y:230.6},0).wait(1).to({scaleX:0.3471,scaleY:0.3471,x:208.85,y:230.05},0).wait(1).to({scaleX:0.3676,scaleY:0.3676,x:206.25,y:229.45},0).wait(1).to({scaleX:0.3886,scaleY:0.3886,x:203.55,y:228.9},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:200.85,y:228.35},0).wait(1).to({scaleX:0.4317,scaleY:0.4317,x:198.05,y:227.75},0).wait(1).to({scaleX:0.4538,scaleY:0.4538,x:195.3,y:227.15},0).wait(1).to({scaleX:0.4763,scaleY:0.4763,x:192.4,y:226.55},0).wait(1).to({scaleX:0.4991,scaleY:0.4991,x:189.5,y:225.95},0).wait(1).to({scaleX:0.5224,scaleY:0.5224,x:186.55,y:225.35},0).wait(1).to({scaleX:0.546,scaleY:0.546,x:183.5,y:224.7},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:180.5,y:224},0).wait(1).to({scaleX:0.5943,scaleY:0.5943,x:177.35,y:223.35},0).wait(1).to({scaleX:0.6191,scaleY:0.6191,x:174.2,y:222.7},0).wait(1).to({scaleX:0.6442,scaleY:0.6442,x:171,y:222.05},0).wait(1).to({scaleX:0.6697,scaleY:0.6697,x:167.75,y:221.35},0).wait(1).to({scaleX:0.6956,scaleY:0.6956,x:164.45,y:220.65},0).wait(1).to({scaleX:0.7218,scaleY:0.7218,x:161.1,y:219.95},0).wait(1).to({scaleX:0.7485,scaleY:0.7485,x:157.7,y:219.25},0).wait(1).to({scaleX:0.7755,scaleY:0.7755,x:154.25,y:218.5},0).wait(1).to({scaleX:0.8029,scaleY:0.8029,x:150.8,y:217.8},0).wait(1).to({scaleX:0.8307,scaleY:0.8307,x:147.25,y:217.05},0).wait(1).to({scaleX:0.8588,scaleY:0.8588,x:143.6,y:216.3},0).wait(1).to({scaleX:0.8873,scaleY:0.8873,x:140,y:215.55},0).wait(1).to({scaleX:0.9162,scaleY:0.9162,x:136.35,y:214.75},0).wait(1).to({scaleX:0.9455,scaleY:0.9455,x:132.6,y:213.95},0).wait(1).to({scaleX:0.9752,scaleY:0.9752,x:128.8,y:213.15},0).wait(1).to({scaleX:1.0052,scaleY:1.0052,x:124.95,y:212.35},0).wait(1).to({scaleX:1.0203,scaleY:1.0203,x:123.05,y:211.95},0).wait(28));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,459.6,410.9);
// library properties:
lib.properties = {
	id: '9C8C372532E14B36A74561EA2785E00C',
	width: 500,
	height: 500,
	fps: 24,
	color: "#666666",
	opacity: 0.00,
	manifest: [
		{src:"images/anime4_atlas_1.png", id:"anime4_atlas_1"},
		{src:"images/anime4_atlas_2.png", id:"anime4_atlas_2"},
		{src:"images/anime4_atlas_3.png", id:"anime4_atlas_3"},
		{src:"images/anime4_atlas_4.png", id:"anime4_atlas_4"},
		{src:"images/anime4_atlas_5.png", id:"anime4_atlas_5"},
		{src:"images/anime4_atlas_6.png", id:"anime4_atlas_6"},
		{src:"images/anime4_atlas_7.png", id:"anime4_atlas_7"},
		{src:"images/anime4_atlas_8.png", id:"anime4_atlas_8"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9C8C372532E14B36A74561EA2785E00C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;