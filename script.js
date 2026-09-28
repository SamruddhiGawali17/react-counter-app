const { useState } = React;

function App() {

    const [count, setCount] = useState(0);

    return (
        <div className="container">

            <h1>React Counter App</h1>

            <h2>{count}</h2>

            <div className="buttons">

                <button onClick={() => setCount(count + 1)}>
                    Increment
                </button>

                <button onClick={() => setCount(count - 1)}>
                    Decrement
                </button>

                <button onClick={() => setCount(0)}>
                    Reset
                </button>

            </div>

        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);