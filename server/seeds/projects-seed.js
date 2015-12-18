Meteor.startup(function () {
  console.log(Projects.find().count() + ' projects');
  console.log(Meteor.users.find().count() + ' users');

  // Seed Projects database
  if (Projects.find().count() === 0) {
    // var items = JSON.parse(Assets.getText('seeds/projects.json'));
    var projects = [
      {
        "name": "Blue Chair Bay Rum",
        "projectId": "bluechairbay",
        "agency": "Carrot",
        "year": 2014,
        "tags": ["Front-end Development", "UX"],
        "details": ["lorem ipsum"],
        "slides": [
          "slide-0.png",
          "slide-1.png",
          "slide-2.png",
          "slide-3.png",
          "slide-4.png",
          "slide-5.png",
          "slide-6.png",
          "slide-7.png"
        ]
      },
      {
        "name": "MTV",
        "projectId": "mtv",
        "agency": "JOEY",
        "year": 2014,
        "tags": [
          "Native App",
          "Visual Design"
        ],
        "details": [
          "MTV's Digital Product Head at Viacom International requested visual design for their upcoming iOS app with a tight turnaround(3 days).This app, scheduled for release in Summer 2014, will stream apps to the user in a smart radio-esque style. You put in an artist you want to watch or keywords you 're looking for like \"white dress\" or \"fisheye\" and it produces a non-stop stream of music videos."
        ],
        "slides": [
          "slide-0.png",
          "slide-1.png",
          "slide-2.png",
          "slide-3.png",
          "slide-4.png",
          "slide-5.png",
          "slide-6.png",
          "slide-7.png"
        ]
      },
      {
        "name": "Macy's",
        "projectId": "macys",
        "agency": "Studiografica",
        "year": 2013,
        "tags": [
          "Web App",
          "Project Management",
          "Front-end Development",
          ".NET implementation",
          "Touch Sensitive"
        ],
        "details": [
          "An in-store Macy 's training app for employees specialized for the iPad 2. The first project was Macy 's Diamonds educated employees on the physical properties of diamonds to improve sales tactics. Tests were developed with customized Jquery Mobile forms to quiz and track employees ' progress which were recorded live using a custom.Net framework. This project was very successful which brought on many brands underneath the Macy 's brand umbrella including Bulova, Caravelle, Tommy Hilfiger, and others. It also peaked interest with Citizen who later hired our services to implement a similar platform to show[#!/work=citizen](their digital campaigns)."
        ],
        "slides": [
          "slide-0.png",
          "slide-1.png",
          "slide-2.png",
          "slide-3.png",
          "slide-4.png",
          "slide-5.png"
        ]
      },
      {
        "name": "Cîroc Vodka",
        "projectId": "ciroc",
        "agency": "Studiografica",
        "year": 2011,
        "tags": ["Front-end Development", "Project Management", "Touch Sensitive"],
        "details": [
          "P.Diddy 's media team BlueFlame used Studiografica to build Ciroc.com to help promote the brand, so I had the opportunity to build a site for a well known vodka brand.This project ran smoothly on iPads and used hashbang address bar manipulation to seamlessly fade between different pages of the site.All code was written without a framework. My favorite part of this project was the drink detail view.When you clicked the next or previous button it would change the URL hash to keep it bookmarkable and the drinks would slide into view horizontally."
        ],
        "slides": [
          "slide-0.png",
          "slide-1.png",
          "slide-2.png",
          "slide-3.png",
          "slide-4.png",
          "slide-5.png"
        ]
      },
      {
        "name": "G-Shock",
        "projectId": "g-shock",
        "agency": "Studiografica",
        "year": 2012,
        "tags": [
          "Project Management",
          "Front-end Development"
        ],
        "details": [
          "The G-Shock website was 1 of 3 websites that were made for Casio in a period spanning~1 month.[http://www.protrek.casio.com](Protrek), [http://edifice.casio.com](Edifice),and [http://www.baby-g.com](Baby-G) were all developed nearly simultaneously. One of my favorite things about developing this site was the watches section. It was a serious stepfor Casio towards progressive enhancement, sofinally leaving many graphical elements behind and using CSS to do it 's job.I also developed custom CSS and JS so no matter what width and height the watch came infrom the back-end it always fit perfectly into the grid views."
        ],
        "slides": [
          "slide-0.png",
          "slide-1.png",
          "slide-2.png",
          "slide-3.png",
          "slide-4.png",
          "slide-5.png"
        ]
      },
      {
        "name": "Tambaran",
        "projectId": "tambaran",
        "agency": "JOEY",
        "year": "2010 — 2013",
        "tags": [
          "Project Management",
          "Custom E-Blasts",
          "User Interface",
          "User Experience",
          "Front-end Development"
        ],
        "details": [
          "As project manager I brought on visual designer[http://josephmueller.net](Joseph Mueller) and web developer[http://efrat.me](Efrat Weidberg) to createa site for Maureen Zarember using Joomla that was easy to look at and use  for potential tribal art buyers. The site features a buyers-only section where Ms. Zarember can control what potential buyers see. I continue to handle work  for Tambaran for front-end changes to the site and custom e-blasts for art festivals and gallery shows."
        ],
        "credits": [
          {
            "name": "Joseph Mueller",
            "role": "Tambaran.com Visual Designer",
            "url": "http://josephmueller.net"
          },
          {
            "name": "Efrat Weidberg",
            "role": "Tambaran.com Back-end Developer",
            "url": "http://efrat.me"
          }
        ],
        "slides": [
          "slide-0.png",
          "slide-1.png",
          "slide-2.png",
          "slide-3.png",
          "slide-4.png",
          "slide-5.png",
          "slide-8.png",
          "slide-9.png",
          "slide-10.png",
          "slide-12.png"
        ]
      },
      {
        "name": "W&W Glass Pilkington",
        "projectId": "pilkington",
        "projectId": "wwglass",
        "agency": "Studiografica",
        "year": 2011,
        "tags": [
          "Front-End Development",
          "User Interface",
          "User Experience",
          "Touch"
        ],
        "details": [
          "[http://wwglass.com/pilkington](Pilkington Planar structural glass systems) have a proven track record in the most demanding applications.Architects know they can call on Pilkington to create roofs, canopies, soaring facades or even clad entire buildings in glass and receive a total commitment for the design, supply and warranty of the entire, integrated system. W & W Glass came to Studiografica to create a cross platform web portfolio to show off their beautiful glass structures.They had wonderful photography of their work which always makes me excited.Once the design came through I made my own tweaks to the portfolio section to make sure there was a good experience on tablets. Aside from appropriately responding to all touch, the portfolio section also featured a list of locations that used W & W and Pilkington.With your finger you could easily move up and down the list then touch the different shots associated with that particular site. The animations between locations looked great and remains one of my favorite things I ever worked on at Studiografica."
        ],
        "slides": [
          "slide-0.png",
          "slide-1-1.png",
          "slide-2.png",
          "slide-3.png",
          "slide-4.png",
          "slide-4-1.png",
          "slide-5.png",
          "slide-6.png"
        ]
      },
      {
        "name": "David's Bridal",
        "projectId": "davids-bridal",
        "agency": "JOEY",
        "year": 2012,
        "tags": [
          "Project Management",
          "Front-End Design",
          "Front-End Development",
          "User Interface",
          "User Experience"
        ],
        "details": [
          "During my tenure at a startup called OurWeddingDay I helped design the original Vendor Platform what would later be purchased by David 's Bridal. I changed my focus to development after OurWeddingDay and David 's Bridal but once David' s Bridal got around to using what I helped build they hired me to help. I designed, developed, and helped implement the brand new bride-facing and admin-facing Vendor Platform that is currently in use."
        ],
        "slides": [
          "slide-2.png",
          "slide-0.png",
          "slide-1.png",
          "slide-3.png",
          "slide-4.png",
          "slide-5.png"
        ]
      },
      {
        "name": "Citizen",
        "projectId": "citizen",
        "agency": "Studiografica",
        "year": 2013,
        "tags": [
          "Web App",
          "Project Management",
          "Front-end Development",
          ".NET implementation",
          "Touch Sensitive"
        ],
        "details": [
          "Focusing on Citizen's Eco-Drive line, Studiografica created a touch-interactive presentation for Citizen's digital campaigns to organize and showcase Citizen 's outdoor, in-store, direct and digital advertising. This web app was specialized for the Windows Surface Pro and presented high definition videos, touch-sensitive 3 D image rotators, and front / back ad flipping animations. Built using extending Jquery Mobile, customizing a CSS3 / JS touch slider, and copious amounts of Fig Newtons."
        ],
        "slides": [
          "slide-0.png",
          "slide-1.png",
          "slide-2.png",
          "slide-3.png",
          "slide-4.png",
          "slide-5.png",
          "slide-6.png",
          "slide-7.png",
          "slide-8.png",
          "slide-9.png",
          "slide-10.png",
          "slide-11.png",
          "slide-12.png"
        ]
      },
      {
        "name": "Hard Energy Drink",
        "projectId": "hard",
        "agency": "Studiografica",
        "year": 2012,
        "tags": [
          "Project Management",
          "Front-end Development",
          ".NET Implementation"
        ],
        "details": [
          "The guys from Hard Energy wanted a website to display his alcoholic mixers with visuals and also inform fans of his sponsored parties. The site features an animated header on the front page that flips to the top once you scroll past the main section and also a calendar that displays events for his parties."
        ],
        "slides": [
          "slide-0.png",
          "slide-1.png",
          "slide-2.png",
          "slide-3.png",
          "slide-4.png",
          "slide-5.png"
        ]
      },
      {
        "name": "AOA NY",
        "projectId": "aoa-ny",
        "agency": "JOEY",
        "year": "2010—2013",
        "tags": [
          "Project Management",
          "Custom E-Blasts",
          "Front-end Development"
        ],
        "details": [
          "The Africa Oceania Americas Tribal Art Fair is a client that came about after my work for [#!/work=tambaran](Tambaran Gallery). The site was designed and developed in less than a week. It works across all browsers and features a subtle fading background that changes between examples of art featured at the fair every year. They also use me for graphical e-blasts that appear correct in every email platform."
        ],
        "slides": [
          "slide-0.png",
          "slide-1.png",
          "slide-2.png",
          "slide-3.png"
        ]
      }
    ];
    console.log()
   //  _.each(projects, function (project) {
   //    Meteor.call('insertProject', project);
   // //    Meteor.call('insertProject', {
			// // 	"name": project.name,
			// // 	"projectId": project.projectId,
			// // 	"agency": project.agency,
			// // 	"year": project.year,
			// // 	"tags": project.tags,
			// // 	"details": project.details,
			// // 	"slides": project.slides
			// // });
   //  });
  }
});
