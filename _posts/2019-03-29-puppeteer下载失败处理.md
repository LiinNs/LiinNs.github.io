---
categories: javascript
tags: [nodejs, node, javascript, 无头浏览器, puppeteer]
comments: true
---
1.  Set "PUPPETEER_SKIP_CHROMIUM_DOWNLOAD" env variable to skip download.
{% highlight ruby linenos %}
vim .npmrc
# add this line
puppeteer_skip_chromium_download=true
Or
npm config set puppeteer_skip_chromium_download true -g
{% endhighlight %}
<!-- more -->
2. Use mirro to download
{% highlight ruby linenos %}
vim .npmrc
# add this line
type puppeteer_download_host = https://npm.taobao.org/mirrors
{% endhighlight %}

3. Just skip download puppeteer
env PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm i puppeteer -D
Or 
`npm install puppeteer --ignore-scripts`
Then view the needed reversion from /node_modules/puppeteer/package.json
{% highlight ruby linenos %}
"puppeteer": {
  "chromium_revision": "637110"
}
{% endhighlight %}
Download it from https://npm.taobao.org/mirrors/chromium-browser-snapshots/

And at last unzip it under `/node_modules/puppeteer.local-chromium/mac-637110/chrome-mac/` as below
![](/assets/images/puppeteer_path.jpg) 