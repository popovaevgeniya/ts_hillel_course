var _a;
var obj = (_a = {},
    _a['blabla'] = 6,
    _a['blblbl'] = 8,
    _a['name'] = 'Name',
    _a);
var func = function (obj) {
    //Object.values(obj).forEach((value) => typeof value === "number")
    console.log(Object.values(obj));
    return Object.values(obj);
};
func(obj);
