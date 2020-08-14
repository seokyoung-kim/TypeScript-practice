import React from 'react';

type GreetingProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void;
}

const Greetings: React.FC<GreetingProps> = ({name, mark, optional, onClick}) => {
    const handleClick = () => onClick(name);

    return(
    <div>
        Hello, {name} {mark}
        {optional && <p>{optional}</p>}
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    </div>
    )
};

Greetings.defaultProps = {
    mark: '!'
}

export default Greetings;
