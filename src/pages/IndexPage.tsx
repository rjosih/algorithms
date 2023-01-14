const IndexPage = () => {
    return (
        <div className="container mx-auto border-2 p-10">
            <h1 className="text-4xl font-bold pb-4">IndexPage</h1>
            <div className="">
                <strong>Handling bigger data value</strong>
                <p>Suggestions for both `NumberArray` and `CharacterString`: </p>
                <ul className="list-decimal">
                    <li>
                        Web Workers: Web Workers enables to run JavaScript code independently of the main thread.
                        Con: the inability to access the DOM.
                    </li>
                    <li>
                        Chunk the data: Try to split the data into smaller sections and process them separately in different iterations.
                    </li>
                    <li>
                        Multithreading instead of typical singlethreading in Js.
                        Multithreading: allows you to run multiple threads in parallel which can improve performance greatly.
                    </li>
                    <li>
                        .reduce: .reduce() function is a powerful array method that lets you loop through an array and return a single item. 
                        When working with huge data arrays, it can be more efficient than using a for-loop.
                        .map and .filter: can be more efficient than using a for-loop also, especially when dealing with large data arrays.
                        (reduce is faster with bigger data volume while for-loops are more efficient with smaller data).
                        Reduce is another helpful tool when it comes to the many ways to iterate through an array in JavaScript. 
                        Reduce is great when it comes to chaining higher-order functions and abstracting away the looping process. The time complexity is O(n) because it iterates through all elements of the array so make note of that when adding additional processes inside of the reduce function.
                    </li>
                    <li>
                        Server-side rendering: processing data on the server instead of in the browser.
                    </li>
                    <li>
                        Both implementations have O(n).
                    </li>
                    <li>
                        <strong>If I would to the 2000000 elements array:</strong> Since this all happens in CRA I would try splitting the data into
                        smaller chunks and processing the data in the background with web workers or process it on the server. 
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default IndexPage;