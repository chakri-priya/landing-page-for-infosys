@Entity
public class NotificationPreference {
    @Id
    private String userId;
    private String method; // email, sms, both

    // Getters and setters
}
