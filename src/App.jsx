import { useMemo, useState } from 'react'

const translations = {
  en: {
    navAbout: 'About',
    navSectors: 'Sectors',
    navMarkets: 'Markets',
    navContact: 'Contact',
    heroBadge: 'Singapore-Based International Trading Corporation',
    heroTitle: 'Global Trade. Structured Supply. Professional Execution.',
    heroText:
      'Sprintz Holdings Pte. Ltd. supports cross-border trade with a disciplined corporate approach to sourcing, supply coordination, and international commercial execution.',
    primaryCta: 'Request a Quote',
    secondaryCta: 'Explore Capabilities',
    stat1Label: 'Positioning',
    stat1Value: 'International Trading',
    stat2Label: 'Focus',
    stat2Value: 'Supply & Procurement',
    stat3Label: 'Approach',
    stat3Value: 'Reliable Commercial Support',
    whyTitle: 'Why global partners work with Sprintz',
    strengths: [
      'Singapore-based trading platform with international outlook',
      'Cross-border sourcing and supplier coordination',
      'Commercial documentation and transaction support',
      'Responsive handling for buyers, suppliers, and partners',
      'Professional presentation for international counterparties',
      'Clear enquiry and quotation workflow'
    ],
    aboutEyebrow: 'About Sprintz',
    aboutTitle: 'A stronger corporate profile for serious cross-border business.',
    aboutText1:
      'Sprintz is positioned as a polished Singapore-headquartered trading company focused on credibility, responsiveness, and structured business execution.',
    aboutText2:
      'The site is designed to communicate trust, commercial discipline, and regional market connectivity while remaining broad enough to support multiple product and sector discussions.',
    sectorsEyebrow: 'Core Sectors',
    sectorsTitle: 'Capabilities presented with an international corporate tone.',
    sectors: [
      {
        title: 'Industrial Equipment & Automation',
        text: 'Support for factory systems, technical sourcing, industrial components, and procurement-led supply discussions.'
      },
      {
        title: 'Energy & Fuel Trading',
        text: 'Commercial coordination for structured energy transactions, supply alignment, and international trade engagement.'
      },
      {
        title: 'Agri & Commodity Supply',
        text: 'Trade support across agricultural commodities, bulk goods, and contract-based supply arrangements.'
      },
      {
        title: 'Strategic Trade Facilitation',
        text: 'Business matching, procurement coordination, document support, and execution oversight for regional opportunities.'
      }
    ],
    marketsEyebrow: 'Market Reach',
    marketsTitle: 'Built for regional and international counterparties.',
    markets: ['Singapore', 'China', 'Middle East', 'Southeast Asia', 'South Asia'],
    diffEyebrow: 'Corporate Differentiation',
    diffTitle: 'What the new site should communicate immediately.',
    diffs: [
      'Professional and credible',
      'Internationally oriented',
      'Commercially structured',
      'Easy to contact and engage',
      'Broad but disciplined in scope',
      'Suitable for buyers, suppliers, and partners'
    ],
    contactEyebrow: 'Contact',
    contactTitle: 'Start a business enquiry.',
    contactText:
      'Use one clean corporate enquiry form and a direct WhatsApp action for faster response and more professional lead handling.',
    address: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
    formName: 'Full Name',
    formCompany: 'Company',
    formEmail: 'Email Address',
    formSubject: 'Subject',
    formMessage: 'Tell us about your requirement',
    submit: 'Submit Enquiry',
    whatsapp: 'WhatsApp Us',
    formSuccess: 'Thank you. Your enquiry has been prepared in your email app.',
    formIncomplete: 'Please complete name, email, subject, and message.',
    floatingWhatsapp: 'Chat on WhatsApp',
    footerText: 'Sprintz Holdings Pte. Ltd. • International Trading Corporation • Singapore'
  },
  zh: {
    navAbout: '关于我们', navSectors: '业务领域', navMarkets: '市场', navContact: '联系',
    heroBadge: '新加坡国际贸易企业',
    heroTitle: '全球贸易 · 结构化供应 · 专业执行',
    heroText: 'Sprintz Holdings Pte. Ltd. 以严谨的企业化方式支持跨境采购、供应协调与国际商务执行。',
    primaryCta: '索取报价', secondaryCta: '查看业务能力',
    stat1Label: '定位', stat1Value: '国际贸易', stat2Label: '重点', stat2Value: '供应与采购', stat3Label: '方式', stat3Value: '可靠商务支持',
    whyTitle: '国际合作伙伴选择 Sprintz 的原因',
    strengths: ['立足新加坡，面向国际市场','跨境采购与供应商协调','商务文件与交易支持','快速响应买家、供应商与合作伙伴','适合国际客户的专业企业形象','清晰的询盘与报价流程'],
    aboutEyebrow: '关于 Sprintz',
    aboutTitle: '为严肃跨境业务建立更强的企业形象。',
    aboutText1: 'Sprintz 被定位为一家总部位于新加坡、注重信誉、效率与执行力的国际贸易公司。',
    aboutText2: '网站强调信任、商务纪律及区域市场连接能力，同时保持足够广泛，以支持多行业和多产品讨论。',
    sectorsEyebrow: '核心领域',
    sectorsTitle: '以国际企业语气展示业务能力。',
    sectors: [
      { title: '工业设备与自动化', text: '支持工厂系统、技术采购、工业零件及以采购为导向的供应合作。' },
      { title: '能源与燃料贸易', text: '支持结构化能源交易、供应对接与国际贸易合作。' },
      { title: '农业与大宗商品供应', text: '支持农产品、大宗货物及合同型供应安排。' },
      { title: '战略贸易促进', text: '提供商业对接、采购协调、文件支持及区域项目执行协助。' }
    ],
    marketsEyebrow: '市场覆盖', marketsTitle: '服务区域及国际合作伙伴。', markets: ['新加坡', '中国', '中东', '东南亚', '南亚'],
    diffEyebrow: '企业差异化', diffTitle: '网站应立即传达的核心印象。', diffs: ['专业可信','国际导向','商务结构清晰','便于联系合作','范围广但重点明确','适合买家、供应商与合作伙伴'],
    contactEyebrow: '联系', contactTitle: '开始商务询盘。', contactText: '使用简洁专业的企业询盘表单及 WhatsApp 入口，以提升响应效率和线索管理。',
    address: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
    formName: '姓名', formCompany: '公司', formEmail: '电子邮箱', formSubject: '主题', formMessage: '请说明您的需求', submit: '提交询盘', whatsapp: 'WhatsApp 联系',
    formSuccess: '感谢您，询盘内容已为您准备到电子邮件应用中。', formIncomplete: '请填写姓名、邮箱、主题和需求内容。', floatingWhatsapp: 'WhatsApp 即时联系',
    footerText: 'Sprintz Holdings Pte. Ltd. • 国际贸易企业 • 新加坡'
  },
  ar: {
    navAbout: 'من نحن', navSectors: 'القطاعات', navMarkets: 'الأسواق', navContact: 'اتصل بنا',
    heroBadge: 'شركة تجارة دولية مقرها سنغافورة',
    heroTitle: 'تجارة عالمية. توريد منظم. تنفيذ مهني.',
    heroText: 'تدعم Sprintz Holdings Pte. Ltd. التجارة العابرة للحدود من خلال نهج مؤسسي منضبط في التوريد وتنسيق الإمداد والتنفيذ التجاري الدولي.',
    primaryCta: 'طلب عرض سعر', secondaryCta: 'استكشاف القدرات',
    stat1Label: 'التموضع', stat1Value: 'تجارة دولية', stat2Label: 'التركيز', stat2Value: 'التوريد والمشتريات', stat3Label: 'النهج', stat3Value: 'دعم تجاري موثوق',
    whyTitle: 'لماذا يعمل الشركاء العالميون مع Sprintz',
    strengths: ['منصة تجارية مقرها سنغافورة ذات توجه دولي','تنسيق التوريد والموردين عبر الحدود','دعم المستندات التجارية والمعاملات','استجابة فعالة للمشترين والموردين والشركاء','حضور مهني ملائم للأطراف الدولية','مسار واضح للاستفسارات وطلبات الأسعار'],
    aboutEyebrow: 'حول Sprintz', aboutTitle: 'هوية مؤسسية أقوى للأعمال العابرة للحدود.',
    aboutText1: 'يتم تقديم Sprintz كشركة تجارية مقرها سنغافورة تركز على المصداقية وسرعة الاستجابة والتنفيذ المنظم.',
    aboutText2: 'صُمم الموقع ليعكس الثقة والانضباط التجاري والربط الإقليمي مع الحفاظ على مرونة كافية لدعم قطاعات ومنتجات متعددة.',
    sectorsEyebrow: 'القطاعات الأساسية', sectorsTitle: 'قدرات معروضة بنبرة مؤسسية دولية.',
    sectors: [
      { title: 'المعدات الصناعية والأتمتة', text: 'دعم أنظمة المصانع والتوريد الفني والمكونات الصناعية ومناقشات الإمداد القائمة على المشتريات.' },
      { title: 'تجارة الطاقة والوقود', text: 'تنسيق تجاري لصفقات الطاقة المنظمة ومواءمة الإمداد والتعامل التجاري الدولي.' },
      { title: 'توريد السلع الزراعية والمواد الأساسية', text: 'دعم تجاري للسلع الزراعية والبضائع السائبة واتفاقيات التوريد التعاقدية.' },
      { title: 'تسهيل التجارة الاستراتيجية', text: 'مواءمة الأعمال وتنسيق المشتريات ودعم المستندات والإشراف التنفيذي للفرص الإقليمية.' }
    ],
    marketsEyebrow: 'الانتشار السوقي', marketsTitle: 'مصمم للشركاء الإقليميين والدوليين.', markets: ['سنغافورة', 'الصين', 'الشرق الأوسط', 'جنوب شرق آسيا', 'جنوب آسيا'],
    diffEyebrow: 'التميّز المؤسسي', diffTitle: 'ما الذي يجب أن يوصله الموقع فوراً.', diffs: ['مهني وموثوق','توجه دولي','هيكل تجاري واضح','سهل التواصل والتفاعل','واسع لكن منضبط','مناسب للمشترين والموردين والشركاء'],
    contactEyebrow: 'التواصل', contactTitle: 'ابدأ استفساراً تجارياً.', contactText: 'استخدم نموذج استفسار مؤسسي واضح مع إجراء مباشر عبر واتساب لتحسين سرعة الاستجابة وإدارة العملاء المحتملين.',
    address: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
    formName: 'الاسم الكامل', formCompany: 'الشركة', formEmail: 'البريد الإلكتروني', formSubject: 'الموضوع', formMessage: 'أخبرنا بمتطلباتك', submit: 'إرسال الاستفسار', whatsapp: 'راسلنا عبر واتساب',
    formSuccess: 'شكراً لك. تم تجهيز استفسارك في تطبيق البريد الإلكتروني.', formIncomplete: 'يرجى إكمال الاسم والبريد الإلكتروني والموضوع والرسالة.', floatingWhatsapp: 'الدردشة عبر واتساب',
    footerText: 'Sprintz Holdings Pte. Ltd. • شركة تجارة دولية • سنغافورة'
  },
  id: {
    navAbout: 'Tentang', navSectors: 'Sektor', navMarkets: 'Pasar', navContact: 'Kontak',
    heroBadge: 'Korporasi Perdagangan Internasional Berbasis di Singapura',
    heroTitle: 'Perdagangan Global. Pasokan Terstruktur. Eksekusi Profesional.',
    heroText: 'Sprintz Holdings Pte. Ltd. mendukung perdagangan lintas negara dengan pendekatan korporat yang disiplin untuk sourcing, koordinasi pasokan, dan eksekusi komersial internasional.',
    primaryCta: 'Minta Penawaran', secondaryCta: 'Lihat Kapabilitas',
    stat1Label: 'Posisi', stat1Value: 'Perdagangan Internasional', stat2Label: 'Fokus', stat2Value: 'Pasokan & Pengadaan', stat3Label: 'Pendekatan', stat3Value: 'Dukungan Komersial Andal',
    whyTitle: 'Mengapa mitra global bekerja dengan Sprintz',
    strengths: ['Platform perdagangan berbasis Singapura dengan orientasi internasional','Koordinasi sourcing dan pemasok lintas negara','Dukungan dokumentasi dan transaksi komersial','Responsif untuk pembeli, pemasok, dan mitra','Presentasi profesional untuk rekanan internasional','Alur enquiry dan quotation yang jelas'],
    aboutEyebrow: 'Tentang Sprintz', aboutTitle: 'Profil korporat yang lebih kuat untuk bisnis lintas negara.',
    aboutText1: 'Sprintz diposisikan sebagai perusahaan perdagangan berkantor pusat di Singapura yang fokus pada kredibilitas, responsivitas, dan eksekusi bisnis yang terstruktur.',
    aboutText2: 'Situs ini dirancang untuk menyampaikan kepercayaan, disiplin komersial, dan konektivitas pasar regional sambil tetap cukup luas untuk mendukung berbagai sektor dan produk.',
    sectorsEyebrow: 'Sektor Inti', sectorsTitle: 'Kapabilitas dengan nada korporat internasional.',
    sectors: [
      { title: 'Peralatan Industri & Otomasi', text: 'Dukungan untuk sistem pabrik, sourcing teknis, komponen industri, dan diskusi pasokan berbasis pengadaan.' },
      { title: 'Perdagangan Energi & Bahan Bakar', text: 'Koordinasi komersial untuk transaksi energi terstruktur, penyelarasan pasokan, dan keterlibatan perdagangan internasional.' },
      { title: 'Pasokan Agrikultur & Komoditas', text: 'Dukungan perdagangan untuk komoditas pertanian, barang curah, dan pengaturan pasokan berbasis kontrak.' },
      { title: 'Fasilitasi Perdagangan Strategis', text: 'Pencocokan bisnis, koordinasi pengadaan, dukungan dokumen, dan pengawasan eksekusi untuk peluang regional.' }
    ],
    marketsEyebrow: 'Jangkauan Pasar', marketsTitle: 'Dibangun untuk rekanan regional dan internasional.', markets: ['Singapura', 'Tiongkok', 'Timur Tengah', 'Asia Tenggara', 'Asia Selatan'],
    diffEyebrow: 'Diferensiasi Korporat', diffTitle: 'Apa yang harus langsung dikomunikasikan situs ini.', diffs: ['Profesional dan kredibel','Berorientasi internasional','Terstruktur secara komersial','Mudah dihubungi dan diajak bekerja sama','Ruang lingkup luas namun terarah','Sesuai untuk pembeli, pemasok, dan mitra'],
    contactEyebrow: 'Kontak', contactTitle: 'Mulai enquiry bisnis.', contactText: 'Gunakan satu formulir enquiry korporat yang rapi dan tombol WhatsApp langsung untuk respons yang lebih cepat dan penanganan lead yang lebih profesional.',
    address: '22 Sin Ming Lane, #06-76, Midview City, Singapore 573969',
    formName: 'Nama Lengkap', formCompany: 'Perusahaan', formEmail: 'Alamat Email', formSubject: 'Subjek', formMessage: 'Ceritakan kebutuhan Anda', submit: 'Kirim Enquiry', whatsapp: 'WhatsApp Kami',
    formSuccess: 'Terima kasih. Enquiry Anda sudah disiapkan di aplikasi email.', formIncomplete: 'Mohon lengkapi nama, email, subjek, dan pesan.', floatingWhatsapp: 'Chat WhatsApp',
    footerText: 'Sprintz Holdings Pte. Ltd. • Korporasi Perdagangan Internasional • Singapura'
  }
}

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
  { code: 'ar', label: 'العربية' },
  { code: 'id', label: 'ID' }
]

