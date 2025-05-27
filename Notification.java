@Component
@EnableScheduling
public class NotificationScheduler {

    @Autowired
    private JavaMailSender mailSender;

    @Scheduled(fixedRate = 900000) // every 15 minutes
    public void sendReminders() {
        // Simulated logic: retrieve upcoming appointments and preferences
        String recipientEmail = "patient@example.com";
        String message = "Reminder: Your vaccination is at 3:00 PM. Bring ID.";

        // Email
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(recipientEmail);
        mailMessage.setSubject("Vaccination Reminder");
        mailMessage.setText(message);
        mailSender.send(mailMessage);

        System.out.println("Reminder sent to: " + recipientEmail);
    }
}
