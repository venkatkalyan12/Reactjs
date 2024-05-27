package Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Entity.DoctorAvailability;
import Repositories.DoctorAvailabilityRepository;

@Service
public class DoctorAvailabilityService {

    @Autowired
    private DoctorAvailabilityRepository doctorAvailabilityRepository;

    public List<DoctorAvailability> getAllDoctorAvailability() {
        return doctorAvailabilityRepository.findAll();
    }

    public List<DoctorAvailability> getDoctorAvailabilityByHospital(Long hospitalId) {
        return doctorAvailabilityRepository.findByHospitalId(hospitalId);
    }
}