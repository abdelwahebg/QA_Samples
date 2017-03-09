mvn clean install
sleep 10
cp /src/test/java/cucumberJava/*.feature /target/test-classes/cucumberJava
#mvn test
sleep 10
firefox ./target/cucumber/index.html