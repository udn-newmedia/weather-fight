import $ from 'jquery'
import 'jquery-mousewheel'
import 'lazysizes'
import '../style/weather.css'

$(document).ready(function(){

    var w = $(window).width()
    var h = $(window).height()
    var scroll_now, total_height
	const headTop = (w >= 768) ? '6px' : '4px'
	var title = $('title').text()
	var isMob = detectmob();
	var platform = (isMob == true) ? 'Mob' : 'PC'
	var read_progress = 0;
	
	var count1 = 0;
	var count2 = 0
	var count3 = 0
	var ice = 0

	$('a').click(function(){
		console.log('click')
		ga("send", {
			"hitType": "event",
			"eventCategory": "超連結點擊",
			"eventAction": "click",
			"eventLabel": "[" + platform + "] [" + title + "] [" + $(this).attr('href') + "]"
		});
	})

	$('#scroll-down').click(function(){
		ga("send", {
			"hitType": "event",
			"eventCategory": "ham bar",
			"eventAction": "click",
			"eventLabel": "[" + platform + "] [" + title + "] [scroll down]"
		});
		
		$('html, body').animate({scrollTop : $('.intro h2').offset().top - 100}, 1000, function(){});
		
	});

	$('.line-share').click(function(e){
		ga("send", {
			"hitType": "event",
			"eventCategory": "Line Share",
			"eventAction": "click",
			"eventLabel": "[" + platform + "] [" + title + "] [line share]"
		});
		if(detectmob()){
			//手機
			window.location.href="//line.me/R/msg/text/?" + title + "%0D%0A%0D%0A" + $('meta[property="og:description"]').attr('content') + "%0D%0A%0D%0A" + window.location.href + "%0D%0A%0D%0A快下載udn News APP！看更多報導%0D%0Ahttp://hyperurl.co/udnapp.earthquake?IQid=hk20";
		}else{
			window.open("https://lineit.line.me/share/ui?url="+window.location.href);
		}
	});

	setInterval(function(){
		count1 = (count1 + 1) % 4
		count2 = (count2 + 1) % 3
		count3 = (count3 + 1) % 3
		$('.rotate').css('opacity', 0)
		$('#img-1-' + count1).css('opacity', 1)
		$('#img-2-' + count2).css('opacity', 1)
		$('#img-3-' + count3).css('opacity', 1)
	}, 1000)

	setInterval(function(){
		ice = (ice + 1) % 4
		$('.rotate-3').css('opacity', 0)
		$('#img-ice-' + ice).css('opacity', 1)
	}, 3000)

    if(w <= 768){

        $(window).on('scroll', function(){

            scroll_now = $(window).scrollTop();

            if(scroll_now > h){
	            $('#indicator').css('opacity', 1)
	            $('#head').css('top', headTop)
	        }
	        else{
	            $('#indicator').css('opacity', 0)
	            $('#head').css('top', '0')
	        }

            total_height = $('body').height() - h

            var cur_scroll = scroll_now/total_height * 100
			$('#indicator-bar').css('width', cur_scroll + '%');
				
			if(Math.floor(cur_scroll/10) > read_progress){
				read_progress = Math.floor(cur_scroll/10)
				ga("send", {
					"hitType": "event",
					"eventCategory": "read",
					"eventAction": "scroll",
					"eventLabel": "[" + platform + "] [" + title + "] [page read " + (read_progress*10) + "%]"
				});
			}

        })

    }

    else{

        $(window).on('mousewheel', function(event, delta, deltaX, deltaY){
			if(delta == 1){
				$('#head').css('opacity', 0.85);
			}
			else{
				$('#head').css('opacity', 0);
			}
		});

        $(window).on('scroll', function(){

            scroll_now = $(window).scrollTop();

            if(scroll_now > h){
	            $('#indicator').css('opacity', 1)
	            $('#head').css('top', headTop)
	        }
	        else{
	            $('#indicator').css('opacity', 0)
	            $('#head').css('top', '0')
	        }

	        total_height = $('body').height() - h
	        var cur_scroll = scroll_now/total_height * 100
			$('#indicator-bar').css('width', cur_scroll + '%');
				
			if(Math.floor(cur_scroll/10) > read_progress){
				read_progress = Math.floor(cur_scroll/10)
				ga("send", {
					"hitType": "event",
					"eventCategory": "read",
					"eventAction": "scroll",
					"eventLabel": "[" + platform + "] [" + title + "] [page read " + (read_progress*10) + "%]"
				});
			}

        })

    }

})