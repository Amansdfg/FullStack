package University.Search;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping(value="/uni")
public class MainAman {
    @Autowired
    UniversityRepository universityRepository;
    @GetMapping("/home")
    public String page(@RequestParam(required = false,name="name")String name, Model model){
        List<University> universities=universityRepository.findAll();
        model.addAttribute("universities",universities);
        List<University> universitiesOne=universityRepository.findAllByNameContainingIgnoreCase(name);
        model.addAttribute("search",universitiesOne);
        return "home";
    }
    @GetMapping("/insert")
    public String insert(){
        return "insertUni";
    }
    @PostMapping("/insert")
    public String insertPost(@RequestParam("name")String name,@RequestParam("text")String text){
        universityRepository.save(new University(null,name,text));
        return "redirect:insert";
    }
    @GetMapping(value = "/details")
    public String details(@RequestParam("name") String name){
        return "home";
    }
}
