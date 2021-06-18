# Base Redirect Cloudflare Worker Script

### Why it is needed?
This is a very simple tool developed using Cloudflare wroker and it will only work on Cloudflare worker's serverless infrustructure. Think that you have a website, that would have two versions, e.g. www.example.com and example.com. You might just want the domain without www. So this script would help you to redirect any request coming to www.example.com to example.com. This script can also be used as http to https protocol changer.

### How it works?
It works by first checking whether the base URL of your website matches or not. If it does math, it redirects the request to another domain and make sure every parameter like query, path. In order to run the script locally, you need to give your own `account_id` in `wrangler.toml` file.
<br>
For local development, run
```
wrangler dev
```
For publishing it to Cloudflare worker, run
```
wrangler publish
```

### What next?
It currently doesn't support headers. It may be a problem for API requests that heavily depend on headers. I may fix it later on!