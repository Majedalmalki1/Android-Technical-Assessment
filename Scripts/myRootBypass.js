Java.perform(function() {
    var RootChecker = Java.use("com.tiagorlampert.rootcheck.util.RootChecker");
    RootChecker.checkRootMethodOne.implementation = function() {
	console.log("checkRootMethodOne Bypassed")
        return false;
    };
    RootChecker.checkRootMethodTwo.implementation = function() {
	console.log("checkRootMethodTwo Bypassed")
        return false;
    };
});