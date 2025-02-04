import { useEffect, useState } from "react";
import styles from "./LanguageList.module.css";
import { Language } from "@/types";
import { PostgrestError } from "@supabase/supabase-js";
import fetchData from "@/utils/api";
import Loading from "../Loading";
import Error from "../Error";
import Image from "next/image";

const LanguageList = () => {
    const [data, setData] = useState<Language[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<PostgrestError | null>(null);

    useEffect(() => {
        setTimeout(() => {
            fetchData("language", setData, setError, setLoading);
        }, 2000);
    }, [])

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <ul className={styles.lista}>
            {data!.map(linguagem => 
                <li key={linguagem.id}>
                    <Image src={linguagem.image} width={40} height={40} alt={`Linguagem ${linguagem.id}`}/>
                </li>
            )}
        </ul>
    );
};

export default LanguageList;