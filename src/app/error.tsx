'use client';

interface ErrorProps {
    statusCode?: number;
    message?: string;
  }
  
  const Error = ({ statusCode, message }: ErrorProps) => {
    return (
      <div>
        <h1>Error {statusCode}</h1>
        <p>{message}</p>
      </div>
    );
  };
  
  export default Error;
  