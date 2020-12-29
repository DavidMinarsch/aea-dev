# aea-dev
A repo for aea.dev site

## Development:

``` bash
hugo server -D
```

The gif is produced using these tools:

- https://github.com/asciinema/asciinema
- https://github.com/asciinema/asciicast2gif

## Build

``` bash
HUGO_ENV="production hugo --gc --minify" hugo server
```

## Deployment:

``` bash
chmod +x deploy.sh
./deploy.sh
```
