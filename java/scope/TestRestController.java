package scope;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestRestController {

    @RequestMapping(value = "/valueTest")
    public Object home(@RequestParam(required = false) String value1, @RequestParam(required = false) String value2) {
        Map<String, String> result = new HashMap<String, String>();
        result.put("value1", value1);
        result.put("value2", value2);
        return result;
    }
}