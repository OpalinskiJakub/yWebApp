FROM maven:3.8.3-openjdk-17-slim AS builder
WORKDIR /app
COPY . .
RUN mvn clean package -Dmaven.test.skip=true


FROM openjdk:17
WORKDIR /app
EXPOSE 8080
COPY --from=builder /app/target/ApiBackendYWebApp-0.0.1-SNAPSHOT.jar .
CMD java -jar ApiBackendYWebApp-0.0.1-SNAPSHOT.jar


