# Quick Start

Welcome to TensorBlock Forge—a single drop-in endpoint that lets you call today's best large language models while keeping your existing code and development workflow intact.

**TL;DR** — Change your base URL to `https://api.forge.tensorblock.co/v1`, supply your Forge API Key,  update model name, and you're done.

---

### 1. Connect Your Provider Keys

First, log in to the TensorBlock Forge dashboard at `https://forge.tensorblock.co`. Click the "Manage Provider Keys" button and add your API keys to connect your AI providers to Forge.

![Provider Keys List](assets/api-docs/assets/provider_list.png)

### 2. Create a Forge API Key

Next, click the large `+` button to create your first Forge key. This key allows you to access all your connected model providers through a single, OpenAI-compatible endpoint.

![Forge Key Generation](assets/api-docs/assets/forge_key_genertation.png)

Please save your Forge key in a safe place, as it will not be shown again for security reasons. If you forget to save it, don't worry—you can click the "Regenerate" button to get a new one at any time.

### 3. Make Your First Request

You can now use your Forge API key to make requests to any of your connected AI providers through our OpenAI-compatible endpoint. Remember to use the correct model name in your request so Forge can route it to the intended provider.

If you are not sure which model name to use, you can get a list of all available models by making a `GET` request to the `/v1/models` endpoint.

### 4. Going further

-   **Streaming**: Pass `stream: true` to any request—Forge will proxy the event stream unchanged.
-   **Add Custom Providers**: If a provider you want to use isn't on our list, you can add it by clicking the "Add Custom Provider" button. Alternatively, you can contribute directly to our platform by submitting a pull request to our [GitHub repository](https://github.com/tensorblock/forge).
-   **Model Mapping**: Create custom aliases for your most-used models for simpler API calls.

### 5. Next steps

-   Read the [Self-host guide](./self-hosting/installation.md) for installation details.
-   Check out the full [API Reference](./api-reference.html) (coming soon!).
-   Drop into our GitHub for help or feature requests.
