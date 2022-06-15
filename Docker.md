# Docker

## Docker run
```bash
docker build -t 'firma_ag' .
docker run -it -d \
    --name firma_ag \
    -v $(pwd)/src:/usr/src/app/src \
    -p 8080:8080 \
    --add-host=host.docker.internal:host-gateway \
    firma_ag
docker exec -it firma_ag /bin/bash    
```