<h1 align="center">Uptime kuma ping</h1>

## Getting Started

### With Docker

Using docker compose:

```yaml
version: "3"
services:
  app:
    image: ghcr.io/jeufore/uptime-kuma-ping:latest
    container_name: uptime-kuma-ping
    environment:
      - URL=https://status.demo.example.com/api/push/z2hGpyEuiP
      - TZ=Europe/Paris # optional
```

### For the development

```bash
# install dependencies project
npm i

# start project
npm start
```

## .env
| Parameter             | Example value                                          | Description                               |
|-----------------------|--------------------------------------------------------|-------------------------------------------|
| URL                   | "https://status.demo.example.com/api/push/z2hGpyEuiP"  | Kuma push URL                             |
| TZ                    | "Europe/Paris"                                         | Timezone                                  |

<br/>

