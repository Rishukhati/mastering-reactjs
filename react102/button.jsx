function Button() {
    let count = 0;

    const handler = (name) => {
        count++;
        if (count < 3) {
            alert(`${name}, you clicked me ${count} times`);
        } else {
            alert(`${name}, stop clicking me 😅`);
        }
    };

    return (
        <button onClick={() => handler("rishu")}>
            Click me!
        </button>
    );
}

export default Button;
