import { useEffect } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const usePerfectScrollbar = (elementId) => {
  useEffect(() => {
    const element = document.getElementById(elementId);
    if (element) {
      new PerfectScrollbar(element, {
        wheelPropagation: false,
      });
    }
  }, [elementId]);
};

export default usePerfectScrollbar;
