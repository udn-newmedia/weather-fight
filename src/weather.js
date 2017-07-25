import $ from 'jquery'
import 'jquery-mousewheel'
import '../style/weather.css'

$(document).ready(function(){

    var w = $(window).width()
    var h = $(window).height()
    var scroll_now, total_height
    const headTop = (w >= 768) ? '6px' : '4px'

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

        })

    }

})