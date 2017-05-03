function toggleMenu() {
	$("#menu_open").click(function(e) {
		$("#overlay, #menu").fadeIn(), e.preventDefault(), e.stopPropagation()
	}), $("#menu-close, #overlay").click(function(e) {
		$("#overlay, #menu").fadeOut(), e.preventDefault(), e.stopPropagation()
	})
}

function load_page(e, n, t, a) {
	$.ajax({
		url: e,
		success: function(o) {
			var l = $(o).filter(n).children();
			$(t).empty().append(l), a(e)
		}
	})
}

function page_scroll(e) {
	function n(e) {
		var n = window.location.pathname;
		current_page_name = n.substring(n.lastIndexOf("/") + 1).replace(".html", ""), l = o.indexOf(current_page_name), "undefined" == typeof e && (e = l), c = e + 1, i = e - 1, 0 > i ? i += o.length : c >= o.length && (c -= o.length)
	}

	function t() {
		a("left"), a("right")
	}

	function a(e) {
		$(".page-scroll-" + e).off().click(function(a) {
			$('body').addClass('posa');
			$(".page-scroll-show .header").css("top", $(document).scrollTop());

			if (!r) {
				r = !0;
				var l = null,
					u = null;
				"left" == e ? (l = i, u = "100%") : "right" == e && (l = c, u = "-100%"), $(".page-load").addClass("process").after('<div class="page-preload-' + e + '"></div>'), load_page(o[l], ".page-load", ".page-preload-" + e, function(a) {
					n(l), setTimeout(function() {
						$(".page-load").css("left", u), $(".page-preload-" + e).css("left", 0)
					}, 500), setTimeout(function() {
						$('body').removeClass('posa');
						$(".page-load").remove(), $(".page-preload-" + e).addClass("page-load").removeClass("page-preload-" + e), r = !1, contact_bubble_init()
					}, 1e3), t(), history.pushState(null, null, a)
				})
			}
			a.preventDefault()
		})
	}

	var o = e,
		l = null,
		c = null,
		i = null,
		r = !1;
	n(), t(), window.addEventListener("popstate", function() {
		load_page(window.location.pathname, ".page-load", ".page-load", function() {
			n(), t()
		})
	}), $(document).scroll(function() {
		// $(".page-scroll-show .header").css("top", $(this).scrollTop());
	})
}

var getUrlParameter = function(e) {
	var n, t, a = decodeURIComponent(window.location.search.substring(1)),
		o = a.split("&");
	for (t = 0; t < o.length; t++)
		if (n = o[t].split("="), n[0] === e) return void 0 === n[1] ? !0 : n[1]
};

$(document).ready(function(){

	contact_bubble_init();

	if (location.pathname == '/index.html'){
		location.href = 'http://www.iquest.cz';
	}

	toggleMenu();

	// Footer contact form validation
	if($('#contact_form').length != 0){

		$('#contact_form').validate({
			highlight: function(element, errorClass){
		    $(element).addClass('error');
		    setTimeout(function(){
		    		$(element).next().addClass('show');
		    }, 200);
	  	},
			unhighlight: function(element, errorClass){
				$(element).removeClass('error');
	    	$(element).next().removeClass('show');
	  	},
	  	validClass: "success",
			rules: {
				// name: {
				// 	required: true,
				// 	minlength: 2,
				// 	pattern: /^[А-яA-z\s]+$/i
				// },
				// company: {
				// 	required: true,
				// 	minlength: 2
				// },
				// phone: {
				// 	required: true,
				// 	pattern: /^[0-9\-_!,.:+=?\s)(]*$/
				// }
				email: {
					required: true,
					email: true
				},
				message: {
					required: true,
				},
			},
			messages: {
				name: {
					required: 'Prosím, zadejte jméno',
					pattern: 'Zadali jste špatně jméno'
				},
				company: 'Prosím, zadejte nazev firmy',
				email: {
					required: 'Prosím, zadejte email',
					email: 'Zadali jste špatně email'
				},
				phone: {
					required: 'Prosím, zadejte telefon',
					pattern: 'Zadali jste špatně telefon'
				},
				message: {
					required: 'Prosím, zadejte text'
				}
			}
		});
	}

	// Mac contact form
	if($('#contact_form2').length != 0){

		$('#contact_form2').validate({
			highlight: function(element, errorClass){
		    $(element).addClass('error');
		    setTimeout(function(){
		    		$(element).next().addClass('show');
		    }, 200);
	  	},
			unhighlight: function(element, errorClass){
				$(element).removeClass('error');
	    	$(element).next().removeClass('show');
	  	},
	  	validClass: "success",
			rules: {
				// name: {
				// 	required: true,
				// 	minlength: 2,
				// 	pattern: /^[А-яA-z\s]+$/i
				// },
				// company: {
				// 	required: true,
				// 	minlength: 2
				// },
				// phone: {
				// 	required: true,
				// 	pattern: /^[0-9\-_!,.:+=?\s)(]*$/
				// }
				email: {
					required: true,
					email: true
				},
				message: {
					required: true,
				},
			},
			messages: {
				name: {
					required: 'Prosím, zadejte jméno',
					pattern: 'Zadali jste špatně jméno'
				},
				company: 'Prosím, zadejte nazev firmy',
				email: {
					required: 'Prosím, zadejte email',
					email: 'Zadali jste špatně email'
				},
				phone: {
					required: 'Prosím, zadejte telefon',
					pattern: 'Zadali jste špatně telefon'
				},
				message: {
					required: 'Prosím, zadejte text'
				}
			}
		});
	}

	// Mac contact form
	if($('#contact_form_kozultace_zdarma').length !== 0){

		$('#contact_form_kozultace_zdarma').validate({
			highlight: function(element, errorClass){
		    $(element).addClass('error');
		    setTimeout(function(){
		    		$(element).next().addClass('show');
		    }, 200);
	  	},
			unhighlight: function(element, errorClass){
				$(element).removeClass('error');
	    	$(element).next().removeClass('show');
	  	},
	  	validClass: "success",
			rules: {
				email: {
					required: true,
					email: true
				},
				message: {
					required: true,
				}
			},
			messages: {
				email: {
					required: 'Prosím, zadejte email',
					email: 'Zadali jste špatně email'
				},
				message: {
					required: 'Prosím, zadejte text'
				}
			}
		});
	}

	// Mac contact form
	if($('#contact_form_tel_kozultace_zdarma').length !== 0){

		$('#contact_form_tel_kozultace_zdarma').validate({
			highlight: function(element, errorClass){
		    $(element).addClass('error');
		    setTimeout(function(){
		    		$(element).next().addClass('show');
		    }, 200);
	  	},
			unhighlight: function(element, errorClass){
				$(element).removeClass('error');
	    	$(element).next().removeClass('show');
	  	},
	  	validClass: "success",
			rules: {
				phone: {
					required: true,
					pattern: /^[0-9\-_!,.:+=?\s)(]*$/
				}
			},
			messages: {
				phone: {
					required: 'Prosím, zadejte telefon',
					pattern: 'Zadali jste špatně telefon'
				}
			}
		});
	}
});

// Contact bubble animation.1
function contact_bubble_init(){
	$('.contact-bubble').bind('mouseover', function(e){
	  var _this = $(this);
	  if(e.target.nodeName === 'SPAN'){
	    _this.children('[class ^= bubble]').removeClass('bounceIn');
	    setTimeout(function(){
	      _this.children('[class ^= bubble]').addClass('bounceIn');
	    }, 10);
	  }
	});
}






