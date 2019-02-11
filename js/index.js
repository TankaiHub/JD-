//轮播图
$('#swiper').slider({
    images: ['./img/slider/lbt1.jpg', './img/slider/lbt2.jpg', './img/slider/lbt3.jpg', './img/slider/lbt4.jpg', './img/slider/lbt1.jpg'],
    delay:2000
});
var dataIndex;


bindEvent();



function bindEvent() {
	$('.content .J_cate .JS_navCtn .cate_menu_item').hover(function () {
		dataIndex = $(this).attr('data-index');
		$('.content .J_cate .J_popCtn').css('display', 'block');
		$('.content .J_cate .J_popCtn .JS_popCtn').html(dataIndex);
	}, function () {
		$('.content .J_cate .J_popCtn').css('display', 'none');
	})
	$('.content .J_cate .J_popCtn').on('mouseover', function () {
		$('.content .J_cate .J_popCtn').css('display', 'block');
	}).on('mouseout', function () {
		$('.content .J_cate .J_popCtn').css('display', 'none');
	});


    $('.service .service_frame').hover(function() {
    	$('.service .frame .frame_close').css('display', 'block');
    	$('.service .J_tab_head').slideUp();
    	$('.service .frame').css('display', 'block');
	    var id = $(this).attr('id');
	    $('.active').removeClass('active');
	    $('.' + id + '-tab').addClass('active');
	    $('.' + id + '-text').addClass('active');
	});

	$('.service .frame .frame_tit div').hover(function () {
		$('.active').removeClass('active');
		$(this).addClass('active');
		$('.' + $(this).attr('data') + '-text').addClass('active');
	}, null);

	$('.service .frame .frame_close').on('click', function () {
		$(this).css('display', 'none');
		$('.service .J_tab_head').slideDown();
    	$('.service .frame').css('display', 'none');
	});
}


//地址插件
$('#location').areaList({
	items: [
			{name:'北京', href:'#'},
			{name:'天津', href:'#'},
			{name:'上海', href:'#'},
			{name:'广东', href:'#'},
			{name:'海南', href:'#'},
			{name:'内蒙古', href:'#'},
			{name:'呼和浩特', href:'#'},
			{name:'重庆', href:'#'},
			{name:'四川', href:'#'},
			{name:'云南', href:'#'}
			],
	//每一行显示城市数量
	rowNum: 5,
	//默认城市
	nowItem:'北京',
	nowItemImg:'./img/slider/lbt1.jpg'
});



//导航条下拉列表
//y纵向
$('#myJd').dropList({
	dirction: 'y',
	colNum: 2,
	menuList:[{
		title:'1',
		item:[{href:"#", name:'处理订单'},
			  {href:"#", name:'购物车'}]
		},
		{
		title:'1',
		item:[{href:"#", name:'处理订单'},
			  {href:"#", name:'购物车'}]
	}]
});
// x 横向
$('#nav').dropList({
	dirction: 'x',
	colNum: 2,
	menuList:[{
		title:'1',
		item:[{href:"#", name:'处理订单'},
			  {href:"#", name:'购物车'}]
		},
		{
		title:'1',
		item:[{href:"#", name:'处理订单'},
			  {href:"#", name:'购物车'}]
		},
		{
		title:'1',
		item:[{href:"#", name:'处理订单'},
			  {href:"#", name:'购物车'}]
		},
		{
		title:'1',
		item:[{href:"#", name:'处理订单'},
			  {href:"#", name:'购物车'}]
		}
	]
})




//选项卡
$('#tabs-con').tabs({
	headArray:['促销', '公告'],
	headText:'',
	conStr:['<div class="mod_tab_content_item conBox curactive">\
			<ul class="news_list"><li class="news_item">\
			<a href="#">美赞臣大牌风暴，钜惠来袭！</a></li>\
			<li class="news_item"><a href="#">年货好物3件7折</a>\
			</li><li class="news_item"><a href="#">2019 囤好礼 过好年</a>\
			</li><li class="news_item"><a href="#">笔记本限时秒杀</a>\
			</li></ul></div>',
			'<div class="mod_tab_content_item conBox"><ul class="news_list">\
			<li class="news_item"><a href="#">京东图书勋章体系改版公告</a></li>\
			<li class="news_item"><a href="#">京东PLUS会员权益更新及会费调整</a></li>\
			<li class="news_item"><a href="#">京东启用全新客服电话“950618”</a></li>\
			<li class="news_item"><a href="#">关于召回普利司通（天津）轮胎有限公司2个规格乘用车轮胎的公告</a></li>\
			</ul></div>']
});