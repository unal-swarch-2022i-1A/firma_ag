# Docker

## Docker run
### Desarrollo
```bash
docker build -t 'firma_ag:dev' . -f 'Dockerfile.dev'
docker rm -f 'firma_ag_dev' && \
docker run -it -d \
    --name firma_ag_dev \
    -v $(pwd)/src:/usr/src/app/src \
    -v $(pwd)/.env:/usr/src/app/.env \
    -p 3000:3000 \
    --add-host=host.docker.internal:host-gateway \
    firma_ag:dev \
    && \
docker logs --tail 1000 -f 'firma_ag_dev'
docker exec -it 'firma_ag_dev' /bin/bash    
```
### Producción
```bash
docker build -t 'firma_ag' .
docker rm -f 'firma_ag' && \
docker run -it -d \
    --name firma_ag \
    -p 8080:8080 \
    --add-host=host.docker.internal:host-gateway \
    firma_ag
docker logs --tail 1000 -f 'firma_ag'
docker exec -it 'firma_ag' /bin/bash    
```