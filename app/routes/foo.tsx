export async function loader({
    context,
  }) {
    const { env, cf, ctx } = context.cloudflare;
    await env.MY_NAMESPACE.put("bar", "baz")
    const bar = await env.MY_NAMESPACE.get("bar");

    const response = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
      prompt: "What is the origin of the phrase Hello, World",
    });

    return response;
  }
