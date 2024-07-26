function main() {
	(function() {
		'use strict';

		$('a.page-scroll').click(function() {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate(
						{
							scrollTop: target.offset().top - 40
						},
						900
					);
					return false;
				}
			}
		});

		// affix the navbar after scroll below header
		$('#nav').affix({
			offset: {
				top: $('nav').height() - 100
			}
		});

		$(document).ready(function(e) {
			$('.navbar-nav li a').click(function(event) {
				$('.navbar-collapse').collapse('hide');
			});
		});

		// skills chart
		$(document).ready(function(e) {
			/* Preloader */
			$(window).load(function() {
				$('.preloader')
					.delay(500)
					.fadeOut('slow');
			});

			//var windowBottom = $(window).height();
			var index = 0;
			$(document).scroll(function() {
				var top = $('#skills').height() - $(window).scrollTop();
				let startAnimationPosition = 300;
				if ($(window).width() < 720 && $(window).width() > 0) {
					startAnimationPosition = 1800;
				}
				if ($(window).width() < 980 && $(window).width() > 720) {
					startAnimationPosition = 800;
				}
				if (top < startAnimationPosition) {
					if (index == 0) {
						$('.chart').easyPieChart({
							easing: 'easeOutBounce',
							onStep: function(from, to, percent) {
								$(this.el)
									.find('.percent')
									.text(Math.round(percent));
							}
						});
					}
					index++;
				}
			});
			//console.log(nagativeValue)
		});

		// Portfolio isotope filter
		$(window).load(function() {
			var $container = $('.portfolio-items');
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			$('.cat a').click(function() {
				$('.cat .active').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});
				return false;
			});
		});

		// CounterUp
		$(document).ready(function($) {
			if ($('span.count').length > 0) {
				$('span.count').counterUp({
					delay: 10, // the delay time in ms
					time: 1500 // the speed time in ms
				});
			}
		});

		// Pretty Photo
		$("a[rel^='prettyPhoto']").prettyPhoto({
			animation_speed: 'fast' /* fast/slow/normal */,
			slideshow: 5000 /* false OR interval time in ms */,
			autoplay_slideshow: false /* true/false */,
			opacity: 0.8 /* Value between 0 and 1 */,
			show_title: true /* true/false */,
			allow_resize: true /* Resize the photos bigger than viewport. true/false */,
			default_width: 500,
			default_height: 344,
			custom_markup: '<div id="map_canvas" style="width:500px; height:386px"></div>',
			changepicturecallback: function() {
				initialize();
			}
		});
	})();
}
main();

var textInfo;
function initialize() {
	document.getElementById('map_canvas').innerHTML = textInfo;
}

