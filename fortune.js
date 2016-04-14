//The Fortune Teller outputs a random quote from a list of 10 different quotes. 

function fortuneTeller() {
    var quotes = [
        "Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill",
        "Strive not to be a success, but rather to be of value.",
        "Don't cry because it's over, smile because it happened.―Dr. Seuss",
        "Be yourself; everyone else is already taken. ― Oscar Wilde",
        "A room without books is like a body without a soul.― Marcus Tullius Cicero",
        "You only live once, but if you do it right, once is enough. -Mae West",
        "Be the change that you wish to see in the world.― Mahatma Gandhi",
        "If you tell the truth, you don't have to remember anything.― Mark Twain",
        "A friend is someone who knows all about you and still loves you.― Elbert Hubbard",
        "It is better to be hated for what you are than to be loved for what you are not.― André Gide, Autumn Leaves"
        ];
        
    var which = Math.floor(Math.random() * 10);
    return quotes[which];
}
console.log(fortuneTeller());