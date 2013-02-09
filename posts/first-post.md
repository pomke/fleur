*Fleur is a beautiful blog engine designed for static hosting.*

Written in html, css and javascript, fleur is designed to provide an easy
to use blog engine which can be served directly from static file hosting
without need for a database or server-side processing. 

**Fleur comes with several backends for holding your posts**:

* 'Static Files': The default, posts are written as individual html or markdown
files in a directory. This entry you are reading is located in /posts/first-post.md

 * 'Gists': Blog posts are written using github gists.

**Fleur has themes** which dictate everything you see, everything can be 
changed quite simply with html and css.

**Fleur does comments** by integrating with Disqus

**Fleur does RSS** 


<code class='prettyprint'>
    function refreshLess() {
        var links = document.getElementsByTagName('link');
        var typePattern = /^text\/(x-)?less$/;
        less.sheets = [];
        for (var i = 0; i < links.length; i++) {
            if (links[i].rel === 'stylesheet/less' || (links[i].rel.match(/stylesheet/) &&
                    (links[i].type.match(typePattern)))) {
                        less.sheets.push(links[i]);
                    }
        }
        less.refresh();
    };
</code> 
