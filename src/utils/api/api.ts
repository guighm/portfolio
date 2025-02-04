import { PostgrestError } from "@supabase/supabase-js";
import supabase from "../supabase"

type SetData<T> = (data: T | null) => void
type SetError = (error: PostgrestError | null) => void
type SetLoading = (loading: boolean) => void

const fetchData = async <T>(table: string, setData: SetData<T>, setError: SetError, setLoading: SetLoading) => {
    const { data, error } = await supabase.from(table).select();
    setData(data as T);
    setError(error);
    setLoading(false);
}

export default fetchData;