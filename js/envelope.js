// 点击弹出红包
$('.envelope').on('click',function(){
	$('.envelope-detail-wrap').css('display','block');
})
// 红包关闭 
    $('.envelope-close').on('click',function(){
        // alert('关闭');
        $('.envelope-detail-wrap').css('display','none');
    })
// 点击抢红包
$('.redbutton').on('click',function(){
	alert('抢红包');
	$('.redbutton').css('display','none');
	$('.top').css('height','12%');
	$('.slogan').css('height','10rem');
	var enve = '<div style="position:absolute;top:20%;left:40%;"><span>1.00</span><span style="color:#000;">元</span></div>'+
				'<div style="color:#00f;font-size:1rem;">已存入零钱，可直接消费</div>';

	$('.slogan').append(enve);
	$("#luck").css("display","none");
	var pepol = '<ul style="height: 340px;border-top: solid 1px #e3e0de;overflow-y: auto;list-style:none;">'+
                    '<li style="position:relative;padding:6px 0;height:54px;border-bottom:solid 1px #e3e0de;text-align:left;">'+
                        '<img class="avatar" src="images/head1.jpg" style="float:left;margin-left:18px;margin-right:6px;margin-top:8px;width:42px;height:42px;border-radius:100%;">'+
                        '<p class="name" style="font-size:16px;color:#2c2c2c;">ggg</p>'+
                        '<span class="date" style="position:absolute;bottom:6px;font-size:12px;color:#a7a7a7;">2018-04-09 10:23:22</span>'+
                        '<span class="best-money" style="position: absolute;top: 6px;right: 16px;font-size: 13px;color: #2c2c2c;"><span>1.00</span><span>元</span></span>'+
                        '<span class="best-icon" style="position:absolute;bottom:6px;right:14px;font-size:13px;color:#ffa838;"></span>'+
                    '</li>'+
                '</ul>'
    $(".mid").append(pepol);
})
// 查看红包手气
$("#luck").on('click',function(){
	$('.redbutton').css('display','none');
	$('.top').css('height','12%');
	$('.slogan').css('height','5rem');
    var text = '<div class="bottom" style="background-color:#faf6f1;line-height:30px;font-size:14px;color:#787676;">几个红包共几元，几分几秒被抢完</div>';
    $(".mid").before(text);
    $(".QRImage").css("display","none");
    $(".hints").css("display","none");
    $("#luck").css("display","none");
    var pepol = '<ul style="height: 340px;border-top: solid 1px #e3e0de;overflow-y: auto;list-style:none;">'+
                    '<li style="position:relative;padding:6px 0;height:54px;border-bottom:solid 1px #e3e0de;text-align:left;">'+
                        '<img class="avatar" src="images/head1.jpg" style="float:left;margin-left:18px;margin-right:6px;margin-top:8px;width:42px;height:42px;border-radius:100%;">'+
                        '<p class="name" style="font-size:16px;color:#2c2c2c;">ggg</p>'+
                        '<span class="date" style="position:absolute;bottom:6px;font-size:12px;color:#a7a7a7;">2018-04-09 10:23:22</span>'+
                        '<span class="best-money" style="position: absolute;top: 6px;right: 16px;font-size: 13px;color: #2c2c2c;"><span>1.00</span><span>元</span></span>'+
                        '<span class="best-icon" style="position:absolute;bottom:6px;right:14px;font-size:13px;color:#ffa838;"></span>'+
                    '</li>'+
                '</ul>'
    $(".mid").append(pepol);
})