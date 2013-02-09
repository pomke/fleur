/* This is a backend that reads static files from /posts/.
 * Metadata for posts is stored in /posts/posts.json and the
 * content of each post is stored in /posts/<post-id>.md or
 * /posts/<post-id>.html for markdown and html respectively.
 */
(function() {
    function StaticFileBackend() {
        var self = this;
        self.posts = [];
        self.postDict = {};

        self.init = function($http, conf, next) {
            //set global currentBackend to this, load posts then call next.
            currentBackend = self; 
            self.posts = [];
            self.postDict = {};
            self.$http = $http;
            //load posts, call next
            $http.get('/posts/posts.json').success(function(data){
                self.posts = data;
                angular.forEach(self.posts, function(v) {
                    self.postDict[v.id] = v;
                });
                return next(null, self);
            }).error(function(data) {
                return next(data, null);
            });
        };

        self.getPosts = function(next) {
            //return post meta-data, everything except the body, that will be
            //fetched on demand by getPost.
            return next(self.posts);
        };

        self.getPost = function(id, next) {
            //fetch the body of the post and set it on the post, also return it
            var p = self.postDict[id];
            var ext = '.html'; if(p.type=='md') ext = '.md';
            self.$http({method:'GET',url:'/posts/'+id+ext,cache:true}).success(
                    function(data) {
                        p.content = data;
                        if(p.type=='md') p.content = marked(p.content);
                        return next(data, null);
                    }).error(function(data) {
                        return next(data, null);
                    });
            return next(self.postDict[id]);
        };
    };

    //Create singleton instance and add it's init to the backends object
    var b = new StaticFileBackend();
    backends['Static Files'].init = b.init;
})();
