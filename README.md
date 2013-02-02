fleur
=====

*Fleur is a beautiful blog engine designed for static hosting.*

Written in html, css and javascript, fleur is designed to provide an easy
to use blog engine which can be served directly from static file hosting
without need for a database or server-side processing. 

**Fleur is a prototype** and probably isn't be ready to used, infact most of
this README is entirely aspirational.

**Fleur comes with several backends** for holding your posts:

staticFile:  Blog posts are written as individual html files in a directory.
gist: Blog posts are written using github gists.

**Fleur has themes** which dictate everything you see, everything can be 
changed quite simply with html and css.

**Fleur does comments** by integrating with Disqus

**Fleur does RSS** 


Setup
=====

Fleur can be installed directly into your web-server's static root, into
an amazon s3 bucket with a configured domain, into a github website repo, or
any other place that can deliver static file content. 

Viewing the blog for the first time will display the configuration screen 
which will allow you to alter your blog's settings. These should then be
pasted into the head of index.html.  If you ever want to re-configure your 
blog, simply append #configure to the URL.

Development
===========

Fleur alternately comes with a node.js server I use for development, simply
run *npm install express* then *./devserver.js* and you can access 
http://localhost:8000


