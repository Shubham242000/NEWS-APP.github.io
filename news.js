
// news container grabbed
let allnews = document.getElementById("accordionExample");


// get request
const xhr = new XMLHttpRequest();
//  ajax get request
xhr.open('GET',`http://newsapi.org/v2/top-headlines?country=in&apiKey=3ad7b4f86928410688934965fe57ea2b`,true);

xhr.onload = function (){
    
        let json = JSON.parse(this.responseText);
        let articles  = json.articles;
        
        let newshtml = "";
        articles.forEach( function(element,index) {
        
            let news = ` <div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                               ${element["title"]}
                            </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                ${element["content"]} 
                                <a href = ${element["url"]} target = "_blank"> Read More Here </a>
                            </div>
                          </div>
                         </div>`;
            newshtml += news;
        
       
        });
        allnews.innerHTML = newshtml;
   
}

xhr.send();

document.getElementById("footer").addEventListener("click",abc);
function abc()
{
    window.open("https://www.linkedin.com/in/shubham-shrivastava-2000/");
}