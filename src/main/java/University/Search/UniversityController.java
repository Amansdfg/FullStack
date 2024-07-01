package University.Search;
import University.Search.UniversityRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.collections4.bidimap.UnmodifiableBidiMap;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import University.Search.University;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/universities")
@RequiredArgsConstructor
public class UniversityController {
    private final UniversityRepository repository;
    @GetMapping
    public ResponseEntity<List<University>> getAllUniversities(@RequestParam(value="page",required = false)Integer page) {
        Page<University> universities= repository.findAll(PageRequest.of(page,3));
        List<University> result=new ArrayList<>();
        for(University university:universities){
            result.add(university);
        }
        return ResponseEntity.ok(result);
    }

    @PostMapping
    public ResponseEntity<University> addUniversity(@RequestBody University university) {
        return ResponseEntity.ok(repository.save(university));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUniversity(@PathVariable("id") Long id) {
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/{id}")
    public ResponseEntity<University> getUniversity(@PathVariable("id") Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
