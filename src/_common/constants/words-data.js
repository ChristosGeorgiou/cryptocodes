(function () {
  'use strict';

  angular
    .module('app')
    .constant("WordsData", [
      "ΑΓΑΠΗ",
      "ΑΓΕΛΑΔΑ",
      "ΑΓΚΙΣΤΡΟ",
      "ΑΓΚΩΝΑ",
      "ΑΓΟΡΑ",
      "ΑΓΟΡΙ",
      "ΑΓΡΟΚΤΗΜΑ",
      "ΑΓΡΟΤΗΣ",
      "ΑΔΕΛΦΗ",
      "ΑΔΕΛΦΟΣ",
      "ΑΕΡΑΣ",
      "ΑΕΡΟΔΡΟΜΙΟ",
      "ΑΕΡΟΠΛΑΝΟ",
      "ΑΗΔΙΑ",
      "ΑΙΘΟΥΣΑ",
      "ΑΙΜΑ",
      "ΑΙΝΙΓΜΑ",
      "ΑΙΤΗΜΑ",
      "ΑΙΤΙΑ",
      "ΑΚΟΥΣΤΙΚΗ",
      "ΑΚΡΗ",
      "ΑΚΡΟΑΣΗ",
      "ΑΚΤΗ",
      "ΑΚΤΙΝΑ",
      "ΑΛΑΣ",
      "ΑΛΗΤΗΣ",
      "ΑΛΛΑΓΗ",
      "ΑΛΜΑ",
      "ΑΛΟΓΟ",
      "ΑΛΥΣΙΔΑ",
      "ΑΜΜΟΣ",
      "ΑΝΑΓΚΗ",
      "ΑΝΑΓΝΩΣΗ",
      "ΑΝΑΚΑΛΥΨΗ",
      "ΑΝΑΠΝΟΗ",
      "ΑΝΑΠΤΥΞΗ",
      "ΑΝΑΤΡΙΧΙΛΑ",
      "ΑΝΔΡΑΣ",
      "ΑΝΕΛΚΥΣΤΗΡΑΣ",
      "ΑΝΕΜΙΣΤΗΡΑΣ",
      "ΑΝΕΜΟΣ",
      "ΑΝΕΣΗ",
      "ΑΝΟΙΞΗ",
      "ΑΝΤΑΓΩ-ΝΙΣΜΟΣ",
      "ΑΝΤΑΛΛΑΓΗ",
      "ΑΝΤΑΜΟΙΒΗ",
      "ΑΝΤΙΓΡΑΦΟ",
      "ΑΝΤΙΔΡΑΣΗ",
      "ΑΝΤΙΟ",
      "ΑΝΤΙΧΕΙΡΑΣ",
      "ΑΝΤΛΙΑ",
      "ΑΞΙΑ",
      "ΑΠΑΝΤΗΣΗ",
      "ΑΠΑΤΕΩΝΑΣ",
      "ΑΠΟΒΛΗΤΑ",
      "ΑΠΟΓΕΥΜΑ",
      "ΑΠΟΠΕΙΡΑ",
      "ΑΠΟΣΤΑΣΗ",
      "ΑΠΟΤΕΛΕΣΜΑ",
      "ΑΠΟΤΥΠΩΜΑ",
      "ΑΠΟΦΑΣΗ",
      "ΑΠΩΛΕΙΑ",
      "ΑΡΑΧΝΕΣ",
      "ΑΡΓΙΑ",
      "ΑΡΙΘΜΗΤΙΚΗ",
      "ΑΡΙΘΜΟ-ΜΗΧΑΝΗ",
      "ΑΡΙΘΜΟΣ",
      "ΑΡΚΟΥΔΑ",
      "ΑΡΚΟΥΔΕΣ",
      "ΑΡΜΟΝΙΑ",
      "ΑΡΟΤΡΟ",
      "ΑΡΟΥΡΑΙΟΣ",
      "ΑΡΧΑΡΙΟΣ",
      "ΑΡΧΗ",
      "ΑΡΧΙΔΙΑ",
      "ΑΣΗΜΙ",
      "ΑΣΘΕΝΕΙΑ",
      "ΑΣΤΕΙΟ",
      "ΑΣΤΕΡΙ",
      "ΑΣΤΥΝΟΜΙΑ",
      "ΑΣΦΑΛΙΣΗ",
      "ΑΤΜΟΣ",
      "ΑΤΣΑΛΙ",
      "ΑΥΓΑ",
      "ΑΥΓΟ",
      "ΑΥΛΗ",
      "ΑΥΞΑΝΟΥΝ",
      "ΑΥΤΙ",
      "ΑΥΤΟΚΙΝΗΤΟ",
      "ΑΦΗ",
      "ΑΧΙΒΑΔΑ",
      "ΑΧΛΑΔΙ",
      "ΑΧΥΡΟ",
      "ΑΨΙΔΑ",
      "ΒΑΖΟ",
      "ΒΑΘΜΟΣ",
      "ΒΑΝ",
      "ΒΑΡΚΕΣ",
      "ΒΑΡΟΣ",
      "ΒΑΣΗ",
      "ΒΑΣΙΛΙΣΣΑ",
      "ΒΑΤΡΑΧΙΑ",
      "ΒΑΤΡΑΧΟΣ",
      "ΒΕΛΟ",
      "ΒΕΛΟΝΑ",
      "ΒΕΛΟΝΙΑ",
      "ΒΗΜΑ",
      "ΒΗΧΑΣ",
      "ΒΙΒΛΙΑ",
      "ΒΙΒΛΙΟ",
      "ΒΙΒΛΙΟΘΗΚΗ",
      "ΒΙΔΑ",
      "ΒΙΟΜΗΧΑΝΙΑ",
      "ΒΟΗΘΕΙΑ",
      "ΒΟΛΒΟΣ",
      "ΒΟΛΕΪ",
      "ΒΟΛΤΑ",
      "ΒΟΜΒΑ",
      "ΒΟΟΕΙΔΗ",
      "ΒΟΡΕΙΟΣ",
      "ΒΟΥΝΟ",
      "ΒΟΥΡΚΟΣ",
      "ΒΟΥΡΤΣΑ",
      "ΒΟΥΤΥΡΟ",
      "ΒΡΑΔΙΝΟ",
      "ΒΡΑΔΥ",
      "ΒΡΑΣΤΗΡΑΣ",
      "ΒΡΑΧΟΣ",
      "ΒΡΟΝΤΗ",
      "ΒΡΟΧΗ",
      "ΒΡΥΣΗ",
      "ΒΡΩΜΙΑ",
      "ΓΑΙΔΑΡΟΣ",
      "ΓΑΛΑ",
      "ΓΑΛΟΠΟΥΛΑ",
      "ΓΑΝΤΙ",
      "ΓΑΤΑ",
      "ΓΑΤΑΚΙ",
      "ΓΑΤΑΚΙΑ",
      "ΓΑΤΕΣ",
      "ΓΑΤΟΥΛΑ",
      "ΓΕΓΟΝΟΣ",
      "ΓΕΛΙΟ",
      "ΓΕΝΕΘΛΙΑ",
      "ΓΕΝΝΗΣΗ",
      "ΓΕΥΜΑ",
      "ΓΕΥΣΗ",
      "ΓΕΦΥΡΑ",
      "ΓΗ",
      "ΓΙΑΓΙΑ",
      "ΓΙΑΤΡΟΣ",
      "ΓΙΓΑΝΤΕΣ",
      "ΓΙΔΑ",
      "ΓΙΛΕΚΟ",
      "ΓΙΟΡΤΗ",
      "ΓΛΥΚΟΠΑΤΑΤΑ",
      "ΓΛΩΣΣΑ",
      "ΓΝΩΜΗ",
      "ΓΝΩΣΗ",
      "ΓΟΝΑΤΟ",
      "ΓΟΥΡΟΥΝΙΑ",
      "ΓΡΑΜΜΑΤΑ",
      "ΓΡΑΜΜΑΤΕΑΣ",
      "ΓΡΑΜΜΑΤΟ-ΚΙΒΩΤΙΟ",
      "ΓΡΑΜΜΗ",
      "ΓΡΑΣΙΔΙ",
      "ΓΡΑΦΕΙΟ",
      "ΓΡΑΨΙΜΟ",
      "ΓΥΝΑΙΚΑ",
      "ΓΥΝΑΙΚΕΣ",
      "ΓΩΝΙΑ",
      "ΔΑΓΚΩΜΑ",
      "ΔΑΝΤΕΛΑ",
      "ΔΑΧΤΥΛΑ",
      "ΔΑΧΤΥΛΙΔΙ",
      "ΔΑΧΤΥΛΟ",
      "ΔΕΙΝΟΣΑΥΡΟΙ",
      "ΔΕΚΑΡΑ",
      "ΔΕΜΑ",
      "ΔΕΝΤΡΑ",
      "ΔΕΝΤΡΟ",
      "ΔΕΞΑΜΕΝΗ",
      "ΔΕΡΜΑ",
      "ΔΕΣΜΗ",
      "ΔΗΛΗΤΗΡΙΟ",
      "ΔΗΛΩΣΗ",
      "ΔΗΜΙΟΥΡΓΟΣ",
      "ΔΙΑΔΙΚΑΣΙΑ",
      "ΔΙΑΔΡΟΜΗ",
      "ΔΙΑΙΡΕΣΗ",
      "ΔΙΑΚΟΠΕΣ",
      "ΔΙΑΜΑΡΤΥΡΙΑ",
      "ΔΙΑΝΟΜΗ",
      "ΔΙΑΣΚΕΔΑΣΗ",
      "ΔΙΑΦΗΜΙΣΗ",
      "ΔΙΑΦΩΝΙΑ",
      "ΔΙΔΑΣΚΑΛΙΑ",
      "ΔΙΕΥΘΥΝΤΗΣ",
      "ΔΙΚΑΣΤΗΣ",
      "ΔΙΚΗΓΟΡΟΣ",
      "ΔΙΟΧΕΤΕΥΩ",
      "ΔΙΣΚΟΣ",
      "ΔΟΚΙΜΗ",
      "ΔΟΛΩΜΑ",
      "ΔΟΜΗ",
      "ΔΟΝΤΙ ΖΩΟΥ",
      "ΔΟΝΤΙ",
      "ΔΟΝΤΙΑ",
      "ΔΟΥΛΕΙΑ",
      "ΔΟΥΛΟΣ",
      "ΔΟΧΕΙΟ",
      "ΔΡΑΣΗ",
      "ΔΡΑΣΤΗΡΙΟΤΗΤΑ",
      "ΔΡΟΜΑΚΙ",
      "ΔΡΟΜΟΣ",
      "ΔΥΝΑΜΗ",
      "ΔΩΜΑΤΙΟ",
      "ΕΑΥΤΟΣ",
      "ΕΒΔΟΜΑΔΑ",
      "ΕΓΚΑΥΜΑ",
      "ΕΓΚΕΦΑΛΟΣ",
      "ΕΓΚΛΗΜΑ",
      "ΕΓΚΡΙΣΗ",
      "ΕΔΑΦΟΣ",
      "ΕΔΡΑ",
      "ΕΘΝΟΣ",
      "ΕΙΔΙΚΟΣ",
      "ΕΙΔΟΣ",
      "ΕΙΚΟΝΑ",
      "ΕΙΡΗΝΗ",
      "ΕΙΣΙΤΗΡΙΟ",
      "ΕΙΣΟΔΗΜΑ",
      "ΕΚΚΛΗΣΙΑ",
      "ΕΚΜΑΓΕΙΟ",
      "ΕΚΠΑΙΔΕΥΣΗ",
      "ΕΚΠΛΗΞΗ",
      "ΕΚΠΡΟΣΩΠΟΣ",
      "ΕΚΡΗΞΗ",
      "ΕΛΑΙΟ",
      "ΕΛΑΦΙ",
      "ΕΛΕΓΧΟΣ",
      "ΕΛΞΗ",
      "ΕΛΠΙΔΑ",
      "ΕΜΠΕΙΡΙΑ",
      "ΕΜΠΟΡΙΟ",
      "ΕΜΠΡΟΣ",
      "ΕΝΔΙΑΦΕΡΟΝ",
      "ΕΝΔΥΜΑΤΑ",
      "ΕΝΝΟΙΑ",
      "ΕΝΤΟΜΟ",
      "ΕΞΟΥΣΙΑ",
      "ΕΠΕΚΤΑΣΗ",
      "ΕΠΙΒΑΤΗΣ",
      "ΕΠΙΘΕΣΗ",
      "ΕΠΙΘΥΜΙΑ",
      "ΕΠΙΛΟΓΗ",
      "ΕΠΙΠΕΔΟ",
      "ΕΠΙΠΛΑ",
      "ΕΠΙΣΚΕΠΤΗΣ",
      "ΕΠΙΣΤΗΜΗ",
      "ΕΠΙΣΤΟΛΗ",
      "ΕΠΙΤΡΟΠΗ",
      "ΕΠΙΧΕΙΡΗΣΗ",
      "ΕΡΓΑΤΗΣ",
      "ΕΡΗΜΙΑ",
      "ΕΡΩΤΗΣΗ",
      "ΕΣΟΧΗ",
      "ΕΣΤΙΑΤΟΡΙΟ",
      "ΕΣΩΡΟΥΧΑ",
      "ΕΤΑΙΡΕΙΑ",
      "ΕΤΑΙΡΟΣ",
      "ΕΤΟΣ",
      "ΕΥΚΑΙΡΙΑ",
      "ΕΥΧΑΡΙΣΤΗΣΗ",
      "ΕΦΕΥΡΕΣΗ",
      "ΖΑΛΗ",
      "ΖΑΧΑΡΗ",
      "ΖΕΒΡΑ",
      "ΖΕΦΥΡΟΣ",
      "ΖΗΤΙΑΝΟΣ",
      "ΖΥΓΟΣ",
      "ΖΩΝΗ",
      "ΖΩΟ",
      "ΖΩΟΛΟΓΙΚΟΣ",
      "ΗΘΟΠΟΙΟΣ",
      "ΗΛΙΟΣ",
      "ΗΜΕΡΑ",
      "ΗΜΕΡΟΛΟΓΙΟ",
      "ΗΣΥΧΙΑ",
      "ΗΦΑΙΣΤΕΙΟ",
      "ΗΧΟΣ",
      "ΘΑΛΑΣΣΑ",
      "ΘΑΜΝΟΙ",
      "ΘΑΝΑΤΟΣ",
      "ΘΕΑ",
      "ΘΕΙΑ",
      "ΘΕΙΟΣ",
      "ΘΕΡΑΠΕΙΑ",
      "ΘΕΡΜΟΤΗΤΑ",
      "ΘΕΣΗ",
      "ΘΕΩΡΙΑ",
      "ΘΗΡΙΟ",
      "ΘΟΡΥΒΟΣ",
      "ΘΡΗΣΚΕΙΑ",
      "ΘΡΟΝΟΣ",
      "ΘΥΜΟΣ",
      "ΘΥΡΑ",
      "ΙΔΕΑ",
      "ΙΔΙΟΚΤΗΤΗΣ",
      "ΙΣΟΡΡΟΠΙΑ",
      "ΙΣΤΙΟ",
      "ΙΣΤΟΡΙΑ",
      "ΙΣΤΟΣ",
      "ΙΧΝΟΣ",
      "ΚΑΔΟΣ",
      "ΚΑΘΑΡΑ",
      "ΚΑΙΡΟΣ",
      "ΚΑΚΤΟΣ",
      "ΚΑΛΑΘΙ",
      "ΚΑΛΑΜΠΟΚΙ",
      "ΚΑΛΟΚΑΙΡΙ",
      "ΚΑΛΤΣΑ",
      "ΚΑΛΥΜΜΑ",
      "ΚΑΛΩΔΙΟ",
      "ΚΑΜΒΑΣ",
      "ΚΑΜΗΛΟΠΑΡΔΑΛΗ",
      "ΚΑΜΠΑΝΕΣ",
      "ΚΑΜΠΥΛΗ",
      "ΚΑΝΑΛΙ",
      "ΚΑΝΑΠΕΣ",
      "ΚΑΝΟΝΑΣ",
      "ΚΑΝΟΝΙ",
      "ΚΑΠΑΚΙ",
      "ΚΑΠΕΛΟ",
      "ΚΑΠΝΟΣ",
      "ΚΑΡΒΟΥΝΟ",
      "ΚΑΡΔΙΑ",
      "ΚΑΡΕΚΛΑ",
      "ΚΑΡΕΚΛΕΣ",
      "ΚΑΡΟΤΣΑΚΙ",
      "ΚΑΡΠΟΣ",
      "ΚΑΡΤΑ",
      "ΚΑΡΦΙΤΣΑ",
      "ΚΑΣΚΟΛ",
      "ΚΑΣΣΙΤΕΡΟΣ",
      "ΚΑΤΑΣΚΗΝΩΣΗ",
      "ΚΑΤΑΣΚΟΠΟΣ",
      "ΚΑΤΑΣΤΑΣΗ",
      "ΚΑΤΑΣΤΗΜΑ",
      "ΚΑΤΑΣΤΡΟΦΗ",
      "ΚΑΤΕΥΘΥΝΣΗ",
      "ΚΑΤΟΙΚΙΔΙΟ",
      "ΚΑΤΟΡΘΩΤΗΣ",
      "ΚΑΥΣΙΜΑ",
      "ΚΑΥΤΟ",
      "ΚΕΙΚ",
      "ΚΕΛΑΡΙ",
      "ΚΕΝΤΡΟ",
      "ΚΕΡΑΣΙ",
      "ΚΕΡΑΣΙΑ",
      "ΚΕΡΑΤΟ",
      "ΚΕΡΔΟΣ",
      "ΚΕΡΙ",
      "ΚΕΦΑΛΙ",
      "ΚΗΛΙΔΑ",
      "ΚΗΠΟΣ",
      "ΚΙΘΑΡΑ",
      "ΚΙΜΩΛΙΑ",
      "ΚΙΝΗΣΗ",
      "ΚΙΝΗΤΗΡΑΣ",
      "ΚΛΑΔΑΚΙ",
      "ΚΛΑΔΙ",
      "ΚΛΕΙΔΑΡΙΑ",
      "ΚΛΕΙΔΙ",
      "ΚΛΙΜΑΚΑ",
      "ΚΛΙΣΗ",
      "ΚΟΙΝΩΝΙΑ",
      "ΚΟΚΚΙΝΟΛΑΙΜΗΣ",
      "ΚΟΛΛΑ",
      "ΚΟΜΜΑ",
      "ΚΟΜΜΑΤΙ",
      "ΚΟΜΠΟΣ",
      "ΚΟΡΑΚΙ",
      "ΚΟΡΔΟΝΙ",
      "ΚΟΡΗ",
      "ΚΟΡΙΤΣΙ",
      "ΚΟΡΙΤΣΙΑ",
      "ΚΟΡΥΦΗ",
      "ΚΟΣΜΗΜΑ",
      "ΚΟΣΤΟΥΜΙ",
      "ΚΟΤΑ",
      "ΚΟΤΟΠΟΥΛΑ",
      "ΚΟΤΟΠΟΥΛΟ",
      "ΚΟΥΔΟΥΝΙ",
      "ΚΟΥΖΙΝΑ",
      "ΚΟΥΚΛΑ",
      "ΚΟΥΚΛΕΣ",
      "ΚΟΥΚΟΥΒΑΓΙΑ",
      "ΚΟΥΛΟΥΡΑΚΙ",
      "ΚΟΥΜΠΙ",
      "ΚΟΥΝΕΛΙ",
      "ΚΟΥΝΕΛΙΑ",
      "ΚΟΥΝΙΑ",
      "ΚΟΥΡΕΜΑ",
      "ΚΟΥΡΤΙΝΑ",
      "ΚΟΥΤΑΛΙ",
      "ΚΟΥΤΙ",
      "ΚΡΑΣΙ",
      "ΚΡΑΥΓΗ",
      "ΚΡΕΑΣ",
      "ΚΡΕΒΑΤΙ",
      "ΚΡΕΒΑΤΙΑ",
      "ΚΡΕΜΑ",
      "ΚΤΙΡΙΟ",
      "ΚΥΒΕΡΝΗΣΗ",
      "ΚΥΒΕΡΝΗΤΗΣ",
      "ΚΥΔΩΝΙ",
      "ΚΥΚΛΟΣ",
      "ΚΥΜΑ",
      "ΚΥΜΑΤΙΣΤΑ",
      "ΛΑΒΗ",
      "ΛΑΘΟΣ",
      "ΛΑΙΜΟΣ",
      "ΛΑΚΤΙΣΜΑ",
      "ΛΑΜΠΑ",
      "ΛΑΧΑΝΙΚΟ",
      "ΛΑΧΑΝΟ",
      "ΛΕΖΑΝΤΑ",
      "ΛΕΚΑΝΗ",
      "ΛΕΞΗ",
      "ΛΕΠΙΔΑ",
      "ΛΕΠΤΟ",
      "ΛΕΠΤΟΜΕΡΕΙΑ",
      "ΛΕΣΧΗ",
      "ΛΙΜΑΝΙ",
      "ΛΙΜΝΗ",
      "ΛΙΝΟ",
      "ΛΙΣΤΑ",
      "ΛΟΓΑΡΙΑΣΜΟΣ",
      "ΛΟΓΟΣ",
      "ΛΟΙΜΟΣ",
      "ΛΟΥΛΟΥΔΙ",
      "ΛΟΥΛΟΥΔΙΑ",
      "ΛΟΥΤΡΟ",
      "ΛΟΦΟΣ",
      "ΜΑΓΕΙΑ",
      "ΜΑΓΕΙΡΑΣ",
      "ΜΑΖΑ",
      "ΜΑΘΗΣΗ",
      "ΜΑΛΛΙ",
      "ΜΑΛΛΙΑ",
      "ΜΑΜΑ",
      "ΜΑΝΙΚΑ",
      "ΜΑΞΙΛΑΡΙ",
      "ΜΑΡΜΑΡΟ",
      "ΜΑΡΜΕΛΑΔΑ",
      "ΜΑΡΟΥΛΙ",
      "ΜΑΣΚΑ",
      "ΜΑΣΤΙΓΙΟ",
      "ΜΑΤΙ",
      "ΜΑΤΙΑ",
      "ΜΑΧΑΙΡΙ",
      "ΜΑΧΗ",
      "ΜΕΓΕΘΟΣ",
      "ΜΕΔΟΥΣΑ",
      "ΜΕΛΑΝΙ",
      "ΜΕΛΙ",
      "ΜΕΛΙΣΣΑ",
      "ΜΕΝΤΑ",
      "ΜΕΡΟΣ",
      "ΜΕΣΗΜΕΡΙΑΝΟ",
      "ΜΕΣΗΣ",
      "ΜΕΤΑΛΛΙΟΘΗΚΗ",
      "ΜΕΤΑΛΛΟ",
      "ΜΕΤΑΝΙΩΝΩ",
      "ΜΕΤΑΞΙ",
      "ΜΕΤΑΦΟΡΑ",
      "ΜΕΤΡΗΣΕΙ",
      "ΜΗΛΑ",
      "ΜΗΛΟ",
      "ΜΗΝΑΣ",
      "ΜΗΤΕΡΑ",
      "ΜΗΤΡΙΚΗ ΕΤΑΙΡΕΙΑ",
      "ΜΗΧΑΝΗ",
      "ΜΙΣΩ",
      "ΜΝΗΜΗ",
      "ΜΟΛΥΒΔΟΣ",
      "ΜΟΛΥΒΙ",
      "ΜΟΝΑΔΑ",
      "ΜΟΡΦΗ",
      "ΜΟΥΡΟ",
      "ΜΟΥΣΙΚΗ",
      "ΜΠΑΛΑ",
      "ΜΠΑΛΟΝΙ",
      "ΜΠΑΜΠΑΣ",
      "ΜΠΑΝΑΝΑ",
      "ΜΠΑΝΙΟ",
      "ΜΠΑΣΚΕΤ",
      "ΜΠΑΣΤΟΥΝΙΑ",
      "ΜΠΕΙΖΜΠΟΛ",
      "ΜΠΟΤΑ",
      "ΜΠΟΥΚΑΛΙ",
      "ΜΠΡΑΤΣΟ",
      "ΜΥΑΛΟ",
      "ΜΥΓΑ",
      "ΜΥΘΙΣΤΟΡΗΜΑ",
      "ΜΥΡΜΗΓΚΙ",
      "ΜΥΡΜΗΓΚΙΑ",
      "ΜΥΡΩΔΙΑ",
      "ΜΥΣ",
      "ΜΥΤΗ",
      "ΜΩΡΑ",
      "ΜΩΡΟ",
      "ΝΕΑ",
      "ΝΕΚΡΟΤΑΦΕΙΟ",
      "ΝΕΟΓΝΟ ΖΩΟΥ",
      "ΝΕΡΑΙΔΕΣ",
      "ΝΕΡΟ",
      "ΝΕΡΟΠΟΝΤΗ",
      "ΝΕΡΟΧΥΤΗΣ",
      "ΝΕΥΡΟ",
      "ΝΗΜΑ",
      "ΝΗΣΙ",
      "ΝΟΣΟΚΟΜΕΙΟ",
      "ΝΤΟΜΑΤΕΣ",
      "ΝΤΡΟΠΗ",
      "ΝΥΧΙ",
      "ΝΥΧΤΕΡΙΔΑ",
      "ΞΕΝΟΣ",
      "ΞΥΛΕΙΑ",
      "ΞΥΛΟ",
      "ΞΥΛΟΥΡΓΟΣ",
      "ΟΔΗΓΗΣΗ",
      "ΟΔΗΓΟΣ",
      "ΟΔΟΝΤΟΒΟΥΡΤΣΑ",
      "ΟΔΟΝΤΟΚΡΕΜΑ",
      "ΟΙΚΟΓΕΝΕΙΑ",
      "ΟΙΚΟΠΕΔΟ",
      "ΟΛΙΣΘΗΜΑ",
      "ΟΜΑΔΑ",
      "ΟΜΙΛΙΑ",
      "ΟΜΙΧΛΗ",
      "ΟΜΠΡΕΛΑ",
      "ΟΝΟΜΑ",
      "ΟΠΛΟ",
      "ΟΡΓΑΝΙΣΜΟΣ",
      "ΟΡΓΑΝΟ",
      "ΟΡΕΙΧΑΛΚΟΣ",
      "ΟΡΙΟ",
      "ΟΡΥΧΕΙΟ",
      "ΟΣΤΟ",
      "ΟΥΡΑ",
      "ΟΥΡΑΝΟΣ",
      "ΟΥΣΙΑ",
      "ΠΑΓΟΚΡΥΣΤΑΛΛΟΣ",
      "ΠΑΓΟΣ",
      "ΠΑΙΔΙΑ",
      "ΠΑΙΔΙΚΗ ΧΑΡΑ",
      "ΠΑΙΧΝΙΔΙ",
      "ΠΑΛΗ",
      "ΠΑΛΤΟ",
      "ΠΑΝΙ",
      "ΠΑΝΤΕΛΟΝΙΑ",
      "ΠΑΞΙΜΑΔΙ",
      "ΠΑΠΙΑ",
      "ΠΑΠΙΕΣ",
      "ΠΑΠΛΩΜΑ",
      "ΠΑΠΟΥΤΣΙ",
      "ΠΑΠΟΥΤΣΙΑ",
      "ΠΑΠΠΟΥΣ",
      "ΠΑΡΑΓΓΕΛΙΑ",
      "ΠΑΡΑΓΩ",
      "ΠΑΡΑΔΕΙΓΜΑ",
      "ΠΑΡΑΘΥΡΟ",
      "ΠΑΡΑΚΟΛΟΥΘΩ",
      "ΠΑΡΑΛΑΒΗ",
      "ΠΑΡΑΛΙΑ",
      "ΠΑΡΑΤΗΡΗΣΗ",
      "ΠΑΡΚΟ",
      "ΠΑΣΤΑ",
      "ΠΑΣΤΕΛ",
      "ΠΑΤΑΤΑ",
      "ΠΑΤΕΡΑΣ",
      "ΠΑΤΙΝΑΖ",
      "ΠΑΤΩΜΑ",
      "ΠΑΧΝΙ",
      "ΠΕΔΙΟ",
      "ΠΕΖΟΓΡΑΦΙΑ",
      "ΠΕΖΟΔΡΟΜΙΟ",
      "ΠΕΜΠΤΟΣ",
      "ΠΕΝΝΑ",
      "ΠΕΡΙΛΑΙΜΙΟ",
      "ΠΕΤΡΑ",
      "ΠΕΨΗ",
      "ΠΗΓΟΥΝΙ",
      "ΠΗΚΤΗ",
      "ΠΙΘΗΚΟΣ",
      "ΠΙΚΛΑ",
      "ΠΙΡΟΥΝΙ",
      "ΠΙΣΤΕΥΩ",
      "ΠΙΣΤΗ",
      "ΠΙΣΤΩΣΗ",
      "ΠΙΣΩ",
      "ΠΙΤΑ",
      "ΠΙΤΕΣ",
      "ΠΙΤΣΕΣ",
      "ΠΛΑΙΣΙΟ",
      "ΠΛΑΚΑ",
      "ΠΛΑΣΜΑ",
      "ΠΛΑΣΤΙΚΗ ΥΛΗ",
      "ΠΛΑΤΕΙΑ",
      "ΠΛΕΥΡΑ",
      "ΠΛΗΓΗ",
      "ΠΛΗΓΜΑ",
      "ΠΛΗΘΟΣ",
      "ΠΛΗΡΩΜΗ",
      "ΠΛΙΓΟΥΡΙ ΒΡΩΜΗΣ",
      "ΠΛΟΙΟ",
      "ΠΛΟΥΤΟΣ",
      "ΠΛΥΣΗ",
      "ΠΟΔΗΛΑΤΑ",
      "ΠΟΔΗΛΑΤΟ",
      "ΠΟΔΙ",
      "ΠΟΔΙΑ",
      "ΠΟΛΕΜΟΣ",
      "ΠΟΛΗ",
      "ΠΟΝΟΣ",
      "ΠΟΝΤΙΚΙΑ",
      "ΠΟΠ ΚΟΡΝ",
      "ΠΟΡΤΟΚΑΛΙ",
      "ΠΟΡΤΟΚΑΛΙΑ",
      "ΠΟΣΟ",
      "ΠΟΤΑΜΙ",
      "ΠΟΤΗΡΙ",
      "ΠΟΤΟ",
      "ΠΟΥΚΑΜΙΣΟ",
      "ΠΟΥΛΕΡΙΚΟ",
      "ΠΟΥΛΙ",
      "ΠΟΥΛΙΑ",
      "ΠΟΥΛΟΒΕΡ",
      "ΠΡΑΓΜΑ",
      "ΠΡΑΓΜΑΤΑ",
      "ΠΡΑΞΗ",
      "ΠΡΟΒΑΤΟ",
      "ΠΡΟΒΟΛΗ",
      "ΠΡΟΚΥΜΑΙΑ",
      "ΠΡΟΠΟΝΗΤΗΣ",
      "ΠΡΟΣΑΡΜΟΓΗ",
      "ΠΡΟΣΘΕΣΗ",
      "ΠΡΟΣΟΧΗ",
      "ΠΡΟΣΦΟΡΑ",
      "ΠΡΟΣΩΠΟ",
      "ΠΡΟΤΑΣΗ",
      "ΠΡΩΙ",
      "ΠΡΩΙΝΟ",
      "ΠΤΕΡΥΓΑ",
      "ΠΤΗΣΗ",
      "ΠΤΥΧΗ",
      "ΠΤΩΣΗ",
      "ΠΥΛΗ",
      "ΠΥΡΟΣΒΕΣΤΗΣ",
      "ΡΑΒΔΙ",
      "ΡΑΒΔΟΣ",
      "ΡΑΓΑ",
      "ΡΑΦΙ",
      "ΡΕΚΟΡ",
      "ΡΕΥΜΑ",
      "ΡΙΖΑ",
      "ΡΟΛΟ",
      "ΡΟΛΟΓΙΑ",
      "ΡΟΛΟΙ",
      "ΡΥΖΙ",
      "ΡΥΘΜΟΣ",
      "ΡΥΠΑΝΣΗ",
      "ΡΩΓΜΗ",
      "ΣΑΚΑΡΑΚΑ",
      "ΣΑΚΟΣ",
      "ΣΑΛΙΓΚΑΡΙ",
      "ΣΑΛΙΓΚΑΡΙΑ",
      "ΣΑΠΟΥΝΙ",
      "ΣΑΡΚΑ",
      "ΣΑΥΡΕΣ",
      "ΣΕΒΑΣΜΟΣ",
      "ΣΕΙΚ",
      "ΣΕΙΡΑ",
      "ΣΕΙΣΜΟΣ",
      "ΣΕΛΙΔΑ",
      "ΣΕΛΙΝΟ",
      "ΣΕΝΤ",
      "ΣΕΝΤΟΝΙ",
      "ΣΗΜΑ",
      "ΣΗΜΑΔΙ",
      "ΣΗΜΑΙΑ",
      "ΣΗΜΕΙΟ",
      "ΣΗΜΕΙΩΜΑΤΑΡΙΟ",
      "ΣΗΜΕΙΩΣΗ",
      "ΣΙΔΕΡΟ",
      "ΣΙΔΗΡΟΔΡΟΜΙΚΟΣ",
      "ΣΙΤΗΡΑ",
      "ΣΚΑΘΑΡΙ",
      "ΣΚΑΚΙ",
      "ΣΚΑΦΟΣ",
      "ΣΚΕΨΗ",
      "ΣΚΗΝΗ",
      "ΣΚΙΑ",
      "ΣΚΙΑΧΤΡΟ",
      "ΣΚΙΟΥΡΟΣ",
      "ΣΚΟΝΗ",
      "ΣΚΟΠΟΣ",
      "ΣΚΟΥΛΗΚΙ",
      "ΣΚΥΛΙΑ",
      "ΣΚΥΛΟΣ",
      "ΣΜΗΝΟΣ",
      "ΣΟΔΑ",
      "ΣΟΚ",
      "ΣΟΥΠΑ",
      "ΣΠΑΣΙΜΟ",
      "ΣΠΕΙΡΑ",
      "ΣΠΗΛΑΙΟ",
      "ΣΠΙΘΑ",
      "ΣΠΙΤΙ",
      "ΣΠΙΤΙΑ",
      "ΣΠΟΡΟΣ",
      "ΣΠΡΩΞΤΕ",
      "ΣΤΑΔΙΟ",
      "ΣΤΑΘΜΟΣ",
      "ΣΤΑΣΗ",
      "ΣΤΑΦΥΛΙ",
      "ΣΤΕΓΗ",
      "ΣΤΕΛΕΧΟΣ",
      "ΣΤΕΜΜΑ",
      "ΣΤΙΛΒΩΣΗ",
      "ΣΤΙΦΑΔΟ",
      "ΣΤΙΧΟΣ",
      "ΣΤΟΛΙΔΙ",
      "ΣΤΟΜΑ",
      "ΣΤΟΜΑΧΙ",
      "ΣΤΡΑΤΟΣ",
      "ΣΤΡΟΦΗ",
      "ΣΤΥΛΟ",
      "ΣΥΓΓΡΑΦΕΑΣ",
      "ΣΥΓΚΙΝΗΣΗ",
      "ΣΥΓΚΡΙΣΗ",
      "ΣΥΖΗΤΗΣΗ",
      "ΣΥΜΒΑΝ",
      "ΣΥΜΒΟΥΛΗ",
      "ΣΥΜΜΕΤΟΧΗ",
      "ΣΥΜΠΕΡΙΦΟΡΑ",
      "ΣΥΜΦΩΝΙΑ",
      "ΣΥΝΑΙΣΘΗΜΑ",
      "ΣΥΝΑΝΤΗΣΗ",
      "ΣΥΝΔΕΣΗ",
      "ΣΥΝΕΠΕΙΑ",
      "ΣΥΝΝΕΦΑ",
      "ΣΥΝΝΕΦΟ",
      "ΣΥΝΟΡΟ",
      "ΣΥΝΤΡΙΒΗ",
      "ΣΥΡΜΑ",
      "ΣΥΡΤΑΡΙ",
      "ΣΥΣΚΕΥΗ",
      "ΣΥΣΤΗΜΑ",
      "ΣΥΣΤΡΟΦΗ",
      "ΣΦΟΥΓΓΑΡΙ",
      "ΣΦΡΑΓΙΔΑ",
      "ΣΦΥΡΙ",
      "ΣΦΥΡΙΖΩ",
      "ΣΧΕΔΙΟ",
      "ΣΧΕΣΗ",
      "ΣΧΗΜΑ",
      "ΣΧΟΛΕΙΟ",
      "ΣΩΛΗΝΑΣ",
      "ΣΩΜΑ",
      "ΤΑΙΡΙΑΖΩ",
      "ΤΑΛΑΙΠΩΡΙΑ",
      "ΤΑΞΗ",
      "ΤΑΞΙΔΙ",
      "ΤΑΣΗ",
      "ΤΕΙΧΟΣ",
      "ΤΕΛΟΣ",
      "ΤΕΝΤΩΜΑ",
      "ΤΕΤΑΡΤΟ",
      "ΤΕΧΝΑΣΜΑ",
      "ΤΕΧΝΗ",
      "ΤΖΙΝ",
      "ΤΗΓΑΝΙ",
      "ΤΗΓΑΝΙΤΑ",
      "ΤΙΓΡΗ",
      "ΤΙΜΗ",
      "ΤΙΜΩΡΙΑ",
      "ΤΙΤΛΟΣ",
      "ΤΟΥΒΛΟ",
      "ΤΟΥΦΕΚΙ",
      "ΤΡΑΒΩ",
      "ΤΡΑΓΟΥΔΙ",
      "ΤΡΑΓΟΥΔΙΑ",
      "ΤΡΑΠΕΖΙ",
      "ΤΡΕΝΑ",
      "ΤΡΕΝΟ",
      "ΤΡΕΞΙΜΟ",
      "ΤΡΙΑΝΤΑ-ΦΥΛΛΟ",
      "ΤΡΙΒΗ",
      "ΤΡΙΦΥΛΛΙ",
      "ΤΡΙΨΙΜΟ",
      "ΤΡΟΜΑΖΩ",
      "ΤΡΟΠΟΣ",
      "ΤΡΟΦΗ",
      "ΤΡΟΧΟΣ",
      "ΤΡΥΠΑ",
      "ΤΣΑΝΤΑ",
      "ΤΣΕΠΗ",
      "ΤΣΟΥΓΚΡΑΝΑ",
      "ΤΥΜΠΑΝΟ",
      "ΤΥΡΙ",
      "ΥΓΕΙΑ",
      "ΥΓΡΟ",
      "ΥΙΟΣ",
      "ΥΠΑΡΞΗ",
      "ΥΠΗΡΕΤΗΣ",
      "ΥΠΗΡΕΤΡΙΑ",
      "ΥΠΝΟΔΩ-ΜΑΤΙΟ",
      "ΥΠΝΟΣ",
      "ΥΠΟΛΟΙΠΟ",
      "ΥΠΟΣΤΗΡΙΞΗ",
      "ΥΠΟΥΡΓΟΣ",
      "ΥΦΗ",
      "ΦΑΝΤΑΣΜΑ",
      "ΦΑΡΜΑΚΟ",
      "ΦΑΣΟΛΙ",
      "ΦΕΓΓΑΡΙ",
      "ΦΕΛΛΟΣ",
      "ΦΕΡΜΟΥΑΡ",
      "ΦΙΔΙ",
      "ΦΙΔΙΑ",
      "ΦΙΛΙ",
      "ΦΙΛΟΙ",
      "ΦΙΛΟΣ",
      "ΦΛΕΒΑ",
      "ΦΛΙΤΖΑΝΙ",
      "ΦΛΟΓΑ",
      "ΦΟΒΟΣ",
      "ΦΟΡΕΜΑ",
      "ΦΟΡΟΣ",
      "ΦΟΡΤΗΓΑ",
      "ΦΟΡΤΗΓΟ",
      "ΦΟΥΡΝΟΣ",
      "ΦΟΥΣΤΑ",
      "ΦΡΑΚΤΗΣ",
      "ΦΡΑΤΖΟΛΑ",
      "ΦΡΕΝΟ",
      "ΦΡΟΝΤΙΔΑ",
      "ΦΤΑΡΝΙΣΜΑ",
      "ΦΤΕΡΟ",
      "ΦΤΥΑΡΙ",
      "ΦΥΛΑΚΗ",
      "ΦΥΛΛΟ",
      "ΦΥΣΑΛΛΙΔΑ",
      "ΦΥΤΑ",
      "ΦΥΤΕΙΑ",
      "ΦΥΤΟ",
      "ΦΩΛΙΑ",
      "ΦΩΝΗ",
      "ΦΩΣ",
      "ΦΩΤΙΑ",
      "ΦΩΤΟΓΡΑ-ΦΙΚΗ",
      "ΧΑΛΑΖΙΑΣ",
      "ΧΑΛΚΟΣ",
      "ΧΑΜΗΛΟΣ",
      "ΧΑΜΟΓΕΛΟ",
      "ΧΑΝΤΡΑ",
      "ΧΑΡΤΑΕΤΟΣ",
      "ΧΑΡΤΗΣ",
      "ΧΑΡΤΙ",
      "ΧΕΙΛΟΣ",
      "ΧΕΙΜΩΝΑΣ",
      "ΧΕΡΙ",
      "ΧΕΡΙΑ",
      "ΧΗΝΑ",
      "ΧΗΝΕΣ",
      "ΧΙΟΝΙ",
      "ΧΙΟΝΟΝΕΡΟ",
      "ΧΙΟΥΜΟΡ",
      "ΧΟΙΡΟΣ",
      "ΧΟΜΠΙ",
      "ΧΡΕΟΣ",
      "ΧΡΗΜΑΤΑ",
      "ΧΡΗΣΗ",
      "ΧΡΟΝΟΣ",
      "ΧΡΥΣΟΣ",
      "ΧΡΥΣΟΨΑΡΟ",
      "ΧΡΩΜΑ",
      "ΧΤΕΝΑ",
      "ΧΥΜΟΣ",
      "ΧΩΡΑ",
      "ΧΩΡΟΣ",
      "ΨΑΛΙΔΙ",
      "ΨΑΡΙ",
      "ΨΕΥΔΑΡΓΥ-ΡΟΣ",
      "ΨΩΜΙ",
      "ΩΘΗΣΗ",
      "ΩΚΕΑΝΟΣ",
      "ΩΡΑ"
    ]);

} ());
