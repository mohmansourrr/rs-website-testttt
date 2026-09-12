/**
 * All site copy, English + Arabic.
 * Content is taken directly from the RS for Stainless Industrial Co. bilingual brochure.
 */

type Dir = 'ltr' | 'rtl'

const en = {
  meta: {
    dir: 'ltr' as Dir,
    langName: 'English',
    switchTo: 'العربية',
  },

  nav: {
    about: 'About',
    products: 'Products',
    finishes: 'Finishes',
    quality: 'Quality',
    whyUs: 'Why Us',
    branches: 'Branches',
    contact: 'Contact',
    quote: 'Request a Quote',
    menuOpen: 'Open navigation menu',
    menuClose: 'Close navigation menu',
    home: 'Go to top',
  },

  hero: {
    eyebrow: 'Est. 2007',
    title: 'RS for Stainless Industrial Co.',
    subtitle: "Egypt's Full-Service Stainless Steel Centre",
    tagline: 'Stainless Steel Processed to Precision.',
    intro:
      'A stainless steel processing and service centre specialising in the processing, finishing and supply of stainless steel.',
    ctaProducts: 'View Products',
    ctaContact: 'Request a Quote',
    scroll: 'Scroll',
  },

  stats: {
    label: 'RS for Stainless Industrial Co. at a glance',
    items: [
      { value: '8', label: 'Product Lines' },
      { value: '9+', label: 'Stainless Steel Grades' },
      { value: '3', label: 'Branches' },
      { value: '8,000+', label: 'Clients' },
    ],
  },

  about: {
    label: 'Who We Are',
    heading: 'About Us',
    p1: 'RS for Stainless Industrial Co. is a stainless steel processing and service center based in Egypt, specializing in the processing, finishing, and supply of stainless steel.',
    p2: 'We provide stainless steel sheets, coils, pipes, bars, tubes, and angles for manufacturers, fabricators, contractors, distributors, and industrial buyers.',
    p3: 'Founded in 2007, RS for Stainless Industrial Co. has grown into a team of 100+ specialists across three branches in the Greater Cairo region. Our focus is on delivering consistent dimensions, surface finishes, and material quality — helping our customers receive the right product, ready for their specific application.',
    /* The company traded under the old name for years, so customers still
       search for it. Saying so here is what lets them find this page. */
    formerName: 'Formerly known as El Radwan Steel — the same company, the same team, under a new name.',
    servicesTitle: 'Our Core Services',
    services: ['Cutting', 'Slitting', 'Polishing', 'Finishing', 'Supply'],
    cta: 'Work With Us',
  },

  products: {
    label: 'What We Offer',
    heading: 'Our Products',
    lead: 'Stainless Steel for Every Application.',
    intro:
      'We supply and process stainless steel in a range of product forms, grades, thicknesses, and finishes to meet different industrial, architectural, and fabrication requirements.',
    rangeTitle: 'Product Range',
    specTitle: 'Specifications',
    specParameter: 'Parameter',
    specValue: 'Value',
    gradesTitle: 'Available Grades',
    selectHint: 'Select a product to see its specifications',
    range: [
      {
        name: 'Stainless Steel Sheets & Coils',
        desc: 'Cold and hot rolled, in all standard and custom sizes.',
        grades: ['201', '304', '304L', '309', '310', '316', '316L', '410', '430'],
        specs: [
          { label: 'Grade', value: '201, 304, 304L, 309, 310, 316, 316L, 410, 430' },
          { label: 'Finish', value: '2B, BA, No.4, No.8 Mirror (Cold Rolled) · No.1 (Hot Rolled)' },
          { label: 'Thickness', value: '0.4 – 20.0 mm' },
          { label: 'Standard Sizes', value: '1500×3000 mm · 1250×2500 mm · 1000×2000 mm' },
          { label: 'Custom Size', value: 'Available per customer requirements' },
          { label: 'Specification', value: 'ASTM A240M-18 / A480M-18a' },
        ],
      },
      {
        name: 'Stainless Steel Pipes & Tubes',
        desc: 'Welded tube in a wide range of diameters and wall thicknesses.',
        grades: ['201', '304', '316'],
        specs: [
          { label: 'Grade', value: '201, 304, 316' },
          { label: 'Outside Diameter', value: '10 – 101.6 mm' },
          { label: 'Wall Thickness', value: '1.0 – 3.0 mm' },
          { label: 'Length', value: '6 m standard' },
          { label: 'Finish', value: '600-grit mirror · 180-grit (No.4)' },
          { label: 'Specification', value: 'ASTM A554-14' },
        ],
      },
      {
        name: 'Stainless Steel Bars & Angles',
        desc: 'Round and flat bar plus equal-leg angle for structural and mechanical work.',
        grades: ['201', '304', '316'],
        specs: [
          { label: 'Grade', value: '201, 304, 316' },
          { label: 'Round Bar', value: '3.0 – 200.0 mm diameter' },
          { label: 'Flat Bar', value: '20×3.0 mm – 100×10.0 mm' },
          { label: 'Angle (equal leg)', value: '20×20×2.0 mm – 100×100×10.0 mm' },
          { label: 'Custom Size', value: 'Available per customer requirements' },
        ],
      },
      {
        name: 'Decorative & Coloured Stainless Steel',
        desc: 'Etched, patterned and PVD-coloured sheets for architectural and interior work.',
        grades: ['201', '304', '316', '430'],
        specs: [
          { label: 'Base Material', value: 'Stainless steel sheet 201 / 304 / 316 / 430' },
          { label: 'Surface Technology', value: 'Etching · Hairline · Sand · Mirror · Scotch Brite' },
          { label: 'Colouring', value: 'PVD vacuum coating in a range of colours' },
          { label: 'Design', value: 'Computer-generated; custom artwork accepted' },
          { label: 'Applications', value: 'Elevators, doors, façades, signage, furniture' },
          { label: 'Cleaning', value: 'Neutral cleaners only; avoid acids and abrasives' },
        ],
      },
    ],
    processingTitle: 'Available Processing',
    processing: [
      'Cutting',
      'Slitting',
      'Edge Treatment',
      'Polishing (8K / 6K)',
      'No.4',
      'Scotch Brite',
      'Hairline',
      'SS Colouring',
      'Custom Processing',
    ],
  },

  video: {
    label: 'Inside RS',
    heading: 'Our Factory',
    intro:
      'A look inside the 6th of October plant — cutting, slitting, polishing and finishing lines in operation.',
    play: 'Play factory video',
    hint: 'Click to play · Opens in full screen',
  },

  topbar: {
    tagline: 'Cutting · Slitting · Polishing · Finishing · Supply',
  },

  captions: {
    team: 'Our team at the 6th of October factory',
    plant: 'Cut-to-length line, 6th of October',
    slitting: 'Coil slitting to customer width',
    polishing: 'Polishing line — 8K and 6K mirror finishes',
    inspection: 'Thickness verified on every production run',
  },

  images: {
    factoryLine: 'RS for Stainless Industrial Co. production line with stainless steel coils',
    team: 'The RS team at the 6th of October factory',
    plant: 'Cut-to-length line inside the RS plant',
    slitting: 'Stainless steel coil being slit into strips on the slitting line',
    polishing: 'Polishing line producing 8K and 6K mirror finishes',
    inspection: 'Technician measuring sheet thickness with a caliper',
    operator: 'RS operator handling finished stainless steel sheets',
    coil: 'Stainless steel coil mounted on the slitting machine',
    handling: 'Stainless steel coil being moved in the warehouse',
  },

  finishes: {
    label: 'Surface Quality',
    heading: 'Surface Finishes',
    lead: 'Where Stainless Steel Becomes Specification-Ready',
    intro:
      'Surface finish plays an important role in the appearance, performance, and cleanability of stainless steel.',
    items: [
      { name: 'No.4', desc: 'Brushed, uniform directional finish commonly used in appliances and architectural applications.' },
      { name: '2B', desc: 'Smooth, standard mill finish with a matte-to-semi-reflective appearance.' },
      { name: 'Hairline (HL)', desc: 'Fine, continuous linear texture for a premium architectural appearance.' },
      { name: 'Scotch Brite', desc: 'Fine, non-directional satin texture.' },
      { name: 'PVD / Coloured', desc: 'Durable coloured finishes for decorative and architectural applications.' },
      { name: 'BA — Bright Annealed', desc: 'Smooth, bright and reflective mill finish.' },
      { name: 'Mirror', desc: 'High-gloss, reflective surface.' },
    ],
  },

  quality: {
    label: 'Standards',
    heading: 'Quality & Standards',
    intro:
      'We focus on consistent surface quality, dimensional accuracy, and documented material across production runs.',
    featuresTitle: 'Quality Features',
    features: [
      'Material Test Certificates (MTCs)',
      'Processing aligned with recognized standards such as ASTM A240, where applicable',
      'Consistent surface-finish quality',
      'Dimensional accuracy',
      'Custom processing to specification',
    ],
    applicationsTitle: 'Applications',
    applications: [
      {
        group: 'Architectural & Interior',
        items: ['Elevators and elevator cabins', 'Hospitality and hotel interiors', 'Architectural and decorative applications'],
      },
      {
        group: 'Appliance & Household',
        items: ['Kitchen appliances', 'Household appliances', 'Gas stoves and cooking surfaces'],
      },
      {
        group: 'Industrial & Fabrication',
        items: ['Industrial applications', 'General fabrication', 'Metalworking'],
      },
    ],
  },

  why: {
    label: 'Our Difference',
    heading: 'Why Choose Us?',
    items: [
      { title: 'Specialized in Finishing', desc: 'Cutting, polishing, and surface treatment are at the core of our capabilities.' },
      { title: 'Consistent Quality', desc: 'Controlled processing for consistent dimensions and surface finishes.' },
      { title: 'Flexible to Specification', desc: 'Custom cutting, finishing, and order sizing based on customer requirements.' },
      { title: 'Complete Product Range', desc: 'Sheets, coils, pipes, tubes, bars, and angles from one supplier.' },
      { title: 'Documented Material', desc: 'MTCs and recognized standards, where applicable.' },
      { title: 'Local & International Capability', desc: 'Our multi-branch operation supports customers across Egypt and is positioned to serve international buyers.' },
    ],
    ctaTitle: 'Ready to specify your material?',
    ctaText: 'Our team will help you select the right grade, finish and dimension for your application.',
    ctaButton: 'Start a Conversation',
  },

  branches: {
    label: 'Find Us',
    heading: 'Our Branches',
    intro: 'Three service centres across the Greater Cairo region — stocked, staffed and ready.',
    mainBadge: 'Head Office & Factory',
    whatsapp: 'WhatsApp',
    directions: 'Directions',
    callAria: 'Call branch',
    note: 'All branches carry the full product range. Call ahead to confirm specific grades and finishes.',
    items: [
      {
        name: '6th of October',
        city: 'Giza',
        address: 'Piece 175, Industrial Sixth Extension, 6th of October City, Giza, Egypt',
      },
      {
        name: 'El Sabtia',
        city: 'Cairo',
        address: '1 Rabaa El Roz St., Souk El Asr, El Sabtia, Cairo, Egypt',
      },
      {
        name: 'Qalyoub',
        city: 'Cairo — North',
        address: 'The Slow Road, in front of El Belbasi, Abo Senna, Qalyoub, Cairo, Egypt',
      },
    ],
  },

  contact: {
    label: 'Get in Touch',
    heading: 'Request a Quote',
    intro:
      'Tell us the grade, thickness, size and finish you need. Our team will respond with pricing and availability.',
    name: 'Full Name',
    namePlaceholder: 'Your full name',
    company: 'Company',
    companyPlaceholder: 'Company or project name',
    email: 'Email Address',
    emailPlaceholder: 'you@company.com',
    phone: 'Phone / WhatsApp',
    phonePlaceholder: '+20 1XX XXX XXXX',
    product: 'Product Interest',
    productPlaceholder: 'Select a product category',
    productOptions: [
      'Stainless Steel Sheets & Coils',
      'Stainless Steel Pipes & Tubes',
      'Stainless Steel Bars & Angles',
      'Decorative & Coloured Stainless Steel',
      'Processing / Finishing Service',
      'Multiple Products',
    ],
    message: 'Project Details',
    messagePlaceholder: 'Grade, thickness, size, finish, quantity…',
    submit: 'Send Request',
    sending: 'Sending…',
    required: 'Required',
    waHeader: 'New enquiry — RS for Stainless Industrial Co.',
    successTitle: 'Request Received',
    successText:
        'Thank you. Our team will come back to you shortly with pricing and availability.',
    waSuccessTitle: 'WhatsApp is opening',
    waSuccessText:
        'Your enquiry is ready with all your details filled in — press Send in WhatsApp to deliver it.',
    errorTitle: 'Could not send',
    errorText:
        'Something went wrong sending your request. Please send it on WhatsApp instead, or call us directly.',
    errorCta: 'Send on WhatsApp',
    errorRetry: 'Try again',
    successAgain: 'Send Another',
    disclaimer: 'All enquiries are treated in confidence.',
    quickContact: 'Quick Contact',
    whatsappTitle: 'Chat on WhatsApp',
    whatsappText: 'Fastest way to reach our sales team',
    officeTitle: 'Main Office',
    emailTitle: 'Email',
  },

  footer: {
    tagline: "Egypt's full-service stainless steel processing and supply centre. Trusted by industry since 2007.",
    navTitle: 'Navigation',
    productsTitle: 'Products',
    contactTitle: 'Contact',
    rights: 'All rights reserved.',
    strap: 'Stainless Steel Processed to Precision.',
    social: 'Social media',
  },
}

