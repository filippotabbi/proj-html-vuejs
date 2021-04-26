Vue.config.devtools = true;

var app = new Vue({
  el: '#root',

  data: {
    index: 0,
      menu: [
      {
				titolo: "Home",
      },
			{
				titolo: "About Us",
				// items: [ {name:"History",
        //           name:"Discovers",
        //           name:"Faculty Leaders"
        // },]
			},
      {
				titolo: "Academics",
			},
      {
				titolo: "Courses",

			},
      {
				titolo: "News",

			},
    ],
    cardsvg: [
      {
        svg:"svg-0.svg",
        title:"Online Coaching",
        text:"Lorem ipsum is simply dummy text of the print ing and typesetting has been the industrys.",
      },
      {
        svg:"svg-1.svg",
        title:"Consultation",
        text:"Lorem ipsum is simply dummy text of the print ing and typesetting has been the industrys.",
      },
      {
        svg:"svg-2.svg",
        title: "Life programs",
        text:"Lorem ipsum is simply dummy text of the print ing and typesetting has been the industrys.",
      },
    ],
    cardcourses: [
      {
        illustration:"https://demo.tophivetheme.com/wordpress/picwik/academy/wp-content/uploads/sites/4/2019/09/bruce-mars-FWVMhUa_wbY-unsplash.jpg",
        price: "Free",
        title:"UI Animation using Sketch 3, Principle App, and Flinto",
        text:"This online photography course will teach you how to take amazing images and even sell...",
        credits:"Course by : University",
      },
      {
        illustration:"https://demo.tophivetheme.com/wordpress/picwik/academy/wp-content/uploads/sites/4/2019/08/course-1-2.jpg",
        price: "Free",
        title:"The Ultimate Drawing Course – Beginner to Advanced",
        text:"This online photography course will teach you how to take amazing images and even sell...",
        credits:"Course by : University",
      },
      {
        illustration:"https://demo.tophivetheme.com/wordpress/picwik/academy/wp-content/uploads/sites/4/2019/08/william-thomas-ny6tO4ItOEY-unsplash.jpg",
        price: "Free",
        title:"Your Complete Guide to Photography",
        text:"This online photography course will teach you how to take amazing images and even sell...",
        credits:"Course by : University",
      },
    ],
    cardlatest: [
      {
        image:"https://demo.tophivetheme.com/wordpress/picwik/academy/wp-content/uploads/sites/4/2019/08/news-3-2.jpg",
        text:"Peer pressure changes how teens tackle inequality",
      },
      {
        image:"https://demo.tophivetheme.com/wordpress/picwik/academy/wp-content/uploads/sites/4/2019/08/news-2-2.jpg",
        text:"Lewisham Live Mixtape celebrates borough’s",
      },
      {
        image:"https://demo.tophivetheme.com/wordpress/picwik/academy/wp-content/uploads/sites/4/2019/08/news-1-2.jpg",
        text:"Turner Prize winner’s work to open Gold on Film festival",
      },
    ],
  },
  methods: {
  
  }
})
