Java.perform(function () {
    var RootChecker = Java.use("com.tiagorlampert.rootcheck.util.RootChecker");
    
    // Hooking checkRootMethodOne
    RootChecker.checkRootMethodOne.implementation = function () {
        console.log("checkRootMethodOne called");
        var result = this.checkRootMethodOne();
        console.log("checkRootMethodOne result: " + result);
        return result;
    };

    // Hooking checkRootMethodTwo
    RootChecker.checkRootMethodTwo.implementation = function () {
        console.log("checkRootMethodTwo called");
        var result = this.checkRootMethodTwo();
        console.log("checkRootMethodTwo result: " + result);
        return result;
    };
});
