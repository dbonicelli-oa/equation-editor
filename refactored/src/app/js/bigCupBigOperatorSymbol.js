eqEd.BigCupBigOperatorSymbol = function(symbolSizeConfig) {
    eqEd.BigOperatorSymbol.call(this, symbolSizeConfig); // call super constructor.
    this.className = "eqEd.BigCupBigOperatorSymbol";

    this.domObj = this.buildDomObj();

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
            var fontHeight = this.symbolSizeConfig.height[this.parent.parent.fontSize];
            return 0.71476115809 * this.height;
        },
        updateDom: function() {
            this.domObj.updateWidth(this.width);
        }
    }));

    // Set up the height calculation
    var height = 0;
    this.properties.push(new Property(this, "height", height, {
        get: function() {
            return height;
        },
        set: function(value) {
            height = value;
        },
        compute: function() {
            var fontHeight = this.symbolSizeConfig.height[this.parent.parent.fontSize];
            return 1.2 * fontHeight;
        },
        updateDom: function() {
            this.domObj.updateHeight(this.height);
        }
    }));
};
(function() {
    // subclass extends superclass
    eqEd.BigCupBigOperatorSymbol.prototype = Object.create(eqEd.BigOperatorSymbol.prototype);
    eqEd.BigCupBigOperatorSymbol.prototype.constructor = eqEd.BigCupBigOperatorSymbol;
    eqEd.BigCupBigOperatorSymbol.prototype.buildDomObj = function() {
        var htmlRep = "";
        if(Modernizr.svg) {
            htmlRep = '<div class="bigOperatorSymbol bigCupBigOperatorSymbol" style="width: 200; height: 279.81375;"><svg style="position: absolute; width: 100%; height: 100%;" viewBox="0 0 200 279.81375" preserveAspectRatio="none"><g transform="translate(-382.19872,-150.51443)"><g><path d="m 382.40496,158.31394 c -0.0958,0.096 -0.15417,7.2039 -0.17499,21.32367 -0.0208,14.1201 -0.0292,37.67694 -0.025,70.67059 0.0448,24.62457 0.0802,43.45879 0.10624,56.50272 0.026,13.04399 0.0739,22.24133 0.14375,27.59202 0.0698,5.35071 0.19268,8.79841 0.36872,10.34311 0.17602,1.54469 0.43642,3.13001 0.7812,4.75595 1.4249,8.84526 4.12473,17.35306 8.09949,25.52341 3.97473,8.17028 9.07441,15.72813 15.29905,22.67358 7.8078,8.46607 16.89056,15.4323 27.2483,20.89869 10.35761,5.46624 21.34025,9.03268 32.94794,10.69934 2.91222,0.47904 5.33707,0.77069 7.27455,0.87494 1.93727,0.10407 4.51211,0.14573 7.72451,0.12499 9.07015,-0.0126 17.17797,-0.88753 24.32348,-2.62484 7.14525,-1.73748 14.10314,-4.26231 20.8737,-7.57452 9.72422,-4.82477 18.32368,-10.87439 25.79839,-18.14886 7.47435,-7.27461 13.67395,-15.62408 18.59884,-25.04844 2.5913,-5.05805 4.70783,-10.29106 6.3496,-15.69902 1.64136,-5.40801 2.85795,-11.24097 3.64977,-17.49891 0.064,-0.36417 0.11336,-2.61341 0.14814,-6.74773 0.0344,-4.1343 0.0689,-12.76832 0.10369,-25.90208 0.0344,-13.13371 0.0837,-33.3818 0.14815,-60.74435 0.004,-32.99365 -0.004,-56.55049 -0.025,-70.67059 -0.021,-14.11978 -0.0794,-21.22766 -0.17498,-21.32367 -0.46268,-2.24967 -1.58761,-4.09955 -3.37479,-5.54965 -1.78759,-1.44972 -3.86246,-2.19967 -6.22461,-2.24986 -2.35006,0.0502 -4.39993,0.80014 -6.14962,2.24986 -1.75008,1.4501 -2.90001,3.29998 -3.44978,5.54965 -0.096,0.096 -0.15435,7.1539 -0.17499,21.17368 -0.021,14.02011 -0.0294,36.82699 -0.025,68.42073 0.004,29.84403 -0.004,52.30094 -0.025,67.37079 -0.021,15.0699 -0.0794,23.07773 -0.17499,24.0235 -1.27094,15.1282 -6.42895,28.56901 -15.47403,40.32248 -9.04544,11.75338 -20.95302,20.4445 -35.72277,26.07337 -4.61235,1.70399 -9.33705,2.99557 -14.17411,3.87475 -4.83732,0.87905 -9.71201,1.32069 -14.62409,1.32493 -22.78616,-0.63337 -41.45998,-7.86624 -56.0215,-21.69865 -14.56163,-13.83251 -22.68611,-30.46478 -24.37348,-49.89688 -0.0959,-0.94578 -0.15418,-8.95361 -0.17499,-24.02351 -0.0209,-15.06984 -0.0292,-37.52675 -0.025,-67.37078 0.004,-31.59374 -0.004,-54.40063 -0.025,-68.42073 -0.0209,-14.01978 -0.0792,-21.07767 -0.17498,-21.17368 -0.55833,-2.33717 -1.74159,-4.21205 -3.54978,-5.62465 -1.80825,-1.41222 -3.89145,-2.13717 -6.24961,-2.17486 -2.54152,0.0752 -4.65806,0.87514 -6.3496,2.39985 -1.69158,1.52509 -2.70818,3.32498 -3.04981,5.39966 z" /></g></g></svg></div>';
        } else {
            htmlRep = '<div class="bigOperatorSymbol bigCupBigOperatorSymbol"><img class="nonHighlightVersion eqImg" src="../../Images/bigCupOperator.png" /><img class="highlightVersion eqImg" src="../../Images/bigCupOperatorHighlight.png" /></div>';
        }
        return new eqEd.EquationDom(this, htmlRep);
    };
})();