# DNS

Tianyi Network 的 DNS 配置仓库。使用 [DNSControl](https://dnscontrol.org/) 以代码方式管理域名解析记录。

## 配置

1. 获取各 DNS 服务商的 API 凭证：

   - **Bunny DNS**：登录 [Bunny](https://bunny.net) 控制台，在 Account Settings → API 中创建 API Key。
   - **Cloudflare**：登录 [Cloudflare Dashboard](https://dash.cloudflare.com)，在 我的个人资料 → API 令牌 中创建 API 令牌，权限选择 区域 → DNS → 编辑，并将区域资源限定为对应的区域。

2. 复制示例文件：

   ```sh
   cp creds-example.json creds.json
   ```

3. 将获取到的凭证填入 `creds.json`：

   ```json
   {
     "bunny": {
       "TYPE": "BUNNY_DNS",
       "api_key": "<bunny-api-key>"
     },
     "cloudflare": {
       "TYPE": "CLOUDFLAREAPI",
       "apitoken": "<cloudflare-api-key>"
     }
   }
   ```

## 使用

1. 安装 DNSControl，参见[官方文档](https://docs.dnscontrol.org/getting-started/getting-started)。

2. 预览变更：

   ```sh
   dnscontrol preview
   ```

3. 推送变更：

   ```sh
   dnscontrol push
   ```
