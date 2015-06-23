 $("#js-rotating").Morphext({
                animation: "bounce",
                speed:2000,
                complete: function () {
                    console.log("This is called after a phrase is animated in! Current phrase index: " + this.index);
                }
            });