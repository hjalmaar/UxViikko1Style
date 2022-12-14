import React, {useEffect, useState} from 'react';


// TODO: add necessary imports
const apiUrl = 'http://media.mw.metropolia.fi/wbma/';
const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {
    try{
      const response = await fetch(apiUrl + 'media?limit=5');
      const json = await response.json();
      console.log(json);
      const allMediaData = json.map(async (mediaItem) => {
        const response = await fetch(apiUrl + 'media/' + mediaItem.file_id);
        return await response.json();
      });

      setMediaArray(await Promise.all(allMediaData));
    } catch (error){
      console.log('media fetch failed', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);
  return {mediaArray};
};



const useUser = () => {

}

export {useMedia, useUser};