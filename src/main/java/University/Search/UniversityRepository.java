package University.Search;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface UniversityRepository extends JpaRepository<University,Long>{
    List<University> findAllByNameContainingIgnoreCase(String name);
}
