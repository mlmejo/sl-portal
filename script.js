$(document).ready(function() {
    $('select').material_select();
});


// angular js codes will be here
var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);
        app.controller('slCtrl', function ($scope, $http) {
            // var dataFetched = false;

            // // Fetch data from Django REST API
            // function fetchData() {
            //     $http.get("http://127.0.0.1:8000/volunteers/").then(
            //         function (response) {
            //             console.log(response.data);
            //             $scope.names = response.data;
            //         },
            //         function (error) {
            //             console.error('Error fetching data: ', error);
            //         }
            //     )
            // }

            // $scope.$on('$viewContentLoaded', function () {
            //     if (!dataFetched) {
            //         fetchData();
            //     }

            //     dataFetched = true;
            // });

            // more angular JS codes will be here
            $scope.currencyVal;
            $scope.filters = {};
            $scope.predicate = "unix";
            $scope.reverse = true;
            $scope.entry = {};

            $scope.entry.status = 'Accountancy Program';

            $scope.options = [{
                value: 'Accountancy Program',
                displayName: 'Accountancy Program'
            }, {
                value: 'Arts and Sciences Program',
                displayName: 'Arts and Sciences Program'
            }, {
                value: 'Business Administration Program',
                displayName: 'Business Administration Program'
            }, {
                value: 'Computer Studies Program',
                displayName: 'Computer Studies Program'
            }, {
                value: 'Criminal Justice Program',
                displayName: 'Criminal Justice Program'
            }, {
                value: 'Engineering Technology Program',
                displayName: 'Engineering Technology Program'
            }, {
                value: 'Nursing Program',
                displayName: 'Nursing Program'
            }, {
                value: 'Teachers Education Program',
                displayName: 'Teachers Education Program'
            }, {
                value: 'Faculty',
                displayName: 'Faculty'
            }];

            $scope.fieldTable = [{
                field: "",
                title: "All Program"
            }, {
                field: "Accountancy Program",
                title: "Accountancy Program"
            }, {
                field: "Arts and Sciences Program",
                title: "Arts and Sciences Program"
            }, {
                field: "Business Administration Program",
                title: "Business Administration Program"
            }, {
                field: "Computer Studies Program",
                title: "Computer Studies Program"
            }, {
                field: "Criminal Justices Program",
                title: "Criminal Justices Program"
            }, {
                field: "Engineering Technology Program",
                title: "Engineering Technology Program"
            }, {
                field: "Nursing Program",
                title: "Nursing Program"
            }, {
                field: "Teachers Education Program",
                title: "Teachers Education Program"
            }, {
                field: "Faculty",
                title: "Faculty"
            },];

            $scope.selected = $scope.fieldTable[0];

            $scope.hasChanged = function () {
                $scope.filters = $scope.selected.field;
                // Call your function to update based on the selected item
                // For example: $scope.getEmails();
            }

            $scope.selectItem = function (item) {
                $scope.selected = item;
                $scope.hasChanged();
            };
    
    
    $scope.showCreateForm = function(){
    // clear form
    $scope.clearForm();
        //Setting default
       // $scope.status = "APPLIED";
     $scope.unix = Math.floor(Date.now());
    // change modal title
    $('#modal-volunteer-title').text("Create New Information");
     
    // hide update volunteer button
    $('#btn-update-volunteer').hide();
     
    // show create volunteer button
    $('#btn-create-volunteer').show();
     
} // END SHOW CREATE FORM

// clear variable / form values
$scope.clearForm = function(){
    $scope.entry.id = "";
    $scope.entry.name = "";
    $scope.entry.yr_level = "";
    $scope.entry.email = "";
    $scope.entry.course = "";
} // END CLEAR FORM

// create new volunteer 
$scope.createVolunteer = function(item){         
    $http.post("http://127.0.0.1:8000/volunteers/", {
        name: item.name,
        email: item.email,
        yr_level: item.yr_level,
        course: item.course,
        status: item.status,
    }).then(function () {
        $scope.loadVolunteers();
    }).catch(function (error) {
        console.log("Error creating volunteer: ", error);
    });

    //   $scope.names.push({
    //   id : $scope.names.length+1,
    //   name: item.name,
    //   email: item.email,
    //   yr_level: item.yr_level,
    //   course: item.course,
    //   status: item.status,
    //   unix:  Math.floor(Date.now())
    // })
   
        Materialize.toast('Information created', 4000);
         
        // close modal
        $('#modal-volunteer-form').closeModal();
         
        // clear modal content
        $scope.clearForm();
         
}; //END CREATE VOLUNTEER

$scope.names = [];

$scope.loadVolunteers = function () {
    $http.get("http://127.0.0.1:8000/volunteers/")
    .then(function (response) {
            $scope.names = response.data;
    }).catch(function (error) {
        console.error(error);
    });
}

// read volunteers
//         $scope.names = [
//     {
//       "id": "1",
//       "name": "Jasmin Acido",
//       "course": "BSA IS",
//       "yr_level": "1st yr",
//       "email": "acido.jasmin@urios.edu.ph",
//       "status": "Accountancy Program",
//       "created": "2016-07-07 09:16:32",
//       "unix": "1467640600000"
//     },
//     {
//       "id": "2",
//       "name": "Ivan Jay Bacsin",
//       "course": "BS BEED",
//       "yr_level": "3rd yr",
//       "email": "ivan.bacsin@urios.edu.ph",
//       "status": "Teachers Education Program",
//       "created": "2016-05-02 13:12:50",
//       "unix": "1467641611111"
//     },
//     {
//       "id": "3",
//       "name": "Ernesto Balbuena Jr.",
//       "course": "BSBA MM",
//       "yr_level": "4th yr",
//       "email": "balbuena@urios.edu.ph",
//       "status": "Business Administration Program",
//       "created": "2016-05-31 14:55:32",
//       "unix": "1467642676122"
//     },
//     {
//       "id": "4",
//       "name": "Nova Mae Butao",
//       "course": "BS BEED",
//       "yr_level": "3rd yr",
//       "email": "nova.butao@urios.edu.ph",
//       "status": "Teachers Education Program",
//       "created": "2016-05-05 22:44:01",
//       "unix": "1467643699333"
//     },
//     {
//       "id": "5",
//       "name": "Christian John Ibe",
//       "course": "CRIM",
//       "yr_level": "1st yr",
//       "email": "christian.ibe@urios.edu.ph",
//       "status": "Criminal Justices Program",
//       "created": "2016-06-21 16:33:11",
//       "unix": "1467648699444"
//     },
//     {
//       "id": "6",
//       "name": "Kate Angeline Caballes",
//       "course": "BS Nursing",
//       "yr_level": "2nd yr",
//       "email": "kate.caballes@urios.edu.ph",
//       "status": "Nursing Program",
//       "created": "2016-06-22 19:22:22",
//       "unix": "1467648699555"
//     },
//     {
//       "id": "7",
//       "name": "Oliver Wendell Ceniza",
//       "course": "DPIT",
//       "yr_level": "3rd yr",
//       "email": "oliver.ceniza@urios.edu.ph",
//       "status": "Computer Studies Program",
//       "created": "2016-03-02 12:11:33",
//       "unix": "1467648699666"
//     },
//     {
//       "id": "8",
//       "name": "Gelie Ann Fuentes",
//       "course": "BSAA",
//       "yr_level": "1st yr",
//       "email": "gelie.fuentes@urios.edu.ph",
//       "status": "Accountancy Program",
//       "created": "2016-04-17 11:12:44",
//       "unix": "1467648699777"
//     },
//     {
//       "id": "9",
//       "name": "Jona Mae Gitalada",
//       "course": "BSBA F",
//       "yr_level": "2nd yr",
//       "email": "jona.gitalada@urios.edu.ph",
//       "status": "Business Administration Program",
//       "created": "2016-05-15 10:12:55",
//       "unix": "1467648699888"
//     },
//     {
//       "id": "10",
//       "name": "Pinky Lasco",
//       "course": "AB Polsci",
//       "yr_level": "4th yr",
//       "email": "pink.lasco@urios.edu.ph",
//       "status": "Arts and Sciences Program",
//       "created": "2016-02-15 08:17:46",
//       "unix": "1467648699999"
//     },
//     {
//       "id": "11",
//       "name": "Sheekinah Nortega",
//       "course": "BS BEED",
//       "yr_level": "1st yr",
//       "email": "sheekinah.nortega@urios.edu.ph",
//       "status": "Teachers Education Program",
//       "created": "2016-02-15 08:17:46",
//       "unix": "1467648699999"
//     },
//     {
//       "id": "12",
//       "name": "Queen Marnil Plaza",
//       "course": "BSCE",
//       "yr_level": "1st yr",
//       "email": "queen.plaza@urios.edu.ph",
//       "status": "Engineering Technology Program",
//       "created": "2016-07-10 02:16:10",
//       "unix": "1467648761111"
//     },
//     {
//       "id": "13",
//       "name":"Liezel Postanes",
//       "course": "BS Psychology",
//       "yr_level": "3rd yr",
//       "email": "liezel.postanes@urios.edu.ph",
//       "status": "Arts and Sciences Program",
//       "created": "2023-02-15 08:17:46",
//       "unix": "1467648699999"
//     },
//     {
//       "id": "14",
//       "name": "Charles Kerwin Pulido",
//       "course": "BS BEED",
//       "yr_level": "1st yr",
//       "email": "charles.pulido@urios.edu.ph",
//       "status": "Teachers Education Program",
//       "created": "2023-07-10 20:30:46",
//       "unix": "1467648762111"
//     },
//     {
//       "id": "15",
//       "name": "Jezreel Pulido Jr.",
//       "course": "BSBA MM",
//       "yr_level": "4th yr",
//       "email": "jezreel.pulido@urios.edu.ph",
//       "status": "Business Administration Program",
//       "created": "2016-07-10 20:35:36",
//       "unix": "1467648763111"
//     },
//     {
//       "id": "16",
//       "name": "Jessa Mae Quirol",
//       "course": "CSP",
//       "yr_level": "",
//       "email": "jessa.quirol@urios.edu.ph",
//       "status": "Faculty",
//       "created": "2016-07-10 20:44:03",
//       "unix": "1467648764111"
//     },
//     {
//       "id": "17",
//       "name": "Prince Rene Ramirez",
//       "course": "ETP",
//       "yr_level": "",
//       "email": "egoraptor@gmail.com",
//       "status": "Faculty",
//       "created": "2016-07-10 20:47:06",
//       "unix": "1467648765111"
//     },
//     {
//       "id": "18",
//       "name": "Fil Jhon Revilla",
//       "course": "ASP",
//       "yr_level": "",
//       "email": "danny@sexbang.com",
//       "status": "Faculty",
//       "created": "2016-07-10 20:50:30",
//       "unix": "1467648766111"
//     },
//     {
//       "id": "19",
//       "name": "Roxie Romanos",
//       "course": "BSA",
//       "yr_level": "3rd yr",
//       "email": "roxie.romanos@urios.edu.ph",
//       "status": "Accountancy Program",
//       "created": "2016-07-10 20:52:58",
//       "unix": "1468183939000"
//     },
//     {
//       "id": "20",
//       "name": "Joemarie Salon",
//       "course": "BS Psychology",
//       "yr_level": "2nd yr",
//       "email": "joemarie.salon@urios.edu.ph",
//       "status": "Arts and Sciences Program",
//       "created": "2016-07-10 22:57:17",
//       "unix": "1468191384105"
//     },
//     {
//       "id": "21",
//       "name": "Princess Mae Torregosa",
//       "course": "BS Nursing",
//       "yr_level": "1st yr",
//       "email": "princess.torregosa@urios.edu.ph",
//       "status": "Nursing Program",
//       "created": "2016-07-12 03:42:49",
//       "unix": "1468294848273"
//     },
//     {
//       "id": "22",
//       "name": "Neil Rikson Toyco",
//       "course": "BS BEED",
//       "yr_level": "1st yr",
//       "email": "neil.toyco@urios.edu.ph",
//       "status": "Teachers Education Program",
//       "created": "2016-07-12 03:42:50",
//       "unix": "1468294848273"
//     },
//     {
//       "id": "23",
//       "name": "Sheila Mae Villarente",
//       "course": "BSBA HR",
//       "yr_level": "2nd yr",
//       "email": "sheila.villarente@urios.edu.ph",
//       "status": "Business Administration Program",
//       "created": "2016-07-12 03:42:50",
//       "unix": "1468294848275"
//     },
//     {
//       "id": "24",
//       "name": "Remejean Yamson",
//       "course": "BSBA FM",
//       "yr_level": "2nd yr",
//       "email": "remejean.yamson@urios.edu.ph",
//       "status": "Business Administration Program",
//       "created": "2016-07-12 03:42:50",
//       "unix": "1468294848280"
//     },
        
//   ]
function isEmpty(obj) {
  if (obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
  }
  return true;
}
        

$scope.getEmails = function(){
  var statusFilter = $scope.filters;
  var res = [];
  for (var i=0;i<$scope.names.length;i++) {
	   var thisVolunteer = $scope.names[i];
	   var email = thisVolunteer["email"];
     if (isEmpty(statusFilter) == false){ //If there's a filter, status must match
         if ( thisVolunteer.status == statusFilter) {
             res.push(email); 
            } //END IF Matching Status
         }//END IF filter     
    else {res.push(email); } //END ELSE add all
    } //END FOR 
  $scope.list = res.join(", "); //Join the emails as a comma separated list
}; //END GetEmails();


// retrieve record to fill out the form
$scope.readOne = function(item){
     
    // change modal title
    $('#modal-volunteer-title').text("Edit Information");
     
    // show udpate volunteer button
    $('#btn-update-volunteer').show();
     
    // hide create volunteer button
    $('#btn-create-volunteer').hide();
     
  $scope.entry = item;
  $scope.entry.name = item.name;
  $scope.entry.yr_level = item.yr_level;
  $scope.entry.email = item.email;
  $scope.entry.course = item.course;
  $scope.entry.status = item.status;
    
         
        // show modal
        $('#modal-volunteer-form').openModal();
    
 }; //	END READ ONE

// update volunteer record / save changes
$scope.updateVolunteer = function(item){
  $('#modal-volunteer-form').closeModal();  
   Materialize.toast('Record updated', 4000);

    $http.patch(`http://127.0.0.1:8000/volunteers/${item.id}/`, {
        name: item.name,
        yr_level: item.yr_level,
        email: item.email,
        course: item.course,
        status: item.status,
    })
    .then(function () {
        $scope.loadVolunteers();
    })
    .catch(function (error) {
        console.error(error);
    })
  
//   $scope.entry.name = item.name;
//   $scope.entry.yr_level = item.yr_level;
//   $scope.entry.email = item.email;
//   $scope.entry.course = item.course;
//   $scope.entry.status = item.status;
         
        // close modal

         
        // clear modal content
      //  $scope.clearForm();
         
}; //END UPDATE

// delete volunteer record
$scope.deleteVolunteer = function(item){
     if(confirm("Are you sure you want to delete this information?")){
       $http.delete(`http://127.0.0.1:8000/volunteers/${item.id}`)
        .then(function () {
            Materialize.toast('The information has been deleted', 4000);
            $scope.loadVolunteers();
        })
        .catch(function (error) {
            console.error("Error deleting volunteer: ", error);
        })
}} //END DELETE
}); // END ANGULAR


