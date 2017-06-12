angular.module('templates-app', ['home/home.tpl.html', 'last-records/last-records.tpl.html', 'start/start.tpl.html', 'timer/timer.tpl.html', 'today/today-records.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>Non-Trivial AngularJS Made Easy</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "    Everything you need to kickstart AngularJS projects: a best-practice\n" +
    "    directory structure, an intelligent build system, and the best web design\n" +
    "    libraries around.\n" +
    "  </p>\n" +
    "\n" +
    "  <ul class=\"list-inline social-buttons\">\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=ngbp&amp;repo=ngbp&amp;type=watch&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"110\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=ngbp&amp;repo=ngbp&amp;type=fork&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"95\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "       <iframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\"\n" +
    "        src=\"https://platform.twitter.com/widgets/tweet_button.html?url=http%3A%2F%2Fbit.ly%2FngBoilerplate&counturl=http%3A%2F%2Fngbp.github.com%2Fngbp&text=Check%20out%20%23ngbp%20-%20an%20awesome%20kickstarter%20for%20web%20projects%20%7C&hashtags=angularjs&via=joshdmiller&related=joshdmiller\"\n" +
    "        style=\"width:130px; height:20px;\"></iframe>\n" +
    "    </li>\n" +
    "    <li plus-one></li>\n" +
    "  </ul> \n" +
    "  \n" +
    "  <div class=\"btn-group\">\n" +
    "    <a href=\"https://github.com/ngbp/ngbp#readme\" class=\"btn btn-large btn-default\">\n" +
    "      <i class=\"fa fa-book\"></i>\n" +
    "      Read the Docs\n" +
    "    </a>\n" +
    "    <a href=\"https://github.com/ngbp/ngbp\" class=\"btn btn-large btn-success\">\n" +
    "      <i class=\"fa fa-download\"></i>\n" +
    "      Download\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"marketing\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-thumbs-up\"></i> Good to Go!</h4>\n" +
    "      <p>\n" +
    "        Kickstarts your project quickly, with everything you need, so you can \n" +
    "        focus on what matters: your app.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-magic\"></i> Complete Build System</h4>\n" +
    "      <p>\n" +
    "        A smart, <a href=\"http://gruntjs.com\">Grunt</a>-based build system \n" +
    "        designed to save you time and energy.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-retweet\"></i> Modularization</h4>\n" +
    "      <p>\n" +
    "        Supports a structure that maintains separation of concerns while\n" +
    "        ensuring maximum code reuse.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-star\"></i> AngularJS</h4>\n" +
    "      <p>\n" +
    "        JavaScript framework that augments browser-based, single-page \n" +
    "        applications with MVC functionality.\n" +
    "        <a href=\"http://angularjs.org\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-resize-small\"></i> LESS CSS</h4>\n" +
    "      <p>\n" +
    "        The dynamic stylesheet language that extends CSS with efficiency.\n" +
    "        <a href=\"http://lesscss.org\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-twitter\"></i> Twitter Bootstrap</h4>\n" +
    "      <p>\n" +
    "        Sleek, intuitive, and powerful front-end framework for faster and easier\n" +
    "        web development.\n" +
    "        <a href=\"http://getbootstrap.com\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-circle\"></i> Angular UI Bootstrap</h4>\n" +
    "      <p>\n" +
    "        Pure AngularJS components for Bootstrap written by the \n" +
    "        <a href=\"https://github.com/angular-ui?tab=members\">AngularUI Team</a>.\n" +
    "        <a href=\"http://angular-ui.github.com/bootstrap\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-flag\"></i> Font Awesome</h4>\n" +
    "      <p>\n" +
    "        The iconic font designed for use with Twitter Bootstrap.\n" +
    "        <a href=\"http://fortawesome.github.com/Font-Awesome\">\n" +
    "          More &raquo;\n" +
    "        </a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-asterisk\"></i> Placeholders</h4>\n" +
    "      <p>\n" +
    "        Client-side image and text placeholder directives written in pure \n" +
    "        AngularJS to make designing mock-ups wicked-fast.\n" +
    "        <a href=\"http://joshdmiller.github.com/angular-placeholders\">\n" +
    "          More &raquo;\n" +
    "        </a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("last-records/last-records.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("last-records/last-records.tpl.html",
    "<div ng-if=\"loggedIn === true\">\n" +
    "    <header class=\"bar bar-nav\">\n" +
    "        <button ng-click=\"goBack()\" ng-if=\"categoryRecords\" class=\"btn red pull-left\">\n" +
    "            Go Back\n" +
    "        </button>\n" +
    "        <button ng-click=\"logOutUser()\" class=\"btn pull-right\">\n" +
    "            Logout\n" +
    "        </button>\n" +
    "    </header>\n" +
    "    <br /><br />\n" +
    "    <br /><br />\n" +
    "    <p ng-if=\"administrationMode\">\n" +
    "        <a href=\"#\" name=\"individual-category\">Create a new category</a>\n" +
    "        <input ng-model = \"category.name\" type=\"text\" />\n" +
    "        <button class=\"btn btn-primary\" ng-click=\"submitCategory()\">Submit</button>\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        <div ng-if=\"!categoryRecords\">\n" +
    "            <h1>Choose a category to begin</h1>\n" +
    "            <ul class=\"table-view\"  ng-repeat=\"value in categories track by value.id\" ng-if=\"!categoryRecords\">\n" +
    "                <button ng-click=\"viewRecords(value.id, value.name)\" class=\"table-view-cell btn btn-block\"><h2>{{value.name}}</h2><br /><br />\n" +
    "                </button>\n" +
    "            </ul>\n" +
    "            <hr />\n" +
    "        </div>\n" +
    "    </p>\n" +
    "</div>\n" +
    "<div ng-if=\"categoryRecords\">\n" +
    "    <h1>Viewing Records for {{categoryRecords.name}}</h1>\n" +
    "\n" +
    "    <div ng-repeat=\"value in categoryRecords.data track by $index\" class=\"col-lg-12 col-md-12 col-sm-12\">\n" +
    "        <hr />\n" +
    "        <!--<div class=\"col-lg-3 col-md-3 col-sm-3\">-->\n" +
    "            <!--<button ng-click=\"editingStartVal[value.id] = true\" ng-if=\"!editingStartVal[value.id]\" class=\"btn-link\">Started at {{value.start_time | date:'hh:mm:ss a' : -0500}}</button>-->\n" +
    "            <!--<input  type=\"time\" name=\"time\"  ng-if=\"editingStartVal[value.id] == true\" ng-model=\"value.editedStartTime\" ng-value=\"value.start_time | date:'HH:mm' : -0500\" />-->\n" +
    "            <!--<button class=\"btn-link\" ng-if=\"editingStartVal[value.id] == true\" ng-click=\"editCategoryRecord(value, 'start')\">Save</button>-->\n" +
    "            <!--<button class=\"btn-link\" ng-if=\"editingStartVal[value.id] == true\" ng-click=\"editingStartVal[value.id] = null\">Cancel</button>-->\n" +
    "        <!--</div>-->\n" +
    "        <button ng-click=\"editingStartVal[value.id] = true\" ng-if=\"!editingStartVal[value.id]\" class=\"btn-link\"><u>Started at</u> {{value.start_time | date:'hh:mm:ss a'}}</button>\n" +
    "        <input  type=\"time\" name=\"time\"  ng-if=\"editingStartVal[value.id] == true\" ng-model=\"value.editedStartTime\" ng-value=\"value.start_time | date:'HH:mm'\" />\n" +
    "        <button class=\"btn btn-primary\" ng-if=\"editingStartVal[value.id] == true\" ng-click=\"editCategoryRecord(value, 'start')\">Save</button>\n" +
    "        <button class=\"btn btn-danger\" ng-if=\"editingStartVal[value.id] == true\" ng-click=\"editingStartVal[value.id] = null\">Cancel</button>\n" +
    "<br /><br />\n" +
    "        <button class=\"btn-link\" ng-click=\"editingEndVal[value.id] = true\" ng-if=\"!editingEndVal[value.id] && value.end_time != null\"><u>Ended at</u> {{value.end_time | date:'hh:mm:ss a'}}</button>\n" +
    "        <button class=\"btn btn-link\" ng-click=\"editingEndVal[value.id] = true\" ng-if=\"!editingEndVal[value.id] && value.end_time == null\">Enter End Time</button>\n" +
    "        <input type=\"time\" name=\"time\" ng-if=\"editingEndVal[value.id] == true\" ng-model=\"value.editedEndTime\" ng-value=\"value.end_time | date:'HH:mm'\" />\n" +
    "        <button class=\"btn btn-primary\" ng-if=\"editingEndVal[value.id] == true\" ng-click=\"editCategoryRecord(value, 'end')\">Save</button>\n" +
    "        <button class=\"btn btn-danger\" ng-if=\"editingEndVal[value.id] == true\" ng-click=\"editingEndVal[value.id] = null\">Cancel</button>\n" +
    "        <br /><br />\n" +
    "        <h2><u>Total Time</u><br />{{value.total_time}}</h2>\n" +
    "        <br /><br />\n" +
    "        <button class=\"btn btn-danger\" ng-click=\"deleteEntry(value.id)\">Remove</button>\n" +
    "        <!--<div class=\"col-lg-3 col-md-3 col-sm-3\"   >-->\n" +
    "            <!--<button class=\"btn-link\" ng-click=\"editingEndVal[value.id] = true\" ng-if=\"!editingEndVal[value.id] && value.end_time != null\">Ended at {{value.end_time | date:'hh:mm:ss a' : -0500}}</button>-->\n" +
    "            <!--<button class=\"btn btn-link\" ng-click=\"editingEndVal[value.id] = true\" ng-if=\"!editingEndVal[value.id] && value.end_time == null\">Enter End Time</button>-->\n" +
    "            <!--<input type=\"time\" name=\"time\" ng-if=\"editingEndVal[value.id] == true\" ng-model=\"value.editedEndTime\" ng-value=\"value.end_time | date:'HH:mm' : -0500\" />-->\n" +
    "            <!--<button class=\"btn-link\" ng-if=\"editingEndVal[value.id] == true\" ng-click=\"editCategoryRecord(value, 'end')\">Save</button>-->\n" +
    "            <!--<button class=\"btn-link\" ng-if=\"editingEndVal[value.id] == true\" ng-click=\"editingEndVal[value.id] = null\">Cancel</button>-->\n" +
    "        <!--</div>-->\n" +
    "        <!--<div class=\"col-lg-3 col-md-3 col-sm-3\">{{value.total_time}}</div>-->\n" +
    "\n" +
    "    <hr />\n" +
    "    </p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<hr />\n" +
    "<div ng-if=\"loggedIn\">\n" +
    "\n" +
    "</div>");
}]);

