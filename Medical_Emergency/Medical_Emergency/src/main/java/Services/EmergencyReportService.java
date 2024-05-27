package Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Entity.EmergencyReport;
import Repositories.EmergencyReportRepository;

@Service
public class EmergencyReportService {

    @Autowired
    private EmergencyReportRepository emergencyReportRepository;

    public EmergencyReport saveEmergencyReport(EmergencyReport emergencyReport) {
        return emergencyReportRepository.save(emergencyReport);
    }

    public List<EmergencyReport> getAllEmergencyReports() {
        return emergencyReportRepository.findAll();
    }
}