import { useState, useEffect } from 'react';

const useToggle = (init = false) => {
  const [value, setValue] = useState(init);

  useEffect(() => {
    const handleClick = () => setValue(!value);
    if (value) {
      window.addEventListener('click', handleClick);
    }
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [value]);

  return [
    value,
    {
      set: setValue,
      toggle: () => setValue((flag) => !flag),
    },
  ];
};

export default useToggle;
