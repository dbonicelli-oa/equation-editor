eqEd.RightFloorBottomBracket = function(symbolSizeConfig) {
    eqEd.BottomBracket.call(this, symbolSizeConfig); // call super constructor.
    this.className = "eqEd.RightFloorBottomBracket";
    
    this.character = "&#9126;";
    this.fontStyle = "MathJax_Size4";
    this.domObj = this.buildDomObj();
    this.adjustLeft = 0.001;
    this.adjustTop = 0;

    // Set up the top calculation
    var top = 0;
    this.properties.push(new Property(this, "top", top, {
        get: function() {
            return top;
        },
        set: function(value) {
            top = value;
        },
        compute: function() {
            var fontHeight = this.symbolSizeConfig.height[this.parent.parent.fontSize];
            var topVal = this.parent.middleBrackets[this.parent.middleBrackets.length - 1].top - 0.65 * fontHeight;
            return topVal;
        },
        updateDom: function() {
            this.domObj.updateTop(this.top);
        }
    }));
};
(function() {
    // subclass extends superclass
    eqEd.RightFloorBottomBracket.prototype = Object.create(eqEd.BottomBracket.prototype);
    eqEd.RightFloorBottomBracket.prototype.constructor = eqEd.RightFloorBottomBracket;
})();