function changetext(number) {
	switch (number) {
		case 1:
			textInfo =
				'<div class="project">' +
				// '<a href="https://photographai.com" style="font-size: 25px;"> PhotographAI</a>' +
				'<p style="font-size: 25px; font-weight: bold;">PhotographAI</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				// '<li>An Artificial Intelligence company developing novel algorithms and high impact solutions for real world problems through robust API’s.</li>' +
				'<li>Hands-on experience of entire software development stack as well as code reviews, designing system architecture.</li>' +
				'<li>Led team on single-page App dashboard for clients with AngularJS and Bootstrap 3, using a REST API backed by MEAN stack, deployed via AWS.</li>' +
				'<li>Good Communication Skills, attitude towards leadership, authorisation and delegation, conflict resolution and negotiation and a very good team worker.</li>' +
				'<li>Experience in Implementing Organization Cloud Engineer strategy in various environments of Linux based servers with adopting cloud strategies based on AWS.</li>' +
				'<li>Worked on JavaScript, TypeScript, CSS, HTML, Node.js, Promises, architecture, git, mobile application, Angular and Aurelia.</li>' +
				'<li>Worked exclusively on making applications more scalable and highly available system in AWS (load balancing) with full automation.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 2:
			textInfo =
				'<div class="project">' +
				// '<a href="#" style="font-size: 25px;" style="pointer-events: none;cursor: default;"> Engine Chief</a>' +
				'<p style="font-size: 25px; font-weight: bold;">Engine Chief</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>A marketplace to buy and sell used commercial vehicles in India.</li>' +
				'<li>Designed and developed a SAAS product for the company as a full stack developer</li>' +
				'<li>Used HTML, CSS, Bootstrap, jQuery along with backend NodeJS and MongoDB.</li>' +
				'<li>Helped company to boost sales by providing user friendly Dashboard for end users.</li>' +
				'<li>Implemented Code in modular fashion so that there will no issue arise while adding new feature or modifying existing feature.</li>' +
				'<li>Used AJAX, JSON with jQuery for request data and response processing.</li>' +
				'<li>Formulated procedures for different activities such as input validation and user tracking.</li>' +
				// '<li>Supported technical team members in development of functional and visual user interfaces.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 3:
			textInfo =
				'<div class="project">' +
				// '<a href="#" style="font-size: 25px;" style="pointer-events: none;cursor: default;"> Easyflaire</a>' +
				'<p style="font-size: 25px; font-weight: bold;">Easyflaire</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>An online fashion rental store. Rent high end designer apparels both western and ethnic.</li>' +
				'<li>Full stack web developer on the enterprise e-commerce product and lead a team of 3 interns.</li>' +
				'<li>Developed product from scratch & manage it on both Web and Mobile platforms.</li>' +
				'<li>Developed JSON RESTful API service for mobile app(Android) in two-month period, including OAuth, user’s profiles, messages, friendship and etc (Node.js, Express, Socket).</li>' +
				'<li>As a Tech team leader worked on DNS management, load balancing, server maintenance.</li>' +
				'<li>Build and release Ec2 instances for Development and Production environment.</li>' +
				'<li>Launching and configuring of Amazon EC2(AWS) Cloud Servers using AMIs (Linux) and configuring the servers for specified applications.</li>' +
				// '<li>Participated in continuous learning of web development methods and UI designing trends.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 4:
			textInfo =
				'<div class="project">' +
				// '<a href="https://photographai.com" style="font-size: 25px;"> PhotographAI</a>' +
				'<p style="font-size: 25px; font-weight: bold;">PhotographAI</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				// '<li>An Artificial Intelligence company developing novel algorithms and high impact solutions for real world problems through robust API’s.</li>' +
				'<li>Experience in Implementing Organization Cloud Engineer strategy in various environments of Linux based servers.</li>' +
				'<li>Worked exclusively on making applications more scalable and highly available system in AWS (load balancing) with full automation.</li>' +
				'<li>Experience in both Client Side (both web and mobile) and Server-Side Programming.</li>' +
				'<li>Managed EC2 instances, Auto Scaling, Elastic Load Balancing (ELB) and AMIs.</li>' +
				'<li>Worked on AWS (Amazon web services): EC2, VPC, IAM, S3, CLOUD WATCH, ELB, DNS Management, ROUTE 53, SNS, SQS.</li>' +
				'<li>Worked on Jenkins, jUnit, TCP/IP, SSH, UDP, SMTP, FTP, Power Shell Scripting, VM Ware, Docker</li>' +
				'<li>Developed custom reporting tools, setting up automated health monitoring and alerting for builds and environment.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 5:
			textInfo =
				'<div class="project">' +
				// '<a href="https://play.google.com/store/apps/details?id=ai.popfox.android&hl=en" style="font-size: 25px; margin-top: 10px""> PopFox</a>' +
				'<p style="font-size: 25px; font-weight: bold;">PopFox</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Popularity prediction application, users can know popularity score of their gallery photos.</li>' +
				'<li>Integrated OTP verification, SDK’s for push notification, crash reporting, Analytics.</li>' +
				'<li>Implemented social media login and sharing feature using Facebook, google+, Instagram.</li>' +
				'<li>Strived for elegance and simplicity in code while focusing on scalability, readability and standards complicity.</li>' +
				'<li>Woked on Firebase, Core Java, LeakCanary, D3.js, SQLite, Android Debug Database, Drawable Optimizer, Fabric, Social APIs, Analytics tools.</li>' +
				'<li>Wrote clean, clear, efficient, well-tested, and maintainable code in moduler fashion.</li>' +
				'<li><a href="https://play.google.com/store/apps/details?id=ai.popfox.android&hl=en" target="_blank">https://play.google.com/store/apps/details?id=ai.popfox.android&hl=en</a></li>' +
				'</ul>' +
				'</div>';
			break;
		case 6:
			textInfo =
				'<div class="project">' +
				// '<a href="https://play.google.com/store/apps/details?id=easyflaire.com&hl=en" style="font-size: 25px; margin-top: 10px""> Easyflaire</a>' +
				'<p style="font-size: 25px; font-weight: bold;">Easyflaire</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Devised Rental Platform to re-invent retail market by easy access to virtual wardrobe.</li>' +
				'<li>Led the design and development of mobile app in Native Java, middle-ware modules, proof-of-concept (POC), libraries, SDK’s, API’s.</li>' +
				'<li>Integrated user shopping cart, billing, filter selection in UI along with Rest API’s.</li>' +
				'<li>Implemented system to track user behaviour and crash reporting inside app.</li>' +
				'<li>Woked on AVD Manager, Firebase, D3.js, Crashlytics, SQLite, CleverTap.</li>' +
				'<li>Participated in complete Software Development Life Cycle (SDLC) for proper analysis, development, testing, deployment and enhancement of the code.</li>' +
				'<li><a href="https://play.google.com/store/apps/details?id=easyflaire.com&hl=en" target="_blank">https://play.google.com/store/apps/details?id=easyflaire.com&hl=en</a></li>' +
				'</ul>' +
				'</div>';
			break;
		case 7:
			textInfo =
				'<div class="project">' +
				// '<a href="https://play.google.com/store/apps/details?id=in.hoodoo&hl=en" style="font-size: 25px; margin-top: 10px""> Hoodoo</a>' +
				'<p style="font-size: 25px; font-weight: bold;">Hoodoo</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Helps users, from finding a product or service to getting it delivered at your doorstep.</li>' +
				'<li>Created UI and UX components while keeping design guidelines in mind.</li>' +
				'<li>Perform test cases according to design specifications to ensure product functionality and business needs are correctly interpreted.</li>' +
				'<li>Successfully deployed the app on the Android Marketplace and supported the app for different releases of Android OS.</li>' +
				'<li>Improve user experience through Bug fixing and releasing new builds of the application.</li>' +
				'<li>Woked on XML, Core Java, Google Analytics, Firebase, GCM Push notifications, Crashlytics, SQLite, CleverTap, Sockets.</li>' +
				'<li><a href="https://play.google.com/store/apps/details?id=in.hoodoo&hl=en" target="_blank">https://play.google.com/store/apps/details?id=in.hoodoo&hl=en</a></li>' +
				'</ul>' +
				'</div>';
			break;
		case 8:
			textInfo =
				'<div class="project">' +
				// '<a href="https://play.google.com/store/apps/details?id=com.vsolvex.runnerbee&hl=en" style="font-size: 25px; margin-top: 10px"> RunnerBee</a>' +
				'<p style="font-size: 25px; font-weight: bold;">RunnerBee</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>An on-demand helper providing service like document delivery, pickup and drop service.</li>' +
				'<li>Integrated Native java front ends with NodeJS backend and NoSQL database MongoDB.</li>' +
				'<li>Facilitated multithreading and asynchronous downloading of data on background thread.</li>' +
				'<li>Integrated the Google Maps, GCM SDK for Android along with different Rest API’s.</li>' +
				'<li>Published Android application while establishing framework for future platforms.</li>' +
				'<li>Woked on OTP based verification, referal programe,Google Map SDK, Java multithreading, Core Java, Google Analytics, GCM Push notifications, Crashlytics, SQLite, Sockets.</li>' +
				'<li><a href="https://play.google.com/store/apps/details?id=com.vsolvex.runnerbee&hl=en" target="_blank">https://play.google.com/store/apps/details?id=com.vsolvex.runnerbee&hl=en</a></li>' +
				'</ul>' +
				'</div>';
			break;
	}
}
