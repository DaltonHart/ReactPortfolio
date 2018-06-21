import React, { Component } from 'react';
import Sponsor from './Sponsor.js'


class SponsorList extends Component {
  
    render() {
      var sponsors = [
        {
          name: 'Khahn Tran',
          relation: 'associate',
          message: 'Dalton’s kindness and intelligence is beyond anyone that I’d known. He is like a brother that we can go to when we need help. He outshines everyone in our workplace and is always thriving to better himself. I personally believe Dalton knows everything about technology, ever since I met Dalton, I no longer have to google search tech questions. As a manager , he is known to us as the to-go guy, which mean we go to him for everything and he loves it! It’s a blessing to have such a wonderful person in our life!',
          img: '/images/khahn.jpg'
        },
        {
          name: 'Giselle Canada',
          relation: 'Coworker',
          message: 'After everything already said about Dalton it’s clear to see the impact he has had and continues to have on so many different people. What you may not know is he recently moved from his hometown to the Bay Area, taking a huge leap of faith with his career and even through all of that stress and transition he still has had the same impact on a whole new group of people, including me. When I met him I instantly respected and admired him just by the way he carries himself. As my close peer, he drives me to be the best so I can maybe be as great as him one day!',
          img:'/images/giselle.jpg',
        },
        {
          name: 'Duncan Nankervis',
          relation: 'Friend',
          message: "I met Dalton through my girlfriend 4 years ago, and in those short 4 years I have gained a brother. I owe a lot to my friend, Dalton. He is a selfless, generous, and wonderful individual. He has one of the best work-ethics I have ever seen, and goes full speed into helping others achieve their dreams. If there is one person I know that deserves the opportunity to follow his own dreams for a change, it would be Dalton, one of the most important people I have the blessing to have in my life. I endorse this guy 100%, his word is good, and his intentions pure.",
          img: '/images/duncan.jpg',
        },
        {
          name: 'Jessica Amber',
          relation: 'Friend',
          message: "Dalton has done so much for me, that I can't even put it all to words. He is the most understanding, forgiving, kind, and honest man I have ever met, and I will do whatever I can to make sure that he can get to where he wants to be. Dalton is the kind of man who, no matter how difficult the problem, will not only find the solution, but teach you how to find the solution as well. He has never given up on anyone or anything, because he knows that there is always a work around, or a different way to look at the situation.",
          img: 'images/jessica.jpg',
        },
      ]
     

      const refactoredsponsors = sponsors.map(sponsor => {
        return <Sponsor sponsor={sponsor} />;
      });

      return (
        <section id="testimonies" class="row ">
          <h2>Testimonies</h2>
              <section class="row sponsors">
                  {refactoredsponsors}
                      </section>
                    </section>
      )
    }
  }
  
  export default SponsorList;