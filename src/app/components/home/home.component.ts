import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quoteList: any[];
  randomQuote: string;
  getRandomQuote: any;
  constructor() { }

  ngOnInit() {
    this.quoteList = [
      // tslint:disable-next-line:max-line-length
      `There’s a special place in Hell. It’s really hip. Very exclusive.`,
      `What has four legs in the morning, two legs at noon, and three legs in the evening? I don’t know, but I trapped it in my bedroom. Send help.`, `Eating meat is a difficult moral decision. Because it's stolen, that meat. You should apologize.`, `If I said you had a beautiful body, would it even matter because we are so insignificant in this vast, incomprehensible universe?`, `Pain is just weakness leaving the body. And then being replaced by pain. Lots of pain.`, `Fun game: Say 'toy boat' over and over. Do it for the rest of your life. Retreat from society, and live on alms. Whisper, 'toy boat', as you die.`, `If you love someone, set them free. Set them free now. This is the police, and we have you surrounded.`, `Sticks and stones may break my bones, but words will never quite describe the pain.`, `You can lead a horse to water, and you can lead a horse into water, and you can swim around with the horse and have fun.`, `Look. Up in the sky. It's a bird. It's a plane. No. It's just the void. Infinite and indifferent. We're so small. So very very small.`, `A journey of a thousand miles begins with a single command from a satellite-activated mind control chip.`, `You won't sleep when you're dead, either.`, `It’s not the size of the dog in the fight. It’s the size of the other dog in the fight.`, `The reason we say “bless you” after someone sneezes is because we know they will die someday.`, `I let my haters be my motivators. Mostly they tell me I suck, and then I get sad. This was a terrible idea.`, `History is written by the victors. And then forgotten by the victors. And then the victors die too.`, `Don’t bring a knife to a gun fight. Don’t bring a gun to a gun fight, either. Stop going to gun fights altogether.`, `Get the body you’ve always wanted. We know where it’s buried, and can lend you a shovel.`, `There are hot singles in your area, and they all died exactly 20 years ago, on a night just like tonight.`, `You know what would be great? If someone made a movie showing Spiderman's origin story. I'd love to finally see that on the big screen.`, `Regret nothing. Until it is too late. Then, regret everything.`, `Trust everyone.`, `Now is your chance. Well, that was it. It's over. Did you do it? Have you achieved what you wanted? No? Oh well.`, `Dare to dream. Do it. We dare you. Go ahead, dream. It’ll be fine. We promise.`, `If you love something, set it free. If it doesn’t come back, it probably died of sadness because it thought you loved it.`, `When one door closes, another door closes. Then the windows all close, and the rest of the doors. The house is alive, and it doesn’t know you, and it is scared.`, `Breathe in. Breath out. Breathe in. Breathe out. Don't breathe. Don't breathe. Don't breathe. Don't breathe.`, `Work like it hurts, love like you need money, dance like the government is watching.`, `*static*`, `Do not bite the hand that feeds you. Grab it first. Take the keys. Set yourself free. Then bite the hand, and run.`, `It's always darkest before the dawn. We are often reassured through bad analogies, created by people who are totally wrong about how the sun works.`, `Step 1: Separate your lips. Step 2: Use facial muscles to pull back corners of mouth. Step 3: Widen your eyes. This is how to be happy.`

    ];
      // Random Quote Function
      this.getRandomQuote = (quotes) => {
        this.randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      };

      // Call Quote Function
      this.getRandomQuote(this.quoteList);


      // Repeat every 20 seconds
      /*
      setInterval(() => {
        this.randomQuote = this.quoteList[Math.floor(Math.random() * this.quoteList.length)];
      }, 20000);
      */
  }
}
