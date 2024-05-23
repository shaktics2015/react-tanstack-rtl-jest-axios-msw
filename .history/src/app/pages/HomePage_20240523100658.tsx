// App.tsx
import React from 'react';
import { useQueryHook } from '../hooks/useQueryHook';
 
const HomePage: React.FC = () => {

    const {data, isLoading, isSuccess} = useQueryHook("1")
  if(isLoading)   return  <div>Loading...</div>;
  
  return (
    <div>
      {isSuccess && <pre  data-testid="data">{JSON.stringify(data, null, 2) }</pre>}
    </div>
  );
};

export default HomePage;
