document.addEventListener('DOMContentLoaded' , function(){
    const quoteButton = document.getElementById('quote-button');
    const quote = document.getElementById('quote');
    const title = document.getElementById('title');
    
    fetchQuote();

    quoteButton.addEventListener('click' , function(){
        fetchQuote();
    });

    function fetchQuote(){
        quote.style.opacity = 0;
        title.style.opacity = 0;
        fetch("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1" , {
            // This is required for generate a new quote every time button clicked.
            cache: 'no-store' 
        })
        .then(function(r){
            return r.json();
        })
        .then(function(data){
            quote.innerHTML = data[0].content;
            title.innerHTML = data[0].title;
            quote.style.opacity = 1;
            title.style.opacity = 1;
        });
    }
    

    function strip(html){
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }
})

