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

		// Project Modal System
		var scrollPosition = 0;
	})();
}
main();

// Project Data Structure
var projectsData = {
	1: {
		title: "Image Editor Application",
		type: "Mobile Application",
		role: "Software Developer",
		image: "https://proseobd.com/wp-content/uploads/2023/03/DoMyShoot-1024x576.jpg",
		technologies: [
			{ name: "React Native", icon: "devicon-react-original" },
			{ name: "Redux", icon: "devicon-redux-original" },
			{ name: "Jotai", icon: "devicon-react-original" },
			{ name: "TanStack Query", icon: "devicon-react-original" },
			{ name: "RxJS", icon: "devicon-javascript-plain" },
			{ name: "Node.js", icon: "devicon-nodejs-plain" }
		],
		keyFeatures: [
			"Advanced camera integration and image processing capabilities",
			"State management using Redux, Redux Toolkit, and Jotai",
			"Efficient data fetching with TanStack Query",
			"Custom image processing algorithms",
			"Cloud storage integration for seamless upload and retrieval",
			"Redux middleware for asynchronous operations",
			"Cross-platform compatibility for iOS and Android"
		],
		description: "Built a comprehensive image editing application using React Native with advanced camera integration and image processing capabilities. Implemented state management using Redux, Redux Toolkit, and Jotai to efficiently handle complex application state and user interactions. Utilized TanStack Query for efficient data fetching, caching, and synchronization with backend services. Developed custom image processing algorithms and integrated cloud storage solutions for seamless image upload and retrieval. Created Redux middleware for handling asynchronous operations and implemented RxJS for reactive programming patterns. Ensured cross-platform compatibility and optimized performance for both iOS and Android devices."
	},
	2: {
		title: "MyWebLink",
		type: "Web Application",
		role: "Software Developer",
		image: "https://www.portal.weblinkltd.com/frontend/images/logo.png",
		technologies: [
			{ name: "Next.js", icon: "devicon-nextjs-original" },
			{ name: "Node.js", icon: "devicon-nodejs-plain" },
			{ name: "MongoDB", icon: "devicon-mongodb-plain" },
			{ name: "HTML", icon: "devicon-html5-plain" },
			{ name: "CSS", icon: "devicon-css3-plain" },
			{ name: "Bootstrap", icon: "devicon-bootstrap-plain" },
			{ name: "jQuery", icon: "devicon-jquery-plain" }
		],
		keyFeatures: [
			"SAAS product development as full stack developer",
			"User-friendly Dashboard for end users",
			"Modular code architecture for easy feature addition",
			"AJAX and JSON integration for request/response processing",
			"Input validation and user tracking procedures",
			"Large-scale e-commerce website deployment",
			"Client-server architecture implementation"
		],
		description: "Designed and developed a SAAS product for the company as a full stack developer. Used HTML, CSS, Bootstrap, jQuery along with backend NodeJS and MongoDB. Helped company to boost revenue by providing user friendly Dashboard for end users. Implemented Code in modular fashion so that there will no issue arise while adding new feature or modifying existing feature. Used AJAX, JSON with jQuery for request data and response processing. Formulated procedures for different activities such as input validation and user tracking. Constructed a robust large-scale e-commerce website, deployed on a client-server architecture, to deliver a seamless and scalable online shopping experience."
	},
	3: {
		title: "E-commerce Website",
		type: "Web Application",
		role: "Personal Project",
		image: "https://miro.medium.com/1*VNoETQG1aBwujmj9qMBbLQ.png",
		technologies: [
			{ name: "React", icon: "devicon-react-original" },
			{ name: "Node.js", icon: "devicon-nodejs-plain" },
			{ name: "Express", icon: "devicon-express-original" },
			{ name: "Socket.io", icon: "devicon-socketio-original" },
			{ name: "AWS", icon: "devicon-amazonwebservices-original" },
			{ name: "Firebase", icon: "devicon-firebase-plain" },
			{ name: "Stripe", icon: "devicon-stripe-original" }
		],
		keyFeatures: [
			"Product management on both Web and Mobile platforms",
			"JSON RESTful API service with OAuth authentication",
			"AWS EC2 and S3 deployment for Development and Production",
			"Comprehensive admin dashboard for products, deliveries, and sales",
			"Advanced filtering and search functionalities",
			"Firebase authentication and admin privilege management",
			"Stripe API integration for payment processing"
		],
		description: "Developed product from scratch & manage it on both Web and Mobile platforms. Developed JSON RESTful API service for mobile app in two-month period, including OAuth, user's profiles and etc (Node.js, Express, Socket). Build and release Ec2 instances for Development and Production environment. Created a comprehensive admin dashboard to manage products, deliveries, sales, and customer information, enhancing overall operational efficiency. Improved the user experience with advanced filtering and search functionalities, ensuring a more intuitive and streamlined navigation process. Integrated Firebase for secure authentication and admin privilege management, and utilized the Stripe API for seamless payment processing."
	},
	4: {
		title: "Doctor Appointment",
		type: "Web Application",
		role: "Personal Project",
		image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/367a6c122713367.Y3JvcCw2OTAzLDU0MDAsMTUzLDA.jpg",
		technologies: [
			{ name: "Next.js", icon: "devicon-nextjs-original" },
			{ name: "Strapi", icon: "devicon-strapi-original" },
			{ name: "Cloudflare", icon: "devicon-cloudflare-original" },
			{ name: "Kinde", icon: "devicon-react-original" }
		],
		keyFeatures: [
			"Responsive frontend using Next.js",
			"Secure authentication with Kinde/auth",
			"Scalable backend using Strapi",
			"Cloudflare integration for performance and security",
			"Dynamic scheduling features for appointments",
			"Book, reschedule, and cancel appointments functionality",
			"Data security and compliance best practices"
		],
		description: "Designed and implemented a responsive frontend using Next.js, ensuring a seamless user experience for scheduling and managing doctor appointments. Utilized Kinde/auth to integrate secure and efficient authentication mechanisms, enhancing user login and registration processes. Developed a scalable backend using Strapi, managing and organizing appointment data, user profiles, and medical records efficiently. Leveraged Cloudflare to enhance application performance, ensure high availability, and provide security measures against potential threats. Created and integrated dynamic scheduling features, allowing users to book, reschedule, and cancel appointments with ease. Applied best practices in data security and compliance."
	},
	5: {
		title: "Arise11: Fantasy Cricket App",
		type: "Mobile Application",
		role: "Personal Project",
		image: "img/portfolio/10.jpg",
		technologies: [
			{ name: "React Native", icon: "devicon-react-original" },
			{ name: "Node.js", icon: "devicon-nodejs-plain" },
			{ name: "Express", icon: "devicon-express-original" },
			{ name: "JWT", icon: "devicon-javascript-plain" },
			{ name: "MongoDB", icon: "devicon-mongodb-plain" }
		],
		keyFeatures: [
			"Responsive fantasy cricket application for iOS and Android",
			"State management using Jotai",
			"Robust backend using Node.js and Express",
			"JWT authentication and authorization",
			"Real-time updates and notifications",
			"Live match scores and player statistics",
			"Performance optimization for smooth user experience"
		],
		description: "Designed and built a responsive fantasy cricket application using React Native, ensuring a seamless experience across both iOS and Android platforms. Utilized Jotai for state management within the React Native app, optimizing performance and ensuring efficient handling of user data and app state. Developed a robust backend using Node.js and Express, providing a reliable foundation for handling user requests, managing fantasy league data, and processing transactions. Integrated JWT (JSON Web Tokens) for secure user authentication and authorization, ensuring safe access to user accounts and fantasy league features. Implemented real-time updates and notifications for live match scores and player statistics. Applied best practices in performance optimization and code efficiency, resulting in a responsive and smooth user experience throughout the app."
	},
	6: {
		title: "Job search app",
		type: "Mobile Application",
		role: "Personal Project",
		image: "https://s3-alpha.figma.com/hub/file/5112719990/f43b67c2-f454-42a8-aeab-cf2e759ca4ad-cover.png",
		technologies: [
			{ name: "React Native", icon: "devicon-react-original" },
			{ name: "Expo", icon: "devicon-react-original" },
			{ name: "Redux", icon: "devicon-redux-original" }
		],
		keyFeatures: [
			"Versatile job search application for Android devices",
			"Redux for state management",
			"Expo for streamlined development process",
			"User-friendly and visually appealing interface",
			"Advanced filtering options",
			"Easy-to-use job application features",
			"Robust search and filter functionalities"
		],
		description: "Built a versatile job search application using React Native, ensuring a smooth and consistent user experience for Android devices. Utilized Redux for state management to efficiently handle and synchronize user data, job listings, and application status across the app. Employed Expo to streamline the development process, enabling faster prototyping and deployment of features while maintaining high performance and stability. Created a user-friendly and visually appealing interface, enhancing the job search experience through intuitive navigation, advanced filtering options, and easy-to-use job application features. Developed robust search and filter functionalities to allow users to easily find and apply for job opportunities that match their skills and preferences."
	},
	11: {
		title: "Ludo - Mobile Game Application",
		type: "Mobile Application",
		role: "Zupee Game Application",
		image: "https://static-perf1.zupee.com/blog-images/uploads/2025/10/Ludo-test-Image.webp",
		technologies: [
			{ name: "React Native", icon: "devicon-react-original" },
			{ name: "Kotlin", icon: "devicon-kotlin-plain" },
			{ name: "Swift", icon: "devicon-swift-plain" },
			{ name: "HyperSDK", icon: "devicon-javascript-plain" },
			{ name: "Firebase", icon: "devicon-firebase-plain" }
		],
		keyFeatures: [
			"Cross-platform Ludo game for iOS and Android",
			"Native modules using Kotlin and Swift",
			"HyperSDK for payment processing and UPI integration",
			"Firebase for real-time multiplayer functionality",
			"User authentication and cloud messaging",
			"Smooth animations and game mechanics",
			"Optimized performance for faster load times"
		],
		description: "Developed and published a cross-platform Ludo game application for both iOS and Android platforms using React Native. Implemented native modules using Kotlin for Android and Swift for iOS to enhance game performance and access platform-specific features. Integrated HyperSDK for seamless payment processing and UPI integration, enabling in-app purchases and secure transactions. Utilized Firebase for real-time multiplayer functionality, user authentication, and cloud messaging for game notifications. Implemented smooth animations and game mechanics ensuring responsive gameplay experience across devices. Optimized app performance resulting in faster load times and smooth gameplay experience."
	},
	12: {
		title: "Rummy - Card Game Application",
		type: "Mobile Application",
		role: "Zupee Game Application",
		image: "https://i.pinimg.com/474x/3e/96/52/3e96521fd6a0c384856875935f6b8542.jpg",
		technologies: [
			{ name: "React Native", icon: "devicon-react-original" },
			{ name: "Kotlin", icon: "devicon-kotlin-plain" },
			{ name: "Swift", icon: "devicon-swift-plain" },
			{ name: "HyperSDK", icon: "devicon-javascript-plain" },
			{ name: "Firebase", icon: "devicon-firebase-plain" }
		],
		keyFeatures: [
			"Cross-platform Rummy card game for iOS and Android",
			"Native modules for enhanced game performance",
			"HyperSDK for secure in-game transactions",
			"Firebase for real-time multiplayer functionality",
			"Advanced card game logic and AI opponents",
			"Single-player mode with AI",
			"Optimized memory management for smooth animations"
		],
		description: "Developed and published a cross-platform Rummy card game application for both iOS and Android platforms using React Native. Implemented native modules using Kotlin for Android and Swift for iOS to enhance game performance and card animations. Integrated HyperSDK for seamless payment processing and UPI integration, enabling secure in-game transactions and wallet management. Utilized Firebase for real-time multiplayer functionality, user authentication, and cloud messaging for game invites and notifications. Implemented advanced card game logic and AI opponents for single-player mode. Optimized app performance and memory management for smooth card animations and gameplay."
	},
	13: {
		title: "Micro Drama Shots - Short Video Application",
		type: "Mobile Application",
		role: "Zupee Game Application",
		image: "https://www.awazthevoice.in/upload/news/1761127469zupee_app.webp",
		technologies: [
			{ name: "React Native", icon: "devicon-react-original" },
			{ name: "Kotlin", icon: "devicon-kotlin-plain" },
			{ name: "Swift", icon: "devicon-swift-plain" },
			{ name: "HyperSDK", icon: "devicon-javascript-plain" },
			{ name: "Firebase", icon: "devicon-firebase-plain" }
		],
		keyFeatures: [
			"Cross-platform short video application",
			"Native modules for video processing and camera integration",
			"HyperSDK for premium features and subscriptions",
			"Firebase for video storage and user authentication",
			"Real-time comments and cloud messaging",
			"Video editing features, filters, and effects",
			"Optimized video streaming and playback"
		],
		description: "Developed and published a cross-platform short video application for both iOS and Android platforms using React Native. Implemented native modules using Kotlin for Android and Swift for iOS for video processing, camera integration, and media playback. Integrated HyperSDK for seamless payment processing and UPI integration for premium features and subscriptions. Utilized Firebase for video storage, user authentication, real-time comments, and cloud messaging for user engagement. Implemented video editing features, filters, and effects to enhance user content creation experience. Optimized video streaming and playback performance for smooth user experience across different network conditions."
	},
	14: {
		title: "Astrology - Horoscope & Prediction Application",
		type: "Mobile Application",
		role: "Zupee Game Application",
		image: "https://assets.neoastro.com/assets/neoastrohoroscope-001.webp",
		technologies: [
			{ name: "React Native", icon: "devicon-react-original" },
			{ name: "Kotlin", icon: "devicon-kotlin-plain" },
			{ name: "Swift", icon: "devicon-swift-plain" },
			{ name: "HyperSDK", icon: "devicon-javascript-plain" },
			{ name: "Firebase", icon: "devicon-firebase-plain" }
		],
		keyFeatures: [
			"Cross-platform astrology application",
			"Native modules for calendar integration",
			"HyperSDK for premium horoscope readings",
			"Firebase for user authentication and analytics",
			"Daily horoscope notifications",
			"Personalized horoscope generation",
			"Birth chart calculations and compatibility features"
		],
		description: "Developed and published a cross-platform astrology application for both iOS and Android platforms using React Native. Implemented native modules using Kotlin for Android and Swift for iOS for calendar integration and push notifications. Integrated HyperSDK for seamless payment processing and UPI integration for premium horoscope readings and consultations. Utilized Firebase for user authentication, cloud messaging for daily horoscope notifications, and analytics for user engagement. Implemented personalized horoscope generation, birth chart calculations, and compatibility features. Optimized app performance and data caching for quick access to horoscope predictions and user data."
	},
	9: {
		title: "Insurance Website and Services",
		type: "Web Application",
		role: "Insurance Dekho",
		image: "https://cdn.prod.website-files.com/68022f00177276ddaadfe855/68022f00177276ddaadff014_650376dcc4d411473488e7a9_agentimage1.jpeg",
		technologies: [
			{ name: "React", icon: "devicon-react-original" },
			{ name: "NestJS", icon: "devicon-nestjs-plain" },
			{ name: "Node.js", icon: "devicon-nodejs-plain" }
		],
		keyFeatures: [
			"Comprehensive insurance website and services platform",
			"User-friendly interfaces for product browsing",
			"Quote generation and policy management",
			"Secure payment gateways integration",
			"Robust authentication and authorization systems",
			"Admin dashboards for policy and claims management",
			"Compliance with insurance regulations"
		],
		description: "Developed a comprehensive insurance website and services platform using React for the frontend and NestJS for the backend. Designed and implemented user-friendly interfaces for insurance product browsing, quote generation, and policy management. Integrated secure payment gateways and policy management systems for seamless insurance transactions. Implemented robust authentication and authorization systems to protect user data and policy information. Created admin dashboards for managing policies, claims, and customer information efficiently. Ensured compliance with insurance regulations and implemented data security best practices."
	},
	10: {
		title: "Automated Deployment Pipeline",
		type: "DevOps",
		role: "DevOps AWS Basic",
		image: "img/portfolio/4.jpg",
		technologies: [
			{ name: "AWS", icon: "devicon-amazonwebservices-original" },
			{ name: "Docker", icon: "devicon-docker-plain" },
			{ name: "Jenkins", icon: "devicon-jenkins-plain" },
			{ name: "CI/CD", icon: "devicon-git-plain" }
		],
		keyFeatures: [
			"Fully automated deployment pipeline",
			"AWS EC2 and S3 deployment",
			"CI/CD pipelines with AWS CodePipeline and Jenkins",
			"Automated testing and integration",
			"Reduced deployment times",
			"Error minimization through automation",
			"Performance monitoring and optimization"
		],
		description: "Created and implemented a fully automated deployment pipeline for a web application, streamlining the release process and reducing manual intervention. Utilized AWS services to deploy and manage the web application, including EC2 and S3 ensuring high availability and scalability. Set up CI/CD pipelines using tools like AWS CodePipeline and Jenkins, enabling automated testing, integration, and deployment of code changes. Reduced deployment times and minimized errors by automating repetitive tasks and integrating automated testing and validation steps into the deployment process. Monitored the performance of the deployment pipeline, identified bottlenecks, and implemented optimizations to improve overall efficiency and reliability of the deployment process."
	}
};

