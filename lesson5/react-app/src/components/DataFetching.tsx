import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
}

const FetchDataComponent: React.FC = () => {
  // State to hold the fetched data
  const [data, setData] = useState<Post[]>([]);
  // State to indicate loading status
  const [isLoading, setIsLoading] = useState(true);

  // State to handle any errors
  const [error, setError] = useState<Error | null>(null);
  const fetchData = async () => {
    try {
      // Perform the API call
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: Post[] = await response.json();
      // Update the state with the fetched data
      setData(data);
    } catch (error) {
      // Update the state with the error
      setError(error as Error);
    } finally {
      // Set loading to false once the data is fetched or an error occurs
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataComponent;
