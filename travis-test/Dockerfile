FROM adoptopenjdk/openjdk11:ubi
RUN mkdir /opt/app
COPY build/libs/*.jar app.jar
EXPOSE 80
ENTRYPOINT ["java","-jar","/app.jar"]
