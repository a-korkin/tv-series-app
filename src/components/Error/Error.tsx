interface ErrorProps {
    message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
    return (
        <h2>{message}</h2>
    );
}

export default Error;
