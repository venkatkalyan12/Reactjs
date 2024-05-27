package Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Repositories.DiseaseRepository;
import Entity.Disease;

@RestController
@RequestMapping("/api/diseases")
public class DiseaseController {

    @Autowired
    private DiseaseRepository diseaseRepository;

    @GetMapping
    public List<Disease> getAllDiseases() {
        return diseaseRepository.findAll();
    }
}

