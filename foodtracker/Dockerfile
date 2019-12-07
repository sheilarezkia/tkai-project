FROM openjdk:8-jdk-alpine
WORKDIR /app
COPY target/foodtracker-0.0.1-SNAPSHOT.jar foodtracker-0.0.1-SNAPSHOT.jar
EXPOSE 9081
ENTRYPOINT java -jar foodtracker-0.0.1-SNAPSHOT.jar