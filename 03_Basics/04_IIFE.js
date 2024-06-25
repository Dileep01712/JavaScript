// Immediately Invoked Function Expressions

(function connection1() {
    // Named IIFE
    console.log("Database connection established");
})();

// (Function Definition)(Function Execution)
((name) => {
    // Unnamed IIFE
    console.log(`Database connection established with ${name}`);
})("MySQL Connection");

(function connection2(name) {
    console.log(`Database connection established ${name}`);
})("MongoDB");