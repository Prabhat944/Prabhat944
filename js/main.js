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
				// '<a href="" style="font-size: 25px;"> Dresma</a>' +
				'<p style="font-size: 25px; font-weight: bold;">Dresma</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Hands-on experience of entire software development stack as well as code reviews, designing system architecture.</li>' +
				'<li>Led team on single-page App dashboard for clients with ReactJs and Bootstrap 3, using a REST API backed by MERN stack, deployed via AWS.</li>' +
				'<li>Good Communication Skills, attitude towards leadership, authorisation and delegation, conflict resolution and negotiation and a very good team worker.</li>' +
				'<li>Experience in Implementing Organization Cloud Engineer strategy in various environments of Linux based servers with adopting cloud strategies based on AWS.</li>' +
				'<li>Worked on JavaScript, TypeScript, CSS, HTML, Node.js, Promises, architecture, git, mobile application and React.</li>' +
				'<li>Worked exclusively on making applications more scalable and highly available system in AWS (load balancing) with full automation.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 2:
			textInfo =
				'<div class="project">' +
				// '<a href="#" style="font-size: 25px;" style="pointer-events: none;cursor: default;"> MyWebLink</a>' +
				'<p style="font-size: 25px; font-weight: bold;">MyWebLink</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Designed and developed a SAAS product for the company as a full stack developer</li>' +
				'<li>Used HTML, CSS, Bootstrap, jQuery along with backend NodeJS and MongoDB.</li>' +
				'<li>Helped company to boost revenue by providing user friendly Dashboard for end users.</li>' +
				'<li>Implemented Code in modular fashion so that there will no issue arise while adding new feature or modifying existing feature.</li>' +
				'<li>Used AJAX, JSON with jQuery for request data and response processing.</li>' +
				'<li>Formulated procedures for different activities such as input validation and user tracking.</li>' +
				'<li>Constructed a robust large-scale e-commerce website, deployed on a client-server architecture, to deliver a seamless and scalable online shopping experience.</li>' +
				// '<li>Supported technical team members in development of functional and visual user interfaces.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 3:
			textInfo =
				'<div class="project">' +
				// '<a href="#" style="font-size: 25px;" style="pointer-events: none;cursor: default;"> E-commerce Website</a>' +
				'<p style="font-size: 25px; font-weight: bold;">E-commerce Website</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Developed product from scratch & manage it on both Web and Mobile platforms.</li>' +
				'<li>Developed JSON RESTful API service for mobile app in two-month period, including OAuth, user’s profiles and etc (Node.js, Express, Socket).</li>' +
				'<li>Build and release Ec2 instances for Development and Production environment.</li>' +
				'<li> Created a comprehensive admin dashboard to manage products, deliveries, sales, and customer information, enhancing overall operational efficiency.</li>' +
				'<li> Improved the user experience with advanced filtering and search functionalities, ensuring a more intuitive and streamlined navigation process.</li>' +
				'<li>Integrated Firebase for secure authentication and admin privilege management, and utilized the Stripe API for seamless payment processing.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 4:
			textInfo =
				'<div class="project">' +
				// '<a href="#" style="font-size: 25px;"> Doctor Appointment</a>' +
				'<p style="font-size: 25px; font-weight: bold;">Doctor Appointment</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				// '<li>An Artificial Intelligence company developing novel algorithms and high impact solutions for real world problems through robust API’s.</li>' +
				'<li>Designed and implemented a responsive frontend using Next.js, ensuring a seamless user experience for scheduling and managing doctor appointments.</li>' +
				'<li>Utilized Kinde/auth to integrate secure and efficient authentication mechanisms, enhancing user login and registration processes.</li>' +
				'<li>Developed a scalable backend using Strapi, managing and organizing appointment data, user profiles, and medical records efficiently.</li>' +
				'<li>Leveraged Cloudflare to enhance application performance, ensure high availability, and provide security measures against potential threats.</li>' +
				'<li>Created and integrated dynamic scheduling features, allowing users to book, reschedule, and cancel appointments with ease.</li>' +
				'<li>Applied best practices in data security and compliance.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 5:
			textInfo =
				'<div class="project">' +
				// '<a href="#" style="font-size: 25px; margin-top: 10px""> MyLeague11: Fantasy Cricket App</a>' +
				'<p style="font-size: 25px; font-weight: bold;">MyLeague11: Fantasy Cricket App</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Designed and built a responsive fantasy cricket application using React Native, ensuring a seamless experience across both iOS and Android platforms.</li>' +
				'<li>Utilized Jotai for state management within the React Native app, optimizing performance and ensuring efficient handling of user data and app state.</li>' +
				'<li>Developed a robust backend using Node.js and Express, providing a reliable foundation for handling user requests, managing fantasy league data, and processing transactions.</li>' +
				'<li>Integrated JWT (JSON Web Tokens) for secure user authentication and authorization, ensuring safe access to user accounts and fantasy league features.</li>' +
				'<li>Implemented real-time updates and notifications for live match scores and player statistics.</li>' +
				'<li>Applied best practices in performance optimization and code efficiency, resulting in a responsive and smooth user experience throughout the app.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 6:
			textInfo =
				'<div class="project">' +
				// '<a href="#" style="font-size: 25px; margin-top: 10px""> Job search app</a>' +
				'<p style="font-size: 25px; font-weight: bold;">Job search app</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Built a versatile job search application using React Native, ensuring a smooth and consistent user experience for Android devices.</li>' +
				'<li>Utilized Redux for state management to efficiently handle and synchronize user data, job listings, and application status across the app.</li>' +
				'<li>Employed Expo to streamline the development process, enabling faster prototyping and deployment of features while maintaining high performance and stability.</li>' +
				'<li>Created a user-friendly and visually appealing interface, enhancing the job search experience through intuitive navigation, advanced filtering options, and easy-to-use job application features.</li>' +
				'<li>Developed robust search and filter functionalities to allow users to easily find and apply for job opportunities that match their skills and preferences.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 7:
			textInfo =
				'<div class="project">' +
				// '<a href="#" style="font-size: 25px; margin-top: 10px""> Automated Deployment Pipeline for a Web Application</a>' +
				'<p style="font-size: 25px; font-weight: bold;">Automated Deployment Pipeline for a Web Application</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Created and implemented a fully automated deployment pipeline for a web application, streamlining the release process and reducing manual intervention.</li>' +
				'<li>Utilized AWS services to deploy and manage the web application, including EC2 and S3 ensuring high availability and scalability.</li>' +
				'<li>Set up CI/CD pipelines using tools like AWS CodePipeline and Jenkins, enabling automated testing, integration, and deployment of code changes.</li>' +
				'<li>Reduced deployment times and minimized errors by automating repetitive tasks and integrating automated testing and validation steps into the deployment process.</li>' +
				'<li>Monitored the performance of the deployment pipeline, identified bottlenecks, and implemented optimizations to improve overall efficiency and reliability of the deployment process.</li>' +
				'</ul>' +
				'</div>';
			break;
	}
}
