// Load translations
const translations = {
    "en": {
        greeting: "👋 Hey there!",
        name: "I'm <span>Deniz Hönigs</span>",
        intro: "I'm a 12th grade student studying in <a href='https://sj.k12.tr' target='_blank'>Istanbul Saint-Joseph French High School</a>. <br> I'm mostly into programming and anything about technology. I've been invested in this stuff since primary school, looking for ways to improve and learn more. I effectively started my developer journey by creating video games as a hobby, which later ended up with me founding an indie game studio, where I worked on a variety of games for nearly 4 years. During an important portion of these years, I went into the domain of project management, overseeing and managing multiple game projects - simultaneously at times. Being born in a bilingual family and having studied in a French high school, I tend to learn new languages – in which I aspire to achieve proficiency.",
        report_cards_info: "Official report cards, result documents, and certificates may be provided upon request.",
        grades: "📑 School Grades",
        first_term: "First Term",
        second_term: "Second Term",
        grade_prep: "Prep Grade",
        grade_9: "9th Grade",
        grade_10: "10th Grade",
        grade_11: "11th Grade",
        grade_12: "12th Grade",
        class_1st: "#1 in class",
        class_3rd: "#3 in class",
        grade_1st: "#1 in grade",
        grade_3rd: "#3 in grade",
        grade_8th: "#8 in grade",
        grade_9th: "#9 in grade",
        test_results: "📊 Test Results",
        feb: "February",
        may: "May",
        jun: "June",
        aug: "August",
        nov: "November",
        listening: "Listening",
        reading: "Reading",
        writing: "Writing",
        speaking: "Speaking",
        use_of_english: "Use of English",
        maths: "Maths",
        english: "English",
        oral: "Oral section",
        written: "Written section",
        competitions: "🏅 Competitions",
        french: "French",
        turkish: "Turkish",
        german: "German",
        latin: "Latin",
        kangourou: "Mathematical Kangaroo",
        castor: "Castor Competition",
        waterloo: "Fermat Contest",
        cs: "Scientific Competition SJ",
        coder: "Coder of the Year",
        view_certificate: "View certificate",
        certificate_pending: "Certificate pending",
        covid_disclaimer: "Due to the COVID-19 pandemic, the Ministry of National Education allowed students to wipe second term grades.",
        pending_desc: "Results were officially published, but the certificate has not arrived yet.",
        view: "View",
        school_champion: "School Champion",
        grade_champion: "Grade Champion",
        intl_honor_roll: "Int'l Honor Roll",
        participation: "Participation",
        silver: "Silver Medalist",
        languages: "🌐 Languages",
        mother_tongue: "Mother Tongue",
        father_tongue: "Father Tongue",
        c1: "C1 Proficiency",
        c2: "C2 Mastery",
        learning: "Learning",
        honor_certificate: "Certificate of Honor",
        experience: "🏢 Experience",
        intern: "Internship",
        software: "Software",
        databases: "Databases",
        big_data: "Big Data",
        fintech: "Fintech",
        ecommerce: "E-commerce",
        cofounder: "Co-founder",
        gamedev: "Game Developer",
        project_manager: "Project Manager",
        game: "Game Development",
        dropout_desc_1: "Pursuing a career in game development, I decided to found a indie game studio with my friend, where I worked on a variety of little games for around 2 years. Although these being amateur projects, two of them were published, which gave me an understanding of every step in a mobile game's production pipeline.",
        dropout_desc_2: "I was in charge of the project management of a large-scale undisclosed PC title and a mobile commission project, whilst simultaneously helping out and overseeing the game development activities across projects studio-wide. <br> → Resigned from position to focus on academic studies and personal stuff.",
        koda_desc: "Kod-A Bilisim has been developing document-based technologies and providing solutions since 2006. Working as an intern, I had the opportunity to familiarize myself with various data management systems and software development processes.",
        fibabanka_desc: "As one of the leading banks in terms of digital banking services, working here gave me a general understanding of the fintech industry, and the limitless possibilities of technology's implementations in different sectors.",
        fmss_desc: "FMSS Bilişim Teknolojileri is a software company that provides outsourcing services in the fields of e-commerce and app development, as well as developing in-house projects. I had the chance to learn about the software development processes in a professional environment.",
        gunce_desc: "İstanbul Günceleri is a student newspaper initiative that aims to provide a platform for students. I redesigned all social media content, and continue to manage the social media accounts, actively posts and Reels. Take a look at the <a href='https://instagram.com/istanbulgunceleri' target='_blank'>Instagram account.</a>",
        social_media: "Social Media",
        graphic: "Graphic Design",
        video: "Video Editing",
        current: "today",
    },
    "tr": {
        greeting: "👋 Merhaba!",
        name: "Ben, <span>Deniz Hönigs</span>",
        intro: "Ben, <a href='https://sj.k12.tr' target='_blank'>İstanbul Saint-Joseph Fransız Lisesi</a>nde okuyan bir 12. sınıf öğrencisiyim. <br> Genel olarak yazılım ve teknolojiyle alakalı her şeyle ilgileniyorum. İlkokuldan beri bu konularla haşır neşir olup kendimi geliştirmenin ve daha fazlasını öğrenmenin yollarını arıyorum. Geliştiricilik yolculuğuma hobi olarak bilgisayar oyunları üreterek başladım, bu da beni 4 yıla yakın süre boyunca çeşitli oyunlar üzerinde çalışacağım bağımsız bir oyun stüdyosu kurmama önayak oldu. Bu yılların önemli bir kısmında proje yönetimi alanına daldım ve (zaman zaman aynı anda) birden fazla oyun projesini denetledim ve yönettim. İki dilli bir ailede doğmamın ve bir Fransız lisesinde okumamın etkisiyle yeni diller öğrenme – ve bu dillerde yetkinlik kazanma - eğilimindeyim.",
        report_cards_info: "Resmi not dökümleri, sonuç belgeleri ve sertifikalar talep üzerine sağlanabilir.",
        grades: "📑 Okul Notları",
        first_term: "Birinci Dönem",
        second_term: "İkinci Dönem",
        grade_prep: "Hazırlık Sınıfı",
        grade_9: "9. Sınıf",
        grade_10: "10. Sınıf",
        grade_11: "11. Sınıf",
        grade_12: "12. Sınıf",
        class_1st: "Sınıf 1.'si",
        class_3rd: "Sınıf 3.'sü",
        grade_1st: "Dönem 1.'si",
        grade_3rd: "Dönem 3.'sü",
        grade_8th: "Dönem 8.'si",
        grade_9th: "Dönem 9.'su",
        test_results: "📊 Sınav Sonuçları",
        feb: "Şubat",
        may: "Mayıs",
        jun: "Haziran",
        aug: "Ağustos",
        nov: "Kasım",
        listening: "Dinleme",
        reading: "Okuma",
        writing: "Yazma",
        speaking: "Konuşma",
        use_of_english: "Dil Yetkinliği",
        maths: "Matematik",
        english: "İngilizce",
        oral: "Sözlü bölüm",
        written: "Yazılı bölüm",
        competitions: "🏅 Yarışmalar",
        french: "Fransızca",
        turkish: "Türkçe",
        german: "Almanca",
        latin: "Latince",
        kangourou: "Kanguru Matematik",
        castor: "Castor Yarışması",
        waterloo: "Fermat Yarışması",
        cs: "SJ Bilim Yarışması",
        coder: "Yılın Kodcusu",
        view_certificate: "Sertifikayı görüntüle",
        certificate_pending: "Sertifika bekleniyor",
        covid_disclaimer: "COVID-19 pandemisi nedeniyle Milli Eğitim Bakanlığı öğrencilere ikinci dönem notlarını silme hakkı tanıdı.",
        pending_desc: "Sonuçlar resmi olarak yayınlandı, ancak sertifika henüz ulaşmadı.",
        view: "Görüntüle",
        school_champion: "Okul Şampiyonu",
        grade_champion: "Dönem Şampiyonu",
        intl_honor_roll: "U.arası Onur Listesi",
        participation: "Katılım",
        silver: "Gümüş Madalya",
        languages: "🌐 Diller",
        mother_tongue: "Ana Dil",
        father_tongue: "Baba Dili",
        c1: "C1 Yetkinlik",
        c2: "C2 Uzmanlık",
        learning: "Öğreniyorum",
        honor_certificate: "Onur Belgesi",
        experience: "🏢 Deneyim",
        intern: "Staj",
        software: "Yazılım",
        databases: "Veri tabanları",
        big_data: "Büyük Veri",
        fintech: "Fintech",
        ecommerce: "E-ticaret",
        cofounder: "Kurucu Ortak",
        gamedev: "Oyun Geliştirici",
        project_manager: "Proje Yöneticisi",
        game: "Oyun Geliştirme",
        dropout_desc_1: "Oyun geliştirme kariyerine yönelik olarak, bir arkadaşımla birlikte bağımsız bir oyun stüdyosu kurmaya karar verdim ve yaklaşık 2 yıl boyunca çeşitli küçük oyunlar üzerinde çalıştım. Amatör projeler olmalarına rağmen, bunlardan ikisi yayınlandı ve bu da beni bir mobil oyunun üretim sürecindeki her adımı kavramamı sağladı.",
        dropout_desc_2: "Büyük çaplı, duyurulmamış bir bilgisayar oyununun ve bir mobil oyunun proje yönetimini üstlendim. Ayrıca stüdyo çapındaki oyun geliştirme süreçlerini yönettim. <br> → Bu pozisyondan, eğitim ve kişisel hayatıma odaklanmak için çekildim.",
        koda_desc: "Kod-A Bilişim, 2006 yılından beri belge tabanlı teknoloji çözümleri sunmaktadır. Stajyer olarak çalışırken çeşitli veri yönetim sistemleri ve yazılım geliştirme süreçlerini tanıma fırsatı buldum.",
        fibabanka_desc: "Dijital bankacılık hizmetleri açısından önde gelen bankalardan biri olan Fibabanka'da çalışmak, fintech sektörü hakkında genel bir anlayış kazanmama ve teknolojinin farklı sektörlerdeki uygulamalarının sınırsız olasılıklarını görmeme olanak tanıdı.",
        fmss_desc: "FMSS Bilişim Teknolojileri, e-ticaret ve uygulama geliştirme alanlarında dış kaynak hizmetleri sunan ve aynı zamanda kendi projelerini geliştiren bir yazılım şirketidir. Burada, profesyonel bir ortamda yazılım geliştirme süreçlerini öğrenme şansı buldum.",
        gunce_desc: "İstanbul Günceleri, öğrencilere buluşma noktası sağlamayı amaçlayan bir öğrenci gazetesidir. Tüm sosyal medya içeriklerini yeniden tasarladım ve sosyal medya hesaplarını yönetmeye devam ediyorum, aktif olarak gönderi ve Reels paylaşıyorum. <a href='https://instagram.com/istanbulgunceleri' target='_blank'>Instagram hesabına</a>  göz atın.",
        social_media: "Sosyal Medya",
        graphic: "Grafik Tasarım",
        video: "Video Montaj",
        current: "bugün",
    },
    "fr": {
        greeting: "👋 Bonjour!",
        name: "Je suis <span>Deniz Hönigs</span>",
        intro: "Je suis élève de terminale au <a href='https://sj.k12.tr' target='_blank'>Lycée Français Saint-Joseph d'Istanbul</a>. <br> Je m'intéresse surtout à la programmation et à tout ce qui touche à la technologie. Je m'y intéresse depuis l'école primaire, cherchant à m'améliorer et à apprendre davantage. J'ai commencé mon parcours de développeur en créant des jeux vidéo en tant que hobby, ce qui m'a amené à fonder un studio indépendant de jeux, où j'ai travaillé sur une variété de jeux pendant presque 4 ans. Pendant une grande partie de ces années, j'ai travaillé dans le domaine de la gestion de projet, supervisant et gérant plusieurs projets de jeux - parfois simultanément. Étant né dans une famille bilingue et ayant étudié dans un lycée français, j'ai tendance à apprendre de nouvelles langues - dans lesquelles j'aspire à devenir compétent.",
        report_cards_info: "Les bulletins officiels, les documents de résultats et les certificats peuvent être fournis sur demande.",
        grades: "📑 Notes d'école",
        first_term: "Premier Semestre",
        second_term: "Deuxième Semestre",
        grade_prep: "Préparatoire",
        grade_9: "9ème",
        grade_10: "10ème",
        grade_11: "11ème",
        grade_12: "12ème",
        class_1st: "#1 de la classe",
        class_3rd: "#3 de la classe",
        grade_1st: "#1 de la promotion",
        grade_3rd: "#3 de la promotion",
        grade_8th: "#8 de la promotion",
        grade_9th: "#9 de la promotion",
        test_results: "📊 Résultats d'épreuves",
        feb: "Février",
        may: "Mai",
        jun: "Juin",
        aug: "Août",
        nov: "Novembre",
        listening: "Compréhension orale",
        reading: "Compréhension écrite",
        writing: "Production écrite",
        speaking: "Production orale",
        use_of_english: "Usage de la langue",
        maths: "Mathématiques",
        english: "Anglais",
        oral: "Épreuve orale",
        written: "Épreuve écrite",
        competitions: "🏅 Concours",
        french: "Français",
        turkish: "Turc",
        german: "Allemand",
        latin: "Latin",
        kangourou: "Kangourou des mathématiques",
        castor: "Concours Castor",
        waterloo: "Concours Fermat",
        cs: "Concours Scientifique SJ",
        coder: "Codeur de l'année",
        view_certificate: "Afficher le certificat",
        certificate_pending: "Certificat en attente",
        covid_disclaimer: "En raison de la pandémie de COVID-19, le ministère de l'Éducation nationale a autorisé les élèves à supprimer leurs notes du 2e semestre.",
        pending_desc: "Les résultats ont été officiellement publiés, mais le certificat n'est pas encore arrivé.",
        view: "Afficher",
        school_champion: "Champion d'école",
        grade_champion: "Champ. de promo",
        intl_honor_roll: "Liste d'honneur int'l",
        participation: "Participation",
        silver: "Médaillé d'argent",
        languages: "🌐 Langues",
        mother_tongue: "Langue maternelle",
        father_tongue: "Langue paternelle",
        c1: "C1 Maîtrise",
        c2: "C2 Expertise",
        learning: "En train d'apprendre",
        honor_certificate: "Certificat d'honneur",
        experience: "🏢 Expérience",
        intern: "Stage",
        software: "Logiciel",
        databases: "Bases de données",
        big_data: "Big Data",
        fintech: "Fintech",
        ecommerce: "E-commerce",
        cofounder: "Co-fondateur",
        gamedev: "Développeur de jeux",
        project_manager: "Chef des projets",
        game: "Développement de jeux",
        dropout_desc_1: "Poursuivant une carrière dans le développement de jeux, j'ai décidé de fonder un studio de jeux indépendant avec mon ami, où j'ai travaillé sur une variété de petits jeux pendant environ 2 ans. Bien que ces projets soient amateurs, deux d'entre eux ont été publiés, ce qui m'a permis de comprendre chaque étape du processus de production d'un jeu mobile.",
        dropout_desc_2: "J'étais chargé de la gestion de projet d'un titre PC à grande échelle non divulgué et d'un projet de commande mobile, tout en aidant et en supervisant les activités de développement de jeux dans le cadre de projets à l'échelle du studio. <br> → J'ai démissionné de mon poste pour me concentrer sur mes études universitaires et mes affaires personnelles.",
        koda_desc: "Kod-A Bilisim développe des technologies basées sur des documents et fournit des solutions depuis 2006. En tant que stagiaire, j'ai eu l'occasion de me familiariser avec divers systèmes de gestion de données et processus de développement de logiciels.",
        fibabanka_desc: "En tant que l'une des principales banques en termes de services bancaires numériques, travailler ici m'a donné une compréhension générale de l'industrie fintech et des possibilités illimitées des implémentations technologiques dans différents secteurs.",
        fmss_desc: "FMSS Bilişim Teknolojileri est une entreprise de logiciels qui fournit des services d'externalisation dans les domaines du commerce électronique et du développement d'application, ainsi que le développement de projets internes. J'ai eu la chance d'apprendre les processus de développement de logiciels dans un environnement professionnel.",
        gunce_desc: "İstanbul Günceleri est une initiative de journal étudiant qui vise à fournir une plateforme aux étudiants. J'ai re-conçu tout le contenu des réseaux sociaux et continue de gérer les comptes de médias sociaux, de publier activement des posts et des Reels. Jetez un œil au <a href='https://instagram.com/istanbulgunceleri' target='_blank'>compte Instagram.</a>",
        social_media: "Réseaux sociaux",
        graphic: "Graphiques",
        video: "Montage vidéo",
        current: "aujourd'hui",
    }
};

