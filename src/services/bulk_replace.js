// Based on node-bulk-replace (https://github.com/jeresig/node-bulk-replace/blob/master/bulk-replace.js)
angular.module('atparkweb.kana').factory('bulkReplace', function () {
    return {
        replace: function (str, regex, map) {
            if (arguments.length === 2) {
                map = regex;
                regex = new RegExp(Object.keys(map).join(), "ig");
            }

            return str.replace(regex, function (all) {
                if (all in map) {
                    return map[all];
                }

                return all;
            });
        }
    };
});
