import { useAction } from "convex/react";
import { useState } from "react";
//import { v } from "convex/values"


export function GenerateTodosForm() {
    const [prompt, setPrompt] = useState("")
    const [loading,setLoading] = useState(false);
    const generateTodos = useAction(api.actions.generateTodos);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const todos = await generateTodos({ prompt })
            console.log(todos);
            setPrompt("");
        } catch(error) {
            console.log("Error",error);
        } finally {
            setLoading(false);
        }
        
    };

    if(loading) {
        return <p>Generating todos...</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-lg">Generate Tasks with AI 🪄</h2>
                <label className="text-sm font-semibold" htmlFor="prompt">Prompt</label>
                <input
                    type="text"
                    name="prompt"
                    id="prompt"
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
                />               
            </div>
        </form>
    );
}