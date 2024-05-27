package Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Entity.DoctorAvailability;
import Entity.Hospital;
import Repositories.DoctorAvailabilityRepository;

@RestController
@RequestMapping("/api/doctor-availability")
public class DoctorAvailabilityController {

    @Autowired
    private DoctorAvailabilityRepository doctorAvailabilityRepository;

    @GetMapping
    public List<DoctorAvailability> getAllDoctorAvailability() {
        return doctorAvailabilityRepository.findAll();
    }

    @GetMapping("/hospital/{hospitalId}")
    public List<DoctorAvailability> getDoctorAvailabilityByHospital(@PathVariable Long hospitalId) {
        return doctorAvailabilityRepository.findByHospitalId(hospitalId);
    }
}

