LP Factory
======================

Templated approach to creating Landing Pages very quickly

```bash
git clone https://github.com/HyperCrowd/lp-factory.git
cd lp-factory
cp .env.sample .env
open https://platform.openai.com/account/api-keys
echo "Go to https://platform.openai.com/account/api-keys, create a new key, and paste it here, then press Enter:" && read -r input_key && sed -i "s/^OPENAI_KEY=.*/OPENAI_KEY=$input_key/" .env
```
