package Controllers;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Entity.Hospital;
import Services.HospitalService;

@RestController
@RequestMapping("/api/hospitals")
public class AuthController {

    @Autowired
    private HospitalService hospitalService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity<Hospital> registerHospital(@RequestBody Hospital hospital) {
        Hospital registeredHospital = hospitalService.registerHospital(hospital);
        return ResponseEntity.ok(registeredHospital);
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateHospital(@RequestBody Hospital hospital) {
        org.springframework.security.core.Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(hospital.getUsername(), hospital.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        return ResponseEntity.ok("Login successful");
    }
}