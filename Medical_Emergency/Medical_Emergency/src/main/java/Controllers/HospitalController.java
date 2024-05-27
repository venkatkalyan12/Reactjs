package Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Entity.Hospital;
import Services.HospitalService;

@RestController
@RequestMapping("/api/hospitals")
public class HospitalController {

    @Autowired
    private HospitalService hospitalService;

    @PostMapping("/register")
    public ResponseEntity<Hospital> registerHospital(@RequestBody Hospital hospital) {
        Hospital registeredHospital = hospitalService.registerHospital(hospital);
        return ResponseEntity.ok(registeredHospital);
    }

    @PostMapping("/login")
    public ResponseEntity<Hospital> loginHospital(@RequestBody Hospital hospital) {
        Hospital foundHospital = hospitalService.findByUsername(hospital.getUsername());
        if (foundHospital != null && hospitalService.checkPassword(hospital.getPassword(), foundHospital.getPassword())) {
            return ResponseEntity.ok(foundHospital);
        } else {
            return ResponseEntity.status(401).build();
        }
    }
}