function updateContent(language) {
    document.querySelectorAll('[data-translate]').forEach(function(element) {
        const key = element.getAttribute('data-translate');
        element.innerHTML = translations[language][key];
    });
}

function updateURLParameter(param, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(param, value);
    window.history.replaceState({}, '', url);
}

function getURLParameter(name) {
    return new URLSearchParams(window.location.search).get(name);
}

document.querySelectorAll('input[name="language"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        const selectedLang = this.value;
        updateContent(selectedLang);
        updateURLParameter('lang', selectedLang);
    });
});

let initialLang = getURLParameter('lang') || 'en';
if (!translations.hasOwnProperty(initialLang)) {
    initialLang = 'en';
}
document.querySelector(`input[name="language"][value="${initialLang}"]`).checked = true;
updateContent(initialLang);
updateURLParameter('lang', initialLang);

document.querySelectorAll('.section-title').forEach(function(sectionTitle) {
    sectionTitle.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-target');
        const sectionContent = document.getElementById(sectionId);
        const chevron = this.querySelector('.chevron');

        // Toggle active class on section content
        sectionContent.classList.toggle('active');

        // Toggle chevron rotation
        chevron.classList.toggle('rotate');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.querySelector('.tooltip');
    const tooltipText = tooltip.querySelector('.tooltip-text');

    tooltip.addEventListener('mouseenter', function() {
        const rect = tooltipText.getBoundingClientRect();
        const overflowRight = rect.right > window.innerWidth;
        const overflowLeft = rect.left < 0;

        if (overflowRight) {
            tooltipText.style.left = 'auto';
            tooltipText.style.right = '0';
            tooltipText.style.transform = 'none';
        } else if (overflowLeft) {
            tooltipText.style.left = '0';
            tooltipText.style.right = 'auto';
            tooltipText.style.transform = 'none';
        } else {
            tooltipText.style.left = '50%';
            tooltipText.style.right = 'auto';
            tooltipText.style.transform = 'translateX(-50%)';
        }
    });

    tooltip.addEventListener('mouseleave', function() {
        tooltipText.style.left = '50%';
        tooltipText.style.right = 'auto';
        tooltipText.style.transform = 'translateX(-50%)';
    });
});