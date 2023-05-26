class Quotes extends Displaytime{
    constructor(){
        super()
        this.quotesList =['"Give every day the chance to be the most beautiful day of your life."','"Nobody can go back and start a new beginning, but anyone can start today and make a new ending."','"The day will be what you make it, so rise, like the sun, and burn."','“Be pleasant until 10 o’clock in the morning, and the rest of the day will take care of itself.”','“In one minute you can change your attitude, and in that minute you can change your entire day.”','"Ruthlessly protect your time."','"The greatest productivity hack is the willingness to turn people down."','"If you did 4 hours of focused work every day you’d be ahead of 99% of people who multitask for 8 hours."']
        this.authorList = ['Mark Twain','Maria Robinson','William C. Hannan','Elbert Hubbard','Spencer Johnson','Anthony Pompliano','Mark Manson','Dan Go']
    }
    changeQuote(){
        if(currentHour>4){
           const randomIndex = Math.floor(Math.random()*this.quotesList.length)
           const quoteShowingId = document.querySelector('.bottom-center') 
           const quoteShowing = this.quotesList[randomIndex]
           quoteShowingId.textContent=quoteShowing;
        }
    }
}

const quoteItem = new Quotes
console.log(quoteItem.changeQuote());