eqEd.MboxWrapper = function(functionCharacters, fontStyle, symbolSizeConfig) {
	eqEd.Wrapper.call(this, symbolSizeConfig); // call super constructor.
	this.className = "eqEd.MboxWrapper";

  this.word = new eqEd.MboxWord(functionCharacters, fontStyle, symbolSizeConfig);
	this.word.parent = this;
	this.domObj = this.buildDomObj();
	this.domObj.append(this.word.domObj);
	this.childNoncontainers = [this.word];

    this.padLeft = 0.1;

    // Set up the padRight calculation
    var padRight = 0;
    this.properties.push(new Property(this, "padRight", padRight, {
        get: function() {
            return padRight;
        },
        set: function(value) {
            padRight = value;
        },
        compute: function() {
            var padRightVal = 0.175;
            if (this.index !== this.parent.wrappers.length - 1) {
                if (this.parent.wrappers[this.index + 1] instanceof eqEd.SuperscriptWrapper
                    || this.parent.wrappers[this.index + 1] instanceof eqEd.SubscriptWrapper) {
                    padRightVal = 0;
                } else if (this.parent.wrappers[this.index + 1] instanceof eqEd.BracketWrapper
                    || this.parent.wrappers[this.index + 1] instanceof eqEd.BracketPairWrapper) {
                    padRightVal = 0.05;
                }
            }
            return padRightVal;
        },
        updateDom: function() {}
    }));

	// Set up the width calculation
    var width = 0;
    this.properties.push(new Property(this, "width", width, {
        get: function() {
            return width;
        },
        set: function(value) {
            width = value;
        },
        compute: function() {
            return this.word.width;
        },
        updateDom: function() {
            this.domObj.updateWidth(this.width);
        }
    }));

    // Set up the topAlign calculation
    var topAlign = 0;
    this.properties.push(new Property(this, "topAlign", topAlign, {
        get: function() {
            return topAlign;
        },
        set: function(value) {
            topAlign = value;
        },
        compute: function() {
            return 0.5 * this.word.height;
        },
        updateDom: function() {}
    }));

    // Set up the bottomAlign calculation
    var bottomAlign = 0;
    this.properties.push(new Property(this, "bottomAlign", bottomAlign, {
        get: function() {
            return bottomAlign;
        },
        set: function(value) {
            bottomAlign = value;
        },
        compute: function() {
            return 0.5 * this.word.height;
        },
        updateDom: function() {}
    }));
};
(function() {
    // subclass extends superclass
    eqEd.MboxWrapper.prototype = Object.create(eqEd.Wrapper.prototype);
    eqEd.MboxWrapper.prototype.constructor = eqEd.MboxWrapper;
    eqEd.MboxWrapper.prototype.clone = function() {
    	return new this.constructor(this.word.characters.join(""), this.word.fontStyle, this.symbolSizeConfig);
    };
    eqEd.MboxWrapper.prototype.buildDomObj = function() {
        return new eqEd.WrapperDom(this,
            '<div class="eqEdWrapper symbolWrapper"></div>')
    };
    eqEd.MboxWrapper.prototype.buildJsonObj = function() {
        var jsonObj = {
            type: this.className.substring(5, this.className.length - 7),
            value: this.word.characters.join(""),
            operands: null
        };
        return jsonObj;
    };
    eqEd.MboxWrapper.constructFromJsonObj = function(jsonObj, symbolSizeConfig) {
      var MboxWrapper = new eqEd.MboxWrapper(jsonObj.value, "MathJax_Main", symbolSizeConfig);
      return MboxWrapper;
    }
})();