angular.module("start/start.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("start/start.tpl.html",
    "<div ng-if=\"loggedIn === false\">\n" +
    "        <div ng-if=\"!wantsToSignUp\">\n" +
    "            <input type=\"text\" ng-model=\"user.email\" placeholder=\"email\" />\n" +
    "            <input type=\"password\" ng-model=\"user.password\" placeholder=\"password\" />\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"submitLogin()\">Login</button>\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"signupUser()\">Sign up</button>\n" +
    "            <div ng-if=\"error\">Error logging in</div>\n" +
    "        </div>\n" +
    "\n" +
    "    <div ng-if=\"wantsToSignUp == true\">\n" +
    "        <input type=\"text\" placeholder=\"Your Name\" ng-model=\"newUser.name\" />\n" +
    "        <input type=\"text\" placeholder=\"email\" ng-model=\"newUser.email\" />\n" +
    "        <input type=\"password\" placeholder=\"password\" ng-model=\"newUser.password\" />\n" +
    "        <button ng-click=\"createUser(newUser)\" class=\"btn btn-primary\">Sign up</button>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "<header class=\"bar bar-nav\" ng-if=\"loggedIn === true\">\n" +
    "    <button ng-click=\"toggleAdminMode()\" class=\"btn pull-left\">\n" +
    "        Administration\n" +
    "    </button>\n" +
    "    <button ng-click=\"logOutUser()\" class=\"btn pull-right\">\n" +
    "        Logout\n" +
    "    </button>\n" +
    "\n" +
    "</header>    <br /><br />\n" +
    "\n" +
    "<div ng-if=\"loggedIn == true\">\n" +
    "    <div class=\"col-lg-12 col-md-12 col-sm-12\" ng-if=\"categories.length == 0\">\n" +
    "        <p>Welcome to the monitoring app! To get started, please create a a few categories. When finished, click on the category name to start tracking. To add categories in the future, click Administration on the top toolbar.</p>\n" +
    "        <br /><br />\n" +
    "        <a href=\"#\" name=\"individual-category\">Create a new category</a>\n" +
    "        <input ng-model = \"category.name\" type=\"text\" />\n" +
    "        <button class=\"btn btn-primary\" ng-click=\"submitCategory()\">Submit</button>\n" +
    "    </div>\n" +
    "    <p ng-if=\"administrationMode\">\n" +
    "        <a href=\"#\" name=\"individual-category\">Create a new category</a>\n" +
    "        <input ng-model = \"category.name\" type=\"text\" />\n" +
    "        <button class=\"btn btn-primary\" ng-click=\"submitCategory()\">Submit</button>\n" +
    "    </p>\n" +
    "    <p>\n" +
    "    <div ng-if=\"currentlyTracking != null && currentlyTracking.categoryId == value.id\" class=\"col-lg-12 col-md-12 col-sm-12\">\n" +
    "        <h4>Currently Tracking {{currentlyTracking.categoryName}}</h4>\n" +
    "        <timer interval=\"1000\"><h1 class=\"large-timer\">{{hours}} hour{{hoursS}}, {{minutes}} minute{{minutesS}}, {{seconds}} second{{secondsS}}.</h1></timer>\n" +
    "        <button class=\"btn btn-warning\" ng-click=\"stopTracking(currentlyTracking.id)\">Stop Timer</button>\n" +
    "    </div>\n" +
    "    <div class=\"center-area\">\n" +
    "        <ul class=\"table-view\"  ng-repeat=\"value in categories track by value.id\">\n" +
    "            <button ng-click=\"startTracking(value.id, value.name)\" class=\"table-view-cell btn btn-block\"><h2>{{value.name}}</h2><br /><br />\n" +
    "            </button>\n" +
    "        </ul>\n" +
    "\n" +
    "    </div>\n" +
    "    </p>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div ng-if=\"currentlyTracking == null && categoryRecords\">\n" +
    "\n" +
    "    <div ng-repeat=\"value in categoryRecords.data track by $index\" class=\"col-lg-12 col-md-12 col-sm-12\">\n" +
    "        <hr />\n" +
    "        <div class=\"col-lg-3 col-md-3 col-sm-3\">Started at {{value.start_time | date:'medium'}} </div>\n" +
    "        <div class=\"col-lg-3 col-md-3 col-sm-3\" ng-if=\"value.end_time\">Ended at {{value.end_time | date:'medium'}}</div>\n" +
    "        <div class=\"col-lg-3 col-md-3 col-sm-3\" ng-if=\"!value.end_time\">&nbsp;</div>\n" +
    "        <div class=\"col-lg-3 col-md-3 col-sm-3\">{{value.total_time}}</div>\n" +
    "        <div class=\"col-lg-3 col-md-3 col-sm-3\"><button class=\"btn btn-danger\" ng-click=\"deleteEntry(value.id)\">Remove</button></div>\n" +
    "    <hr />\n" +
    "    </p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"loggedIn\">\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("timer/timer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("timer/timer.tpl.html",
    "<header class=\"bar bar-nav\">\n" +
    "    <!--<button class=\"btn pull-left\">-->\n" +
    "        <!--Left-->\n" +
    "    <!--</button>-->\n" +
    "    <button class=\"btn pull-right\" ng-click=\"showSearchResults = true\">\n" +
    "        Show Tags\n" +
    "    </button>\n" +
    "    <div class=\"segmented-control\">\n" +
    "        <a class=\"control-item\" ng-click=\"stopTracking(currentlyTracking.id)\">Stop Timer</a>\n" +
    "        <a class=\"control-item\" ng-if=\"manualTime == false\" ng-click=\"enterTimeManually(currentlyTracking.id)\">Manually Enter Time</a>\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<br /><br />\n" +
    "<input type=\"text\" ng-change=\"searchText()\"  ng-model-options=\"{ debounce: 500 }\"  ng-model=\"searchVal\" placeholder=\"Tag Search\"/>\n" +
    "<div class=\"row\" ng-if=\"showSearchResults == true\">\n" +
    "    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n" +
    "        <div class=\"col-lg-3 col-md-3 col-sm-3\" ng-repeat=\"value in searchResults track by $index\">\n" +
    "            <button ng-if=\"value.id != 1\" ng-click=\"addTag(value.id)\" class=\"btn btn-primary\">{{value.title}}</button>\n" +
    "            <button ng-if=\"value.id == 1\" ng-click=\"addVal(value.name)\" class=\"btn btn-primary\">{{value.title}}</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<br />\n" +
    "<div class=\"row\" ng-if=\"tags && tags.length > 0\">\n" +
    "    Tagged Items\n" +
    "    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n" +
    "        <div class=\"col-lg-3 col-md-3 col-sm-3\" ng-repeat=\"value in tags track by $index\"><button ng-click=\"addTag(value.name)\" class=\"btn btn-primary\">{{value.title}}</button></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div>\n" +
    "        <h2>Currently Tracking {{currentlyTracking.categoryName}}</h2><br />\n" +
    "        <timer interval=\"1000\" ng-if=\"manualTime == false || manualEntryCompleted == false\"><h1 class=\"large-timer\">{{hours}} hour{{hoursS}}, <br />{{minutes}} minute{{minutesS}}, <br />{{seconds}} second{{secondsS}}.</h1></timer>\n" +
    "        <timer interval=\"1000\" ng-if=\"manualTime == true && manualEntryCompleted == true\" start-time=\"timeStarted\" ng-model=\"timeEntered\"><h1 class=\"large-timer\">{{hours}} hour{{hoursS}}, <br />{{minutes}} minute{{minutesS}}, <br />{{seconds}} second{{secondsS}}.</h1></timer>\n" +
    "\n" +
    "        <!--<nav class=\"navbar navbar-light bg-faded\">-->\n" +
    "            <!--<form class=\"form-inline\">-->\n" +
    "                <!--<button class=\"btn btn-primary\" ng-click=\"stopTracking(currentlyTracking.id)\">Stop Timer</button>-->\n" +
    "                <!--<button class=\"btn btn-primary\" ng-if=\"manualTime == false\" ng-click=\"enterTimeManually(currentlyTracking.id)\">Manually Enter Time</button>-->\n" +
    "                <!--&lt;!&ndash;<button class=\"btn btn-primary\" ng-if=\"manualTime == false\" ng-click=\"showItemDisplay()\"> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Track another item&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  </button>&ndash;&gt;-->\n" +
    "            <!--</form>-->\n" +
    "        <!--</nav>-->\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <!--<div ng-if=\"itemDisplay ==  true\">-->\n" +
    "        <!--<br /><br /><br />-->\n" +
    "        <!--<ul class=\"table-view\"  ng-repeat=\"value in categories track by value.id\">-->\n" +
    "            <!--<button ng-click=\"startTracking(value.id, value.name)\" class=\"table-view-cell btn btn-block\"><h2>{{value.name}}</h2><br /><br />-->\n" +
    "            <!--</button>-->\n" +
    "        <!--</ul>-->\n" +
    "    <!--</div>-->\n" +
    "\n" +
    "\n" +
    "    <div ng-if=\"manualTime == true && showTimeEntry == true\">\n" +
    "        <input type=\"text\" placeholder=\"Enter time\" ng-model=\"timeStarted\" />\n" +
    "        <button class=\"btn btn-primary\" ng-click=\"manualEntry(timeStarted)\">Enter Start TIme</button>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("today/today-records.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("today/today-records.tpl.html",
    "<div ng-if=\"loggedIn === false\">\n" +
    "    <input type=\"text\" ng-model=\"user.email\" placeholder=\"email\" />\n" +
    "    <input type=\"password\" ng-model=\"user.password\" placeholder=\"password\" />\n" +
    "    <button class=\"btn btn-primary\" ng-click=\"submitLogin()\">Login</button>\n" +
    "    <button class=\"btn btn-primary\" ng-click=\"wantsToSignUp = true\">Sign up</button>\n" +
    "    <div ng-if=\"wantsToSignUp\">\n" +
    "        <input type=\"text\" placeholder=\"name\" ng-model=\"newUser.name\" />\n" +
    "        <input type=\"text\" placeholder=\"email\" ng-model=\"newUser.email\" />\n" +
    "        <input type=\"password\" placeholder=\"password\" ng-model=\"newUser.password\" />\n" +
    "        <button ng-click=\"createUser(newUser)\" class=\"btn btn-primary\">Sign up</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-if=\"loggedIn === true\">\n" +
    "    <header class=\"bar bar-nav\">\n" +
    "        <button ng-click=\"toggleAdminMode()\" class=\"btn pull-left\">\n" +
    "            Administration\n" +
    "        </button>\n" +
    "        <button ng-click=\"logOutUser()\" class=\"btn pull-right\">\n" +
    "            Logout\n" +
    "        </button>\n" +
    "    </header>\n" +
    "    <br /><br />\n" +
    "    <br /><br />\n" +
    "    <p ng-if=\"administrationMode\">\n" +
    "        <a href=\"#\" name=\"individual-category\">Create a new category</a>\n" +
    "        <input ng-model = \"category.name\" type=\"text\" />\n" +
    "        <button class=\"btn btn-primary\" ng-click=\"submitCategory()\">Submit</button>\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        <div>\n" +
    "            <!--<h1>Choose a category to begin</h1>-->\n" +
    "            <ul class=\"table-view\"  ng-repeat=\"value in categories track by value.id\" ng-if=\"!categoryRecords\">\n" +
    "                <button ng-click=\"viewRecords(value.id, value.name)\" class=\"table-view-cell btn btn-block\"><h2>{{value.name}} <br /> <br /> {{value.today.total_time}}</h2><br /><br />\n" +
    "                </button>\n" +
    "            </ul>\n" +
    "            <hr />\n" +
    "        </div>\n" +
    "    </p>\n" +
    "</div>\n" +
    "<div ng-if=\"categoryRecord\">\n" +
    "    <h1>Viewing Records for {{categoryRecords.name}}</h1>\n" +
    "    <div ng-repeat=\"value in categoryRecords.data track by $index\" class=\"col-lg-12 col-md-12 col-sm-12\">\n" +
    "        <hr />\n" +
    "        <div class=\"col-lg-3 col-md-3 col-sm-3\">\n" +
    "            <button ng-click=\"editingStartVal[value.id] = true\" ng-if=\"!editingStartVal[value.id]\" class=\"btn-link\">Started at {{value.start_time | date:'medium'}}</button>\n" +
    "            <input type=\"text\" ng-if=\"editingStartVal[value.id] == true\" ng-model=\"value.editedStartTime\" ng-value=\"value.start_time | date:'HH:mm'\" />\n" +
    "            <button class=\"btn-link\" ng-if=\"editingStartVal[value.id] == true\" ng-click=\"editCategoryRecord(value, 'start')\">Save</button>\n" +
    "            <button class=\"btn-link\" ng-if=\"editingStartVal[value.id] == true\" ng-click=\"editingStartVal[value.id] = null\">Cancel</button>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"col-lg-3 col-md-3 col-sm-3\"   >\n" +
    "            <button class=\"btn-link\" ng-click=\"editingEndVal[value.id] = true\" ng-if=\"!editingEndVal[value.id] && value.end_time != null\">Ended at {{value.end_time | date:'medium'}}</button>\n" +
    "            <button class=\"btn btn-link\" ng-click=\"editingEndVal[value.id] = true\" ng-if=\"!editingEndVal[value.id] && value.end_time == null\">Enter End Time</button>\n" +
    "            <input type=\"text\" ng-if=\"editingEndVal[value.id] == true\" ng-model=\"value.editedEndTime\" ng-value=\"value.end_time | date:'HH:mm'\" />\n" +
    "            <button class=\"btn-link\" ng-if=\"editingEndVal[value.id] == true\" ng-click=\"editCategoryRecord(value, 'end')\">Save</button>\n" +
    "            <button class=\"btn-link\" ng-if=\"editingEndVal[value.id] == true\" ng-click=\"editingEndVal[value.id] = null\">Cancel</button>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-3 col-md-3 col-sm-3\"><button class=\"btn btn-danger\" ng-click=\"deleteEntry(value.id)\">Remove</button></div>\n" +
    "    <hr />\n" +
    "    </p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<hr />\n" +
    "<div ng-if=\"loggedIn\">\n" +
    "\n" +
    "</div>");
}]);
