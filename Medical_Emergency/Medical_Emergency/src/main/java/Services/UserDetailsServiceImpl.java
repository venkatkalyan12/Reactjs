package Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import Entity.Hospital;
import Repositories.HospitalRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private HospitalRepository hospitalRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Hospital hospital = hospitalRepository.findByUsername(username);
        if (hospital == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return hospital;
    }
}