app.filter('yr_level', function () {
    return function (users, yr_level) {
      if (!yr_level) {
        return users;
      }
  
      var arr = [];
  
      angular.forEach(users, function (user) {
        if (user.yr_level === yr_level) {
          arr.push(user);
        }
      });
  
      return arr;
    };
  });
  
  app.filter('course', function () {
    return function (users, course) {
      if (!course) {
        return users;
      }
  
      var arr = [];
  
      angular.forEach(users, function (user) {
        if (user.course === course) {
          arr.push(user);
        }
      });
  
      return arr;
    };
  });
  


 
app.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setString('<ul class="pagination " ng-if="1 < pages.length || !autoHide">    <li class="nopad" ng-if="boundaryLinks" ng-class="{ disabled : pagination.current == 1 }">        <a href="" ng-click="setCurrent(1)"><i class="material-icons">first_page</i></a>    </li>    <li class="nopad" ng-if="directionLinks" ng-class="{ disabled : pagination.current == 1 }">        <a href="" ng-click="setCurrent(pagination.current - 1)"><i class="material-icons">chevron_left</i></a>    </li>    <li ng-click="setCurrent(pageNumber)"class="waves-effect" ng-repeat="pageNumber in pages track by tracker(pageNumber, $index)" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' }">        <a href="" >{{ pageNumber }}</a>    </li>    <li class="nopad" ng-if="directionLinks" ng-class="{ disabled : pagination.current == pagination.last }"> <a href="" ng-click="setCurrent(pagination.current + 1)"><i class="material-icons">chevron_right</i></a>    </li> <li class="nopad" ng-if="boundaryLinks"  ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.last)"><i class="material-icons">last_page</i></a></li></ul>');


});
 
 
// jquery codes will be here
$(document).ready(function(){
    // initialize modal
    $('.modal-trigger').leanModal();
});


      /**
 * dirPagination - AngularJS module for paginating (almost) anything.
 *
 *
 * Credits
 * =======
 *
 * Daniel Tabuenca: https://groups.google.com/d/msg/angular/an9QpzqIYiM/r8v-3W1X5vcJ
 * for the idea on how to dynamically invoke the ng-repeat directive.
 *
 * I borrowed a couple of lines and a few attribute names from the AngularUI Bootstrap project:
 * https://github.com/angular-ui/bootstrap/blob/master/src/pagination/pagination.js
 *
 * Copyright 2014 Michael Bromley <michael@michaelbromley.co.uk>
 */

