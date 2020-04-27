import { useCallback } from "react";
import cogoToast from "cogo-toast";

export const useMessage = () => {
  return useCallback((text) => {
    if (window.M && text) {
      /*window.M.toast({ html: text });*/
      cogoToast.info(text);
    }
  }, []);
};

/*https://web3r.ru/js-css-alerts */
