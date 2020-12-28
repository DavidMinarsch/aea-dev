# aea-dev
A repo for aea.dev site

## Development:

``` bash
hugo server -D
```

## Build

``` bash
HUGO_ENV="production hugo --gc --minify" hugo server
```

## Deployment:

``` bash
chmod +x deploy.sh
./deploy.sh
```
