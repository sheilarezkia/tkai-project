FROM node:latest

# Create a work directory and copy over our dependency manifest files.
RUN mkdir /app
WORKDIR /app
COPY /src /app/src
COPY /public /app/public
COPY ["package.json", "package-lock.json*", "./"]

# If you're using yarn:
#  yarn build
RUN npm install
RUN npm run build
CMD ["npm", "start"]
# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000