// Modal Functions
function openProjectModal(projectId) {
	var project = projectsData[projectId];
	if (!project) {
		console.error('Project not found:', projectId);
		return;
	}

	// Store scroll position
	scrollPosition = $(window).scrollTop();
	
	// Lock body scroll
	$('body').css({
		'overflow': 'hidden',
		'position': 'fixed',
		'top': '-' + scrollPosition + 'px',
		'width': '100%'
	});

	// Populate modal with project data
	$('#modalProjectTitle').text(project.title);
	$('#modalProjectImage').attr('src', project.image).attr('alt', project.title);
	$('#modalProjectType').text(project.type);
	$('#modalProjectRole').text(project.role);

	// Populate technology stack
	var techStackHtml = '';
	project.technologies.forEach(function(tech) {
		techStackHtml += '<div class="tech-item" title="' + tech.name + '">';
		techStackHtml += '<i class="' + tech.icon + '"></i>';
		techStackHtml += '<span>' + tech.name + '</span>';
		techStackHtml += '</div>';
	});
	$('#modalTechStack').html(techStackHtml);

	// Populate key features
	var featuresHtml = '';
	project.keyFeatures.forEach(function(feature) {
		featuresHtml += '<li>' + feature + '</li>';
	});
	$('#modalKeyFeatures').html(featuresHtml);

	// Populate description
	$('#modalProjectDescription').html('<p>' + project.description + '</p>');

	// Show modal with animation
	$('#projectModalOverlay').addClass('show').fadeIn(300);
	setTimeout(function() {
		$('#projectModal').css({
			'transform': 'scale(1)',
			'opacity': '1'
		});
	}, 10);
}

function closeProjectModal() {
	// Hide modal with animation
	$('#projectModal').css({
		'transform': 'scale(0.9)',
		'opacity': '0'
	});
	
	setTimeout(function() {
		$('#projectModalOverlay').removeClass('show').fadeOut(200);
	}, 200);

	// Restore body scroll
	$('body').css({
		'overflow': '',
		'position': '',
		'top': '',
		'width': ''
	});
	$(window).scrollTop(scrollPosition);
}

// Event Listeners
$(document).ready(function() {
	// Portfolio card click handlers
	$('.portfolio-link').on('click', function(e) {
		e.preventDefault();
		var projectId = $(this).data('project-id');
		if (projectId) {
			openProjectModal(projectId);
		}
	});

	// Close button click
	$('#modalCloseBtn').on('click', function(e) {
		e.preventDefault();
		closeProjectModal();
	});

	// Overlay click to close
	$('#projectModalOverlay').on('click', function(e) {
		if ($(e.target).is('#projectModalOverlay')) {
			closeProjectModal();
		}
	});

	// ESC key to close
	$(document).on('keydown', function(e) {
		if (e.keyCode === 27 && $('#projectModalOverlay').is(':visible')) {
			closeProjectModal();
		}
	});
});
