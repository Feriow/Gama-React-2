import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import AnimationMorty from "../../assets/animation/morty-dance-loader.json";
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

  const valorQualquer = localStorage.getItem("@name");

  const handleClearStorage = () => {
    localStorage.removeItem("@name");
  };

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
        setTimeout(() => {
          setIsLoad(false);
        }, 1000);
      });
  }, [pages]);

  if (isLoad) {
    return (
      <div className="container loader">
        <Lottie
          animationData={AnimationMorty}
          style={{ width: 400, height: 400 }}
        ></Lottie>
      </div>
    );
  }

  return (
    <div className="container">
      {/* {valorQualquer}
      <button onClick={handleClearStorage}>Limpar localStorage</button> */}

      <h1 className="center">Rick and Morty YAAAL!!</h1>

      <div className="content">
        {data.map((item) => (
          <a href={item.url}>
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>Click to find out more</p>
            </div>
          </a>
        ))}
      </div>

      <div className="center navRM">
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
