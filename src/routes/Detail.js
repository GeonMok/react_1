import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState("");
  const [loading, setLoading] = useState(true);

  const getInfo = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const data = await response.json();
    setDetail(data);
    setLoading(false);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return loading ? (
    <h1>Detail</h1>
  ) : (
    <h3>Now you are seeing {detail.data.movie.title_long}!!</h3>
  );
}
export default Detail;
