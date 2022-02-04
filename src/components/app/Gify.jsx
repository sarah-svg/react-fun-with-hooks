import { logRoles } from '@testing-library/dom';
import React, { useEffect, useState } from 'react';
import { fetchGiphy } from '../fetch-giphy';
const newg = fetchGiphy();
console.log(newg);

export function Gify() {
  const [gif, setGif] = useState('');

  useEffect(() => {
    fetchGiphy().then(data => {
      setGif(data);
    });
  }, []);
     
  console.log(gif.images.downsized_large.url, 'gihy');
  return (
    <div>{gif.title}
      <a href={gif.url}>url</a>
      {/* <img src={gif.user.banner_image} alt={gif.title }/> */}
    </div>
  );
}


