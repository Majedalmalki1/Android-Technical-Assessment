Java.perform(function() {
    // Enumerate all loaded classes
    var classes = Java.enumerateLoadedClassesSync();
    
    // Loop through all classes
    classes.forEach(function(className) {
        try {
            // Use classes that might be of interest (e.g., classes starting with specific package names)
            if (className.startsWith('com.tiagorlampert.rootcheck') || className.startsWith('com.example')) {
                var cls = Java.use(className);
                
                // Loop through all methods in the class
                var methods = cls.class.getDeclaredMethods();
                methods.forEach(function(method) {
                    var name = method.getName();
                    
                    // Log method details
                    console.log('Class: ' + className);
                    console.log('    Function: ' + name);
                    
                    try {
                        // Hook method
                        var overloads = cls[name].overloads;
                        overloads.forEach(function(overload) {
                            overload.implementation = function() {
                                var result;
                                var args = Array.prototype.slice.call(arguments);
                                
                                try {
                                    // Call the original method
                                    result = this[name].apply(this, arguments);
                                    
                                    // Log the return value
                                    if (result !== undefined) {
                                        console.log('    Called: ' + name + ' with args: ' + args + ' returned: ' + result);
                                    } else {
                                        console.log('    Called: ' + name + ' with args: ' + args + ' returned: void');
                                    }
                                } catch (e) {
                                    console.error('    Error calling method ' + name + ': ' + e.message);
                                }
                                
                                return result; // Ensure the original method continues to work
                            };
                        });
                    } catch (e) {
                        console.error('    Error hooking method ' + name + ': ' + e.message);
                    }
                });
            }
        } catch (e) {
            console.error('Error inspecting class ' + className + ': ' + e.message);
        }
    });
});
