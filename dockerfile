# dockerroutine
# docker build -t uisurvey:dev .
# docker run -it --rm \
# -v ${PWD}:/app \
# -v /app/node_modules \
# -p 3001:3000 \
# -e CHOKIDAR_USEPOLLING=true \
# uisurvey:dev

# pull the base image
FROM node:16.13.0

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]