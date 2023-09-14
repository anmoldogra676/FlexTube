import { myAuthApi } from '../utils/contants';
import React, { useEffect, useState } from 'react';

const Buttons = () => {
  const [buttonListItems, setButtonListItems] = useState(null);

  const fetchVideoCategory = async () => {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&regionCode=in&key=${myAuthApi}`
    );
    const json = await res.json();
    // console.log(json);
    setButtonListItems(json.items);
  };

  useEffect(() => {
    fetchVideoCategory();
  }, []);

  const [selectedButton, setSelectedButton] = useState('');
  console.log(selectedButton)
  if (buttonListItems === null) {
    return null;
  }

  return (
    <div className='scrollbar-w-20'>
    <div className="w-full scrollbarshow sticky top-10vh my-10 mx-20 overflow-x-scroll">
        
      <div className="flex space-x-4">
        {buttonListItems.map((buttonName, index) => (
          <div key={buttonName?.id}>
            <button
              
              onClick={() => {
                
                setSelectedButton(buttonName?.snippet?.title);
                
              }}
              
            >
              {buttonName?.snippet?.title}
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Buttons;
