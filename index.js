
var Differences = function(_) {
    function deepDiff (a, b, r, reversible) {
        _.each(a, function (v, k) {
            // already checked this or equal...
            if (r.hasOwnProperty(k) || b[k] === v) return;
            // but what if it returns an empty object? still attach?
            r[k] = _.isObject(v) ? _.diff(v, b[k], reversible) : v;
        });
    }

    /* the function */
    return {
        shallowDiff: function (a, b) {
            return _.omit(a, function (v, k) {
                return b[k] === v;
            })
        },
        deepDiff: function (a, b, reversible) {
            var r = {};
            deepDiff(a, b, r, reversible);
            if (reversible) deepDiff(b, a, r, reversible);
            return r;
        }
    }
}    

module.exports = Differences;