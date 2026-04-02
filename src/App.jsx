import { useMemo, useState } from 'react'

const translations = {
  en: {
    languageLabel: 'Language',
    brand: 'SPRINTZ HOLDINGS',
    brandSub: 'PTE. LTD.',
    navAbout: 'About',
    navBusiness: 'Business Lines',
    navMarkets: 'Markets',
    navContact: 'Contact',
    badge: 'International Trading Company',
    heroTitle: 'Corporate enquiries for global trade and supply partnerships.',
    heroBody:
      'Sprintz Holdings Pte. Ltd. is a Singapore-based international trading company supporting commodities, energy products, industrial supply, logistics solutions, and infrastructure-related opportunities across regional and global markets.',
    primaryCta: 'Submit Corporate Enquiry',
    secondaryCta: 'Explore Business Lines',
    aboutLabel: 'About',
    aboutTitle: 'Professional international trade positioning for serious counterparties.',
    aboutBody:
      'Sprintz Holdings Pte. Ltd. supports structured supply opportunities across Asia, the Middle East, the United States, and wider international markets. The company profile is built to support serious buyer, supplier, and project-led discussions with stronger corporate presentation, disciplined commercial positioning, and more structured counterpart engagement.',
    whyTitle: 'Why Counterparties Engage Sprintz',
    strengths: [
      'Professional coordination for buyers, suppliers, and institutional counterparties',
      'Coverage across commodities, energy, industrial supply, logistics, and infrastructure-related sectors',
      'Singapore-based platform with broader regional and global market positioning',
      'Structured enquiry handling for project-driven and cross-border transactions',
    ],
    businessLabel: 'Business Lines',
    businessTitle: 'Integrated capabilities across trade, energy, industrial supply, logistics, and infrastructure support.',
    businessBody:
      'Sprintz Holdings Pte. Ltd. supports a broader commercial platform spanning commodities, conventional and renewable energy, industrial procurement, warehousing, and selected infrastructure-related opportunities across regional and international markets.',
    businessLines: [
      {
        title: 'Commodities & Raw Materials',
        items: ['ICUMSA 45 Sugar', 'Non-GMO Soya Beans', 'Yellow Corns', 'Iron Ore Fines', 'Copper Cathodes', 'Nickel', 'Aluminium Ingot', 'Lithium', 'Scrap Metals', 'Coal Supply'],
      },
      {
        title: 'Energy & Power Projects',
        items: ['EN590', 'LNG', 'LPG', 'Light Cycle Oil', 'Light Crude Oil', 'Solar-Related Projects', 'Solar Farm Opportunities in Indonesia', 'Biomass Generator Power Solutions', 'Power Generation Project Support'],
      },
      {
        title: 'Industrial, Technical & Equipment Supply',
        items: ['Siemens Industrial Products', 'Allen-Bradley / Rockwell', 'Factory Equipment', 'Electrical & Automation Solutions', 'Technical Procurement Support', 'Medical Equipment and Consumables', 'Aviation Equipment', 'Data Centre Related Supply Support'],
      },
      {
        title: 'Logistics, Storage & Project Support',
        items: ['Warehouse Storage Services', 'Project Procurement', 'Strategic Sourcing', 'Cross-Border Supply Coordination', 'Distribution Support', 'Commercial Fulfilment Assistance', 'Storage and Handling Solutions'],
      },
      {
        title: 'Infrastructure & Construction Opportunities',
        items: ['Stadium Construction Support', 'Bridge and Road Infrastructure Opportunities', 'Residential Development Support', 'Commercial Building Projects', 'Data Centre Development Related Opportunities', 'General Infrastructure Supply and Coordination'],
      },
    ],
    marketsLabel: 'Markets',
    marketsTitle: 'Regional and international counterparties across key trade corridors.',
    markets: ['Singapore', 'Malaysia', 'Thailand', 'China', 'UAE', 'USA', 'Indonesia', 'Vietnam', 'India', 'Middle East'],
    contactLabel: 'Contact',
    contactTitle: 'Corporate enquiries and strategic trade discussions.',
    contactBody:
      'Sprintz Holdings Pte. Ltd. welcomes serious enquiries from buyers, suppliers, and business partners across international markets. Contact our team for product availability, sourcing support, cross-border supply coordination, and structured trade opportunities.',
    officeTitle: 'Sprintz Holdings Pte. Ltd.',
    officeAddress: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
    officeEmail: 'Email: chanlp@sprintz.com.sg',
    formName: 'Full Name',
    formCompany: 'Company',
    formEmail: 'Business Email',
    formSubject: 'Subject',
    formMessage: 'Tell us about your enquiry',
    formSubmit: 'Submit Enquiry',
    whatsapp: 'WhatsApp Us',
  },
  zh: {
    languageLabel: '语言',
    brand: 'SPRINTZ HOLDINGS',
    brandSub: 'PTE. LTD.',
    navAbout: '关于我们',
    navBusiness: '业务范围',
    navMarkets: '市场覆盖',
    navContact: '联系我们',
    badge: '国际贸易公司',
    heroTitle: '全球贸易与供应合作企业询盘平台。',
    heroBody:
      'Sprintz Holdings Pte. Ltd. 是一家立足新加坡的国际贸易公司，业务覆盖大宗商品、能源产品、工业供应、物流方案及基础设施相关项目，面向区域与全球市场。',
    primaryCta: '提交企业询盘',
    secondaryCta: '查看业务范围',
    aboutLabel: '关于我们',
    aboutTitle: '面向严肃合作方的专业国际贸易定位。',
    aboutBody:
      'Sprintz Holdings Pte. Ltd. 支持覆盖亚洲、中东、美国及更广泛国际市场的结构化供应机会。公司网站定位旨在支持买家、供应商及项目主导方开展更严谨的商务洽谈，呈现更强的企业形象、更清晰的商业定位及更规范的合作沟通。',
    whyTitle: '合作方选择 Sprintz 的原因',
    strengths: [
      '为买家、供应商及机构合作方提供专业协调支持',
      '业务覆盖大宗商品、能源、工业供应、物流及基础设施相关领域',
      '以新加坡为平台，具备更广泛的区域及国际市场定位',
      '适合项目型及跨境交易需求的结构化询盘处理',
    ],
    businessLabel: '业务范围',
    businessTitle: '覆盖贸易、能源、工业供应、物流及基础设施支持的综合能力。',
    businessBody:
      'Sprintz Holdings Pte. Ltd. 具备更广泛的商业平台能力，涵盖大宗商品、传统与可再生能源、工业采购、仓储服务，以及面向区域和国际市场的基础设施相关机会。',
    businessLines: [
      {
        title: '大宗商品与原材料',
        items: ['ICUMSA 45 白糖', '非转基因大豆', '黄玉米', '铁矿粉', '铜阴极', '镍', '铝锭', '锂', '废金属', '煤炭供应'],
      },
      {
        title: '能源与电力项目',
        items: ['EN590', 'LNG', 'LPG', '轻循环油', '轻质原油', '太阳能相关项目', '印尼太阳能农场机会', '生物质发电机解决方案', '电力项目支持'],
      },
      {
        title: '工业、技术与设备供应',
        items: ['西门子工业产品', 'Allen-Bradley / Rockwell', '工厂设备', '电气与自动化解决方案', '技术采购支持', '医疗设备与耗材', '航空设备', '数据中心相关供应支持'],
      },
      {
        title: '物流、仓储与项目支持',
        items: ['仓储服务', '项目采购', '战略采购', '跨境供应协调', '分销支持', '商业履约协助', '仓储与处理方案'],
      },
      {
        title: '基础设施与建设机会',
        items: ['体育场建设支持', '桥梁与道路基础设施机会', '住宅开发支持', '商业建筑项目', '数据中心开发相关机会', '基础设施供应与协调'],
      },
    ],
    marketsLabel: '市场覆盖',
    marketsTitle: '覆盖重点贸易走廊的区域与国际合作方。',
    markets: ['新加坡', '马来西亚', '泰国', '中国', '阿联酋', '美国', '印尼', '越南', '印度', '中东'],
    contactLabel: '联系我们',
    contactTitle: '企业询盘与战略贸易洽谈。',
    contactBody:
      'Sprintz Holdings Pte. Ltd. 欢迎来自国际市场的买家、供应商及商业合作伙伴进行正式询盘。欢迎联系我们洽谈产品供应、采购支持、跨境协调及结构化贸易机会。',
    officeTitle: 'Sprintz Holdings Pte. Ltd.',
    officeAddress: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
    officeEmail: '邮箱: chanlp@sprintz.com.sg',
    formName: '姓名',
    formCompany: '公司名称',
    formEmail: '商务邮箱',
    formSubject: '主题',
    formMessage: '请填写您的询盘内容',
    formSubmit: '提交询盘',
    whatsapp: 'WhatsApp 联系',
  },
  ar: {
    languageLabel: 'اللغة',
    brand: 'SPRINTZ HOLDINGS',
    brandSub: 'PTE. LTD.',
    navAbout: 'من نحن',
    navBusiness: 'مجالات الأعمال',
    navMarkets: 'الأسواق',
    navContact: 'اتصل بنا',
    badge: 'شركة تجارة دولية',
    heroTitle: 'استفسارات الشركات لشراكات التجارة والتوريد العالمية.',
    heroBody:
      'Sprintz Holdings Pte. Ltd. هي شركة تجارة دولية مقرها سنغافورة تدعم السلع والطاقة والتوريد الصناعي والحلول اللوجستية والفرص المرتبطة بالبنية التحتية عبر الأسواق الإقليمية والعالمية.',
    primaryCta: 'إرسال استفسار شركة',
    secondaryCta: 'استكشاف مجالات الأعمال',
    aboutLabel: 'من نحن',
    aboutTitle: 'موقع احترافي في التجارة الدولية للتعامل مع الجهات الجادة.',
    aboutBody:
      'تدعم Sprintz Holdings Pte. Ltd. فرص التوريد المنظمة عبر آسيا والشرق الأوسط والولايات المتحدة والأسواق الدولية الأوسع. تم تصميم الملف التعريفي للشركة لدعم المناقشات الجادة مع المشترين والموردين والجهات القائمة على المشاريع بصورة مؤسسية أقوى وموقف تجاري أكثر انضباطًا.',
    whyTitle: 'لماذا يتعامل الشركاء مع Sprintz',
    strengths: [
      'تنسيق مهني بين المشترين والموردين والجهات المؤسسية',
      'تغطية تشمل السلع والطاقة والتوريد الصناعي والخدمات اللوجستية والقطاعات المرتبطة بالبنية التحتية',
      'منصة مقرها سنغافورة مع حضور إقليمي ودولي أوسع',
      'إدارة استفسارات منظمة للمعاملات العابرة للحدود والمشاريع',
    ],
    businessLabel: 'مجالات الأعمال',
    businessTitle: 'قدرات متكاملة عبر التجارة والطاقة والتوريد الصناعي والخدمات اللوجستية ودعم البنية التحتية.',
    businessBody:
      'تدعم Sprintz Holdings Pte. Ltd. منصة تجارية أوسع تشمل السلع والطاقة التقليدية والمتجددة والمشتريات الصناعية وخدمات التخزين والفرص المختارة المرتبطة بالبنية التحتية عبر الأسواق الإقليمية والدولية.',
    businessLines: [
      {
        title: 'السلع والمواد الخام',
        items: ['سكر ICUMSA 45', 'فول الصويا غير المعدل وراثيًا', 'الذرة الصفراء', 'خام الحديد الناعم', 'كاثودات النحاس', 'النيكل', 'سبائك الألمنيوم', 'الليثيوم', 'الخردة المعدنية', 'توريد الفحم'],
      },
      {
        title: 'مشاريع الطاقة والقوى',
        items: ['EN590', 'LNG', 'LPG', 'زيت الدورة الخفيفة', 'النفط الخام الخفيف', 'مشاريع مرتبطة بالطاقة الشمسية', 'فرص مزارع شمسية في إندونيسيا', 'حلول مولدات الكتلة الحيوية', 'دعم مشاريع توليد الطاقة'],
      },
      {
        title: 'التوريد الصناعي والتقني والمعدات',
        items: ['منتجات سيمنس الصناعية', 'Allen-Bradley / Rockwell', 'معدات المصانع', 'حلول الكهرباء والأتمتة', 'دعم المشتريات الفنية', 'الأجهزة والمستهلكات الطبية', 'معدات الطيران', 'دعم توريد متعلق بمراكز البيانات'],
      },
      {
        title: 'الخدمات اللوجستية والتخزين ودعم المشاريع',
        items: ['خدمات التخزين', 'المشتريات للمشاريع', 'التوريد الاستراتيجي', 'تنسيق التوريد عبر الحدود', 'دعم التوزيع', 'مساندة التنفيذ التجاري', 'حلول التخزين والمناولة'],
      },
      {
        title: 'فرص البنية التحتية والإنشاءات',
        items: ['دعم إنشاء الملاعب', 'فرص البنية التحتية للطرق والجسور', 'دعم التطوير السكني', 'المشاريع التجارية', 'فرص متعلقة بتطوير مراكز البيانات', 'تنسيق وتوريد عام للبنية التحتية'],
      },
    ],
    marketsLabel: 'الأسواق',
    marketsTitle: 'شركاء إقليميون ودوليون عبر الممرات التجارية الرئيسية.',
    markets: ['سنغافورة', 'ماليزيا', 'تايلاند', 'الصين', 'الإمارات', 'الولايات المتحدة', 'إندونيسيا', 'فيتنام', 'الهند', 'الشرق الأوسط'],
    contactLabel: 'اتصل بنا',
    contactTitle: 'استفسارات الشركات والمناقشات التجارية الاستراتيجية.',
    contactBody:
      'ترحب Sprintz Holdings Pte. Ltd. بالاستفسارات الجادة من المشترين والموردين وشركاء الأعمال عبر الأسواق الدولية. يمكنكم التواصل معنا بشأن توفر المنتجات ودعم التوريد والتنسيق عبر الحدود وفرص التجارة المنظمة.',
    officeTitle: 'Sprintz Holdings Pte. Ltd.',
    officeAddress: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
    officeEmail: 'البريد الإلكتروني: chanlp@sprintz.com.sg',
    formName: 'الاسم الكامل',
    formCompany: 'الشركة',
    formEmail: 'البريد الإلكتروني التجاري',
    formSubject: 'الموضوع',
    formMessage: 'أخبرنا بطلبكم',
    formSubmit: 'إرسال الاستفسار',
    whatsapp: 'واتساب',
  },
  id: {
    languageLabel: 'Bahasa',
    brand: 'SPRINTZ HOLDINGS',
    brandSub: 'PTE. LTD.',
    navAbout: 'Tentang',
    navBusiness: 'Lini Bisnis',
    navMarkets: 'Pasar',
    navContact: 'Kontak',
    badge: 'Perusahaan Perdagangan Internasional',
    heroTitle: 'Pertanyaan korporat untuk kemitraan perdagangan dan pasokan global.',
    heroBody:
      'Sprintz Holdings Pte. Ltd. adalah perusahaan perdagangan internasional berbasis di Singapura yang mendukung komoditas, produk energi, pasokan industri, solusi logistik, dan peluang terkait infrastruktur di pasar regional maupun global.',
    primaryCta: 'Kirim Pertanyaan Korporat',
    secondaryCta: 'Lihat Lini Bisnis',
    aboutLabel: 'Tentang',
    aboutTitle: 'Posisi perdagangan internasional yang profesional untuk counterpart yang serius.',
    aboutBody:
      'Sprintz Holdings Pte. Ltd. mendukung peluang pasokan terstruktur di Asia, Timur Tengah, Amerika Serikat, dan pasar internasional yang lebih luas. Profil perusahaan ini dibangun untuk mendukung diskusi serius dengan pembeli, pemasok, dan pihak proyek dengan presentasi korporat yang lebih kuat serta posisi komersial yang lebih disiplin.',
    whyTitle: 'Mengapa Counterpart Memilih Sprintz',
    strengths: [
      'Koordinasi profesional untuk pembeli, pemasok, dan counterpart institusional',
      'Cakupan komoditas, energi, pasokan industri, logistik, dan sektor terkait infrastruktur',
      'Platform berbasis Singapura dengan positioning pasar regional dan global yang lebih luas',
      'Penanganan enquiry yang terstruktur untuk transaksi lintas negara dan proyek',
    ],
    businessLabel: 'Lini Bisnis',
    businessTitle: 'Kapabilitas terintegrasi di bidang perdagangan, energi, pasokan industri, logistik, dan dukungan infrastruktur.',
    businessBody:
      'Sprintz Holdings Pte. Ltd. mendukung platform komersial yang lebih luas mencakup komoditas, energi konvensional dan terbarukan, pengadaan industri, pergudangan, dan peluang terkait infrastruktur di pasar regional maupun internasional.',
    businessLines: [
      {
        title: 'Komoditas & Bahan Baku',
        items: ['Gula ICUMSA 45', 'Kedelai Non-GMO', 'Jagung Kuning', 'Bijih Besi Halus', 'Copper Cathodes', 'Nikel', 'Aluminium Ingot', 'Lithium', 'Scrap Metals', 'Pasokan Batu Bara'],
      },
      {
        title: 'Proyek Energi & Daya',
        items: ['EN590', 'LNG', 'LPG', 'Light Cycle Oil', 'Light Crude Oil', 'Proyek Terkait Solar', 'Peluang Solar Farm di Indonesia', 'Solusi Generator Biomassa', 'Dukungan Proyek Pembangkitan Energi'],
      },
      {
        title: 'Pasokan Industri, Teknis & Peralatan',
        items: ['Produk Industri Siemens', 'Allen-Bradley / Rockwell', 'Peralatan Pabrik', 'Solusi Listrik & Otomasi', 'Dukungan Pengadaan Teknis', 'Peralatan & Consumables Medis', 'Peralatan Penerbangan', 'Dukungan Pasokan Terkait Data Centre'],
      },
      {
        title: 'Logistik, Gudang & Dukungan Proyek',
        items: ['Layanan Penyimpanan Gudang', 'Pengadaan Proyek', 'Strategic Sourcing', 'Koordinasi Pasokan Lintas Negara', 'Dukungan Distribusi', 'Bantuan Pemenuhan Komersial', 'Solusi Penyimpanan dan Penanganan'],
      },
      {
        title: 'Peluang Infrastruktur & Konstruksi',
        items: ['Dukungan Konstruksi Stadion', 'Peluang Infrastruktur Jalan dan Jembatan', 'Dukungan Pengembangan Residensial', 'Proyek Bangunan Komersial', 'Peluang Terkait Pengembangan Data Centre', 'Koordinasi dan Pasokan Infrastruktur Umum'],
      },
    ],
    marketsLabel: 'Pasar',
    marketsTitle: 'Counterpart regional dan internasional di koridor perdagangan utama.',
    markets: ['Singapura', 'Malaysia', 'Thailand', 'China', 'UEA', 'Amerika Serikat', 'Indonesia', 'Vietnam', 'India', 'Timur Tengah'],
    contactLabel: 'Kontak',
    contactTitle: 'Pertanyaan korporat dan diskusi perdagangan strategis.',
    contactBody:
      'Sprintz Holdings Pte. Ltd. menyambut pertanyaan serius dari pembeli, pemasok, dan mitra bisnis di pasar internasional. Hubungi tim kami untuk ketersediaan produk, dukungan sourcing, koordinasi lintas negara, dan peluang perdagangan terstruktur.',
    officeTitle: 'Sprintz Holdings Pte. Ltd.',
    officeAddress: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
    officeEmail: 'Email: chanlp@sprintz.com.sg',
    formName: 'Nama Lengkap',
    formCompany: 'Perusahaan',
    formEmail: 'Email Bisnis',
    formSubject: 'Subjek',
    formMessage: 'Ceritakan kebutuhan Anda',
    formSubmit: 'Kirim Pertanyaan',
    whatsapp: 'WhatsApp',
  },
}

