import { getProject } from "@/utils/utils";
import styles from "./Card.module.css";
import { Project, ProjectDTO } from "@/types";
import { useEffect, useState } from "react";

const Card = ({project} : {project: Project}) => {

    const [data, setData] = useState<ProjectDTO | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProject(project);
            setData(response);
        };
        fetchData();
    }, [project]);

    return (
        <a href={`https://github.com/guighm/${project.name}`} className={styles.link}>
            <div className={styles.card}>
                <p className={styles.titulo}>{data && data.description}</p>
                <div className={styles.tecnologias}>
                    <ul className={styles.lista}>
                        {data && data.technologies.map((tecnologia) => (
                            <li key={tecnologia}>- {tecnologia}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </a>
    );
}

export default Card;