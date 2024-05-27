package Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import Entity.Hospital;
import Repositories.HospitalRepository;

@Service
public class HospitalService {

    @Autowired
    private HospitalRepository hospitalRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Hospital registerHospital(Hospital hospital) {
        // Encode the password before saving
        hospital.setPassword(passwordEncoder.encode(hospital.getPassword()));
        return hospitalRepository.save(hospital);
    }

    public Hospital findByUsername(String username) {
        return hospitalRepository.findByUsername(username);
    }

    public boolean checkPassword(String rawPassword, String encodedPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }
}