export default function App() {
  const [lang, setLang] = useState('en')
  const [formData, setFormData] = useState({ name: '', company: '', email: '', subject: '', message: '' })
  const [formStatus, setFormStatus] = useState('idle')
  const t = useMemo(() => translations[lang], [lang])
  const isRtl = lang === 'ar'

  const handleChange = (field) => (event) => {
    setFormData((current) => ({ ...current, [field]: event.target.value }))
    if (formStatus !== 'idle') setFormStatus('idle')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const requiredFields = ['name', 'email', 'subject', 'message']
    const hasMissingFields = requiredFields.some((field) => !formData[field].trim())

    if (hasMissingFields) {
      setFormStatus('error')
      return
    }

    const emailSubject = encodeURIComponent(`[Sprintz Website] ${formData.subject.trim()}`)
    const emailBody = encodeURIComponent(
      `Name: ${formData.name.trim()}
Company: ${formData.company.trim() || '-'}
Email: ${formData.email.trim()}

Requirement:
${formData.message.trim()}`
    )

    window.location.href = `mailto:chanlp@sprintz.com.sg?cc=zannchan@gmail.com&subject=${emailSubject}&body=${emailBody}`
    setFormStatus('success')
  }

  return (
    <div className="site-shell" dir={isRtl ? 'rtl' : 'ltr'}>
      <header className="topbar">
        <div className="container nav-row">
          <a href="#home" className="brand">Sprintz Holdings</a>
          <nav className="nav-links">
            <a href="#about">{t.navAbout}</a>
            <a href="#sectors">{t.navSectors}</a>
            <a href="#markets">{t.navMarkets}</a>
            <a href="#contact">{t.navContact}</a>
          </nav>
          <div className="lang-switcher">
            {languages.map((item) => (
              <button
                key={item.code}
                className={item.code === lang ? 'lang-btn active' : 'lang-btn'}
                onClick={() => setLang(item.code)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <a
        href="https://wa.me/6583889168"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label={t.floatingWhatsapp}
      >
        <span className="whatsapp-icon">✆</span>
        <span>{t.floatingWhatsapp}</span>
      </a>

      <main>
        <section id="home" className="hero section-dark">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">{t.heroBadge}</div>
              <h1>{t.heroTitle}</h1>
              <p className="hero-text">{t.heroText}</p>
              <div className="cta-row">
                <a href="#contact" className="btn btn-primary">{t.primaryCta}</a>
                <a href="#sectors" className="btn btn-secondary">{t.secondaryCta}</a>
              </div>
              <div className="stats-grid">
                <div className="stat-card"><span>{t.stat1Label}</span><strong>{t.stat1Value}</strong></div>
                <div className="stat-card"><span>{t.stat2Label}</span><strong>{t.stat2Value}</strong></div>
                <div className="stat-card"><span>{t.stat3Label}</span><strong>{t.stat3Value}</strong></div>
              </div>
            </div>
            <aside className="panel-card">
              <div className="panel-title">{t.whyTitle}</div>
              <ul className="strength-list">
                {t.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section id="about" className="section section-light">
          <div className="container two-col">
            <div>
              <div className="section-eyebrow">{t.aboutEyebrow}</div>
              <h2>{t.aboutTitle}</h2>
            </div>
            <div className="body-copy">
              <p>{t.aboutText1}</p>
              <p>{t.aboutText2}</p>
            </div>
          </div>
        </section>

        <section id="sectors" className="section section-soft">
          <div className="container">
            <div className="section-head">
              <div className="section-eyebrow">{t.sectorsEyebrow}</div>
              <h2>{t.sectorsTitle}</h2>
            </div>
            <div className="card-grid four-up">
              {t.sectors.map((sector) => (
                <article key={sector.title} className="info-card">
                  <h3>{sector.title}</h3>
                  <p>{sector.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="markets" className="section section-light">
          <div className="container market-band">
            <div>
              <div className="section-eyebrow">{t.marketsEyebrow}</div>
              <h2>{t.marketsTitle}</h2>
            </div>
            <div className="pill-row">
              {t.markets.map((market) => (
                <span key={market} className="pill">{market}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark alt-dark">
          <div className="container two-col wide-gap">
            <div>
              <div className="section-eyebrow light">{t.diffEyebrow}</div>
              <h2>{t.diffTitle}</h2>
            </div>
            <div className="card-grid two-up">
              {t.diffs.map((item) => (
                <div key={item} className="dark-card">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section-light">
          <div className="container contact-grid">
            <div>
              <div className="section-eyebrow">{t.contactEyebrow}</div>
              <h2>{t.contactTitle}</h2>
              <p className="body-copy single">{t.contactText}</p>
              <div className="address-card">
                <strong>Sprintz Holdings Pte. Ltd.</strong>
                <span>{t.address}</span>
              </div>
            </div>
            <form className="form-card" onSubmit={handleSubmit}>
              <div className="form-grid">
                <input placeholder={t.formName} value={formData.name} onChange={handleChange('name')} />
                <input placeholder={t.formCompany} value={formData.company} onChange={handleChange('company')} />
                <input placeholder={t.formEmail} className="span-2" value={formData.email} onChange={handleChange('email')} />
                <input placeholder={t.formSubject} className="span-2" value={formData.subject} onChange={handleChange('subject')} />
                <textarea placeholder={t.formMessage} className="span-2" rows="7" value={formData.message} onChange={handleChange('message')} />
              </div>
              {formStatus === 'success' && <div className="form-feedback success">{t.formSuccess}</div>}
              {formStatus === 'error' && <div className="form-feedback error">{t.formIncomplete}</div>}
              <div className="cta-row">
                <button type="submit" className="btn btn-primary">{t.submit}</button>
                <a href="https://wa.me/6583889168" className="btn btn-secondary" target="_blank" rel="noreferrer">{t.whatsapp}</a>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-row">
          <span>{t.footerText}</span>
          <span>chanlp@sprintz.com.sg</span>
        </div>
      </footer>
    </div>
  )
}
