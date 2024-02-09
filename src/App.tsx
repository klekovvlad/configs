import {FC, useEffect} from 'react';
import {API} from "./constaints/api.ts";

export const App: FC = () => {
  useEffect(() => {
    const getPage = async () => {
      const response = await fetch(API.WORDPRESS.PAGE(20))
      const data = await response.json()

      console.log(data)
    }

    getPage()
  }, []);

  return <>Hello</>;
};
