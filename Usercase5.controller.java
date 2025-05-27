@RestController
@RequestMapping("/api/preferences")
@CrossOrigin(origins = "http://localhost:4200")
public class NotificationController {

    @Autowired
    private NotificationPreferenceRepository repository;

    @PostMapping
    public ResponseEntity<String> savePreference(@RequestBody Map<String, String> payload) {
        NotificationPreference pref = new NotificationPreference();
        // Simulate user ID retrieval (in real apps, get from session or JWT)
        pref.setUserId("user123");
        pref.setMethod(payload.get("method"));
        repository.save(pref);
        return ResponseEntity.ok("Preference saved");
    }
}
