let count = 0;
function changeQuote(){
    let quotes = {
        "Albert Einstein": "“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.”",

        "Jules Renard": "“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”",

        "Pierce Brown": "“Man cannot be freed by the same injustice that enslaved it.”",

        "Deepak Chopra": "“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”"
    };

    let authors = Object.keys(quotes);
    let author = Math.floor(Math.random() * authors.length);
    console.log(author);
    document.getElementById("quote_text").innerHTML = quotes[authors[author]];
    document.getElementById("quote_author").innerHTML = authors[author];

    
    
}