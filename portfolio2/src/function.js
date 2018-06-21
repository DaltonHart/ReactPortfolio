$(document).ready(function() {

  //sanity check
console.log('Im working!');

//function to call particles.json
particlesJS.load('particles-js', 'scripts/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

//scroll function
$(".navBar").find("a").on('click',function(e) {
  e.preventDefault();
  var section = $(this).attr("href");
  $("html, body").animate({
      scrollTop: $(section).offset().top
  });
});

//highlight on scroll
function onScroll(event){
  //find scroll position
  var scrollPos = $(document).scrollTop();
  //run through each navbar item and for each position of the element add and remove class
  $('.navBar a').each(function(){
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    //if position is equal to the elemt attr 
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos){
     //sanitize
      $('.navBar a').children('img').removeClass("active");
     //add class active
      currLink.children('img').addClass("active");
    }
    else {
      //remove class
      currLink.children('img').removeClass("active");
    }
  });
}
//call function
$(document).on('scroll',onScroll);

// Hamburger Script
$('.hamburger').on('click',function(){
  $('.side-container').toggle();
})


// Scripts for Sponsor area 
//array of sponsor objects
var sponsors = [
  {
    name: 'Khahn Tran',
    relation: 'associate',
    message: 'Dalton’s kindness and intelligence is beyond anyone that I’d known. He is like a brother that we can go to when we need help. He outshines everyone in our workplace and is always thriving to better himself. I personally believe Dalton knows everything about technology, ever since I met Dalton, I no longer have to google search tech questions. As a manager , he is known to us as the to-go guy, which mean we go to him for everything and he loves it! It’s a blessing to have such a wonderful person in our life!',
    img: '/assets/khahn.jpg'
  },
  {
    name: 'Giselle Canada',
    relation: 'Coworker',
    message: 'After everything already said about Dalton it’s clear to see the impact he has had and continues to have on so many different people. What you may not know is he recently moved from his hometown to the Bay Area, taking a huge leap of faith with his career and even through all of that stress and transition he still has had the same impact on a whole new group of people, including me. When I met him I instantly respected and admired him just by the way he carries himself. As my close peer, he drives me to be the best so I can maybe be as great as him one day!',
    img:'/assets/giselle.jpg',
  },
  {
    name: 'Duncan Nankervis',
    relation: 'Friend',
    message: "I met Dalton through my girlfriend 4 years ago, and in those short 4 years I have gained a brother. I owe a lot to my friend, Dalton. He is a selfless, generous, and wonderful individual. He has one of the best work-ethics I have ever seen, and goes full speed into helping others achieve their dreams. If there is one person I know that deserves the opportunity to follow his own dreams for a change, it would be Dalton, one of the most important people I have the blessing to have in my life. I endorse this guy 100%, his word is good, and his intentions pure.",
    img: '/assets/duncan.jpg',
  },
  {
    name: 'Jessica Amber',
    relation: 'Friend',
    message: "Dalton has done so much for me, that I can't even put it all to words. He is the most understanding, forgiving, kind, and honest man I have ever met, and I will do whatever I can to make sure that he can get to where he wants to be. Dalton is the kind of man who, no matter how difficult the problem, will not only find the solution, but teach you how to find the solution as well. He has never given up on anyone or anything, because he knows that there is always a work around, or a different way to look at the situation.",
    img: 'assets/jessica.jpg',
  },
]

//call below function
changeSponsor();
// function to change elements on sponsor page
function changeSponsor(){
// itterates through the array of sponsors
    $.each(sponsors,function(i, sponsor){
      //sets a time out sequence for delay
        setTimeout(function(){
          $('.sponsor img').attr('src', sponsors[i].img);
          $('.sponsor-comment ul li:first-child').text(`Name: ${sponsors[i].name}`);
          $('.sponsor-comment ul li:nth-child(2)').text(`Relation: ${sponsors[i].relation}`);
          $('.sponsor-comment ul li:nth-child(3)').text(`"${sponsors[i].message}"`);
          
          
        }, i * 8000);
        
    });
}





/*Scripts for Social area*/
//google maps api to show sf area in Contact area
var map;
var googleMap = function () {
  //custom styled map
  var styledMapType = new google.maps.StyledMapType(
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "weight": 1.5
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#e46f64"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#181818"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1b1b1b"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#606060"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8a8a8a"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#373737"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3c3c3c"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#4e4e4e"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#4174fa"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3d3d3d"
          }
        ]
      }
    ],
    {name: 'Styled Map'});

    var map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 37.790921, lng: -122.401219},
      zoom: 17,
      mapTypeControlOptions: {
        mapTypeIds: ['styled_map']
      }
    });
    //associate the styled map with the map id
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    marker = new google.maps.Marker({
      position: map.center,
      map: map,
    })
}

googleMap();

});