(function() {

    /**
     * Config
     */
    var moduleName = 'angularUtils.directives.dirPagination';
    var DEFAULT_ID = '__default';

    /**
     * Module
     */
    angular.module(moduleName, [])
        .directive('dirPaginate', ['$compile', '$parse', 'paginationService', dirPaginateDirective])
        .directive('dirPaginateNoCompile', noCompileDirective)
        .directive('dirPaginationControls', ['paginationService', 'paginationTemplate', dirPaginationControlsDirective])
        .filter('itemsPerPage', ['paginationService', itemsPerPageFilter])
        .service('paginationService', paginationService)
        .provider('paginationTemplate', paginationTemplateProvider)
        .run(['$templateCache',dirPaginationControlsTemplateInstaller]);

    function dirPaginateDirective($compile, $parse, paginationService) {

        return  {
            terminal: true,
            multiElement: true,
            priority: 100,
            compile: dirPaginationCompileFn
        };

        function dirPaginationCompileFn(tElement, tAttrs){

            var expression = tAttrs.dirPaginate;
            // regex taken directly from https://github.com/angular/angular.js/blob/v1.4.x/src/ng/directive/ngRepeat.js#L339
            var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

            var filterPattern = /\|\s*itemsPerPage\s*:\s*(.*\(\s*\w*\)|([^\)]*?(?=\s+as\s+))|[^\)]*)/;
            if (match[2].match(filterPattern) === null) {
                throw 'pagination directive: the \'itemsPerPage\' filter must be set.';
            }
            var itemsPerPageFilterRemoved = match[2].replace(filterPattern, '');
            var collectionGetter = $parse(itemsPerPageFilterRemoved);

            addNoCompileAttributes(tElement);

            // If any value is specified for paginationId, we register the un-evaluated expression at this stage for the benefit of any
            // dir-pagination-controls directives that may be looking for this ID.
            var rawId = tAttrs.paginationId || DEFAULT_ID;
            paginationService.registerInstance(rawId);

            return function dirPaginationLinkFn(scope, element, attrs){

                // Now that we have access to the `scope` we can interpolate any expression given in the paginationId attribute and
                // potentially register a new ID if it evaluates to a different value than the rawId.
                var paginationId = $parse(attrs.paginationId)(scope) || attrs.paginationId || DEFAULT_ID;
                
                // (TODO: this seems sound, but I'm reverting as many bug reports followed it's introduction in 0.11.0.
                // Needs more investigation.)
                // In case rawId != paginationId we deregister using rawId for the sake of general cleanliness
                // before registering using paginationId
                // paginationService.deregisterInstance(rawId);
                paginationService.registerInstance(paginationId);

                var repeatExpression = getRepeatExpression(expression, paginationId);
                addNgRepeatToElement(element, attrs, repeatExpression);

                removeTemporaryAttributes(element);
                var compiled =  $compile(element);

                var currentPageGetter = makeCurrentPageGetterFn(scope, attrs, paginationId);
                paginationService.setCurrentPageParser(paginationId, currentPageGetter, scope);

                if (typeof attrs.totalItems !== 'undefined') {
                    paginationService.setAsyncModeTrue(paginationId);
                    scope.$watch(function() {
                        return $parse(attrs.totalItems)(scope);
                    }, function (result) {
                        if (0 <= result) {
                            paginationService.setCollectionLength(paginationId, result);
                        }
                    });
                } else {
                    paginationService.setAsyncModeFalse(paginationId);
                    scope.$watchCollection(function() {
                        return collectionGetter(scope);
                    }, function(collection) {
                        if (collection) {
                            var collectionLength = (collection instanceof Array) ? collection.length : Object.keys(collection).length;
                            paginationService.setCollectionLength(paginationId, collectionLength);
                        }
                    });
                }

                // Delegate to the link function returned by the new compilation of the ng-repeat
                compiled(scope);
                 
                // (TODO: Reverting this due to many bug reports in v 0.11.0. Needs investigation as the
                // principle is sound)
                // When the scope is destroyed, we make sure to remove the reference to it in paginationService
                // so that it can be properly garbage collected
                // scope.$on('$destroy', function destroyDirPagination() {
                //     paginationService.deregisterInstance(paginationId);
                // });
            };
        }

        /**
         * If a pagination id has been specified, we need to check that it is present as the second argument passed to
         * the itemsPerPage filter. If it is not there, we add it and return the modified expression.
         *
         * @param expression
         * @param paginationId
         * @returns {*}
         */
        function getRepeatExpression(expression, paginationId) {
            var repeatExpression,
                idDefinedInFilter = !!expression.match(/(\|\s*itemsPerPage\s*:[^|]*:[^|]*)/);

            if (paginationId !== DEFAULT_ID && !idDefinedInFilter) {
                repeatExpression = expression.replace(/(\|\s*itemsPerPage\s*:\s*[^|\s]*)/, "$1 : '" + paginationId + "'");
            } else {
                repeatExpression = expression;
            }

            return repeatExpression;
        }

        /**
         * Adds the ng-repeat directive to the element. In the case of multi-element (-start, -end) it adds the
         * appropriate multi-element ng-repeat to the first and last element in the range.
         * @param element
         * @param attrs
         * @param repeatExpression
         */
        function addNgRepeatToElement(element, attrs, repeatExpression) {
            if (element[0].hasAttribute('dir-paginate-start') || element[0].hasAttribute('data-dir-paginate-start')) {
                // using multiElement mode (dir-paginate-start, dir-paginate-end)
                attrs.$set('ngRepeatStart', repeatExpression);
                element.eq(element.length - 1).attr('ng-repeat-end', true);
            } else {
                attrs.$set('ngRepeat', repeatExpression);
            }
        }

        /**
         * Adds the dir-paginate-no-compile directive to each element in the tElement range.
         * @param tElement
         */
        function addNoCompileAttributes(tElement) {
            angular.forEach(tElement, function(el) {
                if (el.nodeType === 1) {
                    angular.element(el).attr('dir-paginate-no-compile', true);
                }
            });
        }

        /**
         * Removes the variations on dir-paginate (data-, -start, -end) and the dir-paginate-no-compile directives.
         * @param element
         */
        function removeTemporaryAttributes(element) {
            angular.forEach(element, function(el) {
                if (el.nodeType === 1) {
                    angular.element(el).removeAttr('dir-paginate-no-compile');
                }
            });
            element.eq(0).removeAttr('dir-paginate-start').removeAttr('dir-paginate').removeAttr('data-dir-paginate-start').removeAttr('data-dir-paginate');
            element.eq(element.length - 1).removeAttr('dir-paginate-end').removeAttr('data-dir-paginate-end');
        }

        /**
         * Creates a getter function for the current-page attribute, using the expression provided or a default value if
         * no current-page expression was specified.
         *
         * @param scope
         * @param attrs
         * @param paginationId
         * @returns {*}
         */
        function makeCurrentPageGetterFn(scope, attrs, paginationId) {
            var currentPageGetter;
            if (attrs.currentPage) {
                currentPageGetter = $parse(attrs.currentPage);
            } else {
                // If the current-page attribute was not set, we'll make our own.
                // Replace any non-alphanumeric characters which might confuse
                // the $parse service and give unexpected results.
                // See https://github.com/michaelbromley/angularUtils/issues/233
                var defaultCurrentPage = (paginationId + '__currentPage').replace(/\W/g, '_');
                scope[defaultCurrentPage] = 1;
                currentPageGetter = $parse(defaultCurrentPage);
            }
            return currentPageGetter;
        }
    }

    /**
     * This is a helper directive that allows correct compilation when in multi-element mode (ie dir-paginate-start, dir-paginate-end).
     * It is dynamically added to all elements in the dir-paginate compile function, and it prevents further compilation of
     * any inner directives. It is then removed in the link function, and all inner directives are then manually compiled.
     */
    function noCompileDirective() {
        return {
            priority: 5000,
            terminal: true
        };
    }

    function dirPaginationControlsTemplateInstaller($templateCache) {
        $templateCache.put('angularUtils.directives.dirPagination.template', '<ul class="pagination" ng-if="1 < pages.length || !autoHide"><li ng-if="boundaryLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(1)">&laquo;</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(pagination.current - 1)">&lsaquo;</a></li><li ng-repeat="pageNumber in pages track by tracker(pageNumber, $index)" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' || ( ! autoHide && pages.length === 1 ) }"><a href="" ng-click="setCurrent(pageNumber)">{{ pageNumber }}</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.current + 1)">&rsaquo;</a></li><li ng-if="boundaryLinks"  ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.last)">&raquo;</a></li></ul>');
    }

    function dirPaginationControlsDirective(paginationService, paginationTemplate) {

        var numberRegex = /^\d+$/;

        var DDO = {
            restrict: 'AE',
            scope: {
                maxSize: '=?',
                onPageChange: '&?',
                paginationId: '=?',
                autoHide: '=?'
            },
            link: dirPaginationControlsLinkFn
        };

        // We need to check the paginationTemplate service to see whether a template path or
        // string has been specified, and add the `template` or `templateUrl` property to
        // the DDO as appropriate. The order of priority to decide which template to use is
        // (highest priority first):
        // 1. paginationTemplate.getString()
        // 2. attrs.templateUrl
        // 3. paginationTemplate.getPath()
        var templateString = paginationTemplate.getString();
        if (templateString !== undefined) {
            DDO.template = templateString;
        } else {
            DDO.templateUrl = function(elem, attrs) {
                return attrs.templateUrl || paginationTemplate.getPath();
            };
        }
        return DDO;

        function dirPaginationControlsLinkFn(scope, element, attrs) {

            // rawId is the un-interpolated value of the pagination-id attribute. This is only important when the corresponding dir-paginate directive has
            // not yet been linked (e.g. if it is inside an ng-if block), and in that case it prevents this controls directive from assuming that there is
            // no corresponding dir-paginate directive and wrongly throwing an exception.
            var rawId = attrs.paginationId ||  DEFAULT_ID;
            var paginationId = scope.paginationId || attrs.paginationId ||  DEFAULT_ID;

            if (!paginationService.isRegistered(paginationId) && !paginationService.isRegistered(rawId)) {
                var idMessage = (paginationId !== DEFAULT_ID) ? ' (id: ' + paginationId + ') ' : ' ';
                if (window.console) {
                    console.warn('Pagination directive: the pagination controls' + idMessage + 'cannot be used without the corresponding pagination directive, which was not found at link time.');
                }
            }

            if (!scope.maxSize) { scope.maxSize = 9; }
            scope.autoHide = scope.autoHide === undefined ? true : scope.autoHide;
            scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : true;
            scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : false;

            var paginationRange = Math.max(scope.maxSize, 5);
            scope.pages = [];
            scope.pagination = {
                last: 1,
                current: 1
            };
            scope.range = {
                lower: 1,
                upper: 1,
                total: 1
            };

            scope.$watch('maxSize', function(val) {
                if (val) {
                    paginationRange = Math.max(scope.maxSize, 5);
                    generatePagination();
                }
            });

            scope.$watch(function() {
                if (paginationService.isRegistered(paginationId)) {
                    return (paginationService.getCollectionLength(paginationId) + 1) * paginationService.getItemsPerPage(paginationId);
                }
            }, function(length) {
                if (0 < length) {
                    generatePagination();
                }
            });

            scope.$watch(function() {
                if (paginationService.isRegistered(paginationId)) {
                    return (paginationService.getItemsPerPage(paginationId));
                }
            }, function(current, previous) {
                if (current != previous && typeof previous !== 'undefined') {
                    goToPage(scope.pagination.current);
                }
            });

            scope.$watch(function() {
                if (paginationService.isRegistered(paginationId)) {
                    return paginationService.getCurrentPage(paginationId);
                }
            }, function(currentPage, previousPage) {
                if (currentPage != previousPage) {
                    goToPage(currentPage);
                }
            });

            scope.setCurrent = function(num) {
                if (paginationService.isRegistered(paginationId) && isValidPageNumber(num)) {
                    num = parseInt(num, 10);
                    paginationService.setCurrentPage(paginationId, num);
                }
            };

            /**
             * Custom "track by" function which allows for duplicate "..." entries on long lists,
             * yet fixes the problem of wrongly-highlighted links which happens when using
             * "track by $index" - see https://github.com/michaelbromley/angularUtils/issues/153
             * @param id
             * @param index
             * @returns {string}
             */
            scope.tracker = function(id, index) {
                return id + '_' + index;
            };

            function goToPage(num) {
                if (paginationService.isRegistered(paginationId) && isValidPageNumber(num)) {
                    var oldPageNumber = scope.pagination.current;

                    scope.pages = generatePagesArray(num, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                    scope.pagination.current = num;
                    updateRangeValues();

                    // if a callback has been set, then call it with the page number as the first argument
                    // and the previous page number as a second argument
                    if (scope.onPageChange) {
                        scope.onPageChange({
                            newPageNumber : num,
                            oldPageNumber : oldPageNumber
                        });
                    }
                }
            }

            function generatePagination() {
                if (paginationService.isRegistered(paginationId)) {
                    var page = parseInt(paginationService.getCurrentPage(paginationId)) || 1;
                    scope.pages = generatePagesArray(page, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                    scope.pagination.current = page;
                    scope.pagination.last = scope.pages[scope.pages.length - 1];
                    if (scope.pagination.last < scope.pagination.current) {
                        scope.setCurrent(scope.pagination.last);
                    } else {
                        updateRangeValues();
                    }
                }
            }

            /**
             * This function updates the values (lower, upper, total) of the `scope.range` object, which can be used in the pagination
             * template to display the current page range, e.g. "showing 21 - 40 of 144 results";
             */
            function updateRangeValues() {
                if (paginationService.isRegistered(paginationId)) {
                    var currentPage = paginationService.getCurrentPage(paginationId),
                        itemsPerPage = paginationService.getItemsPerPage(paginationId),
                        totalItems = paginationService.getCollectionLength(paginationId);

                    scope.range.lower = (currentPage - 1) * itemsPerPage + 1;
                    scope.range.upper = Math.min(currentPage * itemsPerPage, totalItems);
                    scope.range.total = totalItems;
                }
            }
            function isValidPageNumber(num) {
                return (numberRegex.test(num) && (0 < num && num <= scope.pagination.last));
            }
        }

        /**
         * Generate an array of page numbers (or the '...' string) which is used in an ng-repeat to generate the
         * links used in pagination
         *
         * @param currentPage
         * @param rowsPerPage
         * @param paginationRange
         * @param collectionLength
         * @returns {Array}
         */
        function generatePagesArray(currentPage, collectionLength, rowsPerPage, paginationRange) {
            var pages = [];
            var totalPages = Math.ceil(collectionLength / rowsPerPage);
            var halfWay = Math.ceil(paginationRange / 2);
            var position;

            if (currentPage <= halfWay) {
                position = 'start';
            } else if (totalPages - halfWay < currentPage) {
                position = 'end';
            } else {
                position = 'middle';
            }

            var ellipsesNeeded = paginationRange < totalPages;
            var i = 1;
            while (i <= totalPages && i <= paginationRange) {
                var pageNumber = calculatePageNumber(i, currentPage, paginationRange, totalPages);

                var openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'));
                var closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'));
                if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                    pages.push('...');
                } else {
                    pages.push(pageNumber);
                }
                i ++;
            }
            return pages;
        }

        /**
         * Given the position in the sequence of pagination links [i], figure out what page number corresponds to that position.
         *
         * @param i
         * @param currentPage
         * @param paginationRange
         * @param totalPages
         * @returns {*}
         */
        function calculatePageNumber(i, currentPage, paginationRange, totalPages) {
            var halfWay = Math.ceil(paginationRange/2);
            if (i === paginationRange) {
                return totalPages;
            } else if (i === 1) {
                return i;
            } else if (paginationRange < totalPages) {
                if (totalPages - halfWay < currentPage) {
                    return totalPages - paginationRange + i;
                } else if (halfWay < currentPage) {
                    return currentPage - halfWay + i;
                } else {
                    return i;
                }
            } else {
                return i;
            }
        }
    }

    /**
     * This filter slices the collection into pages based on the current page number and number of items per page.
     * @param paginationService
     * @returns {Function}
     */
    function itemsPerPageFilter(paginationService) {

        return function(collection, itemsPerPage, paginationId) {
            if (typeof (paginationId) === 'undefined') {
                paginationId = DEFAULT_ID;
            }
            if (!paginationService.isRegistered(paginationId)) {
                throw 'pagination directive: the itemsPerPage id argument (id: ' + paginationId + ') does not match a registered pagination-id.';
            }
            var end;
            var start;
            if (angular.isObject(collection)) {
                itemsPerPage = parseInt(itemsPerPage) || 9999999999;
                if (paginationService.isAsyncMode(paginationId)) {
                    start = 0;
                } else {
                    start = (paginationService.getCurrentPage(paginationId) - 1) * itemsPerPage;
                }
                end = start + itemsPerPage;
                paginationService.setItemsPerPage(paginationId, itemsPerPage);

                if (collection instanceof Array) {
                    // the array just needs to be sliced
                    return collection.slice(start, end);
                } else {
                    // in the case of an object, we need to get an array of keys, slice that, then map back to
                    // the original object.
                    var slicedObject = {};
                    angular.forEach(keys(collection).slice(start, end), function(key) {
                        slicedObject[key] = collection[key];
                    });
                    return slicedObject;
                }
            } else {
                return collection;
            }
        };
    }

    /**
     * Shim for the Object.keys() method which does not exist in IE < 9
     * @param obj
     * @returns {Array}
     */
    function keys(obj) {
        if (!Object.keys) {
            var objKeys = [];
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    objKeys.push(i);
                }
            }
            return objKeys;
        } else {
            return Object.keys(obj);
        }
    }

    /**
     * This service allows the various parts of the module to communicate and stay in sync.
     */
    function paginationService() {

        var instances = {};
        var lastRegisteredInstance;

        this.registerInstance = function(instanceId) {
            if (typeof instances[instanceId] === 'undefined') {
                instances[instanceId] = {
                    asyncMode: false
                };
                lastRegisteredInstance = instanceId;
            }
        };

        this.deregisterInstance = function(instanceId) {
            delete instances[instanceId];
        };
        
        this.isRegistered = function(instanceId) {
            return (typeof instances[instanceId] !== 'undefined');
        };

        this.getLastInstanceId = function() {
            return lastRegisteredInstance;
        };

        this.setCurrentPageParser = function(instanceId, val, scope) {
            instances[instanceId].currentPageParser = val;
            instances[instanceId].context = scope;
        };
        this.setCurrentPage = function(instanceId, val) {
            instances[instanceId].currentPageParser.assign(instances[instanceId].context, val);
        };
        this.getCurrentPage = function(instanceId) {
            var parser = instances[instanceId].currentPageParser;
            return parser ? parser(instances[instanceId].context) : 1;
        };

        this.setItemsPerPage = function(instanceId, val) {
            instances[instanceId].itemsPerPage = val;
        };
        this.getItemsPerPage = function(instanceId) {
            return instances[instanceId].itemsPerPage;
        };

        this.setCollectionLength = function(instanceId, val) {
            instances[instanceId].collectionLength = val;
        };
        this.getCollectionLength = function(instanceId) {
            return instances[instanceId].collectionLength;
        };

        this.setAsyncModeTrue = function(instanceId) {
            instances[instanceId].asyncMode = true;
        };

        this.setAsyncModeFalse = function(instanceId) {
            instances[instanceId].asyncMode = false;
        };

        this.isAsyncMode = function(instanceId) {
            return instances[instanceId].asyncMode;
        };
    }

    /**
     * This provider allows global configuration of the template path used by the dir-pagination-controls directive.
     */
    function paginationTemplateProvider() {

        var templatePath = 'angularUtils.directives.dirPagination.template';
        var templateString;

        /**
         * Set a templateUrl to be used by all instances of <dir-pagination-controls>
         * @param {String} path
         */
        this.setPath = function(path) {
            templatePath = path;
        };

        /**
         * Set a string of HTML to be used as a template by all instances
         * of <dir-pagination-controls>. If both a path *and* a string have been set,
         * the string takes precedence.
         * @param {String} str
         */
        this.setString = function(str) {
            templateString = str;
        };

        this.$get = function() {
            return {
                getPath: function() {
                    return templatePath;
                },
                getString: function() {
                    return templateString;
                }
            };
        };
    }
})();

// document.getElementById("logoutButton").addEventListener("click", function () {
//     // Redirect to the login page when the logout button is clicked
//     // window.location.href = "log_in.html";
//   });

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('logout').addEventListener("click", function () {
        localStorage.removeItem("token");
        window.location.href = "log_in.html";
    })
})
