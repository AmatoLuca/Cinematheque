import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import LikeMovieContext from "../../../context/likeMovie/likeMovieContext";
import { v4 as uuidv4 } from "uuid";
import DeleteMovieButton from "./DeleteMovieButton";


// Lists the user's favourite movies
const UserList = () => {
  const likeMovieContext = useContext(LikeMovieContext);
  const { getlikedMoviesFromDB } = likeMovieContext;

  let history = useHistory();

  const [list, setList] = useState([]);

  // On mount fetch movies from db
  useEffect(() => {
    try {
      const handleListFromDB = async () => {
        const res = await getlikedMoviesFromDB();
        setList(res);
      };

      handleListFromDB();

    } catch (error) {
      console.error(error);
    }

  }, []);


  return (
    <div className="personal-user-list">
      <div className="personal-user-list__inner">
        {list
          ? list.map((item) => (
              <div className="personal-user-list__card" key={uuidv4()}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                    alt="poster-movie"
                  />
                </div>
                <div
                  style={{ 
                    paddingBottom: '0.3rem' }}
                  >
                  {item.id}
                </div>
                <div 
                  style={{ 
                    fontWeight: 800, 
                    fontSize: '1.1rem', 
                    paddingBottom: '0.3rem',
                    textAlign: 'center'
                  }}>
                  {item.title}
                </div>
                <div 
                  style={{ 
                    paddingBottom: '0.3rem' }}
                  >
                  {item.vote_average}
                </div>
                <div 
                  style={{ 
                    paddingBottom: '0.3rem' }}
                  >
                  {item.release_date}
                </div>

                <DeleteMovieButton movieId={item.id} list={list} setList={setList} />

              </div>
            ))
          : history.push("/user-profile")}
      </div>
    </div>
  );
};

export default UserList;
