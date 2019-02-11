;(function ($) {
	var obj = {
		init: function (option) {
			this.parent = option.parent;
			this.items = option.items;
			this.rowNum = option.rowNum || 5;
			this.nowItem = option.nowItem || this.items[0] || '';
			this.nowItemImg = option.nowItemImg || '';
			this.createDom();
			this.bindEvent();
		},
		createDom: function () {
			var wrap = $('<div class="areaContent"></div>');//父级
			var nowArea = $('<div class="nowArea"></div>');//子集1
			var itemList = $('<div class="itemList"></div>');//子集2
			if(this.nowItemImg) {//判断图片
				var img = new Image();
				img.src = this.nowItemImg;
				img.onload = function() {
					$(img).prependTo(nowArea);
				}
			}
			$('<span class="item-name"></span>').html(this.nowItem).appendTo(nowArea);
			this.items.forEach(function (ele, index) {
				var str = '<a href="'+ele.href+'">'+ele.name+'</a>'
				$('<div class="item"></div>').append(str).appendTo(itemList);
			});
			wrap.append(nowArea).append(itemList);
			this.parent.append(wrap);
			 $(this.parent).find('.itemList').css({
				width:$('.item').innerWidth() * this.rowNum + 'px',
				top:$(this.parent).height() - 2 + 'px'
			});



		},
		bindEvent: function () {
			$('.itemList').on('click', '.item', function () {
				$('.nowActive').removeClass('nowActive');
				$(this).addClass('nowActive');
				$('span.item-name').text($(this).text())
			});
		}
	}


	$.fn.extend({
		areaList: function (opt) {
			opt.parent = this;
			obj.init(opt);
		}
	});
})(jQuery)