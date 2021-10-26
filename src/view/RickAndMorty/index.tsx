import React, { useState, useEffect } from "react";
import api from "../../service/api";

interface IResults {
  id: number;
  image: string;
  name: string;
  url: string;
}

interface ICount {
  count: number;
  pages: number;
}

interface IResponseData {
  info: ICount;
  results: IResults[];
}

const RickAndMorty: React.FC = () => {
  const [data, setData] = useState<IResults[]>([]);
  const [pages, setPages] = useState<number>(1);
  const [info, setInfo] = useState<ICount>({} as ICount);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);

    api
      .get<IResponseData>(`?page=${pages}`)
      .then((response) => {
        console.log(response.data);
        setInfo(response.data?.info);
        setData(response.data?.results);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoad(false);
      });
  }, [pages]);

  return (
    <div>
      <h1>Rick and Morty YAAAL!!</h1>

      {data.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <a href={item.url}>Clique aqui para ver mais</a>
        </div>
      ))}

      <div>
        <button onClick={() => setPages(1)} disabled={pages <= 1}>
          First
        </button>
        <button onClick={() => setPages(pages - 1)} disabled={pages <= 1}>
          Previous
        </button>
        <button
          onClick={() => setPages(pages + 1)}
          disabled={pages >= info.pages}
        >
          Next
        </button>
        <button
          onClick={() => setPages(info.pages)}
          disabled={pages >= info.pages}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default RickAndMorty;
