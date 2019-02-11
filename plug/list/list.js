;(function () {
	function Index(opt) {
		this.dir = opt.dirction || 'x';
		this.menuList = opt.menuList || [];
		this.colNum = opt.colNum || 2;
		this.parent = opt.parent;
		this.fontColor = this.parent.css('color');
		this.len = this.menuList.length;
		this.createDom();
		this.bindEvent();
		console.log(this.len)
	}
	//创建添加结构
	Index.prototype.createDom = function () {
		var self = this;
		var content = $('<div class="dropCont" style="display:none"></div>');
		var dropDownCon = $('<div class="dropDownCon"></div>');
		//生成结构
		this.menuList.forEach(function (ele, index) {
			console.log(ele)
			//组
			var menu = $('<div class="nav-menu"></div>');
			//标题
			if(ele.title) {
				var menuTitle = $('<div class="item menu-title"></div>').html(ele.title);
				menu.append(menuTitle).css('text-align', 'left');
			}

			//itemList 数据的展示列表
			var itemList = $('<div class="itemList"></div>');
			ele.item.forEach(function (ele2, index2) {
				var str = '<a href="'+ele2.href+'">'+ele2.name+'</a>';
				var item = $('<div class="nav-item" style="width:100px;display:inline-block"></div>');
				item.html(str).appendTo(itemList)
			});
			menu.append(itemList).appendTo(dropDownCon);
		});
		content.append(dropDownCon).appendTo(self.parent);
		this.addCss();
		//menu 排列
		if(this.dir == 'x') {
			$('.nav-menu', this.parent).css({
				display:'inline-block',
				borderRight:'1px solid #ddd'
			})
			$('.dropCont', this.parent).css({
				width: ($('.dropCont', this.parent).innerWidth() + 2) * this.len + 'px',
				right:'-9px'
			});
		}else if(this.dir == 'y'){
			$('.nav-menu', this.parent).css({
				display:'block',
				borderBottom:'1px solid #ddd'
			})
			$('.dropCont', this.parent).css({
				left:0
			});
		}
		
	}

	//添加css样式
	Index.prototype.addCss = function () {
		var self = this;
		this.parent.css({
			position:'relative',
			zIndex:999
		});
		$('.dropCont', this.parent).css({
			position:'absolute',
			
		});
		$('.nav-menu', this.parent).css({
			padding:'10px',
			width:$('.nav-item', this.parent).width() * self.colNum + 'px',
			backgroundColor:'#fff',
			borderBottom:'1px solid #ddd',
			verticalAlign:'top'
		});
	}

	//鼠标移入移出
	Index.prototype.bindEvent = function () {
		var self = this;
		this.parent.hover(function () {
			$(this).css({
				'backgroundColor':'#fff',
				'padding':'7px 0',
				'color':self.fontColor
			}).find('a').css('color', self.fontColor);
			$('.dropCont', self.parent).show();
		}, function () {
			$('.dropCont', self.parent).hide();
			var color = self.parent.parents().css('backgroundColor');
			self.parent.css('backgroundColor', color);
		});
		$('.nav-item', this.parent).hover(function () {
			$(this).find('a').css('color', 'red');
		}, function () {
			$(this).find('a').css('color', self.fontColor);
		});
	}

	$.fn.extend({
		dropList: function (option) {
			option.parent = this;
			new Index(option);
			return this;
		}
	});
})()