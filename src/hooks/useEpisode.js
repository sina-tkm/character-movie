import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function useEpisode(selectId) {
    const [loading, setLoading] = useState(false);
    const [namecha, setCharacter] = useState(null);
    const [episode, setEpisodes] = useState([]);

    useEffect(() => {
        async function fetchEpisode() {
            try {
                setLoading(true);
                const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${selectId}`);
                setCharacter(data);

                const episodeId = data.episode.map((item)=>item.split('/').at(-1));
                const {data : episodeData} = await axios.get (`https://rickandmortyapi.com/api/episode/${episodeId}`)
                setEpisodes([episodeData].flat().slice(0,5))  
            } catch (error) {
                console.error(error);
                if (error.response) {
                    toast.error(error.response.data.error);
                } else {
                    toast.error("An unexpected error occurred");
                }
            } finally {
                setLoading(false);
            }
        }
        if (selectId) fetchEpisode();

    }, [selectId]);

    return { namecha, loading, episode };
}
