# dockerroutine see at http://localhost:3001/
docker build -t uisurvey:dev .
docker run -it --rm \
-v ${PWD}:/app \
-v /app/node_modules \
-p 3001:3000 \
-e CHOKIDAR_USEPOLLING=true \
uisurvey:dev