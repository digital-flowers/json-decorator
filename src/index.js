const json = (...ignore) => Class => {
    Class.prototype.toJSON = function () {
        return Object.getOwnPropertyNames(this).reduce((a, b) => {
            if (!ignore.includes(b)) a[b] = this[b];
            return a;
        }, {});
    };
    return Class;
};

export default json;