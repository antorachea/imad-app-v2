var express = require('express');
var morgan = require('morgan');
var path = require('path');
 
var app = express();
app.use(morgan('combined'));

var Articles = {
'artOne': {
    title: 'Article one Anto',
    sar: 'Article one',
    date: 'Jun 14, 2017',
    content: `  <p>
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
            </p>
    `
    
},
'artTwo': {
    title: 'Article two Anto',
    sar: 'Article two',
    date: 'Jun 14, 2017',
    content: `  <p>
            Paragraph 1:
            This is the content for my second article. This is the content for my first article. This is the content for my first article
            </p>
            
            <p>
            Paragraph 2:
                This isthe second paragraph
            </p>
            <p>
                Paragraph 3:
                This is the third paragraph
            </p>
    `
    
},
'artThree': {
    title: 'Article 3 Anto',
    sar: 'Article one',
    date: 'Jun 14, 2017',
    content: `  <p>
            Paragraph 1:
            This is the content for my third article. This is the content for my first article. This is the content for my first article
            </p>
            
            <p>
            Paragraph 2:
                This isthe second paragraph
            </p>
            <p>
                Paragraph 3:
                This is the third paragraph
            </p>
    `
    
}
};
function createTempalate(data){
    var date=data.date;
    var title=data.title;
    var head=data.sar;
    var content=data.content;
    
var htmlTemp= `
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
            ${head}
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
`;
return htmlTemp;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/htmlpage', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'htmlpage.html'));
});
app.get('/:articleName', function(req,res){
   // articleName == article name
   var articleName = req.param.articleName;
   res.send(createTempalate(Articles[articleName]));
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