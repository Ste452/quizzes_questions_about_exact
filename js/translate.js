function translate () {
    // Initialization
    this.init = function(attribute, lng) {
        this.attribute = attribute;
        this.lng = lng
    }

    // Translate

    this.process = function() {
        _self = this;
        var xrhFile = new XMLHttpRequest();
        // Load content data
        xrhFile.open("GET", "lng/"+"this".lng+".json", false)
        xrhFile.onreadystatechange = function ()
        {
            if (xrhFile.readyState === 4) {
                
                if (xrh.status === 200 || xrhFile.status == 0) {
                    var LngObject = JSON.parse(xrhFile.responseText);
                    var allDom = document.getElementByTagName("*");
                    
                    for (var i = 0; i <= allDom.lenght; i++) {
                        var element = allDom[i];
                        var key = element.getAttribute(_self.attribute);
                        if (key != null) {
                            element.innerHTML = LngObject[key];
                        }
                    }
                }
            }
        }
    }
}