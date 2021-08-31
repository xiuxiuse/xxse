$(function() {
	$('.shoucang .left').mouseenter(function() {
		$('.shoucang .left .tu').animate({
			width: 'toggle'
		}, 350);
	});
	$('.shoucang .left').mouseleave(function() {
		$('.shoucang .left .tu').animate({
			width: 'toggle'
		}, 350);
	});

	$('.shoucang .right').mouseenter(function() {
		$('.shoucang .right .tu').animate({
			width: 'toggle'
		}, 350);
	});
	$('.shoucang .right').mouseleave(function() {
		$('.shoucang .right .tu').animate({
			width: 'toggle'
		}, 350);
	});
});


//获取url地址
var local_url = window.location.origin;
if(local_url.indexOf("https") == -1){
	//非https跳转
 	// window.location.href = local_url.replace("http","https");
}

//点击复制的url
$("#yuming122").html(local_url)
$("#yuming1234").html(local_url)




//点击这里 进入网站
// var zuixindizhi_url = "" + window.location.search
var zuixindizhi_url = url
$(".left").attr("href",url)

//点击收藏
function addFavorite2() {
	var url = window.location;
	var title = document.title;
	var ua = navigator.userAgent.toLowerCase();
	if(ua.indexOf("360se") > -1) {
		layer.msg("由于360浏览器功能限制，请按 Ctrl+D 手动收藏");
	} else if(ua.indexOf("msie 8") > -1) {
		window.external.AddToFavoritesBar(url, title); //IE8
	} else if(document.all) {
		try {
			window.external.addFavorite(url, title);
		} catch(e) {
			layer.msg('您的浏览器不支持，请按 Ctrl+D 手动收藏');
		}
	} else if(window.sidebar) {
		window.sidebar.addPanel(title, url, "");
	} else {
		layer.msg('您的浏览器不支持，请按 Ctrl+D 手动收藏');
	}
}

document.querySelector(".dv1 .shoucang .right ").addEventListener('click', addFavorite2, false);

var url = document.querySelector("#yuming122").innerText;
document.getElementById('fuzhidizi122').value = url

function copyArticle88(event) {
	const range = document.createRange(); /* 创建range对象   */
	range.selectNode(document.getElementById('fuzhidizi122')); // 设定range包含的节点对象 

	const selection = window.getSelection(); /* 窗口的selection对象，表示用户选择的文本 */
	if(selection.rangeCount > 0) selection.removeAllRanges(); // 将已经包含的已选择的对象清除掉
	selection.addRange(range); // 将要复制的区域的range对象添加到selection对象中
	document.execCommand('copy'); // 执行copy命令，copy用户选择的文本
	layer.msg("复制成功");
}
document.getElementById('copyBT122').addEventListener('click', copyArticle88, false);

//H5复制功能
function copyArticle(event) {
	const range = document.createRange();     /* 创建range对象   */
	range.selectNode(document.querySelector("#yuming1234"));  // 设定range包含的节点对象 

	const selection = window.getSelection();  /* 窗口的selection对象，表示用户选择的文本 */
	if(selection.rangeCount > 0) selection.removeAllRanges();  // 将已经包含的已选择的对象清除掉
	selection.addRange(range);     // 将要复制的区域的range对象添加到selection对象中
	document.execCommand('copy');   // 执行copy命令，copy用户选择的文本
	layer.msg("复制成功");
}
document.getElementById('copyBT123').addEventListener('click', copyArticle, false);

//弹窗点击 隐藏
 $(function() {
 	$("#tang").on("click", function() {
		$(this).addClass("yc");
	})
 })

// //弹窗5秒后自动关闭
 var msg5 = 5;
 function CountDown22() {
	if(msg5 >= 0) {
		--msg5;
	} else {
	document.querySelector("#tang").style.display = "none";
	}
}
timer = setInterval("CountDown22()", 1000);

//30秒倒计时跳转页面Pc
var msg = 30;

function CountDown() {
	if(msg >= 0) {
		document.querySelector("#daojishi").innerHTML = msg;
		--msg;
	} else {
		window.location.href = zuixindizhi_url;
	}
}
timer = setInterval("CountDown()", 1000);

//H530秒倒计时跳转页面
var msg2 = 30;

function CountDown2() {
	if(msg2 >= 0) {
		document.querySelector("#daojishi2").innerHTML = msg2;
		--msg2;
	} else {
		window.location.href = zuixindizhi_url;
	}
}
timer = setInterval("CountDown2()", 1000);

var domainStorage = sessionStorage.getItem('domainData');
if(!domainStorage){
    getLatestDomain()
}
function getLatestDomain() {
    let domainData='';
    sessionStorage.setItem('domainData',domainData)
    if (!sessionStorage.getItem('domainAlter')) {//未弹出新域名提示
        domainCheck(domainData)
    }        
}
function domainCheck (latestDomain) { // 检测最新域名
    var newContent = latestDomain.split(",")
    latestDomain = newContent
    var randomNum = Math.floor(Math.random() * (latestDomain.length - 0) + 0)
    
    var currentHost = 'https://' + document.domain
    var currentDomain = currentHost.replace('http://','http://')
    var newDomain = latestDomain[randomNum].replace('www.','').replace('http://','http://')
    var currentPath = window.location.pathname || ''
    var currentPathname = currentPath
    
    if (GetUrlPara()) {
        currentPathname = currentPath + '?from=6&' + GetUrlPara()                 
    }
    var newUrl = newDomain + currentPathname

    if (latestDomain.indexOf(currentDomain)  > -1) {//当前域名已经是新域名之一，不弹出提示
        document.getElementById('domainAlter').style.display = 'none'
    } else {
        document.getElementById('domainAlter').style.display = 'block'
        document.getElementById('btnGo').href = newUrl
    }
    //标记已提示过
    sessionStorage.setItem('domainAlter', 1)
} 
function GetUrlPara () {
    var url = document.location.toString()
    var arrUrl = url.split("?")
    var para = arrUrl[1]
    return para || ''
}
function closeAlert () {
    document.getElementById('domainAlter').style.display = 'none'               
}

$(function(){
    //判断终端
    var u = navigator.userAgent;                
    var isiOS = u.match(/(iPhone|iPod|iPad);?/i);                      
    if(isiOS){
        $("a").each(function(){
            var href = $(this).attr("href")
            if(href !=undefined){
                $(this).removeAttr("target")
            }
        })
        $('a:not([target])').click(function(){ 
            self.location.href = $(this).attr('href'); 
            return false; 
        });
    }
})