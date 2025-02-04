import { useEffect, useState } from "react";
import styles from "./TechnologyList.module.css";
import fetchData from "@/utils/api";
import { PostgrestError } from "@supabase/supabase-js";
import { Technology } from "@/types";
import Loading from "../Loading";
import Error from "../Error";
import Image from "next/image";

const TechnologyList = () => {
    const [data, setData] = useState<Technology[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<PostgrestError | null>(null);

    useEffect(() => {
        setTimeout(() => {
            fetchData("technology", setData, setError, setLoading);
        }, 2500);
    }, [])

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <ul className={styles.lista}>
            {data!.map(tecnologia => 
                <li key={tecnologia.id}>
                    <Image src={tecnologia.image} width={40} height={40} alt={`Tecnologia ${tecnologia.id}`}/>
                </li>
            )}
        </ul>
    );
}

export default TechnologyList;