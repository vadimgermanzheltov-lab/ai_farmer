const DEFAULT_MODEL = "openai/gpt-4o-mini";
const DEFAULT_TITLE = "Smart Poultry House Demo";
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

export default async (request) => {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        Allow: "POST, OPTIONS"
      }
    });
  }

  if (request.method !== "POST") {
    return json(
      { error: "Method not allowed" },
      405
    );
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  const model = process.env.OPENROUTER_MODEL || DEFAULT_MODEL;
  const siteName = process.env.OPENROUTER_SITE_NAME || DEFAULT_TITLE;

  if (!apiKey) {
    return json(
      { error: "AI backend is not configured yet." },
      503
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json(
      { error: "Invalid JSON body." },
      400
    );
  }

  const { systemPrompt, userPrompt, siteUrl } = payload || {};

  if (!systemPrompt || !userPrompt) {
    return json(
      { error: "systemPrompt and userPrompt are required." },
      400
    );
  }

  const upstream = await fetch(OPENROUTER_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": siteUrl || "https://example.com",
      "X-OpenRouter-Title": siteName
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.4,
      max_tokens: 500
    })
  });

  if (!upstream.ok) {
    const errorText = await upstream.text();
    return json(
      {
        error: "OpenRouter request failed.",
        details: errorText.slice(0, 500)
      },
      upstream.status
    );
  }

  const data = await upstream.json();
  const content = data.choices?.[0]?.message?.content?.trim() || "";

  return json({ content });
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}
