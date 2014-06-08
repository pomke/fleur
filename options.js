/* Themes should be listed here */
var themesList = [
    {
        title : "Fleur Default Theme",
        version : 0.1,
        author : "Pomke Nohkan <pomke@pomke.com>",
        template : 'themes/fleur/index.html',
    },
    {
        title : "Pomke's blog theme",
        version : 0.1,
        author : "Pomke Nohkan <pomke@pomke.com>",
        template : 'themes/pomke/index.html',
    }


];
var currentBackend;
var backendList = [
    {
        title : "Static Files",
        code : "/backends/static.js",
        conf : []
    },
    {
        title : "Gists",
        code : "/backends/gist.js",
        conf : [
            { id : 'github', label : 'Github Account', type : 'text' }
        ]
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
