/* Themes should be listed here */
var themesList = [
    {
        title : "Fleur Default Theme",
        version : 0.1,
        author : "Pomke Nohkan <pomke@pangur.com.au>",
        template : 'themes/fleur/index.html',
    }

];

var backendList = [
    {
        title : "Static Files",
        code : "/backends/static.js"
    },
    {
        title : "Gists",
        code : "/backends/gist.js"
    }
];

var themes = {};
for(var i=0; i < themesList.length; i++) {
    var t = themesList[i];
    themes[t.title] = t;
}
var backends = {};
for(var i=0; i < backendList.length; i++) {
    var b = backendList[i];
    backends[b.title] = b;
}
