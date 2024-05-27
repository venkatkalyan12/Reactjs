package Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Entity.EmergencyReport;
import Services.EmergencyReportService;

@RestController
@RequestMapping("/api/emergencies")
public class EmergencyController {

    @Autowired
    private EmergencyReportService emergencyReportService;

    @PostMapping("/report")
    public ResponseEntity<EmergencyReport> reportEmergency(@RequestBody EmergencyReport emergencyReport) {
        EmergencyReport savedReport = emergencyReportService.saveEmergencyReport(emergencyReport);
        return ResponseEntity.ok(savedReport);
    }
    
    @GetMapping
    public List<EmergencyReport> getAllEmergencyReports() {
        return emergencyReportService.getAllEmergencyReports();
    }

}
