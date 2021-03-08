FROM adoptopenjdk/openjdk11:ubi
RUN mkdir /opt/app
COPY build/libs/travis-test-0.0.1-SNAPSHOT.jar /app.jar
EXPOSE 80
ENTRYPOINT ["java","-jar","/app.jar"]
