import { RouteContext } from "https://deno.land/x/fresh@1.5.2/server.ts";

interface GithubResponse {
    login: string;
    name: string;
    avatar_url: string;
}

export default async function Page(_req: Request, ctx: RouteContext) {
    const resp = await fetch(
        `https://api.github.com/users/${ctx.params.username}`,
    );

    if (!resp.ok) {
        return <h1>An error ocurred</h1>;
    }

    const { login, name, avatar_url } = (await resp.json()) as GithubResponse;

    return (
        <div>
            <img src={avatar_url} width={64} height={64} />
            <h1>{name}</h1>
            <p>{login}</p>
        </div>
    )
}