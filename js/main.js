function main() {
	(function() {
		'use strict';

		$('a.page-scroll').click(function(e) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					e.preventDefault();
					var offsetTop = target.offset().top - 60; // Account for fixed navbar
				// Smooth scroll with improved easing
				$('html, body').stop(true, false).animate(
						{
						scrollTop: offsetTop
						},
					800, // Smooth animation duration (800ms)
					'swing' // jQuery easing function
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

		// Portfolio filter - Simple show/hide
		$(document).ready(function() {
			$('.filter-btn').click(function() {
				// Update active state
				$('.filter-btn').removeClass('active');
				$(this).addClass('active');
				
				// Get filter value
				var filter = $(this).attr('data-filter');
				
				// Show/hide cards
				if (filter === '*') {
					$('.portfolio-card').removeClass('hidden');
				} else {
					$('.portfolio-card').each(function() {
						if ($(this).hasClass(filter.replace('.', ''))) {
							$(this).removeClass('hidden');
						} else {
							$(this).addClass('hidden');
						}
					});
				}
				
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
				'<p style="font-size: 25px; font-weight: bold;">Image Editor Application</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Built a comprehensive image editing application using React Native with advanced camera integration and image processing capabilities.</li>' +
				'<li>Implemented state management using Redux, Redux Toolkit, and Jotai to efficiently handle complex application state and user interactions.</li>' +
				'<li>Utilized TanStack Query for efficient data fetching, caching, and synchronization with backend services.</li>' +
				'<li>Developed custom image processing algorithms and integrated cloud storage solutions for seamless image upload and retrieval.</li>' +
				'<li>Created Redux middleware for handling asynchronous operations and implemented RxJS for reactive programming patterns.</li>' +
				'<li>Ensured cross-platform compatibility and optimized performance for both iOS and Android devices.</li>' +
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
				'<p style="font-size: 25px; font-weight: bold;">Mobile Applications: Ludo, Micro Drama Shots, Rummy, Astrology (iOS & Android)</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Developed and published multiple cross-platform mobile applications (Ludo, Micro Drama Shots, Rummy, Astrology) for both iOS and Android platforms using React Native.</li>' +
				'<li>Implemented native modules using Kotlin for Android and Swift for iOS to enhance app performance and access platform-specific features.</li>' +
				'<li>Integrated HyperSDK for seamless payment processing and UPI integration, ensuring secure and smooth transaction experiences.</li>' +
				'<li>Utilized Firebase for real-time analytics, user authentication, and cloud messaging to enhance user engagement.</li>' +
				'<li>Integrated multiple payment gateways to provide users with flexible payment options and improve conversion rates.</li>' +
				'<li>Optimized app performance resulting in 50% faster launch times and 40% reduction in crash rates.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 11:
			textInfo =
				'<div class="project">' +
				'<p style="font-size: 25px; font-weight: bold;">Ludo - Mobile Game Application (iOS & Android)</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Developed and published a cross-platform Ludo game application for both iOS and Android platforms using React Native.</li>' +
				'<li>Implemented native modules using Kotlin for Android and Swift for iOS to enhance game performance and access platform-specific features.</li>' +
				'<li>Integrated HyperSDK for seamless payment processing and UPI integration, enabling in-app purchases and secure transactions.</li>' +
				'<li>Utilized Firebase for real-time multiplayer functionality, user authentication, and cloud messaging for game notifications.</li>' +
				'<li>Implemented smooth animations and game mechanics ensuring responsive gameplay experience across devices.</li>' +
				'<li>Optimized app performance resulting in faster load times and smooth gameplay experience.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 12:
			textInfo =
				'<div class="project">' +
				'<p style="font-size: 25px; font-weight: bold;">Rummy - Card Game Application (iOS & Android)</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Developed and published a cross-platform Rummy card game application for both iOS and Android platforms using React Native.</li>' +
				'<li>Implemented native modules using Kotlin for Android and Swift for iOS to enhance game performance and card animations.</li>' +
				'<li>Integrated HyperSDK for seamless payment processing and UPI integration, enabling secure in-game transactions and wallet management.</li>' +
				'<li>Utilized Firebase for real-time multiplayer functionality, user authentication, and cloud messaging for game invites and notifications.</li>' +
				'<li>Implemented advanced card game logic and AI opponents for single-player mode.</li>' +
				'<li>Optimized app performance and memory management for smooth card animations and gameplay.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 13:
			textInfo =
				'<div class="project">' +
				'<p style="font-size: 25px; font-weight: bold;">Micro Drama Shots - Short Video Application (iOS & Android)</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Developed and published a cross-platform short video application for both iOS and Android platforms using React Native.</li>' +
				'<li>Implemented native modules using Kotlin for Android and Swift for iOS for video processing, camera integration, and media playback.</li>' +
				'<li>Integrated HyperSDK for seamless payment processing and UPI integration for premium features and subscriptions.</li>' +
				'<li>Utilized Firebase for video storage, user authentication, real-time comments, and cloud messaging for user engagement.</li>' +
				'<li>Implemented video editing features, filters, and effects to enhance user content creation experience.</li>' +
				'<li>Optimized video streaming and playback performance for smooth user experience across different network conditions.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 14:
			textInfo =
				'<div class="project">' +
				'<p style="font-size: 25px; font-weight: bold;">Astrology - Horoscope & Prediction Application (iOS & Android)</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Developed and published a cross-platform astrology application for both iOS and Android platforms using React Native.</li>' +
				'<li>Implemented native modules using Kotlin for Android and Swift for iOS for calendar integration and push notifications.</li>' +
				'<li>Integrated HyperSDK for seamless payment processing and UPI integration for premium horoscope readings and consultations.</li>' +
				'<li>Utilized Firebase for user authentication, cloud messaging for daily horoscope notifications, and analytics for user engagement.</li>' +
				'<li>Implemented personalized horoscope generation, birth chart calculations, and compatibility features.</li>' +
				'<li>Optimized app performance and data caching for quick access to horoscope predictions and user data.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 8:
			textInfo =
				'<div class="project">' +
				'<p style="font-size: 25px; font-weight: bold;">HyperSDK Image Editor Application (iOS & Android)</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Built a comprehensive image editing application using React Native with advanced camera integration and image processing capabilities.</li>' +
				'<li>Implemented state management using Redux, Redux Toolkit, and Jotai to efficiently handle complex application state and user interactions.</li>' +
				'<li>Utilized TanStack Query for efficient data fetching, caching, and synchronization with backend services.</li>' +
				'<li>Developed custom image processing algorithms and integrated cloud storage solutions for seamless image upload and retrieval.</li>' +
				'<li>Created Redux middleware for handling asynchronous operations and implemented RxJS for reactive programming patterns.</li>' +
				'<li>Ensured cross-platform compatibility and optimized performance for both iOS and Android devices.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 9:
			textInfo =
				'<div class="project">' +
				'<p style="font-size: 25px; font-weight: bold;">Insurance Website and Services</p>' +
				'<ul style="font-size: 16px; margin-top: 0px">' +
				'<li>Developed a comprehensive insurance website and services platform using React for the frontend and NestJS for the backend.</li>' +
				'<li>Designed and implemented user-friendly interfaces for insurance product browsing, quote generation, and policy management.</li>' +
				'<li>Integrated secure payment gateways and policy management systems for seamless insurance transactions.</li>' +
				'<li>Implemented robust authentication and authorization systems to protect user data and policy information.</li>' +
				'<li>Created admin dashboards for managing policies, claims, and customer information efficiently.</li>' +
				'<li>Ensured compliance with insurance regulations and implemented data security best practices.</li>' +
				'</ul>' +
				'</div>';
			break;
		case 10:
			textInfo =
				'<div class="project">' +
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
