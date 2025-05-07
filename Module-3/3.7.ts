{
    // Static members belong to the class itself rather than instances
    // This example demonstrates a counter that can be accessed without creating class instances

    class Counter {
        // Static property shared across all instances
        static count: number = 0;

        // Static method to increment the counter
        static increment() {
            return Counter.count = Counter.count + 1;
        }

        // Static method to decrement the counter
        static decrement() {
            return Counter.count = Counter.count - 1;
        }
    }

    // We can directly access static members through the class name
    // No need to create instances with 'new Counter()'
    console.log(Counter.increment()); // Output: 1

    // Each call to increment affects the same static count variable
    console.log(Counter.increment()); // Output: 2
}