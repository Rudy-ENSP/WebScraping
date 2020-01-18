const scrape = require('website-scraper');
const SaveToExistingDirectoryPlugin = require('website-scraper-existing-directory');

function scraper (url){

  var table=url.split('/')
  const options = 
  {
      urls: [
        {url:url, filename: table[2]+'.html'},
        
        
      ],
      directory: 'C:\Users\Rudy\Documents',
      plugins: [ new SaveToExistingDirectoryPlugin() ],
      sources: [
          {selector: 'link[rel="stylesheet"]', attr: 'href'},
          {selector: 'script', attr: 'src'}
        ],
        subdirectories: [
          {directory: 'js', extensions: ['.js']},
          {directory: 'css', extensions: ['.css']}
        ]
  
  }
;
const result =  scrape(options);

}

var urls=['https://nodejs.org/en/about/','https://www.typescriptlang.org/docs/home.html','http://javascript.info/','https://www.w3.org/developers/tools/']
var i=0;

while (i<urls.length) {
scraper(urls[i])
i++
}
