package Entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
	public class EmergencyReport {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String phoneNumber;

	    private String diseaseType;

	    private LocalDateTime reportTime = LocalDateTime.now();

	    

	    public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }

	    public String getPhoneNumber() {
	        return phoneNumber;
	    }

	    public void setPhoneNumber(String phoneNumber) {
	        this.phoneNumber = phoneNumber;
	    }

	    public String getDiseaseType() {
	        return diseaseType;
	    }

	    public void setDiseaseType(String diseaseType) {
	        this.diseaseType = diseaseType;
	    }

	    public LocalDateTime getReportTime() {
	        return reportTime;
	    }

	    public void setReportTime(LocalDateTime reportTime) {
	        this.reportTime = reportTime;
	    }

}