export type Translation = typeof en

const ar: Translation = {
  meta: {
    dir: 'rtl',
    langName: 'العربية',
    switchTo: 'English',
  },

  nav: {
    about: 'من نحن',
    products: 'منتجاتنا',
    finishes: 'التشطيبات',
    quality: 'الجودة',
    whyUs: 'لماذا نحن',
    branches: 'فروعنا',
    contact: 'اتصل بنا',
    quote: 'اطلب عرض سعر',
    menuOpen: 'فتح قائمة التنقل',
    menuClose: 'إغلاق قائمة التنقل',
    home: 'العودة إلى الأعلى',
  },

  hero: {
    eyebrow: 'تأسست ٢٠٠٧',
    title: 'أر.أس لصناعه الاستانلس',
    subtitle: 'مركز مصر لخدمات الاستانلس ستيل',
    tagline: 'الاستانلس ستيل مُعالج بدقة.',
    intro:
      'مركز متخصص في معالجة وتجهيز وتوريد الاستانلس ستيل، حيث نختص في عمليات المعالجة والتشطيب والتوريد.',
    ctaProducts: 'تصفح المنتجات',
    ctaContact: 'اطلب عرض سعر',
    scroll: 'مرّر للأسفل',
  },

  stats: {
    label: 'أر.أس لصناعه الاستانلس في لمحة',
    items: [
      { value: '٨', label: 'خطوط إنتاج' },
      { value: '+٩', label: 'درجات الاستانلس ستيل' },
      { value: '٣', label: 'فروع' },
      { value: '+٨٠٠٠', label: 'عميل' },
    ],
  },

  about: {
    label: 'من نحن',
    heading: 'من نحن',
    p1: 'أر.أس لصناعه الاستانلس هو مركز متخصص في معالجة وتجهيز وتوريد الاستانلس ستيل في مصر، حيث نختص في عمليات المعالجة، والتشطيب، والتوريد لمختلف الاستخدامات.',
    p2: 'نوفر ألواح ولفائف الاستانلس ستيل، والمواسير، والقضبان، والأنابيب، والزوايا، لخدمة المصنّعين، والمقاولين، وشركات التصنيع، والموزعين، والمشترين في القطاع الصناعي.',
    p3: 'تأسست أر.أس لصناعه الاستانلس عام ٢٠٠٧، ونمت لتصبح فريقًا يضم أكثر من ١٠٠ متخصص موزعين على ثلاثة فروع في منطقة القاهرة الكبرى. نركز على تقديم منتجات تتميز بثبات الأبعاد، وجودة الأسطح، وجودة الخامات، بما يضمن حصول عملائنا على المنتج المناسب والجاهز للاستخدام وفقًا لمتطلبات كل تطبيق.',
    formerName: 'المعروفة سابقًا باسم الرضوان ستيل — نفس الشركة ونفس الفريق باسم جديد.',
    servicesTitle: 'خدماتنا الأساسية',
    services: ['التقطيع', 'القص الطولي', 'التلميع', 'التشطيب', 'التوريد'],
    cta: 'تعاون معنا',
  },

  products: {
    label: 'ما نقدمه',
    heading: 'منتجاتنا',
    lead: 'الاستانلس ستيل لكل استخدام.',
    intro:
      'نقوم بتوريد ومعالجة الاستانلس ستيل بأشكال ودرجات وسماكات وتشطيبات متعددة، لتلبية مختلف المتطلبات الصناعية والمعمارية وأعمال التصنيع.',
    rangeTitle: 'مجموعة المنتجات',
    specTitle: 'المواصفات',
    specParameter: 'المواصفة',
    specValue: 'القيمة',
    gradesTitle: 'الدرجات المتاحة',
    selectHint: 'اختر منتجًا لعرض مواصفاته',
    range: [
      {
        name: 'ألواح ولفائف الاستانلس ستيل',
        desc: 'مدرفلة على البارد والساخن، بجميع المقاسات القياسية وحسب الطلب.',
        grades: ['٢٠١', '٣٠٤', '٣٠٤L', '٣٠٩', '٣١٠', '٣١٦', '٣١٦L', '٤١٠', '٤٣٠'],
        specs: [
          { label: 'الدرجة', value: '٢٠١، ٣٠٤، ٣٠٤L، ٣٠٩، ٣١٠، ٣١٦، ٣١٦L، ٤١٠، ٤٣٠' },
          { label: 'التشطيب', value: '2B، BA، No.4، No.8 Mirror (مدرفل على البارد) · No.1 (مدرفل على الساخن)' },
          { label: 'السُمك', value: '٠.٤ – ٢٠.٠ مم' },
          { label: 'المقاسات القياسية', value: '١٥٠٠×٣٠٠٠ مم · ١٢٥٠×٢٥٠٠ مم · ١٠٠٠×٢٠٠٠ مم' },
          { label: 'المقاس حسب الطلب', value: 'متوفر وفقًا لمتطلبات العميل' },
          { label: 'المواصفات', value: 'ASTM A240M-18 / A480M-18a' },
        ],
      },
      {
        name: 'مواسير وأنابيب الاستانلس ستيل',
        desc: 'أنابيب ملحومة بمجموعة واسعة من الأقطار والسماكات.',
        grades: ['٢٠١', '٣٠٤', '٣١٦'],
        specs: [
          { label: 'الدرجة', value: '٢٠١، ٣٠٤، ٣١٦' },
          { label: 'القطر الخارجي', value: '١٠ – ١٠١.٦ مم' },
          { label: 'سُمك الجدار', value: '١.٠ – ٣.٠ مم' },
          { label: 'الطول', value: '٦ متر قياسي' },
          { label: 'التشطيب', value: 'مرآة ٦٠٠ · ١٨٠ (No.4)' },
          { label: 'المواصفات', value: 'ASTM A554-14' },
        ],
      },
      {
        name: 'قضبان وزوايا الاستانلس ستيل',
        desc: 'قضبان دائرية ومسطحة وزوايا متساوية الأضلاع للأعمال الإنشائية والميكانيكية.',
        grades: ['٢٠١', '٣٠٤', '٣١٦'],
        specs: [
          { label: 'الدرجة', value: '٢٠١، ٣٠٤، ٣١٦' },
          { label: 'القضيب الدائري', value: 'قطر ٣.٠ – ٢٠٠.٠ مم' },
          { label: 'القضيب المسطح', value: '٢٠×٣.٠ مم – ١٠٠×١٠.٠ مم' },
          { label: 'الزاوية (متساوية الأضلاع)', value: '٢٠×٢٠×٢.٠ مم – ١٠٠×١٠٠×١٠.٠ مم' },
          { label: 'المقاس حسب الطلب', value: 'متوفر وفقًا لمتطلبات العميل' },
        ],
      },
      {
        name: 'الاستانلس ديكور والألوان',
        desc: 'ألواح محفورة ومزخرفة وملونة بتقنية PVD للأعمال المعمارية والديكورية.',
        grades: ['٢٠١', '٣٠٤', '٣١٦', '٤٣٠'],
        specs: [
          { label: 'الخامة الأساسية', value: 'ألواح استانلس ستيل ٢٠١ / ٣٠٤ / ٣١٦ / ٤٣٠' },
          { label: 'تقنيات الأسطح', value: 'الحفر · هيرلاين · الرمل · المرآة · سكوتش برايت' },
          { label: 'التلوين', value: 'طلاء PVD بالتفريغ بمجموعة ألوان' },
          { label: 'التصميم', value: 'تصميمات بالكمبيوتر؛ ونقبل التصميمات الخاصة' },
          { label: 'الاستخدامات', value: 'المصاعد، الأبواب، الواجهات، اللافتات، الأثاث' },
          { label: 'التنظيف', value: 'منظفات متعادلة فقط؛ وتجنب الأحماض والمواد الكاشطة' },
        ],
      },
    ],
    processingTitle: 'عمليات المعالجة المتاحة',
    processing: [
      'التقطيع',
      'القص الطولي',
      'معالجة الحواف',
      'تلميع (8K / 6K)',
      'صنفرة',
      'سكوتش برايت',
      'Hairline',
      'تلوين الاستانلس',
      'المعالجة حسب الطلب',
    ],
  },

  video: {
    label: 'داخل أر.أس',
    heading: 'مصنعنا',
    intro:
      'جولة داخل مصنع ٦ أكتوبر — خطوط التقطيع والقص الطولي والتلميع والتشطيب أثناء التشغيل.',
    play: 'تشغيل فيديو المصنع',
    hint: 'اضغط للتشغيل · يفتح بملء الشاشة',
  },

  topbar: {
    tagline: 'التقطيع · القص الطولي · التلميع · التشطيب · التوريد',
  },

  captions: {
    team: 'فريقنا في مصنع ٦ أكتوبر',
    plant: 'خط القص العرضي، ٦ أكتوبر',
    slitting: 'القص الطولي للفائف حسب عرض العميل',
    polishing: 'خط التلميع — تشطيبات مرآة 8K و 6K',
    inspection: 'التحقق من السُمك في كل تشغيلة إنتاج',
  },

  images: {
    factoryLine: 'خط الإنتاج في أر.أس لصناعه الاستانلس مع لفائف الاستانلس ستيل',
    team: 'فريق أر.أس في مصنع ٦ أكتوبر',
    plant: 'خط القص العرضي داخل مصنع أر.أس',
    slitting: 'لفائف الاستانلس ستيل أثناء القص الطولي إلى شرائح',
    polishing: 'خط التلميع لإنتاج تشطيبات مرآة 8K و 6K',
    inspection: 'فني يقيس سُمك اللوح باستخدام الوردية',
    operator: 'أحد فنيي أر.أس أثناء مناولة ألواح الاستانلس ستيل',
    coil: 'لفيفة استانلس ستيل مثبتة على ماكينة القص الطولي',
    handling: 'مناولة لفيفة استانلس ستيل داخل المخزن',
  },

  finishes: {
    label: 'جودة الأسطح',
    heading: 'تشطيبات الأسطح',
    lead: 'حيث يصبح الاستانلس ستيل جاهزًا لمواصفاتك',
    intro:
      'يلعب تشطيب السطح دورًا أساسيًا في مظهر الاستانلس ستيل وأدائه وسهولة تنظيفه.',
    items: [
      { name: 'No.4', desc: 'تشطيب مسحوب بفرشاة بخطوط اتجاهية منتظمة، ويُستخدم بشكل شائع في الأجهزة والتطبيقات المعمارية.' },
      { name: '2B', desc: 'تشطيب مصنع قياسي وناعم، بمظهر يتراوح بين المطفي وشبه العاكس.' },
      { name: 'Hairline (HL)', desc: 'تشطيب بخطوط دقيقة ومتواصلة، يمنح مظهرًا معماريًا فاخرًا.' },
      { name: 'Scotch Brite', desc: 'تشطيب ساتان ناعم بملمس دقيق وغير اتجاهي.' },
      { name: 'PVD / ملون', desc: 'تشطيبات ملونة متينة للتطبيقات الديكورية والمعمارية.' },
      { name: 'BA — لامع بالتلدين', desc: 'تشطيب مصنع ناعم، لامع وعالي الانعكاس.' },
      { name: 'Mirror', desc: 'سطح لامع عالي الانعكاس.' },
    ],
  },

  quality: {
    label: 'المعايير',
    heading: 'الجودة والمعايير',
    intro:
      'نركز على الحفاظ على جودة سطح متسقة، ودقة الأبعاد، وتوثيق الخامات خلال مراحل الإنتاج المختلفة.',
    featuresTitle: 'مميزات الجودة',
    features: [
      'شهادات اختبار المواد (MTCs)',
      'معالجة وفقًا لمعايير معترف بها مثل ASTM A240، حيثما ينطبق',
      'جودة متسقة لتشطيبات الأسطح',
      'دقة الأبعاد',
      'معالجة حسب مواصفات ومتطلبات العميل',
    ],
    applicationsTitle: 'التطبيقات',
    applications: [
      {
        group: 'التطبيقات المعمارية والداخلية',
        items: ['المصاعد وكبائن المصاعد', 'الفنادق والضيافة والتصميمات الداخلية', 'التطبيقات المعمارية والديكورية'],
      },
      {
        group: 'الأجهزة المنزلية',
        items: ['أجهزة ومعدات المطابخ', 'الأجهزة المنزلية', 'مواقد الغاز وأسطح الطهي'],
      },
      {
        group: 'التطبيقات الصناعية وأعمال التصنيع',
        items: ['التطبيقات الصناعية', 'أعمال التصنيع العامة', 'تشغيل وتصنيع المعادن'],
      },
    ],
  },

  why: {
    label: 'ما يميزنا',
    heading: 'لماذا تختارنا؟',
    items: [
      { title: 'متخصصون في التشطيب', desc: 'التقطيع، والتلميع، ومعالجة الأسطح هي من أهم مجالات خبرتنا وقدراتنا.' },
      { title: 'جودة متسقة', desc: 'عمليات معالجة دقيقة ومراقبة مستمرة لضمان ثبات الأبعاد وتشطيبات الأسطح.' },
      { title: 'مرونة حسب المواصفات', desc: 'نوفر خدمات التقطيع والتشطيب وتحديد الكميات والمقاسات وفقًا لمتطلبات كل عميل.' },
      { title: 'مجموعة منتجات متكاملة', desc: 'ألواح، ولفائف، ومواسير، وأنابيب، وقضبان، وزوايا — من مورد واحد.' },
      { title: 'خامات موثقة', desc: 'توفير شهادات اختبار المواد MTCs والمعايير المعترف بها، حيثما ينطبق.' },
      { title: 'قدرة محلية ودولية', desc: 'تدعم عملياتنا متعددة الفروع العملاء في جميع أنحاء مصر، كما تتيح لنا القدرة على خدمة العملاء والأسواق الدولية.' },
    ],
    ctaTitle: 'جاهز لتحديد مواصفات مادتك؟',
    ctaText: 'سيساعدك فريقنا في اختيار الدرجة والتشطيب والمقاس المناسب لتطبيقك.',
    ctaButton: 'ابدأ المحادثة',
  },

  branches: {
    label: 'أين تجدنا',
    heading: 'فروعنا',
    intro: 'ثلاثة مراكز خدمة في منطقة القاهرة الكبرى — مجهزة بالكامل وجاهزة لخدمتك.',
    mainBadge: 'المقر الرئيسي والمصنع',
    whatsapp: 'واتساب',
    directions: 'الاتجاهات',
    callAria: 'اتصل بالفرع',
    note: 'جميع الفروع توفر مجموعة المنتجات الكاملة. يُرجى الاتصال مسبقًا لتأكيد توفر درجات وتشطيبات محددة.',
    items: [
      {
        name: '٦ أكتوبر',
        city: 'الجيزة',
        address: 'قطعة ١٧٥، التوسعات الصناعية السادسة، مدينة ٦ أكتوبر، الجيزة، مصر',
      },
      {
        name: 'السبتية',
        city: 'القاهرة',
        address: '١ شارع رابعة الروز، سوق العصر، السبتية، القاهرة، مصر',
      },
      {
        name: 'قليوب',
        city: 'القاهرة — الشمال',
        address: 'الطريق البطيء، أمام البلبيسي، أبو سنة، قليوب، القاهرة، مصر',
      },
    ],
  },

  contact: {
    label: 'تواصل معنا',
    heading: 'اطلب عرض سعر',
    intro:
      'أخبرنا بالدرجة والسُمك والمقاس والتشطيب المطلوب، وسيتواصل معك فريقنا بالأسعار ومدى التوافر.',
    name: 'الاسم بالكامل',
    namePlaceholder: 'اسمك بالكامل',
    company: 'الشركة',
    companyPlaceholder: 'اسم الشركة أو المشروع',
    email: 'البريد الإلكتروني',
    emailPlaceholder: 'you@company.com',
    phone: 'الهاتف / واتساب',
    phonePlaceholder: '+20 1XX XXX XXXX',
    product: 'المنتج المطلوب',
    productPlaceholder: 'اختر فئة المنتج',
    productOptions: [
      'ألواح ولفائف الاستانلس ستيل',
      'مواسير وأنابيب الاستانلس ستيل',
      'قضبان وزوايا الاستانلس ستيل',
      'الاستانلس ديكور والألوان',
      'خدمات المعالجة والتشطيب',
      'منتجات متعددة',
    ],
    message: 'تفاصيل المشروع',
    messagePlaceholder: 'الدرجة، السُمك، المقاس، التشطيب، الكمية…',
    submit: 'إرسال الطلب',
    sending: 'جارٍ الإرسال…',
    required: 'مطلوب',
    waHeader: 'طلب جديد — أر.أس لصناعه الاستانلس',
    successTitle: 'تم استلام طلبك',
    successText: 'شكرًا لك. سيتواصل معك فريقنا قريبًا بالأسعار ومدى التوافر.',
    waSuccessTitle: 'جارٍ فتح واتساب',
    waSuccessText: 'طلبك جاهز وبه كل بياناتك — اضغط إرسال في واتساب ليصل إلينا.',
    errorTitle: 'تعذر الإرسال',
    errorText: 'حدث خطأ أثناء إرسال طلبك. يُرجى إرساله عبر واتساب أو الاتصال بنا مباشرة.',
    errorCta: 'إرسال عبر واتساب',
    errorRetry: 'إعادة المحاولة',
    successAgain: 'إرسال رسالة أخرى',
    disclaimer: 'جميع الاستفسارات تُعامل بسرية تامة.',
    quickContact: 'تواصل سريع',
    whatsappTitle: 'تحدث معنا على واتساب',
    whatsappText: 'أسرع وسيلة للوصول إلى فريق المبيعات',
    officeTitle: 'المقر الرئيسي',
    emailTitle: 'البريد الإلكتروني',
  },

  footer: {
    tagline: 'مركز مصر المتكامل لمعالجة وتوريد الاستانلس ستيل. موضع ثقة الصناعة منذ عام ٢٠٠٧.',
    navTitle: 'التنقل',
    productsTitle: 'المنتجات',
    contactTitle: 'تواصل معنا',
    rights: 'جميع الحقوق محفوظة.',
    strap: 'الاستانلس ستيل مُعالج بدقة.',
    social: 'وسائل التواصل الاجتماعي',
  },
}

export const translations = { en, ar }
export type Lang = keyof typeof translations
