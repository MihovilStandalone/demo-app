package travistest.demo.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/test")
public class HelloWorldController {

    @GetMapping
    public IneedThis helloWorld(){
        return new IneedThis("Hello world");
    }

    public static class IneedThis{

        private String value;

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }

        private IneedThis(String value){
            this.value = value;
        }
    }
}
