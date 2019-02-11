(function ($) {
    function Swiper(args, dom) {
        this.img = args.images;
        this.delay = args.delay;
        this.wrap = dom;
        this.init();
    }

    Swiper.prototype.init = function () {
        this.len = this.img.length - 1;
        this.itemWidth = this.wrap.outerWidth();
        this.itemHeight = this.wrap.outerHeight();
        this.timer = null;
        this.lock = true;
        this.curIndex = 0;
        this.createDom();
        this.bindEvent();
        this.sliderAuto();
    }

    Swiper.prototype.createDom = function () {
        var $ImgBox = $('<ul class="swiper-img-box"></ul>');
        var $Btn = $('<div class="swiper-btn"><span class="nextBtn"><</span>\
                    <span class="prevBtn">></span></div>');
        var $Order = $('<div class="swiper-order"></div>');
        var liStr = '';
        var dotStr = '';
        for (var i = 0; i < this.len; i++) {
            liStr += '<li><a href="javascript:;"><img src="' + this.img[i] + '"/></a></li>';
            dotStr += '<span></span>';
        }
        liStr += '<li><a href="javascript:;"><img src="' + this.img[0] + '"></a></li>';
        this.wrap.append($ImgBox.html(liStr))
            .append($Btn)
            .append($Order.html(dotStr));
        // console.log($('.swiper-img-box').find('li').size() * this.itemWidth)
        $('.swiper-img-box').css({
            width: $('.swiper-img-box').find('li').size() * this.itemWidth,
        });
        $('.swiper-img-box li').css({
            width: this.itemWidth,
            height: this.itemHeight,
        });
        $('.swiper-order').find('span').eq(0).addClass('orderActive');
    }

    Swiper.prototype.bindEvent = function () {
        var self = this;
        $('.swiper-order').find('span').on('click', function () {
            var index = $(this).index();
            console.log(index);
            self.move(index);
            self.changeStyle();
        });
        $('.swiper-btn').find('span').on('click', function () {
            if ($(this).hasClass('prevBtn')) {
                self.move('prev');
            } else if ($(this).hasClass('nextBtn')) {
                self.move('next');
            }
        });
        self.wrap.on('mouseenter', function () {
            clearInterval(self.timer)
        }).on('mouseleave', function () {
            self.sliderAuto();
        });
    }

    Swiper.prototype.sliderAuto = function () {
        clearInterval(this.timer);
        var self = this;
        this.timer = setInterval(function () {
            self.move('next');
            self.changeStyle();
        }, this.delay);
    }

    Swiper.prototype.move = function (direction) {
        var self = this;
        if (this.lock) {
            this.lock = false;
            if (direction == 'prev' || direction == 'next') {
                if (direction == 'prev') {//上一个 --  +=
                    if (this.curIndex == 0) {
                        $('.swiper-img-box').css({ left: -(this.itemWidth * this.len) });
                        this.curIndex = this.len - 1;
                    } else {
                        this.curIndex--;
                    }
                } else {//下一个 ++  -=
                    if (this.curIndex == this.len - 1) {
                        $('.swiper-img-box').animate({ left: -(this.len * this.itemWidth) }, function () {
                            $(this).css({ left: 0 });
                            self.sliderAuto();
                            self.lock = true;
                        });
                        this.curIndex = 0;
                    } else {
                        this.curIndex++;
                    }
                }
            } else {
                this.curIndex = direction;
            }
            this.slider();
        }

    }

    Swiper.prototype.changeStyle = function () {
        $('.swiper-order').find('span')
            .removeClass('orderActive')
                .eq(this.curIndex).addClass('orderActive');
    }

    Swiper.prototype.slider = function () {
        var self = this;
        $('.swiper-img-box').animate({ left: -(this.itemWidth * this.curIndex) }, 300, function () {
            self.sliderAuto();
            self.lock = true;
        });
    }

    $.fn.extend({
        slider: function (options) {
            var args = options || {};
            new Swiper(args, this)
        }
    })
})(jQuery)