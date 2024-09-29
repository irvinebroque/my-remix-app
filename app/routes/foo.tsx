export async function loader({
    context,
  }) {
    const { env, cf, ctx } = context.cloudflare;
    await env.MY_NAMESPACE.put("bar", "baz")
    const bar = await env.MY_NAMESPACE.get("bar");
    return new Response(JSON.stringify({ bar }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
