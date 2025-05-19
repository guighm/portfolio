import { githubToken, githubUrl, githubUser, supabase } from "@/config/api";
import { Project, ProjectDTO, Repo } from "@/types";
import { PostgrestError } from "@supabase/supabase-js";

export const getProject = async (projeto: Project): Promise<ProjectDTO> => {

    const dto: ProjectDTO = {
        technologies: [],
        description: "",
        id: 0
    };

    const url = githubUrl + "/users/" + githubUser + "/repos";

    const response = await fetch(url, {
        headers: {
            Authorization: "Bearer " + githubToken,
        }
    })

    if (response.ok) {
        const data = await response.json();
        const repo: Repo = data.find((repo: Repo) => repo.name === projeto.name);
        dto.description = repo.description;
        dto.id = repo.id;
        const repos: Repo[] = data.filter((repo: Repo) => repo.name.startsWith(projeto.name));
        for (const repo of repos) {
            const url = githubUrl + "/repos/" + githubUser + "/" + repo.name + "/languages";
            const response = await fetch(url, {
                headers: {
                    Authorization: "Bearer " + githubToken,
                }
            })
            if (response.ok) {
                const data = await response.json();
                const languages = Object.keys(data);
                dto.technologies.push(...languages);
            } else {
                console.error("Error fetching data from GitHub API:", response.statusText);
            }
        }
    } else {
        console.error("Error fetching data from GitHub API:", response.statusText);
    }

    const nomes_para_remover = ["Dockerfile", "Shell", "JavaScript"];
    dto.technologies = dto.technologies.filter((value) => (!nomes_para_remover.includes(value)));
    dto.technologies = dto.technologies.filter((value, index) => (dto.technologies.indexOf(value) === index));
    return dto;
}

export const fetchData = async (
    table: string,
    setData: (data: Project[] | null) => void,
    setError: (error: PostgrestError | null) => void,
    setLoading: (loading: boolean) => void
) => {
    setLoading(true);
    const { data, error } = await supabase.from(table).select("*");

    if (error) {
        setError(error);
        setData(null);
    } else {
        setData(data as Project[]);
        setError(null);
    }

    setLoading(false);
};