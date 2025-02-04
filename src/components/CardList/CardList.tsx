import { useEffect, useState } from "react";
import styles from "./CardList.module.css";
import fetchData from "@/utils/api";
import { PostgrestError } from "@supabase/supabase-js";
import { Project } from "@/types";
import Loading from "../Loading";
import Error from "../Error";
import Card from "../Card/Card";

const CardList = () => {
    const [data, setData] = useState<Project[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<PostgrestError | null>(null);

    useEffect(() => {
        setTimeout(() => {
            fetchData("project", setData, setError, setLoading);
        }, 2000);
    }, [])

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <ul className={styles.lista}>
            {data!.map(projeto => 
                <li key={projeto.id}>
                    <Card link={projeto.link} titulo={projeto.title} tecnologias={projeto.technologies}/>
                </li>
            )}
        </ul>
    );
}

export default CardList;