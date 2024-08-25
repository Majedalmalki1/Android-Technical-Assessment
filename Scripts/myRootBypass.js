Java.perform(function() {
    var RootChecker = Java.use("com.tiagorlampert.rootcheck.util.RootChecker");
	 // Hooking checkRootMethodOne
    RootChecker.checkRootMethodOne.implementation = function() {
	console.log("checkRootMethodOne Bypassed")
        return false;
    };
	 // Hooking checkRootMethodTwo
    RootChecker.checkRootMethodTwo.implementation = function() {
	console.log("checkRootMethodTwo Bypassed")
        return false;
    };
});
