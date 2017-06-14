var express = require('express');
var morgan = require('morgan');
var path = require('path');
 
var app = express();
app.use(morgan('combined'));

var artOne={
    title: 'Anto - Article one Serverjs',
    heading: 'Article One',
    date: '14 jun 1983',
    content:  `
    <p>
            Paragraph 1:
            This is the content for my first article. This is the content for my first article. This is the content for my first article
            </p>
            
            <p>
            Paragraph 2:
                This isthe second paragraph
            </p>
            <p>
                Paragraph 3:
                This is the third paragraph
            </p>'
    
};

function createTemplate (data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;

var htmlTemplate='

<html>
    <head>
        <title>${title}</title>    
<meta name='viewport' content='width-device-width, initial-scale=1' >
<link href="/ui/style.css" rel="stylesheet" />

    </head>
    <body>
        <div class='stylecontainer'>
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        
        <div>
            ${content}
            
        </div>
        </div>
    </body>
</html>

';
return htmlTemplate
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/htmlpage', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'htmlpage.html'));
});


app.get('/art-one', function(req,res){
    res.send(createTemplate(artOne)));
});

app.get('/art-two', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'art-two.html'));
});

app.get('/art-three', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'art-three.html'));
});

app.get('/art-three', function(req,res){
    res.send('third arcile will be served here');    
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
