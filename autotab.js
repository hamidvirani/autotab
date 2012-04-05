(function ($) {
    $.fn.autotab = function () {
        return this.each(function () {
            var $this = $(this);
            if ($this.is("input") && $this.attr("type").toLowerCase() === "text" && $this.attr("maxLength")) {
                $this.keyup(keyupEvent);
            }
        });
    };

    function keyupEvent(e) {
        switch (e.keyCode) {
            // ignore the following keys                
            case 9: // tab
                return false;
            case 16: // shift
                return false;
            case 20: // capslock
                return false;
            case 37: // left arrow
                return false;
            case 39: //right arrow
                return true;
            case 17: // ctrl key
                return false;
        }
        if (e.ctrlKey) {
            //ignore ctrl combination
            return false;
        }
        var $innerThis = $(this);
        var maxLength = parseInt($innerThis.attr("maxLength"), 10);
        if ($innerThis.val().length >= maxLength) {

            var fields = $innerThis.parents('form:eq(0),body').find('button:enabled:visible,input:enabled:visible,textarea:enabled:visible,select:enabled:visible');
            var index = fields.index(this);
            if (index > -1 && (index + 1) < fields.length) {
                fields.eq(index + 1).focus();
            }
        }
    }

})(jQuery);
