var app = angular.module("last-records.service", []);
app.factory('lastRecordsService', function(moment) {
    var lastRecords = {
        initialize: function(vm) {
            vm.administrationMode = false;
            vm.category = {};
            vm.viewingRecords = false;
            vm.editingStartVal = {};
            vm.editingEndVal = {};
            return vm;
        },
        initializeViewCategoryRecords: function(id, name, vm) {
            vm.viewingRecords = true;
            vm.viewingRecord = {};
            vm.viewingRecord.name = name;
            vm.viewingRecord.id = id;
            return vm;
        },
        afterGetCategoryRecords: function(result, vm) {
            vm.categoryRecords = {};
            vm.categoryRecords.data = result;
            vm.categoryRecords.id = vm.viewingRecord.id;
            vm.categoryRecords.name = vm.viewingRecord.name;
            return vm;
        },
        hideRecords: function(vm) {
            vm.categoryRecords = null;
            return vm;
         }

    };
    return lastRecords;
});