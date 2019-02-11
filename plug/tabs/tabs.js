(function ($) {
    var tab = {
        init: function (option) {
            var option = option || {};
            this.opt = $.extend({}, option);
            this.readerDom();
            this.bindEvent();
        },
        readerDom: function () {
            var len = this.opt.headArray.length;
            var $Span = $('<span class="header"></span>');
            var $HeaderBox = $('<div class="headerBox"></div>');
            var $Con = $('<div class="tabContent"></div>');
            var tabStr = '';
            for(var i = 0; i < len; i ++) {
                tabStr += '<span>'+this.opt.headArray[i]+'</span>';
            }
            this.opt.father
                .append($Span.text(this.opt.headText))
                    .append($HeaderBox.html(tabStr))
                        .append($Con.html(this.opt.conStr));
            $('.headerBox span').eq(0).addClass('curactive');
        },
        bindEvent: function () {
            $('.headerBox span').on('click', function () {
                var index = $(this).index();
                $('.curactive').removeClass('curactive');
                $(this).addClass('curactive');
                $('.conBox').eq(index).addClass('curactive');
            });
        }
    }


    $.fn.extend({
        tabs: function (option) {
            option.father = this || $('body');
            tab.init(option);
        }
    });
})(jQuery)