import React, { useState, useEffect } from 'react';
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=32b342fe'

const App = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    // const searchMovies = async (title) => {
    //     const response = await fetch(`${API_URL}&s=${title}`);
    //     const data = await response.json();

    //     setMovies(data.Search);
    //     setLoading(false)
    // }


    // const searchMovies = (title) => {
    //     fetch(`${API_URL}&s=${title}`)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw Error(response.statusText);
    //             }
    //             return response.json()
    //         })
    //         .then(data => {
    //             setMovies(data.Search)
    //             setLoading(false)
    //         })
    //         .catch(function(error) {
    //             console.log(error)
    //         })
    // }
    
    useEffect(() => {
        const searchMovies = async (title) => {
            const response = await fetch(`${API_URL}ii&s=${title}`)

            if (!response.ok) {
  
                const message = `An errorrrr has occured: ${response.status}`;
                throw new Error(message);
            }

            const data = await response.json();

            
            setMovies(data.Search);
            setLoading(false)
        }
        // const searchMovies = async (title) => {
        //     const response = await fetch(`${API_URL}&s=${title}`);
        //     const data = await response.json()
        //     setMovies(data.Search);
        //     setLoading(false)
        // }
 
        // searchMovies("Batman").catch(console.log(console.error))

        searchMovies("Batman").catch(console.log(console.error))
    }, [])

    if (loading) {

        return (<h1>ok</h1>)

    }else{

        return (
            <div className="app">
                <h1>MovieLand</h1>
            
                <div className="search">
                    <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for movies"
                    />
                    <img
                    src={SearchIcon}
                    alt="search"
                    // onClick={() => searchMovies(searchTerm)}
                    />
                </div>
            
                {movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
            </div>
        );

    }
}

export default App;