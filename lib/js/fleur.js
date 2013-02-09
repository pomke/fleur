function refreshLess() {
    /* run this after adding new stylesheet/less links to the page */
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

angular.module('ng').directive('ngIf', [function () {
  return {
    transclude: 'element',
    priority: 1000,
    terminal: true,
    restrict: 'A',
    compile: function (element, attr, linker) {
      return function (scope, iterStartElement, attr) {
        iterStartElement[0].doNotMove = true;
        var expression = attr.ngIf;
        var lastElement;
        var lastScope;
        scope.$watch(expression, function (newValue) {
          if (lastElement) {
            lastElement.remove();
            lastElement = null;
          }
          if (lastScope) {
            lastScope.$destroy();
            lastScope = null;
          }
          if (newValue) {
            lastScope = scope.$new();
            linker(lastScope, function (clone) {
              lastElement = clone;
              iterStartElement.after(clone);
            });
          }
        });
      };
    }
  };
}]);

function FleurEngine($scope, $location, $http) {
    $scope.backends = backendList;
    $scope.themes = themesList;
    $scope.blog = config.blog;
    $scope.backend = backends[config.backend];
    $scope.backendOptions = config.backendOptions;
    $scope.theme = config.theme;
    $scope.refreshLess = refreshLess;
    $scope.posts = [];

    $scope.writeConfig = function() {
        var c = angular.copy(config);
        c.blog.published = true;
        return prettyPrintOne("config = "+JSON.stringify(c, null, 2)+";", 'js');
    };

    $scope.reInitBackend = function() {
        //If the backend changes, re-init it, also does pageload init
        $scope.backend.init($http, $scope.backendOptions, function() {
            currentBackend.getPosts(function(data){
                $scope.posts = data;
            });
        });
    };

    $scope.$watch('backend', $scope.reInitBackend); //Watch for backend changes

    $scope.$watch('backendOptions', function() {
        config.backendOptions = {};
        angular.forEach($scope.backend.conf, function(v) {
            console.log(2, v.id, v.value);
            config.backendOptions[v.id] = v.value;
        });
    });

    $scope.showPost = function(id) {
        currentBackend.getPost(id, function(){});
    };

    $scope.pages = [
      {url:"bio", title:"About Andrea", layout : "html"}
    ];
    $scope.lastPageURL = "";
    $scope.currentPage = {};
    $scope.selectPage = function(p) {
        $scope.lastPageURL = $scope.currentPage.url;
        $scope.currentPage = p;
    };

    // url routing
    $scope.location = $location;
    $scope.$watch('location.path()', function (path) {
        var parts = path.slice(1).split('/');
        var page = parts[0], work = parts[1];

        if (page) {
            // match page id from url
            angular.forEach($scope.pages, function (p) {
              if (page == p.url) $scope.selectPage(p);
            });
        } else {
            // no page, go back to the home page.
            return $scope.selectPage( $scope.pages[0] );
        }

        if (work) {
            // match page id from url
            angular.forEach($scope.works, function (w) {
              if (work == w.url) $scope.selectWork(w);
            });
        } else {
            // no work, go back to the first one.
            $scope.selectWork( $scope.works[0] || {} );
        }

    });

};