const cardImages = [
  'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
]

const supportedLanguages = [
  { key: 'en', label: 'EN' },
  { key: 'zh', label: '中文' },
  { key: 'ar', label: 'العربية' },
  { key: 'id', label: 'ID' },
]

export default function App() {
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  const isRTL = lang === 'ar'

  const businessLines = useMemo(
    () => t.businessLines.map((item, index) => ({ ...item, image: cardImages[index] })),
    [t]
  )

  return (
    <div className="site-shell" dir={isRTL ? 'rtl' : 'ltr'}>
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-wrap">
            <div className="brand-mark">S</div>
            <div>
              <div className="brand">{t.brand}</div>
              <div className="brand-sub">{t.brandSub}</div>
            </div>
          </div>

          <div className="topbar-right">
            <nav className="nav">
              <a href="#about">{t.navAbout}</a>
              <a href="#business-lines">{t.navBusiness}</a>
              <a href="#markets">{t.navMarkets}</a>
              <a href="#contact">{t.navContact}</a>
            </nav>

            <div className="lang-switcher" aria-label={t.languageLabel}>
              {supportedLanguages.map((item) => (
                <button
                  key={item.key}
                  className={item.key === lang ? 'lang-btn active' : 'lang-btn'}
                  onClick={() => setLang(item.key)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="section-label">{t.badge}</div>
            <h1>{t.heroTitle}</h1>
            <p className="lead">{t.heroBody}</p>
            <div className="button-row">
              <button className="btn btn-primary">{t.primaryCta}</button>
              <button className="btn btn-secondary">{t.secondaryCta}</button>
            </div>
          </div>

          <div className="photo-card">
            <img
              src="https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?auto=format&fit=crop&w=1400&q=80"
              alt="Global trade and logistics"
            />
            <div className="photo-card-caption">
              <div className="caption-small">SPRINTZ HOLDINGS</div>
              <div className="caption-title">Global trade, structured supply, and wider market reach.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div>
            <div className="section-label">{t.aboutLabel}</div>
            <h2>{t.aboutTitle}</h2>
            <p className="body-copy">{t.aboutBody}</p>

            <div className="panel">
              <div className="panel-title">{t.whyTitle}</div>
              <ul className="strength-list">
                {t.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="photo-card photo-card-about">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
              alt="Professional business meeting"
            />
            <div className="photo-card-caption">
              <div className="caption-small">SPRINTZ HOLDINGS</div>
              <div className="caption-title">Executive coordination for suppliers, projects, and institutional counterparties.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="business-lines" className="section business-lines-section">
        <div className="container">
          <div className="section-label">{t.businessLabel}</div>
          <h2 className="wide-heading">{t.businessTitle}</h2>
          <p className="body-copy wide-copy">{t.businessBody}</p>

          <div className="cards-grid">
            {businessLines.map((card) => (
              <article key={card.title} className="business-card">
                <div className="card-image-wrap">
                  <img src={card.image} alt={card.title} className="card-image" />
                </div>
                <div className="card-body">
                  <h3>{card.title}</h3>
                  <ul>
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="markets" className="section markets-section">
        <div className="container markets-grid">
          <div>
            <div className="section-label section-label-light">{t.marketsLabel}</div>
            <h2 className="light-heading">{t.marketsTitle}</h2>
          </div>

          <div className="market-tags">
            {t.markets.map((market) => (
              <span key={market}>{market}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <div className="section-label">{t.contactLabel}</div>
            <h2>{t.contactTitle}</h2>
            <p className="body-copy">{t.contactBody}</p>

            <div className="office-card">
              <div className="office-title">{t.officeTitle}</div>
              <div>{t.officeAddress}</div>
              <div>{t.officeEmail}</div>
            </div>
          </div>

          <div className="contact-form">
            <div className="form-grid">
              <input placeholder={t.formName} />
              <input placeholder={t.formCompany} />
              <input className="full" placeholder={t.formEmail} />
              <input className="full" placeholder={t.formSubject} />
              <textarea className="full" placeholder={t.formMessage} />
            </div>

            <div className="button-row">
              <button className="btn btn-primary">{t.formSubmit}</button>
              <button className="btn btn-secondary">{t.whatsapp}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
