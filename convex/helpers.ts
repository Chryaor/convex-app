export const requireUser = async (ctx: QueryCtx) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
        throw new Error("Unauthorized");
    }
    return user;
}